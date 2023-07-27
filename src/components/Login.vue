<template>
  <div class="container-center-horizontal">
    <div class="login screen">
      <frame2674 />
      <div class="flex-col-4">
        <h1 class="page-header-5 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <p class="welcome-back-please-enter-your-details poppins-medium-comet-16px">
          <span class="poppins-medium-comet-16px">{{ spanText2 }}</span>
        </p>
        <div class="input-9">
          <input
            class="input-text-8 poppins-normal-ebony-14px"
            name="inputtext"
            :placeholder="inputPlaceholder1"
            :type="inputType1"
            required
          />
        </div>
        <div class="input-10">
          <input
            class="input-text-8 poppins-normal-ebony-14px"
            name="inputtext"
            :placeholder="inputPlaceholder2"
            :type="inputType2"
            required
          />
        </div>
        <div class="button-60">
          <div class="text-70 poppins-medium-caribbean-green-14px">
            <span class="poppins-medium-caribbean-green-14px">{{ spanText3 }}</span>
          </div>
        </div>
        <div class="button-61">
          <div class="text-71 poppins-semi-bold-white-16px">
            <span class="poppins-semi-bold-white-16px">{{ spanText4 }}</span>
          </div>
        </div>
        <div class="frame-2675-1">
          <div class="dont-have-an-account poppins-medium-comet-14px">
            <span class="poppins-medium-comet-14px">{{ spanText5 }}</span>
          </div>
          <div class="button-62">
            <div class="text-72 poppins-medium-caribbean-green-14px">
              <span class="poppins-medium-caribbean-green-14px">{{ spanText6 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame2674 from "./Frame2674";
export default {
  name: "Login",
  components: {
    Frame2674,
  },
  props: [
    "spanText1",
    "spanText2",
    "inputType1",
    "inputPlaceholder1",
    "inputType2",
    "inputPlaceholder2",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
  ],
};
</script>

<style>
.login {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  gap: 168px;
  height: 984px;
  position: relative;
  width: 1440px;
}

.flex-col-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 223px;
  min-height: 442px;
  width: 400px;
}

.page-header-5 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.welcome-back-please-enter-your-details {
  letter-spacing: 0;
  line-height: 200px;
  margin-bottom: -168px;
  margin-top: 16px;
  min-height: 32px;
  white-space: nowrap;
}

.input-9 {
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

.input-text-8 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 376px;
}

.input-text-8::placeholder {
  color: #0d0d1d99;
}

.input-10 {
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

.button-60 {
  align-items: flex-start;
  align-self: flex-end;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 21px;
  margin-top: 16px;
  min-width: 126px;
  transition: all 0.15s ease;
}

.button-60:hover,
.button-62:hover {
  transform: scale(1.1);
}

.text-70 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 126px;
  text-align: center;
}

.button-61 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 48px;
  margin-top: 56px;
  min-width: 400px;
  padding: 11px 178px;
  transition: all 0.15s ease;
}

.button-61:hover {
  transform: translate(0, -5px);
}

.text-71 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 44px;
  text-align: center;
}

.frame-2675-1 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 8px;
  height: 28px;
  margin-top: 24px;
  min-width: 230px;
}

.dont-have-an-account {
  letter-spacing: 0;
  line-height: 200px;
  margin-top: -1px;
  min-height: 28px;
  min-width: 168px;
  white-space: nowrap;
}

.button-62 {
  align-items: flex-start;
  align-self: center;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 21px;
  min-width: 54px;
  transition: all 0.15s ease;
}

.text-72 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 54px;
  text-align: center;
}
</style>
