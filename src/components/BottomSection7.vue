<template>
  <div class="bottom-section-63">
    <img
      class="top-border-91"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22b90246afc58caf68004/img/top-border-10@2x.png"
      alt="Top Border"
    />
    <button22 :check="button2Props.check" :className="button2Props.className" />
  </div>
</template>

<script>
import Button22 from "./Button22";
export default {
  name: "BottomSection7",
  components: {
    Button22,
  },
  props: ["button2Props"],
};
</script>

<style>
.bottom-section-63,
.bottom-section-64 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 46px;
  position: relative;
  width: 336px;
}

.top-border-91,
.top-border-92 {
  height: 1px;
  width: 336px;
}
</style>
