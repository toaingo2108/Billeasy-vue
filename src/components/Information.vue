<template>
  <div class="information-24">
    <div class="label-468 poppins-normal-ebony-14px">
      <span class="poppins-normal-ebony-14px">{{ spanText1 }}</span>
    </div>
    <div class="dropdown-166">
      <div class="text-394 poppins-medium-ebony-14px">
        <span class="poppins-medium-ebony-14px">{{ spanText2 }}</span>
      </div>
      <img
        class="chevron-down-333"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/chevron-down-45@2x.png"
        alt="Chevron Down"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Information",
  props: ["spanText1", "spanText2"],
};
</script>

<style>
.information-24,
.information-25,
.information-26,
.information-27,
.information-22,
.information-23 {
  align-items: center;
  display: flex;
  gap: 32px;
  min-width: 576px;
}

.label-468,
.label-469,
.label-470,
.label-471,
.label-466,
.label-467 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  width: 208px;
}

.dropdown-166,
.dropdown-167,
.dropdown-168,
.dropdown-169,
.dropdown-164,
.dropdown-165 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.text-394,
.text-395,
.text-396,
.text-397,
.text-392,
.text-393 {
  letter-spacing: 0;
  line-height: 24px;
  width: 280px;
}

.chevron-down-333,
.chevron-down-334,
.chevron-down-335,
.chevron-down-336,
.chevron-down-331,
.chevron-down-332 {
  align-self: center;
  height: 24px;
  width: 24px;
}
</style>
