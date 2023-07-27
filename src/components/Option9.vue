<template>
  <div :class="[`option-27`, className || ``]">
    <checkbox :className="checkboxProps.className" />
    <div class="label-191 poppins-normal-ebony-14px">
      <span class="span14f1e poppins-normal-ebony-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Option9",
  components: {
    Checkbox,
  },
  props: ["spanText", "className", "checkboxProps"],
};
</script>

<style>
.option-27 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-top: 12px;
  min-width: 135px;
  position: relative;
}

.label-191 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-27.option-28 {
  margin-right: 109px;
  margin-top: 16px;
}
</style>
