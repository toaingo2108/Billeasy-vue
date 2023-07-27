<template>
  <div class="frame-2496-3">
    <frame2494 :userAvatar="frame2494Props.userAvatar" :className="frame2494Props.className" />
    <chip2 :className="chip2Props.className" />
    <div class="icon-button-396"></div>
  </div>
</template>

<script>
import Frame2494 from "./Frame2494";
import Chip2 from "./Chip2";
export default {
  name: "Frame24962",
  components: {
    Frame2494,
    Chip2,
  },
  props: ["frame2494Props", "chip2Props"],
};
</script>

<style>
.frame-2496-3,
.frame-2496-4 {
  align-items: center;
  background-color: var(--whisper);
  border-radius: 20px;
  display: flex;
  height: 72px;
  margin-top: 6px;
  min-width: 600px;
  padding: 15px 16px;
  position: relative;
}

.icon-button-396,
.icon-button-397 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/dot-menu-14@2x.png);
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 90px;
  width: 20px;
}
</style>
