<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-register-u47-units-u47-import2 screen">
      <div class="overlap-group-17">
        <left-navigation-menu v-bind="leftNavigationMenuProps" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-32 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <frame26454 />
        <frame25484
          :header8Props="frame2548Props.header8Props"
          :button4Props="frame2548Props.button4Props"
          :bottomSection2Props="frame2548Props.bottomSection2Props"
        />
        <div class="overlay-11">
          <div class="import-units-1">
            <div class="flex-row-45">
              <div class="flex-col-62">
                <div class="title-65 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                </div>
                <div class="label-181 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText3 }}</span>
                </div>
              </div>
              <dropdown52 :spanText="dropdown5Props.spanText" :className="dropdown5Props.className" />
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
import LeftNavigationMenu from "./LeftNavigationMenu";
import TopNavigation from "./TopNavigation";
import Frame26454 from "./Frame26454";
import Frame25484 from "./Frame25484";
import Dropdown52 from "./Dropdown52";
import BottomSection322 from "./BottomSection322";
export default {
  name: "SettingsRegisterUnitsImport2",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame26454,
    Frame25484,
    Dropdown52,
    BottomSection322,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "frame2548Props",
    "dropdown5Props",
    "bottomSection322Props",
  ],
};
</script>

<style>
.settings-u47-register-u47-units-u47-import2 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-17 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.page-header-32 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-11 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 243px 296px;
  position: absolute;
  top: 0;
}

.import-units-1 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 276px;
  overflow: hidden;
  position: relative;
  width: 624px;
}

.flex-row-45 {
  align-items: flex-start;
  display: flex;
  gap: 97px;
  height: 109px;
  margin-left: 32px;
  margin-top: 31px;
  min-width: 414px;
  position: relative;
}

.flex-col-62 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 48px;
  min-height: 100px;
  width: 125px;
}

.title-65 {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.label-181 {
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}
</style>
