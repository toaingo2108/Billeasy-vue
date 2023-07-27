<template>
  <div class="cell-744"><status :src="statusProps.src" :className="statusProps.className" /></div>
</template>

<script>
import Status from "./Status";
export default {
  name: "Cell61",
  components: {
    Status,
  },
  props: ["statusProps"],
};
</script>

<style>
.cell-744,
.cell-745,
.cell-746,
.cell-747,
.cell-748,
.cell-749,
.cell-750,
.cell-751,
.cell-752,
.cell-753,
.cell-754,
.cell-755,
.cell-756,
.cell-757 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 0 23px;
  position: relative;
  width: 70px;
}
</style>
