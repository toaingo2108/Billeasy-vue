<template>
  <div class="container-center-horizontal">
    <form class="invoices-u47-new screen" name="form38" action="form38" method="post">
      <left-navigation-menu5 v-bind="leftNavigationMenu5Props" />
      <div class="flex-col-197">
        <div class="flex-col-198">
          <top-navigation
            :className="topNavigationProps.className"
            :languageProps="topNavigationProps.languageProps"
            :userProfileProps="topNavigationProps.userProfileProps"
          />
          <div class="header-94">
            <a href="javascript:SubmitForm('form38')">
              <div class="button-248">
                <img class="chevron-left-23" :src="chevronLeft" alt="Chevron Left" />
                <div class="text-373 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                </div>
              </div></a
            >
            <div class="page-header-79 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
          </div>
          <div class="new-invoice-information">
            <div class="frame-2505-1">
              <dropdown42 :spanText1="dropdown41Props.spanText1" :spanText2="dropdown41Props.spanText2" />
              <dropdown42 :spanText1="dropdown42Props.spanText1" :spanText2="dropdown42Props.spanText2" />
              <dropdown42 :spanText1="dropdown43Props.spanText1" :spanText2="dropdown43Props.spanText2" />
              <div class="input-field-77">
                <div class="label-438 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span>
                </div>
                <div class="input-146">
                  <input
                    class="input-text-224 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder1"
                    :type="inputType1"
                  />
                </div>
              </div>
              <dropdown42 :spanText1="dropdown44Props.spanText1" :spanText2="dropdown44Props.spanText2" />
            </div>
            <div class="frame-250-7">
              <div class="input-field-77">
                <div class="label-438 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText4 }}</span>
                </div>
                <div class="input-146">
                  <input
                    class="input-text-224 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                  />
                </div>
              </div>
              <div class="input-field-77">
                <div class="label-438 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span>
                </div>
                <div class="input-146">
                  <input
                    class="input-text-224 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder3"
                    :type="inputType3"
                  />
                </div>
              </div>
              <div class="input-field-77">
                <div class="label-438 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText6 }}</span>
                </div>
                <div class="input-146">
                  <input
                    class="input-text-224 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder4"
                    :type="inputType4"
                  />
                </div>
              </div>
              <div class="input-field-77">
                <div class="label-438 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText7 }}</span>
                </div>
                <div class="input-146">
                  <input
                    class="input-text-224 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder5"
                    :type="inputType5"
                  />
                </div>
              </div>
              <div class="input-field-77">
                <div class="label-438 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText8 }}</span>
                </div>
                <div class="input-146">
                  <input
                    class="input-text-224 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder6"
                    :type="inputType6"
                  />
                </div>
              </div>
            </div>
            <div class="frame-250-7">
              <div class="input-field-77">
                <div class="label-438 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText9 }}</span>
                </div>
                <div class="input-146">
                  <input
                    class="input-text-224 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder7"
                    :type="inputType7"
                  />
                </div>
              </div>
              <div class="input-field-77">
                <div class="label-438 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText10 }}</span>
                </div>
                <div class="input-146">
                  <input
                    class="input-text-224 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder8"
                    :type="inputType8"
                  />
                </div>
              </div>
              <div class="input-field-77">
                <div class="label-438 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText11 }}</span>
                </div>
                <div class="input-146">
                  <input
                    class="input-text-224 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder9"
                    :type="inputType9"
                  />
                </div>
              </div>
              <div class="input-field-77">
                <div class="label-438 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText12 }}</span>
                </div>
                <div class="input-146">
                  <div class="input-text-228 poppins-normal-ebony-14px">
                    <span class="poppins-normal-ebony-14px">{{ spanText13 }}</span>
                  </div>
                </div>
              </div>
              <div class="input-field-77">
                <div class="label-438 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText14 }}</span>
                </div>
                <div class="input-146">
                  <input
                    class="input-text-224 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder10"
                    :type="inputType10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-col-item-1">
          <div class="new-invoice-information-1">
            <div class="frame-2510">
              <div class="input-field-78">
                <div class="label-439 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText15 }}</span>
                </div>
                <div class="input-147">
                  <input
                    class="input-text-225 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder11"
                    :type="inputType11"
                  />
                </div>
              </div>
              <dropdown522 :spanText1="dropdown51Props.spanText1" :spanText2="dropdown51Props.spanText2" />
              <input-field :spanText1="inputField1Props.spanText1" />
            </div>
            <div class="flex-row-190">
              <div class="input-field-78">
                <div class="label-439 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText16 }}</span>
                </div>
                <div class="input-147">
                  <input
                    class="input-text-225 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder12"
                    :type="inputType12"
                  />
                </div>
              </div>
              <input-field :spanText1="inputField2Props.spanText1" :className="inputField2Props.className" />
              <div class="option-57">
                <checkbox :className="frame2443Props.className" />
                <div class="label-440 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText17 }}</span>
                </div>
              </div>
            </div>
            <div class="dropdown-container-7">
              <dropdown522 :spanText1="dropdown52Props.spanText1" :spanText2="dropdown52Props.spanText2" />
              <dropdown522 :spanText1="dropdown53Props.spanText1" :spanText2="dropdown53Props.spanText2" />
            </div>
          </div>
          <div class="new-invoice-information-container">
            <div class="new-invoice-information-2">
              <div class="label-441 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText18 }}</span>
              </div>
              <div class="input-150">
                <input
                  class="input-text-229 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder13"
                  :type="inputType13"
                />
              </div>
            </div>
            <div class="new-invoice-information-3">
              <div class="overlap-group-62">
                <input-field3 />
                <img class="chevron-down-329" :src="chevronDown" alt="Chevron Down" />
              </div>
              <div class="chip-container-3 poppins-normal-ebony-12px">
                <div class="chip-34">
                  <div class="input-text-230">
                    <span class="poppins-normal-ebony-12px">{{ spanText20 }}</span>
                  </div>
                  <img class="close-circle-5" :src="closeCircle1" alt="Close-Circle" />
                </div>
                <div class="chip-35">
                  <div class="input-text-231">
                    <span class="poppins-normal-ebony-12px">{{ spanText21 }}</span>
                  </div>
                  <img class="close-circle-5" :src="closeCircle2" alt="Close-Circle" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="new-invoice-information-4">
          <div class="text-container-1 poppins-semi-bold-ebony-14px">
            <div class="text-374">
              <span class="poppins-semi-bold-ebony-14px">{{ spanText22 }}</span>
            </div>
            <div class="text-375">
              <span class="poppins-semi-bold-ebony-14px">{{ spanText24 }}</span>
            </div>
            <div class="text-376">
              <span class="poppins-semi-bold-ebony-14px">{{ spanText25 }}</span>
            </div>
            <div class="text-377">
              <span class="poppins-semi-bold-ebony-14px">{{ spanText26 }}</span>
            </div>
            <div class="text-378">
              <span class="poppins-semi-bold-ebony-14px">{{ spanText27 }}</span>
            </div>
            <div class="text-379">
              <span class="poppins-semi-bold-ebony-14px">{{ spanText28 }}</span>
            </div>
            <div class="text-380">
              <span class="poppins-semi-bold-ebony-14px">{{ spanText29 }}</span>
            </div>
            <div class="text-381">
              <span class="poppins-semi-bold-ebony-14px">{{ spanText30 }}</span>
            </div>
            <div class="text-382">
              <span class="poppins-semi-bold-ebony-14px">{{ spanText31 }}</span>
            </div>
          </div>
          <img class="line-705-6" :src="line705" alt="Line 705" />
          <div class="flex-row-191">
            <div class="icon-button-container-2">
              <div class="icon-button-379" :style="{ 'background-image': 'url(' + iconButton1 + ')' }"></div>
              <div class="icon-button-379" :style="{ 'background-image': 'url(' + iconButton2 + ')' }"></div>
              <div class="icon-button-379" :style="{ 'background-image': 'url(' + iconButton3 + ')' }"></div>
            </div>
            <div class="flex-col-199">
              <div class="flex-row-192">
                <div class="dropdown-container-8">
                  <dropdown172 />
                  <dropdown172 />
                </div>
                <div class="input-container-6">
                  <div class="input-148">
                    <input
                      class="input-text-226 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder14"
                      :type="inputType14"
                    />
                  </div>
                  <div class="input-148">
                    <input
                      class="input-text-226 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder15"
                      :type="inputType15"
                    />
                  </div>
                </div>
                <div class="input-container-5">
                  <div class="input-149">
                    <input
                      class="input-text-227 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder16"
                      :type="inputType16"
                    />
                  </div>
                  <div class="input-149">
                    <input
                      class="input-text-227 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder17"
                      :type="inputType17"
                    />
                  </div>
                </div>
                <div class="dropdown-container-6">
                  <dropdown62 :spanText="dropdown61Props.spanText" />
                  <dropdown62 :spanText="dropdown62Props.spanText" />
                </div>
                <div class="input-container-5">
                  <div class="input-149">
                    <input
                      class="input-text-227 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder18"
                      :type="inputType18"
                    />
                  </div>
                  <div class="input-149">
                    <input
                      class="input-text-227 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder19"
                      :type="inputType19"
                    />
                  </div>
                </div>
                <div class="dropdown-container-6">
                  <dropdown62 :spanText="dropdown63Props.spanText" />
                  <dropdown62 :spanText="dropdown64Props.spanText" />
                </div>
                <div class="input-container-5">
                  <div class="input-149">
                    <input
                      class="input-text-227 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder20"
                      :type="inputType20"
                    />
                  </div>
                  <div class="input-149">
                    <input
                      class="input-text-227 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder21"
                      :type="inputType21"
                    />
                  </div>
                </div>
                <div class="dropdown-container-6">
                  <dropdown62 :spanText="dropdown65Props.spanText" />
                  <dropdown62 :spanText="dropdown66Props.spanText" />
                </div>
                <div class="input-container-7">
                  <input2 />
                  <input2 />
                </div>
                <div class="icon-button-container-3">
                  <div class="icon-button-379" :style="{ 'background-image': 'url(' + iconButton4 + ')' }"></div>
                  <div class="icon-button-379" :style="{ 'background-image': 'url(' + iconButton5 + ')' }"></div>
                </div>
              </div>
              <div class="input-151">
                <input
                  class="input-text-232 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder22"
                  :type="inputType22"
                />
              </div>
            </div>
          </div>
          <img class="line-704-8" :src="line704" alt="Line 704" /><buttons4 :className="frame24833Props.className" />
        </div>
        <div class="flex-col-item-1">
          <div class="new-invoice-information-5">
            <div class="new-invoice-information-item">
              <dropdown7 :spanText1="dropdown71Props.spanText1" />
              <dropdown7 :spanText1="dropdown72Props.spanText1" />
            </div>
            <div class="new-invoice-information-item">
              <div class="input-field-79">
                <div class="label-442 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText19 }}</span>
                </div>
                <div class="input-152">
                  <input
                    class="input-text-233 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder23"
                    :type="inputType23"
                  />
                </div>
              </div>
              <dropdown7 :spanText1="dropdown73Props.spanText1" />
            </div>
            <dropdown7 :spanText1="dropdown74Props.spanText1" :className="dropdown74Props.className" />
          </div>
          <div class="information-19">
            <div class="header-95">
              <frame2443 :src="frame2443Props2.src" :className="frame2443Props2.className" />
              <div class="title-105 poppins-semi-bold-ebony-20px">
                <span class="poppins-semi-bold-ebony-20px">{{ spanText32 }}</span>
              </div>
            </div>
            <div class="frame-2481-6">
              <div class="total-fees-1 poppins-medium-ebony-14px">
                <span class="poppins-medium-ebony-14px">{{ spanText23 }}</span>
              </div>
              <div class="text-9-3 poppins-normal-comet-13px">
                <span class="poppins-normal-comet-13px">{{ spanText35 }}</span>
              </div>
            </div>
            <div class="frame-2482-6">
              <div class="total-discounts-1 poppins-medium-ebony-14px">
                <span class="poppins-medium-ebony-14px">{{ spanText33 }}</span>
              </div>
              <div class="text-9-3 poppins-normal-comet-13px">
                <span class="poppins-normal-comet-13px">{{ spanText34 }}</span>
              </div>
            </div>
            <frame2483 :spanText1="frame24831Props.spanText1" />
            <frame2483 :spanText1="frame24832Props.spanText1" :className="frame24832Props.className" />
            <frame2483 :spanText1="frame24833Props2.spanText1" :className="frame24833Props2.className" />
          </div>
        </div>
        <div class="bottom-section-93"><img class="top-border-103" :src="add1" alt="Top Border" /><buttons62 /></div>
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu5 from "./LeftNavigationMenu5";
import TopNavigation from "./TopNavigation";
import Dropdown42 from "./Dropdown42";
import Dropdown522 from "./Dropdown522";
import InputField from "./InputField";
import Checkbox from "./Checkbox";
import InputField3 from "./InputField3";
import Dropdown172 from "./Dropdown172";
import Dropdown62 from "./Dropdown62";
import Input2 from "./Input2";
import Buttons4 from "./Buttons4";
import Dropdown7 from "./Dropdown7";
import Frame2443 from "./Frame2443";
import Frame2483 from "./Frame2483";
import Buttons62 from "./Buttons62";
export default {
  name: "InvoicesNew",
  components: {
    LeftNavigationMenu5,
    TopNavigation,
    Dropdown42,
    Dropdown522,
    InputField,
    Checkbox,
    InputField3,
    Dropdown172,
    Dropdown62,
    Input2,
    Buttons4,
    Dropdown7,
    Frame2443,
    Frame2483,
    Buttons62,
  },
  props: [
    "chevronLeft",
    "spanText1",
    "spanText2",
    "spanText3",
    "inputType1",
    "inputPlaceholder1",
    "spanText4",
    "inputType2",
    "inputPlaceholder2",
    "spanText5",
    "inputType3",
    "inputPlaceholder3",
    "spanText6",
    "inputType4",
    "inputPlaceholder4",
    "spanText7",
    "inputType5",
    "inputPlaceholder5",
    "spanText8",
    "inputType6",
    "inputPlaceholder6",
    "spanText9",
    "inputType7",
    "inputPlaceholder7",
    "spanText10",
    "inputType8",
    "inputPlaceholder8",
    "spanText11",
    "inputType9",
    "inputPlaceholder9",
    "spanText12",
    "spanText13",
    "spanText14",
    "inputType10",
    "inputPlaceholder10",
    "spanText15",
    "inputType11",
    "inputPlaceholder11",
    "spanText16",
    "inputType12",
    "inputPlaceholder12",
    "spanText17",
    "spanText18",
    "inputType13",
    "inputPlaceholder13",
    "chevronDown",
    "spanText20",
    "closeCircle1",
    "spanText21",
    "closeCircle2",
    "spanText22",
    "spanText24",
    "spanText25",
    "spanText26",
    "spanText27",
    "spanText28",
    "spanText29",
    "spanText30",
    "spanText31",
    "line705",
    "iconButton1",
    "iconButton2",
    "iconButton3",
    "inputType14",
    "inputPlaceholder14",
    "inputType15",
    "inputPlaceholder15",
    "inputType16",
    "inputPlaceholder16",
    "inputType17",
    "inputPlaceholder17",
    "inputType18",
    "inputPlaceholder18",
    "inputType19",
    "inputPlaceholder19",
    "inputType20",
    "inputPlaceholder20",
    "inputType21",
    "inputPlaceholder21",
    "iconButton4",
    "iconButton5",
    "inputType22",
    "inputPlaceholder22",
    "line704",
    "spanText19",
    "inputType23",
    "inputPlaceholder23",
    "spanText32",
    "spanText23",
    "spanText35",
    "spanText33",
    "spanText34",
    "add1",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "dropdown41Props",
    "dropdown42Props",
    "dropdown43Props",
    "dropdown44Props",
    "dropdown51Props",
    "inputField1Props",
    "inputField2Props",
    "frame2443Props",
    "dropdown52Props",
    "dropdown53Props",
    "dropdown61Props",
    "dropdown62Props",
    "dropdown63Props",
    "dropdown64Props",
    "dropdown65Props",
    "dropdown66Props",
    "frame24833Props",
    "dropdown71Props",
    "dropdown72Props",
    "dropdown73Props",
    "dropdown74Props",
    "frame2443Props2",
    "frame24831Props",
    "frame24832Props",
    "frame24833Props2",
  ],
};
</script>

