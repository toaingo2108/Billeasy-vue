<template>
  <div class="container-center-horizontal">
    <div class="customers-u47-new-customer-category screen">
      <div class="overlap-group-67">
        <table9 v-bind="table9Props" />
        <left-navigation-menu5 v-bind="leftNavigationMenu5Props" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <actions5
          :searchProps="actions5Props.searchProps"
          :iconButton1Props="actions5Props.iconButton1Props"
          :iconButton2Props="actions5Props.iconButton2Props"
          :iconButton3Props="actions5Props.iconButton3Props"
        />
        <x-button19 :className="buttonProps.className" />
        <bottom-section92
          :className="bottomSection92Props.className"
          :iconButtonProps="bottomSection92Props.iconButtonProps"
          :paginationProps="bottomSection92Props.paginationProps"
        />
        <div class="scroll-bar-37"></div>
        <h1 class="page-header-94 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="overlay-26">
          <div class="new-customer-category">
            <div class="title-109 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
            <div class="flex-row-221">
              <div class="input-field-84">
                <div class="label-489 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span
                  ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText4 }}</span>
                </div>
                <div class="input-183">
                  <input
                    class="input-text-288 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder1"
                    :type="inputType1"
                  />
                </div>
              </div>
              <div class="dropdown-170">
                <div class="label-489 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span
                  ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText6 }}</span>
                </div>
                <dropdown3 :spanText="dropdown3Props.spanText" />
              </div>
            </div>
            <div class="input-field-85">
              <div class="label-490 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText7 }}</span>
              </div>
              <div class="input-184">
                <input
                  class="input-text-289 poppins-normal-manatee-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder2"
                  :type="inputType2"
                />
              </div>
            </div>
            <dropdown222 :spanText1="dropdown2221Props.spanText1" :dropdownProps="dropdown2221Props.dropdownProps" />
            <dropdown222 :spanText1="dropdown2222Props.spanText1" :dropdownProps="dropdown2222Props.dropdownProps" />
            <bottom-section32 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table9 from "./Table9";
import LeftNavigationMenu5 from "./LeftNavigationMenu5";
import TopNavigation from "./TopNavigation";
import Actions5 from "./Actions5";
import xButton19 from "./xButton19";
import BottomSection92 from "./BottomSection92";
import Dropdown3 from "./Dropdown3";
import Dropdown222 from "./Dropdown222";
import BottomSection32 from "./BottomSection32";
export default {
  name: "CustomersNewCustomerCategory",
  components: {
    Table9,
    LeftNavigationMenu5,
    TopNavigation,
    Actions5,
    xButton19,
    BottomSection92,
    Dropdown3,
    Dropdown222,
    BottomSection32,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "inputType1",
    "inputPlaceholder1",
    "spanText5",
    "spanText6",
    "spanText7",
    "inputType2",
    "inputPlaceholder2",
    "table9Props",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "actions5Props",
    "buttonProps",
    "bottomSection92Props",
    "dropdown3Props",
    "dropdown2221Props",
    "dropdown2222Props",
  ],
};
</script>

<style>
.customers-u47-new-customer-category {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-67 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.scroll-bar-37 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 310px;
  width: 12px;
}

.page-header-94 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-26 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-end;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 175px 352px;
  position: absolute;
  top: 0;
}

.new-customer-category {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 616px;
  overflow: hidden;
  position: relative;
  width: 512px;
}

.title-109 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.flex-row-221 {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  height: 66px;
  margin-top: 41px;
  min-width: 448px;
}

.input-field-84 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 208px;
}

.label-489 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 208px;
}

.input-183 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 208px;
}

.input-text-288 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 184px;
}

.input-text-288::placeholder {
  color: #0d0d1d99;
}

.dropdown-170 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  position: relative;
  width: 208px;
}

.input-field-85 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 120px;
  width: 448px;
}

.label-490 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 448px;
}

.input-184 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 94px;
  overflow: hidden;
  padding: 9px 12px;
  width: 448px;
}

.input-text-289 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 424px;
}

.input-text-289::placeholder {
  color: #8a8aa899;
}
</style>
