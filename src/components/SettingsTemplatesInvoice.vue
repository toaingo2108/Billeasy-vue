<template>
  <div class="container-center-horizontal">
    <form class="settings-u47-templates-u47-invoice screen" name="form3" action="form3" method="post">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-48">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-33">
          <div class="flex-col-49">
            <h1 class="page-header-26 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <div class="frame-2645-27">
              <div class="label-154 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText2 }}</span>
              </div>
              <div class="label-151 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText3 }}</span>
              </div>
              <div class="label-151 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText4 }}</span>
              </div>
              <div class="label-151 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText5 }}</span>
              </div>
              <div class="label-151 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText6 }}</span>
              </div>
              <div class="label-151 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText7 }}</span>
              </div>
              <div class="label-151 poppins-semi-bold-caribbean-green-14px">
                <span class="poppins-semi-bold-caribbean-green-14px">{{ spanText8 }}</span>
              </div>
              <div class="label-151 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText9 }}</span>
              </div>
            </div>
          </div>
          <div class="frame-2548-22">
            <header2 :className="header2Props.className" :frame2443Props="header2Props.frame2443Props" />
            <div class="tab-10">
              <div class="label-155 poppins-medium-manatee-14px">
                <span class="poppins-medium-manatee-14px">{{ spanText10 }}</span>
              </div>
              <tab-menu2 :className="tabMenu2Props.className" />
            </div>
            <img class="line-701-17" :src="line701" alt="Line 701" />
            <div class="header-39">
              <a href="javascript:SubmitForm('form3')">
                <div class="button-120">
                  <img class="chevron-left-4" :src="chevronLeft" alt="Chevron Left" />
                  <div class="text-205 poppins-medium-ebony-14px">
                    <span class="poppins-medium-ebony-14px">{{ spanText11 }}</span>
                  </div>
                </div></a
              >
              <div class="page-header-27 poppins-semi-bold-ebony-16px">
                <span class="poppins-semi-bold-ebony-16px">{{ spanText12 }}</span>
              </div>
            </div>
            <div class="flex-row-34">
              <div class="frame-2508">
                <header172 :spanText="header17Props.spanText" :frame2443Props="header17Props.frame2443Props" />
                <div class="overlap-group1-7">
                  <dropdown2 :spanText="dropdown21Props.spanText" :dropdown3Props="dropdown21Props.dropdown3Props" />
                  <img class="support-3" :src="support1" alt="Support" />
                </div>
                <dropdown2
                  :spanText="dropdown22Props.spanText"
                  :className="dropdown22Props.className"
                  :dropdown3Props="dropdown22Props.dropdown3Props"
                />
                <dropdown2
                  :spanText="dropdown23Props.spanText"
                  :className="dropdown23Props.className"
                  :dropdown3Props="dropdown23Props.dropdown3Props"
                />
                <dropdown2
                  :spanText="dropdown24Props.spanText"
                  :className="dropdown24Props.className"
                  :dropdown3Props="dropdown24Props.dropdown3Props"
                />
                <dropdown2
                  :spanText="dropdown25Props.spanText"
                  :className="dropdown25Props.className"
                  :dropdown3Props="dropdown25Props.dropdown3Props"
                />
                <dropdown2
                  :spanText="dropdown26Props.spanText"
                  :className="dropdown26Props.className"
                  :dropdown3Props="dropdown26Props.dropdown3Props"
                />
                <dropdown2
                  :spanText="dropdown27Props.spanText"
                  :className="dropdown27Props.className"
                  :dropdown3Props="dropdown27Props.dropdown3Props"
                />
                <dropdown2
                  :spanText="dropdown28Props.spanText"
                  :className="dropdown28Props.className"
                  :dropdown3Props="dropdown28Props.dropdown3Props"
                />
                <div class="overlap-group-15">
                  <div class="input-field-15">
                    <div class="label-152 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText13 }}</span>
                    </div>
                    <div class="input-41">
                      <div class="input-text-60 poppins-normal-ebony-14px">
                        <span class="poppins-normal-ebony-14px">{{ spanText14 }}</span>
                      </div>
                    </div>
                  </div>
                  <img class="chevron-down-296" :src="chevronDown" alt="Chevron Down" />
                </div>
                <div class="chip-container">
                  <div class="chip-6">
                    <div class="input-text-61 poppins-normal-ebony-12px">
                      <span class="poppins-normal-ebony-12px">{{ spanText15 }}</span>
                    </div>
                    <img class="close-circle-2" :src="closeCircle1" alt="Close-Circle" />
                  </div>
                  <div class="chip-7">
                    <div class="input-text-62 poppins-normal-ebony-12px">
                      <span class="poppins-normal-ebony-12px">{{ spanText16 }}</span>
                    </div>
                    <img class="close-circle-2" :src="closeCircle2" alt="Close-Circle" />
                  </div>
                </div>
              </div>
              <div class="frame-2543-1">
                <header5 :spanText="header5Props.spanText" :frame2443Props="header5Props.frame2443Props" />
                <dropdown2
                  :spanText="dropdown29Props.spanText"
                  :className="dropdown29Props.className"
                  :dropdown3Props="dropdown29Props.dropdown3Props"
                />
                <option2 :checkboxProps="option2Props.checkboxProps" />
                <div class="overlap-group5">
                  <div class="input-field-15">
                    <div class="label-152 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText17 }}</span>
                    </div>
                    <div class="input-41">
                      <input
                        class="input-text-59 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder1"
                        :type="inputType1"
                      />
                    </div>
                  </div>
                  <img class="support-3" :src="support2" alt="Support" />
                </div>
                <div class="overlap-group7">
                  <div class="input-field-16">
                    <div class="label-152 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText18 }}</span>
                    </div>
                    <div class="input-42">
                      <input
                        class="input-text-59 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder2"
                        :type="inputType2"
                      />
                    </div>
                  </div>
                  <img class="support-3" :src="support3" alt="Support" />
                </div>
                <div class="overlap-group-15">
                  <div class="input-field-15">
                    <div class="label-152 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText19 }}</span>
                    </div>
                    <div class="input-41">
                      <input
                        class="input-text-59 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder3"
                        :type="inputType3"
                      />
                    </div>
                  </div>
                  <img class="support-3" :src="support4" alt="Support" />
                </div>
                <div class="overlap-group-15">
                  <div class="input-field-15">
                    <div class="label-152 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText20 }}</span>
                    </div>
                    <div class="input-41">
                      <input
                        class="input-text-59 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder4"
                        :type="inputType4"
                      />
                    </div>
                  </div>
                  <img class="support-3" :src="support5" alt="Support" />
                </div>
                <div class="overlap-group-15">
                  <div class="input-field-15">
                    <div class="label-152 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText21 }}</span>
                    </div>
                    <div class="input-41">
                      <input
                        class="input-text-59 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder5"
                        :type="inputType5"
                      />
                    </div>
                  </div>
                  <img class="support-3" :src="support6" alt="Support" />
                </div>
                <div class="overlap-group-15">
                  <div class="input-field-15">
                    <div class="label-152 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText22 }}</span>
                    </div>
                    <div class="input-41">
                      <input
                        class="input-text-59 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder6"
                        :type="inputType6"
                      />
                    </div>
                  </div>
                  <img class="support-3" :src="support7" alt="Support" />
                </div>
              </div>
              <div class="frame-container-4">
                <div class="frame-2544-1">
                  <div class="flex-col-50">
                    <div class="header-40">
                      <frame2443 :src="frame2443Props.src" />
                      <div class="title-46 poppins-semi-bold-ebony-20px">
                        <span class="poppins-semi-bold-ebony-20px">{{ spanText23 }}</span>
                      </div>
                    </div>
                    <div class="option-8">
                      <checkbox :className="checkbox1Props.className" />
                      <div class="label-153 poppins-normal-ebony-14px">
                        <span class="poppins-normal-ebony-14px">{{ spanText24 }}</span>
                      </div>
                    </div>
                    <option3 :spanText="option31Props.spanText" :checkboxProps="option31Props.checkboxProps" />
                    <option18 :spanText="option181Props.spanText" :checkboxProps="option181Props.checkboxProps" />
                    <option52
                      :spanText="option51Props.spanText"
                      :className="option51Props.className"
                      :checkboxProps="option51Props.checkboxProps"
                    />
                    <div class="option-9">
                      <checkbox :className="checkbox2Props.className" />
                      <div class="label-153 poppins-normal-ebony-14px">
                        <span class="poppins-normal-ebony-14px">{{ spanText25 }}</span>
                      </div>
                    </div>
                  </div>
                  <img class="support-4" :src="support8" alt="Support" />
                </div>
                <div class="frame-2545">
                  <div class="overlap-group8">
                    <header6 :frame2443Props="header6Props.frame2443Props" />
                    <img class="support-5" :src="support9" alt="Support" />
                  </div>
                  <option52
                    :spanText="option52Props.spanText"
                    :className="option52Props.className"
                    :checkboxProps="option52Props.checkboxProps"
                  />
                  <option22 :spanText="option22Props.spanText" :checkboxProps="option22Props.checkboxProps" />
                  <option3
                    :spanText="option32Props.spanText"
                    :className="option32Props.className"
                    :checkboxProps="option32Props.checkboxProps"
                  />
                  <option7 :checkboxProps="option7Props.checkboxProps" />
                  <option8 :checkboxProps="option8Props.checkboxProps" />
                </div>
                <div class="frame-2546">
                  <header7 :frame2443Props="header7Props.frame2443Props" />
                  <option18
                    :spanText="option182Props.spanText"
                    :className="option182Props.className"
                    :checkboxProps="option182Props.checkboxProps"
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
import TabMenu2 from "./TabMenu2";
import Header172 from "./Header172";
import Dropdown2 from "./Dropdown2";
import Header5 from "./Header5";
import Option2 from "./Option2";
import Frame2443 from "./Frame2443";
import Checkbox from "./Checkbox";
import Option3 from "./Option3";
import Option18 from "./Option18";
import Option52 from "./Option52";
import Header6 from "./Header6";
import Option22 from "./Option22";
import Option7 from "./Option7";
import Option8 from "./Option8";
import Header7 from "./Header7";
import BottomSection14 from "./BottomSection14";
export default {
  name: "SettingsTemplatesInvoice",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Header2,
    TabMenu2,
    Header172,
    Dropdown2,
    Header5,
    Option2,
    Frame2443,
    Checkbox,
    Option3,
    Option18,
    Option52,
    Header6,
    Option22,
    Option7,
    Option8,
    Header7,
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
    "spanText10",
    "line701",
    "chevronLeft",
    "spanText11",
    "spanText12",
    "support1",
    "spanText13",
    "spanText14",
    "chevronDown",
    "spanText15",
    "closeCircle1",
    "spanText16",
    "closeCircle2",
    "spanText17",
    "inputType1",
    "inputPlaceholder1",
    "support2",
    "spanText18",
    "inputType2",
    "inputPlaceholder2",
    "support3",
    "spanText19",
    "inputType3",
    "inputPlaceholder3",
    "support4",
    "spanText20",
    "inputType4",
    "inputPlaceholder4",
    "support5",
    "spanText21",
    "inputType5",
    "inputPlaceholder5",
    "support6",
    "spanText22",
    "inputType6",
    "inputPlaceholder6",
    "support7",
    "spanText23",
    "spanText24",
    "spanText25",
    "support8",
    "support9",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "header2Props",
    "tabMenu2Props",
    "header17Props",
    "dropdown21Props",
    "dropdown22Props",
    "dropdown23Props",
    "dropdown24Props",
    "dropdown25Props",
    "dropdown26Props",
    "dropdown27Props",
    "dropdown28Props",
    "header5Props",
    "dropdown29Props",
    "option2Props",
    "frame2443Props",
    "checkbox1Props",
    "option31Props",
    "option181Props",
    "option51Props",
    "checkbox2Props",
    "header6Props",
    "option52Props",
    "option22Props",
    "option32Props",
    "option7Props",
    "option8Props",
    "header7Props",
    "option182Props",
    "bottomSectionProps",
  ],
};
</script>

