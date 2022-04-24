<template>
  <div class="md" v-html="md2Html"></div>
</template>

<style scoped>
.md h1 {
  font-size: larger;
}

.md a {
  color: brown;
}
</style>

<script>
import { marked } from "marked";

export default {
  name: "Mark-down",
  props: ["content"],
  computed: {
    md2Html() {
      return marked(this.content);
    },
  },
};
</script>
