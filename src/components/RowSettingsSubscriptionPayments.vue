<template>
  <div class="row-settings-subscription-payments-1">
    <cell :children="cellProps.children" />
    <div class="cell-164">
      <div class="blue-t-shirt-xs-76 poppins-semi-bold-ebony-13px">
        <span class="poppins-semi-bold-ebony-13px">Invoice</span>
      </div>
    </div>
    <cell322 :children="cell3221Props.children" />
    <cell322 :children="cell3222Props.children" />
    <cell102 />
    <cell4 :statusProps="cell4Props.statusProps" />
    <cell132 />
  </div>
</template>

<script>
import Cell from "./Cell";
import Cell322 from "./Cell322";
import Cell102 from "./Cell102";
import Cell4 from "./Cell4";
import Cell132 from "./Cell132";
export default {
  name: "RowSettingsSubscriptionPayments",
  components: {
    Cell,
    Cell322,
    Cell102,
    Cell4,
    Cell132,
  },
  props: ["cellProps", "cell3221Props", "cell3222Props", "cell4Props"],
};
</script>

<style>
.row-settings-subscription-payments-1 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 864px;
}

.cell-164 {
  align-items: flex-start;
  background-color: var(--whisper);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 168px;
}

.blue-t-shirt-xs-76 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 144px;
}
</style>
