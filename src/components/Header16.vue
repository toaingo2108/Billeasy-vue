<template>
  <div class="header-152">
    <frame2443 :src="frame2443Props.src" :className="frame2443Props.className" />
    <div class="title-162 poppins-semi-bold-ebony-20px">
      <span class="poppins-semi-bold-ebony-20px">Subscriptions</span>
    </div>
    <img
      class="info-11"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/info-14@2x.png"
      alt="Info"
    />
  </div>
</template>

<script>
import Frame2443 from "./Frame2443";
export default {
  name: "Header16",
  components: {
    Frame2443,
  },
  props: ["frame2443Props"],
};
</script>

<style>
.header-152,
.header-153 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  min-width: 210px;
  position: relative;
}

.title-162,
.title-163 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  min-width: 140px;
  white-space: nowrap;
}

.info-11,
.info-12 {
  align-self: center;
  height: 18px;
  width: 18px;
}
</style>
