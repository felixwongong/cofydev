<template>
  <div
    class="fixed top-0 left-0 w-screen h-16 bg-light dark:bg-darkDark shadow-lg z-50"
  >
    <nav class="max-w-screen-md h-full mx-auto">
      <div class="h-full flex flex-row justify-between items-center px-8">
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
        <ul class="flex flex-row justify-evenly items-center">
          <li class="mx-3 text-primary-dark tracking-wider">
            <router-link
              :to="{ name: 'work' }"
              class="py-0.5 border-transparent border-b-2 hover:border-gray-600"
              >Work
            </router-link>
          </li>
          <li class="mx-3 text-primary-dark tracking-wider">
            <router-link
              :to="{ name: 'nocontent' }"
              class="py-0.5 border-transparent border-b-2 hover:border-gray-600"
              >Post</router-link
            >
          </li>
        </ul>
        <div class="w-10">
          <img
            src="@/assets/dist/img/sun.gif"
            class="object object-scale-down dark:bg-secondary rounded p-1"
            @click="toggleNightMode"
            v-if="!isNightMode"
          />
          <img
            src="@/assets/dist/img/moon.gif"
            class="object object-scale-down dark:bg-secondary rounded p-1"
            @click="toggleNightMode"
            v-else
          />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isNightMode: false,
    };
  },
  methods: {
    toggleNightMode() {
      this.isNightMode = !this.isNightMode;
      document.querySelector("html").classList.toggle("dark");
    },
  },
};
</script>