<style>
.invoices-u47-new {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 1638px;
  position: relative;
  width: 1440px;
}

.flex-col-197 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1638px;
  width: 1216px;
}

.flex-col-198 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 486px;
  position: relative;
  width: 1216px;
}

.header-94 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 234px;
}

.button-248 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
  width: 87px;
}

.button-248:hover {
  transform: translate(0, -5px);
}

.chevron-left-23 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-373 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-79 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  white-space: nowrap;
}

.new-invoice-information {
  align-items: center;
  align-self: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 310px;
  margin-top: 40px;
  overflow: hidden;
  padding: 32px 0;
  width: 1152px;
}

.frame-2505-1 {
  align-items: flex-start;
  display: flex;
  gap: 22px;
  height: 66px;
  min-width: 1088px;
  position: relative;
}

.input-field-77 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 200px;
}

.label-438 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 200px;
}

.input-146 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 200px;
}

.input-text-224 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 176px;
}

.input-text-224::placeholder,
.input-text-225::placeholder,
.input-text-229::placeholder,
.input-text-226::placeholder,
.input-text-227::placeholder,
.input-text-232::placeholder,
.input-text-233::placeholder {
  color: #0d0d1d99;
}

.frame-250-7 {
  align-items: flex-start;
  display: flex;
  gap: 22px;
  height: 66px;
  min-width: 1088px;
}

