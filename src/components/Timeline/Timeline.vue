<template>
  <div style="overflow: auto" class="scroll text-primary-dark">
    <nTimeline horizontal class="pb-7">
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
        {
          title: "Unity C#",
          content: "w/ GDTV",
          time: "2020 Summer",
          icon: "fa-brands fa-unity",
        },
        {
          title: "Java",
          content: "HKBU",
          time: "2020 Semester 1",
          icon: "fa-brands fa-java",
        },
        {
          title: "DS, Networking",
          content: "HKBU",
          time: "2020 Semester 2",
          icon: "fa-sitemap",
        },
        {
          title: "Web Dev",
          content: "Vue, Express",
          time: "2021 Semester 1",
          icon: "fab fa-node-js",
        },
        {
          title: "My first gamedev job!",
          content: "in eTeam",
          time: "2022 Summer",
          icon: "fa-regular fa-hand-lizard",
        },
      ],
    };
  },
};
</script>

<style scroped>
/* width */
.scroll::-webkit-scrollbar {
  width: 20px;
}

/* Track */
.scroll::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
.scroll::-webkit-scrollbar-thumb {
  background-color: #818b99;
  border: 3px solid transparent;
  border-radius: 9px;
  background-clip: content-box;
}
</style>
