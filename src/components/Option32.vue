<template>
  <div :class="[`option-41`, className || ``]">
    <checkbox :className="checkboxProps.className" />
    <div class="label-300 poppins-normal-ebony-14px">
      <span class="span-455 poppins-normal-ebony-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Option32",
  components: {
    Checkbox,
  },
  props: ["spanText", "className", "checkboxProps"],
};
</script>

<style>
.option-41 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-right: 104px;
  margin-top: 16px;
  min-width: 140px;
  position: relative;
}

.label-300 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-41.option-42 {
  margin-right: 103px;
  min-width: 141px;
}

.option-41.option-43,
.option-41.option-44 {
  align-self: flex-start;
  margin-left: 32px;
  margin-right: unset;
  margin-top: 24px;
}
</style>
