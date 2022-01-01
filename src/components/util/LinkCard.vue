<template>
  <Card
    class="w-min my-2 py-2 px-5 cursor-key font-rain tracking-wide font-semibold"
    @mouseover="cardHover = true"
    @mouseleave="cardHover = false"
  >
    <div :class="{ anim_spin: cardHover }">
      <i class="fa-2x" :class="fa"></i>
    </div>
    <div class="w-10"></div>
    <a :href="href">{{ href }}</a>
  </Card>
</template>

<script>
import Card from "@/components/util/Card.vue";

export default {
  name: "LinkCard",
  data() {
    return {
      cardHover: false,
    };
  },
  props: ["href", "fa"],
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
