<template>
  <div class="column-13">
    <div class="late-invoices poppins-semi-bold-ebony-13px-2">
      <span class="poppins-semi-bold-ebony-13px-2">{{ spanText1 }}</span>
    </div>
    <div class="text-248 poppins-medium-comet-13px">
      <span class="poppins-medium-comet-13px">{{ spanText2 }}</span>
    </div>
    <div class="text-249 poppins-medium-comet-13px">
      <span class="poppins-medium-comet-13px">{{ spanText3 }}</span>
    </div>
    <div class="text-249 poppins-medium-comet-13px">
      <span class="poppins-medium-comet-13px">{{ spanText4 }}</span>
    </div>
    <div class="text-249 poppins-medium-comet-13px">
      <span class="poppins-medium-comet-13px">{{ spanText5 }}</span>
    </div>
    <div class="text-249 poppins-medium-comet-13px">
      <span class="poppins-medium-comet-13px">{{ spanText6 }}</span>
    </div>
    <div class="text-249 poppins-medium-comet-13px">
      <span class="poppins-medium-comet-13px">{{ spanText7 }}</span>
    </div>
    <div class="text-249 poppins-medium-comet-13px">
      <span class="poppins-medium-comet-13px">{{ spanText8 }}</span>
    </div>
    <div class="text-249 poppins-medium-comet-13px">
      <span class="poppins-medium-comet-13px">{{ spanText9 }}</span>
    </div>
    <div class="text-249 poppins-medium-comet-13px">
      <span class="poppins-medium-comet-13px">{{ spanText10 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Column4",
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
  ],
};
</script>

<style>
.column-13 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 372px;
  padding: 9px 0;
  width: 142px;
}

.late-invoices,
.avg-time-days {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 4px;
  min-height: 20px;
  width: 118px;
}

.text-248 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 22px;
  min-height: 20px;
  width: 118px;
}

.text-249 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 16px;
  min-height: 20px;
  width: 118px;
}
</style>
