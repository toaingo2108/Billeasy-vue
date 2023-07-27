<template>
  <div :class="[`button-132`, className || ``]">
    <div class="text-223 poppins-semi-bold-white-16px">
      <span class="span-367 poppins-semi-bold-white-16px">Learn More</span>
    </div>
    <img
      class="chevron-right-2"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22cf4cc30c096864d00dc/img/chevron-right-1@2x.png"
      alt="Chevron Right"
    />
  </div>
</template>

<script>
export default {
  name: "Button5",
  props: ["className"],
};
</script>

<style>
.button-132 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 64px;
  min-width: 184px;
  padding: 19px 31px;
  transition: all 0.15s ease;
}

.button-132:hover {
  transform: translate(0, -5px);
}

.text-223 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 90px;
  text-align: center;
}

.chevron-right-2 {
  align-self: center;
  height: 24px;
  width: 24px;
}

.button-132.button-133 {
  left: 1600px;
  position: absolute;
  top: 2097px;
}

.button-132.button-134 {
  left: 640px;
  position: absolute;
  top: 983px;
}
</style>
