<template>
  <div class="frame-2458">
    <div class="frame-2456">
      <div class="x-month poppins-normal-ebony-13px"><span class="poppins-normal-ebony-13px">This month:</span></div>
      <div class="frame-2455">
        <div class="x-new poppins-semi-bold-green-13px">
          <span class="poppins-semi-bold-green-13px">+ 12 </span><span class="poppins-normal-comet-13px">new</span>
        </div>
        <div class="x-cancels poppins-semi-bold-alizarin-crimson-13px">
          <span class="poppins-semi-bold-ebony-13px-2">-2 </span><span class="poppins-normal-comet-13px">cancels</span>
        </div>
      </div>
    </div>
    <div class="frame-2457">
      <div class="x-month poppins-normal-ebony-13px">
        <span class="poppins-normal-ebony-13px">Last 12 months:</span>
      </div>
      <div class="frame-2455-1">
        <div class="x-new poppins-semi-bold-green-13px">
          <span class="poppins-semi-bold-green-13px">+ 31 </span><span class="poppins-normal-comet-13px">new</span>
        </div>
        <div class="x-cancels poppins-semi-bold-ebony-13px-2">
          <span class="poppins-semi-bold-ebony-13px-2">-</span><span class="poppins-semi-bold-ebony-13px-2">14</span
          ><span class="poppins-semi-bold-ebony-13px-2">&nbsp;</span
          ><span class="poppins-normal-comet-13px">cancels</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame2458",
};
</script>

<style>
.frame-2458,
.frame-2458-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 28px;
  min-height: 48px;
  width: 262px;
}

.frame-2456,
.frame-2456-1 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 257px;
}

.x-month,
.x-month-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 112px;
}

.frame-2455,
.frame-2455-2 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 20px;
  min-width: 137px;
}

.x-new,
.x-new-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  min-width: 55px;
}

.x-cancels,
.x-cancels-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
}

.frame-2457,
.frame-2457-1 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 262px;
}

.frame-2455-1,
.frame-2455-3 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 20px;
  min-width: 142px;
}
</style>
