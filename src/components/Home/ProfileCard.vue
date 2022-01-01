<template>
  <Card class="w-80 h-48 px-4 py-4">
    <div class="w-1/4"><img src="@/assets/dist/img/coffee.png" alt="" /></div>
    <div class="w-3/5 h-full">
      <ul class="h-full flex flex-col justify-evenly">
        <li class="font-rain text-xl font-bold">WONG YUEN LAM</li>
        <li class="font-rain">... as Felix</li>
        <li class="font-rain">ID: C8763</li>
        <li class="font-rain">PRO: The Magic Swordman</li>
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
