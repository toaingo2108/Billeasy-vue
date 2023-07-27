<template>
  <div :class="[`frame-266-5-1`, className || ``]">
    <div class="chip-3">
      <div class="input-text-41 poppins-normal-white-12px">
        <span class="span-263 poppins-normal-white-12px">Not Activated</span>
      </div>
    </div>
    <frame2667 />
    <p class="integrate-billeasy-w-3 poppins-normal-comet-12px">
      <span class="span-263 poppins-normal-comet-12px"
        >Integrate Billeasy wtih Fortnox for automated bookkeeping of your sales and syncing of your customers and
        products between the programs..</span
      >
    </p>
    <p class="input-text-42 poppins-normal-ebony-12px">
      <span class="span-263 poppins-normal-ebony-12px">100 :- excl. VAT / month</span>
    </p>
    <div class="button-103">
      <div class="text-178 poppins-medium-ebony-14px">
        <span class="span-263 poppins-medium-ebony-14px">Read More</span>
      </div>
    </div>
  </div>
</template>

<script>
import Frame2667 from "./Frame2667";
export default {
  name: "Frame2664",
  components: {
    Frame2667,
  },
  props: ["className"],
};
</script>

<style>
.frame-266-5-1 {
  align-items: flex-start;
  background-color: var(--whisper);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  height: 312px;
  overflow: hidden;
  padding: 16px 20px;
  position: relative;
  width: 268px;
}

.chip-3 {
  align-items: flex-start;
  background-color: var(--west-side);
  border-radius: 100px;
  display: flex;
  height: 26px;
  overflow: hidden;
  padding: 3px 8px;
  width: 98px;
}

.input-text-41 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
}

.integrate-billeasy-w-3 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 15px;
  min-height: 90px;
  width: 220px;
}

.input-text-42 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 4px;
  margin-top: 16px;
  min-height: 18px;
}

.button-103 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 37px;
  margin-left: 4px;
  margin-top: 22px;
  min-width: 100px;
  padding: 7px 12px;
  transition: all 0.15s ease;
}

.button-103:hover {
  transform: translate(0, -5px);
}

.text-178 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 76px;
  text-align: center;
}

.frame-266-5-1.frame-266-5-3 .button-103,
.frame-266-5-1.frame-266-6-1 .button-103,
.frame-266-5-1.frame-266-7-1 .button-103,
.frame-266-5-1.frame-266-5-4 .button-103,
.frame-266-5-1.frame-266-5-5 .button-103,
.frame-266-5-1.frame-266-5 .button-103,
.frame-266-5-1.frame-266-6-2 .button-103,
.frame-266-5-1.frame-266-6-3 .button-103,
.frame-266-5-1.frame-266-6-4 .button-103,
.frame-266-5-1.frame-266-6-5 .button-103,
.frame-266-5-1.frame-266-6 .button-103,
.frame-266-5-1.frame-266-7-2 .button-103,
.frame-266-5-1.frame-266-7-3 .button-103,
.frame-266-5-1.frame-266-7-4 .button-103,
.frame-266-5-1.frame-266-7-5 .button-103,
.frame-266-5-1.frame-266-7 .button-103 {
  cursor: unset;
  transition: unset;
}
</style>
