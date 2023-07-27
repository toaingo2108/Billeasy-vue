<template>
  <div class="row-products-services-8">
    <cell622 />
    <cell59 />
    <cell82 :className="cell82Props.className" />
    <cell322 :children="cell3221Props.children" :className="cell3221Props.className" />
    <cell422 />
    <cell422 />
    <cell67 :children="cell671Props.children" />
    <cell67 :children="cell672Props.children" />
    <cell60 />
    <cell322 :children="cell3222Props.children" :className="cell3222Props.className" />
    <cell61 :statusProps="cell61Props.statusProps" />
    <cell132 :className="cell132Props.className" />
  </div>
</template>

<script>
import Cell622 from "./Cell622";
import Cell59 from "./Cell59";
import Cell82 from "./Cell82";
import Cell322 from "./Cell322";
import Cell422 from "./Cell422";
import Cell67 from "./Cell67";
import Cell60 from "./Cell60";
import Cell61 from "./Cell61";
import Cell132 from "./Cell132";
export default {
  name: "RowProductsServices",
  components: {
    Cell622,
    Cell59,
    Cell82,
    Cell322,
    Cell422,
    Cell67,
    Cell60,
    Cell61,
    Cell132,
  },
  props: [
    "cell82Props",
    "cell3221Props",
    "cell671Props",
    "cell672Props",
    "cell3222Props",
    "cell61Props",
    "cell132Props",
  ],
};
</script>

<style>
.row-products-services-8,
.row-products-services-9,
.row-products-services-10,
.row-products-services-11,
.row-products-services-12,
.row-products-services-13,
.row-products-services-14,
.row-products-services-15 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}
</style>
