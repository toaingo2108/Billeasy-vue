<template>
  <div class="frame-248">
    <div class="status-58 poppins-medium-ebony-14px">
      <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
    </div>
    <div class="open poppins-normal-comet-13px">
      <span class="poppins-normal-comet-13px">{{ spanText2 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame2482",
  props: ["spanText1", "spanText2"],
};
</script>

<style>
.frame-248 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 21px;
  margin-top: 12px;
  min-width: 208px;
}

.status-58,
.invoice-number {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  width: 160px;
}

.open,
.number-73 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  min-height: 20px;
}
</style>
