<template>
  <Container>
    <section>
      <div class="mx-auto my-8 md:my-4 md:block flex justify-center">
        <h2 class="title">{{ title }}</h2>
      </div>
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
