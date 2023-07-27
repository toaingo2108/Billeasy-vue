<template>
  <div :class="[`dropdown-item-16`, className || ``]">
    <img class="invoice-129" :src="payment" alt="Invoice" />
    <div class="menu-item-194 poppins-normal-ebony-14px">
      <span class="span-600 poppins-normal-ebony-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownItem",
  props: ["payment", "spanText", "className"],
};
</script>

<style>
.dropdown-item-16 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  height: 32px;
  min-width: 216px;
  padding: 5px 12px;
  transition: all 0.15s ease;
}

.dropdown-item-16:hover {
  transform: scale(1.1);
}

.invoice-129 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.menu-item-194 {
  letter-spacing: 0;
  line-height: 20px;
  width: 160px;
}

.dropdown-item-16.dropdown-item-8 {
  background-color: var(--concrete);
}

.dropdown-item-16.dropdown-item-2,
.dropdown-item-16.dropdown-item-3,
.dropdown-item-16.dropdown-item-4,
.dropdown-item-16.dropdown-item-5,
.dropdown-item-16.dropdown-item-6,
.dropdown-item-16.dropdown-item-7 {
  cursor: unset;
  transition: unset;
}

.dropdown-item-16.dropdown-item-9,
.dropdown-item-16.dropdown-item-10,
.dropdown-item-16.dropdown-item-11,
.dropdown-item-16.dropdown-item-13,
.dropdown-item-16.dropdown-item-14,
.dropdown-item-16.dropdown-item-15 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 10px;
  display: flex;
  gap: 12px;
  height: 32px;
  min-width: 216px;
  padding: 5px 12px;
}

.dropdown-item-16.dropdown-item-12 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  height: 32px;
  min-width: 216px;
  padding: 5px 12px;
  transition: all 0.15s ease;
}
</style>
