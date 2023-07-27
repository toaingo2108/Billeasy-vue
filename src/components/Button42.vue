<template>
  <div :class="[`button-82`, className || ``]">
    <img
      class="upload-17"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/upload-11@2x.png"
      alt="Upload"
    />
    <div class="text-155 poppins-medium-ebony-14px">
      <span class="spanjzfrsf poppins-medium-ebony-14px">Import</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Button42",
  props: ["className"],
};
</script>

<style>
.button-82 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 100px;
  padding: 8.5px 12px;
}

.upload-17 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-155 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 48px;
  text-align: center;
}

.button-82.button-83,
.button-82.button-87,
.button-82.button-88,
.button-82.button-89 {
  cursor: pointer;
  transition: all 0.15s ease;
}

.button-82.button-83:hover,
.button-82.button-87:hover,
.button-82.button-88:hover,
.button-82.button-89:hover {
  transform: translate(0, -5px);
}

.button-82.button-86 {
  align-self: flex-end;
  margin-top: 23px;
}
</style>
