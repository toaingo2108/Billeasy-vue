<template>
  <div :class="[`bottom-section-17`, className || ``]">
    <img
      class="top-border-21"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/top-border-8@2x.png"
      alt="Top Border"
    />
    <div class="buttons-24">
      <button222 />
      <div class="button-97">
        <img class="check-144" :src="check" alt="Check" />
        <div class="text-166 poppins-medium-white-14px">
          <span class="spanpzr7 poppins-medium-white-14px">Save</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button222 from "./Button222";
export default {
  name: "BottomSection4",
  components: {
    Button222,
  },
  props: ["check", "className"],
};
</script>

<style>
.bottom-section-17 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 42px;
  width: 400px;
}

.top-border-21 {
  height: 1px;
  width: 400px;
}

.buttons-24 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 199px;
  position: relative;
}

.button-97 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 87px;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
}

.button-97:hover {
  transform: translate(0, -5px);
}

.check-144 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-166 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.bottom-section-17.bottom-section-19 {
  margin-top: 34px;
}

.bottom-section-17.bottom-section-20,
.bottom-section-17.bottom-section-21 {
  margin-top: 22px;
}
</style>
