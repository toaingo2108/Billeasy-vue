<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-register-u47-payment-terms screen">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-54">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-37">
          <div class="flex-col-55">
            <h1 class="page-header-29 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <frame26454 :className="header8Props.className" />
          </div>
          <div class="frame-2548-24">
            <div class="flex-row-38">
              <div class="flex-col-56">
                <header82 :spanText="header8Props2.spanText" :frame2443Props="header8Props2.frame2443Props" />
                <div class="tab-12">
                  <tab-menu72 />
                  <tab-menu7 :className="button2Props.className" />
                  <tab-menu42 />
                  <tab-menu5 />
                  <tab-menu6 />
                </div>
                <img class="line-701-19" :src="line701" alt="Line 701" />
                <div class="buttons-33">
                  <button42 :className="header8Props3.className" />
                  <button2
                    :refresh="button2Props2.refresh"
                    :spanText="button2Props2.spanText"
                    :className="button2Props2.className"
                  />
                </div>
                <div class="table-15">
                  <div class="row-settings-register-currencies-14">
                    <cell112 />
                    <div class="cell-236">
                      <div class="blue-t-shirt-xs-145 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText2 }}</span>
                      </div>
                      <img class="sort-33" :src="sort" alt="Sort" />
                    </div>
                    <cell133 />
                  </div>
                  <table-row22 />
                </div>
              </div>
              <div class="scroll-bar-14"></div>
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
import TabMenu7 from "./TabMenu7";
import TabMenu42 from "./TabMenu42";
import TabMenu5 from "./TabMenu5";
import TabMenu6 from "./TabMenu6";
import Button42 from "./Button42";
import Button2 from "./Button2";
import Cell112 from "./Cell112";
import Cell133 from "./Cell133";
import TableRow22 from "./TableRow22";
import BottomSection2 from "./BottomSection2";
export default {
  name: "SettingsRegisterPaymentTerms",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame26454,
    Header82,
    TabMenu72,
    TabMenu7,
    TabMenu42,
    TabMenu5,
    TabMenu6,
    Button42,
    Button2,
    Cell112,
    Cell133,
    TableRow22,
    BottomSection2,
  },
  props: [
    "spanText1",
    "line701",
    "spanText2",
    "sort",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "header8Props",
    "header8Props2",
    "button2Props",
    "header8Props3",
    "button2Props2",
    "bottomSection2Props",
  ],
};
</script>

<style>
.settings-u47-register-u47-payment-terms {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-54 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 928px;
  position: relative;
  width: 1216px;
}

.flex-row-37 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 833px;
  min-width: 1152px;
}

.flex-col-55 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  position: relative;
  width: 184px;
}

.page-header-29 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2548-24 {
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

.flex-row-38 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 728px;
  margin-top: 24px;
  min-width: 896px;
}

.flex-col-56 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 728px;
  position: relative;
  width: 864px;
}

.tab-12 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  margin-top: 40px;
  min-width: 660px;
  position: relative;
}

.line-701-19 {
  height: 1px;
  width: 864px;
}

.buttons-33 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-top: 23px;
  min-width: 304px;
  position: relative;
}

.table-15 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 532px;
  margin-top: 24px;
  position: relative;
  width: 864px;
}

.row-settings-register-currencies-14 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 864px;
}

.cell-236 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 224px;
}

.blue-t-shirt-xs-145 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 106px;
}

.sort-33 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.scroll-bar-14 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 92px;
  width: 12px;
}
</style>
