<template>
  <div style="overflow: auto">
    <nTimeline horizontal>
      <nTimelineItem content="Oops" />
      <nTimelineItem
        type="success"
        title="Success"
        content="Success content"
        time="2018-04-03 20:46"
      />
      <nTimelineItem
        type="error"
        content="Error content"
        time="2018-04-03 20:46"
      />
      <nTimelineItem
        type="warning"
        title="Warning"
        content="Warning content"
        time="2018-04-03 20:46"
      />
      <nTimelineItem
        type="info"
        title="Info"
        content="Info content"
        time="2018-04-03 20:46"
      />
    </nTimeline>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { nTimeline, nTimelineItem } from "naive-ui";

export default defineComponent({
  components: { nTimeline, nTimelineItem },
});
</script>
