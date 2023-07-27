<template>
  <div :class="[`cell-223-1`, className || ``]">
    <div class="blue-t-shirt-xs-132 poppins-semi-bold-ebony-13px">
      <span class="span-329 poppins-semi-bold-ebony-13px">{{ children }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cell9",
  props: ["children", "className"],
};
</script>

<style>
.cell-223-1 {
  align-items: flex-start;
  background-color: var(--whisper);
  display: flex;
  height: 64px;
  padding: 21px 12px;
  width: 144px;
}

.blue-t-shirt-xs-132 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 120px;
}

.cell-223-1.cell-225 {
  background-color: var(--white);
  margin-top: -8px;
}
</style>
