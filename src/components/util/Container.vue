<template>
  <section class="mx-auto my-14" :class="width">
    <slot />
  </section>
</template>

<script>
export default {
  name: "Container",
  props: {
    width: {
      default: "max-w-screen-md",
    },
  },
};
</script>
