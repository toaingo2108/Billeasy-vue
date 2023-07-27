<template>
  <div :class="[`cell-211-1`, className || ``]">
    <status :src="statusProps.src" :className="statusProps.className" />
  </div>
</template>

<script>
import Status from "./Status";
export default {
  name: "Cell4",
  components: {
    Status,
  },
  props: ["className", "statusProps"],
};
</script>

<style>
.cell-211-1 {
  align-items: center;
  background-color: var(--whisper);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 0 52px;
  position: relative;
  width: 128px;
}

.cell-211-1.cell-212,
.cell-211-1.cell-213 {
  background-color: var(--white);
}
</style>
