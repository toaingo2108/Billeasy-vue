<template>
  <div class="dropdown-100">
    <div class="label-223 poppins-medium-ebony-13px">
      <span class="poppins-medium-ebony-13px">{{ spanText1 }}</span>
    </div>
    <div class="dropdown-101">
      <div class="text-244 poppins-medium-ebony-14px">
        <span class="poppins-medium-ebony-14px">{{ spanText2 }}</span>
      </div>
      <img
        class="chevron-down-305"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/chevron-down-45@2x.png"
        alt="Chevron Down"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown8",
  props: ["spanText1", "spanText2"],
};
</script>

<style>
.dropdown-100,
.dropdown-102 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 256px;
}

.label-223,
.label-224 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 256px;
}

.dropdown-101,
.dropdown-103 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 256px;
}

.text-244,
.text-245 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 200px;
}

.chevron-down-305,
.chevron-down-306 {
  height: 24px;
  width: 24px;
}
</style>