<style>
.settings-u47-templates-u47-invoice {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 1438px;
  position: relative;
  width: 1440px;
}

.flex-col-48 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 1392px;
  position: relative;
  width: 1216px;
}

.flex-row-33 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 1297px;
  min-width: 1152px;
}

.flex-col-49 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  width: 184px;
}

.page-header-26 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2645-27 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 328px;
  width: 184px;
}

.label-154 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  width: 184px;
}

.label-151 {
  letter-spacing: 0;
  line-height: 20px;
  width: 184px;
}

.frame-2548-22 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 1296px;
  overflow: hidden;
  position: relative;
  width: 928px;
}

.tab-10 {
  align-items: center;
  display: flex;
  gap: 13px;
  height: 40px;
  justify-content: flex-end;
  margin-left: 32px;
  margin-top: 40px;
  min-width: 388px;
  position: relative;
}

.label-155 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  min-width: 168px;
  white-space: nowrap;
}

.line-701-17 {
  align-self: center;
  height: 1px;
  width: 864px;
}

.header-39 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  margin-left: 34px;
  margin-top: 23px;
  min-width: 305px;
}

.button-120 {
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

.button-120:hover {
  transform: translate(0, -5px);
}

.chevron-left-4 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-205 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-27 {
  letter-spacing: 0;
  line-height: 32px;
  margin-top: -1px;
  white-space: nowrap;
}

.flex-row-34 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 24px;
  margin-top: 32px;
  min-width: 864px;
}

