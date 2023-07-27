<template>
  <div :class="[`frame-2678`, className || ``]">
    <div class="frame-2677">
      <div class="frame-248-2">
        <div class="date-38 poppins-medium-ebony-12px">
          <span class="span-688 poppins-medium-ebony-12px">Date:</span>
        </div>
        <div class="date-39 poppins-normal-comet-12px">
          <span class="span-688 poppins-normal-comet-12px">2023-01-01</span>
        </div>
      </div>
      <div class="frame-2482-5">
        <div class="amount poppins-medium-ebony-12px">
          <span class="span-688 poppins-medium-ebony-12px">Amount:</span>
        </div>
        <div class="text-87-1 poppins-normal-comet-12px">
          <span class="span-688 poppins-normal-comet-12px">12.25</span>
        </div>
      </div>
      <div class="frame-248-2">
        <div class="remaining poppins-medium-ebony-12px">
          <span class="span-688 poppins-medium-ebony-12px">Remaining:</span>
        </div>
        <div class="text-88-1 poppins-normal-comet-12px">
          <span class="span-688 poppins-normal-comet-12px">12.25</span>
        </div>
      </div>
    </div>
    <div class="icon-button-378"></div>
  </div>
</template>

<script>
export default {
  name: "Frame2678",
  props: ["className"],
};
</script>

<style>
.frame-2678 {
  align-items: center;
  display: flex;
  gap: 68px;
  margin-top: 25px;
  min-width: 416px;
}

.frame-2677 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  min-width: 328px;
}

.frame-248-2 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 18px;
  min-width: 99px;
}

.date-38 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 18px;
  min-width: 32px;
}

.date-39,
.text-87-1,
.text-88-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 18px;
}

.frame-2482-5 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 18px;
  min-width: 82px;
}

.amount {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 18px;
  min-width: 52px;
}

.remaining {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 18px;
  min-width: 69px;
}

.icon-button-378 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22b31cc30c096864d00d9/img/close-7@2x.png);
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  width: 20px;
}

.frame-2678.frame-26-5 {
  margin-top: 12px;
}
</style>
