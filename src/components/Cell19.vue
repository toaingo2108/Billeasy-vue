<template>
  <div :class="[`cell-285`, className || ``]">
    <div class="blue-t-shirt-xs-183 poppins-semi-bold-ebony-13px-2">
      <span class="span-420 poppins-semi-bold-ebony-13px-2">{{ children }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cell19",
  props: ["children", "className"],
};
</script>

<style>
.cell-285 {
  align-items: flex-start;
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 168px;
}

.blue-t-shirt-xs-183 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
}

.cell-285.cell-284,
.cell-285.cell-284-1,
.cell-285.cell-284-2 {
  background-color: var(--white);
  margin-top: -4px;
}

.cell-285.cell-284-1 .blue-t-shirt-xs-183,
.cell-285.cell-284-2 .blue-t-shirt-xs-183,
.cell-285.cell-284 .blue-t-shirt-xs-183 {
  width: 144px;
}
</style>
