<template>
  <div v-if="dataReady">
    <Breadcrumb :path="path" />

    <Container width="md:max-w-max">
      <Card>
        <div class="bg-light dark:bg-darkPrimary rounded-2xl">
          <img :src="work.image" class="object-contain h-auto rounded-2xl" />
        </div>
      </Card>
    </Container>

    <Container width="md:max-w-screen-sm">
      <Card
        class="flex flex-col space-y-2 items-start py-2 px-6 text-primary-dark tracking-wider"
      >
        <ul>
          <span>Tag:</span>
          <span class="px-1"></span>
          <span v-for="(tag, i) in work.tag" :key="i">
            <span v-if="i > 0">,</span>
            {{ tag }}
          </span>
        </ul>
        <ul>
          <span>Date:</span>
          <span class="px-1"></span>
          <span>{{ work.Date }}</span>
        </ul>
        <ul>
          <span>Devtime:</span>
          <span class="px-1"></span>
          <span>{{ work.devtime }}</span>
        </ul>
        <ul>
          <span>Status:</span>
          <span class="px-1"></span>
          <span>{{ work.status }}</span>
        </ul>
        <ul>
          <span>Stack:</span>
          <span class="px-1"></span>
          <span v-for="(stackEl, i) in work.Stack" :key="i">
            <span v-if="i > 0">,</span>
            {{ stackEl }}
          </span>
        </ul>
      </Card>
      <Card
        class="my-12 py-4 px-6 text-primary-dark font-semibold tracking-wider"
      >
        <Markdown :content="work.longDescription" class="font-normal" />
      </Card>
    </Container>
  </div>
</template>

<script>
import qs from "qs";

import Breadcrumb from "@/components/util/Breadcrumb.vue";
import Card from "@/components/util/Card.vue";
import Container from "@/components/util/Container.vue";
import Markdown from "@/components/util/Markdown.vue";

export default {
  name: "detail",
  data() {
    return {
      path: [
        {
          name: "Work",
          routeName: "work",
        },
      ],
      work: null,
      dataReady: false,
    };
  },
  components: {
    Breadcrumb,
    Card,
    Container,
    Markdown,
  },

  async mounted() {
    const id = this.$route.params.id;
    const url =
      process.env.BE_HOST || "https://portfolio-web-cms.herokuapp.com";

    const query = qs.stringify(
      {
        filters: {
          slug: {
            $eq: id,
          },
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    const works = await fetch(`${url}/api/works?${query}`);
    const worksJSON = await works.json();
    this.work = await worksJSON.returnData[0];

    this.path.push({
      name: this.work.name,
    });
    this.dataReady = true;
  },
};
</script>
