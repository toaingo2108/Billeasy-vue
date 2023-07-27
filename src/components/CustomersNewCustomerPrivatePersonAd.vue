<template>
  <div class="container-center-horizontal">
    <form
      class="customers-u47-new-customer-u47-private-person-u45-address screen"
      name="form58"
      action="form58"
      method="post"
    >
      <left-navigation-menu5 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-210">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-210">
          <header class="header-104">
            <a href="javascript:SubmitForm('form58')">
              <div class="button-262">
                <img class="chevron-left-29" :src="chevronLeft" alt="Chevron Left" />
                <div class="text-401 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                </div>
              </div></a
            >
            <div class="page-header-87 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
          </header>
          <div class="option-75">
            <div class="option-76">
              <div class="radio-button-21"></div>
              <div class="label-481 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText3 }}</span>
              </div>
            </div>
            <div class="option-77">
              <radio-button />
              <div class="label-481 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText4 }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-2479-1">
          <frame2478
            :tabMenu21Props="frame2478Props.tabMenu21Props"
            :tabMenu3Props="frame2478Props.tabMenu3Props"
            :tabMenu22Props="frame2478Props.tabMenu22Props"
            :tabMenu22Props2="frame2478Props.tabMenu22Props2"
          />
          <img class="line-678-3" :src="line678" alt="Line 678" />
          <div class="flex-row-211">
            <div class="input-166">
              <div class="information-30">
                <div class="label-482 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText5 }}</span>
                </div>
                <div class="input-165">
                  <input
                    class="input-text-242 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder1"
                    :type="inputType1"
                  />
                </div>
              </div>
              <div class="information-30">
                <div class="label-482 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText6 }}</span>
                </div>
                <div class="input-165">
                  <input
                    class="input-text-242 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                  />
                </div>
              </div>
              <div class="information-30">
                <div class="label-482 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText7 }}</span>
                </div>
                <div class="input-165">
                  <input
                    class="input-text-242 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder3"
                    :type="inputType3"
                  />
                </div>
              </div>
              <information :spanText1="informationProps.spanText1" :spanText2="informationProps.spanText2" />
            </div>
            <div class="option-78">
              <div class="option-79">
                <radio-button />
                <div class="label-481 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText8 }}</span>
                </div>
              </div>
              <div class="option-80">
                <div class="radio-button-21"></div>
                <div class="label-481 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText9 }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-section-97">
            <img class="top-border-107" :src="topBorder" alt="Top Border" /><a href="javascript:SubmitForm('form58')">
              <div class="button-263">
                <img class="check-172" :src="check" alt="Check" />
                <div class="text-401 poppins-medium-white-14px">
                  <span class="poppins-medium-white-14px">{{ spanText10 }}</span>
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
import Frame2478 from "./Frame2478";
import Information from "./Information";
export default {
  name: "CustomersNewCustomerPrivatePersonAd",
  components: {
    LeftNavigationMenu5,
    TopNavigation,
    RadioButton,
    Frame2478,
    Information,
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
    "spanText8",
    "spanText9",
    "topBorder",
    "check",
    "spanText10",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "frame2478Props",
    "informationProps",
  ],
};
</script>

<style>
.customers-u47-new-customer-u47-private-person-u45-address {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-210 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 916px;
  position: relative;
  width: 1216px;
}

.flex-row-210 {
  align-items: center;
  display: flex;
  gap: 48px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 579px;
}

.header-104 {
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

.button-262 {
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

.button-262:hover,
.button-263:hover {
  transform: translate(0, -5px);
}

.chevron-left-29,
.check-172 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-401 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-87 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  min-width: 151px;
  white-space: nowrap;
}

.option-75 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  margin-top: 2px;
  min-width: 269px;
}

.option-76 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 100px;
}

.radio-button-21 {
  align-self: center;
  background-color: var(--white);
  border-radius: 100px;
  height: 18px;
  width: 18px;
}

.label-481 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-77 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 129px;
  position: relative;
}

.frame-2479-1 {
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

.line-678-3 {
  align-self: center;
  height: 1px;
  width: 1088px;
}

.flex-row-211 {
  align-items: flex-start;
  display: flex;
  gap: 43px;
  height: 256px;
  margin-left: 32px;
  margin-top: 47px;
  min-width: 944px;
}

.input-166 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 256px;
  position: relative;
  width: 576px;
}

.information-30 {
  align-items: center;
  display: flex;
  gap: 32px;
  min-width: 576px;
}

.label-482 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  width: 208px;
}

.input-165 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-242 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-242::placeholder {
  color: #0d0d1d99;
}

.option-78 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  margin-top: 8px;
  min-width: 325px;
}

.option-79 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 132px;
  position: relative;
}

.option-80 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 153px;
}

.bottom-section-97 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 276px;
  width: 1152px;
}

.top-border-107 {
  height: 1px;
  width: 1152px;
}

.button-263 {
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
