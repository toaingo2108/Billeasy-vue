<template>
  <div :class="[`option-20`, className || ``]">
    <checkbox :className="checkboxProps.className" />
    <div class="label-163 poppins-normal-ebony-14px">
      <span class="span72svlh poppins-normal-ebony-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Option22",
  components: {
    Checkbox,
  },
  props: ["spanText", "className", "checkboxProps"],
};
</script>

<style>
.option-20 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-left: 23px;
  margin-top: 16px;
  min-width: 126px;
  position: relative;
}

.label-163 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-20.option-21 {
  margin-left: unset;
}

.option-20.option-22 {
  margin-left: unset;
  margin-right: 118px;
}
</style>
