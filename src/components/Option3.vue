<template>
  <div :class="[`option-12`, className || ``]">
    <checkbox :className="checkboxProps.className" />
    <div class="label-159 poppins-normal-ebony-14px">
      <span class="spanq poppins-normal-ebony-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Option3",
  components: {
    Checkbox,
  },
  props: ["spanText", "className", "checkboxProps"],
};
</script>

<style>
.option-12 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-top: 16px;
  min-width: 127px;
  position: relative;
}

.label-159 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-12.option-13 {
  margin-left: 23px;
  min-width: 129px;
}

.option-12.option-15 {
  min-width: 129px;
}
</style>
