<template>
  <div
    class="flex flex-col justify-around md:items-start items-center md:space-y-0 space-y-10"
  >
    <div>
      <h3 class="font-rain text-2xl font-extrabold">
        A Game Developer, and Web Developer
      </h3>
      <h3 class="font-rain">...and a student who loves learning</h3>
    </div>
    <router-link
      :to="{ name: 'work' }"
      class="btn bg-blue hover:shadow-md transition-shadow"
      >My Work</router-link
    >
  </div>
</template>

<script>
export default {};
</script>
