<template>
  <div :class="[`icon-button-334`, className || ``]"><img class="dash" :src="src" alt="Dash" /></div>
</template>

<script>
export default {
  name: "IconButton3",
  props: ["src", "className"],
};
</script>

<style>
.icon-button-334 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 36px;
  min-width: 36px;
  padding: 0 8px;
  transition: all 0.15s ease;
}

.icon-button-334:hover,
.icon-button-334.icon-button-333:hover {
  transform: scale(1.1);
}

.dash {
  height: 20px;
  width: 20px;
}

.icon-button-334.icon-button-333 {
  align-self: center;
  background-color: var(--caribbean-green);
}
</style>
