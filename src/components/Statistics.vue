<template>
  <div :class="[`statistics-10`, className || ``]">
    <div class="header-111">
      <frame2443 :src="frame2443Props.src" />
      <div class="title-113 poppins-semi-bold-ebony-20px">
        <span class="span-788 poppins-semi-bold-ebony-20px">Statistics</span>
      </div>
    </div>
    <div class="flex-row-248">
      <div class="late-invoices-1 poppins-medium-ebony-14px">
        <span class="span-788 poppins-medium-ebony-14px">Late invoices:</span>
      </div>
      <div class="text-126-1 poppins-normal-comet-13px">
        <span class="span-788 poppins-normal-comet-13px">10(16%)</span>
      </div>
    </div>
    <div class="sum-this-year-2023 poppins-medium-ebony-14px">
      <span class="span-788 poppins-medium-ebony-14px">Sum This Year (2023)</span>
    </div>
    <frame2489 />
    <div class="sum-in-total poppins-medium-ebony-14px">
      <span class="span-788 poppins-medium-ebony-14px">Sum In Total</span>
    </div>
    <frame2489 />
  </div>
</template>

<script>
import Frame2443 from "./Frame2443";
import Frame2489 from "./Frame2489";
export default {
  name: "Statistics",
  components: {
    Frame2443,
    Frame2489,
  },
  props: ["className", "frame2443Props"],
};
</script>

<style>
.statistics-10 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 416px;
  margin-top: 24px;
  overflow: hidden;
  padding: 24px 32px;
  position: relative;
  width: 480px;
}

.header-111 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  min-width: 134px;
  position: relative;
}

.title-113 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.flex-row-248 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 21px;
  margin-top: 31px;
  min-width: 150px;
}

.late-invoices-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 95px;
}

.text-126-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
}

.sum-this-year-2023 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 32px;
  min-height: 21px;
}

.sum-in-total {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 31px;
  min-height: 21px;
}

.statistics-10.statistics-13,
.statistics-10.statistics-17,
.statistics-10.statistics-18 {
  left: 256px;
  margin-top: unset;
  position: absolute;
  top: 536px;
}
</style>
