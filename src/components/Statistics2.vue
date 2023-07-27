<template>
  <div :class="[`statistics-19`, className || ``]">
    <div class="flex-col-229">
      <div class="header-120">
        <frame2443 :src="frame2443Props.src" />
        <div class="title-122 poppins-semi-bold-ebony-20px">
          <span class="spanlgeag poppins-semi-bold-ebony-20px">Email Addresses</span>
        </div>
      </div>
      <frame2480 :className="frame2480Props.className" />
    </div>
    <icon-button32 :src="iconButton32Props.src" :className="iconButton32Props.className" />
  </div>
</template>

<script>
import Frame2443 from "./Frame2443";
import Frame2480 from "./Frame2480";
import IconButton32 from "./IconButton32";
export default {
  name: "Statistics2",
  components: {
    Frame2443,
    Frame2480,
    IconButton32,
  },
  props: ["className", "frame2443Props", "frame2480Props", "iconButton32Props"],
};
</script>

<style>
.statistics-19 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  gap: 48px;
  height: 176px;
  margin-top: 24px;
  overflow: hidden;
  padding: 22px 32px;
  position: relative;
  width: 480px;
}

.flex-col-229 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 2px;
  min-height: 120px;
  position: relative;
  width: 336px;
}

.header-120 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  min-width: 208px;
  position: relative;
}

.title-122 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.statistics-19.statistics-22,
.statistics-19.statistics-26,
.statistics-19.statistics-27 {
  margin-right: 448px;
  margin-top: 9px;
}
</style>
