<template>
  <div class="frame-2495-3">
    <frame2494 :userAvatar="frame2494Props.userAvatar" />
    <chip :className="chipProps.className" />
    <div class="icon-button-394"></div>
  </div>
</template>

<script>
import Frame2494 from "./Frame2494";
import Chip from "./Chip";
export default {
  name: "Frame24952",
  components: {
    Frame2494,
    Chip,
  },
  props: ["frame2494Props", "chipProps"],
};
</script>

<style>
.frame-2495-3,
.frame-2495-4 {
  align-items: center;
  background-color: var(--whisper);
  border-radius: 20px;
  display: flex;
  height: 72px;
  margin-top: 24px;
  min-width: 600px;
  padding: 15px 16px;
  position: relative;
}

.icon-button-394,
.icon-button-395 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/dot-menu-14@2x.png);
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 84px;
  width: 20px;
}
</style>
