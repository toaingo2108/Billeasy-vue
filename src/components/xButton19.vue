<template>
  <div :class="[`button-180`, className || ``]">
    <img
      class="customize"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/customize-1@2x.png"
      alt="Customize"
    />
    <div class="text-277 poppins-medium-caribbean-green-14px">
      <span class="span9dfvdj poppins-medium-caribbean-green-14px">Customize</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "xButton19",
  props: ["className"],
};
</script>

<style>
.button-180 {
  align-items: flex-start;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 21px;
  margin-top: 1px;
  min-width: 102px;
  transition: all 0.15s ease;
}

.button-180:hover {
  transform: translate(0, -5px);
}

.customize {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-277 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 76px;
  text-align: center;
}

.button-180.button-181,
.button-180.button-182,
.button-180.button-195 {
  cursor: unset;
  transition: unset;
}

.button-180.button-184,
.button-180.button-187,
.button-180.button-188,
.button-180.button-192,
.button-180.button-193,
.button-180.button-194,
.button-180.button-196,
.button-180.button-197,
.button-180.button-198,
.button-180.button-199,
.button-180.button-201,
.button-180.button-202,
.button-180.button-203,
.button-180.button-204 {
  cursor: unset;
  left: 1306px;
  margin-top: unset;
  position: absolute;
  top: 96px;
  transition: unset;
}

.button-180.button-189 {
  margin-left: 720px;
}

.button-180.button-190,
.button-180.button-191 {
  margin-top: unset;
}
</style>
