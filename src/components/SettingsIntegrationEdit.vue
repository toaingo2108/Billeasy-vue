<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-integration-u47-edit screen">
      <left-navigation-menu11 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-149">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-113">
          <div class="header-72">
            <button322 />
            <div class="page-header-51 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText1 }}</span>
            </div>
          </div>
          <div class="chip-10">
            <div class="input-text-117 poppins-normal-green-12px">
              <span class="poppins-normal-green-12px">{{ spanText2 }}</span>
            </div>
          </div>
        </div>
        <div class="information-15">
          <div class="flex-col-150">
            <header18
              :spanText="dropdown21Props.spanText"
              :className="dropdown21Props.className"
              :frame2443Props="dropdown21Props.frame2443Props"
            />
            <div class="label-308 poppins-semi-bold-comet-12px">
              <span class="poppins-semi-bold-comet-12px">{{ spanText4 }}</span>
            </div>
            <option4 :spanText="option41Props.spanText" :checkboxProps="option41Props.checkboxProps" />
            <div class="overlap-group-33">
              <div class="input-field-36">
                <p class="label-305 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span>
                </p>
                <div class="input-88">
                  <input
                    class="input-text-116 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder1"
                    :type="inputType1"
                  />
                </div>
              </div>
              <img class="support-12" :src="support1" alt="Support" />
            </div>
            <div class="overlap-group3-2">
              <dropdown242 :spanText1="dropdown21Props2.spanText1" :spanText2="dropdown21Props2.spanText2" />
              <img class="support-12" :src="support2" alt="Support" />
            </div>
            <option4
              :spanText="option42Props.spanText"
              :className="option42Props.className"
              :checkboxProps="option42Props.checkboxProps"
            />
          </div>
          <div class="flex-col-151">
            <div class="label-306 poppins-semi-bold-comet-12px">
              <span class="poppins-semi-bold-comet-12px">{{ spanText6 }}</span>
            </div>
            <option4 :spanText="option43Props.spanText" :checkboxProps="option43Props.checkboxProps" />
            <div class="overlap-group-33">
              <div class="input-field-36">
                <p class="label-305 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText7 }}</span>
                </p>
                <div class="input-88">
                  <input
                    class="input-text-116 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                  />
                </div>
              </div>
              <img class="support-12" :src="support3" alt="Support" />
            </div>
          </div>
          <div class="flex-col-152">
            <div class="label-306 poppins-semi-bold-comet-12px">
              <span class="poppins-semi-bold-comet-12px">{{ spanText8 }}</span>
            </div>
            <option4 :spanText="option44Props.spanText" :checkboxProps="option44Props.checkboxProps" />
            <div class="overlap-group-34">
              <div class="input-field-37">
                <div class="label-307 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText9 }}</span>
                </div>
                <div class="input-88">
                  <input
                    class="input-text-116 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder3"
                    :type="inputType3"
                  />
                </div>
              </div>
              <img class="support-12" :src="support4" alt="Support" />
            </div>
          </div>
          <div class="flex-col-153">
            <div class="toggle-action poppins-medium-ebony-14px">
              <div class="from-billeasy">
                <span class="poppins-medium-ebony-14px">{{ spanText10 }}</span>
              </div>
              <div class="toggle">
                <div class="ellipse-16"></div>
              </div>
              <div class="to-billeasy">
                <span class="poppins-medium-ebony-14px">{{ spanText11 }}</span>
              </div>
            </div>
            <div class="label-309 poppins-semi-bold-comet-12px">
              <span class="poppins-semi-bold-comet-12px">{{ spanText12 }}</span>
            </div>
            <option4 :spanText="option45Props.spanText" :checkboxProps="option45Props.checkboxProps" />
            <div class="overlap-group-34">
              <div class="input-field-37">
                <div class="label-307 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText13 }}</span>
                </div>
                <div class="input-88">
                  <input
                    class="input-text-116 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder4"
                    :type="inputType4"
                  />
                </div>
              </div>
              <img class="support-12" :src="support5" alt="Support" />
            </div>
          </div>
        </div>
        <div class="information-16">
          <header22 :frame2443Props="header2Props.frame2443Props" />
          <div class="flex-row-114">
            <div class="label-310 poppins-semi-bold-ebony-14px">
              <span class="poppins-semi-bold-ebony-14px">{{ spanText14 }}</span>
            </div>
            <img class="divider" :src="divider1" alt="Divider" />
          </div>
          <div class="flex-row-115">
            <div class="dropdown-container-1">
              <dropdown242
                :spanText1="dropdown22Props.spanText1"
                :spanText2="dropdown22Props.spanText2"
                :className="dropdown22Props.className"
              />
              <dropdown242
                :spanText1="dropdown23Props.spanText1"
                :spanText2="dropdown23Props.spanText2"
                :className="dropdown23Props.className"
              />
            </div>
            <div class="dropdown-container-1">
              <dropdown242
                :spanText1="dropdown24Props.spanText1"
                :spanText2="dropdown24Props.spanText2"
                :className="dropdown24Props.className"
              />
              <dropdown242
                :spanText1="dropdown25Props.spanText1"
                :spanText2="dropdown25Props.spanText2"
                :className="dropdown25Props.className"
              />
            </div>
            <div class="dropdown-container-1">
              <dropdown242
                :spanText1="dropdown26Props.spanText1"
                :spanText2="dropdown26Props.spanText2"
                :className="dropdown26Props.className"
              />
              <dropdown242
                :spanText1="dropdown27Props.spanText1"
                :spanText2="dropdown27Props.spanText2"
                :className="dropdown27Props.className"
              />
            </div>
            <dropdown242
              :spanText1="dropdown28Props.spanText1"
              :spanText2="dropdown28Props.spanText2"
              :className="dropdown28Props.className"
            />
          </div>
          <div class="flex-row-116">
            <div class="label-311 poppins-semi-bold-ebony-14px">
              <span class="poppins-semi-bold-ebony-14px">{{ spanText15 }}</span>
            </div>
            <img class="divider" :src="divider2" alt="Divider" />
          </div>
          <div class="label-container-8 poppins-semi-bold-comet-12px">
            <div class="label-312">
              <span class="poppins-semi-bold-comet-12px">{{ spanText16 }}</span>
            </div>
            <div class="label-313">
              <span class="poppins-semi-bold-comet-12px">{{ spanText17 }}</span>
            </div>
            <div class="label-314">
              <span class="poppins-semi-bold-comet-12px">{{ spanText18 }}</span>
            </div>
            <div class="label-315">
              <span class="poppins-semi-bold-comet-12px">{{ spanText19 }}</span>
            </div>
            <div class="label-316">
              <span class="poppins-semi-bold-comet-12px">{{ spanText20 }}</span>
            </div>
          </div>
          <div class="flex-row-117 poppins-medium-ebony-14px">
            <div class="dropdown-119">
              <div class="text-255">
                <span class="poppins-medium-ebony-14px">{{ spanText21 }}</span>
              </div>
              <img class="chevron-down-310" :src="chevronDown1" alt="Chevron Down" />
            </div>
            <div class="dropdown-120">
              <div class="text-256">
                <span class="poppins-medium-ebony-14px">{{ spanText22 }}</span>
              </div>
              <img class="chevron-down-310" :src="chevronDown2" alt="Chevron Down" />
            </div>
            <dropdown32 :spanText="dropdown31Props.spanText" :className="dropdown31Props.className" />
            <dropdown32 :spanText="dropdown32Props.spanText" :className="dropdown32Props.className" />
            <div class="dropdown-121">
              <p class="text-257">
                <span class="poppins-medium-ebony-14px">{{ spanText23 }}</span>
              </p>
              <img class="chevron-down-310" :src="chevronDown3" alt="Chevron Down" />
            </div>
            <div class="icon-button-335" :style="{ 'background-image': 'url(' + iconButton1 + ')' }"></div>
          </div>
          <div class="flex-row-112 poppins-medium-ebony-14px">
            <div class="dropdown-119">
              <div class="text-255">
                <span class="poppins-medium-ebony-14px">{{ spanText24 }}</span>
              </div>
              <img class="chevron-down-310" :src="chevronDown4" alt="Chevron Down" />
            </div>
            <div class="dropdown-120">
              <div class="text-256">
                <span class="poppins-medium-ebony-14px">{{ spanText25 }}</span>
              </div>
              <img class="chevron-down-310" :src="chevronDown5" alt="Chevron Down" />
            </div>
            <dropdown32 :spanText="dropdown33Props.spanText" :className="dropdown33Props.className" />
            <dropdown32 :spanText="dropdown34Props.spanText" :className="dropdown34Props.className" />
            <div class="dropdown-121">
              <p class="text-257">
                <span class="poppins-medium-ebony-14px">{{ spanText26 }}</span>
              </p>
              <img class="chevron-down-310" :src="chevronDown6" alt="Chevron Down" />
            </div>
            <div class="icon-button-335" :style="{ 'background-image': 'url(' + iconButton2 + ')' }"></div>
          </div>
          <div class="flex-row-112 poppins-medium-ebony-14px">
            <div class="dropdown-119">
              <div class="text-255">
                <span class="poppins-medium-ebony-14px">{{ spanText27 }}</span>
              </div>
              <img class="chevron-down-310" :src="chevronDown7" alt="Chevron Down" />
            </div>
            <div class="dropdown-120">
              <div class="text-256">
                <span class="poppins-medium-ebony-14px">{{ spanText28 }}</span>
              </div>
              <img class="chevron-down-310" :src="chevronDown8" alt="Chevron Down" />
            </div>
            <dropdown32 :spanText="dropdown35Props.spanText" :className="dropdown35Props.className" />
            <dropdown32 :spanText="dropdown36Props.spanText" :className="dropdown36Props.className" />
            <div class="dropdown-121">
              <p class="text-257">
                <span class="poppins-medium-ebony-14px">{{ spanText29 }}</span>
              </p>
              <img class="chevron-down-310" :src="chevronDown9" alt="Chevron Down" />
            </div>
            <div class="icon-button-335" :style="{ 'background-image': 'url(' + iconButton3 + ')' }"></div>
          </div>
          <div class="flex-row-112 poppins-medium-ebony-14px">
            <div class="dropdown-119">
              <div class="text-255">
                <span class="poppins-medium-ebony-14px">{{ spanText30 }}</span>
              </div>
              <img class="chevron-down-310" :src="chevronDown10" alt="Chevron Down" />
            </div>
            <div class="dropdown-120">
              <div class="text-256">
                <span class="poppins-medium-ebony-14px">{{ spanText31 }}</span>
              </div>
              <img class="chevron-down-310" :src="chevronDown11" alt="Chevron Down" />
            </div>
            <dropdown32 :spanText="dropdown37Props.spanText" :className="dropdown37Props.className" />
            <dropdown32 :spanText="dropdown38Props.spanText" :className="dropdown38Props.className" />
            <div class="dropdown-121">
              <p class="text-257">
                <span class="poppins-medium-ebony-14px">{{ spanText32 }}</span>
              </p>
              <img class="chevron-down-310" :src="chevronDown12" alt="Chevron Down" />
            </div>
            <div class="icon-button-335" :style="{ 'background-image': 'url(' + iconButton4 + ')' }"></div>
          </div>
          <div class="flex-row-112 poppins-medium-ebony-14px">
            <div class="dropdown-119">
              <div class="text-255">
                <span class="poppins-medium-ebony-14px">{{ spanText33 }}</span>
              </div>
              <img class="chevron-down-310" :src="chevronDown13" alt="Chevron Down" />
            </div>
            <div class="dropdown-120">
              <div class="text-256">
                <span class="poppins-medium-ebony-14px">{{ spanText34 }}</span>
              </div>
              <img class="chevron-down-310" :src="chevronDown14" alt="Chevron Down" />
            </div>
            <dropdown32 :spanText="dropdown39Props.spanText" :className="dropdown39Props.className" />
            <dropdown32 :spanText="dropdown310Props.spanText" :className="dropdown310Props.className" />
            <div class="dropdown-121">
              <p class="text-257">
                <span class="poppins-medium-ebony-14px">{{ spanText35 }}</span>
              </p>
              <img class="chevron-down-310" :src="chevronDown15" alt="Chevron Down" />
            </div>
            <div class="icon-button-335" :style="{ 'background-image': 'url(' + iconButton5 + ')' }"></div>
          </div>
          <div class="button-163">
            <img class="add-26" :src="add" alt="Add" />
            <div class="text-258 poppins-medium-caribbean-green-14px">
              <span class="poppins-medium-caribbean-green-14px">{{ spanText3 }}</span>
            </div>
          </div>
        </div>
        <div class="bottom-section-47">
          <img class="top-border-52" :src="topBorder" alt="Top Border" />
          <div class="frame-2526-4">
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
import Dropdown242 from "./Dropdown242";
import Header22 from "./Header22";
import Dropdown32 from "./Dropdown32";
import Button222 from "./Button222";
import Button22 from "./Button22";
export default {
  name: "SettingsIntegrationEdit",
  components: {
    LeftNavigationMenu11,
    TopNavigation,
    Button322,
    Header18,
    Option4,
    Dropdown242,
    Header22,
    Dropdown32,
    Button222,
    Button22,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText4",
    "spanText5",
    "inputType1",
    "inputPlaceholder1",
    "support1",
    "support2",
    "spanText6",
    "spanText7",
    "inputType2",
    "inputPlaceholder2",
    "support3",
    "spanText8",
    "spanText9",
    "inputType3",
    "inputPlaceholder3",
    "support4",
    "spanText10",
    "spanText11",
    "spanText12",
    "spanText13",
    "inputType4",
    "inputPlaceholder4",
    "support5",
    "spanText14",
    "divider1",
    "spanText15",
    "divider2",
    "spanText16",
    "spanText17",
    "spanText18",
    "spanText19",
    "spanText20",
    "spanText21",
    "chevronDown1",
    "spanText22",
    "chevronDown2",
    "spanText23",
    "chevronDown3",
    "iconButton1",
    "spanText24",
    "chevronDown4",
    "spanText25",
    "chevronDown5",
    "spanText26",
    "chevronDown6",
    "iconButton2",
    "spanText27",
    "chevronDown7",
    "spanText28",
    "chevronDown8",
    "spanText29",
    "chevronDown9",
    "iconButton3",
    "spanText30",
    "chevronDown10",
    "spanText31",
    "chevronDown11",
    "spanText32",
    "chevronDown12",
    "iconButton4",
    "spanText33",
    "chevronDown13",
    "spanText34",
    "chevronDown14",
    "spanText35",
    "chevronDown15",
    "iconButton5",
    "add",
    "spanText3",
    "topBorder",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "dropdown21Props",
    "option41Props",
    "dropdown21Props2",
    "option42Props",
    "option43Props",
    "option44Props",
    "option45Props",
    "header2Props",
    "dropdown22Props",
    "dropdown23Props",
    "dropdown24Props",
    "dropdown25Props",
    "dropdown26Props",
    "dropdown27Props",
    "dropdown28Props",
    "dropdown31Props",
    "dropdown32Props",
    "dropdown33Props",
    "dropdown34Props",
    "dropdown35Props",
    "dropdown36Props",
    "dropdown37Props",
    "dropdown38Props",
    "dropdown39Props",
    "dropdown310Props",
    "button2Props",
  ],
};
</script>

