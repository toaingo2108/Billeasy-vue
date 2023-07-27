<template>
  <div class="row-invoices-imported-rules-2">
    <cell622 />
    <div class="cell-612">
      <div class="blue-t-shirt-xs-437 poppins-semi-bold-ebony-13px">
        <span class="poppins-semi-bold-ebony-13px">Send via Swish</span>
      </div>
    </div>
    <div class="cell-613">
      <div class="blue-t-shirt-xs-438 poppins-semi-bold-ebony-13px">
        <span class="poppins-semi-bold-ebony-13px">Sending</span>
      </div>
    </div>
    <cell20 :children="cell132Props.children" :className="cell132Props.className" />
    <div class="cell-613">
      <div class="blue-t-shirt-xs-438 poppins-medium-comet-13px">
        <span class="poppins-medium-comet-13px">Total Amount</span>
      </div>
    </div>
    <div class="cell-614">
      <div class="blue-t-shirt-xs-439 poppins-medium-comet-13px">
        <span class="poppins-medium-comet-13px">&gt;</span>
      </div>
    </div>
    <cell17 :children="cell132Props2.children" />
    <cell132 :className="cell132Props3.className" />
  </div>
</template>

<script>
import Cell622 from "./Cell622";
import Cell20 from "./Cell20";
import Cell17 from "./Cell17";
import Cell132 from "./Cell132";
export default {
  name: "RowInvoicesImportedRules",
  components: {
    Cell622,
    Cell20,
    Cell17,
    Cell132,
  },
  props: ["cell132Props", "cell132Props2", "cell132Props3"],
};
</script>

<style>
.row-invoices-imported-rules-2,
.row-invoices-imported-rules-3 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.cell-612,
.cell-615 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 152px;
}

.blue-t-shirt-xs-437,
.blue-t-shirt-xs-440 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 128px;
}

.cell-613,
.cell-616 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 184px;
}

.blue-t-shirt-xs-438,
.blue-t-shirt-xs-441 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 160px;
}

.cell-614,
.cell-617 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 128px;
}

.blue-t-shirt-xs-439,
.blue-t-shirt-xs-442 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  text-align: center;
  width: 104px;
}
</style>
