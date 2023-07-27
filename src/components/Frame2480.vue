<template>
  <div :class="[`frame-2480`, className || ``]">
    <div class="chip-container-4">
      <div class="chip-36">
        <div class="input-text-245 poppins-normal-ebony-12px">
          <span class="span-710 poppins-normal-ebony-12px">test@email.com</span>
        </div>
        <img
          class="close-circle-6"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/close-circle-13@2x.png"
          alt="Close-Circle"
        />
      </div>
      <div class="chip-37">
        <div class="input-text-246 poppins-normal-ebony-12px">
          <span class="span-710 poppins-normal-ebony-12px">user@email.com</span>
        </div>
        <img
          class="close-circle-6"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/close-circle-13@2x.png"
          alt="Close-Circle"
        />
      </div>
    </div>
    <div class="chip-38">
      <div class="input-text-247 poppins-normal-ebony-12px">
        <span class="span-710 poppins-normal-ebony-12px">customer@email.com</span>
      </div>
      <img
        class="close-circle-6"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/close-circle-13@2x.png"
        alt="Close-Circle"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame2480",
  props: ["className"],
};
</script>

<style>
.frame-2480 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-right: 272px;
  margin-top: 12px;
  min-height: 60px;
  width: 336px;
}

.chip-container-4 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 273px;
}

.chip-36 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 100px;
  display: flex;
  gap: 4px;
  height: 26px;
  overflow: hidden;
  padding: 3px 4px;
  width: 131px;
}

.input-text-245 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 4px;
  min-height: 18px;
  min-width: 99px;
}

.close-circle-6 {
  align-self: center;
  height: 16px;
  width: 16px;
}

.chip-37 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 100px;
  display: flex;
  gap: 4px;
  height: 26px;
  overflow: hidden;
  padding: 3px 4px;
  width: 134px;
}

.input-text-246 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 4px;
  min-height: 18px;
  min-width: 102px;
}

.chip-38 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 100px;
  display: flex;
  gap: 4px;
  height: 26px;
  overflow: hidden;
  padding: 3px 4px;
  width: 166px;
}

.input-text-247 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 4px;
  min-height: 18px;
  min-width: 134px;
}

.frame-2480.frame-2480-2,
.frame-2480.frame-2480-3,
.frame-2480.frame-2480-4,
.frame-2480.frame-2480-5,
.frame-2480.frame-2480-6,
.frame-2480.frame-2480-7,
.frame-2480.frame-2480-8,
.frame-2480.frame-2480-9,
.frame-2480.frame-2480-10 {
  align-self: unset;
  margin-right: unset;
  margin-top: unset;
}
</style>
