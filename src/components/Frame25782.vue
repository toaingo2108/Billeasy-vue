<template>
  <div :class="[`frame-25-1`, className || ``]">
    <img
      class="check-157"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22cf4cc30c096864d00dc/img/check-1@2x.png"
      alt="Check"
    />
    <div class="bevaka valign-text-middle poppins-medium-white-24px">
      <span
        ><span class="span-363 poppins-medium-white-24px">{{ spanText }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame25782",
  props: ["spanText", "className"],
};
</script>

<style>
.frame-25-1 {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  min-width: 595px;
}

.check-157 {
  height: 32px;
  width: 32px;
}

.bevaka {
  height: 36px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  width: 547px;
}

.frame-25-1.frame-25-2 .bevaka,
.frame-25-1.frame-25-3 .bevaka,
.frame-25-1.frame-25-4 .bevaka,
.frame-25-1.frame-25-5 .bevaka {
  height: 72px;
}
</style>
