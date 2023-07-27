<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-register-u47-vat-rates-u47-new screen">
      <div class="overlap-group-8">
        <left-navigation-menu v-bind="leftNavigationMenuProps" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-9 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <frame26454 />
        <div class="frame-2548-4">
          <div class="flex-row-9">
            <div class="flex-col-15">
              <header82 :spanText="header82Props.spanText" :frame2443Props="header82Props.frame2443Props" />
              <div class="navbar">
                <div class="navbar-link-label poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText2 }}</span>
                </div>
                <div class="navbar-link-label-1 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText3 }}</span>
                </div>
                <div class="navbar-link-label-2 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText4 }}</span>
                </div>
                <tab-menu82 />
                <div class="navbar-link-label-3 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText5 }}</span>
                </div>
              </div>
              <img class="line-701-1" :src="line701" alt="Line 701" />
              <div class="button-81">
                <img class="add-6" :src="add" alt="Add" />
                <div class="text-99 poppins-medium-white-14px">
                  <span class="poppins-medium-white-14px">{{ spanText6 }}</span>
                </div>
              </div>
              <div class="table-3">
                <div class="row-settings-register-vat-rates-2">
                  <cell112 />
                  <div class="cell-30">
                    <div class="blue-t-shirt-xs-26 poppins-semi-bold-ebony-13px">
                      <span class="poppins-semi-bold-ebony-13px">{{ spanText7 }}</span>
                    </div>
                    <img class="sort-9" :src="sort" alt="Sort" />
                  </div>
                </div>
                <div class="table-row-3">
                  <row-settings-register-vat-rates />
                  <row-settings-register-vat-rates />
                  <row-settings-register-vat-rates />
                  <row-settings-register-vat-rates />
                  <row-settings-register-vat-rates />
                  <row-settings-register-vat-rates />
                  <row-settings-register-vat-rates />
                  <row-settings-register-vat-rates />
                </div>
              </div>
            </div>
            <div class="scroll-bar-1"></div>
          </div>
          <bottom-section2
            :iconButtonProps="bottomSection2Props.iconButtonProps"
            :paginationProps="bottomSection2Props.paginationProps"
          />
        </div>
        <overlay :spanText="overlayProps.spanText" :dropdown322Props="overlayProps.dropdown322Props" />
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu from "./LeftNavigationMenu";
import TopNavigation from "./TopNavigation";
import Frame26454 from "./Frame26454";
import Header82 from "./Header82";
import TabMenu82 from "./TabMenu82";
import Cell112 from "./Cell112";
import RowSettingsRegisterVATRates from "./RowSettingsRegisterVATRates";
import BottomSection2 from "./BottomSection2";
import Overlay from "./Overlay";
export default {
  name: "SettingsRegisterVATRatesNew",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame26454,
    Header82,
    TabMenu82,
    Cell112,
    RowSettingsRegisterVATRates,
    BottomSection2,
    Overlay,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "line701",
    "add",
    "spanText6",
    "spanText7",
    "sort",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "header82Props",
    "bottomSection2Props",
    "overlayProps",
  ],
};
</script>

<style>
.settings-u47-register-u47-vat-rates-u47-new {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-8 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.page-header-9 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.frame-2548-4 {
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

.flex-row-9 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 728px;
  margin-top: 24px;
  min-width: 896px;
}

.flex-col-15 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 728px;
  position: relative;
  width: 864px;
}

.navbar {
  align-items: center;
  display: flex;
  height: 40px;
  margin-top: 40px;
  min-width: 660px;
  padding: 0 31px;
  position: relative;
}

.navbar-link-label {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  min-width: 77px;
  white-space: nowrap;
}

.navbar-link-label-1 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 44px;
  min-width: 112px;
  white-space: nowrap;
}

.navbar-link-label-2 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 48px;
  min-width: 69px;
  white-space: nowrap;
}

.navbar-link-label-3 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 34px;
  min-width: 71px;
  white-space: nowrap;
}

.line-701-1 {
  height: 1px;
  width: 864px;
}

.button-81 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-top: 23px;
  min-width: 148px;
  padding: 8.5px 12px;
}

.add-6 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-99 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 96px;
  text-align: center;
}

.table-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 532px;
  margin-top: 24px;
  width: 864px;
}

.row-settings-register-vat-rates-2 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 864px;
}

.cell-30 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 736px;
}

.blue-t-shirt-xs-26 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 77px;
}

.sort-9 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.table-row-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 426px;
  position: relative;
  width: 864px;
}

.scroll-bar-1 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 92px;
  width: 12px;
}
</style>
