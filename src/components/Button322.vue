<template>
  <div :class="[`button-164`, className || ``]">
    <img
      class="chevron-left-6"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/chevron-left-11@2x.png"
      alt="Chevron Left"
    />
    <div class="text-259 poppins-medium-ebony-14px"><span class="spannv978l poppins-medium-ebony-14px">Back</span></div>
  </div>
</template>

<script>
export default {
  name: "Button322",
  props: ["className"],
};
</script>

<style>
.button-164 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
  width: 87px;
}

.button-164:hover {
  transform: translate(0, -5px);
}

.chevron-left-6 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-259 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.button-164.button-168,
.button-164.button-169,
.button-164.button-170,
.button-164.button-171,
.button-164.button-172,
.button-164.button-173,
.button-164.button-175,
.button-164.button-176,
.button-164.button-177 {
  cursor: unset;
  transition: unset;
}
</style>
