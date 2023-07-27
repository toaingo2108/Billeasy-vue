<template>
  <div :class="[`bottom-section-49`, className || ``]">
    <img
      class="top-border-54"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22c01612f046d106ab35c/img/top-border-1@2x.png"
      alt="Top Border"
    />
    <div class="buttons-47">
      <button222 :className="button22Props.className" />
      <div class="button-219">
        <img
          class="refresh-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22c01612f046d106ab35c/img/refresh-1@2x.png"
          alt="Refresh"
        />
        <div class="text-317 poppins-medium-white-14px">
          <span class="spanya1s4 poppins-medium-white-14px">Update</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button222 from "./Button222";
export default {
  name: "BottomSection112",
  components: {
    Button222,
  },
  props: ["className", "button22Props"],
};
</script>

<style>
.bottom-section-49 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 34px;
  width: 672px;
}

.top-border-54 {
  height: 1px;
  width: 672px;
}

.buttons-47 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 224px;
  position: relative;
}

.button-219 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 112px;
  padding: 8.5px 16px;
  transition: all 0.15s ease;
}

.button-219:hover {
  transform: translate(0, -5px);
}

.refresh-2 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-317 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 52px;
  text-align: center;
}

.bottom-section-49.bottom-section-50 {
  margin-top: 48px;
}

.bottom-section-49.bottom-section-50 .button-219 {
  cursor: unset;
  transition: unset;
}
</style>
