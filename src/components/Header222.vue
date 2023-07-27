<template>
  <header :class="[`header-98`, className || ``]">
    <button322 :className="button32Props.className" />
    <div class="page-header-81 poppins-semi-bold-ebony-20px">
      <span class="span-695 poppins-semi-bold-manatee-20px">Invoice</span
      ><span class="span-695 poppins-semi-bold-ebony-20px"> # 12323452</span>
    </div>
  </header>
</template>

<script>
import Button322 from "./Button322";
export default {
  name: "Header222",
  components: {
    Button322,
  },
  props: ["className", "button32Props"],
};
</script>

<style>
.header-98 {
  align-items: flex-start;
  align-self: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  gap: 24px;
  height: 40px;
  justify-content: flex-start;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 304px;
  position: relative;
  width: auto;
}

.page-header-81 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  min-width: 193px;
  white-space: nowrap;
}

.header-98.header-99 {
  align-self: unset;
  flex-shrink: unset;
  left: 256px;
  margin-left: unset;
  margin-top: unset;
  position: absolute;
  top: 96px;
}
</style>
