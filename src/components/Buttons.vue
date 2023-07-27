<template>
  <div :class="[`buttons-1`, className || ``]">
    <button222 :className="button222Props.className" />
    <div class="button-7">
      <img class="check-5" :src="check" alt="Check" />
      <div class="text-12 poppins-medium-white-14px">
        <span class="spany8mc5 poppins-medium-white-14px">{{ spanText }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Button222 from "./Button222";
export default {
  name: "Buttons",
  components: {
    Button222,
  },
  props: ["check", "spanText", "className", "button222Props"],
};
</script>

<style>
.buttons-1,
.buttons-1.buttons {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 216px;
  position: relative;
}

.button-7 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 104px;
  padding: 8.5px 12.5px;
  transition: all 0.15s ease;
}

.button-7:hover,
.text-12:hover {
  transform: translate(0, -5px);
}

.check-5 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-12 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 51px;
  text-align: center;
}

.buttons-1.buttons-2 .button-7,
.buttons-1.buttons-4 .button-7,
.buttons-1.buttons-7 .button-7 {
  cursor: unset;
  padding: 8.5px 12px;
  transition: unset;
}

.buttons-1.buttons-2 .text-12 {
  cursor: pointer;
  min-width: 52px;
  transition: all 0.15s ease;
}

.buttons-1.buttons-3 .button-7,
.buttons-1.buttons-5 .button-7,
.buttons-1.buttons .button-7,
.buttons-1.buttons-6 .button-7 {
  padding: 8.5px 12px;
}

.buttons-1.buttons-3 .text-12,
.buttons-1.buttons-4 .text-12,
.buttons-1.buttons-5 .text-12,
.buttons-1.buttons-7 .text-12,
.buttons-1.buttons-6 .text-12,
.buttons-1.buttons .text-12 {
  min-width: 52px;
}
</style>
