<template>
  <div class="table-row-24">
    <row-customers-details-notes :cell21Props="rowCustomersDetailsNotes1Props.cell21Props" />
    <row-customers-details-notes :cell21Props="rowCustomersDetailsNotes2Props.cell21Props" />
    <row-customers-details-notes :cell21Props="rowCustomersDetailsNotes3Props.cell21Props" />
    <row-customers-details-notes :cell21Props="rowCustomersDetailsNotes4Props.cell21Props" />
    <row-customers-details-notes :cell21Props="rowCustomersDetailsNotes5Props.cell21Props" />
  </div>
</template>

<script>
import RowCustomersDetailsNotes from "./RowCustomersDetailsNotes";
export default {
  name: "TableRow32",
  components: {
    RowCustomersDetailsNotes,
  },
  props: [
    "rowCustomersDetailsNotes1Props",
    "rowCustomersDetailsNotes2Props",
    "rowCustomersDetailsNotes3Props",
    "rowCustomersDetailsNotes4Props",
    "rowCustomersDetailsNotes5Props",
  ],
};
</script>

<style>
.table-row-24,
.table-row-25,
.table-row-26,
.table-row-27 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 264px;
  position: relative;
  width: 600px;
}
</style>
