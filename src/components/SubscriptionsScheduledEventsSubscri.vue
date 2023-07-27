<template>
  <div class="container-center-horizontal">
    <div class="subscriptions-u47-scheduled-events-u47-subscriptions screen">
      <left-navigation-menu32 v-bind="leftNavigationMenu3Props" />
      <div class="flex-col-175">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-153">
          <h1 class="page-header-64 poppins-semi-bold-ebony-28px">
            <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
          </h1>
          <x-button19 />
        </div>
        <div class="tab-36">
          <div class="tab-menu-109">
            <img class="subscription-140" :src="subscription" alt="Subscription" />
            <div class="label-363 poppins-medium-manatee-14px">
              <span class="poppins-medium-manatee-14px">{{ spanText2 }}</span>
            </div>
          </div>
          <tab-menu622 />
        </div>
        <img class="line-70-4" :src="line701" alt="Line 701" />
        <div class="tab-37">
          <div class="tab-menu-110">
            <div class="label-365 poppins-medium-caribbean-green-14px">
              <span class="poppins-medium-caribbean-green-14px">{{ spanText3 }}</span>
            </div>
            <div class="rectangle-6502-46"></div>
          </div>
          <div class="tab-menu-111">
            <div class="label-363 poppins-medium-manatee-14px">
              <span class="poppins-medium-manatee-14px">{{ spanText4 }}</span>
            </div>
          </div>
        </div>
        <img class="line-70-4" :src="line702" alt="Line 702" />
        <div class="overlap-group1-13">
          <div class="overlap-group2-7">
            <div class="overlap-group-50">
              <div class="table-37">
                <div class="row-subscriptions-scheduled-events">
                  <cell692 />
                  <cell722 />
                  <div class="cell-472">
                    <div class="blue-t-shirt-xs-331 poppins-semi-bold-ebony-13px">
                      <span class="poppins-semi-bold-ebony-13px">{{ spanText5 }}</span>
                    </div>
                    <img class="sort-94" :src="sort1" alt="Sort" />
                  </div>
                  <cell213 />
                  <cell222 />
                  <cell152 :spanText="iconButtonProps.spanText" :className="iconButtonProps.className" />
                  <div class="cell-473">
                    <div class="blue-t-shirt-xs-332 poppins-semi-bold-ebony-13px">
                      <span class="poppins-semi-bold-ebony-13px">{{ spanText6 }}</span>
                    </div>
                    <img class="sort-94" :src="sort2" alt="Sort" />
                  </div>
                </div>
                <div class="table-row-36">
                  <row-subscriptions-scheduled-events
                    :cell18Props="rowSubscriptionsScheduledEvents1Pro.cell18Props"
                    :cell231Props="rowSubscriptionsScheduledEvents1Pro.cell231Props"
                    :cell232Props="rowSubscriptionsScheduledEvents1Pro.cell232Props"
                    :cell322Props="rowSubscriptionsScheduledEvents1Pro.cell322Props"
                  />
                  <row-subscriptions-scheduled-events
                    :cell18Props="rowSubscriptionsScheduledEvents2Pro.cell18Props"
                    :cell231Props="rowSubscriptionsScheduledEvents2Pro.cell231Props"
                    :cell232Props="rowSubscriptionsScheduledEvents2Pro.cell232Props"
                    :cell322Props="rowSubscriptionsScheduledEvents2Pro.cell322Props"
                  />
                  <row-subscriptions-scheduled-events
                    :cell18Props="rowSubscriptionsScheduledEvents3Pro.cell18Props"
                    :cell231Props="rowSubscriptionsScheduledEvents3Pro.cell231Props"
                    :cell232Props="rowSubscriptionsScheduledEvents3Pro.cell232Props"
                    :cell322Props="rowSubscriptionsScheduledEvents3Pro.cell322Props"
                  />
                  <row-subscriptions-scheduled-events
                    :cell18Props="rowSubscriptionsScheduledEvents4Pro.cell18Props"
                    :cell231Props="rowSubscriptionsScheduledEvents4Pro.cell231Props"
                    :cell232Props="rowSubscriptionsScheduledEvents4Pro.cell232Props"
                    :cell322Props="rowSubscriptionsScheduledEvents4Pro.cell322Props"
                  />
                  <row-subscriptions-scheduled-events
                    :cell18Props="rowSubscriptionsScheduledEvents5Pro.cell18Props"
                    :cell231Props="rowSubscriptionsScheduledEvents5Pro.cell231Props"
                    :cell232Props="rowSubscriptionsScheduledEvents5Pro.cell232Props"
                    :cell322Props="rowSubscriptionsScheduledEvents5Pro.cell322Props"
                  />
                  <row-subscriptions-scheduled-events
                    :cell18Props="rowSubscriptionsScheduledEvents6Pro.cell18Props"
                    :cell231Props="rowSubscriptionsScheduledEvents6Pro.cell231Props"
                    :cell232Props="rowSubscriptionsScheduledEvents6Pro.cell232Props"
                    :cell322Props="rowSubscriptionsScheduledEvents6Pro.cell322Props"
                  />
                  <row-subscriptions-scheduled-events
                    :cell18Props="rowSubscriptionsScheduledEvents7Pro.cell18Props"
                    :cell231Props="rowSubscriptionsScheduledEvents7Pro.cell231Props"
                    :cell232Props="rowSubscriptionsScheduledEvents7Pro.cell232Props"
                    :cell322Props="rowSubscriptionsScheduledEvents7Pro.cell322Props"
                  />
                  <row-subscriptions-scheduled-events
                    :cell18Props="rowSubscriptionsScheduledEvents8Pro.cell18Props"
                    :cell231Props="rowSubscriptionsScheduledEvents8Pro.cell231Props"
                    :cell232Props="rowSubscriptionsScheduledEvents8Pro.cell232Props"
                    :cell322Props="rowSubscriptionsScheduledEvents8Pro.cell322Props"
                  />
                  <row-subscriptions-scheduled-events
                    :cell18Props="rowSubscriptionsScheduledEvents9Pro.cell18Props"
                    :cell231Props="rowSubscriptionsScheduledEvents9Pro.cell231Props"
                    :cell232Props="rowSubscriptionsScheduledEvents9Pro.cell232Props"
                    :cell322Props="rowSubscriptionsScheduledEvents9Pro.cell322Props"
                  />
                  <row-subscriptions-scheduled-events
                    :cell18Props="rowSubscriptionsScheduledEvents10Pr.cell18Props"
                    :cell231Props="rowSubscriptionsScheduledEvents10Pr.cell231Props"
                    :cell232Props="rowSubscriptionsScheduledEvents10Pr.cell232Props"
                    :cell322Props="rowSubscriptionsScheduledEvents10Pr.cell322Props"
                  />
                  <row-subscriptions-scheduled-events
                    :cell18Props="rowSubscriptionsScheduledEvents11Pr.cell18Props"
                    :cell231Props="rowSubscriptionsScheduledEvents11Pr.cell231Props"
                    :cell232Props="rowSubscriptionsScheduledEvents11Pr.cell232Props"
                    :cell322Props="rowSubscriptionsScheduledEvents11Pr.cell322Props"
                  />
                  <row-subscriptions-scheduled-events
                    :cell18Props="rowSubscriptionsScheduledEvents12Pr.cell18Props"
                    :cell231Props="rowSubscriptionsScheduledEvents12Pr.cell231Props"
                    :cell232Props="rowSubscriptionsScheduledEvents12Pr.cell232Props"
                    :cell322Props="rowSubscriptionsScheduledEvents12Pr.cell322Props"
                  />
                  <row-subscriptions-scheduled-events
                    :cell18Props="rowSubscriptionsScheduledEvents13Pr.cell18Props"
                    :cell231Props="rowSubscriptionsScheduledEvents13Pr.cell231Props"
                    :cell232Props="rowSubscriptionsScheduledEvents13Pr.cell232Props"
                    :cell322Props="rowSubscriptionsScheduledEvents13Pr.cell322Props"
                  />
                </div>
              </div>
              <bottom-section92
                :className="bottomSection9Props.className"
                :iconButtonProps="bottomSection9Props.iconButtonProps"
                :paginationProps="bottomSection9Props.paginationProps"
              />
            </div>
            <div class="scroll-bar-19"></div>
            <div class="schedule-new-event">
              <header52 :frame2443Props="header5Props.frame2443Props" />
              <div class="flex-row-154">
                <div class="flex-row-item">
                  <div class="label-364 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText8 }}</span
                    ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText9 }}</span>
                  </div>
                  <div class="dropdown-131">
                    <div class="text-329 poppins-medium-ebony-10px">
                      <span class="poppins-medium-ebony-10px">{{ spanText7 }}</span>
                    </div>
                    <img class="chevron-down-314" :src="sort3" alt="Chevron Down" />
                  </div>
                </div>
                <div class="flex-row-item">
                  <div class="label-364 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText10 }}</span
                    ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText12 }}</span>
                  </div>
                  <div class="input-109">
                    <input
                      class="input-text-183 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder1"
                      :type="inputType1"
                    />
                  </div>
                </div>
              </div>
              <dropdown6 :spanText1="dropdown6Props.spanText1" :spanText3="dropdown6Props.spanText3" />
              <div class="input-field-54">
                <div class="label-366 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText11 }}</span
                  ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText14 }}</span>
                </div>
                <div class="input-110">
                  <input
                    class="input-text-184 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                  />
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
          <div class="search-48">
            <div class="input-111">
              <img class="search-49" :src="chevronDown" alt="Search" /><input
                class="input-text-185 poppins-normal-manatee-14px"
                name="inputtext"
                :placeholder="inputPlaceholder3"
                :type="inputType3"
              />
            </div>
            <icon-button :src="iconButtonProps2.src" :className="iconButtonProps2.className" />
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
import Cell692 from "./Cell692";
import Cell722 from "./Cell722";
import Cell213 from "./Cell213";
import Cell222 from "./Cell222";
import Cell152 from "./Cell152";
import RowSubscriptionsScheduledEvents from "./RowSubscriptionsScheduledEvents";
import BottomSection92 from "./BottomSection92";
import Header52 from "./Header52";
import Dropdown6 from "./Dropdown6";
import Option32 from "./Option32";
import BottomSection7 from "./BottomSection7";
import IconButton from "./IconButton";
export default {
  name: "SubscriptionsScheduledEventsSubscri",
  components: {
    LeftNavigationMenu32,
    TopNavigation,
    xButton19,
    TabMenu622,
    Cell692,
    Cell722,
    Cell213,
    Cell222,
    Cell152,
    RowSubscriptionsScheduledEvents,
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
    "spanText8",
    "spanText9",
    "spanText7",
    "sort3",
    "spanText10",
    "spanText12",
    "inputType1",
    "inputPlaceholder1",
    "spanText11",
    "spanText14",
    "inputType2",
    "inputPlaceholder2",
    "chevronDown",
    "inputType3",
    "inputPlaceholder3",
    "leftNavigationMenu3Props",
    "topNavigationProps",
    "iconButtonProps",
    "rowSubscriptionsScheduledEvents1Pro",
    "rowSubscriptionsScheduledEvents2Pro",
    "rowSubscriptionsScheduledEvents3Pro",
    "rowSubscriptionsScheduledEvents4Pro",
    "rowSubscriptionsScheduledEvents5Pro",
    "rowSubscriptionsScheduledEvents6Pro",
    "rowSubscriptionsScheduledEvents7Pro",
    "rowSubscriptionsScheduledEvents8Pro",
    "rowSubscriptionsScheduledEvents9Pro",
    "rowSubscriptionsScheduledEvents10Pr",
    "rowSubscriptionsScheduledEvents11Pr",
    "rowSubscriptionsScheduledEvents12Pr",
    "rowSubscriptionsScheduledEvents13Pr",
    "bottomSection9Props",
    "header5Props",
    "dropdown6Props",
    "option3Props",
    "bottomSection7Props",
    "iconButtonProps2",
  ],
};
</script>

