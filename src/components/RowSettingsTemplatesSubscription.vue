<template>
  <div class="row-settings-templates-subscription-1">
    <cell :children="cellProps.children" :className="cellProps.className" />
    <cell9 :children="cell9Props.children" />
    <div class="cell-221">
      <p class="blue-t-shirt-xs-130 poppins-medium-comet-13px">
        <span class="poppins-medium-comet-13px"
          >Nam vel mauris est. Ut ultricies, ex cursus efficitur maximus, ipsum lacus accumsan libero,</span
        >
      </p>
    </div>
    <cell142 :children="cell142Props.children" />
    <cell132 :className="cell132Props.className" />
  </div>
</template>

<script>
import Cell from "./Cell";
import Cell9 from "./Cell9";
import Cell142 from "./Cell142";
import Cell132 from "./Cell132";
export default {
  name: "RowSettingsTemplatesSubscription",
  components: {
    Cell,
    Cell9,
    Cell142,
    Cell132,
  },
  props: ["cellProps", "cell9Props", "cell142Props", "cell132Props"],
};
</script>

<style>
.row-settings-templates-subscription-1,
.row-settings-templates-subscription-2 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 864px;
}

.cell-221,
.cell-222 {
  align-items: flex-start;
  background-color: var(--whisper);
  display: flex;
  height: 64px;
  padding: 11px 12px;
  width: 376px;
}

.blue-t-shirt-xs-130,
.blue-t-shirt-xs-131 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 40px;
  width: 352px;
}
</style>
