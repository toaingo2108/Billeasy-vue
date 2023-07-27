<template>
  <div class="container-center-horizontal">
    <div class="tou45do-u47-new-category screen">
      <div class="overlap-group3-3">
        <left-navigation-menu22 v-bind="leftNavigationMenu2Props" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <actions7
          :className="actionsProps.className"
          :searchProps="actionsProps.searchProps"
          :buttonsProps="actionsProps.buttonsProps"
        />
        <h1 class="page-header-57 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <task-board v-bind="taskBoardProps" />
        <div class="overlay-14">
          <div class="new-to-do-category">
            <div class="flex-row-135">
              <div class="flex-col-167">
                <div class="title-91 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                </div>
                <div class="input-field-42">
                  <div class="label-333 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span
                    ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText4 }}</span>
                  </div>
                  <div class="input-96">
                    <input
                      class="input-text-172 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder1"
                      :type="inputType1"
                    />
                  </div>
                </div>
              </div>
              <div class="dropdown-129">
                <div class="label-333 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span
                  ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText6 }}</span>
                </div>
                <dropdown3 :spanText="leftNavigationMenu2Props2.spanText" />
              </div>
            </div>
            <div class="input-field-43">
              <div class="label-334 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText7 }}</span>
              </div>
              <div class="input-97">
                <input
                  class="input-text-173 poppins-normal-manatee-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder2"
                  :type="inputType2"
                />
              </div>
            </div>
            <bottom-section32 :className="taskBoardProps2.className" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu22 from "./LeftNavigationMenu22";
import TopNavigation from "./TopNavigation";
import Actions7 from "./Actions7";
import TaskBoard from "./TaskBoard";
import Dropdown3 from "./Dropdown3";
import BottomSection32 from "./BottomSection32";
export default {
  name: "ToDoNewCategory",
  components: {
    LeftNavigationMenu22,
    TopNavigation,
    Actions7,
    TaskBoard,
    Dropdown3,
    BottomSection32,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "inputType1",
    "inputPlaceholder1",
    "spanText5",
    "spanText6",
    "spanText7",
    "inputType2",
    "inputPlaceholder2",
    "leftNavigationMenu2Props",
    "topNavigationProps",
    "actionsProps",
    "taskBoardProps",
    "leftNavigationMenu2Props2",
    "taskBoardProps2",
  ],
};
</script>

<style>
.tou45do-u47-new-category {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group3-3 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.page-header-57 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-14 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 256px 352px;
  position: absolute;
  top: 0;
}

.new-to-do-category {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 432px;
  overflow: hidden;
  position: relative;
  width: 512px;
}

.flex-row-135 {
  align-items: flex-end;
  display: flex;
  gap: 28px;
  height: 135px;
  margin-top: 31px;
  min-width: 448px;
}

.flex-col-167 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 135px;
  width: 212px;
}

.title-91 {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.input-field-42 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 208px;
}

.label-333 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 208px;
}

.input-96 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 208px;
}

.input-text-172 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 184px;
}

.input-text-172::placeholder {
  color: #0d0d1d99;
}

.dropdown-129 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  position: relative;
  width: 208px;
}

.input-field-43 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 120px;
  width: 448px;
}

.label-334 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 448px;
}

.input-97 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 94px;
  overflow: hidden;
  padding: 9px 12px;
  width: 448px;
}

.input-text-173 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 424px;
}

.input-text-173::placeholder {
  color: #8a8aa899;
}
</style>
