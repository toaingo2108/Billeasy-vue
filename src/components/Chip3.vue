<template>
  <div :class="[`chip-25`, className || ``]">
    <div class="input-text-133 poppins-normal-white-12px">
      <span class="spanw3zb0h poppins-normal-white-12px">Started</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chip3",
  props: ["className"],
};
</script>

<style>
.chip-25 {
  align-items: flex-start;
  background-color: var(--royal-blue-2);
  border-radius: 100px;
  display: flex;
  height: 26px;
  margin-left: 125px;
  overflow: hidden;
  padding: 3px 8px;
  width: 60px;
}

.input-text-133 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
}

.chip-25.chip-30,
.chip-25.chip-31 {
  margin-left: 168px;
}
</style>
