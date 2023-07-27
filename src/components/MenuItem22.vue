<template>
  <div :class="[`menu-item-111`, className || ``]">
    <img class="home-5" :src="products" alt="Home" />
    <div class="place poppins-medium-cadet-blue-14px">
      <span class="span-1 poppins-medium-cadet-blue-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem22",
  props: ["products", "spanText", "className"],
};
</script>

<style>
.menu-item-111 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 48px;
  padding: 12.5px 36px;
  width: 224px;
}

.home-5 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.place {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  width: 120px;
}
</style>