<style>
.subscriptions-u47-scheduled-events-u47-subscriptions {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-175 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 967px;
  position: relative;
  width: 1216px;
}

.flex-row-153 {
  align-items: flex-start;
  display: flex;
  gap: 854px;
  height: 40px;
  margin-top: 31px;
  min-width: 1152px;
  position: relative;
}

.page-header-64 {
  letter-spacing: 0;
  line-height: 40px;
  min-width: 196px;
  white-space: nowrap;
}

.tab-36 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  margin-left: 32px;
  margin-top: 33px;
  min-width: 352px;
  position: relative;
}

.tab-menu-109 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 176px;
  padding: 9px 18.5px;
  transition: all 0.15s ease;
}

.tab-menu-109:hover,
.tab-menu-111:hover {
  transform: translate(0, -5px);
}

.subscription-140 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-363 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.line-70-4 {
  height: 1px;
  width: 1152px;
}

.tab-37 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  margin-left: 32px;
  margin-top: 39px;
  min-width: 312px;
}

.tab-menu-110 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 144px;
}

.label-365 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 9px;
  min-width: 96px;
  white-space: nowrap;
}

.rectangle-6502-46 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 144px;
}

.tab-menu-111 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 40px;
  min-width: 168px;
  padding: 9px 19.5px;
  transition: all 0.15s ease;
}

