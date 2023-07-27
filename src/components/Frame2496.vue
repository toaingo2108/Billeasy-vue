<template>
  <div :class="[`frame-2496`, className || ``]">
    <frame2494 :userAvatar="frame2494Props.userAvatar" :className="frame2494Props.className" />
    <frame2514 />
    <chip2 />
    <div class="icon-button-342"></div>
  </div>
</template>

<script>
import Frame2494 from "./Frame2494";
import Frame2514 from "./Frame2514";
import Chip2 from "./Chip2";
export default {
  name: "Frame2496",
  components: {
    Frame2494,
    Frame2514,
    Chip2,
  },
  props: ["className", "frame2494Props"],
};
</script>

<style>
.frame-2496 {
  align-items: center;
  background-color: var(--whisper);
  border-radius: 20px;
  display: flex;
  height: 72px;
  min-width: 1104px;
  padding: 15px 16px;
  position: relative;
}

.icon-button-342 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/dot-menu-14@2x.png);
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 130px;
  width: 20px;
}

.frame-2496.frame-2496-1,
.frame-2496.frame-2496-2 {
  left: 48px;
  position: absolute;
  top: 295px;
}
</style>
