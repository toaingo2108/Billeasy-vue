<template>
  <header class="header-92">
    <button322 :className="button32Props.className" />
    <div class="page-header-72 poppins-semi-bold-ebony-20px">
      <span class="poppins-semi-bold-ebony-20px">Imported Invoices</span>
    </div>
  </header>
</template>

<script>
import Button322 from "./Button322";
export default {
  name: "Header10",
  components: {
    Button322,
  },
  props: ["button32Props"],
};
</script>

<style>
.header-92,
.header-93 {
  align-items: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  gap: 24px;
  height: 40px;
  justify-content: flex-start;
  left: 256px;
  min-width: 295px;
  position: absolute;
  top: 96px;
  width: auto;
}

.page-header-72,
.page-header-73 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  min-width: 184px;
  white-space: nowrap;
}
</style>
