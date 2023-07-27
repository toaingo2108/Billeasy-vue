<template>
  <div :class="[`checkbox-2`, className || ``]">
    <img
      class="check-116"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/check-69@2x.png"
      alt="Check"
    />
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: ["className"],
};
</script>

<style>
.checkbox-2 {
  align-items: center;
  background-color: var(--caribbean-green);
  border-radius: 6px;
  display: flex;
  height: 18px;
  margin-left: 49px;
  overflow: hidden;
  padding: 0 3px;
  width: 18px;
}

.check-116 {
  height: 12px;
  width: 12px;
}

.checkbox-2.checkbox-3 {
  margin-left: 86px;
}

.checkbox-2.checkbox-21,
.checkbox-2.checkbox-23,
.checkbox-2.checkbox-24,
.checkbox-2.checkbox-25,
.checkbox-2.checkbox-26,
.checkbox-2.checkbox-28,
.checkbox-2.checkbox-29,
.checkbox-2.checkbox-30,
.checkbox-2.checkbox-31,
.checkbox-2.checkbox-32,
.checkbox-2.checkbox-33,
.checkbox-2.checkbox-34 {
  align-items: center;
  align-self: center;
  background-color: var(--caribbean-green);
  border-radius: 6px;
  display: flex;
  height: 18px;
  overflow: hidden;
  padding: 0 3px;
  width: 18px;
}

.checkbox-2.checkbox-22 {
  align-items: center;
  background-color: var(--caribbean-green);
  border-radius: 6px;
  display: flex;
  height: 18px;
  margin-top: 5px;
  overflow: hidden;
  padding: 0 3px;
  width: 18px;
}

.checkbox-2.checkbox-4,
.checkbox-2.checkbox-7,
.checkbox-2.checkbox-11,
.checkbox-2.checkbox-12,
.checkbox-2.checkbox-14,
.checkbox-2.checkbox-16,
.checkbox-2.checkbox-17,
.checkbox-2.checkbox-18,
.checkbox-2.checkbox-19 {
  margin-left: unset;
}

.checkbox-2.checkbox-5,
.checkbox-2.checkbox-6,
.checkbox-2.checkbox-8,
.checkbox-2.checkbox-9,
.checkbox-2.checkbox-13,
.checkbox-2.checkbox-15,
.checkbox-2.checkbox-20 {
  align-self: center;
  margin-left: unset;
}

.checkbox-2.checkbox-27 {
  align-items: center;
  background-color: var(--caribbean-green);
  border-radius: 6px;
  display: flex;
  height: 18px;
  overflow: hidden;
  padding: 0 3px;
  width: 18px;
}

.checkbox-2.checkbox-10 {
  margin-left: unset;
  margin-top: 5px;
}
</style>
