<template>
  <div :class="[`frame-262`, className || ``]">
    <img
      class="unsplashhpj-sk-u2-uysu-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22cf4cc30c096864d00dc/img/unsplash-hpjsku2uysu-6@2x.png"
      alt="unsplash:hpjSkU2UYSU"
    />
    <frame2625 />
  </div>
</template>

<script>
import Frame2625 from "./Frame2625";
export default {
  name: "Frame2627",
  components: {
    Frame2625,
  },
  props: ["className"],
};
</script>

<style>
.frame-262 {
  align-items: center;
  background-color: var(--white);
  border-radius: 48px;
  cursor: pointer;
  display: flex;
  gap: 64px;
  height: 352px;
  min-width: 1232px;
  padding: 0 32px;
  position: relative;
  transition: all 0.2s ease;
}

.frame-262:hover {
  transform: scale(1.1);
}

.unsplashhpj-sk-u2-uysu-1 {
  height: 288px;
  width: 320px;
}

.frame-262.frame-2629 {
  align-items: center;
  background-color: var(--white);
  border-radius: 48px;
  cursor: pointer;
  display: flex;
  gap: 64px;
  height: 352px;
  margin-right: 160px;
  min-width: 1232px;
  padding: 0 32px;
  position: relative;
  transition: all 0.2s ease;
}

.frame-262.frame-263 {
  margin-right: 160px;
  margin-top: 20px;
}
</style>
