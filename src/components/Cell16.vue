<template>
  <div :class="[`cell-256-1`, className || ``]">
    <div class="blue-t-shirt-xs-166 poppins-semi-bold-ebony-13px">
      <span class="span-407 poppins-semi-bold-ebony-13px">{{ children }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cell16",
  props: ["children", "className"],
};
</script>

<style>
.cell-256-1 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 208px;
}

.blue-t-shirt-xs-166 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 184px;
}
</style>
