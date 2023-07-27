<template>
  <div :class="[`header-54`, className || ``]">
    <frame2443 :src="frame2443Props.src" />
    <div class="title-60 poppins-semi-bold-ebony-20px">
      <span class="spanabvo7 poppins-semi-bold-ebony-20px">Row Fields to Show</span>
    </div>
  </div>
</template>

<script>
import Frame2443 from "./Frame2443";
export default {
  name: "Header6",
  components: {
    Frame2443,
  },
  props: ["className", "frame2443Props"],
};
</script>

<style>
.header-54 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  left: 0;
  min-width: 231px;
  position: absolute;
  top: 14px;
}

.title-60 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.header-54.header-55 {
  left: unset;
  position: relative;
  top: unset;
}
</style>
