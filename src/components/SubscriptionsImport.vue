<template>
  <div class="container-center-horizontal">
    <div class="subscriptions-u47-import screen">
      <div class="overlap-group-49">
        <img class="line-701-39" :src="line701" alt="Line 701" /><table3
          :cell101Props="table3Props.cell101Props"
          :cell102Props="table3Props.cell102Props"
          :tableRow2Props="table3Props.tableRow2Props"
        />
        <left-navigation-menu32 v-bind="leftNavigationMenu3Props" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <actions2 :searchProps="actions2Props.searchProps" :buttons3Props="actions2Props.buttons3Props" />
        <x-button19 :className="buttonProps.className" />
        <bottom-section92
          :className="bottomSection9Props.className"
          :iconButtonProps="bottomSection9Props.iconButtonProps"
          :paginationProps="bottomSection9Props.paginationProps"
        />
        <div class="scroll-bar-18"></div>
        <h1 class="page-header-63 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <tab22 />
        <options
          :className="optionsProps.className"
          :dropdownItem1Props="optionsProps.dropdownItem1Props"
          :dropdownItem2Props="optionsProps.dropdownItem2Props"
          :dropdownItem3Props="optionsProps.dropdownItem3Props"
          :dropdownItem4Props="optionsProps.dropdownItem4Props"
          :dropdownItem5Props="optionsProps.dropdownItem5Props"
        />
        <div class="overlay-17">
          <div class="import-subscriptions">
            <div class="import-subscriptions-1 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
            <div class="flex-row-152">
              <div class="label-356 poppins-medium-ebony-14px">
                <span class="poppins-medium-ebony-14px">{{ spanText3 }}</span>
              </div>
              <div class="products-to-import">
                <div class="option-49">
                  <div class="radio-button"></div>
                  <div class="label-355 poppins-normal-ebony-14px">
                    <span class="poppins-normal-ebony-14px">{{ spanText4 }}</span>
                  </div>
                </div>
                <div class="option-50">
                  <radio-button />
                  <div class="label-355 poppins-normal-ebony-14px">
                    <span class="poppins-normal-ebony-14px">{{ spanText5 }}</span>
                  </div>
                </div>
              </div>
            </div>
            <bottom-section322
              :className="leftNavigationMenu3Props2.className"
              :button222Props="leftNavigationMenu3Props2.button222Props"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table3 from "./Table3";
import LeftNavigationMenu32 from "./LeftNavigationMenu32";
import TopNavigation from "./TopNavigation";
import Actions2 from "./Actions2";
import xButton19 from "./xButton19";
import BottomSection92 from "./BottomSection92";
import Tab22 from "./Tab22";
import Options from "./Options";
import RadioButton from "./RadioButton";
import BottomSection322 from "./BottomSection322";
export default {
  name: "SubscriptionsImport",
  components: {
    Table3,
    LeftNavigationMenu32,
    TopNavigation,
    Actions2,
    xButton19,
    BottomSection92,
    Tab22,
    Options,
    RadioButton,
    BottomSection322,
  },
  props: [
    "line701",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "table3Props",
    "leftNavigationMenu3Props",
    "topNavigationProps",
    "actions2Props",
    "buttonProps",
    "bottomSection9Props",
    "optionsProps",
    "leftNavigationMenu3Props2",
  ],
};
</script>

<style>
.subscriptions-u47-import {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-49 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.line-701-39 {
  height: 1px;
  left: 256px;
  position: absolute;
  top: 208px;
  width: 1152px;
}

.scroll-bar-18 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 382px;
  width: 12px;
}

.page-header-63 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-17 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 242px 296px;
  position: absolute;
  top: 0;
}

.import-subscriptions {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 273px;
  overflow: hidden;
  position: relative;
  width: 624px;
}

.import-subscriptions-1 {
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.flex-row-152 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 36px;
  height: 25px;
  margin-right: 2px;
  margin-top: 40px;
  min-width: 558px;
}

.label-356 {
  letter-spacing: 0;
  line-height: 24px;
  min-width: 165px;
  white-space: nowrap;
}

.products-to-import {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 40px;
  min-width: 357px;
}

.option-49 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 145px;
}

.radio-button {
  align-self: center;
  background-color: var(--white);
  border-radius: 100px;
  height: 18px;
  width: 18px;
}

.label-355 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-50 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 172px;
  position: relative;
}
</style>
