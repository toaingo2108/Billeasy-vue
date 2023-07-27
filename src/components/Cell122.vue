<template>
  <div :class="[`cell-45`, className || ``]">
    <div class="checkbox-47"></div>
  </div>
</template>

<script>
export default {
  name: "Cell122",
  props: ["className"],
};
</script>

<style>
.cell-45 {
  align-items: center;
  background-color: var(--whisper);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 0 23px;
  width: 64px;
}

.checkbox-47 {
  background-color: var(--white);
  border-radius: 6px;
  height: 18px;
  width: 18px;
}
</style>
