<template>
  <div class="container-center-horizontal">
    <div class="create-new-password screen">
      <frame2674 />
      <div class="flex-col-2">
        <div class="button-56">
          <img class="chevron-left" :src="chevronLeft" alt="Chevron Left" />
          <div class="text-66 poppins-medium-ebony-14px">
            <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
          </div>
        </div>
        <h1 class="page-header-3 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText2 }}</span>
        </h1>
        <div class="enter-your-new-password poppins-medium-comet-16px">
          <span class="poppins-medium-comet-16px">{{ spanText3 }}</span>
        </div>
        <div class="input-5">
          <input
            class="input-text-6 poppins-normal-ebony-14px"
            name="inputtext"
            :placeholder="inputPlaceholder1"
            :type="inputType1"
            required
          />
        </div>
        <div class="input-6">
          <input
            class="input-text-6 poppins-normal-ebony-14px"
            name="inputtext"
            :placeholder="inputPlaceholder2"
            :type="inputType2"
            required
          />
        </div>
        <div class="button-57">
          <div class="text-67 poppins-semi-bold-white-16px">
            <span class="poppins-semi-bold-white-16px">{{ spanText4 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame2674 from "./Frame2674";
export default {
  name: "CreateNewPassword",
  components: {
    Frame2674,
  },
  props: [
    "chevronLeft",
    "spanText1",
    "spanText2",
    "spanText3",
    "inputType1",
    "inputPlaceholder1",
    "inputType2",
    "inputPlaceholder2",
    "spanText4",
  ],
};
</script>

<style>
.create-new-password {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  gap: 168px;
  height: 984px;
  position: relative;
  width: 1440px;
}

.flex-col-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 163px;
  min-height: 453px;
  width: 400px;
}

.button-56 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 37px;
  min-width: 131px;
  padding: 7px 12px;
  transition: all 0.15s ease;
}

.button-56:hover,
.button-57:hover {
  transform: translate(0, -5px);
}

.chevron-left {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-66 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 79px;
  text-align: center;
}

.page-header-3 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: 95px;
  white-space: nowrap;
}

.enter-your-new-password {
  letter-spacing: 0;
  line-height: 200px;
  margin-bottom: -168px;
  margin-top: 16px;
  min-height: 32px;
  white-space: nowrap;
}

.input-5 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  margin-top: 65px;
  overflow: hidden;
  padding: 7px 12px;
  width: 400px;
}

.input-text-6 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 376px;
}

.input-text-6::placeholder {
  color: #0d0d1d99;
}

.input-6 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  margin-top: 16px;
  overflow: hidden;
  padding: 7px 12px;
  width: 400px;
}

.button-57 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 48px;
  margin-top: 24px;
  min-width: 400px;
  padding: 11px 181.5px;
  transition: all 0.15s ease;
}

.text-67 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 37px;
  text-align: center;
}
</style>
