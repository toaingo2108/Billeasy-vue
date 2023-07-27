<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-integration-u47-edit2 screen">
      <left-navigation-menu11 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-154">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-118">
          <div class="header-75">
            <button322 />
            <div class="page-header-52 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText1 }}</span>
            </div>
          </div>
          <div class="button-178">
            <div class="text-275 poppins-medium-white-14px">
              <span class="poppins-medium-white-14px">{{ spanText2 }}</span>
            </div>
          </div>
        </div>
        <div class="information-17">
          <div class="flex-col-155">
            <header18
              :spanText="dropdown21Props.spanText"
              :className="dropdown21Props.className"
              :frame2443Props="dropdown21Props.frame2443Props"
            />
            <div class="label-321 poppins-semi-bold-comet-12px">
              <span class="poppins-semi-bold-comet-12px">{{ spanText4 }}</span>
            </div>
            <option4 :spanText="option41Props.spanText" :checkboxProps="option41Props.checkboxProps" />
          </div>
          <div class="flex-col-156">
            <div class="label-322 poppins-semi-bold-comet-12px">
              <span class="poppins-semi-bold-comet-12px">{{ spanText5 }}</span>
            </div>
            <option4
              :spanText="option42Props.spanText"
              :className="option42Props.className"
              :checkboxProps="option42Props.checkboxProps"
            />
          </div>
          <div class="toggle-action-1 poppins-medium-ebony-14px">
            <div class="from-billeasy-1">
              <span class="poppins-medium-ebony-14px">{{ spanText3 }}</span>
            </div>
            <toggle />
            <div class="to-billeasy-1">
              <span class="poppins-medium-ebony-14px">{{ spanText7 }}</span>
            </div>
          </div>
        </div>
        <div class="information-18">
          <header22 :frame2443Props="header2Props.frame2443Props" />
          <div class="flex-row-119">
            <div class="label-323 poppins-semi-bold-ebony-14px">
              <span class="poppins-semi-bold-ebony-14px">{{ spanText6 }}</span>
            </div>
            <img class="divider-1" :src="divider" alt="Divider" />
          </div>
          <div class="flex-row-120">
            <div class="dropdown-container-2">
              <dropdown242
                :spanText1="dropdown21Props2.spanText1"
                :spanText2="dropdown21Props2.spanText2"
                :className="dropdown21Props2.className"
              />
              <dropdown242
                :spanText1="dropdown22Props.spanText1"
                :spanText2="dropdown22Props.spanText2"
                :className="dropdown22Props.className"
              />
            </div>
            <div class="dropdown-container-2">
              <dropdown242
                :spanText1="dropdown23Props.spanText1"
                :spanText2="dropdown23Props.spanText2"
                :className="dropdown23Props.className"
              />
              <dropdown242
                :spanText1="dropdown24Props.spanText1"
                :spanText2="dropdown24Props.spanText2"
                :className="dropdown24Props.className"
              />
            </div>
            <div class="dropdown-container-2">
              <dropdown242
                :spanText1="dropdown25Props.spanText1"
                :spanText2="dropdown25Props.spanText2"
                :className="dropdown25Props.className"
              />
              <dropdown242
                :spanText1="dropdown26Props.spanText1"
                :spanText2="dropdown26Props.spanText2"
                :className="dropdown26Props.className"
              />
            </div>
            <dropdown242
              :spanText1="dropdown27Props.spanText1"
              :spanText2="dropdown27Props.spanText2"
              :className="dropdown27Props.className"
            />
          </div>
        </div>
        <div class="bottom-section-48">
          <img class="top-border-53" :src="topBorder" alt="Top Border" />
          <div class="frame-2526-5">
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
import Button322 from "./Button322";
import Header18 from "./Header18";
import Option4 from "./Option4";
import Toggle from "./Toggle";
import Header22 from "./Header22";
import Dropdown242 from "./Dropdown242";
import Button222 from "./Button222";
import Button22 from "./Button22";
export default {
  name: "SettingsIntegrationEdit2",
  components: {
    LeftNavigationMenu11,
    TopNavigation,
    Button322,
    Header18,
    Option4,
    Toggle,
    Header22,
    Dropdown242,
    Button222,
    Button22,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText4",
    "spanText5",
    "spanText3",
    "spanText7",
    "spanText6",
    "divider",
    "topBorder",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "dropdown21Props",
    "option41Props",
    "option42Props",
    "header2Props",
    "dropdown21Props2",
    "dropdown22Props",
    "dropdown23Props",
    "dropdown24Props",
    "dropdown25Props",
    "dropdown26Props",
    "dropdown27Props",
    "button2Props",
  ],
};
</script>

<style>
.settings-u47-integration-u47-edit2 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-154 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 967px;
  position: relative;
  width: 1216px;
}

.flex-row-118 {
  align-items: center;
  display: flex;
  gap: 634px;
  margin-top: 32px;
  min-width: 1152px;
}

.header-75 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 40px;
  min-width: 367px;
  position: relative;
}

.page-header-52 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  white-space: nowrap;
}

.button-178 {
  align-items: flex-start;
  background-color: var(--west-side);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 37px;
  margin-top: 1px;
  min-width: 151px;
  padding: 7px 12px;
  transition: all 0.15s ease;
}

.button-178:hover {
  transform: translate(0, -5px);
}

.text-275 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 127px;
  text-align: center;
}

.information-17 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  height: 208px;
  margin-top: 40px;
  overflow: hidden;
  padding: 24px 32px;
  width: 1152px;
}

.flex-col-155 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 140px;
  position: relative;
  width: 248px;
}

.label-321 {
  letter-spacing: 1.44px;
  line-height: 24px;
  margin-top: 39px;
  white-space: nowrap;
}

.flex-col-156 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 20px;
  margin-left: 32px;
  min-height: 73px;
  position: relative;
  width: 248px;
}

.label-322 {
  letter-spacing: 1.44px;
  line-height: 24px;
  white-space: nowrap;
}

.toggle-action-1 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 21px;
  margin-left: 339px;
  margin-top: 3px;
  min-width: 221px;
  position: relative;
}

.from-billeasy-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 94px;
}

.to-billeasy-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
}

.information-18 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 344px;
  margin-top: 24px;
  overflow: hidden;
  padding: 24px 0;
  position: relative;
  width: 1152px;
}

.flex-row-119 {
  align-items: center;
  display: flex;
  gap: 21px;
  height: 24px;
  margin-top: 39px;
  min-width: 1088px;
}

.label-323 {
  letter-spacing: 0;
  line-height: 24px;
  min-width: 123px;
  white-space: nowrap;
}

.divider-1 {
  height: 1px;
  margin-top: 5px;
  width: 944px;
}

.flex-row-120 {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  height: 156px;
  margin-top: 33px;
  min-width: 1088px;
  position: relative;
}

.dropdown-container-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 156px;
  position: relative;
  width: 248px;
}

.bottom-section-48 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 119px;
  width: 1216px;
}

.top-border-53 {
  height: 1px;
  width: 1216px;
}

.frame-2526-5 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-right: 32px;
  min-width: 224px;
  position: relative;
}
</style>
