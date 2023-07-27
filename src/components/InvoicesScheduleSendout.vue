<template>
  <div class="container-center-horizontal">
    <div class="invoices-u47-schedule-sendout screen">
      <div class="overlap-group-59">
        <img class="line-701-49" :src="line701" alt="Line 701" /><table112
          :className="tableProps.className"
          :tableRowProps="tableProps.tableRowProps"
        />
        <left-navigation-menu82 v-bind="leftNavigationMenuProps" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <actions62 :searchProps="actionsProps.searchProps" :button2Props="actionsProps.button2Props" />
        <x-button19 :className="buttonProps.className" />
        <bottom-section92
          :className="bottomSectionProps.className"
          :iconButtonProps="bottomSectionProps.iconButtonProps"
          :paginationProps="bottomSectionProps.paginationProps"
        />
        <div class="scroll-bar-31"></div>
        <h1 class="page-header-76 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <tab5 />
        <options
          :className="optionsProps.className"
          :dropdownItem1Props="optionsProps.dropdownItem1Props"
          :dropdownItem2Props="optionsProps.dropdownItem2Props"
          :dropdownItem3Props="optionsProps.dropdownItem3Props"
          :dropdownItem4Props="optionsProps.dropdownItem4Props"
          :dropdownItem5Props="optionsProps.dropdownItem5Props"
        />
        <div class="overlay-22">
          <div class="schedule-sendout-1">
            <div class="title-102 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
            <dropdown322 :spanText1="dropdown3Props.spanText1" :spanText3="dropdown3Props.spanText3" />
            <div class="input-field-74">
              <div class="label-432 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span>
              </div>
              <div class="input-144">
                <input
                  class="input-text-222 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder"
                  :type="inputType"
                />
              </div>
            </div>
            <div class="option-54">
              <checkbox :className="leftNavigationMenuProps2.className" />
              <div class="label-433 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText4 }}</span>
              </div>
            </div>
            <div class="bottom-section-90">
              <img class="top-border-99" :src="topBorder" alt="Top Border" />
              <div class="buttons-58">
                <button222 />
                <button52
                  :check="button5Props.check"
                  :spanText="button5Props.spanText"
                  :className="button5Props.className"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table112 from "./Table112";
import LeftNavigationMenu82 from "./LeftNavigationMenu82";
import TopNavigation from "./TopNavigation";
import Actions62 from "./Actions62";
import xButton19 from "./xButton19";
import BottomSection92 from "./BottomSection92";
import Tab5 from "./Tab5";
import Options from "./Options";
import Dropdown322 from "./Dropdown322";
import Checkbox from "./Checkbox";
import Button222 from "./Button222";
import Button52 from "./Button52";
export default {
  name: "InvoicesScheduleSendout",
  components: {
    Table112,
    LeftNavigationMenu82,
    TopNavigation,
    Actions62,
    xButton19,
    BottomSection92,
    Tab5,
    Options,
    Dropdown322,
    Checkbox,
    Button222,
    Button52,
  },
  props: [
    "line701",
    "spanText1",
    "spanText2",
    "spanText3",
    "inputType",
    "inputPlaceholder",
    "spanText4",
    "topBorder",
    "tableProps",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "actionsProps",
    "buttonProps",
    "bottomSectionProps",
    "optionsProps",
    "dropdown3Props",
    "leftNavigationMenuProps2",
    "button5Props",
  ],
};
</script>

<style>
.invoices-u47-schedule-sendout {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-59 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.line-701-49 {
  height: 1px;
  left: 256px;
  position: absolute;
  top: 208px;
  width: 1152px;
}

.scroll-bar-31 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 382px;
  width: 12px;
}

.page-header-76 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-22 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 224px 408px;
  position: absolute;
  top: 0;
}

.schedule-sendout-1 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 424px;
  overflow: hidden;
  position: relative;
  width: 400px;
}

.title-102 {
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.input-field-74 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 336px;
}

.label-432 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 336px;
}

.input-144 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-222 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-222::placeholder {
  color: #0d0d1d99;
}

.option-54 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-left: 32px;
  margin-top: 24px;
  min-width: 163px;
  position: relative;
}

.label-433 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.bottom-section-90 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 24px;
  width: 400px;
}

.top-border-99 {
  height: 1px;
  width: 400px;
}

.buttons-58 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-right: 32px;
  min-width: 240px;
  position: relative;
}
</style>
