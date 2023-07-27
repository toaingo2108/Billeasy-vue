<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-company-information screen">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-117">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-62">
          <div class="flex-col-118">
            <h1 class="page-header-35 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <div class="frame-2645-28">
              <div class="label-187 poppins-semi-bold-caribbean-green-14px">
                <span class="poppins-semi-bold-caribbean-green-14px">{{ spanText2 }}</span>
              </div>
              <div class="label-184 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText3 }}</span>
              </div>
              <div class="label-184 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText4 }}</span>
              </div>
              <div class="label-184 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText5 }}</span>
              </div>
              <div class="label-184 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText6 }}</span>
              </div>
              <div class="label-184 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText7 }}</span>
              </div>
              <div class="label-184 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText8 }}</span>
              </div>
              <div class="label-184 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText9 }}</span>
              </div>
            </div>
          </div>
          <div class="frame-2548-28">
            <div class="flex-col-119">
              <header class="header-59">
                <frame2443 :src="frame2443Props.src" />
                <div class="title-74 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText10 }}</span>
                </div>
              </header>
              <div class="label-188 poppins-semi-bold-comet-12px">
                <span class="poppins-semi-bold-comet-12px">{{ spanText11 }}</span>
              </div>
              <div class="upload-34">
                <img class="image-03-1" :src="image03" alt="image-03" />
                <div class="frame-2646-1">
                  <div class="label-189 poppins-medium-comet-13px">
                    <span class="poppins-medium-comet-13px">{{ spanText12 }}</span>
                  </div>
                  <div class="label-190 poppins-semi-bold-caribbean-green-14px">
                    <span class="poppins-semi-bold-caribbean-green-14px">{{ spanText13 }}</span>
                  </div>
                </div>
              </div>
              <div class="input-field-19">
                <div class="label-185 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText14 }}</span>
                </div>
                <div class="input-48">
                  <input
                    class="input-text-73 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder1"
                    :type="inputType1"
                    required
                  />
                </div>
              </div>
              <div class="input-field-20">
                <div class="label-185 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText15 }}</span>
                </div>
                <div class="input-48">
                  <input
                    class="input-text-73 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                    required
                  />
                </div>
              </div>
              <div class="input-field-21">
                <div class="label-185 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText16 }}</span>
                </div>
                <div class="input-48">
                  <input
                    class="input-text-73 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder3"
                    :type="inputType3"
                  />
                </div>
              </div>
              <option9 :spanText="option9Props.spanText" :checkboxProps="option9Props.checkboxProps" />
              <div class="dropdown-98">
                <div class="label-185 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText17 }}</span>
                </div>
                <div class="dropdown-97">
                  <div class="text-236 poppins-medium-ebony-14px">
                    <span class="poppins-medium-ebony-14px">{{ spanText18 }}</span>
                  </div>
                  <img class="chevron-down-303" :src="chevronDown1" alt="Chevron Down" />
                </div>
              </div>
              <option10 :spanText="option10Props.spanText" :checkboxProps="option10Props.checkboxProps" />
              <div class="input-field-22">
                <div class="label-185 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText19 }}</span>
                </div>
                <div class="input-48">
                  <input
                    class="input-text-73 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder4"
                    :type="inputType4"
                  />
                </div>
              </div>
            </div>
            <div class="flex-col-120">
              <div class="label-186 poppins-semi-bold-comet-12px">
                <span class="poppins-semi-bold-comet-12px">{{ spanText20 }}</span>
              </div>
              <div class="input-field-18">
                <div class="label-185 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText21 }}</span>
                </div>
                <div class="input-48">
                  <input
                    class="input-text-73 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder5"
                    :type="inputType5"
                    required
                  />
                </div>
              </div>
              <div class="input-field-23">
                <div class="label-185 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText22 }}</span>
                </div>
                <div class="input-48">
                  <input
                    class="input-text-73 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder6"
                    :type="inputType6"
                    required
                  />
                </div>
              </div>
              <div class="input-field-24">
                <div class="label-185 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText23 }}</span>
                </div>
                <div class="input-48">
                  <input
                    class="input-text-73 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder7"
                    :type="inputType7"
                    required
                  />
                </div>
              </div>
              <div class="dropdown-99">
                <div class="label-185 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText24 }}</span>
                </div>
                <div class="dropdown-97">
                  <div class="text-236 poppins-medium-ebony-14px">
                    <span class="poppins-medium-ebony-14px">{{ spanText25 }}</span>
                  </div>
                  <img class="chevron-down-303" :src="chevronDown2" alt="Chevron Down" />
                </div>
              </div>
            </div>
            <div class="flex-col-121">
              <div class="label-186 poppins-semi-bold-comet-12px">
                <span class="poppins-semi-bold-comet-12px">{{ spanText26 }}</span>
              </div>
              <div class="input-field-18">
                <div class="label-185 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText27 }}</span>
                </div>
                <div class="input-48">
                  <input
                    class="input-text-73 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder8"
                    :type="inputType8"
                    required
                  />
                </div>
              </div>
              <div class="input-field-25">
                <div class="label-185 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText28 }}</span>
                </div>
                <div class="input-48">
                  <input
                    class="input-text-73 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder9"
                    :type="inputType9"
                    required
                  />
                </div>
              </div>
              <div class="input-field-26">
                <div class="label-185 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText29 }}</span>
                </div>
                <div class="input-48">
                  <input
                    class="input-text-73 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder10"
                    :type="inputType10"
                    required
                  />
                </div>
              </div>
              <div class="input-field-27">
                <div class="label-185 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText30 }}</span>
                </div>
                <div class="input-48">
                  <input
                    class="input-text-73 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder11"
                    :type="inputType11"
                    required
                  />
                </div>
              </div>
              <div class="input-field-28">
                <div class="label-185 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText31 }}</span>
                </div>
                <div class="input-48">
                  <input
                    class="input-text-73 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder12"
                    :type="inputType12"
                  />
                </div>
              </div>
              <button22 :check="button22Props.check" :className="button22Props.className" />
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
import Option9 from "./Option9";
import Option10 from "./Option10";
import Button22 from "./Button22";
export default {
  name: "SettingsCompanyInformation",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame2443,
    Option9,
    Option10,
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
    "spanText11",
    "image03",
    "spanText12",
    "spanText13",
    "spanText14",
    "inputType1",
    "inputPlaceholder1",
    "spanText15",
    "inputType2",
    "inputPlaceholder2",
    "spanText16",
    "inputType3",
    "inputPlaceholder3",
    "spanText17",
    "spanText18",
    "chevronDown1",
    "spanText19",
    "inputType4",
    "inputPlaceholder4",
    "spanText20",
    "spanText21",
    "inputType5",
    "inputPlaceholder5",
    "spanText22",
    "inputType6",
    "inputPlaceholder6",
    "spanText23",
    "inputType7",
    "inputPlaceholder7",
    "spanText24",
    "spanText25",
    "chevronDown2",
    "spanText26",
    "spanText27",
    "inputType8",
    "inputPlaceholder8",
    "spanText28",
    "inputType9",
    "inputPlaceholder9",
    "spanText29",
    "inputType10",
    "inputPlaceholder10",
    "spanText30",
    "inputType11",
    "inputPlaceholder11",
    "spanText31",
    "inputType12",
    "inputPlaceholder12",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "frame2443Props",
    "option9Props",
    "option10Props",
    "button22Props",
  ],
};
</script>

