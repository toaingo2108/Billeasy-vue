<template>
  <div class="option-90">
    <checkbox :className="checkboxProps.className" />
    <div class="label-494 poppins-normal-ebony-14px">
      <span class="poppins-normal-ebony-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Option16",
  components: {
    Checkbox,
  },
  props: ["spanText", "checkboxProps"],
};
</script>

<style>
.option-90,
.option-91 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 240px;
  position: relative;
}

.label-494,
.label-495 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  width: 210px;
}
</style>
