<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-invoice screen">
      <left-navigation-menu11 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-139">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-45 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="tab-25">
          <div class="tab-menu-74">
            <div class="flex-row-100">
              <img class="invoice-125" :src="invoice" alt="Invoice" />
              <div class="label-282 poppins-medium-caribbean-green-14px">
                <span class="poppins-medium-caribbean-green-14px">{{ spanText2 }}</span>
              </div>
            </div>
            <div class="rectangle-6502-33"></div>
          </div>
          <tab-menu282 />
          <tab-menu292 />
        </div>
        <img class="line-701-32" :src="line701" alt="Line 701" />
        <div class="information-5">
          <img class="info-2" :src="info" alt="Info" />
          <p class="here-you-set-default poppins-normal-ebony-14px">
            <span class="poppins-normal-ebony-14px">{{ spanText3 }}</span>
          </p>
        </div>
        <div class="flex-row-101">
          <div class="information-6">
            <header172
              :spanText="headerProps.spanText"
              :className="headerProps.className"
              :frame2443Props="headerProps.frame2443Props"
            />
            <dropdown232 :spanText1="dropdown1Props.spanText1" :spanText2="dropdown1Props.spanText2" />
            <dropdown232
              :spanText1="dropdown2Props.spanText1"
              :spanText2="dropdown2Props.spanText2"
              :className="dropdown2Props.className"
            />
            <dropdown232
              :spanText1="dropdown3Props.spanText1"
              :spanText2="dropdown3Props.spanText2"
              :className="dropdown3Props.className"
            />
            <dropdown232
              :spanText1="dropdown4Props.spanText1"
              :spanText2="dropdown4Props.spanText2"
              :className="dropdown4Props.className"
            />
            <dropdown232
              :spanText1="dropdown5Props.spanText1"
              :spanText2="dropdown5Props.spanText2"
              :className="dropdown5Props.className"
            />
            <dropdown232
              :spanText1="dropdown6Props.spanText1"
              :spanText2="dropdown6Props.spanText2"
              :className="dropdown6Props.className"
            />
            <dropdown232
              :spanText1="dropdown7Props.spanText1"
              :spanText2="dropdown7Props.spanText2"
              :className="dropdown7Props.className"
            />
            <dropdown232
              :spanText1="dropdown8Props.spanText1"
              :spanText2="dropdown8Props.spanText2"
              :className="dropdown8Props.className"
            />
            <div class="overlap-group-29">
              <div class="input-field-33">
                <div class="label-280 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText4 }}</span>
                </div>
                <div class="input-85">
                  <div class="input-text-112 poppins-normal-ebony-14px">
                    <span class="poppins-normal-ebony-14px">{{ spanText5 }}</span>
                  </div>
                </div>
              </div>
              <img class="chevron-down-307" :src="chevronDown" alt="Chevron Down" />
            </div>
            <div class="chip-container-1">
              <div class="chip-8">
                <div class="input-text-113 poppins-normal-ebony-12px">
                  <span class="poppins-normal-ebony-12px">{{ spanText6 }}</span>
                </div>
                <img class="close-circle-3" :src="closeCircle1" alt="Close-Circle" />
              </div>
              <div class="chip-9">
                <div class="input-text-114 poppins-normal-ebony-12px">
                  <span class="poppins-normal-ebony-12px">{{ spanText7 }}</span>
                </div>
                <img class="close-circle-3" :src="closeCircle2" alt="Close-Circle" />
              </div>
            </div>
          </div>
          <div class="information-7">
            <div class="header-68">
              <frame2443 :src="frame24431Props.src" />
              <div class="title-85 poppins-semi-bold-ebony-20px">
                <span class="poppins-semi-bold-ebony-20px">{{ spanText8 }}</span>
              </div>
            </div>
            <dropdown232 :spanText1="dropdown9Props.spanText1" :spanText2="dropdown9Props.spanText2" />
            <option2 :className="dropdown2Props2.className" :checkboxProps="dropdown2Props2.checkboxProps" />
            <div class="overlap-group-30">
              <div class="input-field-33">
                <div class="label-280 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText10 }}</span>
                </div>
                <div class="input-85">
                  <input
                    class="input-text-111 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder1"
                    :type="inputType1"
                  />
                </div>
              </div>
              <img class="support-6" :src="support1" alt="Support" />
            </div>
            <div class="overlap-group-31">
              <div class="input-field-34">
                <div class="label-280 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText11 }}</span>
                </div>
                <div class="input-86">
                  <input
                    class="input-text-111 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                  />
                </div>
              </div>
              <img class="support-6" :src="support2" alt="Support" />
            </div>
            <div class="overlap-group-29">
              <div class="input-field-33">
                <div class="label-280 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText12 }}</span>
                </div>
                <div class="input-85">
                  <input
                    class="input-text-111 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder3"
                    :type="inputType3"
                  />
                </div>
              </div>
              <img class="support-6" :src="support3" alt="Support" />
            </div>
            <div class="overlap-group-29">
              <div class="input-field-33">
                <div class="label-280 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText13 }}</span>
                </div>
                <div class="input-85">
                  <input
                    class="input-text-111 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder4"
                    :type="inputType4"
                  />
                </div>
              </div>
              <img class="support-6" :src="support4" alt="Support" />
            </div>
            <div class="overlap-group-29">
              <div class="input-field-33">
                <div class="label-280 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText14 }}</span>
                </div>
                <div class="input-85">
                  <input
                    class="input-text-111 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder5"
                    :type="inputType5"
                  />
                </div>
              </div>
              <img class="support-6" :src="support5" alt="Support" />
            </div>
            <div class="overlap-group-29">
              <div class="input-field-33">
                <div class="label-280 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText15 }}</span>
                </div>
                <div class="input-85">
                  <input
                    class="input-text-111 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder6"
                    :type="inputType6"
                  />
                </div>
              </div>
              <img class="support-6" :src="support6" alt="Support" />
            </div>
          </div>
          <div class="information-container">
            <div class="information-8">
              <div class="flex-col-140">
                <div class="header-69">
                  <frame2443 :src="frame24432Props.src" />
                  <div class="title-85 poppins-semi-bold-ebony-20px">
                    <span class="poppins-semi-bold-ebony-20px">{{ spanText16 }}</span>
                  </div>
                </div>
                <div class="option-35">
                  <checkbox :className="checkboxProps.className" />
                  <div class="label-281 poppins-normal-ebony-14px">
                    <span class="poppins-normal-ebony-14px">{{ spanText17 }}</span>
                  </div>
                </div>
                <option3 :spanText="option2Props.spanText" :checkboxProps="option2Props.checkboxProps" />
                <option18 :spanText="option1Props.spanText" :checkboxProps="option1Props.checkboxProps" />
                <option52
                  :spanText="dropdown2Props3.spanText"
                  :className="dropdown2Props3.className"
                  :checkboxProps="dropdown2Props3.checkboxProps"
                />
                <div class="option-36">
                  <checkbox :className="checkboxProps2.className" />
                  <div class="label-281 poppins-normal-ebony-14px">
                    <span class="poppins-normal-ebony-14px">{{ spanText18 }}</span>
                  </div>
                </div>
              </div>
              <img class="support-7" :src="support7" alt="Support" />
            </div>
            <div class="information-9">
              <div class="flex-col-141">
                <header6 :className="dropdown10Props.className" :frame2443Props="dropdown10Props.frame2443Props" />
                <option52
                  :spanText="option2Props2.spanText"
                  :className="option2Props2.className"
                  :checkboxProps="option2Props2.checkboxProps"
                />
                <option22
                  :spanText="option2Props3.spanText"
                  :className="option2Props3.className"
                  :checkboxProps="option2Props3.checkboxProps"
                />
                <option3
                  :spanText="option1Props2.spanText"
                  :className="option1Props2.className"
                  :checkboxProps="option1Props2.checkboxProps"
                />
                <option7 :className="dropdown2Props4.className" :checkboxProps="dropdown2Props4.checkboxProps" />
                <option8 :className="dropdown3Props2.className" :checkboxProps="dropdown3Props2.checkboxProps" />
              </div>
              <img class="support-7" :src="support8" alt="Support" />
            </div>
            <div class="information-10">
              <header7 :frame2443Props="headerProps2.frame2443Props" />
              <option18
                :spanText="option2Props22.spanText"
                :className="option2Props22.className"
                :checkboxProps="option2Props22.checkboxProps"
              />
            </div>
          </div>
        </div>
        <div class="information-11">
          <header3
            :spanText="headerProps3.spanText"
            :className="headerProps3.className"
            :frame2443Props="headerProps3.frame2443Props"
          />
          <div class="overlap-group9">
            <div class="input-field-34">
              <div class="label-280 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText19 }}</span>
              </div>
              <div class="input-86">
                <input
                  class="input-text-111 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder7"
                  :type="inputType7"
                />
              </div>
            </div>
            <img class="support-6" :src="support9" alt="Support" />
          </div>
          <div class="overlap-group-31">
            <div class="input-field-34">
              <div class="label-280 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText20 }}</span>
              </div>
              <div class="input-86">
                <input
                  class="input-text-111 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder8"
                  :type="inputType8"
                />
              </div>
            </div>
            <img class="support-6" :src="support10" alt="Support" />
          </div>
          <div class="option-37">
            <checkbox :className="checkboxProps3.className" />
            <p class="label-283 poppins-normal-ebony-14px">
              <span class="poppins-normal-ebony-14px">{{ spanText9 }}</span>
            </p>
            <img class="support-7" :src="support11" alt="Support" />
          </div>
          <div class="overlap-group-30">
            <dropdown232
              :spanText1="dropdown10Props2.spanText1"
              :spanText2="dropdown10Props2.spanText2"
              :className="dropdown10Props2.className"
            />
            <img class="support-6" :src="support12" alt="Support" />
          </div>
        </div>
        <div class="bottom-section-45">
          <img class="top-border-50" :src="topBorder" alt="Top Border" />
          <div class="frame-2526-2">
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
import TabMenu282 from "./TabMenu282";
import TabMenu292 from "./TabMenu292";
import Header172 from "./Header172";
import Dropdown232 from "./Dropdown232";
import Frame2443 from "./Frame2443";
import Option2 from "./Option2";
import Checkbox from "./Checkbox";
import Option3 from "./Option3";
import Option18 from "./Option18";
import Option52 from "./Option52";
import Header6 from "./Header6";
import Option22 from "./Option22";
import Option7 from "./Option7";
import Option8 from "./Option8";
import Header7 from "./Header7";
import Header3 from "./Header3";
import Button222 from "./Button222";
import Button22 from "./Button22";
export default {
  name: "SettingsInvoice",
  components: {
    LeftNavigationMenu11,
    TopNavigation,
    TabMenu282,
    TabMenu292,
    Header172,
    Dropdown232,
    Frame2443,
    Option2,
    Checkbox,
    Option3,
    Option18,
    Option52,
    Header6,
    Option22,
    Option7,
    Option8,
    Header7,
    Header3,
    Button222,
    Button22,
  },
  props: [
    "spanText1",
    "invoice",
    "spanText2",
    "line701",
    "info",
    "spanText3",
    "spanText4",
    "spanText5",
    "chevronDown",
    "spanText6",
    "closeCircle1",
    "spanText7",
    "closeCircle2",
    "spanText8",
    "spanText10",
    "inputType1",
    "inputPlaceholder1",
    "support1",
    "spanText11",
    "inputType2",
    "inputPlaceholder2",
    "support2",
    "spanText12",
    "inputType3",
    "inputPlaceholder3",
    "support3",
    "spanText13",
    "inputType4",
    "inputPlaceholder4",
    "support4",
    "spanText14",
    "inputType5",
    "inputPlaceholder5",
    "support5",
    "spanText15",
    "inputType6",
    "inputPlaceholder6",
    "support6",
    "spanText16",
    "spanText17",
    "spanText18",
    "support7",
    "support8",
    "spanText19",
    "inputType7",
    "inputPlaceholder7",
    "support9",
    "spanText20",
    "inputType8",
    "inputPlaceholder8",
    "support10",
    "spanText9",
    "support11",
    "support12",
    "topBorder",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "headerProps",
    "dropdown1Props",
    "dropdown2Props",
    "dropdown3Props",
    "dropdown4Props",
    "dropdown5Props",
    "dropdown6Props",
    "dropdown7Props",
    "dropdown8Props",
    "frame24431Props",
    "dropdown9Props",
    "dropdown2Props2",
    "frame24432Props",
    "checkboxProps",
    "option2Props",
    "option1Props",
    "dropdown2Props3",
    "checkboxProps2",
    "dropdown10Props",
    "option2Props2",
    "option2Props3",
    "option1Props2",
    "dropdown2Props4",
    "dropdown3Props2",
    "headerProps2",
    "option2Props22",
    "headerProps3",
    "checkboxProps3",
    "dropdown10Props2",
    "button2Props",
  ],
};
</script>

