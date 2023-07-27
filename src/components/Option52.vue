<template>
  <div :class="[`option`, className || ``]">
    <checkbox :className="checkboxProps.className" />
    <div class="label-100 poppins-normal-ebony-14px">
      <span class="spanhuo0n poppins-normal-ebony-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Option52",
  components: {
    Checkbox,
  },
  props: ["spanText", "className", "checkboxProps"],
};
</script>

<style>
.option {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-left: 32px;
  margin-top: 24px;
  min-width: 143px;
  position: relative;
}

.label-100 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option.option-1,
.option.option-3 {
  margin-left: unset;
  margin-top: 16px;
}

.option.option-2 {
  margin-left: 23px;
  margin-top: 40px;
  min-width: 144px;
}

.option.option-4 {
  margin-left: unset;
  margin-top: 40px;
  min-width: 144px;
}
</style>
