<template>
  <div>
    <Header />
    <div class="w-screen h-16"></div>
    <div class="main">
      <router-view v-slot="{ Component, route }" class="my-16">
        <transition
          v-if="!route.meta.noHero"
          enter-active-class="animate__animated animate__fadeInDown"
          leave-active-class="animate__animated animate__fadeOutUp"
          mode="out-in"
        >
          <div v-show="!route.meta.noHero">
            <Hero v-show="!route.meta.noHeader" />
            <Divider />
          </div>
        </transition>
        <transition
          enter-active-class="animate__animated animate__fadeInUp animate__fast"
          leave-active-class="animate__animated animate__fadeOutDown animate__fast"
          name="fade"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <Footer />
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
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
import Divider from "./components/Divider.vue";

export default {
  name: "app",
  components: {
    Header,
    Hero,
    Divider,
    Footer,
  },
};
</script>
