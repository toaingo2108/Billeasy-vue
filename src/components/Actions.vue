<template>
  <div class="actions-14">
    <search :iconButtonProps="searchProps.iconButtonProps" />
    <button8 :className="button8Props.className" />
  </div>
</template>

<script>
import Search from "./Search";
import Button8 from "./Button8";
export default {
  name: "Actions",
  components: {
    Search,
    Button8,
  },
  props: ["searchProps", "button8Props"],
};
</script>

<style>
.actions-14,
.actions-15 {
  align-items: flex-start;
  display: flex;
  gap: 656px;
  height: 40px;
  left: 256px;
  min-width: 1152px;
  position: absolute;
  top: 248px;
}
</style>
