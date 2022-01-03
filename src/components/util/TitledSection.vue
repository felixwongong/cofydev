<template>
  <Container>
    <section>
      <h2 class="title my-4 text-dark mx-auto">{{ title }}</h2>
      <slot />
    </section>
  </Container>
</template>

<script>
import Container from "@/components/util/Container.vue";

export default {
  name: "TSection",
  props: ["title"],
  components: {
    Container,
  },
};
</script>
