<template>
  <div class="container-center-horizontal">
    <form class="products-u47-new-category screen" name="form119" action="form119" method="post">
      <div class="overlap-group-84">
        <table11 v-bind="table11Props" />
        <left-navigation-menu10 v-bind="leftNavigationMenu10Props" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <actions6 :searchProps="actions6Props.searchProps" :buttons5Props="actions6Props.buttons5Props" />
        <bottom-section92
          :className="bottomSection92Props.className"
          :iconButtonProps="bottomSection92Props.iconButtonProps"
          :paginationProps="bottomSection92Props.paginationProps"
        />
        <div class="scroll-bar-45"></div>
        <h1 class="page-header-119 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="overlay-35">
          <div class="new-product-category">
            <div class="title-207 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
            <div class="input-field-105">
              <div class="label-559 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span
                ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText4 }}</span>
              </div>
              <div class="input-208">
                <input
                  class="input-text-311 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder1"
                  :type="inputType1"
                />
              </div>
            </div>
            <div class="input-field-106">
              <div class="label-559 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span>
              </div>
              <div class="input-209">
                <input
                  class="input-text-312 poppins-normal-manatee-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder2"
                  :type="inputType2"
                />
              </div>
            </div>
            <div class="bottom-section-108">
              <img class="top-border-119" :src="topBorder" alt="Top Border" />
              <div class="buttons-81">
                <a href="javascript:SubmitForm('form119')">
                  <div class="button-317">
                    <div class="text-456 poppins-medium-ebony-14px">
                      <span class="poppins-medium-ebony-14px">{{ spanText6 }}</span>
                    </div>
                  </div></a
                ><a href="javascript:SubmitForm('form119')">
                  <div class="button-318">
                    <img class="check-182" :src="check" alt="Check" />
                    <div class="text-457 poppins-medium-white-14px">
                      <span class="poppins-medium-white-14px">{{ spanText7 }}</span>
                    </div>
                  </div></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Table11 from "./Table11";
import LeftNavigationMenu10 from "./LeftNavigationMenu10";
import TopNavigation from "./TopNavigation";
import Actions6 from "./Actions6";
import BottomSection92 from "./BottomSection92";
export default {
  name: "ProductsNewCategory",
  components: {
    Table11,
    LeftNavigationMenu10,
    TopNavigation,
    Actions6,
    BottomSection92,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "inputType1",
    "inputPlaceholder1",
    "spanText5",
    "inputType2",
    "inputPlaceholder2",
    "topBorder",
    "spanText6",
    "check",
    "spanText7",
    "table11Props",
    "leftNavigationMenu10Props",
    "topNavigationProps",
    "actions6Props",
    "bottomSection92Props",
  ],
};
</script>

<style>
.products-u47-new-category {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-84 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.scroll-bar-45 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 310px;
  width: 12px;
}

.page-header-119 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-35 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 256px 408px;
  position: absolute;
  top: 0;
}

.new-product-category {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 432px;
  overflow: hidden;
  width: 400px;
}

.title-207 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.input-field-105 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 41px;
  min-height: 66px;
  width: 336px;
}

.label-559 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 336px;
}

.input-208 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-311,
.input-text-312 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-311::placeholder {
  color: #0d0d1d99;
}

.input-field-106 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 120px;
  width: 336px;
}

.input-209 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 94px;
  overflow: hidden;
  padding: 9px 12px;
  width: 336px;
}

.input-text-312::placeholder {
  color: #8a8aa899;
}

.bottom-section-108 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 26px;
  width: 400px;
}

.top-border-119 {
  height: 1px;
  width: 400px;
}

.buttons-81 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 216px;
}

.button-317 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 40px;
  min-width: 104px;
  padding: 8.5px 26.5px;
  transition: all 0.15s ease;
}

.button-317:hover,
.button-318:hover {
  transform: translate(0, -5px);
}

.text-456 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 51px;
  text-align: center;
}

.button-318 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 104px;
  padding: 8.5px 20.5px;
  transition: all 0.15s ease;
}

.check-182 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-457 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}
</style>
