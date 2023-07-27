<template>
  <div :class="[`tab-menu-2`, className || ``]">
    <div class="label-66 poppins-medium-caribbean-green-14px">
      <span class="spanq20kd poppins-medium-caribbean-green-14px">Units</span>
    </div>
    <div class="rectangle-6502-2"></div>
  </div>
</template>

<script>
export default {
  name: "TabMenu82",
  props: ["className"],
};
</script>

<style>
.tab-menu-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-left: 35px;
  min-height: 40px;
  width: 104px;
}

.label-66 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 9px;
  min-width: 36px;
  white-space: nowrap;
}

.rectangle-6502-2 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 104px;
}

.tab-menu-2.tab-menu-4 {
  margin-left: unset;
}
</style>
