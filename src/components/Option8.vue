<template>
  <div :class="[`option-25`, className || ``]">
    <checkbox :className="checkboxProps.className" />
    <div class="label-168 poppins-normal-ebony-14px">
      <span class="span3bxps poppins-normal-ebony-14px">VAT rate</span>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Option8",
  components: {
    Checkbox,
  },
  props: ["className", "checkboxProps"],
};
</script>

<style>
.option-25 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-left: 23px;
  margin-top: 16px;
  min-width: 89px;
  position: relative;
}

.label-168 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-25.option-26 {
  margin-left: unset;
}
</style>
