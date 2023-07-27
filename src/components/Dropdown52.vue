<template>
  <div :class="[`dropdown-4-1`, className || ``]">
    <div class="text-57 poppins-medium-ebony-14px">
      <span class="span-132 poppins-medium-ebony-14px">{{ spanText }}</span>
    </div>
    <img
      class="chevron-down-225"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/chevron-down-45@2x.png"
      alt="Chevron Down"
    />
  </div>
</template>

<script>
export default {
  name: "Dropdown52",
  props: ["spanText", "className"],
};
</script>

<style>
.dropdown-4-1 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 192px;
}

.text-57 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 136px;
}

.chevron-down-225 {
  height: 24px;
  width: 24px;
}

.dropdown-4-1.dropdown-8 {
  align-items: center;
  align-self: flex-end;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 192px;
}
</style>
