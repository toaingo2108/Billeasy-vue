<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-register-u47-currencies screen">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-51">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-35">
          <div class="flex-col-52">
            <h1 class="page-header-28 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <frame26454 :className="header8Props.className" />
          </div>
          <div class="frame-2548-23">
            <div class="flex-row-36">
              <div class="flex-col-53">
                <header82 :spanText="header8Props2.spanText" :frame2443Props="header8Props2.frame2443Props" />
                <div class="tab-11">
                  <tab-menu8 />
                  <tab-menu3 />
                  <tab-menu42 />
                  <tab-menu5 />
                  <tab-menu6 />
                </div>
                <img class="line-701-18" :src="line701" alt="Line 701" />
                <div class="frame-2676">
                  <button42 :className="header8Props3.className" />
                  <div class="button-121">
                    <img class="add-15" :src="add" alt="Add" />
                    <div class="text-211 poppins-medium-white-14px">
                      <span class="poppins-medium-white-14px">{{ spanText2 }}</span>
                    </div>
                  </div>
                </div>
                <div class="table-14">
                  <div class="row-settings-register-currencies-13">
                    <cell112 />
                    <div class="cell-234">
                      <div class="blue-t-shirt-xs-143 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText3 }}</span>
                      </div>
                      <img class="sort-32" :src="sort1" alt="Sort" />
                    </div>
                    <div class="cell-235">
                      <div class="blue-t-shirt-xs-144 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText4 }}</span>
                      </div>
                      <img class="sort-32" :src="sort2" alt="Sort" />
                    </div>
                  </div>
                  <table-row22 />
                </div>
              </div>
              <div class="scroll-bar-13"></div>
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
import TabMenu8 from "./TabMenu8";
import TabMenu3 from "./TabMenu3";
import TabMenu42 from "./TabMenu42";
import TabMenu5 from "./TabMenu5";
import TabMenu6 from "./TabMenu6";
import Button42 from "./Button42";
import Cell112 from "./Cell112";
import TableRow22 from "./TableRow22";
import BottomSection2 from "./BottomSection2";
export default {
  name: "SettingsRegisterCurrencies",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame26454,
    Header82,
    TabMenu8,
    TabMenu3,
    TabMenu42,
    TabMenu5,
    TabMenu6,
    Button42,
    Cell112,
    TableRow22,
    BottomSection2,
  },
  props: [
    "spanText1",
    "line701",
    "add",
    "spanText2",
    "spanText3",
    "sort1",
    "spanText4",
    "sort2",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "header8Props",
    "header8Props2",
    "header8Props3",
    "bottomSection2Props",
  ],
};
</script>

<style>
.settings-u47-register-u47-currencies {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-51 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 928px;
  position: relative;
  width: 1216px;
}

.flex-row-35 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 833px;
  min-width: 1152px;
}

.flex-col-52 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  position: relative;
  width: 184px;
}

.page-header-28 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2548-23 {
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

.flex-row-36 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 728px;
  margin-top: 24px;
  min-width: 896px;
}

.flex-col-53 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 728px;
  position: relative;
  width: 864px;
}

.tab-11 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  margin-top: 40px;
  min-width: 660px;
  position: relative;
}

.line-701-18 {
  height: 1px;
  width: 864px;
}

.frame-2676 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 12px;
  margin-top: 23px;
  min-width: 227px;
  position: relative;
}

.button-121 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  box-shadow: 0px 10px 40px -10px #20c39d;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
  width: 115px;
}

.button-121:hover {
  transform: translate(0, -5px);
}

.add-15 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-211 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 63px;
  text-align: center;
}

.table-14 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 532px;
  margin-top: 24px;
  position: relative;
  width: 864px;
}

.row-settings-register-currencies-13 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 864px;
}

.cell-234 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 224px;
}

.blue-t-shirt-xs-143 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 100px;
}

.sort-32 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-235 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 512px;
}

.blue-t-shirt-xs-144 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 62px;
}

.scroll-bar-13 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 92px;
  width: 12px;
}
</style>
