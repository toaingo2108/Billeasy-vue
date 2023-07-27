<template>
  <div :class="[`tab-menu-81`, className || ``]">
    <img
      class="invoice-126"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/invoice-16@2x.png"
      alt="Invoice"
    />
    <div class="label-297 poppins-medium-manatee-14px">
      <span class="spanzf675 poppins-medium-manatee-14px">Invoice Settings</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabMenu322",
  props: ["className"],
};
</script>

<style>
.tab-menu-81 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  justify-content: flex-end;
  left: 0;
  min-width: 211px;
  padding: 9px 37.3px;
  position: absolute;
  top: 0;
  transition: all 0.15s ease;
}

.tab-menu-81:hover {
  transform: translate(0, -5px);
}

.invoice-126 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-297 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-81.tab-menu-83 {
  cursor: unset;
  transition: unset;
}
</style>
