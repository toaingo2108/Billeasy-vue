<template>
  <div class="container-center-horizontal">
    <form
      class="customers-u47-new-customer-u47-private-person-u45-invoice screen"
      name="form74"
      action="form74"
      method="post"
    >
      <left-navigation-menu5 v-bind="leftNavigationMenu5Props" />
      <div class="flex-col-216">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-216">
          <header class="header-108">
            <a href="javascript:SubmitForm('form74')">
              <div class="button-272">
                <img class="chevron-left-33" :src="chevronLeft" alt="Chevron Left" />
                <div class="text-406 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                </div>
              </div></a
            >
            <div class="page-header-91 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
          </header>
          <div class="option-86">
            <div class="option-87">
              <div class="radio-button-23"></div>
              <div class="label-487 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText3 }}</span>
              </div>
            </div>
            <div class="option-88">
              <radio-button />
              <div class="label-487 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText4 }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-2479-3">
          <div class="flex-col-217">
            <div class="frame-2478-9">
              <tab-menu222
                :general="tabMenu2221Props.general"
                :spanText="tabMenu2221Props.spanText"
                :className="tabMenu2221Props.className"
              />
              <tab-menu222
                :general="tabMenu2222Props.general"
                :spanText="tabMenu2222Props.spanText"
                :className="tabMenu2222Props.className"
              />
              <tab-menu222
                :general="tabMenu2223Props.general"
                :spanText="tabMenu2223Props.spanText"
                :className="tabMenu2223Props.className"
              />
              <tab-menu722 :className="tabMenu72Props.className" />
            </div>
            <img class="line-678-7" :src="line678" alt="Line 678" />
          </div>
          <div class="flex-row-217">
            <div class="input-175">
              <information :spanText1="information1Props.spanText1" :spanText2="information1Props.spanText2" />
              <information :spanText1="information2Props.spanText1" :spanText2="information2Props.spanText2" />
              <information :spanText1="information3Props.spanText1" :spanText2="information3Props.spanText2" />
              <information :spanText1="information4Props.spanText1" :spanText2="information4Props.spanText2" />
              <information :spanText1="information5Props.spanText1" :spanText2="information5Props.spanText2" />
              <div class="information-34">
                <div class="label-488 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText5 }}</span>
                </div>
                <div class="input-176">
                  <input
                    class="input-text-281 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder"
                    :type="inputType"
                  />
                </div>
              </div>
              <information :spanText1="information6Props.spanText1" :spanText2="information6Props.spanText2" />
            </div>
            <div class="button-container-1">
              <a href="javascript:SubmitForm('form74')">
                <div class="button-271">
                  <img class="add-84" :src="add1" alt="Add" />
                  <div class="text-407 poppins-medium-caribbean-green-14px">
                    <span class="poppins-medium-caribbean-green-14px">{{ spanText6 }}</span>
                  </div>
                </div></a
              ><a href="javascript:SubmitForm('form74')">
                <div class="button-271">
                  <img class="add-85" :src="add2" alt="Add" />
                  <div class="text-407 poppins-medium-caribbean-green-14px">
                    <span class="poppins-medium-caribbean-green-14px">{{ spanText7 }}</span>
                  </div>
                </div></a
              ><a href="javascript:SubmitForm('form74')">
                <div class="button-271">
                  <img class="add-86" :src="add3" alt="Add" />
                  <div class="text-407 poppins-medium-caribbean-green-14px">
                    <span class="poppins-medium-caribbean-green-14px">{{ spanText8 }}</span>
                  </div>
                </div></a
              ><a href="javascript:SubmitForm('form74')">
                <div class="button-271">
                  <img class="add-87" :src="add4" alt="Add" />
                  <div class="text-407 poppins-medium-caribbean-green-14px">
                    <span class="poppins-medium-caribbean-green-14px">{{ spanText9 }}</span>
                  </div>
                </div></a
              >
            </div>
          </div>
          <div class="bottom-section-101">
            <img class="top-border-111" :src="topBorder" alt="Top Border" /><a href="javascript:SubmitForm('form74')">
              <div class="button-273">
                <img class="check-176" :src="check" alt="Check" />
                <div class="text-406 poppins-medium-white-14px">
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
import TabMenu222 from "./TabMenu222";
import TabMenu722 from "./TabMenu722";
import Information from "./Information";
export default {
  name: "CustomersNewCustomerPrivatePersonIn",
  components: {
    LeftNavigationMenu5,
    TopNavigation,
    RadioButton,
    TabMenu222,
    TabMenu722,
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
    "inputType",
    "inputPlaceholder",
    "add1",
    "spanText6",
    "add2",
    "spanText7",
    "add3",
    "spanText8",
    "add4",
    "spanText9",
    "topBorder",
    "check",
    "spanText10",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "tabMenu2221Props",
    "tabMenu2222Props",
    "tabMenu2223Props",
    "tabMenu72Props",
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
.customers-u47-new-customer-u47-private-person-u45-invoice {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-216 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 916px;
  position: relative;
  width: 1216px;
}

.flex-row-216 {
  align-items: center;
  display: flex;
  gap: 48px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 579px;
}

.header-108 {
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

.button-272 {
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

.button-272:hover,
.button-273:hover {
  transform: translate(0, -5px);
}

.chevron-left-33,
.add-84,
.add-85,
.add-86,
.add-87,
.check-176 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-406 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-91 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  min-width: 151px;
  white-space: nowrap;
}

.option-86 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  margin-top: 2px;
  min-width: 269px;
}

.option-87 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 100px;
}

.radio-button-23 {
  align-self: center;
  background-color: var(--white);
  border-radius: 100px;
  height: 18px;
  width: 18px;
}

.label-487 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-88 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 129px;
  position: relative;
}

.frame-2479-3 {
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

.flex-col-217 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  min-height: 41px;
  width: 1088px;
}

.frame-2478-9 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  min-width: 512px;
  position: relative;
}

.line-678-7 {
  height: 1px;
  width: 1088px;
}

.flex-row-217 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 472px;
  margin-left: 32px;
  margin-top: 47px;
  min-width: 677px;
}

.input-175 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 472px;
  position: relative;
  width: 576px;
}

.information-34 {
  align-items: center;
  display: flex;
  gap: 32px;
  min-width: 576px;
}

.label-488 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  width: 208px;
}

.input-176 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-281 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-281::placeholder {
  color: #0d0d1d99;
}

.button-container-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 51px;
  margin-top: 9px;
  min-height: 237px;
  width: 89px;
}

.button-271 {
  align-items: flex-start;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 21px;
  min-width: 89px;
  transition: all 0.15s ease;
}

.button-271:hover {
  transform: scale(1.1);
}

.text-407 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 63px;
  text-align: center;
}

.bottom-section-101 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 60px;
  width: 1152px;
}

.top-border-111 {
  height: 1px;
  width: 1152px;
}

.button-273 {
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
