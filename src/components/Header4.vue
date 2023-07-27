<template>
  <header :class="[`header-82`, className || ``]">
    <button322 :className="button32Props.className" />
    <div class="page-header-59 poppins-semi-bold-ebony-20px">
      <span class="spanusndq poppins-semi-bold-ebony-20px">Subscriptions</span>
    </div>
  </header>
</template>

<script>
import Button322 from "./Button322";
export default {
  name: "Header4",
  components: {
    Button322,
  },
  props: ["className", "button32Props"],
};
</script>

<style>
.header-82 {
  align-items: flex-start;
  align-self: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  gap: 24px;
  height: 40px;
  justify-content: flex-start;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 251px;
  position: relative;
  width: auto;
}

.page-header-59 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  min-width: 140px;
  white-space: nowrap;
}

.header-82.header-84 {
  align-self: unset;
  flex-shrink: unset;
  left: 256px;
  margin-left: unset;
  margin-top: unset;
  position: absolute;
  top: 96px;
}
</style>
