<template>
  <div class="header-73">
    <frame2443 :src="frame2443Props.src" />
    <div class="title-87 poppins-semi-bold-ebony-20px">
      <span class="poppins-semi-bold-ebony-20px">Accounting Accounts</span>
    </div>
  </div>
</template>

<script>
import Frame2443 from "./Frame2443";
export default {
  name: "Header22",
  components: {
    Frame2443,
  },
  props: ["frame2443Props"],
};
</script>

<style>
.header-73,
.header-74 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  margin-left: 32px;
  min-width: 259px;
  position: relative;
}

.title-87,
.title-88 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}
</style>
