<template>
  <div class="bg-light dark:bg-darkPrimary rounded-2xl">
    <img :src="url" class="object-cover h-48 w-96 rounded-2xl" />
  </div>
</template>

<script>
export default {
  name: "ImageContainer",
  props: ["url"],
};
</script>
