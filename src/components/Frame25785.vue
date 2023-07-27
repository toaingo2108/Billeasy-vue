<template>
  <div class="frame-25-8">
    <img
      class="check-159"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22cf4cc30c096864d00dc/img/check-1@2x.png"
      alt="Check"
    />
    <p class="up-to-50-company-watches valign-text-middle poppins-medium-mischka-24px">
      <span
        ><span class="poppins-medium-mischka-24px">{{ spanText }}</span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Frame25785",
  props: ["spanText"],
};
</script>

<style>
.frame-25-8 {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  min-width: 405px;
}

.check-159 {
  height: 32px;
  width: 32px;
}

.up-to-50-company-watches,
.up-to-5-users,
.upp-till-5-automation-rules,
.extended-analytics {
  height: 36px;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  width: 357px;
}
</style>