.input-text-228 {
  letter-spacing: 0;
  line-height: 24px;
  width: 176px;
}

.flex-col-item-1 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  margin-top: 24px;
  min-width: 1152px;
}

.new-invoice-information-1 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 320px;
  overflow: hidden;
  padding: 32px 0;
  width: 564px;
}

.frame-2510 {
  align-items: flex-start;
  display: flex;
  gap: 22px;
  height: 66px;
  min-width: 500px;
  position: relative;
}

.input-field-78 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 152px;
}

.label-439 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 152px;
}

.input-147 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 152px;
}

.input-text-225 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 128px;
}

.flex-row-190 {
  align-items: flex-end;
  display: flex;
  gap: 22px;
  height: 66px;
  margin-right: 19px;
  min-width: 481px;
  position: relative;
}

.option-57 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-bottom: 8px;
  min-width: 133px;
  position: relative;
}

.label-440 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.dropdown-container-7 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  gap: 22px;
  height: 66px;
  margin-left: 32px;
  min-width: 326px;
  position: relative;
}

.new-invoice-information-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 320px;
  width: 564px;
}

.new-invoice-information-2 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  height: 148px;
  overflow: hidden;
  padding: 23px 0;
  width: 564px;
}

.label-441 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 500px;
}

.input-150 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 74px;
  overflow: hidden;
  padding: 9px 12px;
  width: 500px;
}

