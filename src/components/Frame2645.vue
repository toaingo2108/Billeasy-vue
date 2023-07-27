<template>
  <div :class="[`frame-2645-6`, className || ``]">
    <div class="label-30 poppins-medium-comet-14px">
      <span class="span-139 poppins-medium-comet-14px">Company Information</span>
    </div>
    <div class="label-27 poppins-medium-comet-14px">
      <span class="span-139 poppins-medium-comet-14px">Account Settings</span>
    </div>
    <div class="label-27 poppins-medium-comet-14px">
      <span class="span-139 poppins-medium-comet-14px">Subscriptions</span>
    </div>
    <div class="label-27 poppins-medium-comet-14px">
      <span class="span-139 poppins-medium-comet-14px">Register</span>
    </div>
    <div class="label-27 poppins-medium-comet-14px">
      <span class="span-139 poppins-medium-comet-14px">Custom Fields</span>
    </div>
    <div class="label-27 poppins-semi-bold-caribbean-green-14px">
      <span class="span-139 poppins-semi-bold-caribbean-green-14px">Reminder Flows</span>
    </div>
    <div class="label-27 poppins-medium-comet-14px">
      <span class="span-139 poppins-medium-comet-14px">Templates</span>
    </div>
    <div class="label-27 poppins-medium-comet-14px">
      <span class="span-139 poppins-medium-comet-14px">Payment Methods</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame2645",
  props: ["className"],
};
</script>

<style>
.frame-2645-6 {
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

.label-30 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  width: 184px;
}

.label-27 {
  letter-spacing: 0;
  line-height: 20px;
  width: 184px;
}

.frame-2645-6.frame-2645-8 {
  left: unset;
  position: unset;
  top: unset;
}
</style>