<style>
.settings-u47-invoice {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 2064px;
  position: relative;
  width: 1440px;
}

.flex-col-139 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 2064px;
  position: relative;
  width: 1216px;
}

.page-header-45 {
  letter-spacing: 0;
  line-height: 40px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.tab-25 {
  height: 40px;
  margin-left: 32px;
  margin-top: 33px;
  position: relative;
  width: 632px;
}

.tab-menu-74 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  left: 0;
  min-height: 40px;
  position: absolute;
  top: 0;
  width: 211px;
}

.flex-row-100 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-left: 0;
  margin-top: 9px;
  min-width: 136px;
}

.invoice-125 {
  height: 18px;
  width: 18px;
}

.label-282 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 112px;
  white-space: nowrap;
}

.rectangle-6502-33 {
  background-color: var(--caribbean-green);
  height: 2px;
  margin-left: 0.33px;
  width: 211px;
}

.line-701-32 {
  align-self: center;
  height: 1px;
  width: 1152px;
}

.information-5 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 24px;
  display: flex;
  gap: 16px;
  height: 112px;
  margin-left: 32px;
  margin-top: 39px;
  overflow: hidden;
  padding: 15px 16px;
  width: 632px;
}

.info-2 {
  height: 20px;
  margin-top: 5px;
  width: 20px;
}

