<template>
  <Card
    class="w-max my-2 py-2 px-5 text-primary-dark tracking-wide font-semibold link-card"
    id=""
    @mouseover="cardHover = true"
    @mouseleave="cardHover = false"
  >
    <div>
      <font-awesome-icon size="2x" :icon="fa" :bounce="cardHover" />
    </div>
    <div class="w-7"></div>
    <a :href="href" target="_blank" class="my-auto">{{ hrefInfo }}</a>
  </Card>
</template>

<style scoped>
.link-card {
  margin-right: 0.5rem;
}
</style>

<script>
import Card from "@/components/util/Card.vue";

export default {
  name: "LinkCard",
  data() {
    return {
      cardHover: false,
    };
  },
  props: ["href", "fa", "hrefInfo"],
  components: {
    Card,
  },
};
</script>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.anim_spin {
  animation-name: spin;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
</style>
