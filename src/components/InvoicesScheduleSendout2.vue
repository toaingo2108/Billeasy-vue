<template>
  <div class="container-center-horizontal">
    <div class="invoices-u47-schedule-sendout2 screen">
      <div class="overlap-group-60">
        <img class="line-701-50" :src="line701" alt="Line 701" /><table112
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
        <div class="scroll-bar-32"></div>
        <h1 class="page-header-77 poppins-semi-bold-ebony-28px">
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
        <div class="overlay-23">
          <div class="send-invoice">
            <div class="title-103 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
            <dropdown322 :spanText1="dropdown3Props.spanText1" :spanText3="dropdown3Props.spanText3" />
            <div class="option-55">
              <div class="checkbox-121"></div>
              <div class="label-434 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText3 }}</span>
              </div>
            </div>
            <div class="bottom-section-91">
              <img class="top-border-100" :src="topBorder" alt="Top Border" />
              <div class="buttons-59">
                <button222 />
                <div class="button-246">
                  <img class="send-1" :src="send" alt="Send" />
                  <div class="text-371 poppins-medium-white-14px">
                    <span class="poppins-medium-white-14px">{{ spanText4 }}</span>
                  </div>
                </div>
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
import Button222 from "./Button222";
export default {
  name: "InvoicesScheduleSendout2",
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
    Button222,
  },
  props: [
    "line701",
    "spanText1",
    "spanText2",
    "spanText3",
    "topBorder",
    "send",
    "spanText4",
    "tableProps",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "actionsProps",
    "buttonProps",
    "bottomSectionProps",
    "optionsProps",
    "dropdown3Props",
  ],
};
</script>

<style>
.invoices-u47-schedule-sendout2 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-60 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.line-701-50 {
  height: 1px;
  left: 256px;
  position: absolute;
  top: 208px;
  width: 1152px;
}

.scroll-bar-32 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 382px;
  width: 12px;
}

.page-header-77 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-23 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 256px 408px;
  position: absolute;
  top: 0;
}

.send-invoice {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 344px;
  overflow: hidden;
  position: relative;
  width: 400px;
}

.title-103 {
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.option-55 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-left: 32px;
  margin-top: 24px;
  min-width: 163px;
}

.checkbox-121 {
  align-self: center;
  background-color: var(--white);
  border-radius: 6px;
  height: 18px;
  width: 18px;
}

.label-434 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.bottom-section-91 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 34px;
  width: 400px;
}

.top-border-100 {
  height: 1px;
  width: 400px;
}

.buttons-59 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 240px;
  position: relative;
}

.button-246 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 128px;
  padding: 8.5px 32px;
  transition: all 0.15s ease;
}

.button-246:hover {
  transform: translate(0, -5px);
}

.send-1 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-371 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 36px;
  text-align: center;
}
</style>
