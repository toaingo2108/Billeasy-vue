<template>
  <div class="container-center-horizontal">
    <form class="customers-u47-new-customer-u47-company-u45-general screen" name="form48" action="form48" method="post">
      <left-navigation-menu5 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-207">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-205">
          <header class="header-101">
            <a href="javascript:SubmitForm('form48')">
              <div class="button-254">
                <img class="chevron-left-26" :src="chevronLeft" alt="Chevron Left" />
                <div class="text-390 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                </div>
              </div></a
            >
            <div class="page-header-84 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
          </header>
          <div class="option-58">
            <option102 />
            <div class="option-59">
              <a href="javascript:SubmitForm('form48')" className="align-self-flex-center">
                <div class="radio-button-14"></div
              ></a>
              <div class="label-461 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText3 }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="new-customer-information">
          <div class="frame-2478-2">
            <tab-menu14 :className="leftNavigationMenuProps2.className" />
            <a href="javascript:SubmitForm('form48')">
              <div class="tab-menu-170">
                <img class="address-9" :src="address" alt="Address" />
                <div class="label-459 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText4 }}</span>
                </div>
              </div></a
            ><a href="javascript:SubmitForm('form48')">
              <div class="tab-menu-170">
                <img class="contact-8" :src="contact" alt="Contact" />
                <div class="label-459 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText5 }}</span>
                </div>
              </div></a
            ><a href="javascript:SubmitForm('form48')">
              <div class="tab-menu-171">
                <img class="invoice-158" :src="invoice" alt="Invoice" />
                <div class="label-459 poppins-medium-manatee-14px">
                  <span class="poppins-medium-manatee-14px">{{ spanText6 }}</span>
                </div>
              </div></a
            >
          </div>
          <img class="line-678" :src="line678" alt="Line 678" />
          <div class="flex-row-206">
            <div class="input-160">
              <div class="information-21">
                <div class="label-460 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText7 }}</span>
                </div>
                <div class="input-159">
                  <input
                    class="input-text-239 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder1"
                    :type="inputType1"
                  />
                </div>
              </div>
              <div class="information-21">
                <div class="label-460 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText8 }}</span>
                </div>
                <div class="input-159">
                  <input
                    class="input-text-239 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                  />
                </div>
              </div>
              <div class="information-21">
                <div class="label-460 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText9 }}</span>
                </div>
                <div class="input-159">
                  <input
                    class="input-text-239 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder3"
                    :type="inputType3"
                  />
                </div>
              </div>
              <div class="information-21">
                <div class="label-460 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText10 }}</span>
                </div>
                <div class="input-159">
                  <input
                    class="input-text-239 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder4"
                    :type="inputType4"
                  />
                </div>
              </div>
              <div class="information-21">
                <div class="label-460 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText11 }}</span>
                </div>
                <div class="input-159">
                  <input
                    class="input-text-239 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder5"
                    :type="inputType5"
                  />
                </div>
              </div>
              <information :spanText1="informationProps.spanText1" :spanText2="informationProps.spanText2" />
            </div>
            <a href="javascript:SubmitForm('form48')">
              <div class="button-255">
                <img class="add-78" :src="add" alt="Add" />
                <div class="text-391 poppins-medium-caribbean-green-14px">
                  <span class="poppins-medium-caribbean-green-14px">{{ spanText12 }}</span>
                </div>
              </div></a
            >
          </div>
          <div class="bottom-section-94">
            <img class="top-border-104" :src="topBorder" alt="Top Border" /><a href="javascript:SubmitForm('form48')">
              <div class="button-256">
                <img class="check-169" :src="check" alt="Check" />
                <div class="text-390 poppins-medium-white-14px">
                  <span class="poppins-medium-white-14px">{{ spanText13 }}</span>
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
import TabMenu14 from "./TabMenu14";
import Information from "./Information";
export default {
  name: "CustomersNewCustomerCompanyGeneral",
  components: {
    LeftNavigationMenu5,
    TopNavigation,
    Option102,
    TabMenu14,
    Information,
  },
  props: [
    "chevronLeft",
    "spanText1",
    "spanText2",
    "spanText3",
    "address",
    "spanText4",
    "contact",
    "spanText5",
    "invoice",
    "spanText6",
    "line678",
    "spanText7",
    "inputType1",
    "inputPlaceholder1",
    "spanText8",
    "inputType2",
    "inputPlaceholder2",
    "spanText9",
    "inputType3",
    "inputPlaceholder3",
    "spanText10",
    "inputType4",
    "inputPlaceholder4",
    "spanText11",
    "inputType5",
    "inputPlaceholder5",
    "add",
    "spanText12",
    "topBorder",
    "check",
    "spanText13",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "leftNavigationMenuProps2",
    "informationProps",
  ],
};
</script>

<style>
.customers-u47-new-customer-u47-company-u45-general {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-207 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 916px;
  position: relative;
  width: 1216px;
}

.flex-row-205 {
  align-items: center;
  display: flex;
  gap: 48px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 579px;
}

.header-101 {
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

.button-254 {
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

.button-254:hover,
.tab-menu-170:hover,
.tab-menu-171:hover,
.button-256:hover {
  transform: translate(0, -5px);
}

.chevron-left-26,
.add-78,
.check-169 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-390 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-84 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  min-width: 151px;
  white-space: nowrap;
}

.option-58 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  margin-top: 2px;
  min-width: 269px;
  position: relative;
}

.option-59 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 129px;
}

.radio-button-14 {
  align-self: center;
  background-color: var(--white);
  border-radius: 100px;
  cursor: pointer;
  height: 18px;
  width: 18px;
}

.label-461 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.new-customer-information {
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

.frame-2478-2 {
  align-items: flex-start;
  display: flex;
  margin-left: 32px;
  margin-top: 24px;
  min-width: 512px;
  position: relative;
}

.tab-menu-170 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 128px;
  padding: 9px 23px;
  transition: all 0.15s ease;
}

.address-9,
.contact-8,
.invoice-158 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-459 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-171 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 128px;
  padding: 9px 26.5px;
  transition: all 0.15s ease;
}

.line-678 {
  align-self: center;
  height: 1px;
  width: 1088px;
}

.flex-row-206 {
  align-items: flex-end;
  display: flex;
  gap: 12px;
  height: 400px;
  margin-left: 32px;
  margin-top: 47px;
  min-width: 677px;
}

.input-160 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 400px;
  position: relative;
  width: 576px;
}

.information-21 {
  align-items: center;
  display: flex;
  gap: 32px;
  min-width: 576px;
}

.label-460 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  width: 208px;
}

.input-159 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-239 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-239::placeholder {
  color: #0d0d1d99;
}

.button-255 {
  align-items: flex-start;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 21px;
  margin-bottom: 10px;
  min-width: 89px;
  transition: all 0.15s ease;
}

.button-255:hover {
  transform: scale(1.1);
}

.text-391 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 63px;
  text-align: center;
}

.bottom-section-94 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 132px;
  width: 1152px;
}

.top-border-104 {
  height: 1px;
  width: 1152px;
}

.button-256 {
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
