<template>
  <div :class="[`open-invoices`, className || ``]">
    <div class="header-149">
      <frame2443 :src="frame2443Props.src" />
      <div class="title-156 poppins-semi-bold-ebony-20px">
        <span class="span-845 poppins-semi-bold-ebony-20px">Open Invoices</span>
      </div>
      <img
        class="info-8"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/info-14@2x.png"
        alt="Info"
      />
    </div>
    <div class="flex-row-304 poppins-semi-bold-ebony-12px">
      <div class="amount-in-sek"><span class="span-845 poppins-semi-bold-ebony-12px">Amount in SEK</span></div>
      <div class="address-29"><span class="span-845 poppins-semi-bold-ebony-12px"># Invoices</span></div>
    </div>
    <img
      class="line-613-21"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/line-612-1@2x.png"
      alt="Line 613"
    />
    <div class="flex-row-305">
      <div class="late-container poppins-normal-ebony-14px">
        <div class="not-late"><span class="span-845 poppins-normal-ebony-14px">Not late</span></div>
        <p class="late-up-to-15-days"><span class="span-845 poppins-normal-ebony-14px">Late up to 15 days</span></p>
        <p class="late-between-15-and-30-days">
          <span class="span-845 poppins-normal-ebony-14px">Late between 15 and 30 days</span>
        </p>
        <p class="late-more-than-30-days">
          <span class="span-845 poppins-normal-ebony-14px">Late more than 30 days</span>
        </p>
      </div>
      <div class="text-container-2 poppins-medium-ebony-14px">
        <div class="text-147-1"><span class="span-845 poppins-medium-ebony-14px">1,000,000</span></div>
        <div class="text-148-1"><span class="span-845 poppins-medium-ebony-14px">1,000,000</span></div>
        <div class="text-149-1"><span class="span-845 poppins-medium-ebony-14px">1,000,000</span></div>
        <div class="text-150-1"><span class="span-845 poppins-medium-ebony-14px">1,000,000</span></div>
      </div>
      <div class="number-container poppins-medium-ebony-14px">
        <div class="number-102"><span class="span-845 poppins-medium-ebony-14px">10</span></div>
        <div class="number-103"><span class="span-845 poppins-medium-ebony-14px">10</span></div>
        <div class="number-104"><span class="span-845 poppins-medium-ebony-14px">10</span></div>
        <div class="number-105"><span class="span-845 poppins-medium-ebony-14px">10</span></div>
      </div>
    </div>
    <img
      class="line-612-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/line-612-1@2x.png"
      alt="Line 612"
    />
    <div class="flex-row-306 poppins-medium-ebony-14px">
      <div class="total-5"><span class="span-845 poppins-medium-ebony-14px">Total</span></div>
      <div class="text-151-1"><span class="span-845 poppins-medium-ebony-14px">4,000,000</span></div>
      <div class="number-106"><span class="span-845 poppins-medium-ebony-14px">40</span></div>
    </div>
  </div>
</template>

<script>
import Frame2443 from "./Frame2443";
export default {
  name: "OpenInvoices",
  components: {
    Frame2443,
  },
  props: ["className", "frame2443Props"],
};
</script>

<style>
.open-invoices {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 348px;
  overflow: hidden;
  padding: 24px 0;
  width: 680px;
}

.header-149 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  margin-left: 32px;
  min-width: 214px;
  position: relative;
}

.title-156 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  min-width: 144px;
  white-space: nowrap;
}

.info-8 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.flex-row-304 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 84px;
  height: 18px;
  margin-right: 80px;
  margin-top: 25px;
  min-width: 237px;
}

.amount-in-sek {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
  min-width: 88px;
}

.address-29 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
}

.line-613-21 {
  align-self: center;
  height: 1px;
  margin-top: 13px;
  width: 616px;
}

.flex-row-305 {
  align-items: flex-start;
  display: flex;
  height: 132px;
  margin-left: 33px;
  margin-top: 14px;
  min-width: 516px;
}

.late-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 132px;
  width: 202px;
}

.not-late,
.late-up-to-15-days,
.late-between-15-and-30-days,
.late-more-than-30-days,
.text-147-1,
.text-148-1,
.text-149-1,
.text-150-1,
.number-102,
.number-103,
.number-104,
.number-105 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
}

.text-container-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 128px;
  min-height: 132px;
  width: 65px;
}

.number-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: 107px;
  min-height: 132px;
  width: 14px;
}

.line-612-1 {
  align-self: center;
  height: 1px;
  margin-top: 17px;
  width: 616px;
}

.flex-row-306 {
  align-items: flex-start;
  display: flex;
  height: 21px;
  margin-left: 33px;
  margin-top: 14px;
  min-width: 521px;
}

.total-5 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 36px;
}

.text-151-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 294px;
  min-height: 21px;
  min-width: 70px;
}

.number-106 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 102px;
  min-height: 21px;
}

.open-invoices.open-invoices-1,
.open-invoices.open-invoices-2 {
  left: 32px;
  position: absolute;
  top: 176px;
}
</style>
