<template>
  <div class="frame-2548-5">
    <div class="flex-row-10">
      <div class="flex-col-16">
        <header82 :spanText="header8Props.spanText" :frame2443Props="header8Props.frame2443Props" />
        <div class="navbar-1">
          <div class="navbar-link-label-4 poppins-medium-manatee-14px">
            <span class="poppins-medium-manatee-14px">Currencies</span>
          </div>
          <div class="navbar-link-label-5 poppins-medium-manatee-14px">
            <span class="poppins-medium-manatee-14px">Payment Terms</span>
          </div>
          <div class="navbar-link-label-6 poppins-medium-manatee-14px">
            <span class="poppins-medium-manatee-14px">Price Lists</span>
          </div>
          <tab-menu82 />
          <div class="navbar-link-label-7 poppins-medium-manatee-14px">
            <span class="poppins-medium-manatee-14px">VAT Rates</span>
          </div>
        </div>
        <img
          class="line-701-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22d61f5c226309e8379e1/img/line-701-4@2x.png"
          alt="Line 701"
        />
        <div class="buttons-21">
          <button42 />
          <button3 :add="button4Props.add" :spanText="button4Props.spanText" />
        </div>
        <div class="table-4">
          <div class="row-settings-register-currencies">
            <cell112 />
            <div class="cell-116">
              <div class="blue-t-shirt-xs-29 poppins-semi-bold-ebony-13px">
                <span class="poppins-semi-bold-ebony-13px">Code</span>
              </div>
              <img
                class="sort-10"
                src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
                alt="Sort"
              />
            </div>
            <cell133 />
          </div>
          <table-row22 />
        </div>
      </div>
      <div class="scroll-bar-2"></div>
    </div>
    <bottom-section2
      :iconButtonProps="bottomSection2Props.iconButtonProps"
      :paginationProps="bottomSection2Props.paginationProps"
    />
  </div>
</template>

<script>
import Header82 from "./Header82";
import TabMenu82 from "./TabMenu82";
import Button42 from "./Button42";
import Button3 from "./Button3";
import Cell112 from "./Cell112";
import Cell133 from "./Cell133";
import TableRow22 from "./TableRow22";
import BottomSection2 from "./BottomSection2";
export default {
  name: "Frame25484",
  components: {
    Header82,
    TabMenu82,
    Button42,
    Button3,
    Cell112,
    Cell133,
    TableRow22,
    BottomSection2,
  },
  props: ["header8Props", "button4Props", "bottomSection2Props"],
};
</script>

<style>
.frame-2548-5,
.frame-2548-6,
.frame-2548-7 {
  align-items: flex-end;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 832px;
  left: 480px;
  overflow: hidden;
  position: absolute;
  top: 96px;
  width: 928px;
}

.flex-row-10,
.flex-row-11,
.flex-row-12 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 728px;
  margin-top: 24px;
  min-width: 896px;
}

.flex-col-16,
.flex-col-17,
.flex-col-18 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 728px;
  position: relative;
  width: 864px;
}

.navbar-1,
.navbar-2,
.navbar-3 {
  align-items: center;
  display: flex;
  height: 40px;
  margin-top: 40px;
  min-width: 660px;
  padding: 0 31px;
  position: relative;
}

.navbar-link-label-4,
.navbar-link-label-8,
.navbar-link-label-12 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  min-width: 77px;
  white-space: nowrap;
}

.navbar-link-label-5,
.navbar-link-label-9,
.navbar-link-label-13 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 44px;
  min-width: 112px;
  white-space: nowrap;
}

.navbar-link-label-6,
.navbar-link-label-10,
.navbar-link-label-14 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 48px;
  min-width: 69px;
  white-space: nowrap;
}

.navbar-link-label-7,
.navbar-link-label-11,
.navbar-link-label-15 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 34px;
  min-width: 71px;
  white-space: nowrap;
}

.line-701-2,
.line-701-3,
.line-701-4 {
  height: 1px;
  width: 864px;
}

.buttons-21,
.buttons-22,
.buttons-23 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-top: 23px;
  min-width: 221px;
  position: relative;
}

.table-4,
.table-5,
.table-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 532px;
  margin-top: 24px;
  position: relative;
  width: 864px;
}

.row-settings-register-currencies,
.row-settings-register-currencies-1,
.row-settings-register-currencies-2 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 864px;
}

.cell-116,
.cell-117,
.cell-118 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 224px;
}

.blue-t-shirt-xs-29,
.blue-t-shirt-xs-30,
.blue-t-shirt-xs-31 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 36px;
}

.sort-10,
.sort-11,
.sort-12 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.scroll-bar-2,
.scroll-bar-3,
.scroll-bar-4 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 92px;
  width: 12px;
}
</style>
