<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-register-u47-currencies-u47-new-currency screen">
      <div class="overlap-group-12">
        <left-navigation-menu v-bind="leftNavigationMenuProps" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-14 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <frame26454 />
        <div class="frame-2548-11">
          <div class="flex-row-17">
            <div class="flex-col-24">
              <header82 :spanText="header82Props.spanText" :frame2443Props="header82Props.frame2443Props" />
              <div class="navbar-6">
                <tab-menu8 />
                <div class="navbar-link-label-24 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText2 }}</span>
                </div>
                <div class="navbar-link-label-25 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText3 }}</span>
                </div>
                <div class="navbar-link-label-26 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText4 }}</span>
                </div>
                <div class="navbar-link-label-27 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText5 }}</span>
                </div>
              </div>
              <img class="line-701-8" :src="line701" alt="Line 701" /><button42 :className="button42Props.className" />
              <div class="table-10">
                <div class="row-settings-register-currencies-12">
                  <cell112 />
                  <div class="cell-157">
                    <div class="blue-t-shirt-xs-68 poppins-semi-bold-ebony-13px">
                      <span class="poppins-semi-bold-ebony-13px">{{ spanText6 }}</span>
                    </div>
                    <img class="sort-22" :src="sort1" alt="Sort" />
                  </div>
                  <div class="cell-158">
                    <div class="blue-t-shirt-xs-69 poppins-semi-bold-ebony-13px">
                      <span class="poppins-semi-bold-ebony-13px">{{ spanText7 }}</span>
                    </div>
                    <img class="sort-22" :src="sort2" alt="Sort" />
                  </div>
                </div>
                <table-row22 />
              </div>
            </div>
            <div class="scroll-bar-8"></div>
          </div>
          <bottom-section2
            :iconButtonProps="bottomSection2Props.iconButtonProps"
            :paginationProps="bottomSection2Props.paginationProps"
          />
        </div>
        <overlay
          :spanText="overlayProps.spanText"
          :className="overlayProps.className"
          :dropdown322Props="overlayProps.dropdown322Props"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu from "./LeftNavigationMenu";
import TopNavigation from "./TopNavigation";
import Frame26454 from "./Frame26454";
import Header82 from "./Header82";
import TabMenu8 from "./TabMenu8";
import Button42 from "./Button42";
import Cell112 from "./Cell112";
import TableRow22 from "./TableRow22";
import BottomSection2 from "./BottomSection2";
import Overlay from "./Overlay";
export default {
  name: "SettingsRegisterCurrenciesNewCurren",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame26454,
    Header82,
    TabMenu8,
    Button42,
    Cell112,
    TableRow22,
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
    "spanText6",
    "sort1",
    "spanText7",
    "sort2",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "header82Props",
    "button42Props",
    "bottomSection2Props",
    "overlayProps",
  ],
};
</script>

<style>
.settings-u47-register-u47-currencies-u47-new-currency {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-12 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.page-header-14 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.frame-2548-11 {
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

.flex-row-17 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 728px;
  margin-top: 24px;
  min-width: 896px;
}

.flex-col-24 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 728px;
  position: relative;
  width: 864px;
}

.navbar-6 {
  align-items: center;
  display: flex;
  height: 40px;
  margin-top: 40px;
  min-width: 660px;
  position: relative;
}

.navbar-link-label-24 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 14px;
  min-width: 112px;
  white-space: nowrap;
}

.navbar-link-label-25 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 48px;
  min-width: 69px;
  white-space: nowrap;
}

.navbar-link-label-26 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 69px;
  min-width: 36px;
  white-space: nowrap;
}

.navbar-link-label-27 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 68px;
  min-width: 71px;
  white-space: nowrap;
}

.line-701-8 {
  height: 1px;
  width: 864px;
}

.table-10 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 532px;
  margin-top: 24px;
  position: relative;
  width: 864px;
}

.row-settings-register-currencies-12 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 864px;
}

.cell-157 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 224px;
}

.blue-t-shirt-xs-68 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 100px;
}

.sort-22 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-158 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 512px;
}

.blue-t-shirt-xs-69 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 62px;
}

.scroll-bar-8 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 92px;
  width: 12px;
}
</style>
