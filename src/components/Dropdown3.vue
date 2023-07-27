<template>
  <div class="dropdown-90">
    <div class="text-206 poppins-medium-ebony-14px">
      <span class="poppins-medium-ebony-14px">{{ spanText }}</span>
    </div>
    <img
      class="chevron-down-297"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/chevron-down-45@2x.png"
      alt="Chevron Down"
    />
  </div>
</template>

<script>
export default {
  name: "Dropdown3",
  props: ["spanText"],
};
</script>

<style>
.dropdown-90,
.dropdown-91,
.dropdown-92,
.dropdown-93,
.dropdown-94 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 208px;
}

.text-206,
.text-207,
.text-208,
.text-209,
.text-210 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 152px;
}

.chevron-down-297,
.chevron-down-298,
.chevron-down-299,
.chevron-down-300,
.chevron-down-301 {
  height: 24px;
  width: 24px;
}
</style>
