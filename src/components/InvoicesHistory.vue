<template>
  <div class="container-center-horizontal">
    <div class="invoices-u47-history screen">
      <div class="overlap-group2-9">
        <img class="line-701-46" :src="line701" alt="Line 701" /><table2
          :className="table2Props.className"
          :tableRowProps="table2Props.tableRowProps"
        />
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
        <div class="scroll-bar-28"></div>
        <div class="tab-44">
          <tab-menu3222 :address="tabMenu32Props.address" :spanText="tabMenu32Props.spanText" />
          <tab-menu522 :rules="tabMenu5Props.rules" :spanText="tabMenu5Props.spanText" />
        </div>
        <header10 :button32Props="topNavigationProps2.button32Props" />
        <div class="overlay-20">
          <div class="invoice-information">
            <div class="flex-col-194">
              <div class="title-100 poppins-semi-bold-ebony-20px">
                <span class="poppins-semi-bold-ebony-20px">{{ spanText1 }}</span>
              </div>
              <div class="frame-2481-5">
                <div class="ocr-number poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText2 }}</span>
                </div>
                <div class="phone poppins-normal-comet-13px">
                  <span class="poppins-normal-comet-13px">{{ spanText3 }}</span>
                </div>
              </div>
              <frame2482 :spanText1="frame24821Props.spanText1" :spanText2="frame24821Props.spanText2" />
              <frame2482 :spanText1="frame24822Props.spanText1" :spanText2="frame24822Props.spanText2" />
              <div class="frame-2484-2">
                <div class="service-s poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText4 }}</span>
                </div>
                <div class="reminder-swish-sending poppins-normal-comet-13px">
                  <span class="poppins-normal-comet-13px">{{ spanText5 }}</span>
                </div>
              </div>
              <div class="frame-2485-2">
                <div class="total-amount poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText6 }}</span>
                </div>
                <div class="text-81-1 poppins-normal-comet-13px">
                  <span class="poppins-normal-comet-13px">{{ spanText7 }}</span>
                </div>
              </div>
              <frame2486 :spanText1="frame24861Props.spanText1" />
              <frame2486 :spanText1="frame24862Props.spanText1" />
              <frame2486 :spanText1="frame24863Props.spanText1" />
              <div class="actions-57">
                <dropdown172 />
                <icon-button :src="iconButton1Props.src" :className="iconButton1Props.className" />
              </div>
            </div>
            <div class="frame-container-13">
              <div class="frame-25-13">
                <div class="invoice-sending poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText8 }}</span>
                </div>
                <div class="date-36 poppins-medium-manatee-11px">
                  <span class="poppins-medium-manatee-11px">{{ spanText9 }}</span>
                </div>
              </div>
              <div class="frame-2523">
                <div class="reminder-fee poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText10 }}</span>
                </div>
              </div>
            </div>
            <div class="overlap-group-container">
              <div class="overlap-group1-15">
                <div class="rectangle-6532"></div>
                <icon-button :src="iconButton2Props.src" :className="iconButton2Props.className" />
                <icon-button :src="iconButton3Props.src" :className="iconButton3Props.className" />
              </div>
              <div class="overlap-group-57">
                <div class="rectangle-6533"></div>
                <div class="rectangle-6531"></div>
                <icon-button :src="iconButton4Props.src" :className="iconButton4Props.className" />
                <icon-button :src="iconButton5Props.src" :className="iconButton5Props.className" />
                <icon-button :src="iconButton6Props.src" :className="iconButton6Props.className" />
              </div>
            </div>
            <div class="frame-container-14">
              <div class="frame-25-13">
                <div class="invoice-imported poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText11 }}</span>
                </div>
                <div class="date-36 poppins-medium-manatee-11px">
                  <span class="poppins-medium-manatee-11px">{{ spanText12 }}</span>
                </div>
              </div>
              <div class="frame-2522">
                <div class="email-reminder poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText13 }}</span>
                </div>
              </div>
              <div class="frame-2524">
                <div class="invoice-collection poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText14 }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table2 from "./Table2";
