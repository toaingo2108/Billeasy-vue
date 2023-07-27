<template>
  <div :class="[`menu-item-112`, className || ``]">
    <img class="users-119" :src="home" alt="Users" />
    <div class="home-988 poppins-medium-white-14px">
      <span class="spanvc7df poppins-medium-white-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "xMenuItem",
  props: ["home", "spanText", "className"],
};
</script>

<style>
.menu-item-112 {
  align-items: flex-start;
  background-color: var(--martinique);
  display: flex;
  gap: 12px;
  height: 48px;
  padding: 12.5px 36px;
  width: 224px;
}

.users-119 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.home-988 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  width: 120px;
}
</style>
