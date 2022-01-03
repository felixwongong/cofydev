<template>
  <Header />

  <div class="main">
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
        enter-active-class="animate__animated animate__fadeInUp"
        leave-active-class="animate__animated animate__fadeOutDown"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
.main {
  min-height: 100.1vh;
}
</style>

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
