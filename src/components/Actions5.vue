<template>
  <div class="actions-62">
    <search :iconButtonProps="searchProps.iconButtonProps" />
    <div class="buttons-61">
      <icon-button :src="iconButton1Props.src" :className="iconButton1Props.className" />
      <icon-button :src="iconButton2Props.src" :className="iconButton2Props.className" />
      <icon-button :src="iconButton3Props.src" :className="iconButton3Props.className" />
      <div class="button-275">
        <img
          class="add-89"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/add-13@2x.png"
          alt="Add"
        />
        <div class="text-409 poppins-medium-white-14px">
          <span class="poppins-medium-white-14px">New Customer</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "./Search";
import IconButton from "./IconButton";
export default {
  name: "Actions5",
  components: {
    Search,
    IconButton,
  },
  props: ["searchProps", "iconButton1Props", "iconButton2Props", "iconButton3Props"],
};
</script>

<style>
.actions-62,
.actions-63,
.actions-64,
.actions-65,
.actions-66 {
  align-items: flex-start;
  display: flex;
  gap: 503px;
  height: 40px;
  left: 256px;
  min-width: 1152px;
  position: absolute;
  top: 176px;
}

.buttons-61,
.buttons-62,
.buttons-63,
.buttons-64,
.buttons-65 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  min-width: 313px;
  position: relative;
}

.button-275,
.button-276,
.button-277,
.button-278,
.button-279 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  box-shadow: 0px 10px 40px -10px #20c39d;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 8.5px 12px;
  width: 157px;
}

.add-89,
.add-90,
.add-91,
.add-92,
.add-93 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-409,
.text-410,
.text-411,
.text-412,
.text-413 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 105px;
  text-align: center;
}
</style>
