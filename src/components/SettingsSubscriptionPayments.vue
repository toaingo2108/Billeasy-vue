<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-subscription-u47-payments screen">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-35">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-23">
          <div class="flex-col-36">
            <h1 class="page-header-20 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <frame264532 :className="rowSettingsSubscriptionPayments2Pro.className" />
          </div>
          <div class="frame-2548-17">
            <div class="flex-row-24">
              <div class="flex-col-37">
                <header18
                  :spanText="headerProps.spanText"
                  :className="headerProps.className"
                  :frame2443Props="headerProps.frame2443Props"
                />
                <div class="tab-6">
                  <tab-menu9 />
                  <div class="tab-menu-38">
                    <div class="label-126 poppins-medium-caribbean-green-14px">
                      <span class="poppins-medium-caribbean-green-14px">{{ spanText10 }}</span>
                    </div>
                    <div class="rectangle-6502-16"></div>
                  </div>
                  <tab-menu35 />
                </div>
                <img class="line-701-13" :src="line701" alt="Line 701" />
                <div class="flex-row-25">
                  <div class="label-127 poppins-medium-manatee-14px">
                    <span class="poppins-medium-manatee-14px">{{ spanText2 }}</span
                    ><span class="poppins-semi-bold-ebony-14px">{{ spanText13 }}</span>
                  </div>
                  <div class="text-200 poppins-medium-caribbean-green-14px">
                    <span class="poppins-medium-caribbean-green-14px">{{ spanText12 }}</span>
                  </div>
                </div>
                <div class="frame-2663">
                  <div class="frame-2661-7">
                    <div class="frame-container-3">
                      <frame2659 />
                      <div class="frame-2660-3">
                        <div class="paid poppins-normal-comet-14px">
                          <span class="poppins-normal-comet-14px">{{ spanText9 }}</span>
                        </div>
                      </div>
                      <frame2661 :children="headerProps2.children" :className="headerProps2.className" />
                      <div class="frame-2662">
                        <div class="paid poppins-normal-comet-14px">
                          <span class="poppins-normal-comet-14px">{{ spanText11 }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="input-35">
                    <img class="search" :src="search" alt="Search" /><input
                      class="input-text-54 poppins-normal-manatee-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder"
                      :type="inputType"
                    />
                  </div>
                </div>
                <div class="table-11">
                  <div class="row-settings-subscription-payments">
                    <div class="cell-160">
                      <div class="blue-t-shirt-xs-70 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText3 }}</span>
                      </div>
                      <img class="sort-23" :src="sort1" alt="Sort" />
                    </div>
                    <div class="cell-161">
                      <div class="blue-t-shirt-xs-71 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText4 }}</span>
                      </div>
                      <img class="sort-23" :src="sort2" alt="Sort" />
                    </div>
                    <div class="cell-159">
                      <div class="blue-t-shirt-xs-72 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText5 }}</span>
                      </div>
                      <img class="sort-23" :src="sort3" alt="Sort" />
                    </div>
                    <div class="cell-159">
                      <div class="blue-t-shirt-xs-73 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText6 }}</span>
                      </div>
                      <img class="sort-23" :src="sort4" alt="Sort" />
                    </div>
                    <div class="cell-162">
                      <div class="blue-t-shirt-xs-74 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText7 }}</span>
                      </div>
                      <img class="sort-23" :src="sort5" alt="Sort" />
                    </div>
                    <div class="cell-163">
                      <div class="blue-t-shirt-xs-75 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText8 }}</span>
                      </div>
                      <img class="sort-23" :src="sort6" alt="Sort" />
                    </div>
                  </div>
                  <div class="table-row-14">
                    <row-settings-subscription-payments
                      :cellProps="rowSettingsSubscriptionPayments1Pro.cellProps"
                      :cell3221Props="rowSettingsSubscriptionPayments1Pro.cell3221Props"
                      :cell3222Props="rowSettingsSubscriptionPayments1Pro.cell3222Props"
                      :cell4Props="rowSettingsSubscriptionPayments1Pro.cell4Props"
                    />
                    <row-settings-subscription-payments
                      :cellProps="rowSettingsSubscriptionPayments2Pro2.cellProps"
                      :cell3221Props="rowSettingsSubscriptionPayments2Pro2.cell3221Props"
                      :cell3222Props="rowSettingsSubscriptionPayments2Pro2.cell3222Props"
                      :cell4Props="rowSettingsSubscriptionPayments2Pro2.cell4Props"
                    />
                    <row-settings-subscription-payments
                      :cellProps="rowSettingsSubscriptionPayments3Pro.cellProps"
                      :cell3221Props="rowSettingsSubscriptionPayments3Pro.cell3221Props"
                      :cell3222Props="rowSettingsSubscriptionPayments3Pro.cell3222Props"
                      :cell4Props="rowSettingsSubscriptionPayments3Pro.cell4Props"
                    />
                    <row-settings-subscription-payments
                      :cellProps="rowSettingsSubscriptionPayments4Pro.cellProps"
                      :cell3221Props="rowSettingsSubscriptionPayments4Pro.cell3221Props"
                      :cell3222Props="rowSettingsSubscriptionPayments4Pro.cell3222Props"
                      :cell4Props="rowSettingsSubscriptionPayments4Pro.cell4Props"
                    />
                    <row-settings-subscription-payments
                      :cellProps="rowSettingsSubscriptionPayments5Pro.cellProps"
                      :cell3221Props="rowSettingsSubscriptionPayments5Pro.cell3221Props"
                      :cell3222Props="rowSettingsSubscriptionPayments5Pro.cell3222Props"
                      :cell4Props="rowSettingsSubscriptionPayments5Pro.cell4Props"
                    />
                    <row-settings-subscription-payments
                      :cellProps="rowSettingsSubscriptionPayments6Pro.cellProps"
                      :cell3221Props="rowSettingsSubscriptionPayments6Pro.cell3221Props"
                      :cell3222Props="rowSettingsSubscriptionPayments6Pro.cell3222Props"
                      :cell4Props="rowSettingsSubscriptionPayments6Pro.cell4Props"
                    />
                    <row-settings-subscription-payments
                      :cellProps="rowSettingsSubscriptionPayments7Pro.cellProps"
                      :cell3221Props="rowSettingsSubscriptionPayments7Pro.cell3221Props"
                      :cell3222Props="rowSettingsSubscriptionPayments7Pro.cell3222Props"
                      :cell4Props="rowSettingsSubscriptionPayments7Pro.cell4Props"
                    />
                  </div>
                </div>
              </div>
              <div class="scroll-bar-12"></div>
            </div>
            <div class="bottom-section-25">
              <img class="top-border-28" :src="topBorder" alt="Top Border" /><pagination
                :className="paginationProps.className"
                :iconButton21Props="paginationProps.iconButton21Props"
                :iconButton22Props="paginationProps.iconButton22Props"
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
import Frame264532 from "./Frame264532";
import Header18 from "./Header18";
import TabMenu9 from "./TabMenu9";
import TabMenu35 from "./TabMenu35";
import Frame2659 from "./Frame2659";
import Frame2661 from "./Frame2661";
import RowSettingsSubscriptionPayments from "./RowSettingsSubscriptionPayments";
import Pagination from "./Pagination";
export default {
  name: "SettingsSubscriptionPayments",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame264532,
    Header18,
    TabMenu9,
    TabMenu35,
    Frame2659,
    Frame2661,
    RowSettingsSubscriptionPayments,
    Pagination,
  },
  props: [
    "spanText1",
    "spanText10",
    "line701",
    "spanText2",
    "spanText13",
    "spanText12",
    "spanText9",
    "spanText11",
    "search",
    "inputType",
    "inputPlaceholder",
    "spanText3",
    "sort1",
    "spanText4",
    "sort2",
    "spanText5",
    "sort3",
    "spanText6",
    "sort4",
    "spanText7",
    "sort5",
    "spanText8",
    "sort6",
    "topBorder",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "rowSettingsSubscriptionPayments2Pro",
    "headerProps",
    "headerProps2",
    "rowSettingsSubscriptionPayments1Pro",
    "rowSettingsSubscriptionPayments2Pro2",
    "rowSettingsSubscriptionPayments3Pro",
    "rowSettingsSubscriptionPayments4Pro",
    "rowSettingsSubscriptionPayments5Pro",
    "rowSettingsSubscriptionPayments6Pro",
    "rowSettingsSubscriptionPayments7Pro",
    "paginationProps",
  ],
};
</script>

