<template>
  <div class="container-center-horizontal">
    <form class="customers-u47-details-u47-tou45dou39s-u47-details screen" name="form99" action="form99" method="post">
      <left-navigation-menu5 v-bind="leftNavigationMenu5Props" />
      <div class="flex-col-259">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-297">
          <div class="flex-col-260">
            <div class="header-144">
              <a href="javascript:SubmitForm('form99')">
                <div class="button-296">
                  <img class="chevron-left-37" :src="chevronLeft" alt="Chevron Left" />
                  <div class="text-432 poppins-medium-ebony-14px">
                    <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                  </div>
                </div></a
              >
              <div class="page-header-106 poppins-semi-bold-ebony-20px">
                <span class="poppins-semi-bold-manatee-20px">{{ spanText2 }}</span
                ><span class="poppins-semi-bold-ebony-20px">{{ spanText3 }}</span>
              </div>
            </div>
            <information2
              :header5Props="information2Props.header5Props"
              :iconButton32Props="information2Props.iconButton32Props"
            />
            <statistics :frame2443Props="statisticsProps.frame2443Props" />
            <statistics2
              :frame2443Props="statistics2Props.frame2443Props"
              :frame2480Props="statistics2Props.frame2480Props"
              :iconButton32Props="statistics2Props.iconButton32Props"
            />
            <statistics3
              :frame2443Props="statistics3Props.frame2443Props"
              :iconButton32Props="statistics3Props.iconButton32Props"
            />
          </div>
          <div class="information-container-2">
            <div class="information-49">
              <div class="frame-2478-18">
                <tab-menu24
                  :invoice="tabMenu24Props.invoice"
                  :spanText="tabMenu24Props.spanText"
                  :className="tabMenu24Props.className"
                />
                <tab-menu26 :className="tabMenu26Props.className" />
                <tab-menu27 />
                <tab-menu25 :className="tabMenu25Props.className" />
              </div>
              <img class="line-613-17" :src="line613" alt="Line 613" />
              <div class="frame-2492-1">
                <div class="input-194">
                  <img class="search-65" :src="search" alt="Search" /><input
                    class="input-text-298 poppins-normal-manatee-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder"
                    :type="inputType"
                  />
                </div>
                <button72 :className="button72Props.className" />
              </div>
              <div class="flex-row-298">
                <frame2498 :iconButton2Props="frame24981Props.iconButton2Props" />
                <button62 />
              </div>
              <frame24952 :frame2494Props="frame24952Props.frame2494Props" :chipProps="frame24952Props.chipProps" />
              <frame24962 :frame2494Props="frame24962Props.frame2494Props" :chip2Props="frame24962Props.chip2Props" />
              <frame24972 :frame2494Props="frame24972Props.frame2494Props" :chip3Props="frame24972Props.chip3Props" />
              <img class="line-61-2" :src="line614" alt="Line 614" /><frame2498
                :className="frame24982Props.className"
                :iconButton2Props="frame24982Props.iconButton2Props"
              />
              <img class="line-61-2" :src="line615" alt="Line 615" /><frame2498
                :className="frame24983Props.className"
                :iconButton2Props="frame24983Props.iconButton2Props"
              />
              <img class="line-61-2" :src="line616" alt="Line 616" />
            </div>
            <div class="information-50">
              <div class="frame-2503-2">
                <div class="ellipse-17-20"></div>
                <div class="call-jimmy-regarding-project-7 poppins-semi-bold-ebony-16px">
                  <span class="poppins-semi-bold-ebony-16px">{{ spanText4 }}</span>
                </div>
              </div>
              <div class="frame-2482-17">
                <div class="person poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText5 }}</span>
                </div>
                <div class="elen-doe poppins-normal-comet-13px">
                  <span class="poppins-normal-comet-13px">{{ spanText6 }}</span>
                </div>
              </div>
              <div class="frame-2483-12">
                <div class="customer-121 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText7 }}</span>
                </div>
                <div class="name-235 poppins-normal-comet-13px">
                  <span class="poppins-normal-comet-13px">{{ spanText8 }}</span>
                </div>
              </div>
              <div class="frame-2484-13">
                <div class="invoice-169 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText9 }}</span>
                </div>
                <div class="number-100 poppins-normal-comet-13px">
                  <span class="poppins-normal-comet-13px">{{ spanText10 }}</span>
                </div>
              </div>
              <div class="frame-2485-12">
                <div class="subscription-142 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText11 }}</span>
                </div>
                <div class="premium poppins-normal-comet-13px">
                  <span class="poppins-normal-comet-13px">{{ spanText12 }}</span>
                </div>
              </div>
              <frame24862 :spanText1="frame248621Props.spanText1" />
              <frame24862 :spanText1="frame248622Props.spanText1" :className="frame248622Props.className" />
              <div class="frame-2488-1">
                <div class="status-59 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText13 }}</span>
                </div>
                <div class="started poppins-semi-bold-royal-blue-13px">
                  <span class="poppins-semi-bold-royal-blue-13px">{{ spanText14 }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu5 from "./LeftNavigationMenu5";
import TopNavigation from "./TopNavigation";
import Information2 from "./Information2";
import Statistics from "./Statistics";
import Statistics2 from "./Statistics2";
import Statistics3 from "./Statistics3";
import TabMenu24 from "./TabMenu24";
import TabMenu26 from "./TabMenu26";
import TabMenu27 from "./TabMenu27";
import TabMenu25 from "./TabMenu25";
import Button72 from "./Button72";
import Frame2498 from "./Frame2498";
import Button62 from "./Button62";
import Frame24952 from "./Frame24952";
import Frame24962 from "./Frame24962";
import Frame24972 from "./Frame24972";
import Frame24862 from "./Frame24862";
export default {
  name: "CustomersDetailsToDosDetails",
  components: {
    LeftNavigationMenu5,
    TopNavigation,
    Information2,
    Statistics,
    Statistics2,
    Statistics3,
    TabMenu24,
    TabMenu26,
    TabMenu27,
    TabMenu25,
    Button72,
    Frame2498,
    Button62,
    Frame24952,
    Frame24962,
    Frame24972,
    Frame24862,
  },
  props: [
    "chevronLeft",
    "spanText1",
    "spanText2",
    "spanText3",
    "line613",
    "search",
    "inputType",
    "inputPlaceholder",
    "line614",
    "line615",
    "line616",
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
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "information2Props",
    "statisticsProps",
    "statistics2Props",
    "statistics3Props",
    "tabMenu24Props",
    "tabMenu26Props",
    "tabMenu25Props",
    "button72Props",
    "frame24981Props",
    "frame24952Props",
    "frame24962Props",
    "frame24972Props",
    "frame24982Props",
    "frame24983Props",
    "frame248621Props",
    "frame248622Props",
  ],
};
</script>

<style>
.customers-u47-details-u47-tou45dou39s-u47-details {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 1540px;
  position: relative;
  width: 1440px;
}

.flex-col-259 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 1496px;
  position: relative;
  width: 1216px;
}

