<template>
  <div :class="[`cell-149-1`, className || ``]">
    <div class="blue-t-shirt-xs-60 poppins-semi-bold-ebony-13px">
      <span class="span-250 poppins-semi-bold-ebony-13px">{{ children }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cell7",
  props: ["children", "className"],
};
</script>

<style>
.cell-149-1 {
  align-items: flex-start;
  background-color: var(--whisper);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 384px;
}

.blue-t-shirt-xs-60 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 360px;
}

.cell-149-1.cell-151,
.cell-149-1.cell-152 {
  background-color: var(--white);
}
</style>
