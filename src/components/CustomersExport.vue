<template>
  <div class="container-center-horizontal">
    <form class="customers-u47-export screen" name="form81" action="form81" method="post">
      <div class="overlap-group-68">
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
        <div class="scroll-bar-38"></div>
        <h1 class="page-header-95 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="overlay-27">
          <div class="export-details">
            <div class="flex-row-222">
              <div class="flex-col-221">
                <div class="title-110 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                </div>
                <div class="field-to-include-in-export">
                  <p class="label-491 poppins-semi-bold-ebony-14px">
                    <span class="poppins-semi-bold-ebony-14px">{{ spanText3 }}</span>
                  </p>
                  <div class="options-8">
                    <options2 v-bind="options2Props" />
                    <div class="options-9">
                      <option16 :spanText="option161Props.spanText" :checkboxProps="option161Props.checkboxProps" />
                      <option16 :spanText="option162Props.spanText" :checkboxProps="option162Props.checkboxProps" />
                      <option16 :spanText="option163Props.spanText" :checkboxProps="option163Props.checkboxProps" />
                      <option17 :children="option171Props.children" />
                      <option17 :children="option172Props.children" />
                      <option17 :children="option173Props.children" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="sort-export-on">
                <div class="label-492 poppins-semi-bold-ebony-14px">
                  <span class="poppins-semi-bold-ebony-14px">{{ spanText4 }}</span>
                </div>
                <div class="options-10">
                  <option17 :children="option174Props.children" :className="option174Props.className" />
                  <div class="option-89">
                    <radio-button />
                    <div class="label-493 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText5 }}</span>
                    </div>
                  </div>
                  <option17 :children="option175Props.children" :className="option175Props.className" />
                  <option17 :children="option176Props.children" :className="option176Props.className" />
                </div>
              </div>
            </div>
            <div class="bottom-section-102">
              <img class="top-border-112" :src="topBorder" alt="Top Border" />
              <div class="buttons-67">
                <a href="javascript:SubmitForm('form81')">
                  <div class="button-281">
                    <div class="text-415 poppins-medium-ebony-14px">
                      <span class="poppins-medium-ebony-14px">{{ spanText6 }}</span>
                    </div>
                  </div></a
                ><a href="javascript:SubmitForm('form81')">
                  <div class="button-282">
                    <img class="export-20" :src="xexport" alt="Export" />
                    <div class="text-416 poppins-medium-white-14px">
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
import Table9 from "./Table9";
import LeftNavigationMenu5 from "./LeftNavigationMenu5";
import TopNavigation from "./TopNavigation";
import Actions5 from "./Actions5";
import xButton19 from "./xButton19";
import BottomSection92 from "./BottomSection92";
import Options2 from "./Options2";
import Option16 from "./Option16";
import Option17 from "./Option17";
import RadioButton from "./RadioButton";
export default {
  name: "CustomersExport",
  components: {
    Table9,
    LeftNavigationMenu5,
    TopNavigation,
    Actions5,
    xButton19,
    BottomSection92,
    Options2,
    Option16,
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
    "table9Props",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "actions5Props",
    "buttonProps",
    "bottomSection92Props",
    "options2Props",
    "option161Props",
    "option162Props",
    "option163Props",
    "option171Props",
    "option172Props",
    "option173Props",
    "option174Props",
    "option175Props",
    "option176Props",
  ],
};
</script>

<style>
.customers-u47-export {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-68 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.scroll-bar-38 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 310px;
  width: 12px;
}

.page-header-95 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-27 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-end;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 211px 184px;
  position: absolute;
  top: 0;
}

.export-details {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 544px;
  overflow: hidden;
  width: 848px;
}

.flex-row-222 {
  align-items: center;
  display: flex;
  gap: 48px;
  height: 390px;
  margin-right: 4px;
  margin-top: 31px;
  min-width: 780px;
}

.flex-col-221 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 390px;
  width: 492px;
}

.title-110 {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.field-to-include-in-export {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 25px;
  min-height: 321px;
  width: 492px;
}

.label-491 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  width: 492px;
}

.options-8 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 276px;
  min-width: 492px;
  position: relative;
}

.options-9 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 204px;
  position: relative;
  width: 240px;
}

.sort-export-on {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 75px;
  min-height: 177px;
  width: 240px;
}

.label-492 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  width: 240px;
}

.options-10 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 132px;
  position: relative;
  width: 240px;
}

.option-89 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 240px;
  position: relative;
}

.label-493 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  width: 210px;
}

.bottom-section-102 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  width: 848px;
}

.top-border-112 {
  height: 1px;
  width: 848px;
}

.buttons-67 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 208px;
}

.button-281 {
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

.button-281:hover,
.button-282:hover {
  transform: translate(0, -5px);
}

.text-415 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 51px;
  text-align: center;
}

.button-282 {
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

.export-20 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-416 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 44px;
  text-align: center;
}
</style>
