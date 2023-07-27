<template>
  <div class="container-center-horizontal">
    <div class="tou45do-u47-details screen">
      <left-navigation-menu22 v-bind="leftNavigationMenu2Props" />
      <div class="flex-col-160">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-124">
          <h1 class="page-header-54 poppins-semi-bold-ebony-28px">
            <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
          </h1>
          <x-button19 :className="buttonProps.className" />
        </div>
        <div class="overlap-group1-11">
          <div class="overlap-group-35">
            <img class="line-614-1" :src="line614" alt="Line 614" /><img
              class="line-616"
              :src="line616"
              alt="Line 616"
            /><img class="line-703-2" :src="line703" alt="Line 703" /><img
              class="line-704-5"
              :src="line704"
              alt="Line 704"
            /><img class="line-702-1" :src="line702" alt="Line 702" /><button62 :className="button6Props.className" />
            <frame2495 :className="frame2495Props.className" :frame2494Props="frame2495Props.frame2494Props" />
            <frame2496 :className="frame2496Props.className" :frame2494Props="frame2496Props.frame2494Props" />
            <frame2497 :className="frame2497Props.className" :frame2494Props="frame2497Props.frame2494Props" />
            <div class="actions-17">
              <div class="search-40">
                <div class="input-91">
                  <img class="search-41" :src="search" alt="Search" /><input
                    class="input-text-141 poppins-normal-manatee-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder1"
                    :type="inputType1"
                  />
                </div>
                <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
              </div>
              <buttons7
                :iconButton1Props="buttonsProps.iconButton1Props"
                :iconButton2Props="buttonsProps.iconButton2Props"
              />
            </div>
            <div class="to-dos-detail">
              <div class="flex-col-161">
                <div class="flex-row-125">
                  <div class="flex-col-162">
                    <div class="title-89 poppins-semi-bold-ebony-20px">
                      <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                    </div>
                    <div class="frame-2478">
                      <div class="tab-menu-86">
                        <div class="flex-row-126">
                          <img class="to-dos-116" :src="toDoS" alt="To-do&#39;s" />
                          <div class="label-325 poppins-medium-caribbean-green-14px">
                            <span class="poppins-medium-caribbean-green-14px">{{ spanText3 }}</span>
                          </div>
                        </div>
                        <div class="rectangle-6502-37"></div>
                      </div>
                      <div class="tab-menu-87">
                        <img class="note" :src="note" alt="Note" />
                        <div class="label-326 poppins-medium-manatee-14px">
                          <span class="poppins-medium-manatee-14px">{{ spanText4 }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <icon-button32 :src="iconButton3Props.src" />
                </div>
                <img class="line-613" :src="line613" alt="Line 613" />
                <div class="frame-2532">
                  <div class="input-field-38">
                    <div class="label-324 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span>
                    </div>
                    <div class="input-90">
                      <input
                        class="input-text-140 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder2"
                        :type="inputType2"
                      />
                    </div>
                  </div>
                  <div class="input-field-38">
                    <div class="label-324 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText6 }}</span>
                    </div>
                    <div class="input-90">
                      <input
                        class="input-text-140 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder3"
                        :type="inputType3"
                      />
                    </div>
                  </div>
                  <dropdown4 :spanText1="dropdown41Props.spanText1" />
                </div>
              </div>
              <div class="flex-row-127">
                <div class="input-field-39">
                  <div class="label-327 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText7 }}</span>
                  </div>
                  <div class="input-92">
                    <input
                      class="input-text-142 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder4"
                      :type="inputType4"
                    />
                  </div>
                </div>
                <div class="dropdown-container-3">
                  <dropdown4 :spanText1="dropdown42Props.spanText1" />
                  <dropdown4 :spanText1="dropdown43Props.spanText1" />
                </div>
              </div>
              <div class="flex-col-163">
                <div class="label-328 poppins-semi-bold-comet-12px">
                  <span class="poppins-semi-bold-comet-12px">{{ spanText8 }}</span>
                </div>
                <div class="frame-2533">
                  <dropdown4 :spanText1="dropdown44Props.spanText1" />
                  <dropdown4 :spanText1="dropdown45Props.spanText1" />
                  <dropdown4 :spanText1="dropdown46Props.spanText1" />
                </div>
                <div class="frame-2491">
                  <frame2481 :spanText1="frame24811Props.spanText1" />
                  <frame2481 :spanText1="frame24812Props.spanText1" :className="frame24812Props.className" />
                </div>
                <bottom-section112 :button22Props="bottomSectionProps.button22Props" />
              </div>
            </div>
          </div>
          <frame2498 :className="frame24981Props.className" :iconButton2Props="frame24981Props.iconButton2Props" />
          <frame2498 :className="frame24982Props.className" :iconButton2Props="frame24982Props.iconButton2Props" />
          <frame2498 :className="frame24983Props.className" :iconButton2Props="frame24983Props.iconButton2Props" />
          <frame2498 :className="frame24984Props.className" :iconButton2Props="frame24984Props.iconButton2Props" />
          <frame2498 :className="frame24985Props.className" :iconButton2Props="frame24985Props.iconButton2Props" />
          <div class="rectangle-6530-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu22 from "./LeftNavigationMenu22";
import TopNavigation from "./TopNavigation";
import xButton19 from "./xButton19";
import Button62 from "./Button62";
import Frame2495 from "./Frame2495";
import Frame2496 from "./Frame2496";
import Frame2497 from "./Frame2497";
import IconButton from "./IconButton";
import Buttons7 from "./Buttons7";
import IconButton32 from "./IconButton32";
import Dropdown4 from "./Dropdown4";
import Frame2481 from "./Frame2481";
import BottomSection112 from "./BottomSection112";
import Frame2498 from "./Frame2498";
export default {
  name: "ToDoDetails",
  components: {
    LeftNavigationMenu22,
    TopNavigation,
    xButton19,
    Button62,
    Frame2495,
    Frame2496,
    Frame2497,
    IconButton,
    Buttons7,
    IconButton32,
    Dropdown4,
    Frame2481,
    BottomSection112,
    Frame2498,
  },
  props: [
    "spanText1",
    "line614",
    "line616",
    "line703",
    "line704",
    "line702",
    "search",
    "inputType1",
    "inputPlaceholder1",
    "spanText2",
    "toDoS",
    "spanText3",
    "note",
    "spanText4",
    "line613",
    "spanText5",
    "inputType2",
    "inputPlaceholder2",
    "spanText6",
    "inputType3",
    "inputPlaceholder3",
    "spanText7",
    "inputType4",
    "inputPlaceholder4",
    "spanText8",
    "leftNavigationMenu2Props",
    "topNavigationProps",
    "buttonProps",
    "button6Props",
    "frame2495Props",
    "frame2496Props",
    "frame2497Props",
    "iconButtonProps",
    "buttonsProps",
    "iconButton3Props",
    "dropdown41Props",
    "dropdown42Props",
    "dropdown43Props",
    "dropdown44Props",
    "dropdown45Props",
    "dropdown46Props",
    "frame24811Props",
    "frame24812Props",
    "bottomSectionProps",
    "frame24981Props",
    "frame24982Props",
    "frame24983Props",
    "frame24984Props",
    "frame24985Props",
  ],
};
</script>

<style>
.tou45do-u47-details {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-160 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 935px;
  position: relative;
  width: 1216px;
}

.flex-row-124 {
  align-items: flex-start;
  display: flex;
  gap: 939px;
  height: 40px;
  margin-top: 31px;
  min-width: 1152px;
  position: relative;
}

.page-header-54 {
  letter-spacing: 0;
  line-height: 40px;
  min-width: 111px;
  white-space: nowrap;
}

.overlap-group1-11 {
  height: 776px;
  margin-top: 24px;
  position: relative;
  width: 1152px;
}

.overlap-group-35 {
  height: 776px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1152px;
}

.line-614-1 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 461px;
  width: 1152px;
}

