<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-register-u47-price-lists screen">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-19">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-13">
          <div class="flex-col-20">
            <h1 class="page-header-11 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <frame26454 :className="frame26454Props.className" />
          </div>
          <div class="frame-2548-8">
            <div class="flex-row-14">
              <div class="flex-col-21">
                <header82 :spanText="header82Props.spanText" :frame2443Props="header82Props.frame2443Props" />
                <div class="tab-1">
                  <tab-menu72 />
                  <tab-menu3 />
                  <tab-menu4 />
                  <tab-menu5 />
                  <tab-menu6 />
                </div>
                <img class="line-701-5" :src="line701" alt="Line 701" />
                <div class="buttons-28">
                  <button42 :className="button42Props.className" />
                  <div class="button-101">
                    <img class="add-11" :src="add" alt="Add" />
                    <div class="text-173 poppins-medium-white-14px">
                      <span class="poppins-medium-white-14px">{{ spanText2 }}</span>
                    </div>
                  </div>
                </div>
                <div class="table-7">
                  <div class="row-settings-register-price-list">
                    <cell112 />
                    <div class="cell-141">
                      <div class="blue-t-shirt-xs-54 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText3 }}</span>
                      </div>
                      <img class="sort-19" :src="sort1" alt="Sort" />
                    </div>
                    <div class="cell-142">
                      <div class="blue-t-shirt-xs-55 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText4 }}</span>
                      </div>
                      <img class="sort-19" :src="sort2" alt="Sort" />
                    </div>
                    <div class="cell-143">
                      <div class="blue-t-shirt-xs-56 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText5 }}</span>
                      </div>
                      <img class="sort-19" :src="sort3" alt="Sort" />
                    </div>
                  </div>
                  <div class="table-row-12">
                    <row-settings-register-price-list
                      :cell6Props="rowSettingsRegisterPriceList1Props.cell6Props"
                      :cell7Props="rowSettingsRegisterPriceList1Props.cell7Props"
                      :statusProps="rowSettingsRegisterPriceList1Props.statusProps"
                    />
                    <row-settings-register-price-list
                      :cell6Props="rowSettingsRegisterPriceList2Props.cell6Props"
                      :cell7Props="rowSettingsRegisterPriceList2Props.cell7Props"
                      :statusProps="rowSettingsRegisterPriceList2Props.statusProps"
                    />
                    <row-settings-register-price-list
                      :cell6Props="rowSettingsRegisterPriceList3Props.cell6Props"
                      :cell7Props="rowSettingsRegisterPriceList3Props.cell7Props"
                      :statusProps="rowSettingsRegisterPriceList3Props.statusProps"
                    />
                    <row-settings-register-price-list
                      :cell6Props="rowSettingsRegisterPriceList4Props.cell6Props"
                      :cell7Props="rowSettingsRegisterPriceList4Props.cell7Props"
                      :statusProps="rowSettingsRegisterPriceList4Props.statusProps"
                    />
                    <row-settings-register-price-list
                      :cell6Props="rowSettingsRegisterPriceList5Props.cell6Props"
                      :cell7Props="rowSettingsRegisterPriceList5Props.cell7Props"
                      :statusProps="rowSettingsRegisterPriceList5Props.statusProps"
                    />
                    <row-settings-register-price-list
                      :cell6Props="rowSettingsRegisterPriceList6Props.cell6Props"
                      :cell7Props="rowSettingsRegisterPriceList6Props.cell7Props"
                      :statusProps="rowSettingsRegisterPriceList6Props.statusProps"
                    />
                    <row-settings-register-price-list
                      :cell6Props="rowSettingsRegisterPriceList7Props.cell6Props"
                      :cell7Props="rowSettingsRegisterPriceList7Props.cell7Props"
                      :statusProps="rowSettingsRegisterPriceList7Props.statusProps"
                    />
                    <row-settings-register-price-list
                      :cell6Props="rowSettingsRegisterPriceList8Props.cell6Props"
                      :cell7Props="rowSettingsRegisterPriceList8Props.cell7Props"
                      :statusProps="rowSettingsRegisterPriceList8Props.statusProps"
                    />
                  </div>
                </div>
              </div>
              <div class="scroll-bar-5"></div>
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
import TabMenu4 from "./TabMenu4";
import TabMenu5 from "./TabMenu5";
import TabMenu6 from "./TabMenu6";
import Button42 from "./Button42";
import Cell112 from "./Cell112";
import RowSettingsRegisterPriceList from "./RowSettingsRegisterPriceList";
import BottomSection2 from "./BottomSection2";
export default {
  name: "SettingsRegisterPriceLists",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame26454,
    Header82,
    TabMenu72,
    TabMenu3,
    TabMenu4,
    TabMenu5,
    TabMenu6,
    Button42,
    Cell112,
    RowSettingsRegisterPriceList,
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
    "spanText5",
    "sort3",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "frame26454Props",
    "header82Props",
    "button42Props",
    "rowSettingsRegisterPriceList1Props",
    "rowSettingsRegisterPriceList2Props",
    "rowSettingsRegisterPriceList3Props",
    "rowSettingsRegisterPriceList4Props",
    "rowSettingsRegisterPriceList5Props",
    "rowSettingsRegisterPriceList6Props",
    "rowSettingsRegisterPriceList7Props",
    "rowSettingsRegisterPriceList8Props",
    "bottomSection2Props",
  ],
};
</script>

<style>
.settings-u47-register-u47-price-lists {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-19 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 928px;
  position: relative;
  width: 1216px;
}

.flex-row-13 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 833px;
  min-width: 1152px;
}

.flex-col-20 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  position: relative;
  width: 184px;
}

.page-header-11 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2548-8 {
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

.flex-row-14 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 728px;
  margin-top: 24px;
  min-width: 896px;
}

.flex-col-21 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 728px;
  position: relative;
  width: 864px;
}

.tab-1 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  margin-top: 40px;
  min-width: 660px;
  position: relative;
}

.line-701-5 {
  height: 1px;
  width: 864px;
}

.buttons-28 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 8px;
  margin-top: 23px;
  min-width: 254px;
  position: relative;
}

.button-101 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 146px;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
}

.button-101:hover {
  transform: translate(0, -5px);
}

.add-11 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-173 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 94px;
  text-align: center;
}

.table-7 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 532px;
  margin-top: 24px;
  width: 864px;
}

.row-settings-register-price-list {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 864px;
}

.cell-141 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 176px;
}

.blue-t-shirt-xs-54 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 36px;
}

.sort-19 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-142 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 384px;
}

.blue-t-shirt-xs-55 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 76px;
}

.cell-143 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 25.5px;
  width: 176px;
}

.blue-t-shirt-xs-56 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 109px;
}

.table-row-12 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 426px;
  position: relative;
  width: 864px;
}

.scroll-bar-5 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 92px;
  width: 12px;
}
</style>
