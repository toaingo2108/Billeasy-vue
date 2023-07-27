<template>
  <div :class="[`dropdown-151-1`, className || ``]">
    <div class="label-396 poppins-medium-ebony-13px">
      <span class="span-652 poppins-medium-ebony-13px">{{ spanText1 }}</span>
    </div>
    <div class="dropdown-152">
      <div class="text-353 poppins-medium-ebony-14px">
        <span class="span-652 poppins-medium-ebony-14px">Percent</span>
      </div>
      <img
        class="chevron-down-325"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/chevron-down-45@2x.png"
        alt="Chevron Down"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown7",
  props: ["spanText1", "className"],
};
</script>

<style>
.dropdown-151-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 228px;
}

.label-396 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 228px;
}

.dropdown-152 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 228px;
}

.text-353 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 172px;
}

.chevron-down-325 {
  height: 24px;
  width: 24px;
}

.dropdown-151-1.dropdown-155,
.dropdown-151-1.dropdown-156 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 38px;
  min-height: 66px;
  width: 228px;
}
</style>
