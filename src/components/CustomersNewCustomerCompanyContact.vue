<template>
  <div class="container-center-horizontal">
    <form class="customers-u47-new-customer-u47-company-u45-contact screen" name="form60" action="form60" method="post">
      <left-navigation-menu5 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-211">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-212">
          <header class="header-105">
            <a href="javascript:SubmitForm('form60')">
              <div class="button-264">
                <img class="chevron-left-30" :src="chevronLeft" alt="Chevron Left" />
                <div class="text-402 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                </div>
              </div></a
            >
            <div class="page-header-88 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
          </header>
          <div class="option-81">
            <option102 />
            <option222 :children="option2Props.children" />
          </div>
        </div>
        <div class="new-customer-information-2">
          <frame24782
            :tabMenu21Props="frame24782Props.tabMenu21Props"
            :tabMenu22Props="frame24782Props.tabMenu22Props"
            :tabMenu3Props="frame24782Props.tabMenu3Props"
            :tabMenu3Props2="frame24782Props.tabMenu3Props2"
          />
          <img class="line-678-4" :src="line678" alt="Line 678" />
          <div class="input-168">
            <div class="information-31">
              <div class="label-483 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText3 }}</span>
              </div>
              <div class="input-167">
                <input
                  class="input-text-243 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder1"
                  :type="inputType1"
                />
              </div>
            </div>
            <div class="information-31">
              <div class="label-483 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText4 }}</span>
              </div>
              <div class="input-167">
                <input
                  class="input-text-243 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder2"
                  :type="inputType2"
                />
              </div>
            </div>
            <div class="information-31">
              <p class="label-483 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText5 }}</span>
              </p>
              <div class="input-169">
                <input
                  class="input-text-244 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder3"
                  :type="inputType3"
                /><img class="apply-47" :src="apply" alt="Apply" />
              </div>
            </div>
          </div>
          <frame2480 />
          <div class="bottom-section-98">
            <img class="top-border-108" :src="topBorder" alt="Top Border" /><a href="javascript:SubmitForm('form60')">
              <div class="button-265">
                <img class="check-173" :src="check" alt="Check" />
                <div class="text-402 poppins-medium-white-14px">
                  <span class="poppins-medium-white-14px">{{ spanText6 }}</span>
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
import Frame24782 from "./Frame24782";
import Frame2480 from "./Frame2480";
export default {
  name: "CustomersNewCustomerCompanyContact",
  components: {
    LeftNavigationMenu5,
    TopNavigation,
    Option102,
    Option222,
    Frame24782,
    Frame2480,
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
    "apply",
    "topBorder",
    "check",
    "spanText6",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "option2Props",
    "frame24782Props",
  ],
};
</script>

<style>
.customers-u47-new-customer-u47-company-u45-contact {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-211 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 916px;
  position: relative;
  width: 1216px;
}

.flex-row-212 {
  align-items: center;
  display: flex;
  gap: 48px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 579px;
}

.header-105 {
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

.button-264 {
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

.button-264:hover,
.button-265:hover {
  transform: translate(0, -5px);
}

.chevron-left-30,
.apply-47,
.check-173 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-402 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-88 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  min-width: 151px;
  white-space: nowrap;
}

.option-81 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 24px;
  margin-top: 2px;
  min-width: 269px;
  position: relative;
}

.new-customer-information-2 {
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

.line-678-4 {
  align-self: center;
  height: 1px;
  width: 1088px;
}

.input-168 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-left: 32px;
  margin-top: 47px;
  min-height: 184px;
  width: 576px;
}

.information-31 {
  align-items: center;
  display: flex;
  gap: 32px;
  min-width: 576px;
}

.label-483 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  width: 208px;
}

.input-167 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-243 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-243::placeholder,
.input-text-244::placeholder {
  color: #0d0d1d99;
}

.input-169 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-244 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 284px;
}

.bottom-section-98 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 276px;
  width: 1152px;
}

.top-border-108 {
  height: 1px;
  width: 1152px;
}

.button-265 {
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
