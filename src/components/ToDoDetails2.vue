<template>
  <div class="container-center-horizontal">
    <div class="tou45do-u47-details2 screen">
      <left-navigation-menu22 v-bind="leftNavigationMenu2Props" />
      <div class="flex-col-164">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-128">
          <h1 class="page-header-55 poppins-semi-bold-ebony-28px">
            <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
          </h1>
          <x-button19 :className="buttonProps.className" />
        </div>
        <div class="overlap-group2-3">
          <div class="overlap-group1-12">
            <img class="line-614-2" :src="line614" alt="Line 614" /><img
              class="line-616-1"
              :src="line616"
              alt="Line 616"
            /><img class="line-703-3" :src="line703" alt="Line 703" /><img
              class="line-704-6"
              :src="line704"
              alt="Line 704"
            /><img class="line-702-2" :src="line702" alt="Line 702" /><button62 :className="button6Props.className" />
            <frame2495 :className="frame2495Props.className" :frame2494Props="frame2495Props.frame2494Props" />
            <frame2496 :className="frame2496Props.className" :frame2494Props="frame2496Props.frame2494Props" />
            <frame2497 :className="frame2497Props.className" :frame2494Props="frame2497Props.frame2494Props" />
            <actions7 :searchProps="actionsProps.searchProps" :buttonsProps="actionsProps.buttonsProps" />
            <div class="to-dos-detail-note">
              <div class="flex-row-129">
                <div class="flex-col-165">
                  <div class="title-90 poppins-semi-bold-ebony-20px">
                    <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                  </div>
                  <div class="frame-2478-1">
                    <div class="tab-menu-88">
                      <img class="to-dos-117" :src="toDoS" alt="To-do&#39;s" />
                      <div class="label-331 poppins-medium-manatee-14px">
                        <span class="poppins-medium-manatee-14px">{{ spanText3 }}</span>
                      </div>
                    </div>
                    <div class="tab-menu-89">
                      <div class="flex-row-130">
                        <img class="note-1" :src="note" alt="Note" />
                        <div class="label-332 poppins-medium-caribbean-green-14px">
                          <span class="poppins-medium-caribbean-green-14px">{{ spanText4 }}</span>
                        </div>
                      </div>
                      <div class="rectangle-6502-38"></div>
                    </div>
                  </div>
                </div>
                <icon-button32 :src="iconButton3Props.src" :className="iconButton3Props.className" />
              </div>
              <img class="line-613-1" :src="line613" alt="Line 613" />
              <div class="overlap-group-36">
                <table12 :tableRow32Props="tableProps.tableRow32Props" />
                <button52 :check="button5Props.check" :spanText="button5Props.spanText" />
                <div class="update-note">
                  <div class="input-field-40">
                    <div class="label-330 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span>
                    </div>
                    <div class="input-93">
                      <input
                        class="input-text-143 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder1"
                        :type="inputType1"
                      />
                    </div>
                  </div>
                  <div class="input-field-41">
                    <div class="label-330 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText6 }}</span>
                    </div>
                    <div class="input-94">
                      <input
                        class="input-text-143 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder2"
                        :type="inputType2"
                      />
                    </div>
                  </div>
                  <frame2491
                    :frame24811Props="frame2491Props.frame24811Props"
                    :frame24812Props="frame2491Props.frame24812Props"
                  />
                  <bottom-section22 :button22Props="bottomSection2Props.button22Props" />
                </div>
              </div>
              <bottom-section112
                :className="bottomSectionProps.className"
                :button22Props="bottomSectionProps.button22Props"
              />
            </div>
          </div>
          <frame2498 :className="frame24981Props.className" :iconButton2Props="frame24981Props.iconButton2Props" />
          <frame2498 :className="frame24982Props.className" :iconButton2Props="frame24982Props.iconButton2Props" />
          <frame2498 :className="frame24983Props.className" :iconButton2Props="frame24983Props.iconButton2Props" />
          <frame2498 :className="frame24984Props.className" :iconButton2Props="frame24984Props.iconButton2Props" />
          <frame2498 :className="frame24985Props.className" :iconButton2Props="frame24985Props.iconButton2Props" />
          <div class="rectangle-6530-2"></div>
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
import Actions7 from "./Actions7";
import IconButton32 from "./IconButton32";
import Table12 from "./Table12";
import Button52 from "./Button52";
import Frame2491 from "./Frame2491";
import BottomSection22 from "./BottomSection22";
import BottomSection112 from "./BottomSection112";
import Frame2498 from "./Frame2498";
export default {
  name: "ToDoDetails2",
  components: {
    LeftNavigationMenu22,
    TopNavigation,
    xButton19,
    Button62,
    Frame2495,
    Frame2496,
    Frame2497,
    Actions7,
    IconButton32,
    Table12,
    Button52,
    Frame2491,
    BottomSection22,
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
    "spanText2",
    "toDoS",
    "spanText3",
    "note",
    "spanText4",
    "line613",
    "spanText5",
    "inputType1",
    "inputPlaceholder1",
    "spanText6",
    "inputType2",
    "inputPlaceholder2",
    "leftNavigationMenu2Props",
    "topNavigationProps",
    "buttonProps",
    "button6Props",
    "frame2495Props",
    "frame2496Props",
    "frame2497Props",
    "actionsProps",
    "iconButton3Props",
    "tableProps",
    "button5Props",
    "frame2491Props",
    "bottomSection2Props",
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
.tou45do-u47-details2 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-164 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 935px;
  position: relative;
  width: 1216px;
}

.flex-row-128 {
  align-items: flex-start;
  display: flex;
  gap: 939px;
  height: 40px;
  margin-top: 31px;
  min-width: 1152px;
  position: relative;
}

.page-header-55 {
  letter-spacing: 0;
  line-height: 40px;
  min-width: 111px;
  white-space: nowrap;
}

.overlap-group2-3 {
  height: 776px;
  margin-top: 24px;
  position: relative;
  width: 1152px;
}

.overlap-group1-12 {
  height: 776px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1152px;
}

.line-614-2 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 461px;
  width: 1152px;
}

