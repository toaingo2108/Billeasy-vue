<template>
  <div class="cell-763"><checkbox :className="checkboxProps.className" /></div>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "Cell64",
  components: {
    Checkbox,
  },
  props: ["checkboxProps"],
};
</script>

<style>
.cell-763 {
  align-items: center;
  background-color: var(--whisper);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 0 23px;
  position: relative;
  width: 64px;
}
</style>
