<template>
  <div :class="[`frame-2576-3`, className || ``]">
    <frame25744 :src="frame25744Props.src" />
    <div class="frame-2575-12">
      <div class="helpdesk-rma-support poppins-semi-bold-white-32px">
        <span class="span-368 poppins-semi-bold-white-32px">{{ spanText1 }}</span>
      </div>
      <p class="beautiful-and-intuit-1 poppins-medium-mischka-18px">
        <span class="span-368 poppins-medium-mischka-18px">{{ spanText2 }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import Frame25744 from "./Frame25744";
export default {
  name: "Frame25762",
  components: {
    Frame25744,
  },
  props: ["spanText1", "spanText2", "className", "frame25744Props"],
};
</script>

<style>
.frame-2576-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  left: 640px;
  min-height: 264px;
  position: absolute;
  top: 15px;
  width: 640px;
}

.frame-2575-12 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 168px;
  width: 640px;
}

.helpdesk-rma-support {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 48px;
  width: 640px;
}

.beautiful-and-intuit-1 {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 96px;
  width: 640px;
}

.frame-2576-3.frame-2579 {
  left: 1600px;
  min-height: 232px;
  top: 1161px;
}

.frame-2576-3.frame-2579 .frame-2575-12,
.frame-2576-3.frame-2577-1 .frame-2575-12,
.frame-2576-3.frame-2578 .frame-2575-12,
.frame-2576-3.frame-2580-1 .frame-2575-12,
.frame-2576-3.frame-2581 .frame-2575-12 {
  min-height: 136px;
}

.frame-2576-3.frame-2579 .beautiful-and-intuit-1,
.frame-2576-3.frame-2577-1 .beautiful-and-intuit-1,
.frame-2576-3.frame-2578 .beautiful-and-intuit-1,
.frame-2576-3.frame-2580-1 .beautiful-and-intuit-1,
.frame-2576-3.frame-2581 .beautiful-and-intuit-1 {
  min-height: 64px;
}

.frame-2576-3.frame-2577-1 {
  min-height: 232px;
  top: 359px;
}

.frame-2576-3.frame-2578 {
  min-height: 232px;
  top: 671px;
}

.frame-2576-3.frame-2580-1 {
  left: 1600px;
  min-height: 232px;
  top: 1473px;
}

.frame-2576-3.frame-2581 {
  left: 1600px;
  min-height: 232px;
  top: 1785px;
}
</style>
