<template>
  <div :class="[`tab-menu-93`, className || ``]">
    <img
      class="subscription-133"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22b90246afc58caf68004/img/subscription-2@2x.png"
      alt="Subscription"
    />
    <div class="label-342 poppins-medium-manatee-14px">
      <span class="spanlk2fs poppins-medium-manatee-14px">Subscriptions</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabMenu422",
  props: ["className"],
};
</script>

<style>
.tab-menu-93 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 160px;
  padding: 9px 20px;
  transition: all 0.15s ease;
}

.tab-menu-93:hover {
  transform: translate(0, -5px);
}

.subscription-133 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-342 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-93.tab-menu-95 {
  cursor: unset;
  transition: unset;
}
</style>
