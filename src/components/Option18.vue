<template>
  <div :class="[`option-16`, className || ``]">
    <checkbox :className="checkboxProps.className" />
    <div class="label-161 poppins-normal-ebony-14px">
      <span class="span-348 poppins-normal-ebony-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Option18",
  components: {
    Checkbox,
  },
  props: ["spanText", "className", "checkboxProps"],
};
</script>

<style>
.option-16 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-top: 16px;
  min-width: 189px;
  position: relative;
}

.label-161 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-16.option-17,
.option-16.option-19 {
  margin-top: unset;
  min-width: 187px;
}
</style>
