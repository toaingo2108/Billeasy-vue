<template>
  <div class="row-event-log-2">
    <cell6 :children="cell23Props.children" :className="cell23Props.className" />
    <cell23 :children="cell23Props2.children" />
    <div class="cell-300">
      <div class="blue-t-shirt-xs-195 poppins-medium-comet-13px">
        <span class="poppins-medium-comet-13px">John Doe</span>
      </div>
    </div>
    <cell142 :children="cell142Props.children" :className="cell142Props.className" />
    <cell24 :children="cell24Props.children" />
    <cell232 :className="cell232Props.className" :statusProps="cell232Props.statusProps" />
  </div>
</template>

<script>
import Cell6 from "./Cell6";
import Cell23 from "./Cell23";
import Cell142 from "./Cell142";
import Cell24 from "./Cell24";
import Cell232 from "./Cell232";
export default {
  name: "RowEventLog",
  components: {
    Cell6,
    Cell23,
    Cell142,
    Cell24,
    Cell232,
  },
  props: ["cell23Props", "cell23Props2", "cell142Props", "cell24Props", "cell232Props"],
};
</script>

<style>
.row-event-log-2 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.cell-300 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  padding: 21px 12px;
  width: 208px;
}

.blue-t-shirt-xs-195 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 184px;
}
</style>