<style>
.settings-u47-subscription-u47-payments {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-35 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 928px;
  position: relative;
  width: 1216px;
}

.flex-row-23 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 833px;
  min-width: 1152px;
}

.flex-col-36 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  position: relative;
  width: 184px;
}

.page-header-20 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2548-17 {
  align-items: flex-end;
  align-self: flex-end;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 832px;
  overflow: hidden;
  width: 928px;
}

.flex-row-24 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 728px;
  margin-top: 24px;
  min-width: 896px;
}

.flex-col-37 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 728px;
  position: relative;
  width: 864px;
}

.tab-6 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  margin-top: 40px;
  min-width: 388px;
  position: relative;
}

.tab-menu-38 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 129px;
}

.label-126 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 9px;
  min-width: 71px;
  white-space: nowrap;
}

.rectangle-6502-16 {
  background-color: var(--caribbean-green);
  height: 2px;
  margin-right: 0.33px;
  width: 129px;
}

.line-701-13 {
  height: 1px;
  width: 864px;
}

.flex-row-25 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 21px;
  margin-top: 30px;
  min-width: 374px;
}

.label-127 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 240px;
  white-space: nowrap;
}

.text-200 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 110px;
  text-align: center;
}

.frame-2663 {
  align-items: flex-start;
  display: flex;
  gap: 256px;
  margin-top: 40px;
  min-width: 864px;
}

