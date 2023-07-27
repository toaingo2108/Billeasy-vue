<template>
  <div class="row-product-categories-1 poppins-semi-bold-ebony-13px">
    <div class="text-11-2"><span class="poppins-semi-bold-ebony-13px">1.</span></div>
    <input42 />
    <div class="input-180">
      <p class="input-text-285 poppins-normal-ebony-14px">
        <span class="poppins-normal-ebony-14px">This categories are for all products created the last 30 days</span>
      </p>
    </div>
    <div class="number-80"><span class="poppins-semi-bold-ebony-13px">133</span></div>
    <div class="icon-button-381"></div>
  </div>
</template>

<script>
import Input42 from "./Input42";
export default {
  name: "RowProductCategories",
  components: {
    Input42,
  },
};
</script>

<style>
.row-product-categories-1,
.row-product-categories-2 {
  align-items: center;
  display: flex;
  min-width: 1056px;
  position: relative;
}

.text-11-2,
.text-1-5 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 20px;
  width: 24px;
}

.input-180,
.input-181 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  margin-left: 12px;
  overflow: hidden;
  padding: 7px 12px;
  width: 596px;
}

.input-text-285,
.input-text-286 {
  letter-spacing: 0;
  line-height: 24px;
  width: 572px;
}

.number-80,
.number-81 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 12px;
  min-height: 20px;
  text-align: center;
  width: 192px;
}

.icon-button-381,
.icon-button-382 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/dot-menu-14@2x.png);
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 22px;
  width: 20px;
}
</style>
