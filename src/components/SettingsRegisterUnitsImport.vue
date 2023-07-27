<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-register-u47-units-u47-import screen">
      <div class="overlap-group-16">
        <left-navigation-menu v-bind="leftNavigationMenuProps" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-31 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <frame26454 />
        <frame25484
          :header8Props="frame2548Props.header8Props"
          :button4Props="frame2548Props.button4Props"
          :bottomSection2Props="frame2548Props.bottomSection2Props"
        />
        <div class="overlay-10">
          <div class="import-units">
            <div class="flex-row-41">
              <div class="flex-col-60">
                <div class="title-64 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                </div>
                <div class="label-174 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText3 }}</span>
                </div>
                <div class="label-175 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText4 }}</span>
                </div>
              </div>
              <div class="flex-col-61">
                <dropdown52 :spanText="dropdown5Props.spanText" />
                <div class="upload-file">
                  <div class="input-43">
                    <div class="input-text-63 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText5 }}</span>
                    </div>
                    <img class="upload-28" :src="upload" alt="Upload" />
                  </div>
                  <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
                </div>
              </div>
            </div>
            <div class="flex-row-42">
              <div class="label-176 poppins-semi-bold-ebony-14px">
                <span class="poppins-semi-bold-ebony-14px">{{ spanText6 }}</span>
              </div>
              <img class="top-border-32" :src="topBorder" alt="Top Border" />
            </div>
            <div class="label-container poppins-semi-bold-comet-12px">
              <div class="label-177">
                <span class="poppins-semi-bold-comet-12px">{{ spanText7 }}</span>
              </div>
              <div class="label-178">
                <span class="poppins-semi-bold-comet-12px">{{ spanText8 }}</span>
              </div>
            </div>
            <div class="flex-row-43 poppins-medium-ebony-14px">
              <div class="label-179">
                <span class="poppins-normal-ebony-14px">{{ spanText9 }}</span
                ><span class="poppins-normal-alizarin-crimson-14px">{{ spanText10 }}</span>
              </div>
              <div class="dropdown-95">
                <div class="text-212">
                  <span class="poppins-medium-ebony-14px">{{ spanText11 }}</span>
                </div>
                <img class="chevron-down-302" :src="chevronDown1" alt="Chevron Down" />
              </div>
            </div>
            <div class="flex-row-44 poppins-medium-ebony-14px">
              <div class="label-180">
                <span class="poppins-normal-ebony-14px">{{ spanText12 }}</span
                ><span class="poppins-normal-alizarin-crimson-14px">{{ spanText13 }}</span>
              </div>
              <div class="dropdown-96">
                <div class="text-212">
                  <span class="poppins-medium-ebony-14px">{{ spanText14 }}</span>
                </div>
                <img class="chevron-down-302" :src="chevronDown2" alt="Chevron Down" />
              </div>
            </div>
            <bottom-section322 :button222Props="bottomSection322Props.button222Props" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu from "./LeftNavigationMenu";
import TopNavigation from "./TopNavigation";
import Frame26454 from "./Frame26454";
import Frame25484 from "./Frame25484";
import Dropdown52 from "./Dropdown52";
import IconButton from "./IconButton";
import BottomSection322 from "./BottomSection322";
export default {
  name: "SettingsRegisterUnitsImport",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame26454,
    Frame25484,
    Dropdown52,
    IconButton,
    BottomSection322,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "upload",
    "spanText6",
    "topBorder",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "spanText11",
    "chevronDown1",
    "spanText12",
    "spanText13",
    "spanText14",
    "chevronDown2",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "frame2548Props",
    "dropdown5Props",
    "iconButtonProps",
    "bottomSection322Props",
  ],
};
</script>

<style>
.settings-u47-register-u47-units-u47-import {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-16 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.page-header-31 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-10 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 192px 296px;
  position: absolute;
  top: 0;
}

.import-units {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 576px;
  overflow: hidden;
  position: relative;
  width: 624px;
}

.flex-row-41 {
  align-items: flex-start;
  display: flex;
  gap: 57px;
  height: 182px;
  margin-left: 32px;
  margin-top: 31px;
  min-width: 462px;
}

.flex-col-60 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 168px;
  width: 165px;
}

.title-64 {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.label-174 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 48px;
  white-space: nowrap;
}

.label-175 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 44px;
  white-space: nowrap;
}

.flex-col-61 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 33px;
  min-height: 113px;
  position: relative;
  width: 240px;
}

.upload-file {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 240px;
  position: relative;
}

.input-43,
.dropdown-95,
.dropdown-96 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 192px;
}

.input-text-63 {
  letter-spacing: 0;
  line-height: 24px;
  width: 140px;
}

.upload-28 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.flex-row-42 {
  align-items: center;
  align-self: center;
  display: flex;
  gap: 15px;
  height: 24px;
  margin-top: 22px;
  min-width: 560px;
}

.label-176 {
  letter-spacing: 0;
  line-height: 24px;
  min-width: 129px;
  white-space: nowrap;
}

.top-border-32 {
  height: 1px;
  margin-top: 5px;
  width: 416px;
}

.label-container {
  align-items: flex-start;
  display: flex;
  gap: 156px;
  height: 24px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 299px;
}

.label-177 {
  letter-spacing: 1.44px;
  line-height: 24px;
  min-width: 76px;
  white-space: nowrap;
}

.label-178 {
  letter-spacing: 1.44px;
  line-height: 24px;
  white-space: nowrap;
}

.flex-row-43 {
  align-items: center;
  display: flex;
  gap: 183px;
  margin-left: 32px;
  margin-top: 25px;
  min-width: 424px;
}

.label-179 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 49px;
  white-space: nowrap;
}

.text-212 {
  letter-spacing: 0;
  line-height: 24px;
  width: 136px;
}

.chevron-down-302 {
  align-self: center;
  height: 24px;
  width: 24px;
}

.flex-row-44 {
  align-items: center;
  display: flex;
  gap: 142px;
  margin-left: 32px;
  margin-top: 16px;
  min-width: 424px;
}

.label-180 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 90px;
  white-space: nowrap;
}
</style>
