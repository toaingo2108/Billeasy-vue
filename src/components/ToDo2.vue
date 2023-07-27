<template>
  <div class="container-center-horizontal">
    <form class="tou45do2 screen" name="form24" action="form24" method="post">
      <left-navigation-menu22 v-bind="leftNavigationMenu2Props" />
      <div class="flex-col-166">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-56 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText }}</span>
        </h1>
        <div class="actions-21">
          <div class="search-42">
            <div class="input-95">
              <img class="search-43" :src="search" alt="Search" /><input
                class="input-text-144 poppins-normal-manatee-14px"
                name="inputtext"
                :placeholder="inputPlaceholder"
                :type="inputType"
              />
            </div>
            <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
          </div>
          <div class="buttons-49">
            <a href="javascript:SubmitForm('form24')">
              <div class="icon-button-374"><img class="status-57" :src="status" alt="Status" /></div></a
            ><a href="javascript:SubmitForm('form24')">
              <div class="icon-button-374"><img class="to-dos-118" :src="toDoS" alt="To-do&#39;s" /></div></a
            ><button72 :className="button7Props.className" />
          </div>
        </div>
        <task-board v-bind="taskBoardProps" />
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu22 from "./LeftNavigationMenu22";
import TopNavigation from "./TopNavigation";
import IconButton from "./IconButton";
import Button72 from "./Button72";
import TaskBoard from "./TaskBoard";
export default {
  name: "ToDo2",
  components: {
    LeftNavigationMenu22,
    TopNavigation,
    IconButton,
    Button72,
    TaskBoard,
  },
  props: [
    "spanText",
    "search",
    "inputType",
    "inputPlaceholder",
    "status",
    "toDoS",
    "leftNavigationMenu2Props",
    "topNavigationProps",
    "iconButtonProps",
    "button7Props",
    "taskBoardProps",
  ],
};
</script>

<style>
.tou45do2 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-166 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 912px;
  position: relative;
  width: 1216px;
}

.page-header-56 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 40px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.actions-21 {
  align-items: flex-start;
  display: flex;
  gap: 582px;
  margin-top: 41px;
  min-width: 1152px;
}

.search-42 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 336px;
  position: relative;
}

.input-95 {
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

.search-43 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-144 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-144::placeholder {
  color: #8a8aa899;
}

.buttons-49 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  min-width: 234px;
  position: relative;
}

.icon-button-374 {
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

.icon-button-374:hover {
  transform: translate(0, -5px);
}

.status-57,
.to-dos-118 {
  height: 20px;
  width: 20px;
}
</style>
