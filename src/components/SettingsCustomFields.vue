<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-custom-fields screen">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-13">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-8">
          <div class="flex-col-14">
            <h1 class="page-header-8 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <div class="frame-2645-9">
              <div class="label-41 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText2 }}</span>
              </div>
              <div class="label-40 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText3 }}</span>
              </div>
              <div class="label-40 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText4 }}</span>
              </div>
              <div class="label-40 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText5 }}</span>
              </div>
              <div class="label-40 poppins-semi-bold-caribbean-green-14px">
                <span class="poppins-semi-bold-caribbean-green-14px">{{ spanText6 }}</span>
              </div>
              <div class="label-40 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText7 }}</span>
              </div>
              <div class="label-40 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText8 }}</span>
              </div>
              <div class="label-40 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText9 }}</span>
              </div>
            </div>
          </div>
          <div class="frame-2548-3">
            <div class="header-14">
              <frame2443 :src="frame2443Props.src" />
              <div class="title-17 poppins-semi-bold-ebony-20px">
                <span class="poppins-semi-bold-ebony-20px">{{ spanText10 }}</span>
              </div>
            </div>
            <p class="input-text-31 poppins-normal-comet-14px">
              <span class="poppins-normal-comet-14px">{{ spanText11 }}</span>
            </p>
            <div class="table-2">
              <div class="header-15 poppins-semi-bold-ebony-13px">
                <div class="cell-21">
                  <div class="blue-t-shirt-xs-21">
                    <span class="poppins-semi-bold-ebony-13px">{{ spanText12 }}</span>
                  </div>
                  <img class="sort-3" :src="sort1" alt="Sort" />
                </div>
                <div class="cell-22">
                  <div class="blue-t-shirt-xs-22">
                    <span class="poppins-semi-bold-ebony-13px">{{ spanText13 }}</span>
                  </div>
                  <img class="sort-3" :src="sort2" alt="Sort" />
                </div>
                <div class="cell-23">
                  <div class="blue-t-shirt-xs-23">
                    <span class="poppins-semi-bold-ebony-13px">{{ spanText14 }}</span>
                  </div>
                  <img class="sort-3" :src="sort3" alt="Sort" />
                </div>
                <div class="cell-24">
                  <div class="blue-t-shirt-xs-24">
                    <span class="poppins-semi-bold-ebony-13px">{{ spanText15 }}</span>
                  </div>
                  <img class="sort-3" :src="sort4" alt="Sort" />
                </div>
                <cell152 :spanText="cell152Props.spanText" />
              </div>
              <div class="table-row-2">
                <div class="row-settings-register-vat-rates">
                  <div class="input-text-28 poppins-normal-ebony-13px">
                    <span class="poppins-normal-ebony-13px">{{ spanText16 }}</span>
                  </div>
                  <div class="input-22">
                    <input
                      class="input-text-29 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder1"
                      :type="inputType1"
                    />
                  </div>
                  <div class="input-23">
                    <input
                      class="input-text-30 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder2"
                      :type="inputType2"
                    />
                  </div>
                  <checkbox />
                  <div class="checkbox"></div>
                  <div class="icon-button-216" :style="{ 'background-image': 'url(' + iconButton1 + ')' }"></div>
                </div>
                <div class="row-settings-register-vat-rates">
                  <div class="input-text-28 poppins-normal-ebony-13px">
                    <span class="poppins-normal-ebony-13px">{{ spanText17 }}</span>
                  </div>
                  <div class="input-22">
                    <input
                      class="input-text-29 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder3"
                      :type="inputType3"
                    />
                  </div>
                  <div class="input-23">
                    <input
                      class="input-text-30 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder4"
                      :type="inputType4"
                    />
                  </div>
                  <checkbox />
                  <checkbox :className="checkbox1Props.className" />
                  <div class="icon-button-216" :style="{ 'background-image': 'url(' + iconButton2 + ')' }"></div>
                </div>
                <div class="row-settings-register-vat-rates-1">
                  <div class="input-text-28 poppins-normal-ebony-13px">
                    <span class="poppins-normal-ebony-13px">{{ spanText18 }}</span>
                  </div>
                  <div class="input-22">
                    <input
                      class="input-text-29 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder5"
                      :type="inputType5"
                    />
                  </div>
                  <div class="input-23">
                    <input
                      class="input-text-30 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder6"
                      :type="inputType6"
                    />
                  </div>
                  <div class="checkbox-1"></div>
                  <div class="checkbox"></div>
                  <div class="icon-button-216" :style="{ 'background-image': 'url(' + iconButton3 + ')' }"></div>
                </div>
                <div class="row-settings-register-vat-rates">
                  <div class="input-24">
                    <input
                      class="input-text-29 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder7"
                      :type="inputType7"
                    />
                  </div>
                  <div class="input-25">
                    <input
                      class="input-text-29 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder8"
                      :type="inputType8"
                    />
                  </div>
                  <div class="input-23">
                    <input
                      class="input-text-30 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder9"
                      :type="inputType9"
                    />
                  </div>
                  <div class="checkbox-1"></div>
                  <checkbox :className="checkbox2Props.className" />
                  <div class="button-80">
                    <div class="text-98 poppins-medium-white-14px">
                      <span class="poppins-medium-white-14px">{{ spanText19 }}</span>
                    </div>
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
import LeftNavigationMenu from "./LeftNavigationMenu";
import TopNavigation from "./TopNavigation";
import Frame2443 from "./Frame2443";
import Cell152 from "./Cell152";
import Checkbox from "./Checkbox";
export default {
  name: "SettingsCustomFields",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame2443,
    Cell152,
    Checkbox,
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
    "spanText11",
    "spanText12",
    "sort1",
    "spanText13",
    "sort2",
    "spanText14",
    "sort3",
    "spanText15",
    "sort4",
    "spanText16",
    "inputType1",
    "inputPlaceholder1",
    "inputType2",
    "inputPlaceholder2",
    "iconButton1",
    "spanText17",
    "inputType3",
    "inputPlaceholder3",
    "inputType4",
    "inputPlaceholder4",
    "iconButton2",
    "spanText18",
    "inputType5",
    "inputPlaceholder5",
    "inputType6",
    "inputPlaceholder6",
    "iconButton3",
    "inputType7",
    "inputPlaceholder7",
    "inputType8",
    "inputPlaceholder8",
    "inputType9",
    "inputPlaceholder9",
    "spanText19",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "frame2443Props",
    "cell152Props",
    "checkbox1Props",
    "checkbox2Props",
  ],
};
</script>

