<template>
  <div :class="[`buttons-71`, className || ``]">
    <icon-button :src="iconButton1Props.src" :className="iconButton1Props.className" />
    <icon-button :src="iconButton2Props.src" :className="iconButton2Props.className" />
    <icon-button :src="iconButton3Props.src" :className="iconButton3Props.className" />
    <div class="button-304">
      <img
        class="add-105"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/add-13@2x.png"
        alt="Add"
      />
      <div class="text-440 poppins-medium-white-14px">
        <span class="span7ier poppins-medium-white-14px">New Product</span>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from "./IconButton";
export default {
  name: "Buttons5",
  components: {
    IconButton,
  },
  props: ["className", "iconButton1Props", "iconButton2Props", "iconButton3Props"],
};
</script>

<style>
.buttons-71 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  min-width: 297px;
  position: relative;
}

.button-304 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  box-shadow: 0px 10px 40px -10px #20c39d;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 8.5px 12px;
  width: 141px;
}

.add-105 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-440 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 89px;
  text-align: center;
}

.buttons-71.buttons-78 .button-304 {
  cursor: pointer;
  transition: all 0.15s ease;
}

.button-304:hover {
  transform: translate(0, -5px);
}
</style>
