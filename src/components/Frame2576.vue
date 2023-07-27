<template>
  <div :class="[`frame-2576-1`, className || ``]">
    <frame25744 :src="frame25744Props.src" />
    <div class="frame-2575-10">
      <div class="self-service-portal poppins-semi-bold-ebony-32px">
        <span class="span-364 poppins-semi-bold-ebony-32px">{{ spanText1 }}</span>
      </div>
      <p class="beautiful-and-intuit poppins-medium-comet-18px">
        <span class="span-364 poppins-medium-comet-18px">{{ spanText2 }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import Frame25744 from "./Frame25744";
export default {
  name: "Frame2576",
  components: {
    Frame25744,
  },
  props: ["spanText1", "spanText2", "className", "frame25744Props"],
};
</script>

<style>
.frame-2576-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-left: 250px;
  min-height: 264px;
  position: relative;
  width: 640px;
}

.frame-2575-10 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 168px;
  width: 640px;
}

.self-service-portal {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 48px;
  width: 640px;
}

.beautiful-and-intuit {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 96px;
  width: 640px;
}

.frame-2576-1.frame-2576-2 {
  left: 0;
  margin-left: unset;
  min-height: 360px;
  position: absolute;
  top: 130px;
}

.frame-2576-1.frame-2576-2 .frame-2575-10,
.frame-2576-1.frame-2611 .frame-2575-10,
.frame-2576-1.frame-2612 .frame-2575-10,
.frame-2576-1.frame-2613 .frame-2575-10 {
  min-height: 264px;
}

.frame-2576-1.frame-2576-2 .beautiful-and-intuit,
.frame-2576-1.frame-2611 .beautiful-and-intuit,
.frame-2576-1.frame-2612 .beautiful-and-intuit,
.frame-2576-1.frame-2613 .beautiful-and-intuit {
  min-height: 192px;
}

.frame-2576-1.frame-2611 {
  left: 880px;
  margin-left: unset;
  min-height: 360px;
  position: absolute;
  top: 930px;
}

.frame-2576-1.frame-2612 {
  left: 0;
  margin-left: unset;
  min-height: 360px;
  position: absolute;
  top: 1730px;
}

.frame-2576-1.frame-2613 {
  left: 1040px;
  margin-left: unset;
  min-height: 360px;
  position: absolute;
  top: 270px;
}
</style>
