<template>
  <div class="table-58">
    <div class="row-customers-details-time-report">
      <div class="cell-767">
        <div class="blue-t-shirt-xs-568 poppins-semi-bold-ebony-13px">
          <span class="poppins-semi-bold-ebony-13px">Hourly Rate</span>
        </div>
        <img
          class="sort-220"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
      <div class="cell-764">
        <div class="blue-t-shirt-xs-569 poppins-semi-bold-ebony-13px-2">
          <span class="poppins-semi-bold-ebony-13px-2">Start Time</span>
        </div>
        <img
          class="sort-220"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
      <div class="cell-764">
        <div class="blue-t-shirt-xs-570 poppins-semi-bold-ebony-13px-2">
          <span class="poppins-semi-bold-ebony-13px-2">End Time</span>
        </div>
        <img
          class="sort-220"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
      <div class="cell-768">
        <div class="blue-t-shirt-xs-571 poppins-semi-bold-ebony-13px-2">
          <span class="poppins-semi-bold-ebony-13px-2">Invoiced</span>
        </div>
        <img
          class="sort-220"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
    </div>
    <div class="table-row-55">
      <row-customers-details-time-report :cell212Props="rowCustomersDetailsTimeReport1Props.cell212Props" />
      <row-customers-details-time-report2
        :cell212Props="rowCustomersDetailsTimeReport21Prop.cell212Props"
        :checkboxProps="rowCustomersDetailsTimeReport21Prop.checkboxProps"
      />
      <row-customers-details-time-report :cell212Props="rowCustomersDetailsTimeReport2Props.cell212Props" />
      <row-customers-details-time-report2
        :cell212Props="rowCustomersDetailsTimeReport22Prop.cell212Props"
        :checkboxProps="rowCustomersDetailsTimeReport22Prop.checkboxProps"
      />
      <row-customers-details-time-report :cell212Props="rowCustomersDetailsTimeReport3Props.cell212Props" />
    </div>
  </div>
</template>

<script>
import RowCustomersDetailsTimeReport from "./RowCustomersDetailsTimeReport";
import RowCustomersDetailsTimeReport2 from "./RowCustomersDetailsTimeReport2";
export default {
  name: "Table10",
  components: {
    RowCustomersDetailsTimeReport,
    RowCustomersDetailsTimeReport2,
  },
  props: [
    "rowCustomersDetailsTimeReport1Props",
    "rowCustomersDetailsTimeReport21Prop",
    "rowCustomersDetailsTimeReport2Props",
    "rowCustomersDetailsTimeReport22Prop",
    "rowCustomersDetailsTimeReport3Props",
  ],
};
</script>

<style>
.table-58,
.table-59,
.table-60 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 318px;
  margin-top: 24px;
  width: 600px;
}

.row-customers-details-time-report,
.row-customers-details-time-report-1,
.row-customers-details-time-report-2 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  width: 600px;
}

.cell-767,
.cell-769,
.cell-771 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 7px;
  width: 112px;
}

.blue-t-shirt-xs-568,
.blue-t-shirt-xs-572,
.blue-t-shirt-xs-576 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 5px;
  min-height: 20px;
  min-width: 77px;
}

.sort-220,
.sort-221,
.sort-222 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-764,
.cell-765,
.cell-766 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 156px;
}

.blue-t-shirt-xs-569,
.blue-t-shirt-xs-573,
.blue-t-shirt-xs-577 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 68px;
}

.blue-t-shirt-xs-570,
.blue-t-shirt-xs-574,
.blue-t-shirt-xs-578 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 61px;
}

.cell-768,
.cell-770,
.cell-772 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 112px;
}

.blue-t-shirt-xs-571,
.blue-t-shirt-xs-575,
.blue-t-shirt-xs-579 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 57px;
}

.table-row-55,
.table-row-56,
.table-row-57 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 264px;
  position: relative;
  width: 600px;
}
</style>
