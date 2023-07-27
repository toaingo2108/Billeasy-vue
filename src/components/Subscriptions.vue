<template>
  <div class="container-center-horizontal">
    <form class="subscriptions screen" name="form26" action="form26" method="post">
      <left-navigation-menu32 v-bind="leftNavigationMenu3Props" />
      <div class="flex-col-173">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-146">
          <div class="flex-col-174">
            <div class="flex-row-147">
              <h1 class="page-header-62 poppins-semi-bold-ebony-28px">
                <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
              </h1>
              <x-button19 />
            </div>
            <div class="tab-32">
              <tab-menu52 />
              <a href="javascript:SubmitForm('form26')">
                <div class="tab-menu-98">
                  <img class="clock-4" :src="clock" alt="Clock" />
                  <div class="label-350 poppins-medium-manatee-14px">
                    <span class="poppins-medium-manatee-14px">{{ spanText2 }}</span>
                  </div>
                </div></a
              >
            </div>
            <img class="line-701-38" :src="line701" alt="Line 701" />
            <div class="actions-22">
              <div class="search-46">
                <div class="input-107">
                  <img class="search-47" :src="search" alt="Search" /><input
                    class="input-text-182 poppins-normal-manatee-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder"
                    :type="inputType"
                  />
                </div>
                <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
              </div>
              <buttons3
                :iconButton1Props="buttons3Props.iconButton1Props"
                :iconButton2Props="buttons3Props.iconButton2Props"
              />
            </div>
            <div class="overlap-group-48">
              <div class="table-33">
                <div class="row-subscriptions">
                  <cell682 />
                  <cell722 />
                  <div class="cell-361">
                    <div class="blue-t-shirt-xs-259 poppins-semi-bold-ebony-13px">
                      <span class="poppins-semi-bold-ebony-13px">{{ spanText3 }}</span>
                    </div>
                    <img class="sort-55" :src="sort" alt="Sort" />
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
              <options
                :dropdownItem1Props="optionsProps.dropdownItem1Props"
                :dropdownItem2Props="optionsProps.dropdownItem2Props"
                :dropdownItem3Props="optionsProps.dropdownItem3Props"
                :dropdownItem4Props="optionsProps.dropdownItem4Props"
                :dropdownItem5Props="optionsProps.dropdownItem5Props"
              />
            </div>
          </div>
          <div class="scroll-bar-17"></div>
        </div>
        <bottom-section92
          :iconButtonProps="bottomSection9Props.iconButtonProps"
          :paginationProps="bottomSection9Props.paginationProps"
        />
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu32 from "./LeftNavigationMenu32";
import TopNavigation from "./TopNavigation";
import xButton19 from "./xButton19";
import TabMenu52 from "./TabMenu52";
import IconButton from "./IconButton";
import Buttons3 from "./Buttons3";
import Cell682 from "./Cell682";
import Cell722 from "./Cell722";
import Cell83 from "./Cell83";
import Cell92 from "./Cell92";
import Cell10 from "./Cell10";
import Cell1122 from "./Cell1122";
import Cell1222 from "./Cell1222";
import Cell1332 from "./Cell1332";
import TableRow222 from "./TableRow222";
import Options from "./Options";
import BottomSection92 from "./BottomSection92";
export default {
  name: "Subscriptions",
  components: {
    LeftNavigationMenu32,
    TopNavigation,
    xButton19,
    TabMenu52,
    IconButton,
    Buttons3,
    Cell682,
    Cell722,
    Cell83,
    Cell92,
    Cell10,
    Cell1122,
    Cell1222,
    Cell1332,
    TableRow222,
    Options,
    BottomSection92,
  },
  props: [
    "spanText1",
    "clock",
    "spanText2",
    "line701",
    "search",
    "inputType",
    "inputPlaceholder",
    "spanText3",
    "sort",
    "leftNavigationMenu3Props",
    "topNavigationProps",
    "iconButtonProps",
    "buttons3Props",
    "cell101Props",
    "cell102Props",
    "tableRow2Props",
    "optionsProps",
    "bottomSection9Props",
  ],
};
</script>

<style>
.subscriptions {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-173 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 967px;
  position: relative;
  width: 1216px;
}

.flex-row-146 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 776px;
  margin-top: 31px;
  min-width: 1184px;
}

.flex-col-174 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 776px;
  width: 1152px;
}

.flex-row-147 {
  align-items: flex-start;
  display: flex;
  gap: 854px;
  height: 40px;
  min-width: 1152px;
  position: relative;
}

.page-header-62 {
  letter-spacing: 0;
  line-height: 40px;
  min-width: 196px;
  white-space: nowrap;
}

.tab-32 {
  align-items: flex-start;
  display: flex;
  margin-top: 33px;
  min-width: 352px;
  position: relative;
}

.tab-menu-98 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 176px;
  padding: 9px 13.5px;
  transition: all 0.15s ease;
}

.tab-menu-98:hover {
  transform: translate(0, -5px);
}

.clock-4 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-350 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.line-701-38 {
  height: 1px;
  width: 1152px;
}

.actions-22 {
  align-items: flex-start;
  display: flex;
  gap: 537px;
  margin-top: 39px;
  min-width: 1152px;
  position: relative;
}

.search-46 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 336px;
  position: relative;
}

.input-107 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 288px;
}

.search-47 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-182 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-182::placeholder {
  color: #8a8aa899;
}

.overlap-group-48 {
  height: 543px;
  margin-top: 40px;
  position: relative;
  width: 1152px;
}

.table-33 {
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

.row-subscriptions {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.cell-361 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 170px;
}

.blue-t-shirt-xs-259 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 109px;
}

.sort-55 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.scroll-bar-17 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 66px;
  width: 12px;
}
</style>