<style>
.settings-u47-integration-u47-edit {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 1590px;
  position: relative;
  width: 1440px;
}

.flex-col-149 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1590px;
  position: relative;
  width: 1216px;
}

.flex-row-113 {
  align-items: center;
  align-self: flex-start;
  display: flex;
  gap: 16px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 388px;
}

.header-72 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 40px;
  min-width: 276px;
  position: relative;
}

.page-header-51 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  white-space: nowrap;
}

.chip-10 {
  align-items: flex-start;
  background-color: #eaf9f0;
  border-radius: 100px;
  display: flex;
  height: 26px;
  margin-top: 2px;
  overflow: hidden;
  padding: 3px 14.5px;
  width: 96px;
}

.input-text-117 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
}

.information-15 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  gap: 32px;
  height: 464px;
  margin-top: 40px;
  overflow: hidden;
  padding: 24px 32px;
  width: 1152px;
}

.flex-col-150 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 404px;
  position: relative;
  width: 248px;
}

.label-308 {
  letter-spacing: 1.44px;
  line-height: 24px;
  margin-top: 39px;
  white-space: nowrap;
}

.overlap-group-33 {
  height: 86px;
  margin-top: 32px;
  position: relative;
  width: 248px;
}

.input-field-36 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: 0;
  min-height: 86px;
  position: absolute;
  top: 0;
  width: 248px;
}

