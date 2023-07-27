<template>
  <div :class="[`column-2`, className || ``]">
    <div class="total poppins-semi-bold-ebony-13px-2">
      <span class="span-438 poppins-semi-bold-ebony-13px-2">{{ spanText1 }}</span>
    </div>
    <div class="text-15-1 poppins-medium-comet-13px">
      <span class="span-438 poppins-medium-comet-13px">{{ spanText2 }}</span>
    </div>
    <div class="text-16-1 poppins-medium-comet-13px">
      <span class="span-438 poppins-medium-comet-13px">{{ spanText3 }}</span>
    </div>
    <div class="text-17-1 poppins-medium-comet-13px">
      <span class="span-438 poppins-medium-comet-13px">{{ spanText4 }}</span>
    </div>
    <div class="text-18-1 poppins-medium-comet-13px">
      <span class="span-438 poppins-medium-comet-13px">{{ spanText5 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Column2",
  props: ["spanText1", "spanText2", "spanText3", "spanText4", "spanText5", "className"],
};
</script>

<style>
.column-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 192px;
  padding: 9px 0;
  width: 181px;
}

.total {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 4px;
  min-height: 20px;
  width: 157px;
}

.text-15-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 22px;
  min-height: 20px;
  width: 157px;
}

.text-16-1,
.text-17-1,
.text-18-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 16px;
  min-height: 20px;
  width: 157px;
}

.column-2.column-3 {
  left: 0;
  position: absolute;
  top: 0;
}

.column-2.column-4 {
  left: 181px;
  position: absolute;
  top: 0;
}

.column-2.column-5 {
  left: 363px;
  position: absolute;
  top: 0;
}
</style>
