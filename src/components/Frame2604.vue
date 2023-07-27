<template>
  <div class="frame-260">
    <p class="do-you-have-a-setup-cost-1 poppins-semi-bold-ebony-24px">
      <span class="poppins-semi-bold-ebony-24px">Do you have a setup cost?</span>
    </p>
    <icon-button3 :src="iconButton3Props.src" :className="iconButton3Props.className" />
  </div>
</template>

<script>
import IconButton3 from "./IconButton3";
export default {
  name: "Frame2604",
  components: {
    IconButton3,
  },
  props: ["iconButton3Props"],
};
</script>

<style>
.frame-260 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  gap: 104px;
  height: 96px;
  margin-top: 12px;
  overflow: hidden;
  padding: 29px 57px;
  position: relative;
  width: 1104px;
}

.do-you-have-a-setup-cost-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 2px;
  min-height: 36px;
  width: 848px;
}
</style>
