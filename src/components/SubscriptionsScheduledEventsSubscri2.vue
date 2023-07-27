<template>
  <div class="container-center-horizontal">
    <div class="subscriptions-u47-scheduled-events-u47-subscription-rows screen">
      <left-navigation-menu32 v-bind="leftNavigationMenu3Props" />
      <div class="flex-col-176">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-160">
          <h1 class="page-header-65 poppins-semi-bold-ebony-28px">
            <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
          </h1>
          <x-button19 />
        </div>
        <div class="tab-38">
          <div class="tab-menu-116">
            <img class="subscription-141" :src="subscription" alt="Subscription" />
            <div class="label-373 poppins-medium-manatee-14px">
              <span class="poppins-medium-manatee-14px">{{ spanText2 }}</span>
            </div>
          </div>
          <tab-menu622 />
        </div>
        <img class="line-70-5" :src="line701" alt="Line 701" />
        <div class="tab-39">
          <div class="tab-menu-117">
            <div class="label-373 poppins-medium-manatee-14px">
              <span class="poppins-medium-manatee-14px">{{ spanText3 }}</span>
            </div>
          </div>
          <div class="tab-menu-118">
            <div class="label-375 poppins-medium-caribbean-green-14px">
              <span class="poppins-medium-caribbean-green-14px">{{ spanText4 }}</span>
            </div>
            <div class="rectangle-6502-51"></div>
          </div>
        </div>
        <img class="line-70-5" :src="line702" alt="Line 702" />
        <div class="overlap-group1-14">
          <div class="overlap-group2-8">
            <div class="overlap-group-51">
              <div class="table-38">
                <div class="row-subscriptions-scheduled-events-rows">
                  <cell682 />
                  <cell722 />
                  <div class="cell-505">
                    <div class="blue-t-shirt-xs-337 poppins-semi-bold-ebony-13px">
                      <span class="poppins-semi-bold-ebony-13px">{{ spanText5 }}</span>
                    </div>
                    <img class="sort-99" :src="sort1" alt="Sort" />
                  </div>
                  <div class="cell-506">
                    <div class="blue-t-shirt-xs-338 poppins-semi-bold-ebony-13px">
                      <span class="poppins-semi-bold-ebony-13px">{{ spanText6 }}</span>
                    </div>
                    <img class="sort-99" :src="sort2" alt="Sort" />
                  </div>
                  <cell213 />
                  <cell222 />
                  <div class="cell-507">
                    <div class="blue-t-shirt-xs-339 poppins-semi-bold-ebony-13px">
                      <span class="poppins-semi-bold-ebony-13px">{{ spanText7 }}</span>
                    </div>
                    <img class="sort-99" :src="sort3" alt="Sort" />
                  </div>
                  <div class="cell-508">
                    <div class="blue-t-shirt-xs-340 poppins-semi-bold-ebony-13px">
                      <span class="poppins-semi-bold-ebony-13px">{{ spanText8 }}</span>
                    </div>
                    <img class="sort-99" :src="sort4" alt="Sort" />
                  </div>
                </div>
                <div class="table-row-37">
                  <row-subscriptions-scheduled-events-rows
                    :cell18Props="rowSubscriptionsScheduledEventsRows.cell18Props"
                    :cell18Props2="rowSubscriptionsScheduledEventsRows.cell18Props2"
                    :cell23Props="rowSubscriptionsScheduledEventsRows.cell23Props"
                    :cell25Props="rowSubscriptionsScheduledEventsRows.cell25Props"
                  />
                  <row-subscriptions-scheduled-events-rows
                    :cell18Props="rowSubscriptionsScheduledEventsRows2.cell18Props"
                    :cell18Props2="rowSubscriptionsScheduledEventsRows2.cell18Props2"
                    :cell23Props="rowSubscriptionsScheduledEventsRows2.cell23Props"
                    :cell25Props="rowSubscriptionsScheduledEventsRows2.cell25Props"
                  />
                  <row-subscriptions-scheduled-events-rows
                    :cell18Props="rowSubscriptionsScheduledEventsRows3.cell18Props"
                    :cell18Props2="rowSubscriptionsScheduledEventsRows3.cell18Props2"
                    :cell23Props="rowSubscriptionsScheduledEventsRows3.cell23Props"
                    :cell25Props="rowSubscriptionsScheduledEventsRows3.cell25Props"
                  />
                  <row-subscriptions-scheduled-events-rows
                    :cell18Props="rowSubscriptionsScheduledEventsRows4.cell18Props"
                    :cell18Props2="rowSubscriptionsScheduledEventsRows4.cell18Props2"
                    :cell23Props="rowSubscriptionsScheduledEventsRows4.cell23Props"
                    :cell25Props="rowSubscriptionsScheduledEventsRows4.cell25Props"
                  />
                  <row-subscriptions-scheduled-events-rows
                    :cell18Props="rowSubscriptionsScheduledEventsRows5.cell18Props"
                    :cell18Props2="rowSubscriptionsScheduledEventsRows5.cell18Props2"
                    :cell23Props="rowSubscriptionsScheduledEventsRows5.cell23Props"
                    :cell25Props="rowSubscriptionsScheduledEventsRows5.cell25Props"
                  />
                  <row-subscriptions-scheduled-events-rows
                    :cell18Props="rowSubscriptionsScheduledEventsRows6.cell18Props"
                    :cell18Props2="rowSubscriptionsScheduledEventsRows6.cell18Props2"
                    :cell23Props="rowSubscriptionsScheduledEventsRows6.cell23Props"
                    :cell25Props="rowSubscriptionsScheduledEventsRows6.cell25Props"
                  />
                  <row-subscriptions-scheduled-events-rows
                    :cell18Props="rowSubscriptionsScheduledEventsRows7.cell18Props"
                    :cell18Props2="rowSubscriptionsScheduledEventsRows7.cell18Props2"
                    :cell23Props="rowSubscriptionsScheduledEventsRows7.cell23Props"
                    :cell25Props="rowSubscriptionsScheduledEventsRows7.cell25Props"
                  />
                  <row-subscriptions-scheduled-events-rows
                    :cell18Props="rowSubscriptionsScheduledEventsRows8.cell18Props"
                    :cell18Props2="rowSubscriptionsScheduledEventsRows8.cell18Props2"
                    :cell23Props="rowSubscriptionsScheduledEventsRows8.cell23Props"
                    :cell25Props="rowSubscriptionsScheduledEventsRows8.cell25Props"
                  />
                  <row-subscriptions-scheduled-events-rows
                    :cell18Props="rowSubscriptionsScheduledEventsRows9.cell18Props"
                    :cell18Props2="rowSubscriptionsScheduledEventsRows9.cell18Props2"
                    :cell23Props="rowSubscriptionsScheduledEventsRows9.cell23Props"
                    :cell25Props="rowSubscriptionsScheduledEventsRows9.cell25Props"
                  />
                  <row-subscriptions-scheduled-events-rows
                    :cell18Props="rowSubscriptionsScheduledEventsRows10.cell18Props"
                    :cell18Props2="rowSubscriptionsScheduledEventsRows10.cell18Props2"
                    :cell23Props="rowSubscriptionsScheduledEventsRows10.cell23Props"
                    :cell25Props="rowSubscriptionsScheduledEventsRows10.cell25Props"
                  />
                  <row-subscriptions-scheduled-events-rows
                    :cell18Props="rowSubscriptionsScheduledEventsRows11.cell18Props"
                    :cell18Props2="rowSubscriptionsScheduledEventsRows11.cell18Props2"
                    :cell23Props="rowSubscriptionsScheduledEventsRows11.cell23Props"
                    :cell25Props="rowSubscriptionsScheduledEventsRows11.cell25Props"
                  />
                  <row-subscriptions-scheduled-events-rows
                    :cell18Props="rowSubscriptionsScheduledEventsRows12.cell18Props"
                    :cell18Props2="rowSubscriptionsScheduledEventsRows12.cell18Props2"
                    :cell23Props="rowSubscriptionsScheduledEventsRows12.cell23Props"
                    :cell25Props="rowSubscriptionsScheduledEventsRows12.cell25Props"
                  />
                  <row-subscriptions-scheduled-events-rows
                    :cell18Props="rowSubscriptionsScheduledEventsRows13.cell18Props"
                    :cell18Props2="rowSubscriptionsScheduledEventsRows13.cell18Props2"
                    :cell23Props="rowSubscriptionsScheduledEventsRows13.cell23Props"
                    :cell25Props="rowSubscriptionsScheduledEventsRows13.cell25Props"
                  />
                </div>
              </div>
              <bottom-section92
                :className="bottomSection9Props.className"
                :iconButtonProps="bottomSection9Props.iconButtonProps"
                :paginationProps="bottomSection9Props.paginationProps"
              />
            </div>
            <div class="scroll-bar-20"></div>
            <div class="schedule-new-event-1">
              <header52 :frame2443Props="header5Props.frame2443Props" />
              <dropdown6
                :spanText1="dropdown6Props.spanText1"
                :spanText3="dropdown6Props.spanText3"
                :className="dropdown6Props.className"
              />
              <div class="flex-row-159">
                <div class="dropdown-137">
                  <div class="label-374 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText9 }}</span
                    ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText10 }}</span>
                  </div>
                  <div class="dropdown-136">
                    <div class="text-332 poppins-medium-ebony-14px">
                      <span class="poppins-medium-ebony-14px">{{ spanText11 }}</span>
                    </div>
                    <img class="chevron-down-317" :src="chevronDown1" alt="Chevron Down" />
                  </div>
                </div>
                <div class="input-field-55">
                  <div class="label-374 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText12 }}</span
                    ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText13 }}</span>
                  </div>
                  <div class="input-112">
                    <input
                      class="input-text-186 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder1"
                      :type="inputType1"
                    />
                  </div>
                </div>
              </div>
              <div class="flex-row-159">
                <div class="dropdown-138">
                  <div class="label-374 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText14 }}</span
                    ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText15 }}</span>
                  </div>
                  <div class="dropdown-136">
                    <div class="text-332 poppins-medium-ebony-14px">
                      <span class="poppins-medium-ebony-14px">{{ spanText16 }}</span>
                    </div>
                    <img class="chevron-down-317" :src="chevronDown2" alt="Chevron Down" />
                  </div>
                </div>
                <div class="input-field-56">
                  <div class="label-374 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText17 }}</span
                    ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText18 }}</span>
                  </div>
                  <div class="input-112">
                    <input
                      class="input-text-186 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder2"
                      :type="inputType2"
                    />
                  </div>
                </div>
              </div>
              <option32
                :spanText="option3Props.spanText"
                :className="option3Props.className"
                :checkboxProps="option3Props.checkboxProps"
              />
              <bottom-section7 :button2Props="bottomSection7Props.button2Props" />
            </div>
          </div>
          <div class="search-50">
            <div class="input-113">
              <img class="search-51" :src="search" alt="Search" /><input
                class="input-text-187 poppins-normal-manatee-14px"
                name="inputtext"
                :placeholder="inputPlaceholder3"
                :type="inputType3"
              />
            </div>
            <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu32 from "./LeftNavigationMenu32";
