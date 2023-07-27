<template>
  <div class="frame-2576-4">
    <img class="ellipse-5" :src="ellipse55" alt="Ellipse 55" />
    <div class="frame-2575-11">
      <frame2588 :spanText1="frame2588Props.spanText1" />
      <p class="praesent-molestie-ma-1 poppins-medium-comet-18px">
        <span class="poppins-medium-comet-18px"
          >Praesent molestie massa eu auctor tristique. Quisque vitae massa ut elit elementum bibendum. Vivamus non
          tempus dui. Curabitur tincidunt massa risus, mollis molestie tortor egestas vel. Pellentesque at sodales eros,
          aliquam iaculis ligula. Morbi non dolor tellus.</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import Frame2588 from "./Frame2588";
export default {
  name: "Frame25763",
  components: {
    Frame2588,
  },
  props: ["ellipse55", "frame2588Props"],
};
</script>

<style>
.frame-2576-4 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 48px;
  left: 41px;
  min-height: 514px;
  position: absolute;
  top: 65px;
  width: 384px;
}

.ellipse-5 {
  height: 120px;
  object-fit: cover;
  width: 120px;
}

.frame-2575-11 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 39px;
  min-height: 346px;
  position: relative;
  width: 384px;
}

.praesent-molestie-ma-1 {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 224px;
  text-align: center;
  width: 384px;
}
</style>
