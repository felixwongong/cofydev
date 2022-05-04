<template>
  <container id="cv-container">
    <iframe
      :src="link"
      class="w-full h-full bg-white hidden md:block"
      allowfullscreen
    ></iframe>
    <Tile
      content="Document cannot be read in this device"
      class="block md:hidden my-10"
    ></Tile>
  </container>
</template>

<script>
import Container from "../components/util/Container.vue";
import Tile from "../components/Tile.vue";

export default {
  name: "CV",
  components: { Container, Tile },
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
