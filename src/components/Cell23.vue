<template>
  <div :class="[`cell-301-1`, className || ``]">
    <div class="blue-t-shirt-xs-196 poppins-semi-bold-ebony-13px">
      <span class="span-428 poppins-semi-bold-ebony-13px">{{ children }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cell23",
  props: ["children", "className"],
};
</script>

<style>
.cell-301-1 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  padding: 21px 12px;
  width: 192px;
}

.blue-t-shirt-xs-196 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 168px;
}

.cell-301-1.cell-302,
.cell-301-1.cell-303 {
  margin-top: -8px;
}
</style>
