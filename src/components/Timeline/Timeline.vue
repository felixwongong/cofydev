<template>
  <div style="overflow: auto" class="no-scroll">
    <nTimeline horizontal>
      <TimelineItem
        v-for="item in items"
        :title="item.title"
        :content="item.content"
        :time="item.time"
        :icon="item.icon"
        :key="item.title"
      />
    </nTimeline>
  </div>
</template>

<script>
import { nTimeline } from "naive-ui";
import TimelineItem from "./TimelineItem";

export default {
  components: { TimelineItem, nTimeline },
  data() {
    return {
      items: [
        {
          title: "SCI Student",
          content: "HKBU",
          time: "2019/09/01",
          icon: "fa-building",
        },
        {
          title: "Made my first game",
          content: "Processing",
          time: "2019 Semester 1",
          icon: "fa-dragon",
        },
      ],
    };
  },
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