.label-305 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 40px;
  width: 248px;
}

.input-88 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 248px;
}

.input-text-116 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 224px;
}

.input-text-116::placeholder {
  color: #0d0d1d99;
}

.support-12 {
  height: 16px;
  left: 232px;
  position: absolute;
  top: 2px;
  width: 16px;
}

.overlap-group3-2 {
  height: 66px;
  margin-top: 24px;
  position: relative;
  width: 248px;
}

.flex-col-151 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 91px;
  min-height: 191px;
  position: relative;
  width: 248px;
}

.label-306 {
  letter-spacing: 1.44px;
  line-height: 24px;
  white-space: nowrap;
}

.flex-col-152 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 111px;
  min-height: 171px;
  position: relative;
  width: 248px;
}

.overlap-group-34 {
  height: 66px;
  margin-top: 32px;
  position: relative;
  width: 248px;
}

.input-field-37 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: 0;
  min-height: 66px;
  position: absolute;
  top: 0;
  width: 248px;
}

.label-307 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 248px;
}

.flex-col-153 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  min-height: 235px;
  position: relative;
  width: 248px;
}

.toggle-action {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 12px;
  height: 21px;
  min-width: 221px;
}

.from-billeasy {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 94px;
}

.toggle {
  align-items: center;
  align-self: center;
  background-color: var(--cadet-blue);
  border-radius: 100px;
  display: flex;
  height: 16px;
  overflow: hidden;
  padding: 0 2px;
  width: 28px;
}

