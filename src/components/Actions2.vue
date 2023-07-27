<template>
  <div class="actions-52">
    <search :iconButtonProps="searchProps.iconButtonProps" />
    <buttons3
      :className="buttons3Props.className"
      :iconButton1Props="buttons3Props.iconButton1Props"
      :iconButton2Props="buttons3Props.iconButton2Props"
    />
  </div>
</template>

<script>
import Search from "./Search";
import Buttons3 from "./Buttons3";
export default {
  name: "Actions2",
  components: {
    Search,
    Buttons3,
  },
  props: ["searchProps", "buttons3Props"],
};
</script>

<style>
.actions-52,
.actions-53,
.actions-54 {
  align-items: flex-start;
  display: flex;
  gap: 537px;
  height: 40px;
  left: 256px;
  min-width: 1152px;
  position: absolute;
  top: 248px;
}
</style>
