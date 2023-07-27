<template>
  <div :class="[`button-213`, className || ``]">
    <img
      class="add-35"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/add-13@2x.png"
      alt="Add"
    />
    <div class="text-310 poppins-medium-white-14px">
      <span class="spanenaoh poppins-medium-white-14px">New To-do</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button72",
  props: ["className"],
};
</script>

<style>
.button-213 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  box-shadow: 0px 10px 40px -10px #20c39d;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 8.5px 12px;
  width: 130px;
}

.add-35 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-310 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 78px;
  text-align: center;
}

.button-213.button-215 {
  cursor: pointer;
  transition: all 0.15s ease;
}

.button-213.button-215:hover,
.button-213.button-218:hover {
  transform: translate(0, -5px);
}

.button-213.button-218 {
  box-shadow: unset;
  cursor: pointer;
  min-width: 130px;
  overflow: unset;
  transition: all 0.15s ease;
  width: unset;
}
</style>
