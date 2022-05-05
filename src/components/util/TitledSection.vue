<template>
  <Container>
    <div>
      <w-flex class="smd-justify-center mxa my8 mdd-my4 smd-block">
        <h2 class="title">{{ title }}</h2>
      </w-flex>
      <slot />
    </div>
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
