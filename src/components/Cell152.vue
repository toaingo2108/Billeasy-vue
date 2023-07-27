<template>
  <div :class="[`cell-25`, className || ``]">
    <div class="blue-t-shirt-xs-25">
      <span class="spanykqgk poppins-semi-bold-ebony-13px">{{ spanText }}</span>
    </div>
    <img
      class="sort-4"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
      alt="Sort"
    />
  </div>
</template>

<script>
export default {
  name: "Cell152",
  props: ["spanText", "className"],
};
</script>

<style>
.cell-25 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 10px;
  width: 104px;
}

.blue-t-shirt-xs-25 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 2px;
  min-height: 20px;
  min-width: 66px;
}

.sort-4 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-25.cell-26,
.cell-25.cell-27,
.cell-25.cell-28,
.cell-25.cell-29 {
  padding: 21px 11px;
}

.cell-25.cell-26 .blue-t-shirt-xs-25,
.cell-25.cell-27 .blue-t-shirt-xs-25,
.cell-25.cell-28 .blue-t-shirt-xs-25,
.cell-25.cell-29 .blue-t-shirt-xs-25 {
  margin-left: 1px;
  min-width: 65px;
}
</style>