<style>
.settings-u47-custom-fields {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-13 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 928px;
  position: relative;
  width: 1216px;
}

.flex-row-8 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 833px;
  min-width: 1152px;
}

.flex-col-14 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  width: 184px;
}

.page-header-8 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2645-9 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 328px;
  width: 184px;
}

.label-41 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  width: 184px;
}

.label-40 {
  letter-spacing: 0;
  line-height: 20px;
  width: 184px;
}

.frame-2548-3 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 832px;
  overflow: hidden;
  width: 928px;
}

.header-14 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  margin-left: 32px;
  margin-top: 24px;
  min-width: 263px;
  position: relative;
}

.title-17 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.input-text-31 {
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 32px;
  margin-top: 15px;
  white-space: nowrap;
}

.table-2 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 692px;
  margin-top: 49px;
  width: 864px;
}

.header-15 {
  align-items: flex-start;
  display: flex;
  height: 48px;
  min-width: 864px;
  position: relative;
}

.cell-21 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 166px;
}

.blue-t-shirt-xs-21 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 41px;
}

.sort-3 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-22 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 172px;
}

.blue-t-shirt-xs-22 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 39px;
}

.cell-23 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 252px;
}

.blue-t-shirt-xs-23 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 76px;
}

.cell-24 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 104px;
}

.blue-t-shirt-xs-24 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 48px;
}

.table-row-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 208px;
  width: 864px;
}

.row-settings-register-vat-rates {
  align-items: center;
  display: flex;
  min-width: 864px;
  position: relative;
}

.input-text-28 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 20px;
  width: 136px;
}

.input-22 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  margin-left: 36px;
  overflow: hidden;
  padding: 7px 12px;
  width: 160px;
}

.input-text-29 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 136px;
}

.input-text-29::placeholder,
.input-text-30::placeholder {
  color: #0d0d1d99;
}

.input-23 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  margin-left: 12px;
  overflow: hidden;
  padding: 7px 12px;
  width: 240px;
}

.input-text-30 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 216px;
}

.checkbox {
  background-color: var(--white);
  border-radius: 6px;
  height: 18px;
  margin-left: 86px;
  width: 18px;
}

.icon-button-216 {
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 89px;
  width: 20px;
}

.row-settings-register-vat-rates-1 {
  align-items: center;
  display: flex;
  min-width: 864px;
}

.checkbox-1 {
  background-color: var(--white);
  border-radius: 6px;
  height: 18px;
  margin-left: 49px;
  width: 18px;
}

.input-24 {
  align-items: flex-start;
  align-self: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  margin-top: -1px;
  overflow: hidden;
  padding: 7px 12px;
  width: 160px;
}

.input-25 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  margin-left: 12px;
  overflow: hidden;
  padding: 7px 12px;
  width: 160px;
}

.button-80 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 36px;
  margin-left: 25px;
  min-width: 84px;
  padding: 6.5px 9px;
  transition: all 0.15s ease;
}

.button-80:hover {
  transform: translate(0, -5px);
}

.text-98 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 66px;
  text-align: center;
}
</style>
