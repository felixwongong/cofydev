<template>
  <nTimelineItem
    :title="title ? title : 'Default Title'"
    :content="content ? content : 'Default Content'"
    :time="
      new Date(time).toLocaleDateString()
        ? new Date(time).toLocaleDateString()
        : time
    "
    class="font-rain"
  >
    <template #icon>
      <n-icon>
        <font-awesome-icon :icon="'fa-solid ' + icon" size="lg" />
      </n-icon>
    </template>
  </nTimelineItem>
</template>
<script>
export default {
  name: "TimelineItem",
  props: ["icon", "title", "time", "content"],
};
</script>
