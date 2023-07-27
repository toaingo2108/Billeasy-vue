<template>
  <div class="frame-25-10">
    <img
      class="check-161"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22cf4cc30c096864d00dc/img/check-1@2x.png"
      alt="Check"
    />
    <div class="helt-molnbaserat valign-text-middle poppins-medium-ebony-24px">
      <span
        ><span class="poppins-medium-ebony-24px">{{ spanText }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame25787",
  props: ["spanText"],
};
</script>

<style>
.frame-25-10 {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  min-width: 688px;
}

.check-161 {
  height: 32px;
  width: 32px;
}

.helt-molnbaserat,
.ppet-api-fr-skrddarsydda-flden,
.mer-n-300-integrationer,
.populr-bland-byrer {
  height: 36px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  width: 640px;
}
</style>
