<template>
  <div class="container-center-horizontal">
    <form class="invoices-u47-scheduled-events-u45-new screen" name="form35" action="form35" method="post">
      <div class="overlap-group-58">
        <img class="line-701-47" :src="line701" alt="Line 701" /><table4 v-bind="table4Props" />
        <left-navigation-menu82 v-bind="leftNavigationMenuProps" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <search :className="searchProps.className" :iconButtonProps="searchProps.iconButtonProps" />
        <x-button19 :className="buttonProps.className" />
        <bottom-section92
          :className="bottomSectionProps.className"
          :iconButtonProps="bottomSectionProps.iconButtonProps"
          :paginationProps="bottomSectionProps.paginationProps"
        />
        <div class="scroll-bar-29"></div>
        <h1 class="page-header-74 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="tab-45">
          <div class="tab-menu-153">
            <img class="invoice-145" :src="invoice" alt="Invoice" />
            <div class="label-429 poppins-medium-manatee-14px">
              <span class="poppins-medium-manatee-14px">{{ spanText2 }}</span>
            </div>
          </div>
          <tab-menu622 />
        </div>
        <div class="overlay-21">
          <div class="schedule-sendout">
            <div class="title-101 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText3 }}</span>
            </div>
            <dropdown322
              :spanText1="dropdown31Props.spanText1"
              :spanText3="dropdown31Props.spanText3"
              :className="dropdown31Props.className"
            />
            <div class="input-field-73">
              <div class="label-430 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText4 }}</span>
              </div>
              <div class="input-142">
                <input
                  class="input-text-220 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder"
                  :type="inputType"
                />
              </div>
            </div>
            <dropdown322
              :spanText1="dropdown32Props.spanText1"
              :spanText3="dropdown32Props.spanText3"
              :className="dropdown32Props.className"
            />
            <div class="bottom-section-89">
              <img class="top-border-98" :src="topBorder" alt="Top Border" />
              <div class="buttons-57">
                <a href="javascript:SubmitForm('form35')">
                  <div class="button-243">
                    <div class="text-368 poppins-medium-ebony-14px">
                      <span class="poppins-medium-ebony-14px">{{ spanText5 }}</span>
                    </div>
                  </div></a
                ><a href="javascript:SubmitForm('form35')">
                  <div class="button-244">
                    <img class="check-167" :src="check" alt="Check" />
                    <div class="text-369 poppins-medium-white-14px">
                      <span class="poppins-medium-white-14px">{{ spanText6 }}</span>
                    </div>
                  </div></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Table4 from "./Table4";
import LeftNavigationMenu82 from "./LeftNavigationMenu82";
import TopNavigation from "./TopNavigation";
import Search from "./Search";
import xButton19 from "./xButton19";
import BottomSection92 from "./BottomSection92";
import TabMenu622 from "./TabMenu622";
import Dropdown322 from "./Dropdown322";
export default {
  name: "InvoicesScheduledEventsNew",
  components: {
    Table4,
    LeftNavigationMenu82,
    TopNavigation,
    Search,
    xButton19,
    BottomSection92,
    TabMenu622,
    Dropdown322,
  },
  props: [
    "line701",
    "spanText1",
    "invoice",
    "spanText2",
    "spanText3",
    "spanText4",
    "inputType",
    "inputPlaceholder",
    "topBorder",
    "spanText5",
    "check",
    "spanText6",
    "table4Props",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "searchProps",
    "buttonProps",
    "bottomSectionProps",
    "dropdown31Props",
    "dropdown32Props",
  ],
};
</script>

<style>
.invoices-u47-scheduled-events-u45-new {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-58 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.line-701-47 {
  height: 1px;
  left: 256px;
  position: absolute;
  top: 208px;
  width: 1152px;
}

.scroll-bar-29 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 382px;
  width: 12px;
}

.page-header-74 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.tab-45 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  left: 256px;
  min-width: 328px;
  position: absolute;
  top: 168px;
}

.tab-menu-153 {
  align-items: flex-start;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 152px;
  padding: 9px 25.5px;
}

.invoice-145 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-429 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.overlay-21 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 224px 408px;
  position: absolute;
  top: 0;
}

.schedule-sendout {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 465px;
  overflow: hidden;
  position: relative;
  width: 400px;
}

.title-101 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.input-field-73 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 336px;
}

.label-430 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 336px;
}

.input-142 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-220 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-220::placeholder {
  color: #0d0d1d99;
}

.bottom-section-89 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 23px;
  width: 400px;
}

.top-border-98 {
  height: 1px;
  width: 400px;
}

.buttons-57 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 224px;
}

.button-243 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 40px;
  min-width: 104px;
  padding: 8.5px 26.5px;
  transition: all 0.15s ease;
}

.button-243:hover,
.button-244:hover {
  transform: translate(0, -5px);
}

.text-368 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 51px;
  text-align: center;
}

.button-244 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 112px;
  padding: 8.5px 24.5px;
  transition: all 0.15s ease;
}

.check-167 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-369 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}
</style>
