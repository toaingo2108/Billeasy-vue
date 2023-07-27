<template>
  <div class="container-center-horizontal">
    <div class="invoices-u47-imported-u47-rules-u47-new-rule screen">
      <div class="overlap-group-56">
        <img class="line-701-45" :src="line701" alt="Line 701" /><table32 v-bind="table3Props" />
        <left-navigation-menu82 v-bind="leftNavigationMenuProps" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <x-button19 :className="buttonProps.className" />
        <bottom-section92
          :className="bottomSectionProps.className"
          :iconButtonProps="bottomSectionProps.iconButtonProps"
          :paginationProps="bottomSectionProps.paginationProps"
        />
        <div class="scroll-bar-27"></div>
        <div class="tab-43">
          <tab-menu222 :general="tabMenu2Props.general" :spanText="tabMenu2Props.spanText" />
          <tab-menu332 />
        </div>
        <header10 :button32Props="topNavigationProps2.button32Props" />
        <div class="overlay-19">
          <div class="new-rule">
            <div class="title-99 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText1 }}</span>
            </div>
            <div class="flex-row-185">
              <div class="flex-col-193">
                <div class="dropdown-158">
                  <div class="label-413 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText2 }}</span
                    ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText3 }}</span>
                  </div>
                  <div class="dropdown-157">
                    <div class="text-366 poppins-medium-ebony-14px">
                      <span class="poppins-medium-ebony-14px">{{ spanText4 }}</span>
                    </div>
                    <img class="chevron-down-327" :src="chevronDown1" alt="Chevron Down" />
                  </div>
                </div>
                <div class="input-field-70">
                  <div class="label-413 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span
                    ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText6 }}</span>
                  </div>
                  <div class="input-140">
                    <input
                      class="input-text-217 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder"
                      :type="inputType"
                    />
                  </div>
                </div>
              </div>
              <div class="flex-col-193">
                <div class="input-field-71">
                  <div class="label-413 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText7 }}</span
                    ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText8 }}</span>
                  </div>
                  <div class="input-140">
                    <div class="input-text-218 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText9 }}</span>
                    </div>
                  </div>
                </div>
                <div class="dropdown-159">
                  <div class="label-413 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText10 }}</span
                    ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText11 }}</span>
                  </div>
                  <div class="dropdown-157">
                    <div class="text-366 poppins-medium-ebony-14px">
                      <span class="poppins-medium-ebony-14px">{{ spanText12 }}</span>
                    </div>
                    <img class="chevron-down-327" :src="chevronDown2" alt="Chevron Down" />
                  </div>
                </div>
              </div>
            </div>
            <div class="frame-2525">
              <dropdown2322 :spanText1="dropdown21Props.spanText1" :spanText3="dropdown21Props.spanText3" />
              <dropdown2322 :spanText1="dropdown22Props.spanText1" :spanText3="dropdown22Props.spanText3" />
              <div class="input-field-72">
                <div class="label-414 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText13 }}</span
                  ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText14 }}</span>
                </div>
                <div class="input-141">
                  <div class="input-text-219 poppins-normal-ebony-14px">
                    <span class="poppins-normal-ebony-14px">{{ spanText15 }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-section-88">
              <img class="top-border-97" :src="topBorder" alt="Top Border" /><buttons62 />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table32 from "./Table32";
import LeftNavigationMenu82 from "./LeftNavigationMenu82";
import TopNavigation from "./TopNavigation";
import xButton19 from "./xButton19";
import BottomSection92 from "./BottomSection92";
import TabMenu222 from "./TabMenu222";
import TabMenu332 from "./TabMenu332";
import Header10 from "./Header10";
import Dropdown2322 from "./Dropdown2322";
import Buttons62 from "./Buttons62";
export default {
  name: "InvoicesImportedRulesNewRule",
  components: {
    Table32,
    LeftNavigationMenu82,
    TopNavigation,
    xButton19,
    BottomSection92,
    TabMenu222,
    TabMenu332,
    Header10,
    Dropdown2322,
    Buttons62,
  },
  props: [
    "line701",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "chevronDown1",
    "spanText5",
    "spanText6",
    "inputType",
    "inputPlaceholder",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "spanText11",
    "spanText12",
    "chevronDown2",
    "spanText13",
    "spanText14",
    "spanText15",
    "topBorder",
    "table3Props",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "buttonProps",
    "bottomSectionProps",
    "tabMenu2Props",
    "topNavigationProps2",
    "dropdown21Props",
    "dropdown22Props",
  ],
};
</script>

<style>
.invoices-u47-imported-u47-rules-u47-new-rule {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-56 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.line-701-45 {
  height: 1px;
  left: 256px;
  position: absolute;
  top: 208px;
  width: 1152px;
}

.scroll-bar-27 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 382px;
  width: 12px;
}

.tab-43 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  left: 256px;
  min-width: 256px;
  position: absolute;
  top: 168px;
}

.overlay-19 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 240px 328px;
  position: absolute;
  top: 0;
}

.new-rule {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 465px;
  overflow: hidden;
  width: 560px;
}

.title-99 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.flex-row-185 {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  height: 156px;
  margin-top: 41px;
  min-width: 496px;
}

.flex-col-193 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 156px;
  width: 232px;
}

.dropdown-158,
.input-field-70,
.input-field-71,
.dropdown-159 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 232px;
}

.label-413 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 232px;
}

.dropdown-157 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 232px;
}

.text-366 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 176px;
}

.chevron-down-327 {
  height: 24px;
  width: 24px;
}

.input-140 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 232px;
}

.input-text-217 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 208px;
}

.input-text-217::placeholder {
  color: #0d0d1d99;
}

.input-text-218 {
  letter-spacing: 0;
  line-height: 24px;
  width: 208px;
}

.frame-2525 {
  align-items: flex-start;
  display: flex;
  gap: 14px;
  height: 66px;
  margin-top: 24px;
  min-width: 496px;
  position: relative;
}

.input-field-72 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 156px;
}

.label-414 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 156px;
}

.input-141 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 156px;
}

.input-text-219 {
  letter-spacing: 0;
  line-height: 24px;
  width: 132px;
}

.bottom-section-88 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 23px;
  position: relative;
  width: 560px;
}

.top-border-97 {
  height: 1px;
  width: 560px;
}
</style>
