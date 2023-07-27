<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-subscription screen">
      <left-navigation-menu11 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-142">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-46 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="tab-26">
          <tab-menu322 />
          <div class="tab-menu-80">
            <div class="flex-row-102">
              <img class="subscription-132" :src="subscription" alt="Subscription" />
              <div class="label-294 poppins-medium-caribbean-green-14px">
                <span class="poppins-medium-caribbean-green-14px">{{ spanText2 }}</span>
              </div>
            </div>
            <div class="rectangle-6502-34"></div>
          </div>
          <tab-menu292 />
        </div>
        <img class="line-701-33" :src="line701" alt="Line 701" />
        <div class="information-13">
          <img class="info-3" :src="info" alt="Info" />
          <p class="here-you-set-default-1 poppins-normal-ebony-14px">
            <span class="poppins-normal-ebony-14px">{{ spanText3 }}</span>
          </p>
        </div>
        <div class="information-container-1">
          <div class="information-12">
            <header172
              :spanText="headerProps.spanText"
              :className="headerProps.className"
              :frame2443Props="headerProps.frame2443Props"
            />
            <div class="flex-row-103">
              <checkbox :className="checkbox1Props.className" />
              <div class="label-291 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText4 }}</span>
              </div>
              <img class="support-8" :src="support1" alt="Support" />
            </div>
            <div class="flex-col-143">
              <div class="overlap-group3-1">
                <dropdown232
                  :spanText1="dropdown1Props.spanText1"
                  :spanText2="dropdown1Props.spanText2"
                  :className="dropdown1Props.className"
                />
                <img class="support-9" :src="support2" alt="Support" />
              </div>
              <div class="overlap-group-32">
                <div class="input-field-35">
                  <p class="label-292 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span>
                  </p>
                  <div class="input-87">
                    <input
                      class="input-text-115 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder1"
                      :type="inputType1"
                    />
                  </div>
                </div>
                <img class="support-9" :src="support3" alt="Support" />
              </div>
              <div class="overlap-group-32">
                <div class="input-field-35">
                  <p class="label-292 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText6 }}</span>
                  </p>
                  <div class="input-87">
                    <input
                      class="input-text-115 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder2"
                      :type="inputType2"
                    />
                  </div>
                </div>
                <img class="support-9" :src="support4" alt="Support" />
              </div>
              <div class="overlap-group-32">
                <dropdown232
                  :spanText1="dropdown2Props.spanText1"
                  :spanText2="dropdown2Props.spanText2"
                  :className="dropdown2Props.className"
                />
                <img class="support-9" :src="support5" alt="Support" />
              </div>
              <div class="flex-row-104">
                <checkbox :className="checkbox2Props.className" />
                <div class="label-291 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText7 }}</span>
                </div>
                <img class="support-8" :src="support6" alt="Support" />
              </div>
            </div>
          </div>
          <div class="information-12">
            <div class="header-70">
              <frame2443 :src="frame24431Props.src" :className="frame24431Props.className" />
              <div class="title-86 poppins-semi-bold-ebony-20px">
                <span class="poppins-semi-bold-ebony-20px">{{ spanText8 }}</span>
              </div>
            </div>
            <div class="overlap-group4-1">
              <dropdown232
                :spanText1="dropdown3Props.spanText1"
                :spanText2="dropdown3Props.spanText2"
                :className="dropdown3Props.className"
              />
              <img class="support-9" :src="support7" alt="Support" />
            </div>
            <div class="flex-row-105">
              <checkbox :className="checkbox3Props.className" />
              <p class="label-295 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText9 }}</span>
              </p>
              <img class="support-10" :src="support8" alt="Support" />
            </div>
            <option10
              :spanText="option31Props.spanText"
              :className="option31Props.className"
              :checkboxProps="option31Props.checkboxProps"
            />
            <option32 :spanText="option31Props2.spanText" :checkboxProps="option31Props2.checkboxProps" />
            <option9
              :spanText="option31Props3.spanText"
              :className="option31Props3.className"
              :checkboxProps="option31Props3.checkboxProps"
            />
            <div class="option-38">
              <checkbox :className="checkbox2Props2.className" />
              <div class="label-293 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText10 }}</span>
              </div>
            </div>
            <div class="option-39">
              <checkbox :className="checkbox2Props3.className" />
              <div class="label-293 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText11 }}</span>
              </div>
            </div>
            <option32
              :spanText="option32Props.spanText"
              :className="option32Props.className"
              :checkboxProps="option32Props.checkboxProps"
            />
            <option22
              :spanText="option2Props.spanText"
              :className="option2Props.className"
              :checkboxProps="option2Props.checkboxProps"
            />
            <div class="option-40">
              <checkbox :className="checkbox2Props4.className" />
              <div class="label-293 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText12 }}</span>
              </div>
            </div>
          </div>
          <div class="information-14">
            <div class="flex-col-144">
              <div class="header-71">
                <frame2443 :src="frame24432Props.src" :className="frame24432Props.className" />
                <div class="title-86 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText14 }}</span>
                </div>
              </div>
              <div class="flex-row-106">
                <checkbox :className="checkbox4Props.className" />
                <div class="label-296 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText13 }}</span>
                </div>
              </div>
            </div>
            <img class="support-11" :src="support9" alt="Support" />
          </div>
        </div>
        <div class="bottom-section-46">
          <img class="top-border-51" :src="topBorder" alt="Top Border" />
          <div class="frame-2526-3">
            <button222 />
            <button22 :check="button2Props.check" :className="button2Props.className" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu11 from "./LeftNavigationMenu11";
