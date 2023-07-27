<template>
  <div class="container-center-horizontal">
    <form class="settings-u47-templates-u47-subscription-u47-new screen" name="form2" action="form2" method="post">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-46">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-32">
          <div class="flex-col-47">
            <h1 class="page-header-24 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <div class="frame-2645-26">
              <div class="label-147 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText2 }}</span>
              </div>
              <div class="label-145 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText3 }}</span>
              </div>
              <div class="label-145 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText4 }}</span>
              </div>
              <div class="label-145 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText5 }}</span>
              </div>
              <div class="label-145 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText6 }}</span>
              </div>
              <div class="label-145 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText7 }}</span>
              </div>
              <div class="label-145 poppins-semi-bold-caribbean-green-14px">
                <span class="poppins-semi-bold-caribbean-green-14px">{{ spanText8 }}</span>
              </div>
              <div class="label-145 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText9 }}</span>
              </div>
            </div>
          </div>
          <div class="frame-2548-21">
            <header2 :className="header2Props.className" :frame2443Props="header2Props.frame2443Props" />
            <tab :className="tabProps.className" />
            <img class="line-701-16" :src="line701" alt="Line 701" />
            <div class="header-36">
              <a href="javascript:SubmitForm('form2')">
                <div class="button-119">
                  <img class="chevron-left-3" :src="chevronLeft" alt="Chevron Left" />
                  <div class="text-203 poppins-medium-ebony-14px">
                    <span class="poppins-medium-ebony-14px">{{ spanText10 }}</span>
                  </div>
                </div></a
              >
              <div class="page-header-25 poppins-semi-bold-ebony-16px">
                <span class="poppins-semi-bold-ebony-16px">{{ spanText11 }}</span>
              </div>
            </div>
            <div class="frame-2673">
              <div class="frame-2543">
                <div class="header-37">
                  <frame2443 :src="frame24431Props.src" :className="frame24431Props.className" />
                  <div class="title-45 poppins-semi-bold-ebony-20px">
                    <span class="poppins-semi-bold-ebony-20px">{{ spanText12 }}</span>
                  </div>
                </div>
                <div class="overlap-group-13">
                  <div class="input-field-13">
                    <div class="label-146 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText13 }}</span>
                    </div>
                    <div class="input-39">
                      <input
                        class="input-text-58 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder1"
                        :type="inputType1"
                      />
                    </div>
                  </div>
                  <img class="support" :src="support1" alt="Support" />
                </div>
                <div class="overlap-group-14">
                  <div class="input-field-13">
                    <div class="label-146 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText14 }}</span>
                    </div>
                    <div class="input-39">
                      <input
                        class="input-text-58 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder2"
                        :type="inputType2"
                      />
                    </div>
                  </div>
                  <img class="support" :src="support2" alt="Support" />
                </div>
                <div class="overlap-group2">
                  <div class="input-field-14">
                    <div class="label-146 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText15 }}</span>
                    </div>
                    <div class="input-40">
                      <input
                        class="input-text-58 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder3"
                        :type="inputType3"
                      />
                    </div>
                  </div>
                  <img class="support" :src="support3" alt="Support" />
                </div>
              </div>
              <div class="frame-2544">
                <div class="header-38">
                  <frame2443 :src="frame24432Props.src" :className="frame24432Props.className" />
                  <div class="title-45 poppins-semi-bold-ebony-20px">
                    <span class="poppins-semi-bold-ebony-20px">{{ spanText16 }}</span>
                  </div>
                </div>
                <div class="overlap-group-13">
                  <dropdown24 :spanText1="dropdown1Props.spanText1" :spanText2="dropdown1Props.spanText2" />
                  <img class="support" :src="support4" alt="Support" />
                </div>
                <div class="overlap-group-14">
                  <div class="input-field-13">
                    <div class="label-146 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText17 }}</span>
                    </div>
                    <div class="input-39">
                      <input
                        class="input-text-58 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder4"
                        :type="inputType4"
                      />
                    </div>
                  </div>
                  <img class="support" :src="support5" alt="Support" />
                </div>
                <div class="overlap-group-14">
                  <div class="input-field-13">
                    <div class="label-146 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText18 }}</span>
                    </div>
                    <div class="input-39">
                      <input
                        class="input-text-58 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder5"
                        :type="inputType5"
                      />
                    </div>
                  </div>
                  <img class="support" :src="support6" alt="Support" />
                </div>
                <x-option :spanText="option1Props.spanText" :checkboxProps="option1Props.checkboxProps" />
                <x-option
                  :spanText="option2Props.spanText"
                  :className="option2Props.className"
                  :checkboxProps="option2Props.checkboxProps"
                />
                <x-option
                  :spanText="option3Props.spanText"
                  :className="option3Props.className"
                  :checkboxProps="option3Props.checkboxProps"
                />
                <div class="option-5">
                  <checkbox :className="frame24432Props2.className" />
                  <p class="label-148 poppins-normal-ebony-14px">
                    <span class="poppins-normal-ebony-14px">{{ spanText19 }}</span>
                  </p>
                  <img class="support-1" :src="support7" alt="Support" />
                </div>
                <div class="overlap-group6">
                  <img class="support" :src="support8" alt="Support" /><dropdown24
                    :spanText1="dropdown2Props.spanText1"
                    :spanText2="dropdown2Props.spanText2"
                  />
                </div>
              </div>
            </div>
            <bottom-section14 :className="bottomSectionProps.className" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu from "./LeftNavigationMenu";
