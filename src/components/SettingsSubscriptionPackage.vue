<template>
  <div class="container-center-horizontal">
    <form class="settings-u47-subscription-u47-package screen" name="form1" action="form1" method="post">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-33">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-21">
          <div class="flex-col-34">
            <h1 class="page-header-19 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <frame264532 :className="frame2652Props.className" />
          </div>
          <div class="frame-2548-16">
            <header18 :spanText="headerProps.spanText" :frame2443Props="headerProps.frame2443Props" />
            <div class="tab-5">
              <tab-menu />
              <tab-menu10 />
              <tab-menu35 />
            </div>
            <img class="line-701-12" :src="line701" alt="Line 701" />
            <div class="flex-row-22">
              <div class="label-123 poppins-medium-manatee-14px">
                <span class="poppins-medium-manatee-14px">{{ spanText7 }}</span
                ><span class="poppins-semi-bold-ebony-14px">{{ spanText13 }}</span>
              </div>
              <div class="button-115">
                <div class="text-198 poppins-medium-caribbean-green-14px">
                  <span class="poppins-medium-caribbean-green-14px">{{ spanText2 }}</span>
                </div>
              </div>
            </div>
            <div class="frame-2652-2">
              <frame26483
                :spanText1="frame26481Props.spanText1"
                :spanText2="frame26481Props.spanText2"
                :frame2652Props="frame26481Props.frame2652Props"
              />
              <frame26483
                :spanText1="frame26482Props.spanText1"
                :spanText2="frame26482Props.spanText2"
                :className="frame26482Props.className"
                :frame2652Props="frame26482Props.frame2652Props"
              />
              <div class="frame-2653-1 poppins-semi-bold-ebony-18px">
                <div class="title-38">
                  <span class="poppins-semi-bold-ebony-18px">{{ spanText3 }}</span>
                </div>
                <frame2652
                  :frame25781Props="frame2652Props2.frame25781Props"
                  :frame25782Props="frame2652Props2.frame25782Props"
                  :frame25801Props="frame2652Props2.frame25801Props"
                  :frame25802Props="frame2652Props2.frame25802Props"
                />
                <div class="title-39">
                  <span class="poppins-semi-bold-ebony-28px">{{ spanText6 }}</span
                  ><span class="poppins-semi-bold-ebony-18px">{{ spanText17 }}</span
                  ><span class="poppins-medium-manatee-14px">{{ spanText18 }}</span>
                </div>
                <frame2656 />
              </div>
              <frame26483
                :spanText1="frame26483Props.spanText1"
                :spanText2="frame26483Props.spanText2"
                :className="frame26483Props.className"
                :frame2652Props="frame26483Props.frame2652Props"
              />
            </div>
            <div class="bottom-section-24">
              <img class="top-border-27" :src="apply" alt="Top Border" />
              <div class="frame-2526-1">
                <a href="javascript:SubmitForm('form1')">
                  <div class="button-116">
                    <img class="close-circle-1" :src="topBorder" alt="Close-Circle" />
                    <div class="text-199 poppins-medium-alizarin-crimson-14px">
                      <span class="poppins-medium-alizarin-crimson-14px">{{ spanText4 }}</span>
                    </div>
                  </div></a
                ><button2
                  :refresh="button2Props.refresh"
                  :spanText="button2Props.spanText"
                  :className="button2Props.className"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu from "./LeftNavigationMenu";
import TopNavigation from "./TopNavigation";
import Frame264532 from "./Frame264532";
import Header18 from "./Header18";
import TabMenu from "./TabMenu";
import TabMenu10 from "./TabMenu10";
import TabMenu35 from "./TabMenu35";
import Frame26483 from "./Frame26483";
import Frame2652 from "./Frame2652";
import Frame2656 from "./Frame2656";
import Button2 from "./Button2";
export default {
  name: "SettingsSubscriptionPackage",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame264532,
    Header18,
    TabMenu,
    TabMenu10,
    TabMenu35,
    Frame26483,
    Frame2652,
    Frame2656,
    Button2,
  },
  props: [
    "spanText1",
    "line701",
    "spanText7",
    "spanText13",
    "spanText2",
    "spanText3",
    "spanText6",
    "spanText17",
    "spanText18",
    "apply",
    "topBorder",
    "spanText4",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "frame2652Props",
    "headerProps",
    "frame26481Props",
    "frame26482Props",
    "frame2652Props2",
    "frame26483Props",
    "button2Props",
  ],
};
</script>

<style>
.settings-u47-subscription-u47-package {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-33 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 928px;
  position: relative;
  width: 1216px;
}

.flex-row-21 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 833px;
  min-width: 1152px;
}

.flex-col-34 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  position: relative;
  width: 184px;
}

.page-header-19 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2548-16 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 832px;
  overflow: hidden;
  position: relative;
  width: 928px;
}

.tab-5 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  margin-left: 32px;
  margin-top: 40px;
  min-width: 388px;
  position: relative;
}

.line-701-12 {
  align-self: center;
  height: 1px;
  width: 864px;
}

.flex-row-22 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 22px;
  margin-left: 32px;
  margin-top: 30px;
  min-width: 343px;
}

.label-123 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 232px;
  white-space: nowrap;
}

.button-115 {
  align-items: flex-start;
  align-self: flex-end;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 21px;
  min-width: 87px;
  transition: all 0.15s ease;
}

.button-115:hover {
  transform: scale(1.1);
}

.text-198 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 87px;
  text-align: center;
}

.frame-2652-2 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 24px;
  margin-top: 47px;
  min-width: 864px;
  position: relative;
}

.frame-2653-1 {
  align-items: center;
  background-color: var(--white);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  height: 400px;
  overflow: hidden;
  padding: 20px 0;
  position: relative;
  width: 198px;
}

.title-38 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 20px;
  margin-top: 3px;
  white-space: nowrap;
}

.title-39 {
  letter-spacing: 0;
  line-height: 28px;
  margin-right: 37px;
  margin-top: 35px;
  min-width: 121px;
  white-space: nowrap;
}

.bottom-section-24 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 104px;
  width: 928px;
}

.top-border-27 {
  height: 1px;
  width: 928px;
}

.frame-2526-1 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 399px;
  position: relative;
}

.button-116 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 195px;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
}

.button-116:hover {
  transform: translate(0, -5px);
}

.close-circle-1 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-199 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 143px;
  text-align: center;
}
</style>
