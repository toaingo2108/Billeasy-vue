<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-register-u47-units screen">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-57">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-39">
          <div class="flex-col-58">
            <h1 class="page-header-30 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <frame26454 :className="header8Props.className" />
          </div>
          <div class="frame-2548-25">
            <div class="flex-row-40">
              <div class="flex-col-59">
                <header82 :spanText="header8Props2.spanText" :frame2443Props="header8Props2.frame2443Props" />
                <div class="tab-13">
                  <tab-menu72 />
                  <tab-menu3 />
                  <tab-menu42 />
                  <tab-menu82 :className="header8Props3.className" />
                  <tab-menu6 />
                </div>
                <img class="line-701-20" :src="line701" alt="Line 701" />
                <div class="buttons-34">
                  <button42 :className="header8Props4.className" />
                  <button3
                    :add="header8Props5.add"
                    :spanText="header8Props5.spanText"
                    :className="header8Props5.className"
                  />
                </div>
                <div class="table-16">
                  <div class="row-settings-register-currencies-15">
                    <cell112 />
                    <div class="cell-237">
                      <div class="blue-t-shirt-xs-146 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText2 }}</span>
                      </div>
                      <img class="sort-34" :src="add" alt="Sort" />
                    </div>
                    <cell133 />
                  </div>
                  <table-row22 />
                </div>
              </div>
              <div class="scroll-bar-15"></div>
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
import TabMenu82 from "./TabMenu82";
import TabMenu6 from "./TabMenu6";
import Button42 from "./Button42";
import Button3 from "./Button3";
import Cell112 from "./Cell112";
import Cell133 from "./Cell133";
import TableRow22 from "./TableRow22";
import BottomSection2 from "./BottomSection2";
export default {
  name: "SettingsRegisterUnits",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame26454,
    Header82,
    TabMenu72,
    TabMenu3,
    TabMenu42,
    TabMenu82,
    TabMenu6,
    Button42,
    Button3,
    Cell112,
    Cell133,
    TableRow22,
    BottomSection2,
  },
  props: [
    "spanText1",
    "line701",
    "spanText2",
    "add",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "header8Props",
    "header8Props2",
    "header8Props3",
    "header8Props4",
    "header8Props5",
    "bottomSection2Props",
  ],
};
</script>

<style>
.settings-u47-register-u47-units {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-57 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 928px;
  position: relative;
  width: 1216px;
}

.flex-row-39 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 833px;
  min-width: 1152px;
}

.flex-col-58 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  position: relative;
  width: 184px;
}

.page-header-30 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2548-25 {
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

.flex-row-40 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 728px;
  margin-top: 24px;
  min-width: 896px;
}

.flex-col-59 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 728px;
  position: relative;
  width: 864px;
}

.tab-13 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  margin-top: 40px;
  min-width: 660px;
  position: relative;
}

.line-701-20 {
  height: 1px;
  width: 864px;
}

.buttons-34 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-top: 23px;
  min-width: 221px;
  position: relative;
}

.table-16 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 532px;
  margin-top: 24px;
  position: relative;
  width: 864px;
}

.row-settings-register-currencies-15 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 864px;
}

.cell-237 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 224px;
}

.blue-t-shirt-xs-146 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 36px;
}

.sort-34 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.scroll-bar-15 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 92px;
  width: 12px;
}
</style>
