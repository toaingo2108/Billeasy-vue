<template>
  <div :class="[`column-1`, className || ``]">
    <div class="invoice-124 poppins-semi-bold-ebony-13px-2">
      <span class="span-437 poppins-semi-bold-ebony-13px-2">{{ spanText1 }}</span>
    </div>
    <div class="number-59 poppins-medium-ebony-13px">
      <span class="span-437 poppins-medium-ebony-13px">{{ spanText2 }}</span>
    </div>
    <div class="number-60 poppins-medium-ebony-13px">
      <span class="span-437 poppins-medium-ebony-13px">{{ spanText3 }}</span>
    </div>
    <div class="number-61 poppins-medium-ebony-13px">
      <span class="span-437 poppins-medium-ebony-13px">{{ spanText4 }}</span>
    </div>
    <div class="number-62 poppins-medium-ebony-13px">
      <span class="span-437 poppins-medium-ebony-13px">{{ spanText5 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Column",
  props: ["spanText1", "spanText2", "spanText3", "spanText4", "spanText5", "className"],
};
</script>

<style>
.column-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 192px;
  padding: 9px 0;
  width: 181px;
}

.invoice-124 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 4px;
  min-height: 20px;
  width: 157px;
}

.number-59 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 22px;
  min-height: 20px;
  width: 157px;
}

.number-60,
.number-61,
.number-62 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 16px;
  min-height: 20px;
  width: 157px;
}
</style>
