<template>
  <div :class="[`dropdown-105`, className || ``]">
    <div class="label-258 poppins-medium-ebony-13px">
      <span class="span-442 poppins-medium-ebony-13px">{{ spanText }}</span>
    </div>
    <dropdown172 />
  </div>
</template>

<script>
import Dropdown172 from "./Dropdown172";
export default {
  name: "Dropdown9",
  components: {
    Dropdown172,
  },
  props: ["spanText", "className"],
};
</script>

<style>
.dropdown-105,
.dropdown-105.dropdown-104 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  position: relative;
  width: 160px;
}

.label-258 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 160px;
}

.dropdown-105.dropdown-106,
.dropdown-105.dropdown-108 {
  margin-left: 32px;
}
</style>