import LeftNavigationMenu82 from "./LeftNavigationMenu82";
import TopNavigation from "./TopNavigation";
import Search from "./Search";
import xButton19 from "./xButton19";
import BottomSection92 from "./BottomSection92";
import TabMenu3222 from "./TabMenu3222";
import TabMenu522 from "./TabMenu522";
import Header10 from "./Header10";
import Frame2482 from "./Frame2482";
import Frame2486 from "./Frame2486";
import Dropdown172 from "./Dropdown172";
import IconButton from "./IconButton";
export default {
  name: "InvoicesHistory",
  components: {
    Table2,
    LeftNavigationMenu82,
    TopNavigation,
    Search,
    xButton19,
    BottomSection92,
    TabMenu3222,
    TabMenu522,
    Header10,
    Frame2482,
    Frame2486,
    Dropdown172,
    IconButton,
  },
  props: [
    "line701",
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
    "spanText11",
    "spanText12",
    "spanText13",
    "spanText14",
    "table2Props",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "searchProps",
    "buttonProps",
    "bottomSectionProps",
    "tabMenu32Props",
    "tabMenu5Props",
    "topNavigationProps2",
    "frame24821Props",
    "frame24822Props",
    "frame24861Props",
    "frame24862Props",
    "frame24863Props",
    "iconButton1Props",
    "iconButton2Props",
    "iconButton3Props",
    "iconButton4Props",
    "iconButton5Props",
    "iconButton6Props",
  ],
};
</script>

<style>
.invoices-u47-history {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group2-9 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.line-701-46 {
  height: 1px;
  left: 256px;
  position: absolute;
  top: 208px;
  width: 1152px;
}

.scroll-bar-28 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 382px;
  width: 12px;
}

.tab-44 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  left: 256px;
  min-width: 256px;
  position: absolute;
  top: 168px;
}

.overlay-20 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-end;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 199px 184px;
  position: absolute;
  top: 0;
}

.invoice-information {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  height: 512px;
  overflow: hidden;
  padding: 31px 32px;
  width: 848px;
}

.flex-col-194 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 425px;
  position: relative;
  width: 333px;
}

.title-100 {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.frame-2481-5 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 21px;
  margin-top: 41px;
  min-width: 248px;
}

.ocr-number,
.service-s,
.total-amount {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  width: 160px;
}

.phone,
.reminder-swish-sending,
.text-81-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  min-height: 20px;
}

.frame-2484-2 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 21px;
  margin-top: 12px;
  min-width: 333px;
}

.frame-2485-2 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 21px;
  margin-top: 12px;
  min-width: 220px;
}

.actions-57 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-top: 64px;
  min-width: 208px;
  position: relative;
}

.frame-container-13 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 130px;
  margin-bottom: 22px;
  margin-left: 69px;
  min-height: 222px;
  width: 152px;
}

.frame-25-13 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  height: 56px;
  overflow: hidden;
  padding: 7px 16px;
  width: 152px;
}

.invoice-sending,
.invoice-imported,
.email-reminder,
.invoice-collection {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
}

.date-36 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 17px;
}

.frame-2523 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 12px;
  display: flex;
  height: 36px;
  overflow: hidden;
  padding: 7px 14px;
  width: 120px;
}

.reminder-fee {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 2px;
  min-height: 20px;
}

.overlap-group-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  margin-left: 8px;
  min-height: 392px;
  width: 56px;
}

.overlap-group1-15 {
  height: 146px;
  position: relative;
  width: 40px;
}

.rectangle-6532 {
  background-color: var(--green);
  height: 119px;
  left: 20px;
  position: absolute;
  top: 27px;
  width: 1px;
}

.overlap-group-57 {
  height: 246px;
  position: relative;
  width: 56px;
}

.rectangle-6533 {
  background-color: var(--mischka);
  height: 210px;
  left: 28px;
  position: absolute;
  top: 0;
  width: 1px;
}

.rectangle-6531 {
  background-color: var(--concrete);
  border-radius: 18px;
  height: 56px;
  left: 0;
  position: absolute;
  top: 22px;
  width: 56px;
}

.frame-container-14 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
  margin-left: 8px;
  min-height: 398px;
  width: 152px;
}

.frame-2522 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 12px;
  display: flex;
  height: 36px;
  margin-top: 130px;
  overflow: hidden;
  padding: 7px 16px;
  width: 136px;
}

.frame-2524 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 12px;
  display: flex;
  height: 36px;
  margin-top: 140px;
  overflow: hidden;
  padding: 7px 16px;
  width: 152px;
}
</style>
