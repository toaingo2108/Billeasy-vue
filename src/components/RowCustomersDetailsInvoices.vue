<template>
  <div class="row-customers-details-invoices-1">
    <cell63 />
    <cell :children="cellProps.children" :className="cellProps.className" />
    <cell422 :className="cell422Props.className" />
    <cell172 :className="cell1721Props.className" />
    <cell172 :className="cell1722Props.className" />
    <cell64 :checkboxProps="cell64Props.checkboxProps" />
    <cell122 :className="cell12Props.className" />
  </div>
</template>

<script>
import Cell63 from "./Cell63";
import Cell from "./Cell";
import Cell422 from "./Cell422";
import Cell172 from "./Cell172";
import Cell64 from "./Cell64";
import Cell122 from "./Cell122";
export default {
  name: "RowCustomersDetailsInvoices",
  components: {
    Cell63,
    Cell,
    Cell422,
    Cell172,
    Cell64,
    Cell122,
  },
  props: ["cellProps", "cell422Props", "cell1721Props", "cell1722Props", "cell64Props", "cell12Props"],
};
</script>

<style>
.row-customers-details-invoices-1 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 600px;
}
</style>
