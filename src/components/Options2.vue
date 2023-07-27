<template>
  <div class="options-11">
    <option16 :spanText="option161Props.spanText" :checkboxProps="option161Props.checkboxProps" />
    <option16 :spanText="option162Props.spanText" :checkboxProps="option162Props.checkboxProps" />
    <option16 :spanText="option163Props.spanText" :checkboxProps="option163Props.checkboxProps" />
    <option17 :children="option171Props.children" />
    <option17 :children="option172Props.children" />
    <option17 :children="option173Props.children" />
    <option17 :children="option174Props.children" />
    <option17 :children="option175Props.children" />
  </div>
</template>

<script>
import Option16 from "./Option16";
import Option17 from "./Option17";
export default {
  name: "Options2",
  components: {
    Option16,
    Option17,
  },
  props: [
    "option161Props",
    "option162Props",
    "option163Props",
    "option171Props",
    "option172Props",
    "option173Props",
    "option174Props",
    "option175Props",
  ],
};
</script>

<style>
.options-11,
.options-12 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 276px;
  position: relative;
  width: 240px;
}
</style>
