<template>
  <div class="container-center-horizontal">
    <form
      class="customers-u47-new-customer-u47-private-person-u45-contact screen"
      name="form62"
      action="form62"
      method="post"
    >
      <left-navigation-menu5 v-bind="leftNavigationMenu5Props" />
      <div class="flex-col-212">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-213">
          <header class="header-106">
            <a href="javascript:SubmitForm('form62')">
              <div class="button-266">
                <img class="chevron-left-31" :src="chevronLeft" alt="Chevron Left" />
                <div class="text-403 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                </div>
              </div></a
            >
            <div class="page-header-89 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
          </header>
          <div class="option-82">
            <div class="option-83">
              <div class="radio-button-22"></div>
              <div class="label-484 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText3 }}</span>
              </div>
            </div>
            <div class="option-84">
              <radio-button />
              <div class="label-484 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText4 }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-2479-2">
          <frame24782
            :tabMenu21Props="frame24782Props.tabMenu21Props"
            :tabMenu22Props="frame24782Props.tabMenu22Props"
            :tabMenu3Props="frame24782Props.tabMenu3Props"
            :tabMenu3Props2="frame24782Props.tabMenu3Props2"
          />
          <img class="line-678-5" :src="line678" alt="Line 678" />
          <div class="input-171">
            <div class="information-32">
              <div class="label-485 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText5 }}</span>
              </div>
              <div class="input-170">
                <input
                  class="input-text-278 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder1"
                  :type="inputType1"
                />
              </div>
            </div>
            <div class="information-32">
              <div class="label-485 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText6 }}</span>
              </div>
              <div class="input-170">
                <input
                  class="input-text-278 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder2"
                  :type="inputType2"
                />
              </div>
            </div>
            <div class="information-32">
              <p class="label-485 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText7 }}</span>
              </p>
              <div class="input-172">
                <input
                  class="input-text-279 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder3"
                  :type="inputType3"
                /><img class="apply-48" :src="apply" alt="Apply" />
              </div>
            </div>
          </div>
          <frame2480 />
          <div class="bottom-section-99">
            <img class="top-border-109" :src="topBorder" alt="Top Border" /><a href="javascript:SubmitForm('form62')">
              <div class="button-267">
                <img class="check-174" :src="check" alt="Check" />
                <div class="text-403 poppins-medium-white-14px">
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
import RadioButton from "./RadioButton";
import Frame24782 from "./Frame24782";
import Frame2480 from "./Frame2480";
export default {
  name: "CustomersNewCustomerPrivatePersonCo",
  components: {
    LeftNavigationMenu5,
    TopNavigation,
    RadioButton,
    Frame24782,
    Frame2480,
  },
  props: [
    "chevronLeft",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "line678",
    "spanText5",
    "inputType1",
    "inputPlaceholder1",
    "spanText6",
    "inputType2",
    "inputPlaceholder2",
    "spanText7",
    "inputType3",
    "inputPlaceholder3",
    "apply",
    "topBorder",
    "check",
    "spanText8",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "frame24782Props",
  ],
};
</script>

<style>
.customers-u47-new-customer-u47-private-person-u45-contact {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-212 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 916px;
  position: relative;
  width: 1216px;
}

.flex-row-213 {
  align-items: center;
  display: flex;
  gap: 48px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 579px;
}

.header-106 {
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

.button-266 {
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

.button-266:hover,
.button-267:hover {
  transform: translate(0, -5px);
}

.chevron-left-31,
.apply-48,
.check-174 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-403 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-89 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  min-width: 151px;
  white-space: nowrap;
}

.option-82 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  margin-top: 2px;
  min-width: 269px;
}

.option-83 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 100px;
}

.radio-button-22 {
  align-self: center;
  background-color: var(--white);
  border-radius: 100px;
  height: 18px;
  width: 18px;
}

.label-484 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-84 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 129px;
  position: relative;
}

.frame-2479-2 {
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

.line-678-5 {
  align-self: center;
  height: 1px;
  width: 1088px;
}

.input-171 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-left: 32px;
  margin-top: 47px;
  min-height: 184px;
  width: 576px;
}

.information-32 {
  align-items: center;
  display: flex;
  gap: 32px;
  min-width: 576px;
}

.label-485 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  width: 208px;
}

.input-170 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-278 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-278::placeholder,
.input-text-279::placeholder {
  color: #0d0d1d99;
}

.input-172 {
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

.input-text-279 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 284px;
}

.bottom-section-99 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 276px;
  width: 1152px;
}

.top-border-109 {
  height: 1px;
  width: 1152px;
}

.button-267 {
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
