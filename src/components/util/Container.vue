<template>
  <section class="mxa my12 max-w-sm" :class="width">
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
