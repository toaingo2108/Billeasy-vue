<template>
  <div :class="[`frame-2575-5`, className || ``]">
    <div class="set-monitor-rules poppins-semi-bold-ebony-32px">
      <span class="span-360 poppins-semi-bold-ebony-32px">{{ spanText1 }}</span>
    </div>
    <p class="select-what-you-want poppins-medium-comet-18px">
      <span class="span-360 poppins-medium-comet-18px">{{ spanText2 }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Frame2575",
  props: ["spanText1", "spanText2", "className"],
};
</script>

<style>
.frame-2575-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 136px;
  width: 435px;
}

.set-monitor-rules {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 48px;
  text-align: center;
  width: 435px;
}

.select-what-you-want {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 64px;
  text-align: center;
  width: 435px;
}

.frame-2575-5.frame-2575-6,
.frame-2575-5.frame-2575-6 .set-monitor-rules,
.frame-2575-5.frame-2575-6 .select-what-you-want,
.frame-2575-5.frame-2575-8 .set-monitor-rules {
  width: 437px;
}

.frame-2575-5.frame-2575-8 {
  min-height: 168px;
  width: 437px;
}

.frame-2575-5.frame-2575-8 .select-what-you-want {
  min-height: 96px;
  width: 437px;
}
</style>
