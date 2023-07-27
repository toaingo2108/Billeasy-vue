<template>
  <div :class="[`header-139`, className || ``]">
    <button322 :className="button32Props.className" />
    <div class="page-header-101 poppins-semi-bold-ebony-20px">
      <span class="span-831 poppins-semi-bold-manatee-20px">Customer</span
      ><span class="span-831 poppins-semi-bold-ebony-20px"> #1234</span>
    </div>
  </div>
</template>

<script>
import Button322 from "./Button322";
export default {
  name: "Header15",
  components: {
    Button322,
  },
  props: ["className", "button32Props"],
};
</script>

<style>
.header-139 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 40px;
  left: 256px;
  min-width: 279px;
  position: absolute;
  top: 96px;
}

.page-header-101 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  white-space: nowrap;
}

.header-139.header-140,
.header-139.header-141 {
  left: unset;
  position: relative;
  top: unset;
}
</style>
