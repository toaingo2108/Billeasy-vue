<template>
  <div :class="[`bottom-section-29`, className || ``]">
    <img
      class="top-border-33"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/top-border-12@2x.png"
      alt="Top Border"
    />
    <div class="buttons-35">
      <button222 :className="button222Props.className" />
      <div class="button-122">
        <img
          class="upload-29"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/upload-7@2x.png"
          alt="Upload"
        />
        <div class="text-213 poppins-medium-white-14px">
          <span class="spanqfjxmi poppins-medium-white-14px">Import</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button222 from "./Button222";
export default {
  name: "BottomSection322",
  components: {
    Button222,
  },
  props: ["className", "button222Props"],
};
</script>

<style>
.bottom-section-29 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 44px;
  width: 624px;
}

.top-border-33 {
  height: 1px;
  width: 624px;
}

.buttons-35 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 212px;
  position: relative;
}

.button-122 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 100px;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
}

.button-122:hover {
  transform: translate(0, -5px);
}

.upload-29 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-213 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 48px;
  text-align: center;
}

.bottom-section-29.bottom-section-30,
.bottom-section-29.bottom-section-32 {
  margin-top: unset;
}

.bottom-section-29.bottom-section-30 .button-122 {
  cursor: unset;
  transition: unset;
}

.bottom-section-29.bottom-section-31 {
  margin-top: 53px;
}

.bottom-section-29.bottom-section-33 {
  margin-top: 28px;
}
</style>
