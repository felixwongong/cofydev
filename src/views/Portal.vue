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
        fa="fab fa-youtube-square"
        href="https://www.youtube.com/channel/UCc0dsf3mXT45amTJbyvdI6w"
        hrefInfo="Some random streaming"
      />
      <LinkCard
        fa="fab fa-itch-io"
        href="https://yuenlfelix.itch.io/"
        hrefInfo="My Games"
      />
      <LinkCard
        fa="fas fa-laptop-code"
        href="https://cofy.dev/web-cv"
        hrefInfo="Web Development CV"
      />
      <LinkCard
        fa="fas fa-gavel"
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