<style>
.settings-u47-company-information {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-117 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 928px;
  position: relative;
  width: 1216px;
}

.flex-row-62 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 833px;
  min-width: 1152px;
}

.flex-col-118 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  width: 184px;
}

.page-header-35 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2645-28 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 328px;
  width: 184px;
}

.label-187 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  width: 184px;
}

.label-184 {
  letter-spacing: 0;
  line-height: 20px;
  width: 184px;
}

.frame-2548-28 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  height: 832px;
  overflow: hidden;
  padding: 24px 32px;
  width: 928px;
}

.flex-col-119 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 729px;
  position: relative;
  width: 267px;
}

.header-59 {
  align-items: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  gap: 12px;
  height: 28px;
  justify-content: flex-start;
  min-width: 267px;
  position: relative;
  width: auto;
}

.title-74 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  min-width: 227px;
  white-space: nowrap;
}

.label-188 {
  letter-spacing: 1.44px;
  line-height: 24px;
  margin-top: 39px;
  white-space: nowrap;
}

.upload-34 {
  align-items: center;
  background-color: var(--white);
  border-radius: 16px;
  display: flex;
  gap: 16px;
  height: 80px;
  margin-top: 28px;
  overflow: hidden;
  padding: 18px 20px;
  width: 224px;
}

.image-03-1 {
  height: 32px;
  margin-top: 1px;
  width: 32px;
}

.frame-2646-1 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-height: 43px;
  width: 87px;
}

.label-189 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
}

.label-190 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
}

.input-field-19,
.input-field-20,
.input-field-21,
.dropdown-98,
.input-field-23,
.input-field-24,
.dropdown-99,
.input-field-25,
.input-field-26,
.input-field-27,
.input-field-28 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 224px;
}

.label-185 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 224px;
}

.input-48 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 224px;
}

.input-text-73 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 200px;
}

.input-text-73::placeholder {
  color: #0d0d1d99;
}

.dropdown-97 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 224px;
}

.text-236 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 168px;
}

.chevron-down-303 {
  height: 24px;
  width: 24px;
}

.input-field-22 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 32px;
  min-height: 66px;
  width: 224px;
}

.flex-col-120 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 45px;
  margin-top: 67px;
  min-height: 393px;
  width: 224px;
}

.label-186 {
  letter-spacing: 1.44px;
  line-height: 24px;
  white-space: nowrap;
}

.input-field-18 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 33px;
  min-height: 66px;
  width: 224px;
}

.flex-col-121 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  margin-bottom: 11px;
  margin-left: 88px;
  min-height: 706px;
  position: relative;
  width: 224px;
}
</style>
