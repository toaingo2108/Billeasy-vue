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
.font-11 {
  font-size: 11px !important;
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
  font-size: 18px !important;
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
.font-32 {
  font-size: 32px !important;
}
.font-56 {
  font-size: 56px;
}
.font-72 {
  font-size: 72px;
}
.font-80 {
  font-size: 80px;
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
.hx-36 {
  height: 36px;
}
.wx-200 {
  width: 200px;
}
.w-25 {
  width: 25%;
}
.min-height-inherit {
  min-height: inherit;
}

.bg-gray {
  background-color: #f7f7fa;
}
.bg-pumpkin-orange {
  background-color: #f58d13;
}
.bg-forest {
  background-color: #22b762;
}
.bg-cerulean {
  background-color: #229cb7;
}
.bg-dark {
  background-color: #0d0d1e;
}
.bg-dark-blue {
  background-color: #383856;
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
.light-font {
  color: #d1d1e2;
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
.light-blue-font {
  color: #8348ff;
}
.lime-green-font {
  color: #7ab618;
}
.pumpkin-font {
  color: #f87037;
}
.forest-font {
  color: #22b762;
}
.blue-magenta-font {
  color: #b2b2cb;
}
.justify-between {
  justify-content: space-between !important;
}

.justify-around {
  justify-content: space-around !important;
}

.flex-grow {
  flex-grow: 1;
}

.remove-border-bottom {
  border-bottom: 1px solid #0000 !important;
}
.hover-item:hover {
  background-color: #eef3f8;
}

.button-40 {
  width: 40px !important;
  height: 40px !important;
  min-height: 40px !important;
  min-width: 40px !important;
  max-height: 40px !important;
  max-width: 40px !important;
}
.button-32 {
  width: 32px !important;
  height: 32px !important;
  min-height: 32px !important;
  min-width: 32px !important;
  max-height: 32px !important;
  max-width: 32px !important;
}
.button-36 {
  width: 36px !important;
  height: 36px !important;
  min-height: 36px !important;
  min-width: 36px !important;
  max-height: 36px !important;
  max-width: 36px !important;
}
.button-64 {
  height: 64px;
  max-height: 64px;
  min-height: 64px;
  width: 64px;
  max-width: 64px;
  min-width: 64px;
}
.app-border {
  border-color: #e6e6ed;
  border-radius: 24px;
  border-width: 1px;
  border-style: solid;
}
.app-dark-border {
  border-color: #20c39d;
  border-radius: 24px;
  border-width: 1px;
  border-style: solid;
}
div .v-text-field input.v-field__input {
  min-height: 40px;
  padding: 7px 10px !important;
  background-color: white;
  border-radius: 10px;
}

div .v-select .v-field__input {
  min-height: 40px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 12px;
  padding-right: 12px;
}

.v-card::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.v-card::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px light-grey;
  border-radius: 3px;
  margin-top: 20px;
  margin-bottom: 20px;
}
/* Handle */
.v-card::-webkit-scrollbar-thumb {
  background: #5271ff55;
  border-radius: 3px;
}

/* Handle on hover */
.v-dialog::-webkit-scrollbar-thumb:hover {
  background: #5271ff55;
}

.v-text-field .v-field__outline .v-field__outline__start {
  border-color: #d1d1e2;
  --v-field-border-opacity: 0.8;
  --v-field-border-width: 1.5px;
}
.v-text-field .v-field__outline .v-field__outline__end {
  border-color: #d1d1e2;
  --v-field-border-opacity: 0.8;
  --v-field-border-width: 1.5px;
}

.v-text-field:hover .v-field__outline .v-field__outline__start {
  border-color: #d1d1e2;
  --v-field-border-opacity: 1;
  --v-field-border-width: 1.5px;
}
.v-text-field:hover .v-field__outline .v-field__outline__end {
  border-color: #d1d1e2;
  --v-field-border-opacity: 1;
  --v-field-border-width: 1.5px;
}
.v-btn {
  opacity: 1 !important;
}
</style>
