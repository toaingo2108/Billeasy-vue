<template>
  <div class="row-customers-details-time-report-6">
    <cell212 :children="cell212Props.children" />
    <cell65 />
    <cell65 />
    <div class="cell-779"><checkbox :className="checkboxProps.className" /></div>
    <cell132 />
  </div>
</template>

<script>
import Cell212 from "./Cell212";
import Cell65 from "./Cell65";
import Checkbox from "./Checkbox";
import Cell132 from "./Cell132";
export default {
  name: "RowCustomersDetailsTimeReport2",
  components: {
    Cell212,
    Cell65,
    Checkbox,
    Cell132,
  },
  props: ["cell212Props", "checkboxProps"],
};
</script>

<style>
.row-customers-details-time-report-6,
.row-customers-details-time-report-7,
.row-customers-details-time-report-8 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 600px;
}

.cell-779,
.cell-780,
.cell-781 {
  align-items: center;
  background-color: var(--whisper);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 0 47px;
  position: relative;
  width: 112px;
}
</style>
