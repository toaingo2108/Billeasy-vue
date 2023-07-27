<template>
  <div :class="[`buttons-54`, className || ``]">
    <div class="button-230 animate-enter">
      <img
        class="add-69"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/add-13@2x.png"
        alt="Add"
      />
      <div class="text-351 poppins-medium-white-14px">
        <span class="span-650 poppins-medium-white-14px">New Invoice Row</span>
      </div>
    </div>
    <div class="button-231">
      <img
        class="add-70"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/add-19@2x.png"
        alt="Add"
      />
      <div class="text-352 poppins-medium-ebony-14px">
        <span class="span-650 poppins-medium-ebony-14px">New Text Row</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buttons4",
  props: ["className"],
};
</script>

<style>
.buttons-54 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  gap: 12px;
  margin-left: 32px;
  margin-top: 23px;
  min-width: 330px;
}

.button-230 {
  background-color: var(--caribbean-green);
  border-radius: 10px;
  height: 37px;
  opacity: 0;
  position: relative;
  transform: translate(0, 25px);
  width: 170px;
}

.button-230.animate-enter {
  animation: animate-enter-frames 0.15s ease-in-out 0s 1 normal forwards;
  opacity: 0;
  transform: translate(0, 25px);
}

.add-69 {
  height: 20px;
  left: 12px;
  position: absolute;
  top: 8px;
  width: 20px;
}

.text-351 {
  left: 40px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 7px;
}

.button-231 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 37px;
  min-width: 148px;
  padding: 7px 12px;
  transition: all 0.15s ease;
}

.button-231:hover,
.button-230:hover {
  transform: translate(0, -5px);
}

.add-70 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-352 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 96px;
  text-align: center;
}

.buttons-54.buttons-55 .button-230 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 8px;
  min-width: 170px;
  opacity: unset;
  padding: 7px 12px;
  position: unset;
  transform: unset;
  transition: all 0.15s ease;
  width: unset;
}

.buttons-54.buttons-55 .add-69 {
  align-self: center;
  left: unset;
  position: unset;
  top: unset;
}

.buttons-54.buttons-55 .text-351 {
  left: unset;
  min-height: 21px;
  min-width: 118px;
  position: unset;
  top: unset;
}

@keyframes animate-enter-frames {
  from {
    opacity: 0;
    transform: translate(0, 25px);
  }
  to {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
