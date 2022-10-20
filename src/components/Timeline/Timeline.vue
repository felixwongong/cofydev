<template>
  <div style="overflow: auto" class="no-scroll">
    <nTimeline horizontal>
      <TimelineItem />
      <TimelineItem />
    </nTimeline>
  </div>
</template>

<script>
import { nTimeline } from "naive-ui";
import TimelineItem from "./TimelineItem";

export default {
  components: { TimelineItem, nTimeline },
};
</script>

<style scroped>
.no-scroll::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
