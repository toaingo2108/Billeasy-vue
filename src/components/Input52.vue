<template>
  <div :class="[`input-54`, className || ``]">
    <img
      class="search-5"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/search-9@2x.png"
      alt="Search"
    />
    <div class="input-text-80 poppins-normal-manatee-14px">
      <span class="spanhyjpuh poppins-normal-manatee-14px">Search</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input52",
  props: ["className"],
};
</script>

<style>
.input-54 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 288px;
}

.search-5 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-80 {
  letter-spacing: 0;
  line-height: 24px;
  width: 236px;
}

.input-54.input-59,
.input-54.input-68 {
  left: 256px;
  position: absolute;
  top: 248px;
}
</style>
