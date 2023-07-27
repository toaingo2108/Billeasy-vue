<template>
  <div :class="[`option-10`, className || ``]">
    <checkbox :className="checkboxProps.className" />
    <div class="label-157 poppins-normal-ebony-14px">
      <span class="spanyry6ol poppins-normal-ebony-14px">Show prices incl. VAT</span>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Option2",
  components: {
    Checkbox,
  },
  props: ["className", "checkboxProps"],
};
</script>

<style>
.option-10 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-right: 32px;
  margin-top: 32px;
  min-width: 176px;
  position: relative;
}

.label-157 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-10.option-11 {
  align-self: flex-start;
  margin-left: 32px;
  margin-right: unset;
}
</style>
