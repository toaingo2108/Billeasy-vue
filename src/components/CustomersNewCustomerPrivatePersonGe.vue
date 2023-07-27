<template>
  <div class="container-center-horizontal">
    <form
      class="customers-u47-new-customer-u47-private-person-u45-general screen"
      name="form54"
      action="form54"
      method="post"
    >
      <left-navigation-menu5 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-208">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-207">
          <header class="header-102">
            <a href="javascript:SubmitForm('form54')">
              <div class="button-257">
                <img class="chevron-left-27" :src="chevronLeft" alt="Chevron Left" />
                <div class="text-398 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                </div>
              </div></a
            >
            <div class="page-header-85 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
          </header>
          <div class="option-64">
            <div class="option-65">
              <div class="radio-button-15"></div>
              <div class="label-472 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText3 }}</span>
              </div>
            </div>
            <div class="option-66">
              <radio-button />
              <div class="label-472 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText4 }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="overlap-group-65">
          <div class="frame-2479">
            <div class="frame-2478-3">
              <tab-menu14 :className="leftNavigationMenuProps2.className" />
              <a href="javascript:SubmitForm('form54')">
                <div class="tab-menu-172">
                  <img class="address-10" :src="address" alt="Address" />
                  <div class="label-473 poppins-medium-manatee-14px">
                    <span class="poppins-medium-manatee-14px">{{ spanText5 }}</span>
                  </div>
                </div></a
              ><a href="javascript:SubmitForm('form54')">
                <div class="tab-menu-172">
                  <img class="contact-9" :src="contact" alt="Contact" />
                  <div class="label-473 poppins-medium-manatee-14px">
                    <span class="poppins-medium-manatee-14px">{{ spanText6 }}</span>
                  </div>
                </div></a
              ><a href="javascript:SubmitForm('form54')">
                <div class="tab-menu-173">
                  <img class="invoice-159" :src="invoice" alt="Invoice" />
                  <div class="label-473 poppins-medium-manatee-14px">
                    <span class="poppins-medium-manatee-14px">{{ spanText7 }}</span>
                  </div>
                </div></a
              >
            </div>
            <img class="line-678-1" :src="line678" alt="Line 678" />
            <div class="input-162">
              <div class="information-28">
                <div class="label-474 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText8 }}</span>
                </div>
                <div class="input-161">
                  <input
                    class="input-text-240 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder1"
                    :type="inputType1"
                  />
                </div>
              </div>
              <div class="information-28">
                <div class="label-474 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText9 }}</span>
                </div>
                <div class="input-161">
                  <input
                    class="input-text-240 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                  />
                </div>
              </div>
              <div class="information-28">
                <div class="label-474 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText10 }}</span>
                </div>
                <div class="input-161">
                  <input
                    class="input-text-240 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder3"
                    :type="inputType3"
                  />
                </div>
              </div>
              <div class="information-28">
                <div class="label-474 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText11 }}</span>
                </div>
                <div class="input-161">
                  <input
                    class="input-text-240 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder4"
                    :type="inputType4"
                  />
                </div>
              </div>
              <information :spanText1="informationProps.spanText1" :spanText2="informationProps.spanText2" />
            </div>
            <div class="bottom-section-95">
              <img class="top-border-105" :src="topBorder" alt="Top Border" /><a href="javascript:SubmitForm('form54')">
                <div class="button-258">
                  <img class="check-170" :src="check" alt="Check" />
                  <div class="text-398 poppins-medium-white-14px">
                    <span class="poppins-medium-white-14px">{{ spanText12 }}</span>
                  </div>
                </div></a
              >
            </div>
          </div>
          <a href="javascript:SubmitForm('form54')">
            <div class="button-259">
              <img class="add-79" :src="add" alt="Add" />
              <div class="text-399 poppins-medium-caribbean-green-14px">
                <span class="poppins-medium-caribbean-green-14px">{{ spanText13 }}</span>
              </div>
            </div></a
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu5 from "./LeftNavigationMenu5";
import TopNavigation from "./TopNavigation";
import RadioButton from "./RadioButton";
import TabMenu14 from "./TabMenu14";
import Information from "./Information";
export default {
  name: "CustomersNewCustomerPrivatePersonGe",
  components: {
    LeftNavigationMenu5,
    TopNavigation,
    RadioButton,
    TabMenu14,
    Information,
  },
  props: [
    "chevronLeft",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "address",
    "spanText5",
    "contact",
    "spanText6",
    "invoice",
    "spanText7",
    "line678",
    "spanText8",
    "inputType1",
    "inputPlaceholder1",
    "spanText9",
    "inputType2",
    "inputPlaceholder2",
    "spanText10",
    "inputType3",
    "inputPlaceholder3",
    "spanText11",
    "inputType4",
    "inputPlaceholder4",
    "topBorder",
    "check",
    "spanText12",
    "add",
    "spanText13",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "leftNavigationMenuProps2",
    "informationProps",
  ],
};
</script>

<style>
.customers-u47-new-customer-u47-private-person-u45-general {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-208 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 916px;
  position: relative;
  width: 1216px;
}

.flex-row-207 {
  align-items: center;
  display: flex;
  gap: 48px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 579px;
}

.header-102 {
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

.button-257 {
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

.button-257:hover,
.tab-menu-172:hover,
.tab-menu-173:hover,
.button-258:hover {
  transform: translate(0, -5px);
}

.chevron-left-27,
.check-170,
.add-79 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-398 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-85 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  min-width: 151px;
  white-space: nowrap;
}

.option-64 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  margin-top: 2px;
  min-width: 269px;
}

.option-65 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 100px;
}

.radio-button-15 {
  align-self: center;
  background-color: var(--white);
  border-radius: 100px;
  height: 18px;
  width: 18px;
}

.label-472 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-66 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 129px;
  position: relative;
}

.overlap-group-65 {
  align-self: center;
  border-radius: 28px;
  height: 740px;
  margin-top: 40px;
  position: relative;
  width: 1152px;
}

.frame-2479 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 740px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 1152px;
}

.frame-2478-3 {
  align-items: flex-start;
  display: flex;
  margin-left: 32px;
  margin-top: 24px;
  min-width: 512px;
  position: relative;
}

.tab-menu-172 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 128px;
  padding: 9px 23px;
  transition: all 0.15s ease;
}

.address-10,
.contact-9,
.invoice-159 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-473 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-173 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 128px;
  padding: 9px 26.5px;
  transition: all 0.15s ease;
}

.line-678-1 {
  align-self: center;
  height: 1px;
  width: 1088px;
}

.input-162 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-left: 32px;
  margin-top: 47px;
  min-height: 328px;
  position: relative;
  width: 576px;
}

.information-28 {
  align-items: center;
  display: flex;
  gap: 32px;
  min-width: 576px;
}

.label-474 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  width: 208px;
}

.input-161 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-240 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-240::placeholder {
  color: #0d0d1d99;
}

.bottom-section-95 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 204px;
  width: 1152px;
}

.top-border-105 {
  height: 1px;
  width: 1152px;
}

.button-258 {
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

.button-259 {
  align-items: flex-start;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 21px;
  left: 622px;
  min-width: 89px;
  position: absolute;
  top: 409px;
  transition: all 0.15s ease;
}

.button-259:hover {
  transform: scale(1.1);
}

.text-399 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 63px;
  text-align: center;
}
</style>
