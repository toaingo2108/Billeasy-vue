<template>
  <div class="column-8">
    <div class="total-1 poppins-semi-bold-ebony-13px-2">
      <span class="poppins-semi-bold-ebony-13px-2">{{ spanText1 }}</span>
    </div>
    <div class="text-19-1 poppins-medium-comet-13px">
      <span class="poppins-medium-comet-13px">{{ spanText2 }}</span>
    </div>
    <div class="text-20-1 poppins-medium-comet-13px">
      <span class="poppins-medium-comet-13px">{{ spanText3 }}</span>
    </div>
    <div class="text-21-1 poppins-medium-comet-13px">
      <span class="poppins-medium-comet-13px">{{ spanText4 }}</span>
    </div>
    <div class="text-22-1 poppins-medium-comet-13px">
      <span class="poppins-medium-comet-13px">{{ spanText5 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Column3",
  props: ["spanText1", "spanText2", "spanText3", "spanText4", "spanText5"],
};
</script>

<style>
.column-8 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 192px;
  padding: 9px 0;
  width: 131px;
}

.total-1,
.start-date,
.cancel-date,
.period-start,
.last-billed,
.period-interval {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 4px;
  min-height: 20px;
  width: 107px;
}

.text-19-1,
.date-13,
.text-23-1,
.date-17,
.date-21,
.date-25 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 22px;
  min-height: 20px;
  width: 107px;
}

.text-20-1,
.text-21-1,
.text-22-1,
.date-14,
.date-15,
.date-16,
.text-24-1,
.text-25-1,
.text-26-1,
.date-18,
.date-19,
.date-20,
.date-22,
.date-23,
.date-24,
.date-26,
.date-27,
.date-28 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 16px;
  min-height: 20px;
  width: 107px;
}
</style>
