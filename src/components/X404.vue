<template>
  <div class="container-center-horizontal">
    <form class="x404 screen" name="form109" action="form109" method="post">
      <left-navigation-menu9 v-bind="leftNavigationMenu9Props" />
      <div class="flex-col-277">
        <div class="top-navigation-4">
          <img class="line-222" :src="line1" alt="Line" /><a href="javascript:SubmitForm('form109')"
            ><img class="link-1" :src="support" alt="Support" /></a
          ><img class="line-221" :src="line2" alt="Line" /><a href="javascript:SubmitForm('form109')"
            ><img class="link-1" :src="notification" alt="Notification" /></a
          ><img class="line-221" :src="line3" alt="Line" /><language :chevronDown="languageProps.chevronDown" />
          <img class="line-221" :src="line4" alt="Line" /><user-profile :chevronDown="userProfileProps.chevronDown" />
        </div>
        <div class="overlap-group-79">
          <div class="ellipse-14"></div>
          <div class="page-header-110 poppins-semi-bold-ebony-28px">
            <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
          </div>
          <p class="page-header-111 poppins-normal-ebony-16px">
            <span class="poppins-normal-ebony-16px">{{ spanText2 }}</span>
          </p>
          <h1 class="page-header-112 poppins-semi-bold-governor-bay-160px">
            <span class="poppins-semi-bold-governor-bay-160px">{{ spanText3 }}</span>
          </h1>
        </div>
        <a href="javascript:SubmitForm('form109')">
          <div class="button-301">
            <img class="chevron-left-38" :src="chevronLeft" alt="Chevron Left" />
            <div class="text-437 poppins-medium-white-14px">
              <span class="poppins-medium-white-14px">{{ spanText4 }}</span>
            </div>
          </div></a
        >
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu9 from "./LeftNavigationMenu9";
import Language from "./Language";
import UserProfile from "./UserProfile";
export default {
  name: "X404",
  components: {
    LeftNavigationMenu9,
    Language,
    UserProfile,
  },
  props: [
    "line1",
    "support",
    "line2",
    "notification",
    "line3",
    "line4",
    "spanText1",
    "spanText2",
    "spanText3",
    "chevronLeft",
    "spanText4",
    "leftNavigationMenu9Props",
    "languageProps",
    "userProfileProps",
  ],
};
</script>

<style>
.x404 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-277 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 672px;
  width: 1216px;
}

.top-navigation-4 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 64px;
  padding: 0 32px;
  position: relative;
  width: 1216px;
}

.line-222 {
  height: 32px;
  margin-left: 795px;
  width: 1px;
}

.link-1 {
  cursor: pointer;
  height: 20px;
  margin-left: 15px;
  transition: all 0.15s ease;
  width: 20px;
}

.link-1:hover,
.button-301:hover {
  transform: translate(0, -5px);
}

.line-221 {
  height: 32px;
  margin-left: 16px;
  width: 1px;
}

.overlap-group-79 {
  height: 395px;
  margin-top: 127px;
  position: relative;
  width: 432px;
}

.ellipse-14 {
  background-color: var(--periwinkle);
  border-radius: 160px;
  filter: blur(400px);
  height: 320px;
  left: 56px;
  position: absolute;
  top: 75px;
  width: 320px;
}

.page-header-110 {
  left: 104px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  text-align: center;
  top: 256px;
  white-space: nowrap;
}

.page-header-111 {
  left: 0;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 320px;
  width: 432px;
}

.page-header-112 {
  left: 58px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
}

.button-301 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  box-shadow: 0px 10px 40px -10px #20c39d;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 48px;
  margin-top: 38px;
  overflow: hidden;
  padding: 12.5px 25px;
  transition: all 0.15s ease;
  width: 176px;
}

.chevron-left-38 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-437 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 98px;
  text-align: center;
}
</style>
