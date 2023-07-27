<template>
  <div :class="[`chip-18`, className || ``]">
    <div class="input-text-126 poppins-normal-ebony-12px">
      <span class="spanjoybm poppins-normal-ebony-12px">New</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chip2",
  props: ["className"],
};
</script>

<style>
.chip-18 {
  align-items: flex-start;
  background-color: var(--mystic);
  border-radius: 100px;
  display: flex;
  height: 26px;
  margin-left: 125px;
  overflow: hidden;
  padding: 3px 8px;
  width: 42px;
}

.input-text-126 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
}

.chip-18.chip-23,
.chip-18.chip-24 {
  margin-left: 168px;
}
</style>