.ellipse-16 {
  background-color: var(--white);
  border-radius: 6px;
  height: 12px;
  width: 12px;
}

.to-billeasy {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
}

.label-309 {
  letter-spacing: 1.44px;
  line-height: 24px;
  margin-top: 43px;
  white-space: nowrap;
}

.information-16 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 798px;
  margin-top: 24px;
  overflow: hidden;
  padding: 24px 0;
  position: relative;
  width: 1152px;
}

.flex-row-114 {
  align-items: center;
  display: flex;
  gap: 21px;
  height: 24px;
  margin-top: 39px;
  min-width: 1088px;
}

.label-310 {
  letter-spacing: 0;
  line-height: 24px;
  min-width: 123px;
  white-space: nowrap;
}

.divider {
  height: 1px;
  margin-top: 5px;
  width: 944px;
}

.flex-row-115 {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  height: 156px;
  margin-top: 33px;
  min-width: 1088px;
  position: relative;
}

.dropdown-container-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 156px;
  position: relative;
  width: 248px;
}

.flex-row-116 {
  align-items: center;
  display: flex;
  gap: 16px;
  height: 24px;
  margin-top: 55px;
  min-width: 1088px;
}

.label-311 {
  letter-spacing: 0;
  line-height: 24px;
  min-width: 128px;
  white-space: nowrap;
}

