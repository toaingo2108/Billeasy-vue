<template>
  <div :class="[`input-field-65`, className || ``]">
    <div class="label-392 poppins-medium-ebony-13px">
      <span class="span-642 poppins-medium-ebony-13px">{{ spanText1 }}</span>
    </div>
    <div class="input-133">
      <div class="input-text-210 poppins-normal-ebony-14px">
        <span class="span-642 poppins-normal-ebony-14px">2023-05-01</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: ["spanText1", "className"],
};
</script>

<style>
.input-field-65 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  opacity: 0.5;
  width: 152px;
}

.label-392 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 152px;
}

.input-133 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 152px;
}

.input-text-210 {
  letter-spacing: 0;
  line-height: 24px;
  width: 128px;
}

.input-field-65.input-field-67 {
  opacity: unset;
}
</style>
