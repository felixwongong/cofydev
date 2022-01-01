<template>
  <Header />
  <Hero />
  <Divider />

  <router-view v-slot="{ Component }">
    <transition
      enter-active-class="animate__animated animate__fadeInUp"
      leave-active-class="animate__animated animate__fadeOutDown"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
/* .fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
} */
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
