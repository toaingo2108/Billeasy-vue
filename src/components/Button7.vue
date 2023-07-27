<template>
  <div :class="[`button-143`, className || ``]">
    <div class="text-232 poppins-semi-bold-white-16px">
      <span class="spanpeyss poppins-semi-bold-white-16px">Read More</span>
    </div>
    <img
      class="chevron-right-6"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22cf4cc30c096864d00dc/img/chevron-right-1@2x.png"
      alt="Chevron Right"
    />
  </div>
</template>

<script>
export default {
  name: "Button7",
  props: ["className"],
};
</script>

<style>
.button-143 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 48px;
  min-width: 160px;
  padding: 11px 20.5px;
  transition: all 0.15s ease;
}

.button-143:hover {
  transform: translate(0, -5px);
}

.text-232 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 87px;
  text-align: center;
}

.chevron-right-6 {
  align-self: center;
  height: 24px;
  width: 24px;
}

.button-143.button-142 {
  align-self: flex-start;
  cursor: unset;
  margin-left: 32px;
  transition: unset;
}
</style>
