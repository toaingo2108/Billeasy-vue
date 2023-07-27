<template>
  <div :class="[`frame-2481`, className || ``]">
    <div class="created-on poppins-medium-ebony-14px">
      <span class="span-488 poppins-medium-ebony-14px">{{ spanText1 }}</span>
    </div>
    <div class="text-4-2 poppins-normal-comet-13px">
      <span class="span-488 poppins-normal-comet-13px">2023-05-01, 13.20</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame2481",
  props: ["spanText1", "className"],
};
</script>

<style>
.frame-2481 {
  align-items: flex-start;
  display: flex;
  gap: 58px;
  height: 21px;
  min-width: 248px;
}

.created-on {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 80px;
}

.text-4-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  min-height: 20px;
}

.frame-2481.frame-2482 {
  gap: 23px;
}

.frame-2481.frame-2482 .created-on {
  min-width: 115px;
}
</style>
