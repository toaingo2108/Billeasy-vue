<template>
  <div :class="[`tab-menu-150`, className || ``]">
    <img class="rules-4" :src="rules" alt="Rules" />
    <div class="label-426 poppins-medium-manatee-14px">
      <span class="spana3ldn poppins-medium-manatee-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabMenu522",
  props: ["rules", "spanText", "className"],
};
</script>

<style>
.tab-menu-150 {
  align-items: flex-start;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 128px;
  padding: 9px 33px;
}

.rules-4 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-426 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-150.tab-menu-151,
.tab-menu-150.tab-menu-152 {
  cursor: pointer;
  padding: 9px 31.5px;
  transition: all 0.15s ease;
}

.tab-menu-150.tab-menu-151:hover,
.tab-menu-150.tab-menu-152:hover {
  transform: translate(0, -5px);
}
</style>
