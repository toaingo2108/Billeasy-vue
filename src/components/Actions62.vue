<template>
  <div class="actions-58">
    <search :iconButtonProps="searchProps.iconButtonProps" />
    <button23 :className="button2Props.className" />
  </div>
</template>

<script>
import Search from "./Search";
import Button23 from "./Button23";
export default {
  name: "Actions62",
  components: {
    Search,
    Button23,
  },
  props: ["searchProps", "button2Props"],
};
</script>

<style>
.actions-58,
.actions-59,
.actions-60 {
  align-items: flex-start;
  display: flex;
  gap: 679px;
  height: 40px;
  left: 256px;
  min-width: 1152px;
  position: absolute;
  top: 248px;
}
</style>
