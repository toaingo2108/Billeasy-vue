<template>
  <div :class="[`option-92-1`, className || ``]">
    <div class="checkbox-122"></div>
    <div class="label-496 poppins-normal-ebony-14px">
      <span class="span-774 poppins-normal-ebony-14px">{{ children }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Option17",
  props: ["children", "className"],
};
</script>

<style>
.option-92-1 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  min-width: 240px;
}

.checkbox-122 {
  align-self: center;
  background-color: var(--white);
  border-radius: 6px;
  height: 18px;
  width: 18px;
}

.label-496 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  width: 210px;
}

.option-92-1.option-92-9 .checkbox-122,
.option-92-1.option-93-6 .checkbox-122,
.option-92-1.option-92-10 .checkbox-122,
.option-92-1.option-92 .checkbox-122,
.option-92-1.option-93-7 .checkbox-122,
.option-92-1.option-93 .checkbox-122 {
  border-radius: 100px;
}
</style>
