<template>
  <div class="table-row-15">
    <row-settings-templates-subscription
      :cellProps="rowSettingsTemplatesSubscription1Pr.cellProps"
      :cell9Props="rowSettingsTemplatesSubscription1Pr.cell9Props"
      :cell142Props="rowSettingsTemplatesSubscription1Pr.cell142Props"
      :cell132Props="rowSettingsTemplatesSubscription1Pr.cell132Props"
    />
    <row-settings-templates-subscription
      :cellProps="rowSettingsTemplatesSubscription2Pr.cellProps"
      :cell9Props="rowSettingsTemplatesSubscription2Pr.cell9Props"
      :cell142Props="rowSettingsTemplatesSubscription2Pr.cell142Props"
      :cell132Props="rowSettingsTemplatesSubscription2Pr.cell132Props"
    />
    <row-settings-templates-subscription
      :cellProps="rowSettingsTemplatesSubscription3Pr.cellProps"
      :cell9Props="rowSettingsTemplatesSubscription3Pr.cell9Props"
      :cell142Props="rowSettingsTemplatesSubscription3Pr.cell142Props"
      :cell132Props="rowSettingsTemplatesSubscription3Pr.cell132Props"
    />
  </div>
</template>

<script>
import RowSettingsTemplatesSubscription from "./RowSettingsTemplatesSubscription";
export default {
  name: "TableRow",
  components: {
    RowSettingsTemplatesSubscription,
  },
  props: [
    "rowSettingsTemplatesSubscription1Pr",
    "rowSettingsTemplatesSubscription2Pr",
    "rowSettingsTemplatesSubscription3Pr",
  ],
};
</script>

<style>
.table-row-15,
.table-row-16 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 204px;
  position: relative;
  width: 864px;
}
</style>
