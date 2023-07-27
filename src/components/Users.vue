<template>
  <div class="container-center-horizontal">
    <div class="users-118 screen">
      <left-navigation-menu2 v-bind="leftNavigationMenu2Props" />
      <div class="flex-col-122">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-36 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText }}</span>
        </h1>
        <tab2 />
        <img class="line-701-22" :src="line701" alt="Line 701" />
        <div class="actions-12">
          <div class="search-1">
            <div class="input-49">
              <img class="search-2" :src="search" alt="Search" /><input
                class="input-text-74 poppins-normal-manatee-14px"
                name="inputtext"
                :placeholder="inputPlaceholder"
                :type="inputType"
              />
            </div>
            <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
          </div>
          <button8 />
        </div>
        <x-table
          :cell14Props="tableProps.cell14Props"
          :cell15Props="tableProps.cell15Props"
          :rowUsers1Props="tableProps.rowUsers1Props"
          :rowUsers2Props="tableProps.rowUsers2Props"
          :rowUsers3Props="tableProps.rowUsers3Props"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu2 from "./LeftNavigationMenu2";
import TopNavigation from "./TopNavigation";
import Tab2 from "./Tab2";
import IconButton from "./IconButton";
import Button8 from "./Button8";
import xTable from "./xTable";
export default {
  name: "Users",
  components: {
    LeftNavigationMenu2,
    TopNavigation,
    Tab2,
    IconButton,
    Button8,
    xTable,
  },
  props: [
    "spanText",
    "line701",
    "search",
    "inputType",
    "inputPlaceholder",
    "leftNavigationMenu2Props",
    "topNavigationProps",
    "iconButtonProps",
    "tableProps",
  ],
};
</script>

<style>
.users-118 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-122 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 967px;
  position: relative;
  width: 1216px;
}

.page-header-36 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 40px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.line-701-22 {
  height: 1px;
  width: 1152px;
}

.actions-12 {
  align-items: flex-start;
  display: flex;
  gap: 656px;
  margin-top: 39px;
  min-width: 1152px;
  position: relative;
}

.search-1 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 336px;
  position: relative;
}

.input-49 {
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

.search-2 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-74 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-74::placeholder {
  color: #8a8aa899;
}
</style>
