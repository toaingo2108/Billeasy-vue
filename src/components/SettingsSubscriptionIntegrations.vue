<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-subscription-u47-integrations screen">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-25">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-18">
          <div class="flex-col-26">
            <h1 class="page-header-15 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <frame264532 :className="header18Props.className" />
          </div>
          <div class="frame-2548-12">
            <div class="flex-col-27">
              <header18
                :spanText="header18Props2.spanText"
                :className="header18Props2.className"
                :frame2443Props="header18Props2.frame2443Props"
              />
              <div class="tab-2">
                <tab-menu9 />
                <tab-menu10 />
                <tab-menu11 />
              </div>
              <img class="line-701-9" :src="line701" alt="Line 701" />
              <div class="frame-2661">
                <div class="frame-container">
                  <frame2659 />
                  <div class="frame-2660">
                    <div class="activated poppins-normal-comet-14px">
                      <span class="poppins-normal-comet-14px">{{ spanText2 }}</span>
                    </div>
                  </div>
                  <frame2661 :children="frame2661Props.children" />
                </div>
              </div>
              <div class="frame-2669">
                <frame2666
                  :frame26641Props="frame26661Props.frame26641Props"
                  :frame26642Props="frame26661Props.frame26642Props"
                />
                <frame2666
                  :className="frame26662Props.className"
                  :frame26641Props="frame26662Props.frame26641Props"
                  :frame26642Props="frame26662Props.frame26642Props"
                />
                <frame2666
                  :className="frame26663Props.className"
                  :frame26641Props="frame26663Props.frame26641Props"
                  :frame26642Props="frame26663Props.frame26642Props"
                />
              </div>
            </div>
            <div class="scroll-bar-9"></div>
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
import Header18 from "./Header18";
import TabMenu9 from "./TabMenu9";
import TabMenu10 from "./TabMenu10";
import TabMenu11 from "./TabMenu11";
import Frame2659 from "./Frame2659";
import Frame2661 from "./Frame2661";
import Frame2666 from "./Frame2666";
export default {
  name: "SettingsSubscriptionIntegrations",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame264532,
    Header18,
    TabMenu9,
    TabMenu10,
    TabMenu11,
    Frame2659,
    Frame2661,
    Frame2666,
  },
  props: [
    "spanText1",
    "line701",
    "spanText2",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "header18Props",
    "header18Props2",
    "frame2661Props",
    "frame26661Props",
    "frame26662Props",
    "frame26663Props",
  ],
};
</script>

<style>
.settings-u47-subscription-u47-integrations {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-25 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 928px;
  position: relative;
  width: 1216px;
}

.flex-row-18 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 833px;
  min-width: 1152px;
}

.flex-col-26 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  position: relative;
  width: 184px;
}

.page-header-15 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2548-12 {
  align-items: center;
  align-self: flex-end;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  gap: 20px;
  height: 832px;
  overflow: hidden;
  width: 928px;
}

.flex-col-27 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  margin-bottom: -408px;
  margin-left: 32px;
  min-height: 1216px;
  position: relative;
  width: 864px;
}

.tab-2 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  margin-top: 40px;
  min-width: 388px;
  position: relative;
}

.line-701-9 {
  height: 1px;
  width: 864px;
}

.frame-2661 {
  align-items: flex-start;
  border-radius: 10px;
  display: flex;
  margin-top: 31px;
  overflow: hidden;
  width: 275px;
}

.frame-container {
  height: 40px;
  position: relative;
  width: 275px;
}

.frame-2660 {
  align-items: flex-start;
  background-color: var(--white);
  cursor: pointer;
  display: flex;
  height: 40px;
  left: 49px;
  min-width: 100px;
  padding: 8.5px 16px;
  position: absolute;
  top: 0;
  transition: all 0.15s ease;
}

.frame-2660:hover {
  transform: translate(0, -5px);
  box-shadow: 0px 12px 5px -8px rgba(0, 0, 0, 0.2);
}

.activated {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
}

.frame-2669 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;
  min-height: 996px;
  position: relative;
  width: 864px;
}

.scroll-bar-9 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 208px;
  width: 12px;
}
</style>
