<template>
  <!-- https://stackoverflow.com/questions/1071927/how-can-i-force-overflow-hidden-to-not-use-up-my-padding-right-space -->
  <div ref="root" class="table">
    <div class="scroll-container">
      <table>
        <thead>
          <tr>
            <th
              v-for="(col, index) in state.thead"
              :key="index"
              :style="tdStyle"
              @click="sortTable(col.innerText)"
            >
              {{ col.innerHTML }}
              <span v-if="col.innerText === state.sortColumn">
                {{ state.ascending ? "↑" : "↓" }}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in state.tbody" :key="index">
            <td
              v-for="(col, index) in row"
              v-html="col.innerHTML"
              :style="tdStyle"
              :key="index"
            ></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { parseTable } from "../utils";
import { html as readmeHTML } from "../../README.md";
import { ref, reactive, computed, onMounted } from "vue";

export default {
  setup(props, context) {
    const root = ref(null);
    const scrollContainer = ref(null);

    const state = reactive({
      thead: [],
      tbody: [],
      ascending: false,
      sortColumn: null,
    });

    const getRef = () => root.value;

    const getTable = () => {
      return new Promise((resolve) => {
        const element = document.createElement("template");
        element.innerHTML = readmeHTML;
        window.requestAnimationFrame(() => {
          const table = element.content.querySelector("table");
          resolve(parseTable(table));
        });
      });
    };

    const sortTable = (col, { ascending = true } = {}) => {
      if (state.sortColumn === col) {
        state.ascending = !state.ascending;
      } else {
        state.ascending = ascending;
        state.sortColumn = col;
      }
      state.tbody.sort((a, b) => {
        if (a[col].innerText > b[col].innerText) {
          return state.ascending ? 1 : -1;
        } else if (a[col].innerText < b[col].innerText) {
          return state.ascending ? -1 : 1;
        }
        return 0;
      });
    };

    const sortByIndex = (index, opts) =>
      sortTable(state.thead[index].innerText, opts);

    const tdStyle = computed(() => {
      return { width: `${100 / state.thead.length}%` };
    });

    onMounted(async () => {
      const table = await getTable();
      state.thead = table.thead;
      state.tbody = table.tbody;
      sortByIndex(1, { ascending: false });
      context.emit("ready", { length: state.tbody.length });
    });

    return { root, scrollContainer, state, getRef, sortTable, tdStyle };
  },
};
</script>

<style lang="scss" scoped>
// https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md

@import "../css/variables";

$background-color: darken($color-secondary, 3.75%);

.table {
  padding: 16rem;
  // border-radius: 16rem;
  scroll-margin-top: inherit;
  border-radius: 0 0 16rem 16rem;
  background-color: $background-color;
  box-shadow: 0 0 16rem rgba(white, 0.1);
}

// https://stackoverflow.com/a/48084076/4106263
// https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior
.scroll-container {
  height: 840rem;
  overflow-x: auto;
  overflow-y: auto;
  overscroll-behavior: contain;

  // https://gist.github.com/adi518/4d6f9db343e42d5d5da98f317d0e740a
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    border-radius: 16rem;
  }

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  // https://css-tricks.com/almanac/properties/s/scrollbar/
  &::-webkit-scrollbar {
    width: 6rem;
    height: 6rem;
    background-color: var(--color-secondary);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
  }
}

table {
  width: 100%;
  position: relative;
  border-collapse: collapse;
}

tr {
  border-spacing: 0;
  transition: background-color var(--transition-duration);
}

th,
td {
  min-width: 256rem;
  padding-left: 16rem;
  padding-right: 16rem;
  padding-bottom: 16rem; // pixel-perfect padding
}

// https://css-tricks.com/position-sticky-and-table-headers/
th {
  top: 0; // required for stickiness
  cursor: pointer;
  text-align: left;
  position: sticky;
  user-select: none;
  background-color: $background-color;
  transition: color var(--transition-duration);

  &:hover {
    color: var(--color-hover);
  }
}

td {
  padding-top: 12rem;

  &:first-child {
    border-top-left-radius: 16rem;
    border-bottom-left-radius: 16rem;

    :deep(img) {
      margin-right: 1ch;
    }
  }

  &:last-child {
    border-top-right-radius: 16rem;
    border-bottom-right-radius: 16rem;
  }

  :deep(img) {
    vertical-align: middle;
  }
}

tbody {
  tr {
    background-image: linear-gradient(
      180deg,
      rgba(139, 122, 122, 0.025) 0,
      transparent 50%
    );

    &:hover {
      color: var(--color-hover);
      background-color: rgba(black, 0.5);

      :deep(a) {
        color: inherit;
      }
    }
  }
}
</style>
