<template>
  <div :class="[`frame-2574-9`, className || ``]">
    <div class="number-56 poppins-semi-bold-white-32px">
      <span class="spanswrof poppins-semi-bold-white-32px">{{ children }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame25743",
  props: ["children", "className"],
};
</script>

<style>
.frame-2574-9 {
  align-items: flex-start;
  align-self: center;
  background-color: var(--caribbean-green);
  border-radius: 100px;
  display: flex;
  height: 64px;
  margin-right: 0.33px;
  overflow: hidden;
  padding: 15px 22px;
  width: 64px;
}

.number-56 {
  letter-spacing: 0;
  line-height: 32px;
  min-width: 20px;
  text-align: center;
  white-space: nowrap;
}

.frame-2574-9.frame-2574-8,
.frame-2574-9.frame-2574-8-1 {
  padding: 15px 21px;
}

.frame-2574-9.frame-2574-8-1 .number-56,
.frame-2574-9.frame-2574-8 .number-56 {
  margin-left: 1px;
  min-width: 21px;
}
</style>
