<template>
  <div :class="[`option-7`, className || ``]">
    <checkbox :className="checkboxProps.className" />
    <div class="label-150 poppins-normal-ebony-14px">
      <span class="span-343 poppins-normal-ebony-14px">{{ spanText }}</span>
    </div>
    <img
      class="support-2"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22c51017f2021375cb95e/img/support-2@2x.png"
      alt="Support"
    />
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "xOption",
  components: {
    Checkbox,
  },
  props: ["spanText", "className", "checkboxProps"],
};
</script>

<style>
.option-7 {
  align-items: center;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-top: 24px;
  min-width: 355px;
  position: relative;
}

.label-150 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  width: 297px;
}

.support-2 {
  height: 16px;
  width: 16px;
}

.option-7.option-6 {
  margin-top: 12px;
}
</style>
