<template>
  <div :class="[`frame-2454`, className || ``]">
    <div class="frame-2451">
      <img
        class="apply-49"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/apply-1@2x.png"
        alt="Apply"
      />
      <div class="active poppins-normal-comet-13px">
        <span class="span-851 poppins-normal-comet-13px">Active:</span>
      </div>
      <div class="number-117 poppins-semi-bold-ebony-13px-2">
        <span class="span-851 poppins-semi-bold-ebony-13px-2">8676</span>
      </div>
    </div>
    <div class="frame-2452">
      <img
        class="pause-16"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/pause-1@2x.png"
        alt="Pause"
      />
      <div class="paused poppins-normal-comet-13px">
        <span class="span-851 poppins-normal-comet-13px">Paused:</span>
      </div>
      <div class="number-117 poppins-semi-bold-ebony-13px-2">
        <span class="span-851 poppins-semi-bold-ebony-13px-2">51</span>
      </div>
    </div>
    <div class="frame-2453">
      <img
        class="cancel-9"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/cancel-1@2x.png"
        alt="Cancel"
      />
      <div class="canceled poppins-normal-comet-13px">
        <span class="span-851 poppins-normal-comet-13px">Canceled:</span>
      </div>
      <div class="number-117 poppins-semi-bold-ebony-13px-2">
        <span class="span-851 poppins-semi-bold-ebony-13px-2">49</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame2454",
  props: ["className"],
};
</script>

<style>
.frame-2454 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  margin-top: 17px;
  min-width: 351px;
}

.frame-2451 {
  align-items: flex-start;
  display: flex;
  gap: 4px;
  height: 20px;
  min-width: 102px;
}

.apply-49,
.pause-16,
.cancel-9 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.active {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  min-width: 43px;
}

.number-117 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
}

.frame-2452 {
  align-items: flex-start;
  display: flex;
  gap: 4px;
  height: 20px;
  min-width: 92px;
}

.paused {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  min-width: 52px;
}

.frame-2453 {
  align-items: flex-start;
  display: flex;
  gap: 4px;
  height: 20px;
  min-width: 109px;
}

.canceled {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  min-width: 66px;
}

.frame-2454.frame-2454-1,
.frame-2454.frame-2454-2 {
  margin-top: 13px;
}
</style>
