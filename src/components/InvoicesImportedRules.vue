<template>
  <div class="container-center-horizontal">
    <form class="invoices-u47-imported-u47-rules screen" name="form33" action="form33" method="post">
      <left-navigation-menu82 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-191">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-181">
          <div class="flex-col-192">
            <div class="flex-row-182">
              <header class="header-91">
                <a href="javascript:SubmitForm('form33')">
                  <div class="button-242">
                    <img class="chevron-left-22" :src="chevronLeft" alt="Chevron Left" />
                    <div class="text-365 poppins-medium-ebony-14px">
                      <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                    </div>
                  </div></a
                >
                <div class="page-header-71 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                </div>
              </header>
              <x-button19 :className="buttonProps.className" />
            </div>
            <div class="tab-42">
              <a href="javascript:SubmitForm('form33')">
                <div class="tab-menu-131">
                  <img class="invoice-143" :src="invoice" alt="Invoice" />
                  <div class="label-410 poppins-medium-manatee-14px">
                    <span class="poppins-medium-manatee-14px">{{ spanText3 }}</span>
                  </div>
                </div></a
              ><tab-menu332 />
            </div>
            <img class="line-701-44" :src="line701" alt="Line 701" /><table32 v-bind="topNavigationProps2" />
          </div>
          <div class="scroll-bar-26"></div>
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
import TabMenu332 from "./TabMenu332";
import Table32 from "./Table32";
import BottomSection92 from "./BottomSection92";
export default {
  name: "InvoicesImportedRules",
  components: {
    LeftNavigationMenu82,
    TopNavigation,
    xButton19,
    TabMenu332,
    Table32,
    BottomSection92,
  },
  props: [
    "chevronLeft",
    "spanText1",
    "spanText2",
    "invoice",
    "spanText3",
    "line701",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "buttonProps",
    "topNavigationProps2",
    "bottomSectionProps",
  ],
};
</script>

<style>
.invoices-u47-imported-u47-rules {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-191 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 967px;
  position: relative;
  width: 1216px;
}

.flex-row-181 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 775px;
  margin-top: 32px;
  min-width: 1184px;
}

.flex-col-192 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 775px;
  position: relative;
  width: 1152px;
}

.flex-row-182 {
  align-items: flex-start;
  display: flex;
  gap: 755px;
  min-width: 1152px;
  position: relative;
}

.header-91 {
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

.button-242 {
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

.button-242:hover,
.tab-menu-131:hover {
  transform: translate(0, -5px);
}

.chevron-left-22 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-365 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-71 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  min-width: 184px;
  white-space: nowrap;
}

.tab-42 {
  align-items: flex-start;
  display: flex;
  margin-top: 32px;
  min-width: 256px;
  position: relative;
}

.tab-menu-131 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 128px;
  padding: 9px 23px;
  transition: all 0.15s ease;
}

.invoice-143 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-410 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.line-701-44 {
  height: 1px;
  width: 1152px;
}

.scroll-bar-26 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 67px;
  width: 12px;
}
</style>