.frame-2661-7 {
  align-items: flex-start;
  border-radius: 10px;
  display: flex;
  overflow: hidden;
  width: 320px;
}

.frame-container-3 {
  height: 40px;
  position: relative;
  width: 320px;
}

.frame-2660-3 {
  align-items: flex-start;
  background-color: var(--white);
  cursor: pointer;
  display: flex;
  height: 40px;
  left: 49px;
  min-width: 83px;
  padding: 8.5px 16px;
  position: absolute;
  top: 0;
  transition: all 0.15s ease;
}

.frame-2660-3:hover,
.frame-2662:hover {
  transform: translate(0, -5px);
  box-shadow: 0px 12px 5px -8px rgba(0, 0, 0, 0.2);
}

.paid {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
}

.frame-2662 {
  align-items: flex-start;
  background-color: var(--white);
  cursor: pointer;
  display: flex;
  height: 40px;
  left: 257px;
  min-width: 63px;
  padding: 8.5px 16px;
  position: absolute;
  top: 0;
  transition: all 0.15s ease;
}

.input-35 {
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

.search {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-54 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-54::placeholder {
  color: #8a8aa899;
}

.table-11 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 448px;
  margin-top: 40px;
  width: 864px;
}

.row-settings-subscription-payments {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  width: 864px;
}

.cell-160 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 104px;
}

.blue-t-shirt-xs-70 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 63px;
}

.sort-23 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-161 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 168px;
}

.blue-t-shirt-xs-71 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 114px;
}

.cell-159 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 128px;
}

.blue-t-shirt-xs-72 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 83px;
}

.blue-t-shirt-xs-73 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 61px;
}

.cell-162 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 144px;
}

.blue-t-shirt-xs-74 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 95px;
}

.cell-163 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 34.5px;
  width: 128px;
}

.blue-t-shirt-xs-75 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 43px;
}

.table-row-14 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 372px;
  position: relative;
  width: 864px;
}

.scroll-bar-12 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-top: 76px;
  width: 12px;
}

.bottom-section-25 {
  align-items: flex-end;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 19px;
  height: 80px;
  overflow: hidden;
  position: relative;
  width: 928px;
}

.top-border-28 {
  height: 1px;
  margin-right: -288px;
  width: 1216px;
}
</style>
