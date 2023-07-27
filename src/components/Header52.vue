<template>
  <header class="header-85">
    <frame2443 :src="frame2443Props.src" />
    <div class="title-94 poppins-semi-bold-ebony-20px">
      <span class="poppins-semi-bold-ebony-20px">Schedule New Event</span>
    </div>
  </header>
</template>

<script>
import Frame2443 from "./Frame2443";
export default {
  name: "Header52",
  components: {
    Frame2443,
  },
  props: ["frame2443Props"],
};
</script>

<style>
.header-85,
.header-86 {
  align-items: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  gap: 12px;
  height: 28px;
  justify-content: flex-start;
  margin-right: 28px;
  margin-top: 24px;
  min-width: 244px;
  position: relative;
  width: auto;
}

.title-94,
.title-95 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  min-width: 204px;
  white-space: nowrap;
}
</style>
