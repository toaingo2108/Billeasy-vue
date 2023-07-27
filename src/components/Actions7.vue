<template>
  <div :class="[`actions-18`, className || ``]">
    <search :iconButtonProps="searchProps.iconButtonProps" />
    <buttons7 :iconButton1Props="buttonsProps.iconButton1Props" :iconButton2Props="buttonsProps.iconButton2Props" />
  </div>
</template>

<script>
import Search from "./Search";
import Buttons7 from "./Buttons7";
export default {
  name: "Actions7",
  components: {
    Search,
    Buttons7,
  },
  props: ["className", "searchProps", "buttonsProps"],
};
</script>

<style>
.actions-18 {
  align-items: flex-start;
  display: flex;
  gap: 582px;
  height: 40px;
  left: 0;
  min-width: 1152px;
  position: absolute;
  top: 17px;
}

.actions-18.actions-19,
.actions-18.actions-20 {
  left: 256px;
  top: 176px;
}
</style>
