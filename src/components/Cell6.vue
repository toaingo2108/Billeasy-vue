<template>
  <div :class="[`cell-146-1`, className || ``]">
    <div class="blue-t-shirt-xs-57 poppins-semi-bold-ebony-13px">
      <span class="span-247 poppins-semi-bold-ebony-13px">{{ children }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cell6",
  props: ["children", "className"],
};
</script>

<style>
.cell-146-1 {
  align-items: flex-start;
  background-color: var(--whisper);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 176px;
}

.blue-t-shirt-xs-57 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 152px;
}

.cell-146-1.cell-148 {
  background-color: var(--white);
  margin-top: unset;
}
</style>
