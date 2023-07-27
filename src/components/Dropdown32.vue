<template>
  <div :class="[`dropdown-16-1`, className || ``]">
    <div class="text-78 poppins-medium-ebony-14px">
      <span class="span-151 poppins-medium-ebony-14px">{{ spanText }}</span>
    </div>
    <img
      class="chevron-down-236"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/chevron-down-45@2x.png"
      alt="Chevron Down"
    />
  </div>
</template>

<script>
export default {
  name: "Dropdown32",
  props: ["spanText", "className"],
};
</script>

<style>
.dropdown-16-1 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-left: 12px;
  overflow: hidden;
  padding: 0 12px;
  width: 176px;
}

.text-78 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 120px;
}

.chevron-down-236 {
  height: 24px;
  width: 24px;
}

.dropdown-16-1.dropdown-19 {
  margin-left: 32px;
}
</style>
