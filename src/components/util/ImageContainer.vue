<template>
  <div class="bg-light">
    <img :src="url" class="object-cover h-48 w-96 rounded-2xl" />
  </div>
</template>

<script>
export default {
  name: "ImageContainer",
  props: ["url"],
};
</script>
