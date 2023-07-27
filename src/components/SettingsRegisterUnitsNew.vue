<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-register-u47-units-u47-new screen">
      <div class="overlap-group-9">
        <left-navigation-menu v-bind="leftNavigationMenuProps" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-10 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <frame26454 />
        <frame25484
          :header8Props="frame25484Props.header8Props"
          :button4Props="frame25484Props.button4Props"
          :bottomSection2Props="frame25484Props.bottomSection2Props"
        />
        <div class="overlay-5">
          <div class="new-unit">
            <div class="title-32 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
            <div class="input-field-5">
              <div class="label-78 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span
                ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText4 }}</span>
              </div>
              <div class="input-26">
                <input
                  class="input-text-32 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder1"
                  :type="inputType1"
                />
              </div>
            </div>
            <div class="input-field-6">
              <div class="label-78 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span>
              </div>
              <div class="input-27">
                <input
                  class="input-text-32 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder2"
                  :type="inputType2"
                />
              </div>
            </div>
            <bottom-section4 :check="bottomSection4Props.check" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu from "./LeftNavigationMenu";
import TopNavigation from "./TopNavigation";
import Frame26454 from "./Frame26454";
import Frame25484 from "./Frame25484";
import BottomSection4 from "./BottomSection4";
export default {
  name: "SettingsRegisterUnitsNew",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame26454,
    Frame25484,
    BottomSection4,
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
    "leftNavigationMenuProps",
    "topNavigationProps",
    "frame25484Props",
    "bottomSection4Props",
  ],
};
</script>

<style>
.settings-u47-register-u47-units-u47-new {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-9 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.page-header-10 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-5 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 248px 408px;
  position: absolute;
  top: 0;
}

.new-unit {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 432px;
  overflow: hidden;
  position: relative;
  width: 400px;
}

.title-32 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.input-field-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 41px;
  min-height: 66px;
  width: 336px;
}

.label-78 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 336px;
}

.input-26 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-32 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-32::placeholder {
  color: #0d0d1d99;
}

.input-field-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 104px;
  width: 336px;
}

.input-27 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 78px;
  overflow: hidden;
  padding: 9px 12px;
  width: 336px;
}
</style>
