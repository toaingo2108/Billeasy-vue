<template>
  <div class="container-center-horizontal">
    <form class="invoices-u47-imported screen" name="form31" action="form31" method="post">
      <left-navigation-menu82 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-189">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-173">
          <div class="flex-col-190">
            <div class="flex-row-174">
              <header class="header-90">
                <a href="javascript:SubmitForm('form31')">
                  <div class="button-241">
                    <img class="chevron-left-21" :src="chevronLeft" alt="Chevron Left" />
                    <div class="text-364 poppins-medium-ebony-14px">
                      <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                    </div>
                  </div></a
                >
                <div class="page-header-70 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                </div>
              </header>
              <x-button19 :className="buttonProps.className" />
            </div>
            <div class="tab-41">
              <tab-menu3222 :address="tabMenu32Props.address" :spanText="tabMenu32Props.spanText" />
              <a href="javascript:SubmitForm('form31')">
                <div class="tab-menu-124">
                  <img class="rules-1" :src="rules" alt="Rules" />
                  <div class="label-403 poppins-medium-manatee-14px">
                    <span class="poppins-medium-manatee-14px">{{ spanText3 }}</span>
                  </div>
                </div></a
              >
            </div>
            <img class="line-701-43" :src="line701" alt="Line 701" />
            <div class="search-55">
              <div class="input-139">
                <img class="search-56" :src="search" alt="Search" /><input
                  class="input-text-216 poppins-normal-manatee-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder"
                  :type="inputType"
                />
              </div>
              <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
            </div>
            <table2 :tableRowProps="table2Props.tableRowProps" />
          </div>
          <div class="scroll-bar-25"></div>
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
import TabMenu3222 from "./TabMenu3222";
import IconButton from "./IconButton";
import Table2 from "./Table2";
import BottomSection92 from "./BottomSection92";
export default {
  name: "InvoicesImported",
  components: {
    LeftNavigationMenu82,
    TopNavigation,
    xButton19,
    TabMenu3222,
    IconButton,
    Table2,
    BottomSection92,
  },
  props: [
    "chevronLeft",
    "spanText1",
    "spanText2",
    "rules",
    "spanText3",
    "line701",
    "search",
    "inputType",
    "inputPlaceholder",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "buttonProps",
    "tabMenu32Props",
    "iconButtonProps",
    "table2Props",
    "bottomSectionProps",
  ],
};
</script>

<style>
.invoices-u47-imported {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-189 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 967px;
  position: relative;
  width: 1216px;
}

.flex-row-173 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 775px;
  margin-top: 32px;
  min-width: 1184px;
}

.flex-col-190 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 775px;
  position: relative;
  width: 1152px;
}

.flex-row-174 {
  align-items: flex-start;
  display: flex;
  gap: 755px;
  min-width: 1152px;
  position: relative;
}

.header-90 {
  align-items: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  gap: 24px;
  justify-content: flex-start;
  min-width: 295px;
  width: auto;
}

.button-241 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
  width: 87px;
}

.button-241:hover,
.tab-menu-124:hover {
  transform: translate(0, -5px);
}

.chevron-left-21,
.search-56 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-364 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-70 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  min-width: 184px;
  white-space: nowrap;
}

.tab-41 {
  align-items: flex-start;
  display: flex;
  margin-top: 32px;
  min-width: 256px;
  position: relative;
}

.tab-menu-124 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 128px;
  padding: 9px 33px;
  transition: all 0.15s ease;
}

.rules-1 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-403 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.line-701-43 {
  height: 1px;
  width: 1152px;
}

.search-55 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-top: 39px;
  min-width: 336px;
  position: relative;
}

.input-139 {
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

.input-text-216 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-216::placeholder {
  color: #8a8aa899;
}

.scroll-bar-25 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 67px;
  width: 12px;
}
</style>
