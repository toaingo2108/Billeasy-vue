<template>
  <div class="frame-25-6">
    <frame25744 :src="frame25744Props.src" />
    <div class="frame-2575-9">
      <div class="customisable-portal poppins-semi-bold-ebony-32px">
        <span class="poppins-semi-bold-ebony-32px">{{ spanText1 }}</span>
      </div>
      <p class="fully-control-which poppins-medium-comet-18px">
        <span class="poppins-medium-comet-18px">{{ spanText2 }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import Frame25744 from "./Frame25744";
export default {
  name: "Frame25783",
  components: {
    Frame25744,
  },
  props: ["spanText1", "spanText2", "frame25744Props"],
};
</script>

<style>
.frame-25-6 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 232px;
  position: relative;
  width: 576px;
}

.frame-2575-9 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 136px;
  width: 576px;
}

.customisable-portal,
.customer-specific-pricing,
.customer-segments,
.campaign-communication-tools {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 48px;
  width: 576px;
}

.fully-control-which,
.set-buyer-specific-p,
.install-the-web-app-2,
.send-newsletters-cr {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 64px;
  width: 576px;
}
</style>
