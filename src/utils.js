export function parseTable(table) {
  const headers = [];
  return Array.from(table.rows).reduce(
    (data, row) => {
      const buffer = [];
      Array.from(row.children)
        .map(mapCol)
        .forEach((col, colIndex) => {
          if (col.tagName.toLowerCase() === "th") {
            data.thead.push(col);
            if (colIndex === getTableHeadChildren(table).length - 1) {
              headers.push(...mapHeaders(table)); // https://www.samanthaming.com/tidbits/49-2-ways-to-merge-arrays/#merge-array-with-push-%F0%9F%A4%94
            }
          } else if (table.tHead.rows.length === 0) {
            data.tbody.push(col);
          } else {
            buffer.push(col);
            if (buffer.length === row.children.length) {
              data.tbody.push(mapRow(headers, buffer));
              buffer.length = 0;
            }
          }
        });
      return data;
    },
    { thead: [], tbody: [] }
  );
}

function getTableHeadChildren(table) {
  return Array.from(table.tHead.rows[0].children);
}

function mapHeaders(table) {
  return getTableHeadChildren(table).map((col) => col.innerText);
}

function mapRow(headers, row) {
  return headers.reduce(
    (cols, col, index) => ({ ...cols, [col]: row[index] }),
    {}
  );
}

function mapCol(col) {
  const { tagName, innerText, innerHTML } = col;
  return { tagName, innerText, innerHTML };
}

// https://developer.mozilla.org/en-US/docs/Web/API/Streams_API/Using_readable_streams
function createStreamController(reader) {
  return {
    start(controller) {
      return pump();
      async function pump() {
        const { done, value } = await reader.read();
        if (done) {
          controller.close();
          return;
        }
        controller.enqueue(value);
        return pump();
      }
    },
  };
}

export async function fetchStream(...args) {
  try {
    const response = await window.fetch(...args);
    const reader = response.body.getReader();
    const controller = createStreamController(reader);
    const stream = new ReadableStream(controller);
    const blob = await new Response(stream).blob();
    const data = await blob.text();
    return data;
  } catch (err) {
    console.error(err);
  }
}

const DAY_MS = 8.64e7;

// https://www.sohamkamani.com/blog/javascript-localstorage-with-ttl-expiry/
export function setLocalStorage(key, value, ttl = DAY_MS) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getLocalStorage(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}
