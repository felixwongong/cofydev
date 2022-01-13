<template>
  <nav class="max-w-screen-sm mx-auto my-6 flex flex-row">
    <ul class="flex flex-row" v-for="(el, i) in path" :key="i">
      <img src="@/assets/dist/img/arrow.png" v-if="i != 0" />
      <h2
        class="text-primary-dark my-1 text-lg mx-2 font-bold"
        v-if="!el.routeName"
      >
        {{ el.name }}
      </h2>
      <router-link
        class="text-primary-dark my-auto mx-2"
        :to="{ name: el.routeName }"
        v-else
        >{{ el.name }}</router-link
      >
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: ["path"],
};
</script>
