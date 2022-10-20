<template>
  <nTimelineItem
    type="success"
    title="Success"
    content="Success content"
    time="2018-04-03 20:46"
  >
    <template #icon>
      <n-icon>
        <font-awesome-icon icon="fab fa-instagram" />
      </n-icon>
    </template>
  </nTimelineItem>
</template>
<script>
export default {
  name: "TimelineItem",
};
</script>