.flex-row-297 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 1400px;
  min-width: 1152px;
}

.flex-col-260 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1400px;
  position: relative;
  width: 480px;
}

.header-144 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  min-width: 279px;
}

.button-296 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
  width: 87px;
}

.button-296:hover {
  transform: translate(0, -5px);
}

.chevron-left-37,
.search-65 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-432 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-106 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  white-space: nowrap;
}

.information-container-2 {
  height: 744px;
  margin-top: 80px;
  position: relative;
  width: 648px;
}

.information-49 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 740px;
  padding: 24px 0;
  position: absolute;
  top: 0;
  width: 648px;
}

.frame-2478-18 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  height: 40px;
  margin-left: 24px;
  min-width: 480px;
  position: relative;
}

.line-613-17 {
  height: 1px;
  width: 600px;
}

.frame-2492-1 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-top: 23px;
  min-width: 600px;
  position: relative;
}

.input-194 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 462px;
}

.input-text-298 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 410px;
}

.input-text-298::placeholder {
  color: #8a8aa899;
}

.flex-row-298 {
  align-items: center;
  display: flex;
  gap: 340px;
  height: 24px;
  margin-top: 48px;
  min-width: 600px;
  position: relative;
}

.line-61-2 {
  height: 1px;
  margin-top: 16px;
  width: 600px;
}

.information-50 {
  align-items: center;
  background-color: var(--white);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 318px;
  left: 240px;
  overflow: hidden;
  padding: 24px 0;
  position: absolute;
  top: 426px;
  width: 384px;
}

.frame-2503-2 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 24px;
  min-width: 320px;
}

.ellipse-17-20 {
  align-self: center;
  background-color: var(--purple-heart);
  border-radius: 4px;
  height: 8px;
  width: 8px;
}

.call-jimmy-regarding-project-7 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  width: 304px;
}

.frame-2482-17 {
  align-items: flex-start;
  display: flex;
  gap: 216px;
  height: 21px;
  margin-top: 24px;
  min-width: 320px;
}

.person {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 48px;
}

.elen-doe,
.name-235,
.number-100,
.premium,
.started {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  min-height: 20px;
}

.frame-2483-12 {
  align-items: flex-start;
  display: flex;
  gap: 169px;
  height: 21px;
  margin-top: 12px;
  min-width: 320px;
}

.customer-121 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 71px;
}

.frame-2484-13 {
  align-items: flex-start;
  display: flex;
  gap: 218px;
  height: 21px;
  margin-top: 12px;
  min-width: 320px;
}

.invoice-169 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 51px;
}

.frame-2485-12 {
  align-items: flex-start;
  display: flex;
  gap: 172px;
  height: 21px;
  margin-top: 12px;
  min-width: 320px;
}

.subscription-142 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 89px;
}

.frame-2488-1 {
  align-items: flex-start;
  display: flex;
  gap: 226px;
  height: 21px;
  margin-top: 12px;
  min-width: 320px;
}

.status-59 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 45px;
}
</style>
