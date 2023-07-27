<template>
  <div :class="[`frame-2481-1`, className || ``]">
    <div class="created-on-1 poppins-medium-ebony-14px">
      <span class="span-501 poppins-medium-ebony-14px">{{ spanText1 }}</span>
    </div>
    <div class="text-4-3 poppins-normal-comet-13px">
      <span class="span-501 poppins-normal-comet-13px">2023-05-01, 13.20</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame248132",
  props: ["spanText1", "className"],
};
</script>

<style>
.frame-2481-1 {
  align-items: flex-start;
  display: flex;
  gap: 146px;
  height: 21px;
  min-width: 336px;
}

.created-on-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 80px;
}

.text-4-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  min-height: 20px;
}

.frame-2481-1.frame-2482-1,
.frame-2481-1.frame-2482-2,
.frame-2481-1.frame-2482-3 {
  gap: 111px;
}

.frame-2481-1.frame-2482-1 .created-on-1,
.frame-2481-1.frame-2482-2 .created-on-1,
.frame-2481-1.frame-2482-3 .created-on-1 {
  min-width: 115px;
}
</style>