import TopNavigation from "./TopNavigation";
import TabMenu322 from "./TabMenu322";
import TabMenu292 from "./TabMenu292";
import Header172 from "./Header172";
import Checkbox from "./Checkbox";
import Dropdown232 from "./Dropdown232";
import Frame2443 from "./Frame2443";
import Option10 from "./Option10";
import Option32 from "./Option32";
import Option9 from "./Option9";
import Option22 from "./Option22";
import Button222 from "./Button222";
import Button22 from "./Button22";
export default {
  name: "SettingsSubscription",
  components: {
    LeftNavigationMenu11,
    TopNavigation,
    TabMenu322,
    TabMenu292,
    Header172,
    Checkbox,
    Dropdown232,
    Frame2443,
    Option10,
    Option32,
    Option9,
    Option22,
    Button222,
    Button22,
  },
  props: [
    "spanText1",
    "subscription",
    "spanText2",
    "line701",
    "info",
    "spanText3",
    "spanText4",
    "support1",
    "support2",
    "spanText5",
    "inputType1",
    "inputPlaceholder1",
    "support3",
    "spanText6",
    "inputType2",
    "inputPlaceholder2",
    "support4",
    "support5",
    "spanText7",
    "support6",
    "spanText8",
    "support7",
    "spanText9",
    "support8",
    "spanText10",
    "spanText11",
    "spanText12",
    "spanText14",
    "spanText13",
    "support9",
    "topBorder",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "headerProps",
    "checkbox1Props",
    "dropdown1Props",
    "dropdown2Props",
    "checkbox2Props",
    "frame24431Props",
    "dropdown3Props",
    "checkbox3Props",
    "option31Props",
    "option31Props2",
    "option31Props3",
    "checkbox2Props2",
    "checkbox2Props3",
    "option32Props",
    "option2Props",
    "checkbox2Props4",
    "frame24432Props",
    "checkbox4Props",
    "button2Props",
  ],
};
</script>

<style>
.settings-u47-subscription {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 1088px;
  position: relative;
  width: 1440px;
}

.flex-col-142 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1088px;
  position: relative;
  width: 1216px;
}

.page-header-46 {
  letter-spacing: 0;
  line-height: 40px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.tab-26 {
  height: 40px;
  margin-left: 32px;
  margin-top: 33px;
  position: relative;
  width: 632px;
}

.tab-menu-80 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  left: 211px;
  min-height: 40px;
  position: absolute;
  top: 0;
  width: 211px;
}

