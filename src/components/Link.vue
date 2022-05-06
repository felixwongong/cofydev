<template>
  <div class="font-rain flex justify-between">
    <p class="inline-block">{{ linkName }}</p>
    <span class="flex justify-start space-x-4">
      <a v-if="webLink" class="text-purple-800 font-bold" :href="webLink"
        >View in Web</a
      >
      <a
        v-if="downloadLink"
        class="text-red-700 font-bold"
        :href="downloadLink"
        download
        >Download</a
      >
    </span>
  </div>
</template>
<script>
export default {
  name: "Link",
  props: {
    linkName: {
      type: String,
      default() {
        return "This is a name";
      },
    },
    webLink: {
      type: String,
    },
    downloadLink: {
      type: String,
    },
  },
};
</script>
