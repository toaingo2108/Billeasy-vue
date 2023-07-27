<template>
  <div :class="[`button-92`, className || ``]">
    <img class="add-7" :src="add" alt="Add" />
    <div class="text-165 poppins-medium-white-14px">
      <span class="spanm8ja8 poppins-medium-white-14px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button3",
  props: ["add", "spanText", "className"],
};
</script>

<style>
.button-92 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 113px;
  padding: 8.5px 12px;
}

.add-7 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-165 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 61px;
  text-align: center;
}

.button-92.button-93 {
  cursor: pointer;
  min-width: 111px;
  transition: all 0.15s ease;
}

.button-92.button-93:hover,
.button-92.button-94:hover {
  transform: translate(0, -5px);
}

.button-92.button-93 .text-165 {
  min-width: 59px;
}

.button-92.button-94 {
  cursor: pointer;
  transition: all 0.15s ease;
}
</style>
