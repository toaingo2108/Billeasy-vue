<template>
  <div class="table-34">
    <div class="row-subscriptions-5">
      <cell682 />
      <cell722 />
      <div class="cell-469">
        <div class="blue-t-shirt-xs-328 poppins-semi-bold-ebony-13px">
          <span class="poppins-semi-bold-ebony-13px">Blue t-shirt, XS</span>
        </div>
        <img
          class="sort-91"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
      <cell83 />
      <cell92 />
      <cell10 :spanText="cell101Props.spanText" />
      <cell1122 />
      <cell10 :spanText="cell102Props.spanText" />
      <cell1222 />
      <cell1332 />
    </div>
    <table-row222 v-bind="tableRow2Props" />
  </div>
</template>

<script>
import Cell682 from "./Cell682";
import Cell722 from "./Cell722";
import Cell83 from "./Cell83";
import Cell92 from "./Cell92";
import Cell10 from "./Cell10";
import Cell1122 from "./Cell1122";
import Cell1222 from "./Cell1222";
import Cell1332 from "./Cell1332";
import TableRow222 from "./TableRow222";
export default {
  name: "Table3",
  components: {
    Cell682,
    Cell722,
    Cell83,
    Cell92,
    Cell10,
    Cell1122,
    Cell1222,
    Cell1332,
    TableRow222,
  },
  props: ["cell101Props", "cell102Props", "tableRow2Props"],
};
</script>

<style>
.table-34,
.table-35,
.table-36 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 543px;
  left: 256px;
  position: absolute;
  top: 328px;
  width: 1152px;
}

.row-subscriptions-5,
.row-subscriptions-6,
.row-subscriptions-7 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.cell-469,
.cell-470,
.cell-471 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 170px;
}

.blue-t-shirt-xs-328,
.blue-t-shirt-xs-329,
.blue-t-shirt-xs-330 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 98px;
}

.sort-91,
.sort-92,
.sort-93 {
  align-self: center;
  height: 14px;
  width: 14px;
}
</style>
