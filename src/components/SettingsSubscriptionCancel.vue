<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-subscription-u47-cancel screen">
      <div class="overlap-group">
        <left-navigation-menu v-bind="leftNavigationMenuProps" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <frame264532 />
        <div class="frame-2548">
          <header18 :spanText="header18Props.spanText" :frame2443Props="header18Props.frame2443Props" />
          <div class="tab">
            <tab-menu />
            <div class="label-1 poppins-medium-manatee-14px">
              <span class="poppins-medium-manatee-14px">{{ spanText2 }}</span>
            </div>
            <div class="label-2 poppins-medium-manatee-14px">
              <span class="poppins-medium-manatee-14px">{{ spanText3 }}</span>
            </div>
          </div>
          <img class="line-701" :src="line701" alt="Line 701" />
          <div class="flex-row">
            <div class="label-3 poppins-medium-manatee-14px">
              <span class="poppins-medium-manatee-14px">{{ spanText4 }}</span
              ><span class="poppins-semi-bold-ebony-14px">{{ spanText5 }}</span>
            </div>
            <div class="text poppins-medium-caribbean-green-14px">
              <span class="poppins-medium-caribbean-green-14px">{{ spanText6 }}</span>
            </div>
          </div>
          <div class="frame-2651">
            <frame2648
              :spanText1="frame26481Props.spanText1"
              :spanText2="frame26481Props.spanText2"
              :frame2652Props="frame26481Props.frame2652Props"
            />
            <frame2648
              :spanText1="frame26482Props.spanText1"
              :spanText2="frame26482Props.spanText2"
              :className="frame26482Props.className"
              :frame2652Props="frame26482Props.frame2652Props"
            />
            <div class="frame-2653 poppins-semi-bold-ebony-18px">
              <div class="title">
                <span class="poppins-semi-bold-ebony-18px">{{ spanText7 }}</span>
              </div>
              <frame2652
                :frame25781Props="frame2652Props.frame25781Props"
                :frame25782Props="frame2652Props.frame25782Props"
                :frame25801Props="frame2652Props.frame25801Props"
                :frame25802Props="frame2652Props.frame25802Props"
              />
              <div class="title-1">
                <span class="poppins-semi-bold-ebony-28px">{{ spanText8 }}</span
                ><span class="poppins-semi-bold-ebony-18px">{{ spanText9 }}</span
                ><span class="poppins-medium-manatee-18px">{{ spanText10 }}</span>
              </div>
              <frame2656 />
            </div>
            <frame2648
              :spanText1="frame26483Props.spanText1"
              :spanText2="frame26483Props.spanText2"
              :className="frame26483Props.className"
              :frame2652Props="frame26483Props.frame2652Props"
            />
          </div>
          <div class="bottom-section">
            <img class="top-border" :src="topBorder1" alt="Top Border" />
            <div class="frame-2526">
              <div class="button">
                <img class="close-circle" :src="closeCircle" alt="Close-Circle" />
                <div class="text-1 poppins-medium-alizarin-crimson-14px">
                  <span class="poppins-medium-alizarin-crimson-14px">{{ spanText11 }}</span>
                </div>
              </div>
              <button2 :refresh="button2Props.refresh" :spanText="button2Props.spanText" />
            </div>
          </div>
        </div>
        <div class="overlay">
          <div class="cancel-subscription">
            <div class="title-2 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText12 }}</span>
            </div>
            <p class="input-text poppins-normal-comet-13px">
              <span class="poppins-normal-comet-13px">{{ spanText13 }}</span>
            </p>
            <div class="dropdown">
              <p class="label poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText14 }}</span
                ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText15 }}</span>
              </p>
              <dropdown :spanText="dropdownProps.spanText" />
            </div>
            <div class="input-field">
              <div class="label poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText16 }}</span>
              </div>
              <div class="input">
                <input
                  class="input-text-1 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder"
                  :type="inputType"
                />
              </div>
            </div>
            <div class="bottom-section-1">
              <img class="top-border-1" :src="topBorder2" alt="Top Border" /><buttons
                :check="buttonsProps.check"
                :spanText="buttonsProps.spanText"
                :button222Props="buttonsProps.button222Props"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu from "./LeftNavigationMenu";
