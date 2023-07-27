<template>
  <div :class="[`frame-2573-4`, className || ``]">
    <frame25743 :children="frame25743Props.children" :className="frame25743Props.className" />
    <p class="connect-to-erp-for-a poppins-semi-bold-ebony-24px">
      <span class="span-385 poppins-semi-bold-ebony-24px">{{ spanText }}</span>
    </p>
  </div>
</template>

<script>
import Frame25743 from "./Frame25743";
export default {
  name: "Frame2573",
  components: {
    Frame25743,
  },
  props: ["spanText", "className", "frame25743Props"],
};
</script>

<style>
.frame-2573-4 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 48px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 47px;
  height: 352px;
  overflow: hidden;
  padding: 66px 32px;
  position: relative;
  transition: all 0.2s ease;
  width: 501px;
}

.frame-2573-4:hover {
  transform: scale(1.1);
}

.connect-to-erp-for-a {
  letter-spacing: 0;
  line-height: normal;
  min-height: 108px;
  text-align: center;
  width: 437px;
}

.frame-2573-4.frame-2574-15 {
  padding: 66px 33px;
}

.frame-2573-4.frame-2574-15 .connect-to-erp-for-a {
  width: 435px;
}
</style>
