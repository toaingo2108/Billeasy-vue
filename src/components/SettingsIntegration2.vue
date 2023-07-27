<template>
  <div class="container-center-horizontal">
    <form class="settings-u47-integration2 screen" name="form19" action="form19" method="post">
      <left-navigation-menu11 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-146">
        <div class="flex-col-147">
          <top-navigation
            :className="topNavigationProps.className"
            :languageProps="topNavigationProps.languageProps"
            :userProfileProps="topNavigationProps.userProfileProps"
          />
          <h1 class="page-header-48 poppins-semi-bold-ebony-28px">
            <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
          </h1>
          <div class="tab-28">
            <tab-menu322 :className="tabMenu3Props.className" />
            <tab-menu282 :className="tabMenuProps.className" />
            <div class="tab-menu-85">
              <div class="flex-row-110">
                <img class="settings-143" :src="settings" alt="Settings" />
                <div class="label-304 poppins-medium-caribbean-green-14px">
                  <span class="poppins-medium-caribbean-green-14px">{{ spanText2 }}</span>
                </div>
              </div>
              <div class="rectangle-6502-36"></div>
            </div>
          </div>
          <img class="line-701-35" :src="line701" alt="Line 701" />
        </div>
        <div class="flex-row-111">
          <img class="emoji" :src="emoji" alt="Emoji" />
          <div class="flex-col-148">
            <div class="page-header-49 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText3 }}</span>
            </div>
            <p class="page-header-50 poppins-normal-ebony-16px">
              <span class="poppins-normal-ebony-16px">{{ spanText4 }}</span>
            </p>
            <a href="javascript:SubmitForm('form19')">
              <div class="button-162">
                <div class="text-254 poppins-medium-white-14px">
                  <span class="poppins-medium-white-14px">{{ spanText5 }}</span>
                </div>
                <img class="chevron-right-7" :src="chevronRight" alt="Chevron Right" /></div
            ></a>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu11 from "./LeftNavigationMenu11";
import TopNavigation from "./TopNavigation";
import TabMenu322 from "./TabMenu322";
import TabMenu282 from "./TabMenu282";
export default {
  name: "SettingsIntegration2",
  components: {
    LeftNavigationMenu11,
    TopNavigation,
    TabMenu322,
    TabMenu282,
  },
  props: [
    "spanText1",
    "settings",
    "spanText2",
    "line701",
    "emoji",
    "spanText3",
    "spanText4",
    "spanText5",
    "chevronRight",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "tabMenu3Props",
    "tabMenuProps",
  ],
};
</script>

<style>
.settings-u47-integration2 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-146 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 158px;
  min-height: 650px;
  width: 1216px;
}

.flex-col-147 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 209px;
  position: relative;
  width: 1216px;
}

.page-header-48 {
  letter-spacing: 0;
  line-height: 40px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.tab-28 {
  height: 40px;
  margin-left: 32px;
  margin-top: 33px;
  position: relative;
  width: 632px;
}

.tab-menu-85 {
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

.flex-row-110 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-left: 0;
  margin-top: 9px;
  min-width: 156px;
}

.settings-143 {
  height: 18px;
  width: 18px;
}

.label-304 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 132px;
  white-space: nowrap;
}

.rectangle-6502-36 {
  background-color: var(--caribbean-green);
  height: 2px;
  margin-left: 0.33px;
  width: 211px;
}

.line-701-35 {
  align-self: center;
  height: 1px;
  width: 1152px;
}

.flex-row-111 {
  align-items: flex-start;
  display: flex;
  gap: 64px;
  height: 283px;
  min-width: 632px;
}

.emoji {
  height: 136px;
  width: 136px;
}

.flex-col-148 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 281px;
  width: 432px;
}

.page-header-49 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.page-header-50 {
  letter-spacing: 0;
  line-height: 32px;
  margin-top: 24px;
  min-height: 96px;
  width: 432px;
}

.button-162 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  box-shadow: 0px 10px 40px -10px #20c39d;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 48px;
  margin-top: 73px;
  overflow: hidden;
  padding: 12.5px 27px;
  transition: all 0.15s ease;
  width: 200px;
}

.button-162:hover {
  transform: translate(0, -5px);
}

.text-254 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 118px;
  text-align: center;
}

.chevron-right-7 {
  align-self: center;
  height: 20px;
  width: 20px;
}
</style>
