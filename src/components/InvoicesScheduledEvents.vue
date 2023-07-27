<template>
  <div class="container-center-horizontal">
    <form class="invoices-u47-scheduled-events screen" name="form37" action="form37" method="post">
      <left-navigation-menu82 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-195">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-186">
          <div class="flex-col-196">
            <div class="flex-row-187">
              <h1 class="page-header-75 poppins-semi-bold-ebony-28px">
                <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
              </h1>
              <x-button19 :className="buttonProps.className" />
            </div>
            <div class="tab-46">
              <a href="javascript:SubmitForm('form37')">
                <div class="tab-menu-154">
                  <img class="invoice-146" :src="invoice" alt="Invoice" />
                  <div class="label-431 poppins-medium-manatee-14px">
                    <span class="poppins-medium-manatee-14px">{{ spanText2 }}</span>
                  </div>
                </div></a
              ><tab-menu622 />
            </div>
            <img class="line-701-48" :src="line701" alt="Line 701" />
            <div class="flex-row-188">
              <div class="search-57">
                <div class="input-143">
                  <img class="search-58" :src="search" alt="Search" /><input
                    class="input-text-221 poppins-normal-manatee-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder"
                    :type="inputType"
                  />
                </div>
                <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
              </div>
              <a href="javascript:SubmitForm('form37')">
                <div class="button-245">
                  <img class="add-76" :src="add" alt="Add" />
                  <div class="text-370 poppins-medium-white-14px">
                    <span class="poppins-medium-white-14px">{{ spanText3 }}</span>
                  </div>
                </div></a
              >
            </div>
            <table4 v-bind="table4Props" />
          </div>
          <div class="scroll-bar-30"></div>
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
import TabMenu622 from "./TabMenu622";
import IconButton from "./IconButton";
import Table4 from "./Table4";
import BottomSection92 from "./BottomSection92";
export default {
  name: "InvoicesScheduledEvents",
  components: {
    LeftNavigationMenu82,
    TopNavigation,
    xButton19,
    TabMenu622,
    IconButton,
    Table4,
    BottomSection92,
  },
  props: [
    "spanText1",
    "invoice",
    "spanText2",
    "line701",
    "search",
    "inputType",
    "inputPlaceholder",
    "add",
    "spanText3",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "buttonProps",
    "iconButtonProps",
    "table4Props",
    "bottomSectionProps",
  ],
};
</script>

<style>
.invoices-u47-scheduled-events {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-195 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 967px;
  position: relative;
  width: 1216px;
}

.flex-row-186 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 776px;
  margin-top: 31px;
  min-width: 1184px;
}

.flex-col-196 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 776px;
  position: relative;
  width: 1152px;
}

.flex-row-187 {
  align-items: flex-start;
  display: flex;
  gap: 931px;
  height: 40px;
  min-width: 1152px;
  position: relative;
}

.page-header-75 {
  letter-spacing: 0;
  line-height: 40px;
  min-width: 119px;
  white-space: nowrap;
}

.tab-46 {
  align-items: flex-start;
  display: flex;
  margin-top: 33px;
  min-width: 328px;
  position: relative;
}

.tab-menu-154 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 152px;
  padding: 9px 25.5px;
  transition: all 0.15s ease;
}

.tab-menu-154:hover,
.button-245:hover {
  transform: translate(0, -5px);
}

.invoice-146 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-431 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.line-701-48 {
  height: 1px;
  width: 1152px;
}

.flex-row-188 {
  align-items: flex-start;
  display: flex;
  gap: 686px;
  margin-top: 39px;
  min-width: 1150px;
}

.search-57 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 336px;
  position: relative;
}

.input-143 {
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

.search-58,
.add-76 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-221 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-221::placeholder {
  color: #8a8aa899;
}

.button-245 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 128px;
  padding: 8.5px 13px;
  transition: all 0.15s ease;
}

.text-370 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 74px;
  text-align: center;
}

.scroll-bar-30 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 66px;
  width: 12px;
}
</style>
