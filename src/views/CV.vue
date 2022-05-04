<template>
  <container id="cv-container">
    <iframe :src="link" class="w-full h-full" allowfullscreen></iframe>
  </container>
</template>

<script>
import Container from "../components/util/Container.vue";

export default {
  name: "CV",
  components: { Container },
  props: ["link"],
};
</script>

<style scoped>
#cv-container {
  height: 100vh;
  margin-top: 0.25rem !important;
  margin-bottom: 0px !important;
}
</style>
