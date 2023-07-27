<template>
  <div class="frame-2652">
    <frame2578 :spanText="frame25781Props.spanText" />
    <frame2578 :spanText="frame25782Props.spanText" />
    <frame2580 :spanText="frame25801Props.spanText" />
    <frame2580 :spanText="frame25802Props.spanText" />
  </div>
</template>

<script>
import Frame2578 from "./Frame2578";
import Frame2580 from "./Frame2580";
export default {
  name: "Frame2652",
  components: {
    Frame2578,
    Frame2580,
  },
  props: ["frame25781Props", "frame25782Props", "frame25801Props", "frame25802Props"],
};
</script>

<style>
.frame-2652,
.frame-2652-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 21px;
  min-height: 168px;
  position: relative;
  width: 158px;
}
</style>
