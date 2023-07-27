<template>
  <div :class="[`header-41`, className || ``]">
    <frame2443 :src="frame2443Props.src" :className="frame2443Props.className" />
    <div class="title-47 poppins-semi-bold-ebony-20px">
      <span class="spanmf64b poppins-semi-bold-ebony-20px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
import Frame2443 from "./Frame2443";
export default {
  name: "Header172",
  components: {
    Frame2443,
  },
  props: ["spanText", "className", "frame2443Props"],
};
</script>

<style>
.header-41 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 12px;
  height: 28px;
  margin-right: -60px;
  min-width: 300px;
  position: relative;
}

.title-47 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.header-41.header-42,
.header-41.header-43 {
  align-self: unset;
  margin-right: 4px;
}
</style>
