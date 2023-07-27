<template>
  <div :class="[`tab-7`, className || ``]">
    <div class="tab-menu-39">
      <div class="label-130 poppins-medium-caribbean-green-14px">
        <span class="span-325 poppins-medium-caribbean-green-14px">Subscription Templates</span>
      </div>
      <div class="rectangle-6502-17"></div>
    </div>
    <div class="tab-menu-40">
      <div class="label-131 poppins-medium-manatee-14px">
        <span class="span-325 poppins-medium-manatee-14px">Invoice Templates</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: ["className"],
};
</script>

<style>
.tab-7 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  margin-left: 32px;
  margin-top: 40px;
  min-width: 388px;
}

.tab-menu-39 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 194px;
}

.label-130 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 9px;
  min-width: 168px;
  white-space: nowrap;
}

.rectangle-6502-17 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 194px;
}

.tab-menu-40 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  height: 40px;
  min-width: 194px;
  padding: 9px 32px;
  transition: all 0.15s ease;
}

.tab-menu-40:hover {
  transform: translate(0, -5px);
}

.label-131 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-7.tab-8 {
  align-self: unset;
}
</style>
