<template>
  <div :class="[`options`, className || ``]">
    <dropdown-item
      :payment="dropdownItem1Props.payment"
      :spanText="dropdownItem1Props.spanText"
      :className="dropdownItem1Props.className"
    />
    <dropdown-item
      :payment="dropdownItem2Props.payment"
      :spanText="dropdownItem2Props.spanText"
      :className="dropdownItem2Props.className"
    />
    <dropdown-item
      :payment="dropdownItem3Props.payment"
      :spanText="dropdownItem3Props.spanText"
      :className="dropdownItem3Props.className"
    />
    <dropdown-item
      :payment="dropdownItem4Props.payment"
      :spanText="dropdownItem4Props.spanText"
      :className="dropdownItem4Props.className"
    />
    <dropdown-item
      :payment="dropdownItem5Props.payment"
      :spanText="dropdownItem5Props.spanText"
      :className="dropdownItem5Props.className"
    />
  </div>
</template>

<script>
import DropdownItem from "./DropdownItem";
export default {
  name: "Options",
  components: {
    DropdownItem,
  },
  props: [
    "className",
    "dropdownItem1Props",
    "dropdownItem2Props",
    "dropdownItem3Props",
    "dropdownItem4Props",
    "dropdownItem5Props",
  ],
};
</script>

<style>
.options {
  align-items: center;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  gap: 2px;
  height: 192px;
  left: 864px;
  overflow: hidden;
  padding: 12px 0;
  position: absolute;
  top: 326px;
  width: 240px;
}

.options.options-1,
.options.options-2,
.options.options-3,
.options.options-5,
.options.options-6,
.options.options-7 {
  left: 1120px;
  top: 654px;
}
</style>