.overlap-group1-13 {
  height: 647px;
  margin-top: 31px;
  position: relative;
  width: 1216px;
}

.overlap-group2-7 {
  height: 647px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1216px;
}

.overlap-group-50 {
  height: 583px;
  left: 0;
  position: absolute;
  top: 64px;
  width: 1216px;
}

.table-37 {
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

.row-subscriptions-scheduled-events {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 792px;
}

.cell-472 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 170px;
}

.blue-t-shirt-xs-331 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 37px;
}

.sort-94 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-473 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 128px;
}

.blue-t-shirt-xs-332 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 55px;
}

.table-row-36 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 434px;
  overflow: hidden;
  position: relative;
  width: 792px;
}

.scroll-bar-19 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1204px;
  position: absolute;
  top: 62px;
  width: 12px;
}

.schedule-new-event {
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

.flex-row-154 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 66px;
  margin-top: 40px;
  min-width: 272px;
}

.flex-row-item {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 124px;
}

.label-364 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 124px;
}

.dropdown-131 {
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

.text-329 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 15px;
  width: 68px;
}

.chevron-down-314 {
  height: 24px;
  width: 24px;
}

.input-109 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 124px;
}

.input-text-183 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 100px;
}

.input-text-183::placeholder,
.input-text-184::placeholder {
  color: #0d0d1d99;
}

.input-field-54 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 272px;
}

.label-366 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 272px;
}

.input-110 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 272px;
}

.input-text-184 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 248px;
}

.search-48 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 40px;
  left: 32px;
  min-width: 792px;
  position: absolute;
  top: 0;
}

.input-111 {
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

.search-49 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-185 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 692px;
}

.input-text-185::placeholder {
  color: #8a8aa899;
}
</style>
