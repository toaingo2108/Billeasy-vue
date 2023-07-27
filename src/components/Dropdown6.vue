<template>
  <div :class="[`dropdown-132`, className || ``]">
    <div class="label-371 poppins-medium-ebony-13px">
      <span class="span-610 poppins-medium-ebony-13px">{{ spanText1 }}</span
      ><span class="span-610 poppins-medium-alizarin-crimson-13px">*</span>
    </div>
    <div class="dropdown-133">
      <div class="text-330 poppins-medium-ebony-14px">
        <span class="span-610 poppins-medium-ebony-14px">{{ spanText3 }}</span>
      </div>
      <img
        class="chevron-down-315"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/chevron-down-45@2x.png"
        alt="Chevron Down"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown6",
  props: ["spanText1", "spanText3", "className"],
};
</script>

<style>
.dropdown-132 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 272px;
}

.label-371 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 272px;
}

.dropdown-133 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 272px;
}

.text-330 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 216px;
}

.chevron-down-315 {
  height: 24px;
  width: 24px;
}

.dropdown-132.dropdown-134 {
  margin-top: 40px;
}
</style>
