<template>
  <div class="container-center-horizontal">
    <form class="x500 screen" name="form112" action="form112" method="post">
      <left-navigation-menu9 v-bind="leftNavigationMenu9Props" />
      <div class="flex-col-278">
        <div class="top-navigation-5">
          <img class="line-224" :src="line1" alt="Line" /><a href="javascript:SubmitForm('form112')"
            ><img class="support-18" :src="support" alt="Support" /></a
          ><img class="line-223" :src="line2" alt="Line" /><a href="javascript:SubmitForm('form112')"
            ><img class="icon" :src="icon" alt="Icon" /></a
          ><img class="line-225" :src="line3" alt="Line" /><language :chevronDown="languageProps.chevronDown" />
          <img class="line-223" :src="line4" alt="Line" /><user-profile :chevronDown="userProfileProps.chevronDown" />
        </div>
        <div class="overlap-group-80">
          <div class="ellipse-15"></div>
          <div class="ellipse-14-1"></div>
          <div class="page-header-113 poppins-semi-bold-ebony-28px">
            <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
          </div>
          <p class="page-header-114 poppins-normal-ebony-16px">
            <span class="poppins-normal-ebony-16px">{{ spanText2 }}</span>
          </p>
          <h1 class="page-header-115 poppins-semi-bold-purple-heart-160px">
            <span class="poppins-semi-bold-purple-heart-160px">{{ spanText3 }}</span>
          </h1>
        </div>
        <a href="javascript:SubmitForm('form112')">
          <div class="button-302">
            <img class="chevron-left-39" :src="chevronLeft" alt="Chevron Left" />
            <div class="text-438 poppins-medium-white-14px">
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
  name: "X500",
  components: {
    LeftNavigationMenu9,
    Language,
    UserProfile,
  },
  props: [
    "line1",
    "support",
    "line2",
    "icon",
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
.x500 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-278 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 672px;
  width: 1216px;
}

.top-navigation-5 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 64px;
  padding: 0 32px;
  position: relative;
  width: 1216px;
}

.line-224 {
  height: 32px;
  margin-left: 795px;
  width: 1px;
}

.support-18 {
  cursor: pointer;
  height: 20px;
  margin-left: 15px;
  transition: all 0.15s ease;
  width: 20px;
}

.support-18:hover,
.icon:hover,
.button-302:hover {
  transform: translate(0, -5px);
}

.line-223 {
  height: 32px;
  margin-left: 16px;
  width: 1px;
}

.icon {
  cursor: pointer;
  height: 17px;
  margin-bottom: 0;
  margin-left: 18px;
  transition: all 0.15s ease;
  width: 14px;
}

.line-225 {
  height: 32px;
  margin-left: 19px;
  width: 1px;
}

.overlap-group-80 {
  height: 395px;
  margin-top: 127px;
  position: relative;
  width: 432px;
}

.ellipse-15 {
  background-color: #eae0ff;
  border-radius: 160px;
  filter: blur(400px);
  height: 320px;
  left: 56px;
  position: absolute;
  top: 75px;
  width: 320px;
}

.ellipse-14-1 {
  background-color: var(--periwinkle);
  border-radius: 160px;
  filter: blur(400px);
  height: 320px;
  left: 56px;
  position: absolute;
  top: 75px;
  width: 320px;
}

.page-header-113 {
  left: 133px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  text-align: center;
  top: 256px;
  white-space: nowrap;
}

.page-header-114 {
  left: 0;
  letter-spacing: 0;
  line-height: 32px;
  position: absolute;
  text-align: center;
  top: 320px;
  width: 432px;
}

.page-header-115 {
  left: 61px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
}

.button-302 {
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

.chevron-left-39 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-438 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 98px;
  text-align: center;
}
</style>
