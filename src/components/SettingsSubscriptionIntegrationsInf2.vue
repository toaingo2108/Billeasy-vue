<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-subscription-u47-integrations-u47-info2 screen">
      <div class="overlap-group1-6">
        <left-navigation-menu v-bind="leftNavigationMenuProps" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-17 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <frame264532 />
        <frame25483
          :header18Props="frame25483Props.header18Props"
          :tabMenu11Props="frame25483Props.tabMenu11Props"
          :frame2661Props="frame25483Props.frame2661Props"
          :frame26661Props="frame25483Props.frame26661Props"
          :frame26662Props="frame25483Props.frame26662Props"
          :frame26663Props="frame25483Props.frame26663Props"
        />
        <div class="overlay-9">
          <div class="confirm-integration-inactivation">
            <div class="title-36 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
            <p class="input-text-49 poppins-normal-comet-14px">
              <span class="span0">{{ spanText3 }}</span
              ><span class="poppins-normal-comet-14px">{{ spanText4 }}</span>
            </p>
            <p class="input-text-50 poppins-normal-comet-14px">
              <span class="poppins-normal-comet-14px">{{ spanText5 }}</span>
            </p>
            <div class="bottom-section-23">
              <img class="top-border-26" :src="topBorder" alt="Top Border" />
              <div class="buttons-32">
                <button222 />
                <div class="button-104">
                  <img class="check-148" :src="check" alt="Check" />
                  <div class="text-188 poppins-medium-white-14px">
                    <span class="poppins-medium-white-14px">{{ spanText6 }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu from "./LeftNavigationMenu";
import TopNavigation from "./TopNavigation";
import Frame264532 from "./Frame264532";
import Frame25483 from "./Frame25483";
import Button222 from "./Button222";
export default {
  name: "SettingsSubscriptionIntegrationsInf2",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame264532,
    Frame25483,
    Button222,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "topBorder",
    "check",
    "spanText6",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "frame25483Props",
  ],
};
</script>

<style>
.settings-u47-subscription-u47-integrations-u47-info2 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group1-6 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.page-header-17 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-9 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-end;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 339px 312px;
  position: absolute;
  top: 0;
}

.confirm-integration-inactivation {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 288px;
  overflow: hidden;
  width: 592px;
}

.title-36 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.input-text-49 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 12px;
  min-height: 48px;
  width: 528px;
}

.span0 {
  color: var(--comet);
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-l);
  font-weight: 600;
}

.input-text-50 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 16px;
  width: 528px;
}

.bottom-section-23 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 33px;
  width: 592px;
}

.top-border-26 {
  height: 1px;
  width: 592px;
}

.buttons-32 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 222px;
  position: relative;
}

.button-104 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 110px;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
}

.button-104:hover {
  transform: translate(0, -5px);
}

.check-148 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-188 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 58px;
  text-align: center;
}
</style>
