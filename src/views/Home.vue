<template>
  <section>
    <Tile />
    <Profile />
    <TSection
      title="About Me"
      class="font-rain tracking-wide font-semibold text-lg"
    >
      <p>
        A student boi who love developing anything like games, website, artwork
        (aka pixel art n 3D model), music... and more!
      </p>
      <p>
        A people whose life sticks with programming, building blocks, and
        solving problems.
      </p>
      <p>
        The 0.000000001% musician(?) who plays BAAAAASS and drum, taking cover
        once in a while
      </p>
    </TSection>
    <TSection title="Timeline">
      <p class="font-rain tracking-wide font-semibold">
        The craftman is busy celebrating the New Year. Please wait a moment
      </p>
    </TSection>
    <TSection title="Portal">
      <LinkCard fa="fab fa-github" href="https://github.com/felixwongong" />
      <LinkCard
        fa="fab fa-instagram"
        href="https://www.instagram.com/vuse_code/"
      />
      <LinkCard
        fa="fab fa-youtube-square"
        href="https://www.youtube.com/channel/UCUfMLuCKG9XcHGjdqeMTcXw/about"
      />
      <LinkCard fa="fab fa-itch-io" href="https://yuenlfelix.itch.io/" />
    </TSection>
  </section>
</template>

<script>
import Tile from "@/components/Tile.vue";
import Profile from "@/components/Home/Profile.vue";
import TSection from "@/components/util/TitledSection.vue";
import LinkCard from "@/components/util/LinkCard.vue";

export default {
  name: "Home",
  components: {
    Profile,
    Tile,
    TSection,
    LinkCard,
  },
};
</script>
