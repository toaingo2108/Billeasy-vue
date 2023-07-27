<template>
  <div :class="[`button-161`, className || ``]">
    <img
      class="edit-9"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/edit-9@2x.png"
      alt="Edit"
    />
    <div class="text-253 poppins-medium-ebony-14px">
      <span class="span-457 poppins-medium-ebony-14px">Edit Settings</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button32",
  props: ["className"],
};
</script>

<style>
.button-161 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 37px;
  min-width: 192px;
  padding: 7px 38.5px;
  transition: all 0.15s ease;
}

.button-161:hover,
.button-161.button-160:hover {
  transform: translate(0, -5px);
}

.edit-9 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-253 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 87px;
  text-align: center;
}

.button-161.button-160 {
  align-self: center;
}
</style>
