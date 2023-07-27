<template>
  <div class="input-field-91">
    <div class="label-543 poppins-medium-ebony-13px">
      <span class="poppins-medium-ebony-13px">{{ spanText1 }}</span>
    </div>
    <div class="input-190">
      <div class="input-text-294 poppins-normal-ebony-14px">
        <span class="poppins-normal-ebony-14px">{{ spanText2 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputField4",
  props: ["spanText1", "spanText2"],
};
</script>

<style>
.input-field-91 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: 0;
  min-height: 66px;
  position: absolute;
  top: 0;
  width: 160px;
}

.label-543 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 160px;
}

.input-190 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 160px;
}

.input-text-294 {
  letter-spacing: 0;
  line-height: 24px;
  width: 136px;
}
</style>
