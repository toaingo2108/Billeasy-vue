<template>
  <div class="frame-2488-2">
    <frame24783
      :tabMenu241Props="frame24783Props.tabMenu241Props"
      :tabMenu242Props="frame24783Props.tabMenu242Props"
      :tabMenu25Props="frame24783Props.tabMenu25Props"
    />
    <img
      class="line-613-18"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/top-border-10@2x.png"
      alt="Line 613"
    />
    <div class="button-299">
      <img
        class="add-102"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/add-13@2x.png"
        alt="Add"
      />
      <div class="text-435 poppins-medium-white-14px"><span class="poppins-medium-white-14px">New Note</span></div>
    </div>
    <div class="table-61">
      <div class="row-customers-details-notes-6">
        <cell202 />
        <div class="cell-782">
          <div class="blue-t-shirt-xs-583 poppins-medium-ebony-13px">
            <span class="poppins-medium-ebony-13px">Updated at</span>
          </div>
          <img
            class="sort-223"
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
  </div>
</template>

<script>
import Frame24783 from "./Frame24783";
import Cell202 from "./Cell202";
import TableRow32 from "./TableRow32";
export default {
  name: "Frame2488",
  components: {
    Frame24783,
    Cell202,
    TableRow32,
  },
  props: ["frame24783Props", "tableRow32Props"],
};
</script>

<style>
.frame-2488-2,
.frame-2488-3 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  left: 760px;
  min-height: 740px;
  padding: 24px 0;
  position: absolute;
  top: 176px;
  width: 648px;
}

.line-613-18,
.line-613-19 {
  height: 1px;
  margin-right: 8px;
  width: 592px;
}

.button-299,
.button-300 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 37px;
  margin-right: 32px;
  margin-top: 29px;
  min-width: 119px;
  padding: 7px 12px;
}

.add-102,
.add-103 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-435,
.text-436 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 67px;
  text-align: center;
}

.table-61,
.table-62 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 318px;
  margin-top: 24px;
  position: relative;
  width: 600px;
}

.row-customers-details-notes-6,
.row-customers-details-notes-7 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 600px;
}

.cell-782,
.cell-783 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 424px;
}

.blue-t-shirt-xs-583,
.blue-t-shirt-xs-584 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 75px;
}

.sort-223,
.sort-224 {
  align-self: center;
  height: 14px;
  width: 14px;
}
</style>