import TopNavigation from "./TopNavigation";
import Header2 from "./Header2";
import Tab from "./Tab";
import Frame2443 from "./Frame2443";
import Dropdown24 from "./Dropdown24";
import xOption from "./xOption";
import Checkbox from "./Checkbox";
import BottomSection14 from "./BottomSection14";
export default {
  name: "SettingsTemplatesSubscriptionNew",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Header2,
    Tab,
    Frame2443,
    Dropdown24,
    xOption,
    Checkbox,
    BottomSection14,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "line701",
    "chevronLeft",
    "spanText10",
    "spanText11",
    "spanText12",
    "spanText13",
    "inputType1",
    "inputPlaceholder1",
    "support1",
    "spanText14",
    "inputType2",
    "inputPlaceholder2",
    "support2",
    "spanText15",
    "inputType3",
    "inputPlaceholder3",
    "support3",
    "spanText16",
    "support4",
    "spanText17",
    "inputType4",
    "inputPlaceholder4",
    "support5",
    "spanText18",
    "inputType5",
    "inputPlaceholder5",
    "support6",
    "spanText19",
    "support7",
    "support8",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "header2Props",
    "tabProps",
    "frame24431Props",
    "frame24432Props",
    "dropdown1Props",
    "option1Props",
    "option2Props",
    "option3Props",
    "frame24432Props2",
    "dropdown2Props",
    "bottomSectionProps",
  ],
};
</script>

<style>
.settings-u47-templates-u47-subscription-u47-new {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 1133px;
  position: relative;
  width: 1440px;
}

.flex-col-46 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 1092px;
  position: relative;
  width: 1216px;
}

.flex-row-32 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 997px;
  min-width: 1152px;
}

.flex-col-47 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  width: 184px;
}

.page-header-24 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2645-26 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 328px;
  width: 184px;
}

.label-147 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  width: 184px;
}

.label-145 {
  letter-spacing: 0;
  line-height: 20px;
  width: 184px;
}

.frame-2548-21 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 996px;
  overflow: hidden;
  position: relative;
  width: 928px;
}

.line-701-16 {
  align-self: center;
  height: 1px;
  width: 864px;
}

.header-36 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  margin-left: 34px;
  margin-top: 23px;
  min-width: 348px;
}

.button-119 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 32px;
  overflow: hidden;
  padding: 4.5px 8.5px;
  transition: all 0.15s ease;
  width: 80px;
}

.button-119:hover {
  transform: translate(0, -5px);
}

.chevron-left-3 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-203 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-25 {
  letter-spacing: 0;
  line-height: 32px;
  margin-top: -1px;
  white-space: nowrap;
}

.frame-2673 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 24px;
  margin-left: 2px;
  margin-top: 32px;
  min-width: 862px;
}

.frame-2543 {
  align-items: center;
  background-color: var(--whisper);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 440px;
  overflow: hidden;
  padding: 24px 0;
  width: 419px;
}

.header-37 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  margin-left: 32px;
  min-width: 213px;
  position: relative;
}

.title-45 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.overlap-group-13 {
  height: 66px;
  margin-top: 40px;
  position: relative;
  width: 355px;
}

.input-field-13 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: 0;
  min-height: 66px;
  position: absolute;
  top: 0;
  width: 355px;
}

.label-146 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 355px;
}

.input-39 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 355px;
}

.input-text-58 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 331px;
}

.input-text-58::placeholder {
  color: #0d0d1d99;
}

.support {
  height: 16px;
  left: 339px;
  position: absolute;
  top: 2px;
  width: 16px;
}

.overlap-group-14 {
  height: 66px;
  margin-top: 24px;
  position: relative;
  width: 355px;
}

.overlap-group2 {
  height: 128px;
  margin-top: 24px;
  position: relative;
  width: 355px;
}

.input-field-14 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: 0;
  min-height: 128px;
  position: absolute;
  top: 0;
  width: 355px;
}

.input-40 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 102px;
  overflow: hidden;
  padding: 9px 12px;
  width: 355px;
}

.frame-2544 {
  align-items: center;
  background-color: var(--whisper);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 648px;
  overflow: hidden;
  padding: 24px 0;
  position: relative;
  width: 419px;
}

.header-38 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  margin-left: 32px;
  min-width: 257px;
  position: relative;
}

.option-5 {
  align-items: center;
  display: flex;
  gap: 12px;
  height: 48px;
  margin-top: 12px;
  min-width: 355px;
  position: relative;
}

.label-148 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  min-height: 48px;
  width: 297px;
}

.support-1 {
  height: 16px;
  width: 16px;
}

.overlap-group6 {
  height: 66px;
  margin-top: 32px;
  position: relative;
  width: 355px;
}
</style>
