<template>
  <div class="container-center-horizontal">
    <div class="subscriptions-u47-new-category screen">
      <div class="overlap-group-52">
        <img class="line-701-40" :src="line701" alt="Line 701" /><table3
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
        <div class="scroll-bar-21"></div>
        <h1 class="page-header-66 poppins-semi-bold-ebony-28px">
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
        <div class="overlay-18">
          <div class="new-subscription-category">
            <div class="title-96 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
            <div class="flex-row-161">
              <div class="input-field-57">
                <div class="label-376 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span
                  ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText4 }}</span>
                </div>
                <div class="input-114">
                  <input
                    class="input-text-188 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder1"
                    :type="inputType1"
                  />
                </div>
              </div>
              <div class="dropdown-139">
                <div class="label-376 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span
                  ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText6 }}</span>
                </div>
                <dropdown3 :spanText="leftNavigationMenu3Props2.spanText" />
              </div>
            </div>
            <dropdown222 :spanText1="dropdown22Props.spanText1" :dropdownProps="dropdown22Props.dropdownProps" />
            <div class="input-field-58">
              <div class="label-377 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText7 }}</span>
              </div>
              <div class="input-115">
                <input
                  class="input-text-189 poppins-normal-manatee-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder2"
                  :type="inputType2"
                />
              </div>
            </div>
            <bottom-section32 :className="bottomSection3Props.className" />
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
import Dropdown3 from "./Dropdown3";
import Dropdown222 from "./Dropdown222";
import BottomSection32 from "./BottomSection32";
export default {
  name: "SubscriptionsNewCategory",
  components: {
    Table3,
    LeftNavigationMenu32,
    TopNavigation,
    Actions2,
    xButton19,
    BottomSection92,
    Tab22,
    Options,
    Dropdown3,
    Dropdown222,
    BottomSection32,
  },
  props: [
    "line701",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "inputType1",
    "inputPlaceholder1",
    "spanText5",
    "spanText6",
    "spanText7",
    "inputType2",
    "inputPlaceholder2",
    "table3Props",
    "leftNavigationMenu3Props",
    "topNavigationProps",
    "actions2Props",
    "buttonProps",
    "bottomSection9Props",
    "optionsProps",
    "leftNavigationMenu3Props2",
    "dropdown22Props",
    "bottomSection3Props",
  ],
};
</script>

<style>
.subscriptions-u47-new-category {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-52 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.line-701-40 {
  height: 1px;
  left: 256px;
  position: absolute;
  top: 208px;
  width: 1152px;
}

.scroll-bar-21 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 382px;
  width: 12px;
}

.page-header-66 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-18 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 192px 352px;
  position: absolute;
  top: 0;
}

.new-subscription-category {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 520px;
  overflow: hidden;
  position: relative;
  width: 512px;
}

.title-96 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.flex-row-161 {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  height: 66px;
  margin-top: 41px;
  min-width: 448px;
}

.input-field-57 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 208px;
}

.label-376 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 208px;
}

.input-114 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 208px;
}

.input-text-188 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 184px;
}

.input-text-188::placeholder {
  color: #0d0d1d99;
}

.dropdown-139 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  position: relative;
  width: 208px;
}

.input-field-58 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 120px;
  width: 448px;
}

.label-377 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 448px;
}

.input-115 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 94px;
  overflow: hidden;
  padding: 9px 12px;
  width: 448px;
}

.input-text-189 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 424px;
}

.input-text-189::placeholder {
  color: #8a8aa899;
}
</style>
