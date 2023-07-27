<template>
  <div :class="[`dropdown-item-20-1`, className || ``]">
    <div class="menu-item-204 poppins-normal-ebony-14px">
      <span class="span-858 poppins-normal-ebony-14px">{{ children }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownItem4",
  props: ["children", "className"],
};
</script>

<style>
.dropdown-item-20-1 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 32px;
  min-width: 200px;
  padding: 5px 12px;
}

.menu-item-204 {
  letter-spacing: 0;
  line-height: 20px;
  width: 176px;
}

.dropdown-item-20-1.dropdown-item-21 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 10px;
  display: flex;
  height: 32px;
  min-width: 200px;
  padding: 5px 12px;
}
</style>
