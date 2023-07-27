<template>
  <div class="container-center-horizontal">
    <div class="password-update-u45-confirmation screen">
      <frame2674 />
      <div class="flex-col">
        <img class="apply-2" :src="apply" alt="Apply" />
        <div class="page-header-1 poppins-medium-ebony-20px">
          <span class="poppins-medium-ebony-20px">{{ spanText1 }}</span>
        </div>
        <div class="button-53">
          <div class="text-54 poppins-semi-bold-white-16px">
            <span class="poppins-semi-bold-white-16px">{{ spanText2 }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame2674 from "./Frame2674";
export default {
  name: "PasswordUpdateConfirmation",
  components: {
    Frame2674,
  },
  props: ["apply", "spanText1", "spanText2"],
};
</script>

<style>
.password-update-u45-confirmation {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  gap: 168px;
  height: 984px;
  position: relative;
  width: 1440px;
}

.flex-col {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 304px;
  min-height: 240px;
  width: 400px;
}

.apply-2 {
  height: 80px;
  width: 80px;
}

.page-header-1 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: 23px;
  min-width: 318px;
  text-align: center;
  white-space: nowrap;
}

.button-53 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 48px;
  margin-top: 49px;
  min-width: 400px;
  padding: 11px 178px;
  transition: all 0.15s ease;
}

.button-53:hover {
  transform: translate(0, -5px);
}

.text-54 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 44px;
  text-align: center;
}
</style>
