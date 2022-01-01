<template>
  <div
    class="max-w-screen-sm mx-auto border-t-2 border-b-2 border-dark border-dashed py-2"
  >
    <ul class="mx-auto max-w-md flex flex-row justify-center">
      <li class="text-3xl w-8" v-for="prop in emoticonProps" :key="prop.id">
        <h2
          :class="{ anim_popOut: prop.hasPopped }"
          v-on:animationend="removeClass(prop)"
        >
          {{ prop.icon }}
        </h2>
      </li>
    </ul>
  </div>
</template>

<script>
import core from "asciimoticon-core";

export default {
  name: "Divider",
  data() {
    return {
      dataReady: false,
      emoticonProps: [],
      curPropIndex: 0,
      popIntervalTime: 1000,
      emoticonSet: core.faces,
      curEmoticon: null,
    };
  },
  methods: {
    popOut() {
      this.emoticonProps[this.curPropIndex].icon =
        this.curEmoticon[this.curPropIndex];
      this.emoticonProps[this.curPropIndex].hasPopped = true;
    },
    popIn() {
      this.setEmoticon();
      this.curPropIndex = 0;
    },
    removeClass(prop) {
      prop.hasPopped = false;
    },
    setEmoticon() {
      const keys = Object.keys(this.emoticonSet);
      this.curEmoticon =
        this.emoticonSet[keys[(keys.length * Math.random()) << 0]].ascii;

      this.emoticonProps = [];
      for (let i = 0; i < this.curEmoticon.length; i++) {
        this.emoticonProps.push({
          id: i,
          icon: "•",
          hasPopped: false,
        });
      }
    },
  },
  created() {
    this.setEmoticon();
  },
  mounted() {
    let popInterval;
    setInterval(() => {
      clearInterval(popInterval);
      popInterval = setInterval(() => {
        this.popOut();
        if (this.curPropIndex < this.emoticonProps.length - 1) {
          this.curPropIndex++;
        } else {
          this.curPropIndex = 0;
          setTimeout(() => this.popIn(), this.popIntervalTime);
          clearInterval(popInterval);
        }
      }, this.popIntervalTime);
    }, this.emoticonProps.length * this.popIntervalTime * 2);
  },
};
</script>

<style scoped>
@keyframes popOut {
  0% {
    transform: scaleX(0.4);
  }
  25% {
    transform: scaleX(0.6);
  }
  50% {
    transform: scaleX(0.8);
  }
  100% {
    transform: scaleX(1);
  }
}

.anim_popOut {
  animation-name: popOut;
  animation-duration: 0.15s;
  animation-timing-function: linear;
}
</style>
