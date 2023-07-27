<template>
  <div class="row-invoices-detail-notes-4">
    <cell82 />
    <cell16 :children="cell141Props.children" :className="cell141Props.className" />
    <cell142 :children="cell141Props2.children" :className="cell141Props2.className" />
    <cell142 :children="cell142Props.children" :className="cell142Props.className" />
    <div class="cell-339">
      <div class="blue-t-shirt-xs-237 poppins-medium-comet-13px">
        <span class="poppins-medium-comet-13px">{{ spanText1 }}</span>
      </div>
    </div>
    <cell132 :className="cell142Props2.className" />
  </div>
</template>

<script>
import Cell82 from "./Cell82";
import Cell16 from "./Cell16";
import Cell142 from "./Cell142";
import Cell132 from "./Cell132";
export default {
  name: "RowInvoicesDetailNotes",
  components: {
    Cell82,
    Cell16,
    Cell142,
    Cell132,
  },
  props: ["spanText1", "cell141Props", "cell141Props2", "cell142Props", "cell142Props2"],
};
</script>

<style>
.row-invoices-detail-notes-4,
.row-invoices-detail-notes-5,
.row-invoices-detail-notes-6,
.row-invoices-detail-notes-7 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.cell-339,
.cell-340,
.cell-341,
.cell-342 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 368px;
}

.blue-t-shirt-xs-237,
.blue-t-shirt-xs-238,
.blue-t-shirt-xs-239,
.blue-t-shirt-xs-240 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 344px;
}
</style>
