<template>
  <div :class="[`tab-menu-25`, className || ``]">
    <div class="label-102 poppins-medium-caribbean-green-14px">
      <span class="span2hgyej poppins-medium-caribbean-green-14px">Payment Terms</span>
    </div>
    <div class="rectangle-6502-9"></div>
  </div>
</template>

<script>
export default {
  name: "TabMenu7",
  props: ["className"],
};
</script>

<style>
.tab-menu-25 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-left: 31px;
  min-height: 40px;
  width: 139px;
}

.label-102 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 9px;
  min-width: 112px;
  white-space: nowrap;
}

.rectangle-6502-9 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 139px;
}

.tab-menu-25.tab-menu-26 {
  margin-left: unset;
}
</style>
