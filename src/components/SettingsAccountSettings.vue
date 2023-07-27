<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-account-settings screen">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-30">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-20">
          <div class="flex-col-31">
            <h1 class="page-header-18 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <div class="frame-2645-22">
              <div class="label-120 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText2 }}</span>
              </div>
              <div class="label-118 poppins-semi-bold-caribbean-green-14px">
                <span class="poppins-semi-bold-caribbean-green-14px">{{ spanText3 }}</span>
              </div>
              <div class="label-118 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText4 }}</span>
              </div>
              <div class="label-118 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText5 }}</span>
              </div>
              <div class="label-118 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText6 }}</span>
              </div>
              <div class="label-118 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText7 }}</span>
              </div>
              <div class="label-118 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText8 }}</span>
              </div>
              <div class="label-118 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText9 }}</span>
              </div>
            </div>
          </div>
          <div class="frame-2548-15">
            <div class="flex-col-32">
              <header class="header-29">
                <frame2443 :src="frame2443Props.src" />
                <div class="title-37 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText10 }}</span>
                </div>
              </header>
              <div class="upload-27">
                <img class="image-03" :src="image03" alt="image-03" />
                <div class="frame-2646">
                  <div class="label-121 poppins-medium-comet-13px">
                    <span class="poppins-medium-comet-13px">{{ spanText11 }}</span>
                  </div>
                  <div class="label-122 poppins-semi-bold-caribbean-green-14px">
                    <span class="poppins-semi-bold-caribbean-green-14px">{{ spanText12 }}</span>
                  </div>
                </div>
              </div>
              <div class="input-field-11">
                <div class="label-119 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText13 }}</span>
                </div>
                <div class="input-32">
                  <input
                    class="input-text-51 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder1"
                    :type="inputType1"
                    required
                  />
                </div>
              </div>
              <div class="input-field-11">
                <div class="label-119 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText14 }}</span>
                </div>
                <div class="input-32">
                  <input
                    class="input-text-51 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                    required
                  />
                </div>
              </div>
              <div class="input-field-12">
                <div class="label-119 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText15 }}</span>
                </div>
                <input6 :children="inputProps.children" />
              </div>
              <div class="input-field-11">
                <div class="label-119 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText16 }}</span>
                </div>
                <div class="input-32">
                  <input
                    class="input-text-51 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder3"
                    :type="inputType3"
                  />
                </div>
              </div>
              <div class="input-field-11">
                <div class="label-119 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText17 }}</span>
                </div>
                <div class="input-32">
                  <input
                    class="input-text-51 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder4"
                    :type="inputType4"
                  />
                </div>
              </div>
            </div>
            <div class="button-105">
              <img class="key" :src="key" alt="Key" />
              <div class="text-189 poppins-medium-caribbean-green-14px">
                <span class="poppins-medium-caribbean-green-14px">{{ spanText18 }}</span>
              </div>
            </div>
            <button22 :check="button22Props.check" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu from "./LeftNavigationMenu";
import TopNavigation from "./TopNavigation";
import Frame2443 from "./Frame2443";
import Input6 from "./Input6";
import Button22 from "./Button22";
export default {
  name: "SettingsAccountSettings",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame2443,
    Input6,
    Button22,
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
    "spanText10",
    "image03",
    "spanText11",
    "spanText12",
    "spanText13",
    "inputType1",
    "inputPlaceholder1",
    "spanText14",
    "inputType2",
    "inputPlaceholder2",
    "spanText15",
    "spanText16",
    "inputType3",
    "inputPlaceholder3",
    "spanText17",
    "inputType4",
    "inputPlaceholder4",
    "key",
    "spanText18",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "frame2443Props",
    "inputProps",
    "button22Props",
  ],
};
</script>

<style>
.settings-u47-account-settings {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-30 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 928px;
  position: relative;
  width: 1216px;
}

.flex-row-20 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 833px;
  min-width: 1152px;
}

.flex-col-31 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  width: 184px;
}

.page-header-18 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2645-22 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 328px;
  width: 184px;
}

.label-120 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  width: 184px;
}

.label-118 {
  letter-spacing: 0;
  line-height: 20px;
  width: 184px;
}

.frame-2548-15 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  height: 832px;
  overflow: hidden;
  padding: 24px 32px;
  position: relative;
  width: 928px;
}

.flex-col-32 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 598px;
  width: 224px;
}

.header-29 {
  align-items: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  gap: 12px;
  height: 28px;
  justify-content: flex-start;
  min-width: 126px;
  position: relative;
  width: auto;
}

.title-37 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  min-width: 86px;
  white-space: nowrap;
}

.upload-27 {
  align-items: center;
  background-color: var(--white);
  border-radius: 16px;
  display: flex;
  gap: 16px;
  height: 80px;
  margin-top: 40px;
  overflow: hidden;
  padding: 18px 16px;
  width: 224px;
}

.image-03 {
  height: 32px;
  margin-left: 4px;
  margin-top: 1px;
  width: 32px;
}

.frame-2646 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-height: 43px;
  width: 140px;
}

.label-121 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
}

.label-122 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
}

.input-field-11 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 224px;
}

.label-119 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 224px;
}

.input-32 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 224px;
}

.input-text-51 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 200px;
}

.input-text-51::placeholder {
  color: #0d0d1d99;
}

.input-field-12 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  opacity: 0.5;
  position: relative;
  width: 224px;
}

.button-105 {
  align-items: flex-start;
  align-self: center;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 21px;
  margin-left: 16px;
  margin-top: 371px;
  min-width: 155px;
  transition: all 0.15s ease;
}

.button-105:hover {
  transform: scale(1.1);
}

.key {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-189 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 129px;
  text-align: center;
}
</style>
