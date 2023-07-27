<template>
  <div class="cell-289"><checkbox :className="checkboxProps.className" /></div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Cell21",
  components: {
    Checkbox,
  },
  props: ["checkboxProps"],
};
</script>

<style>
.cell-289 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -4px;
  padding: 0 58px;
  position: relative;
  width: 134px;
}
</style>
