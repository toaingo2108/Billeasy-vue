<template>
  <div class="container-center-horizontal">
    <form class="invoices screen" name="form29" action="form29" method="post">
      <left-navigation-menu82 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-187">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-167">
          <div class="flex-col-188">
            <div class="flex-row-168">
              <h1 class="page-header-69 poppins-semi-bold-ebony-28px">
                <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
              </h1>
              <div class="button-236">
                <div class="text-359 poppins-medium-caribbean-green-14px">
                  <span class="poppins-medium-caribbean-green-14px">{{ spanText2 }}</span>
                </div>
                <img class="chevron-right-8" :src="chevronRight" alt="Chevron Right" />
              </div>
              <x-button19 :className="optionsProps.className" />
            </div>
            <div class="tab-40">
              <tab-menu202 />
              <a href="javascript:SubmitForm('form29')">
                <div class="tab-menu-119">
                  <img class="clock-15" :src="clock" alt="Clock" />
                  <div class="label-398 poppins-medium-manatee-14px">
                    <span class="poppins-medium-manatee-14px">{{ spanText3 }}</span>
                  </div>
                </div></a
              >
            </div>
            <img class="line-701-42" :src="line701" alt="Line 701" />
            <div class="actions-56">
              <div class="search-53">
                <div class="input-138">
                  <img class="search-54" :src="search" alt="Search" /><input
                    class="input-text-215 poppins-normal-manatee-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder"
                    :type="inputType"
                  />
                </div>
                <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
              </div>
              <button23 />
            </div>
            <div class="overlap-group-55">
              <table112 :tableRowProps="tableProps.tableRowProps" />
              <options
                :dropdownItem1Props="optionsProps2.dropdownItem1Props"
                :dropdownItem2Props="optionsProps2.dropdownItem2Props"
                :dropdownItem3Props="optionsProps2.dropdownItem3Props"
                :dropdownItem4Props="optionsProps2.dropdownItem4Props"
                :dropdownItem5Props="optionsProps2.dropdownItem5Props"
              />
            </div>
          </div>
          <div class="scroll-bar-24"></div>
        </div>
        <bottom-section92
          :iconButtonProps="bottomSectionProps.iconButtonProps"
          :paginationProps="bottomSectionProps.paginationProps"
        />
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu82 from "./LeftNavigationMenu82";
import TopNavigation from "./TopNavigation";
import xButton19 from "./xButton19";
import TabMenu202 from "./TabMenu202";
import IconButton from "./IconButton";
import Button23 from "./Button23";
import Table112 from "./Table112";
import Options from "./Options";
import BottomSection92 from "./BottomSection92";
export default {
  name: "Invoices",
  components: {
    LeftNavigationMenu82,
    TopNavigation,
    xButton19,
    TabMenu202,
    IconButton,
    Button23,
    Table112,
    Options,
    BottomSection92,
  },
  props: [
    "spanText1",
    "spanText2",
    "chevronRight",
    "clock",
    "spanText3",
    "line701",
    "search",
    "inputType",
    "inputPlaceholder",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "optionsProps",
    "iconButtonProps",
    "tableProps",
    "optionsProps2",
    "bottomSectionProps",
  ],
};
</script>

<style>
.invoices {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-187 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 967px;
  position: relative;
  width: 1216px;
}

.flex-row-167 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 776px;
  margin-top: 31px;
  min-width: 1184px;
}

.flex-col-188 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 776px;
  width: 1152px;
}

.flex-row-168 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  min-width: 1152px;
  position: relative;
}

.page-header-69 {
  letter-spacing: 0;
  line-height: 40px;
  min-width: 119px;
  white-space: nowrap;
}

.button-236 {
  align-items: flex-start;
  align-self: center;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 21px;
  margin-left: 24px;
  margin-top: 7px;
  min-width: 187px;
  transition: all 0.15s ease;
}

.button-236:hover,
.tab-menu-119:hover {
  transform: translate(0, -5px);
}

.text-359 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 161px;
  text-align: center;
}

.chevron-right-8,
.search-54 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.tab-40 {
  align-items: flex-start;
  display: flex;
  margin-top: 33px;
  min-width: 328px;
  position: relative;
}

.tab-menu-119 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 176px;
  padding: 9px 13.5px;
  transition: all 0.15s ease;
}

.clock-15 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-398 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.line-701-42 {
  height: 1px;
  width: 1152px;
}

.actions-56 {
  align-items: flex-start;
  display: flex;
  gap: 679px;
  margin-top: 39px;
  min-width: 1152px;
  position: relative;
}

.search-53 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 336px;
  position: relative;
}

.input-138 {
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

.input-text-215 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-215::placeholder {
  color: #8a8aa899;
}

.overlap-group-55 {
  height: 543px;
  margin-top: 40px;
  position: relative;
  width: 1152px;
}

.scroll-bar-24 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 66px;
  width: 12px;
}
</style>
