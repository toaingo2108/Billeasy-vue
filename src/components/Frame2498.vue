<template>
  <div :class="[`frame-2498`, className || ``]">
    <div class="ellipse-17-4"></div>
    <div class="category-name poppins-medium-ebony-14px">
      <span class="span-467 poppins-medium-ebony-14px">Category Name</span>
    </div>
    <icon-button22 :src="iconButton2Props.src" />
  </div>
</template>

<script>
import IconButton22 from "./IconButton22";
export default {
  name: "Frame2498",
  components: {
    IconButton22,
  },
  props: ["className", "iconButton2Props"],
};
</script>

<style>
.frame-2498 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 169px;
  position: relative;
}

.ellipse-17-4 {
  align-self: center;
  background-color: var(--purple-heart);
  border-radius: 4px;
  height: 8px;
  width: 8px;
}

.category-name {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 0.5px;
  min-height: 21px;
  min-width: 113px;
}

.frame-2498.frame-250,
.frame-2498.frame-250-3,
.frame-2498.frame-250-4,
.frame-2498.frame-250-5,
.frame-2498.category-name-2,
.frame-2498.category-name-2-1 {
  margin-top: 15px;
}

.frame-2498.frame-250-3 .ellipse-17-4,
.frame-2498.frame-2501 .ellipse-17-4,
.frame-2498.frame-2501-1 .ellipse-17-4,
.frame-2498.category-name-2-1 .ellipse-17-4,
.frame-2498.category-name-4-1 .ellipse-17-4,
.frame-2498.frame-250-1-1 .ellipse-17-4,
.frame-2498.frame-250-2-1 .ellipse-17-4 {
  background-color: var(--atlantis);
}

.frame-2498.frame-250-4 .ellipse-17-4,
.frame-2498.frame-2502 .ellipse-17-4,
.frame-2498.frame-2502-1 .ellipse-17-4,
.frame-2498.category-name-2 .ellipse-17-4,
.frame-2498.category-name-4 .ellipse-17-4,
.frame-2498.frame-250-1 .ellipse-17-4,
.frame-2498.frame-250-2 .ellipse-17-4 {
  background-color: var(--burning-orange-2);
}

.frame-2498.frame-250-5 .ellipse-17-4,
.frame-2498.frame-2503 .ellipse-17-4,
.frame-2498.frame-2503-1 .ellipse-17-4 {
  background-color: var(--persian-rose-2);
}

.frame-2498.frame-250 .ellipse-17-4,
.frame-2498.frame-2504 .ellipse-17-4,
.frame-2498.frame-2504-1 .ellipse-17-4 {
  background-color: var(--dodger-blue);
}

.frame-2498.frame-2498-1,
.frame-2498.frame-2498-2 {
  left: 0;
  position: absolute;
  top: 169px;
}

.frame-2498.frame-2501,
.frame-2498.frame-2501-1 {
  left: 0;
  position: absolute;
  top: 477px;
}

.frame-2498.frame-2502,
.frame-2498.frame-2502-1 {
  left: 0;
  position: absolute;
  top: 533px;
}

.frame-2498.frame-2503,
.frame-2498.frame-2503-1 {
  left: 0;
  position: absolute;
  top: 589px;
}

.frame-2498.frame-2504,
.frame-2498.frame-2504-1 {
  left: 0;
  position: absolute;
  top: 645px;
}

.frame-2498.category-name-4,
.frame-2498.category-name-4-1 {
  align-self: flex-start;
  margin-left: 32px;
  margin-top: 15px;
}

.frame-2498.frame-250-1,
.frame-2498.frame-250-1-1,
.frame-2498.frame-250-2,
.frame-2498.frame-250-2-1 {
  align-self: flex-start;
  margin-left: 24px;
  margin-top: 15px;
}
</style>
