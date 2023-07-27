<template>
  <div :class="[`option-71`, className || ``]">
    <div class="radio-button-17"></div>
    <div class="label-477 poppins-normal-ebony-14px">
      <span class="spand2oyk poppins-normal-ebony-14px">{{ children }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Option222",
  props: ["children", "className"],
};
</script>

<style>
.option-71 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 129px;
}

.radio-button-17 {
  align-self: center;
  background-color: var(--white);
  border-radius: 100px;
  height: 18px;
  width: 18px;
}

.label-477 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.option-71.option-74 {
  min-width: 127px;
}
</style>
