<template>
  <div :class="[`tab-menu-160`, className || ``]">
    <img
      class="invoice-151"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/invoice-16@2x.png"
      alt="Invoice"
    />
    <div class="label-450 poppins-medium-manatee-14px">
      <span class="spant576 poppins-medium-manatee-14px">Invoice</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabMenu4222",
  props: ["className"],
};
</script>

<style>
.tab-menu-160 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 128px;
  padding: 9px 26.5px;
  transition: all 0.15s ease;
}

.tab-menu-160:hover {
  transform: translate(0, -5px);
}

.invoice-151 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-450 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-160.tab-menu-162,
.tab-menu-160.tab-menu-163,
.tab-menu-160.tab-menu-164,
.tab-menu-160.tab-menu-165,
.tab-menu-160.tab-menu-166 {
  cursor: unset;
  transition: unset;
}
</style>
