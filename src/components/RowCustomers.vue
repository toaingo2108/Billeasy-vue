<template>
  <div class="row-customers-6">
    <cell622 />
    <cell59 />
    <cell82 :className="cell82Props.className" />
    <cell102 :className="cell102Props.className" />
    <cell322 :children="cell3221Props.children" :className="cell3221Props.className" />
    <cell422 />
    <cell18 :children="cell18Props.children" />
    <cell322 :children="cell3222Props.children" :className="cell3222Props.className" />
    <cell60 />
    <cell61 :statusProps="cell61Props.statusProps" />
    <cell132 :className="cell132Props.className" />
  </div>
</template>

<script>
import Cell622 from "./Cell622";
import Cell59 from "./Cell59";
import Cell82 from "./Cell82";
import Cell102 from "./Cell102";
import Cell322 from "./Cell322";
import Cell422 from "./Cell422";
import Cell18 from "./Cell18";
import Cell60 from "./Cell60";
import Cell61 from "./Cell61";
import Cell132 from "./Cell132";
export default {
  name: "RowCustomers",
  components: {
    Cell622,
    Cell59,
    Cell82,
    Cell102,
    Cell322,
    Cell422,
    Cell18,
    Cell60,
    Cell61,
    Cell132,
  },
  props: [
    "cell82Props",
    "cell102Props",
    "cell3221Props",
    "cell18Props",
    "cell3222Props",
    "cell61Props",
    "cell132Props",
  ],
};
</script>

<style>
.row-customers-6,
.row-customers-7,
.row-customers-8,
.row-customers-9,
.row-customers-10,
.row-customers-11 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}
</style>
