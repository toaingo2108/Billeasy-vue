<template>
  <div :class="[`tab-menu-33`, className || ``]">
    <div class="label-110 poppins-medium-caribbean-green-14px">
      <span class="spanti2g5 poppins-medium-caribbean-green-14px">Integrations</span>
    </div>
    <div class="rectangle-6502-13"></div>
  </div>
</template>

<script>
export default {
  name: "TabMenu11",
  props: ["className"],
};
</script>

<style>
.tab-menu-33 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 129px;
}

.label-110 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 9px;
  min-width: 86px;
  white-space: nowrap;
}

.rectangle-6502-13 {
  background-color: var(--caribbean-green);
  height: 2px;
  margin-right: 0.33px;
  width: 129px;
}

.tab-menu-33.tab-menu-34,
.tab-menu-33.tab-menu-35 {
  margin-left: 29px;
}
</style>
