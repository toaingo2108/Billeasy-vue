<template>
  <div :class="[`frame-2481-7`, className || ``]">
    <div class="payment-6 poppins-medium-ebony-14px">
      <span class="span-693 poppins-medium-ebony-14px">{{ spanText1 }}</span>
    </div>
    <div class="text-387 poppins-normal-comet-13px">
      <span class="span-693 poppins-normal-comet-13px">2023-06-01, 12.30</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame24814",
  props: ["spanText1", "className"],
};
</script>

<style>
.frame-2481-7 {
  align-items: flex-start;
  display: flex;
  gap: 113px;
  height: 21px;
  margin-top: 32px;
  min-width: 288px;
}

.payment-6 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 64px;
}

.text-387 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  min-height: 20px;
}

.frame-2481-7.frame-2482-7 {
  gap: 145px;
  margin-top: 14px;
}

.frame-2481-7.frame-2482-7 .payment-6 {
  min-width: 32px;
}

.frame-2481-7.frame-2483-2 {
  gap: 115px;
  margin-top: 12px;
}

.frame-2481-7.frame-2483-2 .payment-6 {
  min-width: 62px;
}

.frame-2481-7.frame-2484-3 {
  gap: 119px;
  margin-top: 12px;
}

.frame-2481-7.frame-2484-3 .payment-6 {
  min-width: 58px;
}
</style>
