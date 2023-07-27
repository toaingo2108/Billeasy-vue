<template>
  <div :class="[`frame-2661-1`, className || ``]">
    <div class="not-activated poppins-normal-comet-14px">
      <span class="spandm1xy poppins-normal-comet-14px">{{ children }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame2661",
  props: ["children", "className"],
};
</script>

<style>
.frame-2661-1 {
  align-items: flex-start;
  background-color: var(--white);
  cursor: pointer;
  display: flex;
  height: 40px;
  left: 148px;
  min-width: 127px;
  padding: 8.5px 16px;
  position: absolute;
  top: 0;
  transition: all 0.15s ease;
}

.frame-2661-1:hover {
  transform: translate(0, -5px);
  box-shadow: 0px 12px 5px -8px rgba(0, 0, 0, 0.2);
}

.not-activated {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
}

.frame-2661-1.frame-2661-2,
.frame-2661-1.frame-2661-3 {
  cursor: unset;
  transition: unset;
}

.frame-2661-1.frame-2661-4 {
  left: 131px;
}
</style>
