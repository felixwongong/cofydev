<template>
  <div
    class="max-w-lg mx-auto bg-light dark:bg-darkPrimary py-4 px-2 text-center text-primary-dark rounded-md"
  >
    {{ content }}
  </div>
</template>

<script>
export default {
  props: ["content"],
};
</script>