.frame-2508 {
  align-items: center;
  background-color: var(--whisper);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 960px;
  overflow: hidden;
  padding: 24px 0;
  position: relative;
  width: 272px;
}

.overlap-group1-7 {
  height: 66px;
  margin-top: 40px;
  position: relative;
  width: 208px;
}

.support-3 {
  height: 16px;
  left: 192px;
  position: absolute;
  top: 2px;
  width: 16px;
}

.overlap-group-15 {
  height: 66px;
  margin-top: 24px;
  position: relative;
  width: 208px;
}

.input-field-15 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: 0;
  min-height: 66px;
  position: absolute;
  top: 0;
  width: 208px;
}

.label-152 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 208px;
}

.input-41 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 208px;
}

.input-text-60 {
  letter-spacing: 0;
  line-height: 24px;
  width: 184px;
}

.chevron-down-296 {
  height: 24px;
  left: 172px;
  position: absolute;
  top: 34px;
  width: 24px;
}

.chip-container {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 17px;
  margin-top: 8px;
  min-width: 191px;
}

.chip-6 {
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

.input-text-61 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 4px;
  min-height: 18px;
  min-width: 34px;
}

.close-circle-2 {
  align-self: center;
  height: 16px;
  width: 16px;
}

.chip-7 {
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

.input-text-62 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 4px;
  min-height: 18px;
  min-width: 85px;
}

