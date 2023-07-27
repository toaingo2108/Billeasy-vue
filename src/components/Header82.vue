<template>
  <header :class="[`header-16`, className || ``]">
    <frame2443 :src="frame2443Props.src" />
    <div class="title-18 poppins-semi-bold-ebony-20px">
      <span class="span0jyihi poppins-semi-bold-ebony-20px">{{ spanText }}</span>
    </div>
  </header>
</template>

<script>
import Frame2443 from "./Frame2443";
export default {
  name: "Header82",
  components: {
    Frame2443,
  },
  props: ["spanText", "className", "frame2443Props"],
};
</script>

<style>
.header-16 {
  align-items: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  gap: 12px;
  height: 28px;
  justify-content: flex-start;
  min-width: 124px;
  position: relative;
  width: auto;
}

.title-18 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  min-width: 84px;
  white-space: nowrap;
}

.header-16.header-28 {
  background-color: unset;
  flex-direction: unset;
  flex-shrink: unset;
  justify-content: unset;
  margin-left: 32px;
  min-width: 125px;
  width: unset;
}

.header-16.header-28 .title-18 {
  min-width: unset;
}
</style>
