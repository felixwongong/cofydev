<template>
  <nav class="max-w-screen-sm mx-auto my-6 flex flex-row">
    <ul class="flex flex-row" v-for="(el, i) in path" :key="i">
      <img src="@/assets/dist/img/arrow.png" v-if="i != 0" />
      <h2 class="font-rain py-1 text-lg px-2">{{ el }}</h2>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: ["path"],
};
</script>
