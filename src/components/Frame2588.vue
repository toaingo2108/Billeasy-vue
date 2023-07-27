<template>
  <div class="frame-2588">
    <div class="name-222 poppins-semi-bold-caribbean-green-32px">
      <span class="poppins-semi-bold-caribbean-green-32px">{{ spanText1 }}</span>
    </div>
    <div class="designation poppins-medium-manatee-24px">
      <span class="poppins-medium-manatee-24px">Designation</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame2588",
  props: ["spanText1"],
};
</script>

<style>
.frame-2588 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-height: 82px;
  width: 384px;
}

.name-222 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 48px;
  text-align: center;
  width: 384px;
}

.designation {
  letter-spacing: 0;
  line-height: 32px;
  text-align: center;
  width: 384px;
}
</style>