import TopNavigation from "./TopNavigation";
import xButton19 from "./xButton19";
import TabMenu622 from "./TabMenu622";
import Cell682 from "./Cell682";
import Cell722 from "./Cell722";
import Cell213 from "./Cell213";
import Cell222 from "./Cell222";
import RowSubscriptionsScheduledEventsRows from "./RowSubscriptionsScheduledEventsRows";
import BottomSection92 from "./BottomSection92";
import Header52 from "./Header52";
import Dropdown6 from "./Dropdown6";
import Option32 from "./Option32";
import BottomSection7 from "./BottomSection7";
import IconButton from "./IconButton";
export default {
  name: "SubscriptionsScheduledEventsSubscri2",
  components: {
    LeftNavigationMenu32,
    TopNavigation,
    xButton19,
    TabMenu622,
    Cell682,
    Cell722,
    Cell213,
    Cell222,
    RowSubscriptionsScheduledEventsRows,
    BottomSection92,
    Header52,
    Dropdown6,
    Option32,
    BottomSection7,
    IconButton,
  },
  props: [
    "spanText1",
    "subscription",
    "spanText2",
    "line701",
    "spanText3",
    "spanText4",
    "line702",
    "spanText5",
    "sort1",
    "spanText6",
    "sort2",
    "spanText7",
    "sort3",
    "spanText8",
    "sort4",
    "spanText9",
    "spanText10",
    "spanText11",
    "chevronDown1",
    "spanText12",
    "spanText13",
    "inputType1",
    "inputPlaceholder1",
    "spanText14",
    "spanText15",
    "spanText16",
    "chevronDown2",
    "spanText17",
    "spanText18",
    "inputType2",
    "inputPlaceholder2",
    "search",
    "inputType3",
    "inputPlaceholder3",
    "leftNavigationMenu3Props",
    "topNavigationProps",
    "rowSubscriptionsScheduledEventsRows",
    "rowSubscriptionsScheduledEventsRows2",
    "rowSubscriptionsScheduledEventsRows3",
    "rowSubscriptionsScheduledEventsRows4",
    "rowSubscriptionsScheduledEventsRows5",
    "rowSubscriptionsScheduledEventsRows6",
    "rowSubscriptionsScheduledEventsRows7",
    "rowSubscriptionsScheduledEventsRows8",
    "rowSubscriptionsScheduledEventsRows9",
    "rowSubscriptionsScheduledEventsRows10",
    "rowSubscriptionsScheduledEventsRows11",
    "rowSubscriptionsScheduledEventsRows12",
    "rowSubscriptionsScheduledEventsRows13",
    "bottomSection9Props",
    "header5Props",
    "dropdown6Props",
    "option3Props",
    "bottomSection7Props",
    "iconButtonProps",
  ],
};
</script>

