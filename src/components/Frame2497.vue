<template>
  <div :class="[`frame-2497`, className || ``]">
    <frame2494 :userAvatar="frame2494Props.userAvatar" :className="frame2494Props.className" />
    <frame2514 />
    <chip3 />
    <div class="icon-button-347"></div>
  </div>
</template>

<script>
import Frame2494 from "./Frame2494";
import Frame2514 from "./Frame2514";
import Chip3 from "./Chip3";
export default {
  name: "Frame2497",
  components: {
    Frame2494,
    Frame2514,
    Chip3,
  },
  props: ["className", "frame2494Props"],
};
</script>

<style>
.frame-2497 {
  align-items: center;
  background-color: var(--whisper);
  border-radius: 20px;
  display: flex;
  height: 72px;
  min-width: 1104px;
  padding: 15px 16px;
  position: relative;
}

.icon-button-347 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/dot-menu-14@2x.png);
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 112px;
  width: 20px;
}

.frame-2497.frame-2497-1,
.frame-2497.frame-2497-2 {
  left: 48px;
  position: absolute;
  top: 373px;
}
</style>
