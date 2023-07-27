<template>
  <div :class="[`header-79-1`, className || ``]">
    <div class="flex-row-134">
      <div class="input-text-157 poppins-semi-bold-ebony-16px">
        <span class="span-507 poppins-semi-bold-ebony-16px">{{ spanText1 }}</span>
      </div>
      <div class="frame-2541-3">
        <div class="input-text-154 poppins-normal-white-12px">
          <span class="span-507 poppins-normal-white-12px">{{ spanText2 }}</span>
        </div>
      </div>
    </div>
    <img
      class="line-706-8"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22c01612f046d106ab35c/img/line-706-10@2x.png"
      alt="Line 706"
    />
  </div>
</template>

<script>
export default {
  name: "Header32",
  props: ["spanText1", "spanText2", "className"],
};
</script>

<style>
.header-79-1 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 17px;
  height: 56px;
  overflow: hidden;
  width: 264px;
}

.flex-row-134 {
  align-items: flex-end;
  display: flex;
  gap: 110px;
  height: 24px;
  margin-left: 8px;
  margin-top: 15px;
  min-width: 224px;
}

.input-text-157 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 86px;
}

.frame-2541-3 {
  align-items: flex-start;
  background-color: #dba312;
  border-radius: 100px;
  display: flex;
  height: 22px;
  min-width: 28px;
  padding: 1px 10px;
}

.input-text-154 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
}

.line-706-8 {
  height: 1px;
  width: 264px;
}

.header-79-1.header-79-2 .flex-row-134,
.header-79-1.header-80-2 .flex-row-134,
.header-79-1.header-81-2 .flex-row-134 {
  gap: 121px;
}

.header-79-1.header-79-2 .input-text-157,
.header-79-1.header-80-2 .input-text-157,
.header-79-1.header-81-2 .input-text-157 {
  min-width: 76px;
}

.header-79-1.header-79-2 .frame-2541-3,
.header-79-1.header-80-2 .frame-2541-3,
.header-79-1.header-81-2 .frame-2541-3 {
  background-color: var(--electric-violet);
  min-width: 27px;
}

.header-79-1.header-79 .flex-row-134,
.header-79-1.header-80 .flex-row-134,
.header-79-1.header-81 .flex-row-134 {
  gap: 136px;
}

.header-79-1.header-79 .input-text-157,
.header-79-1.header-80 .input-text-157,
.header-79-1.header-81 .input-text-157 {
  min-width: 61px;
}

.header-79-1.header-79 .frame-2541-3,
.header-79-1.header-80 .frame-2541-3,
.header-79-1.header-81 .frame-2541-3 {
  background-color: var(--navy-blue);
  min-width: 27px;
}

.header-79-1.header-80-1 .frame-2541-3,
.header-79-1.header-81-1 .frame-2541-3 {
  background-color: var(--golden-bell);
}
</style>