.input-text-229 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 476px;
}

.new-invoice-information-3 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 148px;
  overflow: hidden;
  padding: 24px 0;
  width: 564px;
}

.overlap-group-62 {
  align-self: center;
  height: 66px;
  position: relative;
  width: 500px;
}

.chevron-down-329 {
  height: 24px;
  left: 458px;
  position: absolute;
  top: 34px;
  width: 24px;
}

.chip-container-3 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-left: 32px;
  min-width: 159px;
}

.chip-34 {
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

.input-text-230 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 4px;
  min-height: 18px;
  min-width: 34px;
}

.close-circle-5 {
  align-self: center;
  height: 16px;
  width: 16px;
}

.chip-35 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 100px;
  display: flex;
  gap: 4px;
  height: 26px;
  overflow: hidden;
  padding: 3px 4px;
  width: 85px;
}

.input-text-231 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 4px;
  min-height: 18px;
  min-width: 53px;
}

.new-invoice-information-4 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 360px;
  margin-top: 24px;
  overflow: hidden;
  padding: 23px 0;
  position: relative;
  width: 1152px;
}

.text-container-1 {
  align-items: flex-start;
  display: flex;
  height: 21px;
  margin-right: 60px;
  min-width: 972px;
}

.text-374 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 56px;
}

.text-375 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 112px;
  min-height: 21px;
  min-width: 82px;
}

