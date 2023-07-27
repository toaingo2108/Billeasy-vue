<template>
  <div class="integration-1">
    <div class="flex-row-109">
      <img
        class="image-202-4"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22c51017f2021375cb95e/img/image-202-1@2x.png"
        alt="image 202"
      />
      <div class="fortnox-4 poppins-semi-bold-ebony-20px">
        <span class="poppins-semi-bold-ebony-20px">Fortnox</span>
      </div>
    </div>
    <button32 :className="button3Props.className" />
  </div>
</template>

<script>
import Button32 from "./Button32";
export default {
  name: "Integration",
  components: {
    Button32,
  },
  props: ["button3Props"],
};
</script>

<style>
.integration-1 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 19px;
  height: 128px;
  overflow: hidden;
  padding: 23px 0;
  position: relative;
  width: 240px;
}

.flex-row-109 {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  height: 25px;
  margin-left: 24px;
  min-width: 116px;
}

.image-202-4 {
  align-self: flex-end;
  height: 24px;
  object-fit: cover;
  width: 24px;
}

.fortnox-4 {
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}
</style>
