<template>
  <div class="input-33">
    <div class="input-text-52 poppins-normal-ebony-14px">
      <span class="poppins-normal-ebony-14px">{{ children }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input6",
  props: ["children"],
};
</script>

<style>
.input-33,
.input-34 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 224px;
}

.input-text-52,
.input-text-53 {
  letter-spacing: 0;
  line-height: 24px;
  width: 200px;
}
</style>
