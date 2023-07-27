<template>
  <div :class="[`icon-button-238`, className || ``]"><img class="apply-4" :src="src" alt="Apply" /></div>
</template>

<script>
export default {
  name: "IconButton",
  props: ["src", "className"],
};
</script>

<style>
.icon-button-238 {
  align-items: center;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  display: flex;
  height: 40px;
  min-width: 40px;
  padding: 0 10px;
}

.apply-4 {
  height: 20px;
  width: 20px;
}

.icon-button-238.icon-button-240,
.icon-button-238.icon-button-244,
.icon-button-238.icon-button-245,
.icon-button-238.icon-button-246,
.icon-button-238.icon-button-248,
.icon-button-238.icon-button-250,
.icon-button-238.icon-button-261,
.icon-button-238.icon-button-263,
.icon-button-238.icon-button-265,
.icon-button-238.icon-button-270,
.icon-button-238.icon-button-272,
.icon-button-238.icon-button-273,
.icon-button-238.icon-button-277,
.icon-button-238.icon-button-281,
.icon-button-238.icon-button-289 .apply-4,
.icon-button-238.icon-button-290,
.icon-button-238.icon-button-295,
.icon-button-238.icon-button-303 {
  cursor: pointer;
  transition: all 0.15s ease;
}

.icon-button-238.icon-button-240:hover,
.icon-button-238.icon-button-244:hover,
.icon-button-238.icon-button-245:hover,
.icon-button-238.icon-button-246:hover,
.icon-button-238.icon-button-248:hover,
.icon-button-238.icon-button-250:hover,
.icon-button-238.icon-button-251:hover,
.icon-button-238.icon-button-252:hover,
.icon-button-238.icon-button-253:hover,
.icon-button-238.icon-button-256:hover,
.icon-button-238.icon-button-258:hover,
.icon-button-238.icon-button-259:hover,
.icon-button-238.icon-button-260:hover,
.icon-button-238.icon-button-236:hover,
.icon-button-238.icon-button-261:hover,
.icon-button-238.icon-button-263:hover,
.icon-button-238.icon-button-264:hover,
.icon-button-238.icon-button-265:hover,
.icon-button-238.icon-button-266:hover,
.icon-button-238.icon-button-269:hover,
.icon-button-238.icon-button-270:hover,
.icon-button-238.icon-button-271:hover,
.icon-button-238.icon-button-272:hover,
.icon-button-238.icon-button-273:hover,
.icon-button-238.icon-button-277:hover,
.icon-button-238.icon-button-281:hover,
.apply-4:hover,
.icon-button-238.icon-button-290:hover,
.icon-button-238.icon-button-295:hover,
.icon-button-238.icon-button-303:hover,
.icon-button-238.icon-button-237:hover {
  transform: translate(0, -5px);
}

.icon-button-238.frame-2616 {
  background-color: var(--comet);
  border-radius: 14px;
  min-width: unset;
  overflow: hidden;
  width: 40px;
}

.icon-button-238.icon-button-251,
.icon-button-238.icon-button-252,
.icon-button-238.icon-button-253,
.icon-button-238.icon-button-256,
.icon-button-238.icon-button-258,
.icon-button-238.icon-button-259,
.icon-button-238.icon-button-260,
.icon-button-238.icon-button-236,
.icon-button-238.icon-button-264,
.icon-button-238.icon-button-266,
.icon-button-238.icon-button-269,
.icon-button-238.icon-button-271,
.icon-button-238.icon-button-237 {
  background-color: var(--white);
  cursor: pointer;
  transition: all 0.15s ease;
}

.icon-button-238.icon-button-254,
.icon-button-238.icon-button-255,
.icon-button-238.icon-button-257,
.icon-button-238.icon-button-232,
.icon-button-238.icon-button-233,
.icon-button-238.icon-button-234,
.icon-button-238.icon-button-235,
.icon-button-238.icon-button-217,
.icon-button-238.icon-button-218,
.icon-button-238.icon-button-219,
.icon-button-238.icon-button-275,
.icon-button-238.icon-button-278,
.icon-button-238.icon-button-280,
.icon-button-238.icon-button-282,
.icon-button-238.icon-button-284,
.icon-button-238.icon-button-286,
.icon-button-238.icon-button-220,
.icon-button-238.icon-button-289,
.icon-button-238.icon-button-221,
.icon-button-238.icon-button-222,
.icon-button-238.icon-button-223,
.icon-button-238.icon-button-224,
.icon-button-238.icon-button-225,
.icon-button-238.icon-button-226,
.icon-button-238.icon-button-227,
.icon-button-238.icon-button-228,
.icon-button-238.icon-button-229,
.icon-button-238.icon-button-230,
.icon-button-238.icon-button-231 {
  background-color: var(--white);
}

.icon-button-238.frame-2516 {
  background-color: var(--white);
  border-radius: 12px;
  left: 0;
  min-width: unset;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 40px;
}

.icon-button-238.frame-2517 {
  background-color: var(--white);
  border-radius: 12px;
  left: 0;
  min-width: unset;
  overflow: hidden;
  position: absolute;
  top: 88px;
  width: 40px;
}

.icon-button-238.frame-2518 {
  background-color: var(--white);
  border-radius: 12px;
  left: 8px;
  min-width: unset;
  overflow: hidden;
  position: absolute;
  top: 30px;
  width: 40px;
}

.icon-button-238.frame-2519 {
  background-color: var(--whisper);
  border-radius: 12px;
  left: 8px;
  min-width: unset;
  overflow: hidden;
  position: absolute;
  top: 118px;
  width: 40px;
}

.icon-button-238.frame-2520 {
  background-color: var(--whisper);
  border-radius: 12px;
  left: 8px;
  min-width: unset;
  overflow: hidden;
  position: absolute;
  top: 206px;
  width: 40px;
}
</style>
