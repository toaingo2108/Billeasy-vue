<template>
  <div class="container-center-horizontal">
    <form class="products-u47-import-u45-accounting screen" name="form123" action="form123" method="post">
      <div class="overlap-group-86">
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
        <div class="scroll-bar-47"></div>
        <h1 class="page-header-121 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="overlay-37">
          <div class="import-products-2">
            <div class="flex-row-330">
              <div class="flex-col-285">
                <div class="import-products-3 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                </div>
                <div class="label-563 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText3 }}</span>
                </div>
                <div class="label-564 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText4 }}</span>
                </div>
              </div>
              <div class="flex-col-286">
                <dropdown52 :spanText="dropdown5Props.spanText" />
                <div class="products-to-import-2">
                  <div class="option-98">
                    <div class="radio-button-24"></div>
                    <div class="label-562 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText5 }}</span>
                    </div>
                  </div>
                  <div class="option-99">
                    <radio-button />
                    <div class="label-562 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText6 }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-section-110">
              <img class="top-border-121" :src="topBorder" alt="Top Border" />
              <div class="buttons-83">
                <a href="javascript:SubmitForm('form123')">
                  <div class="button-321">
                    <div class="text-460 poppins-medium-ebony-14px">
                      <span class="poppins-medium-ebony-14px">{{ spanText7 }}</span>
                    </div>
                  </div></a
                ><a href="javascript:SubmitForm('form123')">
                  <div class="button-322">
                    <img class="upload-37" :src="upload" alt="Upload" />
                    <div class="text-461 poppins-medium-white-14px">
                      <span class="poppins-medium-white-14px">{{ spanText8 }}</span>
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
import Dropdown52 from "./Dropdown52";
import RadioButton from "./RadioButton";
export default {
  name: "ProductsImportAccounting",
  components: {
    Table11,
    LeftNavigationMenu10,
    TopNavigation,
    Actions6,
    BottomSection92,
    Dropdown52,
    RadioButton,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
    "topBorder",
    "spanText7",
    "upload",
    "spanText8",
    "table11Props",
    "leftNavigationMenu10Props",
    "topNavigationProps",
    "actions6Props",
    "bottomSection92Props",
    "dropdown5Props",
  ],
};
</script>

<style>
.products-u47-import-u45-accounting {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-86 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.scroll-bar-47 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 310px;
  width: 12px;
}

.page-header-121 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-37 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 176px 296px;
  position: absolute;
  top: 0;
}

.import-products-2 {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  gap: 54px;
  height: 350px;
  overflow: hidden;
  width: 624px;
}

.flex-row-330 {
  align-items: flex-start;
  display: flex;
  gap: 58px;
  height: 169px;
  margin-right: 47px;
  margin-top: 31px;
  min-width: 513px;
}

.flex-col-285 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 168px;
  width: 164px;
}

.import-products-3 {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.label-563 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 48px;
  white-space: nowrap;
}

.label-564 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 44px;
  white-space: nowrap;
}

.flex-col-286 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 36px;
  min-height: 100px;
  position: relative;
  width: 291px;
}

.products-to-import-2 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  min-width: 291px;
}

.option-98 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 112px;
}

.radio-button-24 {
  align-self: center;
  background-color: var(--white);
  border-radius: 100px;
  height: 18px;
  width: 18px;
}

.label-562 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-99 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 139px;
  position: relative;
}

.bottom-section-110 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  width: 624px;
}

.top-border-121 {
  height: 1px;
  width: 624px;
}

.buttons-83 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 212px;
}

.button-321 {
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

.button-321:hover,
.button-322:hover {
  transform: translate(0, -5px);
}

.text-460 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 51px;
  text-align: center;
}

.button-322 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 100px;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
}

.upload-37 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-461 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 48px;
  text-align: center;
}
</style>