.line-616 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 573px;
  width: 1152px;
}

.line-703-2 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 629px;
  width: 1152px;
}

.line-704-5 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 685px;
  width: 1152px;
}

.line-702-1 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 517px;
  width: 1152px;
}

.actions-17 {
  align-items: flex-start;
  display: flex;
  gap: 582px;
  height: 40px;
  left: 0;
  min-width: 1152px;
  position: absolute;
  top: 17px;
}

.search-40 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 336px;
  position: relative;
}

.input-91 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 288px;
}

.search-41 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-141 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-141::placeholder {
  color: #8a8aa899;
}

.to-dos-detail {
  align-items: center;
  background-color: var(--white);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 776px;
  left: 444px;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 672px;
}

.flex-col-161 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 31px;
  min-height: 207px;
  width: 608px;
}

.flex-row-125 {
  align-items: flex-start;
  display: flex;
  gap: 248px;
  height: 109px;
  min-width: 608px;
  position: relative;
}

.flex-col-162 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 109px;
  width: 328px;
}

.title-89 {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.frame-2478 {
  align-items: flex-start;
  display: flex;
  min-width: 328px;
}

.tab-menu-86 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 164px;
}

.flex-row-126 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-top: 9px;
  min-width: 120px;
}

.to-dos-116 {
  height: 18px;
  width: 18px;
}

.label-325 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 96px;
  white-space: nowrap;
}

.rectangle-6502-37 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 164px;
}

.tab-menu-87 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 164px;
  padding: 9px 26px;
  transition: all 0.15s ease;
}

.tab-menu-87:hover {
  transform: translate(0, -5px);
}

.note {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-326 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.line-613 {
  height: 1px;
  width: 608px;
}

.frame-2532 {
  align-items: flex-start;
  display: flex;
  gap: 31px;
  height: 66px;
  margin-top: 31px;
  min-width: 608px;
  position: relative;
}

.input-field-38 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 182px;
}

.label-324 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 182px;
}

.input-90 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 182px;
}

.input-text-140 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 158px;
}

.input-text-140::placeholder,
.input-text-142::placeholder {
  color: #0d0d1d99;
}

.flex-row-127 {
  align-items: flex-start;
  display: flex;
  gap: 31px;
  height: 156px;
  margin-top: 24px;
  min-width: 608px;
}

.input-field-39 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 156px;
  width: 395px;
}

.label-327 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 395px;
}

.input-92 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 130px;
  overflow: hidden;
  padding: 9px 12px;
  width: 395px;
}

.input-text-142 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 371px;
}

.dropdown-container-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 156px;
  position: relative;
  width: 182px;
}

.flex-col-163 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 31px;
  min-height: 327px;
  position: relative;
  width: 672px;
}

.label-328 {
  letter-spacing: 1.44px;
  line-height: 24px;
  margin-left: 32px;
  white-space: nowrap;
}

.frame-2533 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 31px;
  height: 66px;
  margin-top: 25px;
  min-width: 608px;
  position: relative;
}

.frame-2491 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 32px;
  margin-top: 32px;
  min-height: 50px;
  position: relative;
  width: 248px;
}

.rectangle-6530-1 {
  background-color: var(--purple-heart);
  border-radius: 10px;
  height: 228px;
  left: 20px;
  position: absolute;
  top: 217px;
  width: 2px;
}
</style>