.text-376 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 182px;
  min-height: 21px;
  min-width: 21px;
}

.text-377 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 51px;
  min-height: 21px;
  min-width: 29px;
}

.text-378 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 67px;
  min-height: 21px;
  min-width: 36px;
}

.text-379 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 36px;
  min-height: 21px;
  min-width: 64px;
}

.text-380 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 32px;
  min-height: 21px;
  min-width: 34px;
}

.text-381 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 38px;
  min-height: 21px;
  min-width: 72px;
}

.text-382 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 24px;
  min-height: 21px;
}

.line-705-6 {
  height: 1px;
  margin-top: 11px;
  width: 1088px;
}

.flex-row-191 {
  align-items: center;
  display: flex;
  gap: 8px;
  height: 168px;
  margin-top: 23px;
  min-width: 1088px;
}

.icon-button-container-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 44px;
  min-height: 148px;
  width: 20px;
}

.icon-button-379 {
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  width: 20px;
}

.flex-col-199 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 168px;
  width: 1060px;
}

.flex-row-192 {
  align-items: center;
  display: flex;
  gap: 8px;
  height: 104px;
  min-width: 1060px;
}

.dropdown-container-8 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 104px;
  position: relative;
  width: 160px;
}

.input-container-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 104px;
  width: 256px;
}

