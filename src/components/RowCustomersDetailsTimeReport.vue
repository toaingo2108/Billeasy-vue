<template>
  <div class="row-customers-details-time-report-3">
    <cell212 :children="cell212Props.children" />
    <cell65 />
    <cell65 />
    <div class="cell-773">
      <div class="checkbox-124"></div>
    </div>
    <cell132 />
  </div>
</template>

<script>
import Cell212 from "./Cell212";
import Cell65 from "./Cell65";
import Cell132 from "./Cell132";
export default {
  name: "RowCustomersDetailsTimeReport",
  components: {
    Cell212,
    Cell65,
    Cell132,
  },
  props: ["cell212Props"],
};
</script>

<style>
.row-customers-details-time-report-3,
.row-customers-details-time-report-4,
.row-customers-details-time-report-5 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 600px;
}

.cell-773,
.cell-774,
.cell-775 {
  align-items: center;
  background-color: var(--whisper);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 0 47px;
  width: 112px;
}

.checkbox-124,
.checkbox-125,
.checkbox-126 {
  background-color: var(--white);
  border-radius: 6px;
  height: 18px;
  width: 18px;
}
</style>
