<template>
  <div class="row-settings-register-vat-rates-3">
    <cell122 />
    <div class="cell-43">
      <div class="blue-t-shirt-xs-27 poppins-semi-bold-ebony-13px">
        <span class="poppins-semi-bold-ebony-13px">1001</span>
      </div>
    </div>
    <cell132 />
  </div>
</template>

<script>
import Cell122 from "./Cell122";
import Cell132 from "./Cell132";
export default {
  name: "RowSettingsRegisterVATRates",
  components: {
    Cell122,
    Cell132,
  },
};
</script>

<style>
.row-settings-register-vat-rates-3,
.row-settings-register-vat-rates-4 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 864px;
}

.cell-43,
.cell-44 {
  align-items: flex-start;
  background-color: var(--whisper);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 736px;
}

.blue-t-shirt-xs-27,
.blue-t-shirt-xs-28 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 712px;
}
</style>
