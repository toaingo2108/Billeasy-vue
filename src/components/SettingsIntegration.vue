<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-integration screen">
      <left-navigation-menu11 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-145">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-47 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="tab-27">
          <tab-menu322 />
          <tab-menu282 />
          <div class="tab-menu-84">
            <div class="flex-row-107">
              <img class="settings-142" :src="settings" alt="Settings" />
              <div class="label-303 poppins-medium-caribbean-green-14px">
                <span class="poppins-medium-caribbean-green-14px">{{ spanText2 }}</span>
              </div>
            </div>
            <div class="rectangle-6502-35"></div>
          </div>
        </div>
        <img class="line-701-34" :src="line701" alt="Line 701" />
        <div class="frame-2542">
          <img class="info-4" :src="info1" alt="Info" />
          <p class="here-you-can-edit-yo poppins-normal-ebony-14px">
            <span class="poppins-normal-ebony-14px">{{ spanText3 }}</span>
          </p>
        </div>
        <div class="integration-container">
          <div class="integration">
            <div class="flex-row-108">
              <img class="image-202-3" :src="image202" alt="image 202" />
              <div class="fortnox-3 poppins-semi-bold-ebony-20px">
                <span class="poppins-semi-bold-ebony-20px">{{ spanText4 }}</span>
              </div>
              <img class="info-5" :src="info2" alt="Info" />
            </div>
            <button32 />
          </div>
          <integration :button3Props="integration1Props.button3Props" />
          <integration :button3Props="integration2Props.button3Props" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu11 from "./LeftNavigationMenu11";
import TopNavigation from "./TopNavigation";
import TabMenu322 from "./TabMenu322";
import TabMenu282 from "./TabMenu282";
import Button32 from "./Button32";
import Integration from "./Integration";
export default {
  name: "SettingsIntegration",
  components: {
    LeftNavigationMenu11,
    TopNavigation,
    TabMenu322,
    TabMenu282,
    Button32,
    Integration,
  },
  props: [
    "spanText1",
    "settings",
    "spanText2",
    "line701",
    "info1",
    "spanText3",
    "image202",
    "spanText4",
    "info2",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "integration1Props",
    "integration2Props",
  ],
};
</script>

<style>
.settings-u47-integration {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-145 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 472px;
  position: relative;
  width: 1216px;
}

.page-header-47 {
  letter-spacing: 0;
  line-height: 40px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.tab-27 {
  height: 40px;
  margin-left: 32px;
  margin-top: 33px;
  position: relative;
  width: 632px;
}

.tab-menu-84 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  left: 421px;
  min-height: 40px;
  position: absolute;
  top: 0;
  width: 211px;
}

.flex-row-107 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-left: 0;
  margin-top: 9px;
  min-width: 156px;
}

.settings-142 {
  height: 18px;
  width: 18px;
}

.label-303 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 132px;
  white-space: nowrap;
}

.rectangle-6502-35 {
  background-color: var(--caribbean-green);
  height: 2px;
  margin-left: 0.33px;
  width: 211px;
}

.line-701-34 {
  align-self: center;
  height: 1px;
  width: 1152px;
}

.frame-2542 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 18px;
  display: flex;
  gap: 16px;
  height: 56px;
  margin-left: 32px;
  margin-top: 39px;
  overflow: hidden;
  padding: 14px 16px;
  width: 480px;
}

.info-4 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.here-you-can-edit-yo {
  letter-spacing: 0;
  line-height: 26px;
  width: 412px;
}

.integration-container {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  margin-left: 32px;
  margin-top: 40px;
  min-width: 768px;
  position: relative;
}

.integration {
  align-items: center;
  background-color: var(--white);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 19px;
  height: 128px;
  overflow: hidden;
  padding: 23px 0;
  position: relative;
  width: 240px;
}

.flex-row-108 {
  align-items: flex-start;
  display: flex;
  height: 25px;
  min-width: 192px;
}

.image-202-3 {
  align-self: flex-end;
  height: 24px;
  object-fit: cover;
  width: 24px;
}

.fortnox-3 {
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 16px;
  min-width: 76px;
  white-space: nowrap;
}

.info-5 {
  align-self: center;
  height: 20px;
  margin-left: 56px;
  margin-top: 1px;
  width: 20px;
}
</style>
