<template>
  <div :class="[`table-19`, className || ``]">
    <div class="row-users">
      <div class="cell-239">
        <div class="blue-t-shirt-xs-148 poppins-semi-bold-ebony-13px">
          <span class="span-401 poppins-semi-bold-ebony-13px">First Name</span>
        </div>
        <img
          class="sort-36"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
      <div class="cell-239">
        <div class="blue-t-shirt-xs-149 poppins-semi-bold-ebony-13px">
          <span class="span-401 poppins-semi-bold-ebony-13px">Last Name</span>
        </div>
        <img
          class="sort-36"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
      <cell14 :spanText="cell14Props.spanText" />
      <div class="cell-242">
        <div class="blue-t-shirt-xs-150 poppins-semi-bold-ebony-13px">
          <span class="span-401 poppins-semi-bold-ebony-13px">Role</span>
        </div>
        <img
          class="sort-36"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
      <div class="cell-243">
        <div class="blue-t-shirt-xs-151 poppins-semi-bold-ebony-13px">
          <span class="span-401 poppins-semi-bold-ebony-13px">Last Login</span>
        </div>
        <img
          class="sort-36"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
      <cell152 :spanText="cell15Props.spanText" :className="cell15Props.className" />
    </div>
    <div class="table-row-19">
      <row-users
        :cell161Props="rowUsers1Props.cell161Props"
        :cell162Props="rowUsers1Props.cell162Props"
        :cell17Props="rowUsers1Props.cell17Props"
        :cell102Props="rowUsers1Props.cell102Props"
        :cell232Props="rowUsers1Props.cell232Props"
        :cell132Props="rowUsers1Props.cell132Props"
      />
      <row-users
        :cell161Props="rowUsers2Props.cell161Props"
        :cell162Props="rowUsers2Props.cell162Props"
        :cell17Props="rowUsers2Props.cell17Props"
        :cell102Props="rowUsers2Props.cell102Props"
        :cell232Props="rowUsers2Props.cell232Props"
        :cell132Props="rowUsers2Props.cell132Props"
      />
      <row-users
        :cell161Props="rowUsers3Props.cell161Props"
        :cell162Props="rowUsers3Props.cell162Props"
        :cell17Props="rowUsers3Props.cell17Props"
        :cell102Props="rowUsers3Props.cell102Props"
        :cell232Props="rowUsers3Props.cell232Props"
        :cell132Props="rowUsers3Props.cell132Props"
      />
    </div>
  </div>
</template>

<script>
import Cell14 from "./Cell14";
import Cell152 from "./Cell152";
import RowUsers from "./RowUsers";
export default {
  name: "xTable",
  components: {
    Cell14,
    Cell152,
    RowUsers,
  },
  props: ["className", "cell14Props", "cell15Props", "rowUsers1Props", "rowUsers2Props", "rowUsers3Props"],
};
</script>

<style>
.table-19 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 639px;
  margin-top: 40px;
  width: 1152px;
}

.row-users {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.cell-239 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 208px;
}

.blue-t-shirt-xs-148 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 72px;
}

.sort-36 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.blue-t-shirt-xs-149 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 71px;
}

.cell-242 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 144px;
}

.blue-t-shirt-xs-150 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 29px;
}

.cell-243 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 192px;
}

.blue-t-shirt-xs-151 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 66px;
}

.table-row-19 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 585px;
  position: relative;
  width: 1152px;
}

.table-19.table-20,
.table-19.table-21 {
  left: 256px;
  margin-top: unset;
  position: absolute;
  top: 328px;
}
</style>
