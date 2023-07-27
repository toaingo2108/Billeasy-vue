<template>
  <div :class="[`cell-248`, className || ``]">
    <div class="blue-t-shirt-xs-160 poppins-semi-bold-ebony-13px">
      <span class="spang0xuh poppins-semi-bold-ebony-13px">{{ spanText }}</span>
    </div>
    <img
      class="sort-39"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
      alt="Sort"
    />
  </div>
</template>

<script>
export default {
  name: "Cell14",
  props: ["spanText", "className"],
};
</script>

<style>
.cell-248 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 232px;
}

.blue-t-shirt-xs-160 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 37px;
}

.sort-39 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-248.cell-251 .blue-t-shirt-xs-160,
.cell-248.cell-252 .blue-t-shirt-xs-160 {
  min-width: 39px;
}
</style>
