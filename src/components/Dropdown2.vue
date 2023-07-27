<template>
  <div :class="[`dropdown-88`, className || ``]">
    <div class="label-156 poppins-medium-ebony-13px">
      <span class="span-345 poppins-medium-ebony-13px">{{ spanText }}</span>
    </div>
    <dropdown3 :spanText="dropdown3Props.spanText" />
  </div>
</template>

<script>
import Dropdown3 from "./Dropdown3";
export default {
  name: "Dropdown2",
  components: {
    Dropdown3,
  },
  props: ["spanText", "className", "dropdown3Props"],
};
</script>

<style>
.dropdown-88 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: 0;
  min-height: 66px;
  position: absolute;
  top: 0;
  width: 208px;
}

.label-156 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 208px;
}

.dropdown-88.dropdown-87 {
  left: unset;
  margin-top: 24px;
  position: relative;
  top: unset;
}

.dropdown-88.dropdown-89 {
  left: unset;
  margin-top: 40px;
  position: relative;
  top: unset;
}
</style>
