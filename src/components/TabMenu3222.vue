<template>
  <div :class="[`tab-menu-125`, className || ``]">
    <div class="flex-row-175">
      <img class="invoice-141" :src="address" alt="Invoice" />
      <div class="label-404 poppins-medium-caribbean-green-14px">
        <span class="spanazq4g poppins-medium-caribbean-green-14px">{{ spanText }}</span>
      </div>
    </div>
    <div class="rectangle-6502-56"></div>
  </div>
</template>

<script>
export default {
  name: "TabMenu3222",
  props: ["address", "spanText", "className"],
};
</script>

<style>
.tab-menu-125 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 128px;
}

.flex-row-175 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-top: 9px;
  min-width: 82px;
}

.invoice-141 {
  height: 18px;
  width: 18px;
}

.label-404 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 58px;
  white-space: nowrap;
}

.rectangle-6502-56 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 128px;
}
</style>
