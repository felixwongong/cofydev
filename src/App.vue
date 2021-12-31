<template>
  <Header />
  <Hero />
  <Divider />
</template>

<style></style>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Divider from "./components/Divider.vue";

export default {
  name: "app",
  components: {
    Header,
    Hero,
    Divider,
  },
};
</script>
