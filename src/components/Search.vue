<template>
  <div :class="[`search-4`, className || ``]">
    <input52 />
    <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
  </div>
</template>

<script>
import Input52 from "./Input52";
import IconButton from "./IconButton";
export default {
  name: "Search",
  components: {
    Input52,
    IconButton,
  },
  props: ["className", "iconButtonProps"],
};
</script>

<style>
.search-4 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 336px;
  position: relative;
}

.search-4.search-12,
.search-4.search-13 {
  left: 256px;
  position: absolute;
  top: 248px;
}
</style>
