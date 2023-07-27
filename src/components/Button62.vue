<template>
  <div :class="[`button-206`, className || ``]">
    <img
      class="add-28"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/add-4@2x.png"
      alt="Add"
    />
    <div class="text-303 poppins-medium-caribbean-green-14px">
      <span class="spanuzvt2 poppins-medium-caribbean-green-14px">Add Item</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button62",
  props: ["className"],
};
</script>

<style>
.button-206 {
  align-items: flex-start;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 21px;
  margin-top: 1px;
  min-width: 91px;
  transition: all 0.15s ease;
}

.button-206:hover {
  transform: scale(1.1);
}

.add-28 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-303 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 65px;
  text-align: center;
}

.button-206.button-207,
.button-206.button-208 {
  cursor: unset;
  left: 1061px;
  margin-top: unset;
  position: absolute;
  top: 171px;
  transition: unset;
}
</style>
