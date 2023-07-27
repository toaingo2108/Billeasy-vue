<template>
  <div :class="[`dropdown-113-1`, className || ``]">
    <div class="label-289 poppins-medium-ebony-13px">
      <span class="span-452 poppins-medium-ebony-13px">{{ spanText1 }}</span>
    </div>
    <div class="dropdown-114">
      <div class="text-251 poppins-medium-ebony-14px">
        <span class="span-452 poppins-medium-ebony-14px">{{ spanText2 }}</span>
      </div>
      <img
        class="chevron-down-308"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/chevron-down-45@2x.png"
        alt="Chevron Down"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown232",
  props: ["spanText1", "spanText2", "className"],
};
</script>

<style>
.dropdown-113-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 40px;
  min-height: 66px;
  width: 304px;
}

.label-289 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 304px;
}

.dropdown-114 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 304px;
}

.text-251 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 248px;
}

.chevron-down-308 {
  height: 24px;
  width: 24px;
}

.dropdown-113-1.dropdown-115 {
  margin-top: 24px;
}

.dropdown-113-1.dropdown-118 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: 0;
  min-height: 66px;
  position: absolute;
  top: 0;
  width: 304px;
}

.dropdown-113-1.dropdown-117 {
  left: 0;
  margin-top: unset;
  position: absolute;
  top: 0;
}
</style>
