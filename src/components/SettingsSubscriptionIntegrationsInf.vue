<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-subscription-u47-integrations-u47-info screen">
      <div class="overlap-group1-5">
        <left-navigation-menu v-bind="leftNavigationMenuProps" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-16 poppins-semi-bold-ebony-28px">
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
        <div class="overlay-8">
          <div class="fortnox-billeasy-integration">
            <div class="title-35 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
            <p class="input-text-47 poppins-normal-comet-14px">
              <span class="poppins-normal-comet-14px">{{ spanText3 }}</span>
            </p>
            <p class="input-text-48 poppins-normal-comet-14px">
              <span class="poppins-normal-comet-14px">{{ spanText4 }}</span>
            </p>
            <div class="flex-row-19">
              <checkbox :className="checkboxProps.className" />
              <p class="label-113 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText5 }}</span>
              </p>
            </div>
            <div class="bottom-section-22">
              <img class="top-border-25" :src="topBorder" alt="Top Border" />
              <div class="buttons-31">
                <button222 />
                <button3
                  :add="button3Props.add"
                  :spanText="button3Props.spanText"
                  :className="button3Props.className"
                />
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
import Checkbox from "./Checkbox";
import Button222 from "./Button222";
import Button3 from "./Button3";
export default {
  name: "SettingsSubscriptionIntegrationsInf",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame264532,
    Frame25483,
    Checkbox,
    Button222,
    Button3,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "topBorder",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "frame25483Props",
    "checkboxProps",
    "button3Props",
  ],
};
</script>

<style>
.settings-u47-subscription-u47-integrations-u47-info {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group1-5 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.page-header-16 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-8 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-end;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 131px 248px;
  position: absolute;
  top: 0;
}

.fortnox-billeasy-integration {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 704px;
  overflow: hidden;
  width: 720px;
}

.title-35 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.input-text-47 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 12px;
  width: 656px;
}

.input-text-48 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 40px;
  min-height: 312px;
  width: 656px;
}

.flex-row-19 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 72px;
  margin-top: 40px;
  min-width: 656px;
  position: relative;
}

.label-113 {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 72px;
  width: 626px;
}

.bottom-section-22 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 49px;
  width: 720px;
}

.top-border-25 {
  height: 1px;
  width: 720px;
}

.buttons-31 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-right: 32px;
  min-width: 223px;
  position: relative;
}
</style>
