<template>
  <router-view />
</template>

<script lang="ts" setup>
//
</script>
<style lang="scss">
@font-face {
  font-family: "Poppins-Bold";
  src: local("Poppins-Bold"),
    url(./assets/fonts/Poppins-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "Poppins-Medium";
  src: local("Poppins-Medium"),
    url(./assets/fonts/Poppins-Medium.ttf) format("truetype");
}
@font-face {
  font-family: "Poppins-Regular";
  src: local("Poppins-Regular"),
    url(./assets/fonts/Poppins-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Poppins-SemiBold";
  src: local("Poppins-SemiBold"),
    url(./assets/fonts/Poppins-SemiBold.ttf) format("truetype");
}
.app-bold-font {
  font-family: "Poppins-Bold" !important;
}
.app-semibold-font {
  font-family: "Poppins-SemiBold" !important;
}
.app-medium-font {
  font-family: "Poppins-Medium" !important;
}
.app-regular-font {
  font-family: "Poppins-Regular" !important;
}
.font-8 {
  font-size: 8px !important;
}
.font-10 {
  font-size: 10px !important;
}
.font-12 {
  font-size: 12px !important;
}
.font-13 {
  font-size: 13px !important;
}
.font-14 {
  font-size: 14px !important;
}
.font-16 {
  font-size: 16px;
}
.font-18 {
  font-size: 18px;
}
.font-20 {
  font-size: 20px !important;
}
.font-24 {
  font-size: 24px !important;
}
.font-28 {
  font-size: 24px !important;
}
.font-30 {
  font-size: 30px !important;
}
.font-160 {
  font-size: 160px !important;
}
html {
  height: 100%;
}
.w-100 {
  width: 100% !important;
}
.h-100 {
  height: 100% !important;
}
.w-50 {
  width: 50%;
}
.h-50 {
  height: 50%;
}
.w-25 {
  width: 25%;
}
.min-height-inherit {
  min-height: inherit;
}

.blue-font {
  color: #3737c8;
}
.dark-font {
  color: #0d0d1e !important;
}
.black-font {
  color: black;
}
.teal-font {
  color: #20c39d !important;
}
.white-font {
  color: white !important;
}
.blue-600 {
  color: #8b8ba9 !important;
}
.shade-font {
  color: #59597b;
}
.bright-blue-font {
  color: #376aee;
}

.justify-between {
  justify-content: space-between !important;
}
.flex-grow {
  flex-grow: 1;
}
</style>
