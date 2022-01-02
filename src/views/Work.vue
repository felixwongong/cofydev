<template>
  <section class="py-12">
    <Tile />
    <TSection
      title="Works"
      class="font-rain tracking-wide font-semibold text-lg"
    >
      <Container
        width="max-w-screen-sm"
        class="flex flex-row justify-evenly flex-wrap gap-x-6 gap-y-14"
      >
        <Card
          imageUrl="https://img.itch.zone/aW1nLzY2NDE0NDEuanBn/347x500/D5lOac.jpg"
          workName="Space Invader"
          description="Remake of the first game I made in Unity"
          workLinkName="Be A Pilot Now!"
          workLink="https://yuenlfelix.itch.io/space-invader"
        />
        <Card
          imageUrl="https://img.itch.zone/aW1nLzY4NTgzMTEuanBn/347x500/qHYplD.jpg"
          workName="GroWhaos"
          description="Brackeys 2021.2 Game Jam"
          workLinkName="LET THERE BE CHAOS!"
          workLink="https://yuenlfelix.itch.io/brackeys-game-jam-growhaos"
        />
      </Container>
    </TSection>
  </section>
</template>

<script>
import Tile from "@/components/Tile.vue";
import TSection from "@/components/util/TitledSection.vue";
import Card from "@/components/Work/WorkCard.vue";
import Container from "@/components/util/Container.vue";

export default {
  name: "Work",
  components: {
    Tile,
    TSection,
    Card,
    Container,
  },
};
</script>
