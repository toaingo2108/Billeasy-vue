<template>
  <div class="cell-761">
    <div class="blue-t-shirt-xs-566 poppins-semi-bold-ebony-13px-2">
      <span class="poppins-semi-bold-ebony-13px-2">{{ spanText }}</span>
    </div>
    <img
      class="sort-219"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
      alt="Sort"
    />
  </div>
</template>

<script>
export default {
  name: "Cell62",
  props: ["spanText"],
};
</script>

<style>
.cell-761 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 6px;
  width: 64px;
}

.blue-t-shirt-xs-566 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 6px;
  min-height: 20px;
  min-width: 30px;
}

.sort-219 {
  align-self: center;
  height: 14px;
  width: 14px;
}
</style>
