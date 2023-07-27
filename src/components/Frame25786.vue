<template>
  <div class="frame-25-9">
    <img
      class="check-160"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22cf4cc30c096864d00dc/img/check-1@2x.png"
      alt="Check"
    />
    <div class="skapa-personliga-import-exportmallar valign-text-middle poppins-medium-white-24px">
      <span
        ><span class="poppins-medium-white-24px">{{ spanText }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame25786",
  props: ["spanText"],
};
</script>

<style>
.frame-25-9 {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  min-width: 688px;
}

.check-160 {
  height: 32px;
  width: 32px;
}

.skapa-personliga-import-exportmallar,
.importera-bokfringsdata-via-imexta,
.exportera-bokfringsdata-via-imexta,
.bokfr-skicka-impo {
  height: 36px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  width: 640px;
}
</style>