.flex-row-102 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-left: 0;
  margin-top: 9px;
  min-width: 174px;
}

.subscription-132 {
  height: 18px;
  width: 18px;
}

.label-294 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 150px;
  white-space: nowrap;
}

.rectangle-6502-34 {
  background-color: var(--caribbean-green);
  height: 2px;
  margin-left: 0.33px;
  width: 211px;
}

.line-701-33 {
  align-self: center;
  height: 1px;
  width: 1152px;
}

.information-13 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 18px;
  display: flex;
  gap: 16px;
  height: 56px;
  margin-left: 32px;
  margin-top: 39px;
  overflow: hidden;
  padding: 14px 16px;
  width: 444px;
}

.info-3 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.here-you-set-default-1 {
  letter-spacing: 0;
  line-height: 26px;
  width: 376px;
}

.information-container-1 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 24px;
  margin-top: 32px;
  min-width: 1152px;
}

.information-12 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 624px;
  overflow: hidden;
  padding: 24px 0;
  position: relative;
  width: 368px;
}

.flex-row-103 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 48px;
  margin-top: 35px;
  min-width: 304px;
  position: relative;
}

.label-291 {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 48px;
  width: 246px;
}

.support-8 {
  height: 16px;
  margin-top: 5px;
  width: 16px;
}

.flex-col-143 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 33px;
  min-height: 411px;
  width: 304px;
}

.overlap-group3-1 {
  height: 66px;
  position: relative;
  width: 304px;
}

.support-9 {
  height: 16px;
  left: 288px;
  position: absolute;
  top: 2px;
  width: 16px;
}

.overlap-group-32 {
  height: 66px;
  margin-top: 24px;
  position: relative;
  width: 304px;
}

.input-field-35 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: 0;
  min-height: 66px;
  position: absolute;
  top: 0;
  width: 304px;
}

.label-292 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 304px;
}

.input-87 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 304px;
}

.input-text-115 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 280px;
}

.input-text-115::placeholder {
  color: #0d0d1d99;
}

.flex-row-104 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 48px;
  margin-top: 27px;
  min-width: 304px;
  position: relative;
}

.header-70 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  margin-right: 22px;
  min-width: 282px;
  position: relative;
}

.title-86 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.overlap-group4-1 {
  height: 66px;
  margin-top: 40px;
  position: relative;
  width: 304px;
}

.flex-row-105 {
  align-items: flex-start;
  display: flex;
  height: 72px;
  margin-top: 31px;
  min-width: 304px;
  position: relative;
}

.label-295 {
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 12px;
  min-height: 72px;
  width: 255px;
}

.support-10 {
  height: 16px;
  margin-left: 3px;
  margin-top: 5px;
  width: 16px;
}

.option-38 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-left: 62px;
  margin-top: 16px;
  min-width: 112px;
  position: relative;
}

.label-293 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-39 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-right: 106px;
  margin-top: 16px;
  min-width: 138px;
  position: relative;
}

.option-40 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-right: 114px;
  margin-top: 16px;
  min-width: 130px;
  position: relative;
}

.information-14 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  gap: 6px;
  height: 176px;
  overflow: hidden;
  padding: 10px;
  width: 368px;
}

.flex-col-144 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 39px;
  margin-bottom: 13px;
  margin-left: 22px;
  min-height: 115px;
  width: 304px;
}

.header-71 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  min-width: 186px;
  position: relative;
}

.flex-row-106 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 48px;
  min-width: 304px;
  position: relative;
}

.label-296 {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 48px;
  width: 274px;
}

.support-11 {
  height: 16px;
  width: 16px;
}

.bottom-section-46 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 32px;
  width: 1216px;
}

.top-border-51 {
  height: 1px;
  width: 1216px;
}

.frame-2526-3 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-right: 32px;
  min-width: 224px;
  position: relative;
}
</style>