<style>
.subscriptions-u47-scheduled-events-u47-subscription-rows {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-176 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 967px;
  position: relative;
  width: 1216px;
}

.flex-row-160 {
  align-items: flex-start;
  display: flex;
  gap: 854px;
  height: 40px;
  margin-top: 31px;
  min-width: 1152px;
  position: relative;
}

.page-header-65 {
  letter-spacing: 0;
  line-height: 40px;
  min-width: 196px;
  white-space: nowrap;
}

.tab-38 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  margin-left: 32px;
  margin-top: 33px;
  min-width: 352px;
  position: relative;
}

.tab-menu-116 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 176px;
  padding: 9px 18.5px;
  transition: all 0.15s ease;
}

.tab-menu-116:hover,
.tab-menu-117:hover {
  transform: translate(0, -5px);
}

.subscription-141 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-373 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.line-70-5 {
  height: 1px;
  width: 1152px;
}

.tab-39 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  margin-left: 32px;
  margin-top: 39px;
  min-width: 312px;
}

.tab-menu-117 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 40px;
  min-width: 144px;
  padding: 9px 24px;
  transition: all 0.15s ease;
}

.tab-menu-118 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 168px;
}

.label-375 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 9px;
  min-width: 129px;
  white-space: nowrap;
}

.rectangle-6502-51 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 168px;
}

