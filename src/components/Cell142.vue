<template>
  <div :class="[`cell-226-1`, className || ``]">
    <div class="blue-t-shirt-xs-135 poppins-medium-comet-13px">
      <span class="span-332 poppins-medium-comet-13px">{{ children }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cell142",
  props: ["children", "className"],
};
</script>

<style>
.cell-226-1 {
  align-items: flex-start;
  background-color: var(--whisper);
  display: flex;
  height: 64px;
  padding: 21px 12px;
  width: 176px;
}

.blue-t-shirt-xs-135 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 152px;
}

.cell-226-1.cell-228 {
  background-color: var(--white);
}

.cell-226-1.cell-229,
.cell-226-1.cell-230,
.cell-226-1.cell-231,
.cell-226-1.cell-232 {
  background-color: var(--white);
  margin-top: -8px;
}
</style>
