<template>
  <div class="container-center-horizontal">
    <form class="customers-u47-new-customer-u47-company-u45-invoice screen" name="form68" action="form68" method="post">
      <left-navigation-menu5 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-213">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-214">
          <header class="header-107">
            <a href="javascript:SubmitForm('form68')">
              <div class="button-269">
                <img class="chevron-left-32" :src="chevronLeft" alt="Chevron Left" />
                <div class="text-404 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                </div>
              </div></a
            >
            <div class="page-header-90 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
          </header>
          <div class="option-85">
            <option102 />
            <option222 :children="option2Props.children" />
          </div>
        </div>
        <div class="new-customer-information-3">
          <div class="flex-col-214">
            <div class="frame-2478-8">
              <tab-menu222
                :general="tabMenu21Props.general"
                :spanText="tabMenu21Props.spanText"
                :className="tabMenu21Props.className"
              />
              <tab-menu222
                :general="tabMenu22Props.general"
                :spanText="tabMenu22Props.spanText"
                :className="tabMenu22Props.className"
              />
              <tab-menu222
                :general="tabMenu23Props.general"
                :spanText="tabMenu23Props.spanText"
                :className="tabMenu23Props.className"
              />
              <tab-menu722 :className="tabMenu23Props2.className" />
            </div>
            <img class="line-678-6" :src="line678" alt="Line 678" />
          </div>
          <div class="flex-row-215">
            <div class="flex-col-215">
              <div class="input-173">
                <information :spanText1="information1Props.spanText1" :spanText2="information1Props.spanText2" />
                <information :spanText1="information2Props.spanText1" :spanText2="information2Props.spanText2" />
                <information :spanText1="information3Props.spanText1" :spanText2="information3Props.spanText2" />
                <information :spanText1="information4Props.spanText1" :spanText2="information4Props.spanText2" />
                <information :spanText1="information5Props.spanText1" :spanText2="information5Props.spanText2" />
                <div class="information-33">
                  <div class="label-486 poppins-normal-ebony-14px">
                    <span class="poppins-normal-ebony-14px">{{ spanText4 }}</span>
                  </div>
                  <div class="input-174">
                    <input
                      class="input-text-280 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder"
                      :type="inputType"
                    />
                  </div>
                </div>
              </div>
              <information :spanText1="information6Props.spanText1" :spanText2="information6Props.spanText2" />
            </div>
            <div class="button-container">
              <a href="javascript:SubmitForm('form68')">
                <div class="button-268">
                  <img class="add-80" :src="invoice" alt="Add" />
                  <div class="text-405 poppins-medium-caribbean-green-14px">
                    <span class="poppins-medium-caribbean-green-14px">{{ spanText3 }}</span>
                  </div>
                </div></a
              ><a href="javascript:SubmitForm('form68')">
                <div class="button-268">
                  <img class="add-81" :src="add1" alt="Add" />
                  <div class="text-405 poppins-medium-caribbean-green-14px">
                    <span class="poppins-medium-caribbean-green-14px">{{ spanText5 }}</span>
                  </div>
                </div></a
              ><a href="javascript:SubmitForm('form68')">
                <div class="button-268">
                  <img class="add-82" :src="add2" alt="Add" />
                  <div class="text-405 poppins-medium-caribbean-green-14px">
                    <span class="poppins-medium-caribbean-green-14px">{{ spanText6 }}</span>
                  </div>
                </div></a
              ><a href="javascript:SubmitForm('form68')">
                <div class="button-268">
                  <img class="add-83" :src="add3" alt="Add" />
                  <div class="text-405 poppins-medium-caribbean-green-14px">
                    <span class="poppins-medium-caribbean-green-14px">{{ spanText7 }}</span>
                  </div>
                </div></a
              >
            </div>
          </div>
          <div class="bottom-section-100">
            <img class="top-border-110" :src="add4" alt="Top Border" /><a href="javascript:SubmitForm('form68')">
              <div class="button-270">
                <img class="check-175" :src="topBorder" alt="Check" />
                <div class="text-404 poppins-medium-white-14px">
                  <span class="poppins-medium-white-14px">{{ spanText8 }}</span>
                </div>
              </div></a
            >
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu5 from "./LeftNavigationMenu5";
import TopNavigation from "./TopNavigation";
import Option102 from "./Option102";
import Option222 from "./Option222";
import TabMenu222 from "./TabMenu222";
import TabMenu722 from "./TabMenu722";
import Information from "./Information";
export default {
  name: "CustomersNewCustomerCompanyInvoice",
  components: {
    LeftNavigationMenu5,
    TopNavigation,
    Option102,
    Option222,
    TabMenu222,
    TabMenu722,
    Information,
  },
  props: [
    "chevronLeft",
    "spanText1",
    "spanText2",
    "line678",
    "spanText4",
    "inputType",
    "inputPlaceholder",
    "invoice",
    "spanText3",
    "add1",
    "spanText5",
    "add2",
    "spanText6",
    "add3",
    "spanText7",
    "add4",
    "topBorder",
    "spanText8",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "option2Props",
    "tabMenu21Props",
    "tabMenu22Props",
    "tabMenu23Props",
    "tabMenu23Props2",
    "information1Props",
    "information2Props",
    "information3Props",
    "information4Props",
    "information5Props",
    "information6Props",
  ],
};
</script>

<style>
.customers-u47-new-customer-u47-company-u45-invoice {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-213 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 916px;
  position: relative;
  width: 1216px;
}

.flex-row-214 {
  align-items: center;
  display: flex;
  gap: 48px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 579px;
}

.header-107 {
  align-items: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  gap: 24px;
  justify-content: flex-start;
  min-width: 262px;
  width: auto;
}

.button-269 {
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

.button-269:hover,
.button-270:hover {
  transform: translate(0, -5px);
}

.chevron-left-32,
.add-80,
.add-81,
.add-82,
.add-83,
.check-175 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-404 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-90 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  min-width: 151px;
  white-space: nowrap;
}

.option-85 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 24px;
  margin-top: 2px;
  min-width: 269px;
  position: relative;
}

.new-customer-information-3 {
  align-items: flex-start;
  align-self: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 740px;
  margin-top: 40px;
  overflow: hidden;
  width: 1152px;
}

.flex-col-214 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  min-height: 41px;
  width: 1088px;
}

.frame-2478-8 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  min-width: 512px;
  position: relative;
}

.line-678-6 {
  height: 1px;
  width: 1088px;
}

.flex-row-215 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 473px;
  margin-left: 32px;
  margin-top: 47px;
  min-width: 677px;
}

.flex-col-215 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 33px;
  min-height: 473px;
  position: relative;
  width: 576px;
}

.input-173 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 400px;
  position: relative;
  width: 576px;
}

.information-33 {
  align-items: center;
  display: flex;
  gap: 32px;
  min-width: 576px;
}

.label-486 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  width: 208px;
}

.input-174 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-280 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-280::placeholder {
  color: #0d0d1d99;
}

.button-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 51px;
  margin-top: 9px;
  min-height: 237px;
  width: 89px;
}

.button-268 {
  align-items: flex-start;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 21px;
  min-width: 89px;
  transition: all 0.15s ease;
}

.button-268:hover {
  transform: scale(1.1);
}

.text-405 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 63px;
  text-align: center;
}

.bottom-section-100 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 59px;
  width: 1152px;
}

.top-border-110 {
  height: 1px;
  width: 1152px;
}

.button-270 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-right: 32px;
  min-width: 104px;
  padding: 8.5px 20.5px;
  transition: all 0.15s ease;
}
</style>
