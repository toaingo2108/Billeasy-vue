<template>
  <div :class="[`button-220`, className || ``]">
    <img class="add-58" :src="check" alt="Add" />
    <div class="text-319 poppins-medium-white-14px">
      <span class="span9cjei poppins-medium-white-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button52",
  props: ["check", "spanText", "className"],
};
</script>

<style>
.button-220 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  left: 472px;
  min-width: 128px;
  padding: 8.5px 16.5px;
  position: absolute;
  top: 0;
}

.add-58 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-319 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 67px;
  text-align: center;
}

.button-220.button-221,
.button-220.button-224 {
  left: 1280px;
  top: 248px;
}

.button-220.button-222 {
  cursor: pointer;
  left: unset;
  padding: 8.5px 17px;
  position: unset;
  top: unset;
  transition: all 0.15s ease;
}

.button-220.button-222:hover {
  transform: translate(0, -5px);
}

.button-220.button-222 .text-319 {
  min-width: 66px;
}

.button-220.button-223 {
  left: unset;
  position: unset;
  top: unset;
}
</style>
