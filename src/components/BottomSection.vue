<template>
  <div class="bottom-section-2">
    <img
      class="top-border-3"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22dba246afc58caf68006/img/top-border-2@2x.png"
      alt="Top Border"
    />
    <buttons42 />
  </div>
</template>

<script>
import Buttons42 from "./Buttons42";
export default {
  name: "BottomSection",
  components: {
    Buttons42,
  },
};
</script>

<style>
.bottom-section-2,
.bottom-section-3 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 16px;
  position: relative;
  width: 752px;
}

.top-border-3,
.top-border-4 {
  height: 1px;
  width: 752px;
}
</style>
