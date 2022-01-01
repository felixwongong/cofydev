<template>
  <Container>
    <section class="flex flex-col-reverse md:flex-row justify-between">
      <Content />
      <Card />
    </section>
  </Container>
</template>

<script>
import Container from "@/components/util/Container.vue";

import Content from "./ProfileContent.vue";
import Card from "./ProfileCard.vue";

export default {
  name: "Profile",
  components: {
    Container,
    Content,
    Card,
  },
};
</script>
