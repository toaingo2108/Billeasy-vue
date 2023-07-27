<template>
  <div :class="[`cell-343-1`, className || ``]">
    <div class="blue-t-shirt-xs-241 poppins-semi-bold-ebony-13px">
      <span class="span-535 poppins-semi-bold-ebony-13px">1001</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cell82",
  props: ["className"],
};
</script>

<style>
.cell-343-1 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 160px;
}

.blue-t-shirt-xs-241 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 136px;
}
</style>
