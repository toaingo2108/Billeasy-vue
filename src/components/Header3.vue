<template>
  <header :class="[`header-34`, className || ``]">
    <frame2443 :src="frame2443Props.src" />
    <div class="title-44 poppins-semi-bold-ebony-20px">
      <span class="span5mzo8 poppins-semi-bold-ebony-20px">{{ spanText }}</span>
    </div>
  </header>
</template>

<script>
import Frame2443 from "./Frame2443";
export default {
  name: "Header3",
  components: {
    Frame2443,
  },
  props: ["spanText", "className", "frame2443Props"],
};
</script>

<style>
.header-34 {
  align-items: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  gap: 12px;
  height: 28px;
  justify-content: flex-start;
  min-width: 229px;
  position: relative;
  width: auto;
}

.title-44 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  min-width: 189px;
  white-space: nowrap;
}

.header-34.header-35 {
  align-self: flex-start;
  background-color: unset;
  flex-direction: unset;
  flex-shrink: unset;
  justify-content: unset;
  margin-left: 32px;
  min-width: 227px;
  width: unset;
}

.header-34.header-35 .title-44 {
  min-width: unset;
}
</style>