import TopNavigation from "./TopNavigation";
import Frame264532 from "./Frame264532";
import Header18 from "./Header18";
import TabMenu from "./TabMenu";
import Frame2648 from "./Frame2648";
import Frame2652 from "./Frame2652";
import Frame2656 from "./Frame2656";
import Button2 from "./Button2";
import Dropdown from "./Dropdown";
import Buttons from "./Buttons";
export default {
  name: "SettingsSubscriptionCancel",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame264532,
    Header18,
    TabMenu,
    Frame2648,
    Frame2652,
    Frame2656,
    Button2,
    Dropdown,
    Buttons,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "line701",
    "spanText4",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "topBorder1",
    "closeCircle",
    "spanText11",
    "spanText12",
    "spanText13",
    "spanText14",
    "spanText15",
    "spanText16",
    "inputType",
    "inputPlaceholder",
    "topBorder2",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "header18Props",
    "frame26481Props",
    "frame26482Props",
    "frame2652Props",
    "frame26483Props",
    "button2Props",
    "dropdownProps",
    "buttonsProps",
  ],
};
</script>

<style>
.settings-u47-subscription-u47-cancel {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group {
  height: 967px;
  position: relative;
  width: 1440px;
}

.page-header {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.frame-2548 {
  align-items: flex-start;
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

.tab {
  align-items: center;
  display: flex;
  height: 40px;
  margin-left: 32px;
  margin-top: 40px;
  min-width: 388px;
  position: relative;
}

.label-1 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 29px;
  min-width: 71px;
  white-space: nowrap;
}

.label-2 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 51px;
  min-width: 86px;
  white-space: nowrap;
}

.line-701 {
  align-self: center;
  height: 1px;
  width: 864px;
}

.flex-row {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 21px;
  margin-left: 32px;
  margin-top: 30px;
  min-width: 343px;
}

.label-3 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 232px;
  white-space: nowrap;
}

.text {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 87px;
  text-align: center;
}

.frame-2651 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 24px;
  margin-top: 48px;
  min-width: 864px;
  position: relative;
}

.frame-2653 {
  align-items: center;
  background-color: var(--white);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  height: 400px;
  overflow: hidden;
  padding: 20px 0;
  position: relative;
  width: 198px;
}

.title {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 20px;
  margin-top: 3px;
  white-space: nowrap;
}

.title-1 {
  letter-spacing: 0;
  line-height: 28px;
  margin-right: 20px;
  margin-top: 35px;
  min-width: 138px;
  white-space: nowrap;
}

.bottom-section {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 104px;
  width: 928px;
}

.top-border {
  height: 1px;
  width: 928px;
}

.frame-2526 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 399px;
  position: relative;
}

.button {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 195px;
  padding: 8.5px 12px;
}

.close-circle {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 143px;
  text-align: center;
}

.overlay {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-end;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 227px 352px;
  position: absolute;
  top: 0;
}

.cancel-subscription {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 512px;
  overflow: hidden;
  width: 512px;
}

.title-2 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.input-text {
  letter-spacing: 0;
  line-height: 22px;
  margin-top: 16px;
  min-height: 44px;
  width: 448px;
}

.dropdown {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 41px;
  min-height: 66px;
  position: relative;
  width: 448px;
}

.label {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 448px;
}

.input-field {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 136px;
  width: 448px;
}

.input {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 110px;
  overflow: hidden;
  padding: 9px 12px;
  width: 448px;
}

.input-text-1 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 424px;
}

.input-text-1::placeholder {
  color: #0d0d1d99;
}

.bottom-section-1 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 30px;
  position: relative;
  width: 512px;
}

.top-border-1 {
  height: 1px;
  width: 512px;
}
</style>
