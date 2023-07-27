<template>
  <div :class="[`overlay-3`, className || ``]">
    <div class="new-vat-rate">
      <div class="title-30 poppins-semi-bold-ebony-20px">
        <span class="spanctgwc poppins-semi-bold-ebony-20px">{{ spanText }}</span>
      </div>
      <dropdown322 :spanText1="dropdown322Props.spanText1" :spanText3="dropdown322Props.spanText3" />
      <bottom-section3 />
    </div>
  </div>
</template>

<script>
import Dropdown322 from "./Dropdown322";
import BottomSection3 from "./BottomSection3";
export default {
  name: "Overlay",
  components: {
    Dropdown322,
    BottomSection3,
  },
  props: ["spanText", "className", "dropdown322Props"],
};
</script>

<style>
.overlay-3 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 288px 408px;
  position: absolute;
  top: 0;
}

.new-vat-rate {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 296px;
  overflow: hidden;
  position: relative;
  width: 400px;
}

.title-30 {
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}
</style>
