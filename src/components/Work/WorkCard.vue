<template>
  <Card class="w-72 relative cursor-key shadow-2xl">
    <ImageContainer :url="imageUrl" />
    <div class="overlay rounded-2xl">
      <div
        class="h-full px-2 py-6 flex flex-col items-center justify-between text-dark"
      >
        <div class="flex flex-col items-center">
          <h2 class="font-extrabold py-2">{{ workName }}</h2>
          <p class="font-normal text-sm">
            {{ description }}
          </p>
        </div>
        <a :href="workLink" class="btn bg-secondary text-sm">{{
          workLinkName
        }}</a>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/util/Card.vue";
import ImageContainer from "@/components/util/ImageContainer.vue";

export default {
  name: "WorkCard",
  components: {
    Card,
    ImageContainer,
  },
  props: {
    imageUrl: {
      default: "https://pngtree.com/so/no/",
    },
    workName: {
      type: String,
      default: "Draggy Dog?",
    },
    description: {
      type: String,
    },
    workLinkName: {
      type: String,
      default: "Check it now!",
    },
    workLink: {
      require: true,
    },
  },
};
</script>
