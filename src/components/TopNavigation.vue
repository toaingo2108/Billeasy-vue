<template>
  <div :class="[`top-navigation`, className || ``]">
    <img
      class="line-107"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/line-37@2x.png"
      alt="Line"
    />
    <div class="icon-button"></div>
    <img
      class="line"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/line-37@2x.png"
      alt="Line"
    />
    <div class="icon-button-1"></div>
    <img
      class="line"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/line-37@2x.png"
      alt="Line"
    />
    <language :chevronDown="languageProps.chevronDown" />
    <img
      class="line"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/line-37@2x.png"
      alt="Line"
    />
    <user-profile :chevronDown="userProfileProps.chevronDown" />
  </div>
</template>

<script>
import Language from "./Language";
import UserProfile from "./UserProfile";
export default {
  name: "TopNavigation",
  components: {
    Language,
    UserProfile,
  },
  props: ["className", "languageProps", "userProfileProps"],
};
</script>

<style>
.top-navigation {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 64px;
  left: 224px;
  padding: 0 32px;
  position: absolute;
  top: 0;
  width: 1216px;
}

.line-107 {
  height: 32px;
  margin-left: 795px;
  width: 1px;
}

.icon-button {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/support-10@2x.png);
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 15px;
  width: 20px;
}

.line {
  height: 32px;
  margin-left: 16px;
  width: 1px;
}

.icon-button-1 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/notification-9@2x.png);
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 15px;
  width: 20px;
}

.top-navigation.top-navigation-3,
.top-navigation.top-navigation-6,
.top-navigation.top-navigation-10,
.top-navigation.top-navigation-13,
.top-navigation.top-navigation-14,
.top-navigation.top-navigation-15,
.top-navigation.top-navigation-16,
.top-navigation.top-navigation-17,
.top-navigation.top-navigation-18,
.top-navigation.top-navigation-19,
.top-navigation.top-navigation-20,
.top-navigation.top-navigation-21,
.top-navigation.top-navigation-22,
.top-navigation.top-navigation-23,
.top-navigation.top-navigation-26,
.top-navigation.top-navigation-27,
.top-navigation.top-navigation-28,
.top-navigation.top-navigation-29,
.top-navigation.top-navigation-30,
.top-navigation.top-navigation-33,
.top-navigation.top-navigation-34,
.top-navigation.top-navigation-35,
.top-navigation.top-navigation-36,
.top-navigation.top-navigation-37,
.top-navigation.top-navigation-38,
.top-navigation.top-navigation-39,
.top-navigation.top-navigation-40,
.top-navigation.top-navigation-41,
.top-navigation.top-navigation-42,
.top-navigation.top-navigation-43,
.top-navigation.top-navigation-44,
.top-navigation.top-navigation-45,
.top-navigation.top-navigation-46,
.top-navigation.top-navigation-47,
.top-navigation.top-navigation-50,
.top-navigation.top-navigation-51,
.top-navigation.top-navigation-53,
.top-navigation.top-navigation-55,
.top-navigation.top-navigation-56,
.top-navigation.top-navigation-59,
.top-navigation.top-navigation-60,
.top-navigation.top-navigation-61,
.top-navigation.top-navigation-62,
.top-navigation.top-navigation-66,
.top-navigation.top-navigation-70,
.top-navigation.top-navigation-71,
.top-navigation.top-navigation-72,
.top-navigation.top-navigation-73,
.top-navigation.top-navigation-75,
.top-navigation.top-navigation-76,
.top-navigation.top-navigation-77,
.top-navigation.top-navigation-78,
.top-navigation.top-navigation-79,
.top-navigation.top-navigation-80,
.top-navigation.top-navigation-81,
.top-navigation.top-navigation-82,
.top-navigation.top-navigation-84,
.top-navigation.top-navigation-89,
.top-navigation.top-navigation-90,
.top-navigation.top-navigation-91,
.top-navigation.top-navigation-93,
.top-navigation.top-navigation-94,
.top-navigation.top-navigation-95 {
  left: unset;
  position: relative;
  top: unset;
}

.top-navigation.top-navigation-98,
.top-navigation.top-navigation-99 {
  left: 0;
}
</style>
