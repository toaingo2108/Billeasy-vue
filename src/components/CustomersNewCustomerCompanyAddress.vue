<template>
  <div class="container-center-horizontal">
    <form class="customers-u47-new-customer-u47-company-u45-address screen" name="form56" action="form56" method="post">
      <left-navigation-menu5 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-209">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-208">
          <header class="header-103">
            <a href="javascript:SubmitForm('form56')">
              <div class="button-260">
                <img class="chevron-left-28" :src="chevronLeft" alt="Chevron Left" />
                <div class="text-400 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                </div>
              </div></a
            >
            <div class="page-header-86 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
          </header>
          <div class="option-67">
            <option102 />
            <option222 :children="option2Props.children" />
          </div>
        </div>
        <div class="new-customer-information-1">
          <frame2478
            :tabMenu21Props="frame2478Props.tabMenu21Props"
            :tabMenu3Props="frame2478Props.tabMenu3Props"
            :tabMenu22Props="frame2478Props.tabMenu22Props"
            :tabMenu22Props2="frame2478Props.tabMenu22Props2"
          />
          <img class="line-678-2" :src="line678" alt="Line 678" />
          <div class="flex-row-209">
            <div class="input-164">
              <div class="information-29">
                <div class="label-475 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText3 }}</span>
                </div>
                <div class="input-163">
                  <input
                    class="input-text-241 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder1"
                    :type="inputType1"
                  />
                </div>
              </div>
              <div class="information-29">
                <div class="label-475 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText4 }}</span>
                </div>
                <div class="input-163">
                  <input
                    class="input-text-241 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                  />
                </div>
              </div>
              <div class="information-29">
                <div class="label-475 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText5 }}</span>
                </div>
                <div class="input-163">
                  <input
                    class="input-text-241 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder3"
                    :type="inputType3"
                  />
                </div>
              </div>
              <information :spanText1="informationProps.spanText1" :spanText2="informationProps.spanText2" />
            </div>
            <div class="option-68">
              <div class="option-69">
                <radio-button />
                <div class="label-476 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText6 }}</span>
                </div>
              </div>
              <div class="option-70">
                <div class="radio-button-16"></div>
                <div class="label-476 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText7 }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-section-96">
            <img class="top-border-106" :src="topBorder" alt="Top Border" /><a href="javascript:SubmitForm('form56')">
              <div class="button-261">
                <img class="check-171" :src="check" alt="Check" />
                <div class="text-400 poppins-medium-white-14px">
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
import Frame2478 from "./Frame2478";
import Information from "./Information";
import RadioButton from "./RadioButton";
export default {
  name: "CustomersNewCustomerCompanyAddress",
  components: {
    LeftNavigationMenu5,
    TopNavigation,
    Option102,
    Option222,
    Frame2478,
    Information,
    RadioButton,
  },
  props: [
    "chevronLeft",
    "spanText1",
    "spanText2",
    "line678",
    "spanText3",
    "inputType1",
    "inputPlaceholder1",
    "spanText4",
    "inputType2",
    "inputPlaceholder2",
    "spanText5",
    "inputType3",
    "inputPlaceholder3",
    "spanText6",
    "spanText7",
    "topBorder",
    "check",
    "spanText8",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "option2Props",
    "frame2478Props",
    "informationProps",
  ],
};
</script>

<style>
.customers-u47-new-customer-u47-company-u45-address {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-209 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 916px;
  position: relative;
  width: 1216px;
}

.flex-row-208 {
  align-items: center;
  display: flex;
  gap: 48px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 579px;
}

.header-103 {
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

.button-260 {
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

.button-260:hover,
.button-261:hover {
  transform: translate(0, -5px);
}

.chevron-left-28,
.check-171 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-400 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-86 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  min-width: 151px;
  white-space: nowrap;
}

.option-67 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 24px;
  margin-top: 2px;
  min-width: 269px;
  position: relative;
}

.new-customer-information-1 {
  align-items: flex-start;
  align-self: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 740px;
  margin-top: 40px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.line-678-2 {
  align-self: center;
  height: 1px;
  width: 1088px;
}

.flex-row-209 {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  height: 256px;
  margin-left: 32px;
  margin-top: 47px;
  min-width: 933px;
}

.input-164 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 256px;
  position: relative;
  width: 576px;
}

.information-29 {
  align-items: center;
  display: flex;
  gap: 32px;
  min-width: 576px;
}

.label-475 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  width: 208px;
}

.input-163 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-241 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-241::placeholder {
  color: #0d0d1d99;
}

.option-68 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  margin-top: 8px;
  min-width: 325px;
}

.option-69 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 132px;
  position: relative;
}

.label-476 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-70 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 153px;
}

.radio-button-16 {
  align-self: center;
  background-color: var(--white);
  border-radius: 100px;
  height: 18px;
  width: 18px;
}

.bottom-section-96 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 276px;
  width: 1152px;
}

.top-border-106 {
  height: 1px;
  width: 1152px;
}

.button-261 {
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
