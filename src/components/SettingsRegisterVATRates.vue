<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-register-u47-vat-rates screen">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-63">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-46">
          <div class="flex-col-64">
            <h1 class="page-header-33 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <frame26454 :className="header8Props.className" />
          </div>
          <div class="frame-2548-26">
            <div class="flex-row-47">
              <div class="flex-col-65">
                <header82 :spanText="header8Props2.spanText" :frame2443Props="header8Props2.frame2443Props" />
                <div class="tab-14">
                  <tab-menu72 />
                  <tab-menu3 />
                  <tab-menu42 />
                  <tab-menu5 />
                  <div class="tab-menu-50">
                    <div class="label-182 poppins-medium-caribbean-green-14px">
                      <span class="poppins-medium-caribbean-green-14px">{{ spanText2 }}</span>
                    </div>
                    <div class="rectangle-6502-21"></div>
                  </div>
                </div>
                <img class="line-701-21" :src="line701" alt="Line 701" />
                <div class="button-123">
                  <img class="add-16" :src="add" alt="Add" />
                  <div class="text-218 poppins-medium-white-14px">
                    <span class="poppins-medium-white-14px">{{ spanText3 }}</span>
                  </div>
                </div>
                <div class="table-17">
                  <div class="row-settings-register-vat-rates-5">
                    <cell112 />
                    <div class="cell-238">
                      <div class="blue-t-shirt-xs-147 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText4 }}</span>
                      </div>
                      <img class="sort-35" :src="sort" alt="Sort" />
                    </div>
                  </div>
                  <div class="table-row-17">
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
              <div class="scroll-bar-16"></div>
            </div>
            <bottom-section2
              :iconButtonProps="bottomSection2Props.iconButtonProps"
              :paginationProps="bottomSection2Props.paginationProps"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu from "./LeftNavigationMenu";
import TopNavigation from "./TopNavigation";
import Frame26454 from "./Frame26454";
import Header82 from "./Header82";
import TabMenu72 from "./TabMenu72";
import TabMenu3 from "./TabMenu3";
import TabMenu42 from "./TabMenu42";
import TabMenu5 from "./TabMenu5";
import Cell112 from "./Cell112";
import RowSettingsRegisterVATRates from "./RowSettingsRegisterVATRates";
import BottomSection2 from "./BottomSection2";
export default {
  name: "SettingsRegisterVATRates",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame26454,
    Header82,
    TabMenu72,
    TabMenu3,
    TabMenu42,
    TabMenu5,
    Cell112,
    RowSettingsRegisterVATRates,
    BottomSection2,
  },
  props: [
    "spanText1",
    "spanText2",
    "line701",
    "add",
    "spanText3",
    "spanText4",
    "sort",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "header8Props",
    "header8Props2",
    "bottomSection2Props",
  ],
};
</script>

<style>
.settings-u47-register-u47-vat-rates {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-63 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 928px;
  position: relative;
  width: 1216px;
}

.flex-row-46 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 833px;
  min-width: 1152px;
}

.flex-col-64 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  position: relative;
  width: 184px;
}

.page-header-33 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2548-26 {
  align-items: flex-end;
  align-self: flex-end;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 832px;
  overflow: hidden;
  position: relative;
  width: 928px;
}

.flex-row-47 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 728px;
  margin-top: 24px;
  min-width: 896px;
}

.flex-col-65 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 728px;
  position: relative;
  width: 864px;
}

.tab-14 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  margin-top: 40px;
  min-width: 660px;
  position: relative;
}

.tab-menu-50 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 139px;
}

.label-182 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 9px;
  min-width: 71px;
  white-space: nowrap;
}

.rectangle-6502-21 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 139px;
}

.line-701-21 {
  height: 1px;
  width: 864px;
}

.button-123 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-top: 23px;
  min-width: 148px;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
}

.button-123:hover {
  transform: translate(0, -5px);
}

.add-16 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-218 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 96px;
  text-align: center;
}

.table-17 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 532px;
  margin-top: 24px;
  width: 864px;
}

.row-settings-register-vat-rates-5 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 864px;
}

.cell-238 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 736px;
}

.blue-t-shirt-xs-147 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 77px;
}

.sort-35 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.table-row-17 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 426px;
  position: relative;
  width: 864px;
}

.scroll-bar-16 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 92px;
  width: 12px;
}
</style>
