<template>
  <div class="row-invoices-scheduled-events-2">
    <cell622 />
    <cell23 :children="statusProps.children" :className="statusProps.className" />
    <cell7 :children="statusProps2.children" :className="statusProps2.className" />
    <div class="cell-626">
      <div class="blue-t-shirt-xs-451 poppins-medium-comet-13px">
        <span class="poppins-medium-comet-13px">2023-07-01</span>
      </div>
    </div>
    <cell4 :className="statusProps22.className" :statusProps="statusProps22.statusProps" />
    <cell132 :className="statusProps222.className" />
  </div>
</template>

<script>
import Cell622 from "./Cell622";
import Cell23 from "./Cell23";
import Cell7 from "./Cell7";
import Cell4 from "./Cell4";
import Cell132 from "./Cell132";
export default {
  name: "RowInvoicesScheduledEvents",
  components: {
    Cell622,
    Cell23,
    Cell7,
    Cell4,
    Cell132,
  },
  props: ["statusProps", "statusProps2", "statusProps22", "statusProps222"],
};
</script>

<style>
.row-invoices-scheduled-events-2,
.row-invoices-scheduled-events-3 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.cell-626,
.cell-627 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 336px;
}

.blue-t-shirt-xs-451,
.blue-t-shirt-xs-452 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 312px;
}
</style>
