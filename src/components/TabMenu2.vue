<template>
  <div :class="[`tab-menu-44`, className || ``]">
    <div class="label-143 poppins-medium-caribbean-green-14px">
      <span class="spanwzafh poppins-medium-caribbean-green-14px">Invoice Templates</span>
    </div>
    <div class="rectangle-6502-19"></div>
  </div>
</template>

<script>
export default {
  name: "TabMenu2",
  props: ["className"],
};
</script>

<style>
.tab-menu-44 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 194px;
}

.label-143 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 9px;
  min-width: 130px;
  white-space: nowrap;
}

.rectangle-6502-19 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 194px;
}
</style>
