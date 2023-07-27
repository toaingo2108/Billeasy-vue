<template>
  <div :class="[`bottom-section-16`, className || ``]">
    <img
      class="top-border-18"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/top-border-8@2x.png"
      alt="Top Border"
    />
    <buttons42 />
  </div>
</template>

<script>
import Buttons42 from "./Buttons42";
export default {
  name: "BottomSection3",
  components: {
    Buttons42,
  },
  props: ["className"],
};
</script>

<style>
.bottom-section-16 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 34px;
  position: relative;
  width: 400px;
}

.top-border-18 {
  height: 1px;
  width: 400px;
}

.bottom-section-16.bottom-section-18 {
  margin-top: 24px;
}
</style>
