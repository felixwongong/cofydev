<template>
  <section>
    <Tile content="I make games, and cute web🕸️ (❁´◡`❁)" />
    <Profile />
    <TSection title="About Me" class="text-primary-dark tracking-wide text-lg">
      <p>A student who loves developing games, website, small artworks</p>
      <p>
        A coder whose life sticks with programming, building blocks, and solving
        problems.
      </p>
      <p>A gamer hopes to wear NervGear and I can't find the logout button</p>
      <p>
        A non-professional musician who plays BASS and drum, occasionally record
        covers
      </p>
    </TSection>
    <TSection title="Journey" class="h-full">
      <Timeline class="my-10" />
    </TSection>
    <Portal />
  </section>
</template>

<script>
import Tile from "@/components/Tile.vue";
import Profile from "@/components/Home/Profile.vue";
import TSection from "@/components/util/TitledSection.vue";
import Portal from "@/views/Portal";
import Timeline from "@/components/Timeline/Timeline.vue";

export default {
  name: "Home",
  components: {
    Portal,
    Profile,
    Tile,
    TSection,
    Timeline,
  },
};
</script>
