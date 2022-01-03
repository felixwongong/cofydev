<template>
  <Header />

  <router-view v-slot="{ Component, route }" class="my-16">
    <transition
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutUp"
      mode="out-in"
    >
      <div v-show="!route.meta.noHero">
        <Hero />
        <Divider />
      </div>
    </transition>
    <transition
      :enter-active-class="route.meta.enterClass"
      :leave-active-class="route.meta.leaveClass"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style></style>

<script>
import "animate.css";

import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Divider from "./components/Divider.vue";

export default {
  name: "app",
  components: {
    Header,
    Hero,
    Divider,
  },
};
</script>
