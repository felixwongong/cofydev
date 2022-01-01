<template>
  <section class="py-12">
    <Tile />
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
  </section>
</template>

<script>
import Tile from "@/components/Tile.vue";
import TSection from "@/components/util/TitledSection.vue";

export default {
  name: "Work",
  components: {
    Tile,
    TSection,
  },
};
</script>