.here-you-set-default {
  letter-spacing: 0;
  line-height: 26px;
  min-height: 78px;
  width: 564px;
}

.flex-row-101 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 24px;
  margin-top: 32px;
  min-width: 1152px;
}

.information-6 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 960px;
  overflow: hidden;
  padding: 24px 0;
  position: relative;
  width: 368px;
}

.overlap-group-29 {
  height: 66px;
  margin-top: 24px;
  position: relative;
  width: 304px;
}

.input-field-33 {
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

.label-280 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 304px;
}

.input-85 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 304px;
}

.input-text-112 {
  letter-spacing: 0;
  line-height: 24px;
  width: 280px;
}

.chevron-down-307 {
  height: 24px;
  left: 268px;
  position: absolute;
  top: 34px;
  width: 24px;
}

.chip-container-1 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  gap: 8px;
  margin-left: 32px;
  margin-top: 8px;
  min-width: 191px;
}

.chip-8 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 100px;
  display: flex;
  gap: 4px;
  height: 26px;
  overflow: hidden;
  padding: 3px 4px;
  width: 66px;
}

.input-text-113 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 4px;
  min-height: 18px;
  min-width: 34px;
}

.close-circle-3 {
  align-self: center;
  height: 16px;
  width: 16px;
}

.chip-9 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 100px;
  display: flex;
  gap: 4px;
  height: 26px;
  overflow: hidden;
  padding: 3px 4px;
  width: 117px;
}

