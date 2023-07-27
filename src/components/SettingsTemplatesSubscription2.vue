<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-templates-u47-subscription2 screen">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-44">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-30">
          <div class="flex-col-45">
            <h1 class="page-header-23 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <div class="frame-2645-25">
              <div class="label-141 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText2 }}</span>
              </div>
              <div class="label-140 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText3 }}</span>
              </div>
              <div class="label-140 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText4 }}</span>
              </div>
              <div class="label-140 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText5 }}</span>
              </div>
              <div class="label-140 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText6 }}</span>
              </div>
              <div class="label-140 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText7 }}</span>
              </div>
              <div class="label-140 poppins-semi-bold-caribbean-green-14px">
                <span class="poppins-semi-bold-caribbean-green-14px">{{ spanText8 }}</span>
              </div>
              <div class="label-140 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText9 }}</span>
              </div>
            </div>
          </div>
          <div class="frame-2548-20">
            <header2 :frame2443Props="header2Props.frame2443Props" />
            <div class="tab-9">
              <div class="tab-menu-43">
                <div class="label-142 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText10 }}</span>
                </div>
              </div>
              <tab-menu2 />
            </div>
            <img class="line-701-15" :src="line701" alt="Line 701" />
            <div class="flex-row-31">
              <p class="input-text-57 poppins-normal-comet-14px">
                <span class="poppins-normal-comet-14px">{{ spanText11 }}</span>
              </p>
              <div class="button-118">
                <img class="add-14" :src="add" alt="Add" />
                <div class="text-202 poppins-medium-white-14px">
                  <span class="poppins-medium-white-14px">{{ spanText12 }}</span>
                </div>
              </div>
            </div>
            <div class="table-13">
              <div class="row-settings-templates-subscription-3">
                <cell610 />
                <cell72 />
                <cell8 />
                <div class="cell-233">
                  <div class="blue-t-shirt-xs-142 poppins-semi-bold-ebony-13px">
                    <span class="poppins-semi-bold-ebony-13px">{{ spanText13 }}</span>
                  </div>
                  <img class="sort-31" :src="sort" alt="Sort" />
                </div>
              </div>
              <table-row
                :rowSettingsTemplatesSubscription1Pr="tableRowProps.rowSettingsTemplatesSubscription1Pr"
                :rowSettingsTemplatesSubscription2Pr="tableRowProps.rowSettingsTemplatesSubscription2Pr"
                :rowSettingsTemplatesSubscription3Pr="tableRowProps.rowSettingsTemplatesSubscription3Pr"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu from "./LeftNavigationMenu";
import TopNavigation from "./TopNavigation";
import Header2 from "./Header2";
import TabMenu2 from "./TabMenu2";
import Cell610 from "./Cell610";
import Cell72 from "./Cell72";
import Cell8 from "./Cell8";
import TableRow from "./TableRow";
export default {
  name: "SettingsTemplatesSubscription2",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Header2,
    TabMenu2,
    Cell610,
    Cell72,
    Cell8,
    TableRow,
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
    "spanText11",
    "add",
    "spanText12",
    "spanText13",
    "sort",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "header2Props",
    "tableRowProps",
  ],
};
</script>

<style>
.settings-u47-templates-u47-subscription2 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-44 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 928px;
  position: relative;
  width: 1216px;
}

.flex-row-30 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 833px;
  min-width: 1152px;
}

.flex-col-45 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  width: 184px;
}

.page-header-23 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2645-25 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 328px;
  width: 184px;
}

.label-141 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  width: 184px;
}

.label-140 {
  letter-spacing: 0;
  line-height: 20px;
  width: 184px;
}

.frame-2548-20 {
  align-items: center;
  align-self: flex-end;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 832px;
  overflow: hidden;
  padding: 24px 0;
  position: relative;
  width: 928px;
}

.tab-9 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  margin-left: 32px;
  margin-top: 40px;
  min-width: 388px;
  position: relative;
}

.tab-menu-43 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 40px;
  min-width: 194px;
  padding: 9px 13px;
  transition: all 0.15s ease;
}

.tab-menu-43:hover,
.button-118:hover {
  transform: translate(0, -5px);
}

.label-142 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.line-701-15 {
  height: 1px;
  width: 864px;
}

.flex-row-31 {
  align-items: flex-start;
  display: flex;
  gap: 232px;
  height: 48px;
  margin-top: 22px;
  min-width: 864px;
}

.input-text-57 {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 48px;
  width: 425px;
}

.button-118 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-top: 1px;
  min-width: 207px;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
}

.add-14 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-202 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 155px;
  text-align: center;
}

.table-13 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 500px;
  margin-top: 49px;
  position: relative;
  width: 864px;
}

.row-settings-templates-subscription-3 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 864px;
}

.cell-233 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  padding: 21px 12px;
  width: 176px;
}

.blue-t-shirt-xs-142 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 70px;
}

.sort-31 {
  align-self: center;
  height: 14px;
  width: 14px;
}
</style>
