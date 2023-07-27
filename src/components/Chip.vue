<template>
  <div :class="[`chip-11`, className || ``]">
    <div class="input-text-119 poppins-normal-white-12px">
      <span class="spantnpzn poppins-normal-white-12px">Done</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chip",
  props: ["className"],
};
</script>

<style>
.chip-11 {
  align-items: flex-start;
  background-color: var(--green);
  border-radius: 100px;
  display: flex;
  height: 26px;
  margin-left: 125px;
  overflow: hidden;
  padding: 3px 8px;
  width: 48px;
}

.input-text-119 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
}

.chip-11.chip-16,
.chip-11.chip-17 {
  margin-left: 168px;
}
</style>
