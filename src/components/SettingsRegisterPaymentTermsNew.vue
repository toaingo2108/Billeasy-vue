<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-register-u47-payment-terms-u47-new screen">
      <div class="overlap-group-11">
        <left-navigation-menu v-bind="leftNavigationMenuProps" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-13 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <frame26454 />
        <div class="frame-2548-10">
          <div class="flex-row-16">
            <div class="flex-col-23">
              <header82 :spanText="header82Props.spanText" :frame2443Props="header82Props.frame2443Props" />
              <div class="navbar-5">
                <div class="navbar-link-label-20 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText2 }}</span>
                </div>
                <tab-menu7 />
                <div class="navbar-link-label-21 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText3 }}</span>
                </div>
                <div class="navbar-link-label-22 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText4 }}</span>
                </div>
                <div class="navbar-link-label-23 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText5 }}</span>
                </div>
              </div>
              <img class="line-701-7" :src="line701" alt="Line 701" />
              <div class="buttons-30">
                <button42 />
                <button2 :refresh="button2Props.refresh" :spanText="button2Props.spanText" />
              </div>
              <div class="table-9">
                <div class="row-settings-register-currencies-11">
                  <cell112 />
                  <div class="cell-156">
                    <div class="blue-t-shirt-xs-67 poppins-semi-bold-ebony-13px">
                      <span class="poppins-semi-bold-ebony-13px">{{ spanText6 }}</span>
                    </div>
                    <img class="sort-21" :src="sort" alt="Sort" />
                  </div>
                  <cell133 />
                </div>
                <table-row22 />
              </div>
            </div>
            <div class="scroll-bar-7"></div>
          </div>
          <bottom-section2
            :iconButtonProps="bottomSection2Props.iconButtonProps"
            :paginationProps="bottomSection2Props.paginationProps"
          />
        </div>
        <div class="overlay-7">
          <div class="new-payment-terms">
            <div class="title-34 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText7 }}</span>
            </div>
            <div class="input-field-9">
              <div class="label-101 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText8 }}</span
                ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText9 }}</span>
              </div>
              <div class="input-30">
                <input
                  class="input-text-34 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder1"
                  :type="inputType1"
                />
              </div>
            </div>
            <div class="input-field-10">
              <div class="label-101 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText10 }}</span>
              </div>
              <div class="input-31">
                <input
                  class="input-text-34 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder2"
                  :type="inputType2"
                />
              </div>
            </div>
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
import TabMenu7 from "./TabMenu7";
import Button42 from "./Button42";
import Button2 from "./Button2";
import Cell112 from "./Cell112";
import Cell133 from "./Cell133";
import TableRow22 from "./TableRow22";
import BottomSection2 from "./BottomSection2";
import BottomSection4 from "./BottomSection4";
export default {
  name: "SettingsRegisterPaymentTermsNew",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame26454,
    Header82,
    TabMenu7,
    Button42,
    Button2,
    Cell112,
    Cell133,
    TableRow22,
    BottomSection2,
    BottomSection4,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "line701",
    "spanText6",
    "sort",
    "spanText7",
    "spanText8",
    "spanText9",
    "inputType1",
    "inputPlaceholder1",
    "spanText10",
    "inputType2",
    "inputPlaceholder2",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "header82Props",
    "button2Props",
    "bottomSection2Props",
    "bottomSection4Props",
  ],
};
</script>

<style>
.settings-u47-register-u47-payment-terms-u47-new {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-11 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.page-header-13 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.frame-2548-10 {
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

.flex-row-16 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 728px;
  margin-top: 24px;
  min-width: 896px;
}

.flex-col-23 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 728px;
  position: relative;
  width: 864px;
}

.navbar-5 {
  align-items: center;
  display: flex;
  height: 40px;
  margin-top: 40px;
  min-width: 660px;
  padding: 0 31px;
  position: relative;
}

.navbar-link-label-20 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  min-width: 77px;
  white-space: nowrap;
}

.navbar-link-label-21 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 35px;
  min-width: 69px;
  white-space: nowrap;
}

.navbar-link-label-22 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 69px;
  min-width: 36px;
  white-space: nowrap;
}

.navbar-link-label-23 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 68px;
  min-width: 71px;
  white-space: nowrap;
}

.line-701-7 {
  height: 1px;
  width: 864px;
}

.buttons-30 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-top: 23px;
  min-width: 304px;
  position: relative;
}

.table-9 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 532px;
  margin-top: 24px;
  position: relative;
  width: 864px;
}

.row-settings-register-currencies-11 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 864px;
}

.cell-156 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 224px;
}

.blue-t-shirt-xs-67 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 106px;
}

.sort-21 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.scroll-bar-7 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 92px;
  width: 12px;
}

.overlay-7 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 254px 408px;
  position: absolute;
  top: 0;
}

.new-payment-terms {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 412px;
  overflow: hidden;
  position: relative;
  width: 400px;
}

.title-34 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.input-field-9 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 41px;
  min-height: 66px;
  width: 336px;
}

.label-101 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 336px;
}

.input-30 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-34 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-34::placeholder {
  color: #0d0d1d99;
}

.input-field-10 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 104px;
  width: 336px;
}

.input-31 {
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
