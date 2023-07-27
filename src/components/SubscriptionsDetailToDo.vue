<template>
  <div class="container-center-horizontal">
    <div class="subscriptions-u47-detail-u47-tou45do screen">
      <left-navigation-menu32 v-bind="leftNavigationMenu3Props" />
      <div class="flex-col-170">
        <div class="flex-col-171">
          <top-navigation
            :className="topNavigationProps.className"
            :languageProps="topNavigationProps.languageProps"
            :userProfileProps="topNavigationProps.userProfileProps"
          />
          <header4 :button32Props="header4Props.button32Props" />
          <div class="tab-31">
            <tab-menu422 />
            <div class="tab-menu-96">
              <img class="note-4" :src="note" alt="Note" />
              <div class="label-345 poppins-medium-manatee-14px">
                <span class="poppins-medium-manatee-14px">{{ spanText1 }}</span>
              </div>
            </div>
            <div class="tab-menu-97">
              <div class="flex-row-142">
                <img class="to-dos-121" :src="toDoS" alt="To-do&#39;s" />
                <div class="label-346 poppins-medium-caribbean-green-14px">
                  <span class="poppins-medium-caribbean-green-14px">{{ spanText2 }}</span>
                </div>
              </div>
              <div class="rectangle-6502-41"></div>
            </div>
          </div>
          <img class="line-215" :src="line701" alt="Line 701" />
          <div class="flex-row-143">
            <div class="input-103">
              <img class="search-45" :src="search" alt="Search" /><input
                class="input-text-178 poppins-normal-manatee-14px"
                name="inputtext"
                :placeholder="inputPlaceholder"
                :type="inputType"
              />
            </div>
            <div class="button-226">
              <img class="add-63" :src="add" alt="Add" />
              <div class="text-324 poppins-medium-white-14px">
                <span class="poppins-medium-white-14px">{{ spanText3 }}</span>
              </div>
            </div>
          </div>
          <div class="flex-row-144">
            <frame2498 :iconButton2Props="frame24981Props.iconButton2Props" />
            <button62 />
          </div>
        </div>
        <div class="flex-row-145">
          <div class="rectangle-6530-3"></div>
          <div class="task-container">
            <frame2495 :frame2494Props="frame2495Props.frame2494Props" />
            <frame2496 :frame2494Props="frame2496Props.frame2494Props" />
            <frame2497 :frame2494Props="frame2497Props.frame2494Props" />
          </div>
        </div>
        <div class="flex-col-172">
          <img class="line-215" :src="line614" alt="Line 614" /><frame2498
            :className="frame24982Props.className"
            :iconButton2Props="frame24982Props.iconButton2Props"
          />
          <img class="line-216" :src="line702" alt="Line 702" /><frame2498
            :className="frame24983Props.className"
            :iconButton2Props="frame24983Props.iconButton2Props"
          />
          <img class="line-216" :src="line616" alt="Line 616" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu32 from "./LeftNavigationMenu32";
import TopNavigation from "./TopNavigation";
import Header4 from "./Header4";
import TabMenu422 from "./TabMenu422";
import Frame2498 from "./Frame2498";
import Button62 from "./Button62";
import Frame2495 from "./Frame2495";
import Frame2496 from "./Frame2496";
import Frame2497 from "./Frame2497";
export default {
  name: "SubscriptionsDetailToDo",
  components: {
    LeftNavigationMenu32,
    TopNavigation,
    Header4,
    TabMenu422,
    Frame2498,
    Button62,
    Frame2495,
    Frame2496,
    Frame2497,
  },
  props: [
    "note",
    "spanText1",
    "toDoS",
    "spanText2",
    "line701",
    "search",
    "inputType",
    "inputPlaceholder",
    "add",
    "spanText3",
    "line614",
    "line702",
    "line616",
    "leftNavigationMenu3Props",
    "topNavigationProps",
    "header4Props",
    "frame24981Props",
    "frame2495Props",
    "frame2496Props",
    "frame2497Props",
    "frame24982Props",
    "frame24983Props",
  ],
};
</script>

<style>
.subscriptions-u47-detail-u47-tou45do {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-170 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 733px;
  width: 1216px;
}

.flex-col-171 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 352px;
  position: relative;
  width: 1216px;
}

.tab-31 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 429px;
  position: relative;
}

.tab-menu-96 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 134px;
  padding: 9px 34.8px;
  transition: all 0.15s ease;
}

.tab-menu-96:hover,
.button-226:hover {
  transform: translate(0, -5px);
}

.note-4 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-345 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-97 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 134px;
}

.flex-row-142 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-top: 9px;
  min-width: 79px;
}

.to-dos-121 {
  height: 18px;
  width: 18px;
}

.label-346 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 55px;
  white-space: nowrap;
}

.rectangle-6502-41 {
  background-color: var(--caribbean-green);
  height: 2px;
  margin-left: 0.5px;
  width: 135px;
}

.line-215 {
  height: 1px;
  width: 1152px;
}

.flex-row-143 {
  align-items: flex-start;
  display: flex;
  gap: 736px;
  margin-top: 39px;
  min-width: 1152px;
}

.input-103 {
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

.search-45,
.add-63 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-178 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-178::placeholder {
  color: #8a8aa899;
}

.button-226 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 128px;
  padding: 8.5px 11px;
  transition: all 0.15s ease;
}

.text-324 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 78px;
  text-align: center;
}

.flex-row-144 {
  align-items: center;
  display: flex;
  gap: 892px;
  height: 24px;
  margin-top: 40px;
  min-width: 1152px;
  position: relative;
}

.flex-row-145 {
  align-items: flex-start;
  display: flex;
  gap: 26px;
  margin-left: 20px;
  margin-top: 24px;
  min-width: 1132px;
}

.rectangle-6530-3 {
  background-color: var(--purple-heart);
  border-radius: 10px;
  height: 228px;
  width: 2px;
}

.task-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 228px;
  position: relative;
  width: 1104px;
}

.flex-col-172 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  min-height: 113px;
  position: relative;
  width: 1152px;
}

.line-216 {
  height: 1px;
  margin-top: 16px;
  width: 1152px;
}
</style>
