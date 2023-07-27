<template>
  <div :class="[`tab-menu-15`, className || ``]">
    <div class="label-87 poppins-medium-caribbean-green-14px">
      <span class="spanyfs97 poppins-medium-caribbean-green-14px">Price Lists</span>
    </div>
    <div class="rectangle-6502-7"></div>
  </div>
</template>

<script>
export default {
  name: "TabMenu4",
  props: ["className"],
};
</script>

<style>
.tab-menu-15 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 139px;
}

.label-87 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 9px;
  min-width: 69px;
  white-space: nowrap;
}

.rectangle-6502-7 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 139px;
}

.tab-menu-15.tab-menu-16 {
  margin-left: 14px;
}
</style>
