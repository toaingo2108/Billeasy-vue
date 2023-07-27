<template>
  <div :class="[`option-23`, className || ``]">
    <checkbox :className="checkboxProps.className" />
    <div class="label-166 poppins-normal-ebony-14px">
      <span class="spanpswr2k poppins-normal-ebony-14px">Unit</span>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Option7",
  components: {
    Checkbox,
  },
  props: ["className", "checkboxProps"],
};
</script>

<style>
.option-23 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-left: 23px;
  margin-top: 16px;
  min-width: 57px;
  position: relative;
}

.label-166 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-23.option-24 {
  margin-left: unset;
}
</style>
