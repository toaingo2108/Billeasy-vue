<template>
  <div :class="[`tab-menu-75`, className || ``]">
    <img
      class="subscription-129"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22b90246afc58caf68004/img/subscription-2@2x.png"
      alt="Subscription"
    />
    <div class="label-284 poppins-medium-manatee-14px">
      <span class="span5e1ca poppins-medium-manatee-14px">Subscription Settings</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabMenu282",
  props: ["className"],
};
</script>

<style>
.tab-menu-75 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  justify-content: flex-end;
  left: 211px;
  min-width: 211px;
  padding: 9px 18.3px;
  position: absolute;
  top: 0;
  transition: all 0.15s ease;
}

.tab-menu-75:hover {
  transform: translate(0, -5px);
}

.subscription-129 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-284 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-75.tab-menu-77 {
  cursor: unset;
  transition: unset;
}
</style>
