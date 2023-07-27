<template>
  <div :class="[`frame-2491-1`, className || ``]">
    <frame248132 :spanText1="frame24811Props.spanText1" />
    <frame248132 :spanText1="frame24812Props.spanText1" :className="frame24812Props.className" />
  </div>
</template>

<script>
import Frame248132 from "./Frame248132";
export default {
  name: "Frame2491",
  components: {
    Frame248132,
  },
  props: ["className", "frame24811Props", "frame24812Props"],
};
</script>

<style>
.frame-2491-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
  min-height: 50px;
  position: relative;
  width: 336px;
}

.frame-2491-1.frame-2491-3 {
  margin-left: 32px;
}
</style>
