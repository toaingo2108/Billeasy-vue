<template>
  <div :class="[`option-45-1`, className || ``]">
    <checkbox :className="checkboxProps.className" />
    <div class="label-317 poppins-normal-ebony-14px">
      <span class="span-461 poppins-normal-ebony-14px">{{ spanText }}</span>
    </div>
    <img
      class="support-13"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22c51017f2021375cb95e/img/support-2@2x.png"
      alt="Support"
    />
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Option4",
  components: {
    Checkbox,
  },
  props: ["spanText", "className", "checkboxProps"],
};
</script>

<style>
.option-45-1 {
  align-items: center;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-top: 25px;
  min-width: 248px;
  position: relative;
}

.label-317 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  width: 190px;
}

.support-13 {
  height: 16px;
  width: 16px;
}

.option-45-1.option-46 {
  margin-top: 32px;
}

.option-45-1.option-48 {
  align-items: center;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 248px;
  position: relative;
}
</style>
