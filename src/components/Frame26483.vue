<template>
  <div :class="[`frame-26-3-1 poppins-semi-bold-ebony-18px`, className || ``]">
    <div class="title-40">
      <span class="span-275 poppins-semi-bold-ebony-18px">{{ spanText1 }}</span>
    </div>
    <frame2652
      :frame25781Props="frame2652Props.frame25781Props"
      :frame25782Props="frame2652Props.frame25782Props"
      :frame25801Props="frame2652Props.frame25801Props"
      :frame25802Props="frame2652Props.frame25802Props"
    />
    <div class="title-41">
      <span class="span-275 poppins-semi-bold-ebony-28px">{{ spanText2 }}</span
      ><span class="span-275 poppins-semi-bold-ebony-18px">&nbsp;</span
      ><span class="span-275 poppins-medium-manatee-14px">/ month</span>
    </div>
    <x-button />
  </div>
</template>

<script>
import Frame2652 from "./Frame2652";
import xButton from "./xButton";
export default {
  name: "Frame26483",
  components: {
    Frame2652,
    xButton,
  },
  props: ["spanText1", "spanText2", "className", "frame2652Props"],
};
</script>

<style>
.frame-26-3-1 {
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

.title-40 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 20px;
  margin-top: 3px;
  white-space: nowrap;
}

.title-41 {
  letter-spacing: 0;
  line-height: 28px;
  margin-right: 39px;
  margin-top: 35px;
  min-width: 119px;
  white-space: nowrap;
}

.frame-26-3-1.frame-26-3-2 .title-41 {
  margin-right: 38px;
  min-width: 120px;
}

.frame-26-3-1.frame-26-3 .title-41 {
  margin-right: 37px;
  min-width: 121px;
}
</style>