.frame-2543-1 {
  align-items: center;
  background-color: var(--whisper);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 864px;
  overflow: hidden;
  padding: 24px 0;
  position: relative;
  width: 272px;
}

.overlap-group5 {
  height: 66px;
  margin-top: 32px;
  position: relative;
  width: 208px;
}

.input-text-59 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 184px;
}

.input-text-59::placeholder {
  color: #0d0d1d99;
}

.overlap-group7 {
  height: 128px;
  margin-top: 24px;
  position: relative;
  width: 208px;
}

.input-field-16 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: 0;
  min-height: 128px;
  position: absolute;
  top: 0;
  width: 208px;
}

.input-42 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 102px;
  overflow: hidden;
  padding: 9px 12px;
  width: 208px;
}

.frame-container-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 832px;
  width: 272px;
}

.frame-2544-1 {
  align-items: flex-start;
  background-color: var(--whisper);
  border-radius: 28px;
  display: flex;
  gap: 25px;
  height: 312px;
  overflow: hidden;
  padding: 10px;
  width: 272px;
}

.flex-col-50 {
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

.header-40 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  min-width: 184px;
  position: relative;
}

.title-46 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-8 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-top: 40px;
  min-width: 133px;
  position: relative;
}

.label-153 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-9 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-top: 16px;
  min-width: 146px;
  position: relative;
}

.support-4 {
  height: 16px;
  width: 16px;
}

.frame-2545 {
  align-items: flex-start;
  background-color: var(--whisper);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 312px;
  overflow: hidden;
  padding: 10px 9px;
  position: relative;
  width: 272px;
}

.overlap-group8 {
  align-self: flex-end;
  height: 42px;
  position: relative;
  width: 231px;
}

.support-5 {
  height: 16px;
  left: 214px;
  position: absolute;
  top: 0;
  width: 16px;
}

.frame-2546 {
  align-items: flex-start;
  background-color: var(--whisper);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 160px;
  overflow: hidden;
  padding: 24px 32px;
  position: relative;
  width: 272px;
}
</style>
