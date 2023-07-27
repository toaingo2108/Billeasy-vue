<template>
  <div class="container-center-horizontal">
    <div class="customers-u47-import screen">
      <div class="overlap-group-69">
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
        <div class="scroll-bar-39"></div>
        <h1 class="page-header-96 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="overlay-28">
          <div class="import-products">
            <div class="flex-row-223">
              <div class="flex-col-222">
                <div class="import-customers poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                </div>
                <div class="label-498 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText3 }}</span>
                </div>
                <div class="label-499 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText4 }}</span>
                </div>
              </div>
              <div class="flex-col-223">
                <dropdown52 :spanText="dropdown5Props.spanText" />
                <div class="products-to-import-1">
                  <option222 :children="option222Props.children" :className="option222Props.className" />
                  <div class="option-94">
                    <radio-button />
                    <div class="label-500 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText5 }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <bottom-section322
              :className="bottomSection322Props.className"
              :button222Props="bottomSection322Props.button222Props"
            />
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
import Dropdown52 from "./Dropdown52";
import Option222 from "./Option222";
import RadioButton from "./RadioButton";
import BottomSection322 from "./BottomSection322";
export default {
  name: "CustomersImport",
  components: {
    Table9,
    LeftNavigationMenu5,
    TopNavigation,
    Actions5,
    xButton19,
    BottomSection92,
    Dropdown52,
    Option222,
    RadioButton,
    BottomSection322,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "table9Props",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "actions5Props",
    "buttonProps",
    "bottomSection92Props",
    "dropdown5Props",
    "option222Props",
    "bottomSection322Props",
  ],
};
</script>

<style>
.customers-u47-import {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-69 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.scroll-bar-39 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 310px;
  width: 12px;
}

.page-header-96 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-28 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 171px 296px;
  position: absolute;
  top: 0;
}

.import-products {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  gap: 51px;
  height: 347px;
  overflow: hidden;
  position: relative;
  width: 624px;
}

.flex-row-223 {
  align-items: flex-start;
  display: flex;
  gap: 36px;
  height: 169px;
  margin-right: 19px;
  margin-top: 31px;
  min-width: 545px;
}

.flex-col-222 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 168px;
  width: 188px;
}

.import-customers {
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 2px;
  white-space: nowrap;
}

.label-498 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 48px;
  white-space: nowrap;
}

.label-499 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 44px;
  white-space: nowrap;
}

.flex-col-223 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 36px;
  min-height: 100px;
  position: relative;
  width: 321px;
}

.products-to-import-1 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  min-width: 321px;
  position: relative;
}

.option-94 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 154px;
  position: relative;
}

.label-500 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}
</style>
