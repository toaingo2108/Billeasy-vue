<template>
  <div class="dropdown-141">
    <div class="label-379 poppins-medium-ebony-13px">
      <span class="poppins-medium-ebony-13px">{{ spanText1 }}</span>
    </div>
    <dropdown :spanText="dropdownProps.spanText" />
  </div>
</template>

<script>
import Dropdown from "./Dropdown";
export default {
  name: "Dropdown222",
  components: {
    Dropdown,
  },
  props: ["spanText1", "dropdownProps"],
};
</script>

<style>
.dropdown-141,
.dropdown-140 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  position: relative;
  width: 448px;
}

.label-379,
.label-378 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 448px;
}
</style>
