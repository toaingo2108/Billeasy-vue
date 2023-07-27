<template>
  <div :class="[`option-29`, className || ``]">
    <checkbox :className="checkboxProps.className" />
    <div class="label-193 poppins-normal-ebony-14px">
      <span class="spana99ur poppins-normal-ebony-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Option10",
  components: {
    Checkbox,
  },
  props: ["spanText", "className", "checkboxProps"],
};
</script>

<style>
.option-29 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-top: 12px;
  min-width: 152px;
  position: relative;
}

.label-193 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-29.option-30 {
  margin-right: 93px;
  margin-top: 25px;
  min-width: 151px;
}
</style>
