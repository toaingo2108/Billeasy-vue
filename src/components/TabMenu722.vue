<template>
  <div :class="[`tab-menu-155`, className || ``]">
    <div class="flex-row-195">
      <img
        class="invoice-147"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/invoice-6@2x.png"
        alt="Invoice"
      />
      <div class="label-444 poppins-medium-caribbean-green-14px">
        <span class="spanqp2g2 poppins-medium-caribbean-green-14px">Invoice</span>
      </div>
    </div>
    <div class="rectangle-6502-64"></div>
  </div>
</template>

<script>
export default {
  name: "TabMenu722",
  props: ["className"],
};
</script>

<style>
.tab-menu-155 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 128px;
}

.flex-row-195 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-top: 9px;
  min-width: 75px;
}

.invoice-147 {
  height: 18px;
  width: 18px;
}

.label-444 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 51px;
  white-space: nowrap;
}

.rectangle-6502-64 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 128px;
}
</style>
