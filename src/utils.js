export function parseTable(table) {
  const headers = [];
  return Array.from(table.rows).reduce(
    (data, row) => {
      const buffer = [];
      Array.from(row.children).forEach((col, colIndex) => {
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
