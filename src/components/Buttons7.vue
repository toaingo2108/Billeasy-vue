<template>
  <div class="buttons-43">
    <icon-button :src="iconButton1Props.src" :className="iconButton1Props.className" />
    <icon-button :src="iconButton2Props.src" :className="iconButton2Props.className" />
    <button72 />
  </div>
</template>

<script>
import IconButton from "./IconButton";
import Button72 from "./Button72";
export default {
  name: "Buttons7",
  components: {
    IconButton,
    Button72,
  },
  props: ["iconButton1Props", "iconButton2Props"],
};
</script>

<style>
.buttons-43,
.buttons-44,
.buttons-45,
.buttons-46 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 40px;
  min-width: 234px;
  position: relative;
}
</style>
