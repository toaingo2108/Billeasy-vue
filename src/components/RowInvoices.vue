<template>
  <div class="row-invoices-4">
    <cell622 />
    <div class="cell-584">
      <div class="blue-t-shirt-xs-409 poppins-semi-bold-ebony-13px">
        <span class="poppins-semi-bold-ebony-13px">1001</span>
      </div>
    </div>
    <cell162 />
    <cell102 :className="cell3221Props.className" />
    <div class="cell-585">
      <div class="blue-t-shirt-xs-410 poppins-medium-comet-13px">
        <span class="poppins-medium-comet-13px">Stockholm</span>
      </div>
    </div>
    <div class="cell-586">
      <div class="blue-t-shirt-xs-411 poppins-medium-comet-13px">
        <span class="poppins-medium-comet-13px">2023-07-01</span>
      </div>
    </div>
    <cell322 :children="cell3221Props2.children" :className="cell3221Props2.className" />
    <cell322 :children="cell3222Props.children" :className="cell3222Props.className" />
    <cell25 :statusProps="cell3222Props2.statusProps" />
    <cell132 :className="cell3222Props3.className" />
  </div>
</template>

<script>
import Cell622 from "./Cell622";
import Cell162 from "./Cell162";
import Cell102 from "./Cell102";
import Cell322 from "./Cell322";
import Cell25 from "./Cell25";
import Cell132 from "./Cell132";
export default {
  name: "RowInvoices",
  components: {
    Cell622,
    Cell162,
    Cell102,
    Cell322,
    Cell25,
    Cell132,
  },
  props: ["cell3221Props", "cell3221Props2", "cell3222Props", "cell3222Props2", "cell3222Props3"],
};
</script>

<style>
.row-invoices-4,
.row-invoices-5,
.row-invoices-6,
.row-invoices-7,
.row-invoices-8,
.row-invoices-9 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.cell-584,
.cell-587,
.cell-590,
.cell-593,
.cell-596,
.cell-599 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 120px;
}

.blue-t-shirt-xs-409,
.blue-t-shirt-xs-412,
.blue-t-shirt-xs-415,
.blue-t-shirt-xs-418,
.blue-t-shirt-xs-421,
.blue-t-shirt-xs-424 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 96px;
}

.cell-585,
.cell-588,
.cell-591,
.cell-594,
.cell-597,
.cell-600 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 138px;
}

.blue-t-shirt-xs-410,
.blue-t-shirt-xs-413,
.blue-t-shirt-xs-416,
.blue-t-shirt-xs-419,
.blue-t-shirt-xs-422,
.blue-t-shirt-xs-425 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 114px;
}

.cell-586,
.cell-589,
.cell-592,
.cell-595,
.cell-598,
.cell-601 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 116px;
}

.blue-t-shirt-xs-411,
.blue-t-shirt-xs-414,
.blue-t-shirt-xs-417,
.blue-t-shirt-xs-420,
.blue-t-shirt-xs-423,
.blue-t-shirt-xs-426 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 92px;
}
</style>
