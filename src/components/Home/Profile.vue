<template>
  <Container class="flex flex-col-reverse md:flex-row justify-between">
    <Content />
    <div class="py-6 md:hidden"></div>
    <Card />
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
