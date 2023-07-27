<template>
  <div class="header-56">
    <frame2443 :src="frame2443Props.src" />
    <div class="title-62 poppins-semi-bold-ebony-20px"><span class="poppins-semi-bold-ebony-20px">Other</span></div>
  </div>
</template>

<script>
import Frame2443 from "./Frame2443";
export default {
  name: "Header7",
  components: {
    Frame2443,
  },
  props: ["frame2443Props"],
};
</script>

<style>
.header-56,
.header-57 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  min-width: 98px;
  position: relative;
}

.title-62,
.title-63 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}
</style>
