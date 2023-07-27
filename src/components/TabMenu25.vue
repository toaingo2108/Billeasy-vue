<template>
  <div :class="[`tab-menu-195`, className || ``]">
    <img
      class="time-1"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/time-6@2x.png"
      alt="Time"
    />
    <div class="label-528 poppins-medium-manatee-14px">
      <span class="spankms9e poppins-medium-manatee-14px">Time Report</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabMenu25",
  props: ["className"],
};
</script>

<style>
.tab-menu-195 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 120px;
  padding: 9px 5.5px;
  transition: all 0.15s ease;
}

.tab-menu-195:hover {
  transform: translate(0, -5px);
}

.time-1 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-528 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-195.tab-menu-196,
.tab-menu-195.tab-menu-197,
.tab-menu-195.tab-menu-198 {
  cursor: unset;
  transition: unset;
}
</style>
