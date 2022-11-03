<template>
  <TSection title="Portal">
    <div class="flex flex-row flex-wrap md:w-3/4">
      <LinkCard
        fa="fab fa-github"
        href="https://github.com/felixwongong"
        hrefInfo="All the project repo"
      />
      <LinkCard
        fa="fab fa-instagram"
        href="https://www.instagram.com/cofylife/"
        hrefInfo="Come and check my post!"
      />
      <LinkCard
        fa="fab fa-youtube"
        href="https://www.youtube.com/channel/UCA09RZ_b5ojSlr-5Jnvw3iA"
        hrefInfo="Some random videos"
      />
      <LinkCard
        fa="fab fa-itch-io"
        href="https://yuenlfelix.itch.io/"
        hrefInfo="My Games"
      />
      <LinkCard
        fa="fab fa-node-js"
        href="https://cofy.dev/web-cv"
        hrefInfo="Web Development CV"
      />
      <LinkCard
        fa="fa-regular fa-hand-lizard"
        href="https://cofy.dev/game-cv"
        hrefInfo="Game Development CV"
      />
    </div>
  </TSection>
</template>
<script>
import LinkCard from "@/components/util/LinkCard.vue";
import TSection from "@/components/util/TitledSection.vue";

export default {
  name: "Portal",
  components: { LinkCard, TSection },
};
</script>
