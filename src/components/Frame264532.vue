<template>
  <div :class="[`frame-2645`, className || ``]">
    <div class="label-10 poppins-medium-comet-14px">
      <span class="span-112 poppins-medium-comet-14px">Company Information</span>
    </div>
    <div class="label-4 poppins-medium-comet-14px">
      <span class="span-112 poppins-medium-comet-14px">Account Settings</span>
    </div>
    <div class="label-4 poppins-semi-bold-caribbean-green-14px">
      <span class="span-112 poppins-semi-bold-caribbean-green-14px">Subscriptions</span>
    </div>
    <div class="label-4 poppins-medium-comet-14px">
      <span class="span-112 poppins-medium-comet-14px">Register</span>
    </div>
    <div class="label-4 poppins-medium-comet-14px">
      <span class="span-112 poppins-medium-comet-14px">Custom Fields</span>
    </div>
    <div class="label-4 poppins-medium-comet-14px">
      <span class="span-112 poppins-medium-comet-14px">Reminder Flows</span>
    </div>
    <div class="label-4 poppins-medium-comet-14px">
      <span class="span-112 poppins-medium-comet-14px">Templates</span>
    </div>
    <div class="label-4 poppins-medium-comet-14px">
      <span class="span-112 poppins-medium-comet-14px">Payment Methods</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame264532",
  props: ["className"],
};
</script>

<style>
.frame-2645 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  left: 256px;
  min-height: 328px;
  position: absolute;
  top: 176px;
  width: 184px;
}

.label-10 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  width: 184px;
}

.label-4 {
  letter-spacing: 0;
  line-height: 20px;
  width: 184px;
}

.frame-2645.frame-2645-1,
.frame-2645.frame-2645-4,
.frame-2645.frame-2645-5 {
  left: unset;
  position: unset;
  top: unset;
}
</style>
