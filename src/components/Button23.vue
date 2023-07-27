<template>
  <div :class="[`button-237`, className || ``]">
    <img
      class="add-71"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/add-13@2x.png"
      alt="Add"
    />
    <div class="text-360 poppins-medium-white-14px">
      <span class="spanv5yj4j poppins-medium-white-14px">New Invoice</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button23",
  props: ["className"],
};
</script>

<style>
.button-237 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  box-shadow: 0px 10px 40px -10px #20c39d;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
  width: 137px;
}

.button-237:hover {
  transform: translate(0, -5px);
}

.add-71 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-360 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 85px;
  text-align: center;
}

.button-237.button-238,
.button-237.button-239,
.button-237.button-240 {
  cursor: unset;
  transition: unset;
}
</style>
