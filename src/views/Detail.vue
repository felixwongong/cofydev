<template>
  <TSection>
    {{ $route.params.id }}
  </TSection>
</template>

<script>
import TSection from "@/components/util/TitledSection.vue";

export default {
  name: "detail",
  components: {
    TSection,
  },
};
</script>
