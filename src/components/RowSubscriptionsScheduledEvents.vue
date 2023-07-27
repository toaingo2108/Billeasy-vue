<template>
  <div class="row-subscriptions-scheduled-events-1">
    <cell622 />
    <cell1522 />
    <cell162 />
    <cell18 :children="cell18Props.children" />
    <cell232 :statusProps="cell231Props.statusProps" />
    <cell232 :statusProps="cell232Props.statusProps" />
    <cell322 :children="cell322Props.children" :className="cell322Props.className" />
    <cell242 />
  </div>
</template>

<script>
import Cell622 from "./Cell622";
import Cell1522 from "./Cell1522";
import Cell162 from "./Cell162";
import Cell18 from "./Cell18";
import Cell232 from "./Cell232";
import Cell322 from "./Cell322";
import Cell242 from "./Cell242";
export default {
  name: "RowSubscriptionsScheduledEvents",
  components: {
    Cell622,
    Cell1522,
    Cell162,
    Cell18,
    Cell232,
    Cell322,
    Cell242,
  },
  props: ["cell18Props", "cell231Props", "cell232Props", "cell322Props"],
};
</script>

<style>
.row-subscriptions-scheduled-events-1 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 792px;
}
</style>
