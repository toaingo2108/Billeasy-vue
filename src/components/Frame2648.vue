<template>
  <div :class="[`frame-26-1 poppins-semi-bold-ebony-18px`, className || ``]">
    <div class="title-9">
      <span class="span-118 poppins-semi-bold-ebony-18px">{{ spanText1 }}</span>
    </div>
    <frame2652
      :frame25781Props="frame2652Props.frame25781Props"
      :frame25782Props="frame2652Props.frame25782Props"
      :frame25801Props="frame2652Props.frame25801Props"
      :frame25802Props="frame2652Props.frame25802Props"
    />
    <div class="title-10">
      <span class="span-118 poppins-semi-bold-ebony-28px">{{ spanText2 }}</span
      ><span class="span-118 poppins-semi-bold-ebony-18px">&nbsp;</span
      ><span class="span-118 poppins-medium-manatee-18px">/ month</span>
    </div>
    <x-button />
  </div>
</template>

<script>
import Frame2652 from "./Frame2652";
import xButton from "./xButton";
export default {
  name: "Frame2648",
  components: {
    Frame2652,
    xButton,
  },
  props: ["spanText1", "spanText2", "className", "frame2652Props"],
};
</script>

<style>
.frame-26-1 {
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

.title-9 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 20px;
  margin-top: 3px;
  white-space: nowrap;
}

.title-10 {
  letter-spacing: 0;
  line-height: 28px;
  margin-right: 22px;
  margin-top: 35px;
  min-width: 136px;
  white-space: nowrap;
}

.frame-26-1.frame-26 .title-10 {
  margin-right: 21px;
  min-width: 137px;
}
</style>
