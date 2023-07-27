<template>
  <div :class="[`bottom-section-35`, className || ``]">
    <img
      class="top-border-39"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/top-border-3@2x.png"
      alt="Top Border"
    />
    <buttons42 />
  </div>
</template>

<script>
import Buttons42 from "./Buttons42";
export default {
  name: "BottomSection32",
  components: {
    Buttons42,
  },
  props: ["className"],
};
</script>

<style>
.bottom-section-35 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 30px;
  position: relative;
  width: 512px;
}

.top-border-39 {
  height: 1px;
  width: 512px;
}

.bottom-section-35.bottom-section-36,
.bottom-section-35.bottom-section-37 {
  margin-top: 26px;
}

.bottom-section-35.bottom-section-38 {
  margin-top: 24px;
}
</style>
