<template>
  <div :class="[`bottom-section-26`, className || ``]">
    <img
      class="top-border-29"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22d61f5c226309e8379e1/img/top-border-3@2x.png"
      alt="Top Border"
    />
    <buttons42 />
  </div>
</template>

<script>
import Buttons42 from "./Buttons42";
export default {
  name: "BottomSection14",
  components: {
    Buttons42,
  },
  props: ["className"],
};
</script>

<style>
.bottom-section-26 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  position: relative;
  width: 928px;
}

.top-border-29 {
  height: 1px;
  width: 928px;
}

.bottom-section-26.bottom-section-27 {
  margin-top: 32px;
}

.bottom-section-26.bottom-section-28 {
  margin-top: 20px;
}
</style>
