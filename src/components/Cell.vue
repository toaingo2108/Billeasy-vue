<template>
  <div :class="[`cell-165-1`, className || ``]">
    <div class="blue-t-shirt-xs-77 poppins-semi-bold-ebony-13px">
      <span class="span-278 poppins-semi-bold-ebony-13px">{{ children }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: ["children", "className"],
};
</script>

<style>
.cell-165-1 {
  align-items: flex-start;
  background-color: var(--whisper);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 104px;
}

.blue-t-shirt-xs-77 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 80px;
}

.cell-165-1.cell-167,
.cell-165-1.cell-168 {
  margin-top: unset;
}
</style>
