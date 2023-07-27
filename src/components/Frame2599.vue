<template>
  <div class="frame-2599-1">
    <div class="x-packa poppins-medium-ebony-24px">
      <span class="poppins-medium-ebony-24px">{{ spanText1 }}</span>
    </div>
    <div class="x780-month poppins-semi-bold-ebony-64px">
      <span class="poppins-bold-ebony-72px">780 </span><span class="poppins-normal-manatee-32px">/ month</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame2599",
  props: ["spanText1"],
};
</script>

<style>
.frame-2599-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-height: 148px;
  width: 405px;
}

.x-packa {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 36px;
  width: 405px;
}

.x780-month {
  letter-spacing: 0;
  line-height: 72px;
  width: 405px;
}
</style>
