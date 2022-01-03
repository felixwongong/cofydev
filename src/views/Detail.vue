<template>
  <div v-if="dataReady">
    <Breadcrumb :path="path" />

    <Container width="max-w-max">
      <Card>
        <div class="bg-light rounded-2xl">
          <img :src="work.imageUrl" class="object-contain h-auto rounded-2xl" />
        </div>
      </Card>
    </Container>

    <Container width="max-w-screen-sm">
      <Card
        class="flex flex-col space-y-2 items-start py-2 px-6 font-rain font-semibold tracking-wider"
      >
        <ul>
          Tag:
        </ul>
        <ul>
          Date:
        </ul>
        <ul>
          Duration:
        </ul>
        <ul>
          Status:
        </ul>
        <ul>
          Stack:
        </ul>
      </Card>
      <Card class="my-12 py-4 px-6 font-rain font-semibold tracking-wider">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        laborum ab! Nemo perferendis officia, quae omnis dicta cum recusandae
        incidunt doloribus quibusdam ut excepturi quis, officiis distinctio.
        Architecto, modi laborum!
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
      path: ["Work"],
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
    const docRef = doc(db, "work", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      this.work = docSnap.data();
      this.path.push(this.work.name);
      this.dataReady = true;
    } else {
      console.log("No such document!");
    }
  },
};
</script>
