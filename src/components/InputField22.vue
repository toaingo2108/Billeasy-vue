<template>
  <div :class="[`input-field-50`, className || ``]">
    <div class="label-348 poppins-medium-ebony-13px">
      <span class="span-555 poppins-medium-ebony-13px">{{ spanText1 }}</span>
    </div>
    <div class="input-106">
      <div class="input-text-180 poppins-normal-ebony-14px">
        <span class="span-555 poppins-normal-ebony-14px">{{ spanText2 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputField22",
  props: ["spanText1", "spanText2", "className"],
};
</script>

<style>
.input-field-50 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 336px;
}

.label-348 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 336px;
}

.input-106 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-180 {
  letter-spacing: 0;
  line-height: 24px;
  width: 312px;
}

.input-field-50.input-field-51,
.input-field-50.input-field-53 {
  min-height: 104px;
}

.input-field-50.input-field-51 .input-106,
.input-field-50.input-field-53 .input-106 {
  height: 78px;
  padding: 9px 12px;
}
</style>
