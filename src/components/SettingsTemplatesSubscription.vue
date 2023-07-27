<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-templates-u47-subscription screen">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-38">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-26">
          <div class="flex-col-39">
            <h1 class="page-header-21 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <div class="frame-2645-23">
              <div class="label-129 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText2 }}</span>
              </div>
              <div class="label-128 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText3 }}</span>
              </div>
              <div class="label-128 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText4 }}</span>
              </div>
              <div class="label-128 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText5 }}</span>
              </div>
              <div class="label-128 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText6 }}</span>
              </div>
              <div class="label-128 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText7 }}</span>
              </div>
              <div class="label-128 poppins-semi-bold-caribbean-green-14px">
                <span class="poppins-semi-bold-caribbean-green-14px">{{ spanText8 }}</span>
              </div>
              <div class="label-128 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText9 }}</span>
              </div>
            </div>
          </div>
          <div class="frame-2548-18">
            <header2 :frame2443Props="header2Props.frame2443Props" />
            <tab />
            <img class="line-701-14" :src="line701" alt="Line 701" />
            <div class="flex-row-27">
              <p class="input-text-55 poppins-normal-comet-14px">
                <span class="poppins-normal-comet-14px">{{ spanText10 }}</span>
              </p>
              <div class="button-117">
                <img class="add-13" :src="add" alt="Add" />
                <div class="text-201 poppins-medium-white-14px">
                  <span class="poppins-medium-white-14px">{{ spanText11 }}</span>
                </div>
              </div>
            </div>
            <div class="table-12">
              <div class="row-settings-templates-subscription">
                <cell610 />
                <cell72 />
                <cell8 />
                <div class="cell-214">
                  <div class="blue-t-shirt-xs-123 poppins-semi-bold-ebony-13px">
                    <span class="poppins-semi-bold-ebony-13px">{{ spanText12 }}</span>
                  </div>
                  <img class="sort-24" :src="sort" alt="Sort" />
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
import Tab from "./Tab";
import Cell610 from "./Cell610";
import Cell72 from "./Cell72";
import Cell8 from "./Cell8";
import TableRow from "./TableRow";
export default {
  name: "SettingsTemplatesSubscription",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Header2,
    Tab,
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
    "line701",
    "spanText10",
    "add",
    "spanText11",
    "spanText12",
    "sort",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "header2Props",
    "tableRowProps",
  ],
};
</script>

<style>
.settings-u47-templates-u47-subscription {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-38 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 928px;
  position: relative;
  width: 1216px;
}

.flex-row-26 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 833px;
  min-width: 1152px;
}

.flex-col-39 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  width: 184px;
}

.page-header-21 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2645-23 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 328px;
  width: 184px;
}

.label-129 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  width: 184px;
}

.label-128 {
  letter-spacing: 0;
  line-height: 20px;
  width: 184px;
}

.frame-2548-18 {
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

.line-701-14 {
  height: 1px;
  width: 864px;
}

.flex-row-27 {
  align-items: flex-start;
  display: flex;
  gap: 195px;
  height: 48px;
  margin-top: 22px;
  min-width: 864px;
}

.input-text-55 {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 48px;
  width: 425px;
}

.button-117 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-top: 1px;
  min-width: 244px;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
}

.button-117:hover {
  transform: translate(0, -5px);
}

.add-13 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-201 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 192px;
  text-align: center;
}

.table-12 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 500px;
  margin-top: 49px;
  position: relative;
  width: 864px;
}

.row-settings-templates-subscription {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 864px;
}

.cell-214 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  padding: 21px 12px;
  width: 176px;
}

.blue-t-shirt-xs-123 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 106px;
}

.sort-24 {
  align-self: center;
  height: 14px;
  width: 14px;
}
</style>
