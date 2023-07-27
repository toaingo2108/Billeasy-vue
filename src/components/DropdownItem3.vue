<template>
  <div :class="[`dropdown-item-18`, className || ``]">
    <img class="guide" :src="guide" alt="Guide" />
    <div class="menu-item-203 poppins-normal-ebony-14px">
      <span class="span-857 poppins-normal-ebony-14px">{{ spanText }}</span>
    </div>
    <img
      class="chevron-right-9"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/chevron-right-1@2x.png"
      alt="Chevron Right"
    />
  </div>
</template>

<script>
export default {
  name: "DropdownItem3",
  props: ["guide", "spanText", "className"],
};
</script>

<style>
.dropdown-item-18 {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 10px;
  display: flex;
  gap: 12px;
  height: 32px;
  min-width: 176px;
  padding: 5px 12px;
}

.guide,
.chevron-right-9 {
  height: 20px;
  width: 20px;
}

.menu-item-203 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 20px;
  width: 88px;
}

.dropdown-item-18.dropdown-item-19 {
  background-color: var(--white);
}
</style>
