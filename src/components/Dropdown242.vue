<template>
  <div :class="[`dropdown-126`, className || ``]">
    <div class="label-319 poppins-medium-ebony-13px">
      <span class="span-463 poppins-medium-ebony-13px">{{ spanText1 }}</span>
    </div>
    <div class="dropdown-122">
      <div class="text-273 poppins-medium-ebony-14px">
        <span class="span-463 poppins-medium-ebony-14px">{{ spanText2 }}</span>
      </div>
      <img
        class="chevron-down-311"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/chevron-down-45@2x.png"
        alt="Chevron Down"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown242",
  props: ["spanText1", "spanText2", "className"],
};
</script>

<style>
.dropdown-126 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: 0;
  min-height: 66px;
  position: absolute;
  top: 0;
  width: 248px;
}

.label-319 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 248px;
}

.dropdown-122 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 248px;
}

.text-273 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 192px;
}

.chevron-down-311 {
  height: 24px;
  width: 24px;
}

.dropdown-126.dropdown-123,
.dropdown-126.dropdown-125 {
  left: unset;
  position: unset;
  top: unset;
}
</style>
