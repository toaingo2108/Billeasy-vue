<template>
  <div :class="[`table-29`, className || ``]">
    <div class="row-invoices-detail-notes">
      <div class="cell-327">
        <div class="blue-t-shirt-xs-217 poppins-semi-bold-ebony-13px">
          <span class="span-527 poppins-semi-bold-ebony-13px">Header</span>
        </div>
        <img
          class="sort-51"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
      <div class="cell-328">
        <div class="blue-t-shirt-xs-218 poppins-semi-bold-ebony-13px">
          <span class="span-527 poppins-semi-bold-ebony-13px">Updated At</span>
        </div>
        <img
          class="sort-51"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
      <div class="cell-323">
        <div class="blue-t-shirt-xs-219 poppins-semi-bold-ebony-13px">
          <span class="span-527 poppins-semi-bold-ebony-13px">Created At</span>
        </div>
        <img
          class="sort-51"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
      <div class="cell-323">
        <div class="blue-t-shirt-xs-220 poppins-semi-bold-ebony-13px">
          <span class="span-527 poppins-semi-bold-ebony-13px">Created By</span>
        </div>
        <img
          class="sort-51"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
      <div class="cell-329">
        <div class="blue-t-shirt-xs-221 poppins-semi-bold-ebony-13px">
          <span class="span-527 poppins-semi-bold-ebony-13px">Updated By</span>
        </div>
        <img
          class="sort-51"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/sort-64@2x.png"
          alt="Sort"
        />
      </div>
    </div>
    <div class="table-row-28">
      <row-invoices-detail-notes
        :spanText1="rowInvoicesDetailNotes1Props.spanText1"
        :cell141Props="rowInvoicesDetailNotes1Props.cell141Props"
        :cell141Props2="rowInvoicesDetailNotes1Props.cell141Props2"
        :cell142Props="rowInvoicesDetailNotes1Props.cell142Props"
        :cell142Props2="rowInvoicesDetailNotes1Props.cell142Props2"
      />
      <row-invoices-detail-notes
        :spanText1="rowInvoicesDetailNotes2Props.spanText1"
        :cell141Props="rowInvoicesDetailNotes2Props.cell141Props"
        :cell141Props2="rowInvoicesDetailNotes2Props.cell141Props2"
        :cell142Props="rowInvoicesDetailNotes2Props.cell142Props"
        :cell142Props2="rowInvoicesDetailNotes2Props.cell142Props2"
      />
      <row-invoices-detail-notes
        :spanText1="rowInvoicesDetailNotes3Props.spanText1"
        :cell141Props="rowInvoicesDetailNotes3Props.cell141Props"
        :cell141Props2="rowInvoicesDetailNotes3Props.cell141Props2"
        :cell142Props="rowInvoicesDetailNotes3Props.cell142Props"
        :cell142Props2="rowInvoicesDetailNotes3Props.cell142Props2"
      />
    </div>
  </div>
</template>

<script>
import RowInvoicesDetailNotes from "./RowInvoicesDetailNotes";
export default {
  name: "Table52",
  components: {
    RowInvoicesDetailNotes,
  },
  props: ["className", "rowInvoicesDetailNotes1Props", "rowInvoicesDetailNotes2Props", "rowInvoicesDetailNotes3Props"],
};
</script>

<style>
.table-29 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 543px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1152px;
}

.row-invoices-detail-notes {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  width: 1152px;
}

.cell-327 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 160px;
}

.blue-t-shirt-xs-217 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 49px;
}

.sort-51 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-328 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 208px;
}

.blue-t-shirt-xs-218 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 75px;
}

.cell-323 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 176px;
}

.blue-t-shirt-xs-219 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 72px;
}

.blue-t-shirt-xs-220 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 74px;
}

.cell-329 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 368px;
}

.blue-t-shirt-xs-221 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 77px;
}

.table-row-28 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 489px;
  position: relative;
  width: 1152px;
}

.table-29.table-30,
.table-29.table-32 {
  left: 256px;
  top: 328px;
}
</style>
