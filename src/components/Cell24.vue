<template>
  <div :class="[`cell-304-1`, className || ``]">
    <div class="blue-t-shirt-xs-199 poppins-medium-comet-13px">
      <span class="span-431 poppins-medium-comet-13px">{{ children }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cell24",
  props: ["children", "className"],
};
</script>

<style>
.cell-304-1 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  padding: 21px 12px;
  width: 296px;
}

.blue-t-shirt-xs-199 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 272px;
}

.cell-304-1.cell-305 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 140px;
  padding: 19px 12px;
  width: 296px;
}

.cell-304-1.cell-305 .blue-t-shirt-xs-199 {
  min-height: 100px;
}
</style>
