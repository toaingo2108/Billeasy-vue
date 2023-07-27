<template>
  <div class="frame-2497-3">
    <frame2494 :userAvatar="frame2494Props.userAvatar" :className="frame2494Props.className" />
    <chip3 :className="chip3Props.className" />
    <div class="icon-button-398"></div>
  </div>
</template>

<script>
import Frame2494 from "./Frame2494";
import Chip3 from "./Chip3";
export default {
  name: "Frame24972",
  components: {
    Frame2494,
    Chip3,
  },
  props: ["frame2494Props", "chip3Props"],
};
</script>

<style>
.frame-2497-3,
.frame-2497-4 {
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

.icon-button-398,
.icon-button-399 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/dot-menu-14@2x.png);
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 72px;
  width: 20px;
}
</style>