.input-text-114 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 4px;
  min-height: 18px;
  min-width: 85px;
}

.information-7 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 864px;
  overflow: hidden;
  padding: 24px 0;
  position: relative;
  width: 368px;
}

.header-68 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  margin-left: 32px;
  min-width: 238px;
  position: relative;
}

.title-85 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.overlap-group-30 {
  height: 66px;
  margin-top: 32px;
  position: relative;
  width: 304px;
}

.input-text-111 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 280px;
}

.input-text-111::placeholder {
  color: #0d0d1d99;
}

.support-6 {
  height: 16px;
  left: 288px;
  position: absolute;
  top: 2px;
  width: 16px;
}

.overlap-group-31 {
  height: 128px;
  margin-top: 24px;
  position: relative;
  width: 304px;
}

.input-field-34 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: 0;
  min-height: 128px;
  position: absolute;
  top: 0;
  width: 304px;
}

.input-86 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 102px;
  overflow: hidden;
  padding: 9px 12px;
  width: 304px;
}

.information-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 832px;
  width: 368px;
}

.information-8 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  gap: 121px;
  height: 312px;
  overflow: hidden;
  padding: 10px;
  width: 368px;
}

.flex-col-140 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  margin-left: 22px;
  min-height: 252px;
  position: relative;
  width: 189px;
}

.header-69 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  min-width: 184px;
  position: relative;
}

.option-35 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-top: 40px;
  min-width: 133px;
  position: relative;
}

.label-281 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-36 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-top: 16px;
  min-width: 146px;
  position: relative;
}

.support-7 {
  height: 16px;
  width: 16px;
}

.information-9 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  gap: 79px;
  height: 312px;
  overflow: hidden;
  padding: 10px;
  width: 368px;
}

.flex-col-141 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  margin-left: 22px;
  min-height: 252px;
  position: relative;
  width: 231px;
}

.information-10 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 160px;
  overflow: hidden;
  padding: 24px 32px;
  position: relative;
  width: 368px;
}

.information-11 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 560px;
  margin-left: 32px;
  margin-top: 24px;
  overflow: hidden;
  padding: 24px 0;
  position: relative;
  width: 368px;
}

.overlap-group9 {
  height: 128px;
  margin-top: 40px;
  position: relative;
  width: 304px;
}

.option-37 {
  align-items: center;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-top: 32px;
  min-width: 304px;
  position: relative;
}

.label-283 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  width: 246px;
}

.bottom-section-45 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 32px;
  width: 1216px;
}

.top-border-50 {
  height: 1px;
  width: 1216px;
}

.frame-2526-2 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-right: 32px;
  min-width: 224px;
  position: relative;
}
</style>
