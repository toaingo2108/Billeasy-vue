<template>
  <div :class="[`dropdown-109`, className || ``]">
    <div class="label-261 poppins-medium-ebony-13px">
      <span class="span-445 poppins-medium-ebony-13px">{{ spanText }}</span>
    </div>
    <dropdown52 :spanText="dropdown5Props.spanText" />
  </div>
</template>

<script>
import Dropdown52 from "./Dropdown52";
export default {
  name: "Dropdown10",
  components: {
    Dropdown52,
  },
  props: ["spanText", "className", "dropdown5Props"],
};
</script>

<style>
.dropdown-109 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-left: 156px;
  min-height: 66px;
  position: relative;
  width: 192px;
}

.label-261 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 192px;
}

.dropdown-109.dropdown-110,
.dropdown-109.dropdown-112 {
  margin-left: 32px;
}
</style>
