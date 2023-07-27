<template>
  <div :class="[`button-8`, className || ``]">
    <div class="text-15 poppins-medium-ebony-14px"><span class="spancl5y4 poppins-medium-ebony-14px">Cancel</span></div>
  </div>
</template>

<script>
export default {
  name: "Button222",
  props: ["className"],
};
</script>

<style>
.button-8 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 40px;
  min-width: 104px;
  padding: 8.5px 26.5px;
  transition: all 0.15s ease;
}

.button-8:hover {
  transform: translate(0, -5px);
}

.text-15 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 51px;
  text-align: center;
}

.button-8.button-22,
.button-8.button-31,
.button-8.button-35,
.button-8.button-46 {
  cursor: unset;
  transition: unset;
}
</style>
