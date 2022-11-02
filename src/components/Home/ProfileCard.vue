<template>
  <Card class="w-80 h-48 px-4 py-4">
    <div class="w-1/4 my-auto">
      <img src="@/assets/dist/img/coffee.gif" alt="" />
    </div>
    <div class="w-3/5 h-full">
      <ul
        class="h-full flex flex-col justify-evenly font-rain dark:text-primary"
      >
        <li class="text-xl font-bold">WONG YUEN LAM</li>
        <li>... as Felix</li>
        <li>ID: C8763</li>
        <li>PRO: Coffee drinker</li>
      </ul>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/util/Card.vue";

export default {
  name: "ProfileCard",
  components: {
    Card,
  },
};
</script>