.line-616-1 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 573px;
  width: 1152px;
}

.line-703-3 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 629px;
  width: 1152px;
}

.line-704-6 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 685px;
  width: 1152px;
}

.line-702-2 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 517px;
  width: 1152px;
}

.to-dos-detail-note {
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

.flex-row-129 {
  align-items: flex-start;
  display: flex;
  gap: 248px;
  height: 109px;
  margin-top: 31px;
  min-width: 608px;
  position: relative;
}

.flex-col-165 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 109px;
  width: 328px;
}

.title-90 {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.frame-2478-1 {
  align-items: flex-start;
  display: flex;
  min-width: 328px;
}

.tab-menu-88 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 164px;
  padding: 9px 22px;
  transition: all 0.15s ease;
}

.tab-menu-88:hover {
  transform: translate(0, -5px);
}

.to-dos-117 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-331 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-89 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 164px;
}

.flex-row-130 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-top: 9px;
  min-width: 112px;
}

.note-1 {
  height: 18px;
  width: 18px;
}

.label-332 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 88px;
  white-space: nowrap;
}

.rectangle-6502-38 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 164px;
}

.line-613-1 {
  height: 1px;
  width: 608px;
}

.overlap-group-36 {
  height: 460px;
  margin-top: 31px;
  position: relative;
  width: 600px;
}

.update-note {
  align-items: center;
  background-color: var(--white);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 424px;
  left: 156px;
  overflow: hidden;
  position: absolute;
  top: 36px;
  width: 400px;
}

.input-field-40 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 336px;
}

.label-330 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 336px;
}

.input-93 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-143 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-143::placeholder {
  color: #0d0d1d99;
}

.input-field-41 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 104px;
  width: 336px;
}

.input-94 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 78px;
  overflow: hidden;
  padding: 9px 12px;
  width: 336px;
}

.rectangle-6530-2 {
  background-color: var(--purple-heart);
  border-radius: 10px;
  height: 228px;
  left: 20px;
  position: absolute;
  top: 217px;
  width: 2px;
}
</style>
