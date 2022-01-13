<template>
  <Container
    class="flex flex-col space-y-2 items-center py-6 text-primary-dark font-thin"
  >
    <div>
      <router-link
        :to="{ name: 'home' }"
        class="text-primary-dark font-bold text-lg antialiased flex flex-row items-center dark:bg-darkSecondary px-2 rounded-md"
      >
        <div class="w-8">
          <img
            src="@/assets/dist/img/coffee.gif"
            class="object object-scale-down my-auto"
          />
        </div>
        <h2>Felix Wong</h2>
      </router-link>
    </div>
    <router-link :to="{ name: 'credit' }">Credit</router-link>
    <div>Created by Felix, Wong Yuen Lam</div>
  </Container>
</template>

<script>
import Container from "@/components/util/Container.vue";

export default {
  name: "Footer",
  components: {
    Container,
  },
};
</script>
