<template>
  <div :class="[`bottom-section-52`, className || ``]">
    <img
      class="top-border-57"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/top-border-8@2x.png"
      alt="Top Border"
    />
    <buttons
      :check="button22Props.check"
      :spanText="button22Props.spanText"
      :className="button22Props.className"
      :button222Props="button22Props.button222Props"
    />
  </div>
</template>

<script>
import Buttons from "./Buttons";
export default {
  name: "BottomSection22",
  components: {
    Buttons,
  },
  props: ["className", "button22Props"],
};
</script>

<style>
.bottom-section-52 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 28px;
  position: relative;
  width: 400px;
}

.top-border-57 {
  height: 1px;
  width: 400px;
}

.bottom-section-52.bottom-section-53,
.bottom-section-52.bottom-section-54,
.bottom-section-52.bottom-section-55,
.bottom-section-52.bottom-section-51 {
  margin-top: 22px;
}
</style>
