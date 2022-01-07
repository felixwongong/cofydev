<template>
  <section class="mx-auto my-14 max-w-xs" :class="width">
    <slot />
  </section>
</template>

<script>
export default {
  name: "Container",
  props: {
    width: {
      default: "md:max-w-screen-md",
    },
  },
};
</script>
