<template>
  <section>
    <Tile content="I make games, and cute web🕸️ (❁´◡`❁)" />
    <Profile />
    <TSection
      title="About Me"
      class="text-primary-dark tracking-wide font-semibold text-lg"
    >
      <p>
        A student boi who loves developing anything like games, website, artwork
        (aka pixel art n 3D model), music... and more!
      </p>
      <p>
        A human whose life sticks with programming, building blocks, and solving
        problems.
      </p>
      <p>A gamer hopes to wear NervGear and kills slime in fantasy world</p>
      <p>
        A 0.000000001% musician(?) who plays BAAAAASS and drum, taking cover
        once in a while
      </p>
    </TSection>
    <TSection title="Timeline">
      <Timeline />
    </TSection>
    <Portal />
  </section>
</template>

<script>
import Tile from "@/components/Tile.vue";
import Profile from "@/components/Home/Profile.vue";
import TSection from "@/components/util/TitledSection.vue";
import Portal from "@/views/Portal";
import Timeline from "@/components/Timeline.vue";

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