.input-148 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 256px;
}

.input-text-226 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 232px;
}

.input-container-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 104px;
  width: 64px;
}

.input-149 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 64px;
}

.input-text-227 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 40px;
}

.dropdown-container-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 104px;
  position: relative;
  width: 88px;
}

.input-container-7 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 104px;
  position: relative;
  width: 96px;
}

.icon-button-container-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 44px;
  min-height: 84px;
  width: 20px;
}

.input-151 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 1060px;
}

.input-text-232 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 1036px;
}

.line-704-8 {
  height: 1px;
  margin-top: 24px;
  width: 1088px;
}

.new-invoice-information-5 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  gap: 22px;
  height: 272px;
  overflow: hidden;
  padding: 32px;
  position: relative;
  width: 792px;
}

.new-invoice-information-item {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 156px;
  position: relative;
  width: 228px;
}

.input-field-79 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 228px;
}

.label-442 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 228px;
}

.input-152 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 228px;
}

.input-text-233 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 204px;
}

.information-19 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 272px;
  overflow: hidden;
  padding: 24px 0;
  position: relative;
  width: 336px;
}

.header-95 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  margin-left: 32px;
  min-width: 92px;
  position: relative;
}

.title-105 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.frame-2481-6 {
  align-items: flex-start;
  display: flex;
  gap: 156px;
  height: 21px;
  margin-top: 32px;
  min-width: 272px;
}

.total-fees-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 69px;
}

.text-9-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  min-height: 20px;
}

.frame-2482-6 {
  align-items: flex-start;
  display: flex;
  gap: 113px;
  height: 21px;
  margin-top: 14px;
  min-width: 272px;
}

.total-discounts-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 108px;
}

.bottom-section-93 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 32px;
  position: relative;
  width: 1216px;
}

.top-border-103 {
  height: 1px;
  width: 1216px;
}
</style>