.overlap-group1-14 {
  height: 647px;
  margin-top: 31px;
  position: relative;
  width: 1216px;
}

.overlap-group2-8 {
  height: 647px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1216px;
}

.overlap-group-51 {
  height: 583px;
  left: 0;
  position: absolute;
  top: 64px;
  width: 1216px;
}

.table-38 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 488px;
  left: 32px;
  position: absolute;
  top: 0;
  width: 792px;
}

.row-subscriptions-scheduled-events-rows {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 792px;
}

.cell-505 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 10px;
  width: 66px;
}

.blue-t-shirt-xs-337 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 2px;
  min-height: 20px;
  min-width: 28px;
}

.sort-99 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-506 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 144px;
}

.blue-t-shirt-xs-338 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 37px;
}

.cell-507 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 3px;
  width: 96px;
}

.blue-t-shirt-xs-339 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 9px;
  min-height: 20px;
  min-width: 65px;
}

.cell-508 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 96px;
}

.blue-t-shirt-xs-340 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 55px;
}

.table-row-37 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 434px;
  overflow: hidden;
  position: relative;
  width: 792px;
}

.scroll-bar-20 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1204px;
  position: absolute;
  top: 62px;
  width: 12px;
}

.schedule-new-event-1 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 528px;
  left: 848px;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 336px;
}

.flex-row-159 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 66px;
  margin-top: 24px;
  min-width: 272px;
}

.dropdown-137,
.input-field-55,
.dropdown-138,
.input-field-56 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 124px;
}

.label-374 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 124px;
}

.dropdown-136 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 124px;
}

.text-332 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 68px;
}

.chevron-down-317 {
  height: 24px;
  width: 24px;
}

.input-112 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 124px;
}

.input-text-186 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 100px;
}

.input-text-186::placeholder {
  color: #0d0d1d99;
}

.search-50 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 40px;
  left: 32px;
  min-width: 792px;
  position: absolute;
  top: 0;
}

.input-113 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 744px;
}

.search-51 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-187 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 692px;
}

.input-text-187::placeholder {
  color: #8a8aa899;
}
</style>
