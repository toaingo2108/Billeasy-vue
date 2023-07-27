<template>
  <div :class="[`table-40`, className || ``]">
    <div class="row-invoices">
      <cell692 />
      <cell2 />
      <cell3 />
      <cell42 />
      <div class="cell-538">
        <div class="blue-t-shirt-xs-363 poppins-semi-bold-ebony-13px-2">
          <span class="spanxecub poppins-semi-bold-ebony-13px-2">Your Reference</span>
        </div>
        <img
          class="sort-103"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
      <cell5 />
      <cell632 />
      <cell7222 />
      <cell832 />
    </div>
    <table-row6 v-bind="tableRowProps" />
  </div>
</template>

<script>
import Cell692 from "./Cell692";
import Cell2 from "./Cell2";
import Cell3 from "./Cell3";
import Cell42 from "./Cell42";
import Cell5 from "./Cell5";
import Cell632 from "./Cell632";
import Cell7222 from "./Cell7222";
import Cell832 from "./Cell832";
import TableRow6 from "./TableRow6";
export default {
  name: "Table112",
  components: {
    Cell692,
    Cell2,
    Cell3,
    Cell42,
    Cell5,
    Cell632,
    Cell7222,
    Cell832,
    TableRow6,
  },
  props: ["className", "tableRowProps"],
};
</script>

<style>
.table-40 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 543px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1152px;
}

.row-invoices {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.cell-538 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 9px;
  width: 138px;
}

.blue-t-shirt-xs-363 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 3px;
  min-height: 20px;
  min-width: 101px;
}

.sort-103 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.table-40.table-41,
.table-40.table-42,
.table-40.table-43 {
  left: 256px;
  top: 328px;
}
</style>
