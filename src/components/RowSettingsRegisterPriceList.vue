<template>
  <div class="row-settings-register-price-list-1">
    <cell122 />
    <cell6 :children="cell6Props.children" />
    <cell7 :children="cell7Props.children" />
    <div class="cell-144"><status :src="statusProps.src" :className="statusProps.className" /></div>
    <cell132 />
  </div>
</template>

<script>
import Cell122 from "./Cell122";
import Cell6 from "./Cell6";
import Cell7 from "./Cell7";
import Status from "./Status";
import Cell132 from "./Cell132";
export default {
  name: "RowSettingsRegisterPriceList",
  components: {
    Cell122,
    Cell6,
    Cell7,
    Status,
    Cell132,
  },
  props: ["cell6Props", "cell7Props", "statusProps"],
};
</script>

<style>
.row-settings-register-price-list-1,
.row-settings-register-price-list-2 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 864px;
}

.cell-144,
.cell-145 {
  align-items: center;
  background-color: var(--whisper);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 0 76px;
  position: relative;
  width: 176px;
}
</style>
