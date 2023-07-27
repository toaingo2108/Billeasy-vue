<template>
  <div :class="[`icon-button-364`, className || ``]"><img class="dot-menu-61" :src="src" alt="Dot Menu" /></div>
</template>

<script>
export default {
  name: "IconButton32",
  props: ["src", "className"],
};
</script>

<style>
.icon-button-364 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 32px;
  margin-top: 1px;
  min-width: 32px;
  padding: 0 6px;
  transition: all 0.15s ease;
}

.icon-button-364:hover,
.icon-button-364.icon-button-355:hover,
.icon-button-364.icon-button-356:hover,
.icon-button-364.icon-button-357:hover,
.icon-button-364.icon-button-359:hover,
.icon-button-364.icon-button-360:hover,
.icon-button-364.icon-button-361:hover {
  transform: translate(0, -5px);
}

.dot-menu-61 {
  height: 20px;
  width: 20px;
}

.icon-button-364.icon-button-365 {
  cursor: unset;
  transition: unset;
}

.icon-button-364.icon-button-352,
.icon-button-364.icon-button-353,
.icon-button-364.icon-button-354 {
  cursor: unset;
  left: 184px;
  margin-top: unset;
  position: absolute;
  top: 50px;
  transition: unset;
}

.icon-button-364.icon-button-355,
.icon-button-364.icon-button-356,
.icon-button-364.icon-button-357,
.icon-button-364.icon-button-359,
.icon-button-364.icon-button-360,
.icon-button-364.icon-button-361 {
  margin-top: unset;
}

.icon-button-364.icon-button-366,
.icon-button-364.icon-button-367,
.icon-button-364.icon-button-370,
.icon-button-364.icon-button-371 {
  align-self: flex-start;
  margin-left: 135px;
  margin-top: unset;
}

.icon-button-364.icon-button-358,
.icon-button-364.icon-button-362,
.icon-button-364.icon-button-363 {
  cursor: unset;
  margin-top: unset;
  transition: unset;
}

.icon-button-364.icon-button-368,
.icon-button-364.icon-button-369,
.icon-button-364.icon-button-372,
.icon-button-364.icon-button-373 {
  align-self: flex-start;
  cursor: unset;
  margin-left: 135px;
  margin-top: unset;
  transition: unset;
}
</style>
