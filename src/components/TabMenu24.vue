<template>
  <div :class="[`tab-menu-181`, className || ``]">
    <img class="invoice-161" :src="invoice" alt="Invoice" />
    <div class="label-520 poppins-medium-manatee-14px">
      <span class="span-817 poppins-medium-manatee-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabMenu24",
  props: ["invoice", "spanText", "className"],
};
</script>

<style>
.tab-menu-181 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 120px;
  padding: 9px 19px;
  transition: all 0.15s ease;
}

.tab-menu-181:hover {
  transform: translate(0, -5px);
}

.invoice-161 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-520 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-181.tab-menu-182,
.tab-menu-181.tab-menu-184,
.tab-menu-181.tab-menu-188 {
  padding: 9px 20.5px;
}

.tab-menu-181.tab-menu-185,
.tab-menu-181.tab-menu-190,
.tab-menu-181.tab-menu-191,
.tab-menu-181.tab-menu-193 {
  cursor: unset;
  transition: unset;
}

.tab-menu-181.tab-menu-186,
.tab-menu-181.tab-menu-192,
.tab-menu-181.tab-menu-194 {
  cursor: unset;
  padding: 9px 20.5px;
  transition: unset;
}
</style>
