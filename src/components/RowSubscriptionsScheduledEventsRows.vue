<template>
  <div class="row-subscriptions-scheduled-events-rows-1">
    <cell622 />
    <cell1522 />
    <div class="cell-509">
      <div class="blue-t-shirt-xs-341 poppins-semi-bold-ebony-13px">
        <span class="poppins-semi-bold-ebony-13px">1001</span>
      </div>
    </div>
    <cell9 :children="cell18Props.children" :className="cell18Props.className" />
    <cell18 :children="cell18Props2.children" />
    <cell232 :statusProps="cell23Props.statusProps" />
    <cell25 :statusProps="cell25Props.statusProps" />
    <cell422 />
    <cell242 />
  </div>
</template>

<script>
import Cell622 from "./Cell622";
import Cell1522 from "./Cell1522";
import Cell9 from "./Cell9";
import Cell18 from "./Cell18";
import Cell232 from "./Cell232";
import Cell25 from "./Cell25";
import Cell422 from "./Cell422";
import Cell242 from "./Cell242";
export default {
  name: "RowSubscriptionsScheduledEventsRows",
  components: {
    Cell622,
    Cell1522,
    Cell9,
    Cell18,
    Cell232,
    Cell25,
    Cell422,
    Cell242,
  },
  props: ["cell18Props", "cell18Props2", "cell23Props", "cell25Props"],
};
</script>

<style>
.row-subscriptions-scheduled-events-rows-1 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 792px;
}

.cell-509 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 66px;
}

.blue-t-shirt-xs-341 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 42px;
}
</style>
