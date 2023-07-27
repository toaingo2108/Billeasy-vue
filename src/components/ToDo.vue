<template>
  <div class="container-center-horizontal">
    <form class="tou45do screen" name="form22" action="form22" method="post">
      <left-navigation-menu22 v-bind="leftNavigationMenu2Props" />
      <div class="flex-col-157">
        <div class="flex-col-158">
          <top-navigation
            :className="topNavigationProps.className"
            :languageProps="topNavigationProps.languageProps"
            :userProfileProps="topNavigationProps.userProfileProps"
          />
          <div class="flex-row-121">
            <h1 class="page-header-53 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <x-button19 />
          </div>
          <div class="actions-16">
            <div class="search-38">
              <div class="input-89">
                <img class="search-39" :src="search" alt="Search" /><input
                  class="input-text-118 poppins-normal-manatee-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder"
                  :type="inputType"
                />
              </div>
              <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
            </div>
            <div class="buttons-42">
              <a href="javascript:SubmitForm('form22')">
                <div class="icon-button-336"><img class="status-56" :src="status" alt="Status" /></div></a
              ><a href="javascript:SubmitForm('form22')">
                <div class="icon-button-336"><img class="to-dos-115" :src="toDoS" alt="To-do&#39;s" /></div></a
              ><a href="javascript:SubmitForm('form22')">
                <div class="button-179">
                  <img class="add-27" :src="add" alt="Add" />
                  <div class="text-276 poppins-medium-white-14px">
                    <span class="poppins-medium-white-14px">{{ spanText2 }}</span>
                  </div>
                </div></a
              >
            </div>
          </div>
          <div class="flex-row-122">
            <frame2498 :iconButton2Props="frame24981Props.iconButton2Props" />
            <button62 />
          </div>
        </div>
        <div class="flex-row-123">
          <div class="rectangle-6530"></div>
          <div class="frame-container-12">
            <frame2495 :frame2494Props="frame2495Props.frame2494Props" />
            <frame2496 :frame2494Props="frame2496Props.frame2494Props" />
            <frame2497 :frame2494Props="frame2497Props.frame2494Props" />
          </div>
        </div>
        <div class="flex-col-159">
          <img class="line-614" :src="line614" alt="Line 614" /><frame2498
            :className="frame24982Props.className"
            :iconButton2Props="frame24982Props.iconButton2Props"
          />
          <img class="line-214" :src="line702" alt="Line 702" /><frame2498
            :className="frame24983Props.className"
            :iconButton2Props="frame24983Props.iconButton2Props"
          />
          <img class="line-214" :src="line616" alt="Line 616" /><frame2498
            :className="frame24984Props.className"
            :iconButton2Props="frame24984Props.iconButton2Props"
          />
          <img class="line-214" :src="line703" alt="Line 703" /><frame2498
            :className="frame24985Props.className"
            :iconButton2Props="frame24985Props.iconButton2Props"
          />
          <img class="line-214" :src="line704" alt="Line 704" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu22 from "./LeftNavigationMenu22";
import TopNavigation from "./TopNavigation";
import xButton19 from "./xButton19";
import IconButton from "./IconButton";
import Frame2498 from "./Frame2498";
import Button62 from "./Button62";
import Frame2495 from "./Frame2495";
import Frame2496 from "./Frame2496";
import Frame2497 from "./Frame2497";
export default {
  name: "ToDo",
  components: {
    LeftNavigationMenu22,
    TopNavigation,
    xButton19,
    IconButton,
    Frame2498,
    Button62,
    Frame2495,
    Frame2496,
    Frame2497,
  },
  props: [
    "spanText1",
    "search",
    "inputType",
    "inputPlaceholder",
    "status",
    "toDoS",
    "add",
    "spanText2",
    "line614",
    "line702",
    "line616",
    "line703",
    "line704",
    "leftNavigationMenu2Props",
    "topNavigationProps",
    "iconButtonProps",
    "frame24981Props",
    "frame2495Props",
    "frame2496Props",
    "frame2497Props",
    "frame24982Props",
    "frame24983Props",
    "frame24984Props",
    "frame24985Props",
  ],
};
</script>

<style>
.tou45do {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-157 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 845px;
  width: 1216px;
}

.flex-col-158 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 352px;
  position: relative;
  width: 1216px;
}

.flex-row-121 {
  align-items: flex-start;
  display: flex;
  gap: 939px;
  height: 40px;
  margin-top: 31px;
  min-width: 1152px;
  position: relative;
}

.page-header-53 {
  letter-spacing: 0;
  line-height: 40px;
  min-width: 111px;
  white-space: nowrap;
}

.actions-16 {
  align-items: flex-start;
  display: flex;
  gap: 582px;
  margin-top: 41px;
  min-width: 1152px;
}

.search-38 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 336px;
  position: relative;
}

.input-89 {
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

.search-39,
.add-27 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-118 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-118::placeholder {
  color: #8a8aa899;
}

.buttons-42 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  min-width: 234px;
}

.icon-button-336 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 40px;
  min-width: 40px;
  padding: 0 10px;
  transition: all 0.15s ease;
}

.icon-button-336:hover,
.button-179:hover {
  transform: translate(0, -5px);
}

.status-56,
.to-dos-115 {
  height: 20px;
  width: 20px;
}

.button-179 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  box-shadow: 0px 10px 40px -10px #20c39d;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
  width: 130px;
}

.text-276 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 78px;
  text-align: center;
}

.flex-row-122 {
  align-items: center;
  display: flex;
  gap: 892px;
  height: 24px;
  margin-top: 112px;
  min-width: 1152px;
  position: relative;
}

.flex-row-123 {
  align-items: flex-start;
  display: flex;
  gap: 26px;
  margin-left: 20px;
  margin-top: 24px;
  min-width: 1132px;
}

.rectangle-6530 {
  background-color: var(--purple-heart);
  border-radius: 10px;
  height: 228px;
  width: 2px;
}

.frame-container-12 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 228px;
  position: relative;
  width: 1104px;
}

.flex-col-159 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  min-height: 225px;
  position: relative;
  width: 1152px;
}

.line-614 {
  height: 1px;
  width: 1152px;
}

.line-214 {
  height: 1px;
  margin-top: 16px;
  width: 1152px;
}
</style>
