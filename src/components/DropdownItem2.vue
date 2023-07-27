<template>
  <div :class="[`dropdown-item-17-1`, className || ``]">
    <img class="payment-5" :src="payment" alt="Payment" />
    <div class="menu-item-202 poppins-normal-ebony-14px">
      <span class="span-692 poppins-normal-ebony-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownItem2",
  props: ["payment", "spanText", "className"],
};
</script>

<style>
.dropdown-item-17-1 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 12px;
  height: 32px;
  min-width: 312px;
  padding: 5px 12px;
  transition: all 0.15s ease;
}

.dropdown-item-17-1:hover {
  transform: scale(1.1);
}

.payment-5 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.menu-item-202 {
  letter-spacing: 0;
  line-height: 20px;
  width: 256px;
}
</style>
