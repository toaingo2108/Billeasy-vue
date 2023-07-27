<template>
  <header :class="[`header-30`, className || ``]">
    <frame2443 :src="frame2443Props.src" />
    <div class="title-42 poppins-semi-bold-ebony-20px">
      <span class="spanapnlk poppins-semi-bold-ebony-20px">Templates</span>
    </div>
  </header>
</template>

<script>
import Frame2443 from "./Frame2443";
export default {
  name: "Header2",
  components: {
    Frame2443,
  },
  props: ["className", "frame2443Props"],
};
</script>

<style>
.header-30 {
  align-items: flex-start;
  align-self: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  gap: 12px;
  height: 28px;
  justify-content: flex-start;
  margin-left: 32px;
  min-width: 149px;
  position: relative;
  width: auto;
}

.title-42 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  min-width: 109px;
  white-space: nowrap;
}

.header-30.header-32,
.header-30.header-33 {
  align-self: unset;
  background-color: unset;
  flex-direction: unset;
  flex-shrink: unset;
  justify-content: unset;
  margin-top: 24px;
  width: unset;
}

.header-30.header-32 .title-42,
.header-30.header-33 .title-42 {
  min-width: unset;
}
</style>
