<template>
  <div class="option-53">
    <checkbox :className="checkboxProps.className" />
    <div class="label-393 poppins-normal-ebony-12px">
      <span class="poppins-normal-ebony-12px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Option522",
  components: {
    Checkbox,
  },
  props: ["spanText", "checkboxProps"],
};
</script>

<style>
.option-53 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 18px;
  min-width: 172px;
  position: relative;
}

.label-393 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 18px;
  width: 142px;
}
</style>
