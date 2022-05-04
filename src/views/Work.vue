<template>
  <section v-if="dataReady">
    <Tile content="Showcase🔥🔥" />
    <TSection
      title="Works"
      class="text-primary-dark tracking-wide font-semibold text-lg"
    >
      <Container
        width="max-w-screen-sm"
        class="flex flex-row justify-evenly flex-wrap gap-x-6 gap-y-14"
      >
        <Card
          v-for="(work, i) in works"
          :key="i"
          :id="work.id"
          :imageUrl="work.image"
          :workName="work.name"
          :description="work.shortDescription"
          :workLinkName="work.linkName"
          :workLink="work.link"
          :slug="work.slug"
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

  data() {
    return {
      works: [],
      dataReady: false,
    };
  },

  async mounted() {
    const url =
      process.env.BE_HOST || "https://portfolio-web-cms.herokuapp.com";

    const works = await fetch(`${url}/api/works`);
    const worksJSON = await works.json();
    const worksData = await worksJSON.returnData;
    worksData.forEach((work) => {
      this.works.push(work);
    });

    this.dataReady = true;
  },
};
</script>
