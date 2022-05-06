<template>
  <div>
    <Tile content="Links 🔗" />
    <Container width="md:max-w-screen-sm md:px-10">
      <ul class="w-full flex flex-col space-y-5">
        <Link linkName="Web CV" webLink="/web-cv" downloadLink="webcv.pdf" />
        <Link linkName="Game CV" webLink="/game-cv" downloadLink="gamecv.pdf" />
        <Link linkName="Grade Record" downloadLink="grade_record.pdf" />
      </ul>
    </Container>
  </div>
</template>

<script>
import Tile from "@/components/Tile.vue";
import Container from "@/components/util/Container.vue";
import Link from "@/components/Link.vue";

export default {
  name: "Linktree",
  components: { Link, Container, Tile },
  beforeCreate() {
    const accessCode = process.env.VUE_APP_LINKTREE_ACCESS;
    console.log(process.env);
    const { access } = this.$route.query;
    if (!access || access != accessCode) {
      const inputAccess = prompt("What is the access code?");
      if (!inputAccess || inputAccess != accessCode) {
        alert("Sad but you are not allowed to read this.");
        window.location = "/";
      }
    }
  },
};
</script>
