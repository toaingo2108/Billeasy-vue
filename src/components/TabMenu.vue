<template>
  <div class="tab-menu">
    <div class="label-16 poppins-medium-caribbean-green-14px">
      <span class="poppins-medium-caribbean-green-14px">Package</span>
    </div>
    <div class="rectangle-6502"></div>
  </div>
</template>

<script>
export default {
  name: "TabMenu",
};
</script>

<style>
.tab-menu,
.tab-menu-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 129px;
}

.label-16,
.label-17 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 9px;
  min-width: 62px;
  white-space: nowrap;
}

.rectangle-6502,
.rectangle-6502-1 {
  background-color: var(--caribbean-green);
  height: 2px;
  margin-right: 0.33px;
  width: 129px;
}
</style>
