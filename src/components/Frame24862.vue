<template>
  <div :class="[`frame-2486-9`, className || ``]">
    <div class="due-date-1 poppins-medium-ebony-14px">
      <span class="span-839 poppins-medium-ebony-14px">{{ spanText1 }}</span>
    </div>
    <div class="date-42 poppins-normal-comet-13px">
      <span class="span-839 poppins-normal-comet-13px">2023/05/03</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame24862",
  props: ["spanText1", "className"],
};
</script>

<style>
.frame-2486-9 {
  align-items: flex-start;
  display: flex;
  gap: 179px;
  height: 21px;
  margin-top: 12px;
  min-width: 320px;
}

.due-date-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 65px;
}

.date-42 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  min-height: 20px;
}

.frame-2486-9.frame-2487-9 {
  gap: 164px;
}

.frame-2486-9.frame-2487-9 .due-date-1 {
  min-width: 80px;
}
</style>
