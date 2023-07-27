<template>
  <div class="actions-69">
    <search :iconButtonProps="searchProps.iconButtonProps" />
    <buttons5
      :iconButton1Props="buttons5Props.iconButton1Props"
      :iconButton2Props="buttons5Props.iconButton2Props"
      :iconButton3Props="buttons5Props.iconButton3Props"
    />
  </div>
</template>

<script>
import Search from "./Search";
import Buttons5 from "./Buttons5";
export default {
  name: "Actions6",
  components: {
    Search,
    Buttons5,
  },
  props: ["searchProps", "buttons5Props"],
};
</script>

<style>
.actions-69,
.actions-70,
.actions-71,
.actions-72,
.actions-73,
.actions-74,
.actions-75 {
  align-items: flex-start;
  display: flex;
  gap: 519px;
  height: 40px;
  left: 256px;
  min-width: 1152px;
  position: absolute;
  top: 176px;
}
</style>
