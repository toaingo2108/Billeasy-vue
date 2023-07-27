<template>
  <div class="container-center-horizontal">
    <div class="invoices-u47-payment screen">
      <div class="overlap-group-61">
        <img class="line-701-51" :src="line701" alt="Line 701" /><table112
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
        <div class="scroll-bar-33"></div>
        <h1 class="page-header-78 poppins-semi-bold-ebony-28px">
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
        <div class="overlay-24">
          <div class="payment-4">
            <div class="title-104 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
            <div class="input-field-76">
              <div class="label-435 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span
                ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText4 }}</span>
              </div>
              <div class="input-145">
                <input
                  class="input-text-223 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder1"
                  :type="inputType1"
                />
              </div>
            </div>
            <div class="input-field-75">
              <div class="label-435 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span
                ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText6 }}</span>
              </div>
              <div class="input-145">
                <input
                  class="input-text-223 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder2"
                  :type="inputType2"
                />
              </div>
            </div>
            <div class="input-field-75">
              <p class="label-435 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText7 }}</span>
              </p>
              <div class="input-145">
                <input
                  class="input-text-223 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder3"
                  :type="inputType3"
                />
              </div>
            </div>
            <div class="option-56">
              <checkbox :className="leftNavigationMenuProps2.className" />
              <div class="label-436 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText8 }}</span>
              </div>
            </div>
            <div class="flex-row-189">
              <div class="label-437 poppins-semi-bold-ebony-14px">
                <span class="poppins-semi-bold-ebony-14px">{{ spanText9 }}</span>
              </div>
              <img class="top-border-101" :src="topBorder1" alt="Top Border" />
            </div>
            <frame2678 />
            <frame2678 :className="frame26781Props.className" />
            <frame2678 :className="frame26782Props.className" />
            <div class="bottom-section-92">
              <img class="top-border-102" :src="topBorder2" alt="Top Border" />
              <div class="buttons-60">
                <button222 />
                <div class="button-247">
                  <img class="check-168" :src="check" alt="Check" />
                  <div class="text-372 poppins-medium-white-14px">
                    <span class="poppins-medium-white-14px">{{ spanText10 }}</span>
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
import Checkbox from "./Checkbox";
import Frame2678 from "./Frame2678";
import Button222 from "./Button222";
export default {
  name: "InvoicesPayment",
  components: {
    Table112,
    LeftNavigationMenu82,
    TopNavigation,
    Actions62,
    xButton19,
    BottomSection92,
    Tab5,
    Options,
    Checkbox,
    Frame2678,
    Button222,
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
    "inputType2",
    "inputPlaceholder2",
    "spanText7",
    "inputType3",
    "inputPlaceholder3",
    "spanText8",
    "spanText9",
    "topBorder1",
    "topBorder2",
    "check",
    "spanText10",
    "tableProps",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "actionsProps",
    "buttonProps",
    "bottomSectionProps",
    "optionsProps",
    "leftNavigationMenuProps2",
    "frame26781Props",
    "frame26782Props",
  ],
};
</script>

<style>
.invoices-u47-payment {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-61 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.line-701-51 {
  height: 1px;
  left: 256px;
  position: absolute;
  top: 208px;
  width: 1152px;
}

.scroll-bar-33 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 382px;
  width: 12px;
}

.page-header-78 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-24 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 136px 368px;
  position: absolute;
  top: 0;
}

.payment-4 {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 688px;
  overflow: hidden;
  position: relative;
  width: 480px;
}

.title-104 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: 31px;
  width: 416px;
}

.input-field-76 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 41px;
  min-height: 66px;
  width: 416px;
}

.label-435 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 416px;
}

.input-145 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 416px;
}

.input-text-223 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 392px;
}

.input-text-223::placeholder {
  color: #0d0d1d99;
}

.input-field-75 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 416px;
}

.option-56 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-left: 32px;
  margin-top: 24px;
  min-width: 67px;
  position: relative;
}

.label-436 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.flex-row-189 {
  align-items: center;
  display: flex;
  gap: 14px;
  height: 24px;
  margin-top: 31px;
  min-width: 416px;
}

.label-437 {
  letter-spacing: 0;
  line-height: 24px;
  min-width: 118px;
  white-space: nowrap;
}

.top-border-101 {
  height: 1px;
  margin-top: 5px;
  width: 284px;
}

.bottom-section-92 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 34px;
  width: 480px;
}

.top-border-102 {
  height: 1px;
  width: 480px;
}

.buttons-60 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 240px;
  position: relative;
}

.button-247 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 128px;
  padding: 8.5px 21px;
  transition: all 0.15s ease;
}

.button-247:hover {
  transform: translate(0, -5px);
}

.check-168 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-372 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 58px;
  text-align: center;
}
</style>
