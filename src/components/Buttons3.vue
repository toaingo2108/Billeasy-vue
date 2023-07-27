<template>
  <div :class="[`buttons-50`, className || ``]">
    <icon-button :src="iconButton1Props.src" :className="iconButton1Props.className" />
    <icon-button :src="iconButton2Props.src" :className="iconButton2Props.className" />
    <div class="button-227">
      <img
        class="add-64"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/add-13@2x.png"
        alt="Add"
      />
      <div class="text-325 poppins-medium-white-14px">
        <span class="spanipg3r poppins-medium-white-14px">New Subscription</span>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from "./IconButton";
export default {
  name: "Buttons3",
  components: {
    IconButton,
  },
  props: ["className", "iconButton1Props", "iconButton2Props"],
};
</script>

<style>
.buttons-50 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  min-width: 279px;
  position: relative;
}

.button-227 {
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
  width: 175px;
}

.button-227:hover {
  transform: translate(0, -5px);
}

.add-64 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-325 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 123px;
  text-align: center;
}

.buttons-50.buttons-51 .button-227,
.buttons-50.buttons-52 .button-227,
.buttons-50.buttons-53 .button-227 {
  cursor: unset;
  transition: unset;
}
</style>
