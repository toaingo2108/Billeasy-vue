<template>
  <div :class="[`frame-2463`, className || ``]">
    <div class="frame-2462">
      <frame2443 :src="frame2443Props.src" />
      <div class="frame-2461">
        <div class="title-202 poppins-medium-ebony-14px">
          <span class="span-866 poppins-medium-ebony-14px">Message Subject</span>
        </div>
        <p class="title-203 poppins-normal-comet-13px">
          <span class="span-866 poppins-normal-comet-13px"
            >This is a text message. Lorem ipsum dolor sit amet consectetur. Risus sed pulvinar dolor odio id posuere
            odio mus. Nibh sed orci congue amet.</span
          >
        </p>
      </div>
    </div>
    <div class="icon-button-400"></div>
  </div>
</template>

<script>
import Frame2443 from "./Frame2443";
export default {
  name: "Frame2463",
  components: {
    Frame2443,
  },
  props: ["className", "frame2443Props"],
};
</script>

<style>
.frame-2463 {
  align-items: flex-start;
  display: flex;
  min-width: 576px;
}

.frame-2462 {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  height: 69px;
  min-width: 556px;
  position: relative;
}

.frame-2461 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 69px;
  width: 512px;
}

.title-202 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  width: 512px;
}

.title-203 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 40px;
  width: 512px;
}

.icon-button-400 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/close-1@2x.png);
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  width: 20px;
}

.frame-2463.frame-246 {
  margin-top: 23px;
}
</style>
