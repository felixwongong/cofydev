<template>
  <div v-if="dataReady">
    <Breadcrumb :path="path" />

    <Container width="max-w-max">
      <Card>
        <div class="bg-light dark:bg-darkPrimary rounded-2xl">
          <img :src="work.imageUrl" class="object-contain h-auto rounded-2xl" />
        </div>
      </Card>
    </Container>

    <Container width="max-w-screen-sm">
      <Card
        class="flex flex-col space-y-2 items-start py-2 px-6 font-rain font-semibold tracking-wider"
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
          <span>{{ work.date }}</span>
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
      <Card class="my-12 py-4 px-6 font-rain font-semibold tracking-wider">
        <h2 v-html="work.longDescription"></h2>
      </Card>
    </Container>
  </div>
</template>

<script>
import { doc, getDoc, db } from "@/includes/firebase.js";

import Breadcrumb from "@/components/util/Breadcrumb.vue";
import Card from "@/components/util/Card.vue";
import Container from "@/components/util/Container.vue";

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
  },

  async mounted() {
    const id = this.$route.params.id;
    const docRef = doc(db, "works", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      this.work = docSnap.data();
      this.path.push({ name: this.work.name });
      this.dataReady = true;
    }
  },
};
</script>
