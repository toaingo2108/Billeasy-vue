<template>
  <div :class="[`cell-286-1`, className || ``]">
    <div class="blue-t-shirt-xs-182 poppins-medium-comet-13px">
      <span class="span-421 poppins-medium-comet-13px">{{ children }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cell20",
  props: ["children", "className"],
};
</script>

<style>
.cell-286-1 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -4px;
  padding: 21px 12px;
  width: 160px;
}

.blue-t-shirt-xs-182 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 136px;
}

.cell-286-1.cell-287,
.cell-286-1.cell-288 {
  margin-top: -8px;
}
</style>
