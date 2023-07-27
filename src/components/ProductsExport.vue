<template>
  <div class="container-center-horizontal">
    <form class="products-u47-export screen" name="form121" action="form121" method="post">
      <div class="overlap-group-85">
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
        <div class="scroll-bar-46"></div>
        <h1 class="page-header-120 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="overlay-36">
          <div class="export-details-1">
            <div class="flex-row-329">
              <div class="flex-col-284">
                <div class="title-208 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                </div>
                <div class="field-to-include-in-export-1">
                  <p class="label-560 poppins-semi-bold-ebony-14px">
                    <span class="poppins-semi-bold-ebony-14px">{{ spanText3 }}</span>
                  </p>
                  <options2 v-bind="options2Props" />
                </div>
              </div>
              <div class="sort-export-on-1">
                <div class="label-560 poppins-semi-bold-ebony-14px">
                  <span class="poppins-semi-bold-ebony-14px">{{ spanText4 }}</span>
                </div>
                <div class="options-13">
                  <option17 :children="option171Props.children" :className="option171Props.className" />
                  <div class="option-97">
                    <radio-button />
                    <div class="label-561 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText5 }}</span>
                    </div>
                  </div>
                  <option17 :children="option172Props.children" :className="option172Props.className" />
                  <option17 :children="option173Props.children" :className="option173Props.className" />
                </div>
              </div>
            </div>
            <div class="bottom-section-109">
              <img class="top-border-120" :src="topBorder" alt="Top Border" />
              <div class="buttons-82">
                <a href="javascript:SubmitForm('form121')">
                  <div class="button-319">
                    <div class="text-458 poppins-medium-ebony-14px">
                      <span class="poppins-medium-ebony-14px">{{ spanText6 }}</span>
                    </div>
                  </div></a
                ><a href="javascript:SubmitForm('form121')">
                  <div class="button-320">
                    <img class="export-21" :src="xexport" alt="Export" />
                    <div class="text-459 poppins-medium-white-14px">
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
import Options2 from "./Options2";
import Option17 from "./Option17";
import RadioButton from "./RadioButton";
export default {
  name: "ProductsExport",
  components: {
    Table11,
    LeftNavigationMenu10,
    TopNavigation,
    Actions6,
    BottomSection92,
    Options2,
    Option17,
    RadioButton,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "topBorder",
    "spanText6",
    "xexport",
    "spanText7",
    "table11Props",
    "leftNavigationMenu10Props",
    "topNavigationProps",
    "actions6Props",
    "bottomSection92Props",
    "options2Props",
    "option171Props",
    "option172Props",
    "option173Props",
  ],
};
</script>

<style>
.products-u47-export {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-85 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.scroll-bar-46 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 310px;
  width: 12px;
}

.page-header-120 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-36 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-end;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 211px 312px;
  position: absolute;
  top: 0;
}

.export-details-1 {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 544px;
  overflow: hidden;
  width: 592px;
}

.flex-row-329 {
  align-items: center;
  display: flex;
  gap: 48px;
  height: 390px;
  margin-top: 31px;
  min-width: 528px;
}

.flex-col-284 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 390px;
  width: 240px;
}

.title-208 {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.field-to-include-in-export-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 25px;
  min-height: 321px;
  position: relative;
  width: 240px;
}

.label-560 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  width: 240px;
}

.sort-export-on-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 75px;
  min-height: 177px;
  width: 240px;
}

.options-13 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 132px;
  position: relative;
  width: 240px;
}

.option-97 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 240px;
  position: relative;
}

.label-561 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  width: 210px;
}

.bottom-section-109 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  width: 592px;
}

.top-border-120 {
  height: 1px;
  width: 592px;
}

.buttons-82 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 208px;
}

.button-319 {
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

.button-319:hover,
.button-320:hover {
  transform: translate(0, -5px);
}

.text-458 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 51px;
  text-align: center;
}

.button-320 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 96px;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
}

.export-21 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-459 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 44px;
  text-align: center;
}
</style>
