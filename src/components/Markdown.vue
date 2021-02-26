<template>
  <div class="markdown" v-html="markdown"></div>
</template>

<script>
import Prism from "prismjs";

export default {
  props: {
    markdown: {
      type: String,
    },
  },
  mounted() {
    setTimeout(Prism.highlightAll);
  },
};
</script>
