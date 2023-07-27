<template>
  <div :class="[`tab-menu-136`, className || ``]">
    <img class="invoice-144" :src="general" alt="Invoice" />
    <div class="label-421 poppins-medium-manatee-14px">
      <span class="spansaakt poppins-medium-manatee-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabMenu222",
  props: ["general", "spanText", "className"],
};
</script>

<style>
.tab-menu-136,
.tab-menu-136.tab-menu-134,
.tab-menu-136.tab-menu-135 {
  align-items: flex-start;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 128px;
  padding: 9px 23px;
}

.invoice-144 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-421 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-136.tab-menu-137,
.tab-menu-136.tab-menu-138 {
  cursor: pointer;
  padding: 9px 24.5px;
  transition: all 0.15s ease;
}

.tab-menu-136.tab-menu-137:hover,
.tab-menu-136.tab-menu-138:hover {
  transform: translate(0, -5px);
}

.tab-menu-136.tab-menu-139 {
  padding: 9px 24.5px;
}

.tab-menu-136.tab-menu-140,
.tab-menu-136.tab-menu-142,
.tab-menu-136.tab-menu-144,
.tab-menu-136.tab-menu-146,
.tab-menu-136.tab-menu-148,
.tab-menu-136.tab-menu-149 {
  padding: 9px 24px;
}
</style>
