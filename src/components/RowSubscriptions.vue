<template>
  <div class="row-subscriptions-1">
    <cell622 />
    <cell1522 />
    <cell162 />
    <div class="cell-397">
      <div class="blue-t-shirt-xs-290 poppins-medium-comet-13px"><span class="poppins-medium-comet-13px">12</span></div>
    </div>
    <cell172 />
    <cell18 :children="cell181Props.children" />
    <cell18 :children="cell182Props.children" />
    <cell18 :children="cell183Props.children" />
    <cell322 :children="cell322Props.children" :className="cell322Props.className" />
    <div class="cell-398"><status :src="statusProps.src" :className="statusProps.className" /></div>
    <cell132 :className="cell132Props.className" />
  </div>
</template>

<script>
import Cell622 from "./Cell622";
import Cell1522 from "./Cell1522";
import Cell162 from "./Cell162";
import Cell172 from "./Cell172";
import Cell18 from "./Cell18";
import Cell322 from "./Cell322";
import Status from "./Status";
import Cell132 from "./Cell132";
export default {
  name: "RowSubscriptions",
  components: {
    Cell622,
    Cell1522,
    Cell162,
    Cell172,
    Cell18,
    Cell322,
    Status,
    Cell132,
  },
  props: ["cell181Props", "cell182Props", "cell183Props", "cell322Props", "statusProps", "cell132Props"],
};
</script>

<style>
.row-subscriptions-1,
.row-subscriptions-2,
.row-subscriptions-3,
.row-subscriptions-4 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.cell-397,
.cell-399,
.cell-401,
.cell-403 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 136px;
}

.blue-t-shirt-xs-290,
.blue-t-shirt-xs-291,
.blue-t-shirt-xs-292,
.blue-t-shirt-xs-293 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 112px;
}

.cell-398,
.cell-400,
.cell-402,
.cell-404 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 0 32px;
  position: relative;
  width: 88px;
}
</style>
