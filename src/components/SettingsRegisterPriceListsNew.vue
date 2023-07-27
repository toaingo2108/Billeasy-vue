<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-register-u47-price-lists-u47-new screen">
      <div class="overlap-group-10">
        <left-navigation-menu v-bind="leftNavigationMenuProps" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-12 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <frame26454 />
        <div class="frame-2548-9">
          <div class="flex-row-15">
            <div class="flex-col-22">
              <header82 :spanText="header82Props.spanText" :frame2443Props="header82Props.frame2443Props" />
              <div class="navbar-4">
                <div class="navbar-link-label-16 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText2 }}</span>
                </div>
                <div class="navbar-link-label-17 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText3 }}</span>
                </div>
                <tab-menu4 :className="tabMenu4Props.className" />
                <div class="navbar-link-label-18 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText4 }}</span>
                </div>
                <div class="navbar-link-label-19 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText5 }}</span>
                </div>
              </div>
              <img class="line-701-6" :src="line701" alt="Line 701" />
              <div class="buttons-29">
                <button42 />
                <div class="button-102">
                  <img class="add-12" :src="add" alt="Add" />
                  <div class="text-174 poppins-medium-white-14px">
                    <span class="poppins-medium-white-14px">{{ spanText6 }}</span>
                  </div>
                </div>
              </div>
              <div class="table-8">
                <div class="row-settings-register-price-list-3">
                  <cell112 />
                  <div class="cell-153">
                    <div class="blue-t-shirt-xs-64 poppins-semi-bold-ebony-13px">
                      <span class="poppins-semi-bold-ebony-13px">{{ spanText7 }}</span>
                    </div>
                    <img class="sort-20" :src="sort1" alt="Sort" />
                  </div>
                  <div class="cell-154">
                    <div class="blue-t-shirt-xs-65 poppins-semi-bold-ebony-13px">
                      <span class="poppins-semi-bold-ebony-13px">{{ spanText8 }}</span>
                    </div>
                    <img class="sort-20" :src="sort2" alt="Sort" />
                  </div>
                  <div class="cell-155">
                    <div class="blue-t-shirt-xs-66 poppins-semi-bold-ebony-13px">
                      <span class="poppins-semi-bold-ebony-13px">{{ spanText9 }}</span>
                    </div>
                    <img class="sort-20" :src="sort3" alt="Sort" />
                  </div>
                </div>
                <div class="table-row-13">
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
            <div class="scroll-bar-6"></div>
          </div>
          <bottom-section2
            :iconButtonProps="bottomSection2Props.iconButtonProps"
            :paginationProps="bottomSection2Props.paginationProps"
          />
        </div>
        <div class="overlay-6">
          <div class="new-price-list">
            <div class="title-33 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText10 }}</span>
            </div>
            <div class="input-field-7">
              <div class="label-97 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText11 }}</span
                ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText12 }}</span>
              </div>
              <div class="input-28">
                <input
                  class="input-text-33 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder1"
                  :type="inputType1"
                  required
                />
              </div>
            </div>
            <div class="input-field-8">
              <div class="label-97 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText13 }}</span>
              </div>
              <div class="input-29">
                <input
                  class="input-text-33 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder2"
                  :type="inputType2"
                />
              </div>
            </div>
            <option52 :spanText="option52Props.spanText" :checkboxProps="option52Props.checkboxProps" />
            <bottom-section4 :check="bottomSection4Props.check" :className="bottomSection4Props.className" />
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
import TabMenu4 from "./TabMenu4";
import Button42 from "./Button42";
import Cell112 from "./Cell112";
import RowSettingsRegisterPriceList from "./RowSettingsRegisterPriceList";
import BottomSection2 from "./BottomSection2";
import Option52 from "./Option52";
import BottomSection4 from "./BottomSection4";
export default {
  name: "SettingsRegisterPriceListsNew",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame26454,
    Header82,
    TabMenu4,
    Button42,
    Cell112,
    RowSettingsRegisterPriceList,
    BottomSection2,
    Option52,
    BottomSection4,
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
    "sort1",
    "spanText8",
    "sort2",
    "spanText9",
    "sort3",
    "spanText10",
    "spanText11",
    "spanText12",
    "inputType1",
    "inputPlaceholder1",
    "spanText13",
    "inputType2",
    "inputPlaceholder2",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "header82Props",
    "tabMenu4Props",
    "rowSettingsRegisterPriceList1Props",
    "rowSettingsRegisterPriceList2Props",
    "rowSettingsRegisterPriceList3Props",
    "rowSettingsRegisterPriceList4Props",
    "rowSettingsRegisterPriceList5Props",
    "rowSettingsRegisterPriceList6Props",
    "rowSettingsRegisterPriceList7Props",
    "rowSettingsRegisterPriceList8Props",
    "bottomSection2Props",
    "option52Props",
    "bottomSection4Props",
  ],
};
</script>

<style>
.settings-u47-register-u47-price-lists-u47-new {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-10 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.page-header-12 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.frame-2548-9 {
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

.flex-row-15 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 728px;
  margin-top: 24px;
  min-width: 896px;
}

.flex-col-22 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 728px;
  position: relative;
  width: 864px;
}

.navbar-4 {
  align-items: center;
  display: flex;
  height: 40px;
  margin-top: 40px;
  min-width: 660px;
  padding: 0 31px;
  position: relative;
}

.navbar-link-label-16 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  min-width: 77px;
  white-space: nowrap;
}

.navbar-link-label-17 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 44px;
  min-width: 112px;
  white-space: nowrap;
}

.navbar-link-label-18 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 34px;
  min-width: 36px;
  white-space: nowrap;
}

.navbar-link-label-19 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 68px;
  min-width: 71px;
  white-space: nowrap;
}

.line-701-6 {
  height: 1px;
  width: 864px;
}

.buttons-29 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 8px;
  margin-top: 23px;
  min-width: 254px;
  position: relative;
}

.button-102 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 146px;
  padding: 8.5px 12px;
}

.add-12 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-174 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 94px;
  text-align: center;
}

.table-8 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 532px;
  margin-top: 24px;
  width: 864px;
}

.row-settings-register-price-list-3 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 864px;
}

.cell-153 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 176px;
}

.blue-t-shirt-xs-64 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 36px;
}

.sort-20 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-154 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 384px;
}

.blue-t-shirt-xs-65 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 76px;
}

.cell-155 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 25.5px;
  width: 176px;
}

.blue-t-shirt-xs-66 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 109px;
}

.table-row-13 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 426px;
  position: relative;
  width: 864px;
}

.scroll-bar-6 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 92px;
  width: 12px;
}

.overlay-6 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-end;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 247px 408px;
  position: absolute;
  top: 0;
}

.new-price-list {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 472px;
  overflow: hidden;
  position: relative;
  width: 400px;
}

.title-33 {
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.input-field-7 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 41px;
  min-height: 66px;
  width: 336px;
}

.label-97 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 336px;
}

.input-28 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-33 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-33::placeholder {
  color: #0d0d1d99;
}

.input-field-8 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 104px;
  width: 336px;
}

.input-29 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 78px;
  overflow: hidden;
  padding: 9px 12px;
  width: 336px;
}
</style>