.label-container-8 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  height: 24px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 852px;
}

.label-312 {
  letter-spacing: 1.44px;
  line-height: 24px;
  min-width: 67px;
  white-space: nowrap;
}

.label-313 {
  letter-spacing: 1.44px;
  line-height: 24px;
  margin-left: 69px;
  min-width: 67px;
  white-space: nowrap;
}

.label-314 {
  letter-spacing: 1.44px;
  line-height: 24px;
  margin-left: 101px;
  min-width: 108px;
  white-space: nowrap;
}

.label-315 {
  letter-spacing: 1.44px;
  line-height: 24px;
  margin-left: 100px;
  min-width: 115px;
  white-space: nowrap;
}

.label-316 {
  letter-spacing: 1.44px;
  line-height: 24px;
  margin-left: 93px;
  white-space: nowrap;
}

.flex-row-117 {
  align-items: center;
  display: flex;
  margin-top: 13px;
  min-width: 1088px;
  position: relative;
}

.dropdown-119 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 104px;
}

.text-255 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 48px;
}

.chevron-down-310 {
  height: 24px;
  width: 24px;
}

.dropdown-120 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-left: 32px;
  overflow: hidden;
  padding: 0 12px;
  width: 136px;
}

.text-256 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 80px;
}

.dropdown-121 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-left: 32px;
  overflow: hidden;
  padding: 0 12px;
  width: 320px;
}

.text-257 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 264px;
}

.icon-button-335 {
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 28px;
  width: 20px;
}

.flex-row-112 {
  align-items: center;
  display: flex;
  margin-top: 8px;
  min-width: 1088px;
  position: relative;
}

.button-163 {
  align-items: flex-start;
  align-self: flex-start;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 21px;
  margin-left: 37px;
  margin-top: 24px;
  min-width: 152px;
  transition: all 0.15s ease;
}

.button-163:hover {
  transform: scale(1.1);
}

.add-26 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-258 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 126px;
  text-align: center;
}

.bottom-section-47 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 32px;
  width: 1216px;
}

.top-border-52 {
  height: 1px;
  width: 1216px;
}

.frame-2526-4 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-right: 32px;
  min-width: 224px;
  position: relative;
}
</style>
