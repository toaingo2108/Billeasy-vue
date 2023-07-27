<template>
  <div :class="[`button-3`, className || ``]">
    <img class="refresh" :src="refresh" alt="Refresh" />
    <div class="text-4 poppins-medium-white-14px">
      <span class="spanveagc poppins-medium-white-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button2",
  props: ["refresh", "spanText", "className"],
};
</script>

<style>
.button-3 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 196px;
  padding: 8.5px 12px;
}

.refresh {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-4 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 144px;
  text-align: center;
}

.button-3.button-5,
.button-3.button-6 {
  cursor: pointer;
  transition: all 0.15s ease;
}

.button-3.button-5:hover,
.button-3.button-6:hover {
  transform: translate(0, -5px);
}
</style>
