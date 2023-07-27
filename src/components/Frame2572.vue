<template>
  <div :class="[`frame-2572`, className || ``]">
    <frame25742 />
    <frame2575 :spanText1="frame2575Props.spanText1" :spanText2="frame2575Props.spanText2" />
  </div>
</template>

<script>
import Frame25742 from "./Frame25742";
import Frame2575 from "./Frame2575";
export default {
  name: "Frame2572",
  components: {
    Frame25742,
    Frame2575,
  },
  props: ["className", "frame2575Props"],
};
</script>

<style>
.frame-2572 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 48px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 48px;
  height: 352px;
  overflow: hidden;
  padding: 52px 33px;
  position: relative;
  transition: all 0.2s ease;
  width: 501px;
}

.frame-2572:hover {
  transform: scale(1.1);
}

.frame-2572.frame-2572-1 {
  background-color: var(--whisper);
}
</style>
