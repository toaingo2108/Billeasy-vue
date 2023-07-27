<template>
  <div class="dropdown-160">
    <div class="label-425 poppins-medium-ebony-13px">
      <span class="poppins-medium-ebony-13px">{{ spanText1 }}</span
      ><span class="poppins-medium-alizarin-crimson-13px">*</span>
    </div>
    <div class="dropdown-161">
      <div class="text-367 poppins-medium-ebony-14px">
        <span class="poppins-medium-ebony-14px">{{ spanText3 }}</span>
      </div>
      <img
        class="chevron-down-328"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/chevron-down-45@2x.png"
        alt="Chevron Down"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown2322",
  props: ["spanText1", "spanText3"],
};
</script>

<style>
.dropdown-160 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 156px;
}

.label-425 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 156px;
}

.dropdown-161 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 156px;
}

.text-367 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 100px;
}

.chevron-down-328 {
  height: 24px;
  width: 24px;
}
</style>
