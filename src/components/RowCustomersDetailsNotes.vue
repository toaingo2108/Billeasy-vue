<template>
  <div class="row-customers-details-notes-2">
    <cell212 :children="cell21Props.children" />
    <div class="cell-312">
      <div class="blue-t-shirt-xs-206 poppins-medium-comet-13px">
        <span class="poppins-medium-comet-13px">2023-05-01, 15:55</span>
      </div>
    </div>
    <cell132 />
  </div>
</template>

<script>
import Cell212 from "./Cell212";
import Cell132 from "./Cell132";
export default {
  name: "RowCustomersDetailsNotes",
  components: {
    Cell212,
    Cell132,
  },
  props: ["cell21Props"],
};
</script>

<style>
.row-customers-details-notes-2,
.row-customers-details-notes-3,
.row-customers-details-notes-4,
.row-customers-details-notes-5 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 600px;
}

.cell-312,
.cell-313,
.cell-314,
.cell-315 {
  align-items: flex-start;
  background-color: var(--whisper);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 424px;
}

.blue-t-shirt-xs-206,
.blue-t-shirt-xs-207,
.blue-t-shirt-xs-208,
.blue-t-shirt-xs-209 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 400px;
}
</style>
