<template>
  <header :class="[`header`, className || ``]">
    <frame2443 :src="frame2443Props.src" />
    <div class="title-3 poppins-semi-bold-ebony-20px">
      <span class="span6chz4j poppins-semi-bold-ebony-20px">{{ spanText }}</span>
    </div>
  </header>
</template>

<script>
import Frame2443 from "./Frame2443";
export default {
  name: "Header18",
  components: {
    Frame2443,
  },
  props: ["spanText", "className", "frame2443Props"],
};
</script>

<style>
.header {
  align-items: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  gap: 12px;
  height: 28px;
  justify-content: flex-start;
  margin-left: 32px;
  margin-top: 24px;
  min-width: 180px;
  position: relative;
  width: auto;
}

.title-3 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  min-width: 140px;
  white-space: nowrap;
}

.header.header-1,
.header.header-2,
.header.header-3,
.header.header-5 {
  margin-left: unset;
  margin-top: unset;
}

.header.header-6 {
  background-color: unset;
  flex-direction: unset;
  flex-shrink: unset;
  justify-content: unset;
  margin-top: unset;
  width: unset;
}

.header.header-6 .title-3,
.header.header-7 .title-3,
.header.header-8 .title-3 {
  min-width: unset;
}

.header.header-7,
.header.header-8 {
  background-color: unset;
  flex-direction: unset;
  flex-shrink: unset;
  justify-content: unset;
  margin-left: unset;
  margin-top: unset;
  min-width: 179px;
  width: unset;
}
</style>
