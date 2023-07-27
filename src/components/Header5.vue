<template>
  <div :class="[`header-44`, className || ``]">
    <frame2443 :src="frame2443Props.src" />
    <div class="title-50 poppins-semi-bold-ebony-20px">
      <span class="spani6n8s poppins-semi-bold-ebony-20px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
import Frame2443 from "./Frame2443";
export default {
  name: "Header5",
  components: {
    Frame2443,
  },
  props: ["spanText", "className", "frame2443Props"],
};
</script>

<style>
.header-44 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  margin-right: 49px;
  min-width: 159px;
  position: relative;
}

.title-50 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.header-44.header-45,
.header-44.header-46,
.header-44.header-47,
.header-44.header-48,
.header-44.header-49,
.header-44.header-50,
.header-44.header-51,
.header-44.header-52,
.header-44.header-53 {
  margin-right: unset;
  min-width: 161px;
}
</style>
