<template>
  <div class="dropdown-149">
    <div class="text-349 poppins-medium-ebony-14px">
      <span class="poppins-medium-ebony-14px">{{ spanText }}</span>
    </div>
    <img
      class="chevron-down-323"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/chevron-down-45@2x.png"
      alt="Chevron Down"
    />
  </div>
</template>

<script>
export default {
  name: "Dropdown62",
  props: ["spanText"],
};
</script>

<style>
.dropdown-149,
.dropdown-150 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 88px;
}

.text-349,
.text-350 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 32px;
}

.chevron-down-323,
.chevron-down-324 {
  height: 24px;
  width: 24px;
}
</style>
