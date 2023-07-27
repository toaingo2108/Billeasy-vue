<template>
  <div :class="[`table-27`, className || ``]">
    <div class="row-customers-details-notes">
      <cell202 />
      <div class="cell-306">
        <div class="blue-t-shirt-xs-200 poppins-semi-bold-ebony-13px-2">
          <span class="spanr1fy7 poppins-semi-bold-ebony-13px-2">Updated at</span>
        </div>
        <img
          class="sort-45"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
    </div>
    <table-row32
      :rowCustomersDetailsNotes1Props="tableRow32Props.rowCustomersDetailsNotes1Props"
      :rowCustomersDetailsNotes2Props="tableRow32Props.rowCustomersDetailsNotes2Props"
      :rowCustomersDetailsNotes3Props="tableRow32Props.rowCustomersDetailsNotes3Props"
      :rowCustomersDetailsNotes4Props="tableRow32Props.rowCustomersDetailsNotes4Props"
      :rowCustomersDetailsNotes5Props="tableRow32Props.rowCustomersDetailsNotes5Props"
    />
  </div>
</template>

<script>
import Cell202 from "./Cell202";
import TableRow32 from "./TableRow32";
export default {
  name: "Table12",
  components: {
    Cell202,
    TableRow32,
  },
  props: ["className", "tableRow32Props"],
};
</script>

<style>
.table-27 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 318px;
  left: 0;
  position: absolute;
  top: 64px;
  width: 600px;
}

.row-customers-details-notes {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 600px;
}

.cell-306 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 424px;
}

.blue-t-shirt-xs-200 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 75px;
}

.sort-45 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.table-27.table-28 {
  left: unset;
  margin-top: 24px;
  position: relative;
  top: unset;
}
</style>
