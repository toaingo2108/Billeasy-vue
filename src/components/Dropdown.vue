<template>
  <div class="dropdown-2">
    <div class="text-9 poppins-medium-ebony-14px">
      <span class="poppins-medium-ebony-14px">{{ spanText }}</span>
    </div>
    <img
      class="chevron-down-223"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/chevron-down-45@2x.png"
      alt="Chevron Down"
    />
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: ["spanText"],
};
</script>

<style>
.dropdown-2,
.dropdown-3,
.dropdown-1 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 448px;
}

.text-9,
.text-10,
.text-8 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 392px;
}

.chevron-down-223,
.chevron-down-224,
.chevron-down-222 {
  height: 24px;
  width: 24px;
}
</style>
