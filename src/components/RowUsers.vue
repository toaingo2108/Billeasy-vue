<template>
  <div class="row-users-3">
    <cell16 :children="cell161Props.children" />
    <cell16 :children="cell162Props.children" :className="cell162Props.className" />
    <cell17 :children="cell17Props.children" />
    <cell102 :className="cell102Props.className" />
    <div class="cell-253">
      <div class="blue-t-shirt-xs-163 poppins-medium-comet-13px">
        <span class="poppins-medium-comet-13px">2023-07-01, 21:32</span>
      </div>
    </div>
    <cell232 :statusProps="cell232Props.statusProps" />
    <cell132 :className="cell132Props.className" />
  </div>
</template>

<script>
import Cell16 from "./Cell16";
import Cell17 from "./Cell17";
import Cell102 from "./Cell102";
import Cell232 from "./Cell232";
import Cell132 from "./Cell132";
export default {
  name: "RowUsers",
  components: {
    Cell16,
    Cell17,
    Cell102,
    Cell232,
    Cell132,
  },
  props: ["cell161Props", "cell162Props", "cell17Props", "cell102Props", "cell232Props", "cell132Props"],
};
</script>

<style>
.row-users-3,
.row-users-4,
.row-users-5 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.cell-253,
.cell-254,
.cell-255 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 192px;
}

.blue-t-shirt-xs-163,
.blue-t-shirt-xs-164,
.blue-t-shirt-xs-165 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 168px;
}
</style>
