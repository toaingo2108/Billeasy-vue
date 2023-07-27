<template>
  <div :class="[`dropdown-71`, className || ``]">
    <div class="label-72 poppins-medium-ebony-13px">
      <span class="span-227 poppins-medium-ebony-13px">{{ spanText1 }}</span
      ><span class="span-227 poppins-medium-alizarin-crimson-13px">*</span>
    </div>
    <div class="dropdown-72">
      <div class="text-149 poppins-medium-ebony-14px">
        <span class="span-227 poppins-medium-ebony-14px">{{ spanText3 }}</span>
      </div>
      <img
        class="chevron-down-289"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/chevron-down-45@2x.png"
        alt="Chevron Down"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown322",
  props: ["spanText1", "spanText3", "className"],
};
</script>

<style>
.dropdown-71 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 41px;
  min-height: 66px;
  width: 336px;
}

.label-72 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 336px;
}

.dropdown-72 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 336px;
}

.text-149 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 280px;
}

.chevron-down-289 {
  height: 24px;
  width: 24px;
}

.dropdown-71.dropdown-75,
.dropdown-71.dropdown-77 {
  align-self: unset;
  margin-top: unset;
}

.dropdown-71.dropdown-79 {
  align-self: unset;
}

.dropdown-71.dropdown-80 {
  align-self: unset;
  margin-top: 24px;
}
</style>
