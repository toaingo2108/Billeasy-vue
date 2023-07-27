<template>
  <div :class="[`frame-2483`, className || ``]">
    <div class="total-vat poppins-medium-ebony-14px">
      <span class="span-654 poppins-medium-ebony-14px">{{ spanText1 }}</span>
    </div>
    <div class="text-7-3 poppins-normal-comet-13px"><span class="span-654 poppins-normal-comet-13px">180,00</span></div>
  </div>
</template>

<script>
export default {
  name: "Frame2483",
  props: ["spanText1", "className"],
};
</script>

<style>
.frame-2483 {
  align-items: flex-start;
  display: flex;
  gap: 165px;
  height: 21px;
  margin-top: 12px;
  min-width: 272px;
}

.total-vat {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 67px;
}

.text-7-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -0.5px;
  min-height: 20px;
}

.frame-2483.frame-2484,
.frame-2483.frame-2484-1 {
  gap: 133px;
}

.frame-2483.frame-2484 .total-vat,
.frame-2483.frame-2484-1 .total-vat {
  min-width: 99px;
}

.frame-2483.frame-2485,
.frame-2483.frame-2485-1 {
  gap: 131px;
}

.frame-2483.frame-2485 .total-vat,
.frame-2483.frame-2485-1 .total-vat {
  min-width: 101px;
}
</style>
