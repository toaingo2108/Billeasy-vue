<template>
  <div :class="[`cell-268`, className || ``]"><status :src="statusProps.src" :className="statusProps.className" /></div>
</template>

<script>
import Status from "./Status";
export default {
  name: "Cell232",
  components: {
    Status,
  },
  props: ["className", "statusProps"],
};
</script>

<style>
.cell-268 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 0 40px;
  position: relative;
  width: 104px;
}

.cell-268.cell-273 {
  margin-top: unset;
}
</style>
