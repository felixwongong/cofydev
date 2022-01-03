<template>
  <section v-if="dataReady">
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
          v-for="(work, i) in works"
          :key="i"
          :id="work.id"
          :imageUrl="work.imageUrl"
          :workName="work.name"
          :description="work.shortDescription"
          :workLinkName="work.linkName"
          :workLink="work.link"
        />
      </Container>
    </TSection>
  </section>
</template>

<script>
import { workCollection, getDocs } from "@/includes/firebase.js";

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

  data() {
    return {
      works: [],
      dataReady: false,
    };
  },

  async mounted() {
    const workDoc = await getDocs(workCollection);
    workDoc.forEach((doc) => {
      this.works.push({ ...doc.data(), id: doc.id });
    });
    this.dataReady = true;
  },
};
</script>
