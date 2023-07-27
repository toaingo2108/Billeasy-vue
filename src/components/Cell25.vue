<template>
  <div class="cell-510"><status :src="statusProps.src" :className="statusProps.className" /></div>
</template>

<script>
import Status from "./Status";
export default {
  name: "Cell25",
  components: {
    Status,
  },
  props: ["statusProps"],
};
</script>

<style>
.cell-510,
.cell-511,
.cell-512,
.cell-513,
.cell-514,
.cell-515,
.cell-516 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 0 36px;
  position: relative;
  width: 96px;
}
</style>
