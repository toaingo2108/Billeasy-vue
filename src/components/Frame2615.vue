<template>
  <div class="frame-261">
    <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
    <div class="input-text-71 poppins-medium-ebony-16px">
      <span class="poppins-medium-ebony-16px">{{ spanText }}</span>
    </div>
  </div>
</template>

<script>
import IconButton from "./IconButton";
export default {
  name: "Frame2615",
  components: {
    IconButton,
  },
  props: ["spanText", "iconButtonProps"],
};
</script>

<style>
.frame-261 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 40px;
  min-width: 336px;
  position: relative;
}

.input-text-71 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 24px;
  width: 276px;
}
</style>
