<template>
  <div class="container-center-horizontal">
    <div class="sign-up screen">
      <frame2674 />
      <div class="flex-col-1">
        <h1 class="page-header-2 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <p class="welcome-to-billeasy poppins-medium-comet-16px">
          <span class="poppins-medium-comet-16px">{{ spanText2 }}</span>
        </p>
        <div class="label-19 poppins-semi-bold-comet-12px">
          <span class="poppins-semi-bold-comet-12px">{{ spanText3 }}</span>
        </div>
        <div class="input-container">
          <div class="input-1">
            <input
              class="input-text-2 poppins-normal-ebony-14px"
              name="inputtext"
              :placeholder="inputPlaceholder1"
              :type="inputType1"
              required
            />
          </div>
          <div class="input-1">
            <input
              class="input-text-2 poppins-normal-ebony-14px"
              name="inputtext"
              :placeholder="inputPlaceholder2"
              :type="inputType2"
              required
            />
          </div>
          <div class="input-1">
            <input
              class="input-text-2 poppins-normal-ebony-14px"
              name="inputtext"
              :placeholder="inputPlaceholder3"
              :type="inputType3"
              required
            />
          </div>
        </div>
        <div class="input-3">
          <input
            class="input-text-2 poppins-normal-ebony-14px"
            name="inputtext"
            :placeholder="inputPlaceholder4"
            :type="inputType4"
            required
          />
        </div>
        <div class="label-18 poppins-semi-bold-comet-12px">
          <span class="poppins-semi-bold-comet-12px">{{ spanText4 }}</span>
        </div>
        <div class="input-container">
          <div class="input-1">
            <input
              class="input-text-2 poppins-normal-ebony-14px"
              name="inputtext"
              :placeholder="inputPlaceholder5"
              :type="inputType5"
              required
            />
          </div>
          <div class="input-1">
            <input
              class="input-text-2 poppins-normal-ebony-14px"
              name="inputtext"
              :placeholder="inputPlaceholder6"
              :type="inputType6"
              required
            />
          </div>
          <div class="input-1">
            <input
              class="input-text-2 poppins-normal-ebony-14px"
              name="inputtext"
              :placeholder="inputPlaceholder7"
              :type="inputType7"
            />
          </div>
        </div>
        <div class="flex-row-1">
          <div class="input-1">
            <input
              class="input-text-2 poppins-normal-ebony-14px"
              name="inputtext"
              :placeholder="inputPlaceholder8"
              :type="inputType8"
              required
            />
          </div>
          <div class="input-1">
            <input
              class="input-text-2 poppins-normal-ebony-14px"
              name="inputtext"
              :placeholder="inputPlaceholder9"
              :type="inputType9"
              required
            />
          </div>
          <dropdown52 :spanText="dropdown521Props.spanText" />
        </div>
        <div class="input-4">
          <input
            class="input-text-3 poppins-normal-ebony-14px"
            name="inputtext"
            :placeholder="inputPlaceholder10"
            :type="inputType10"
            required
          />
        </div>
        <div class="input-container-1">
          <div class="input-2">
            <input
              class="input-text-4 poppins-normal-ebony-14px"
              name="inputtext"
              :placeholder="inputPlaceholder11"
              :type="inputType11"
              required
            />
          </div>
          <div class="input-2">
            <input
              class="input-text-5 poppins-normal-ebony-14px"
              name="inputtext"
              :placeholder="inputPlaceholder12"
              :type="inputType12"
              required
            />
          </div>
        </div>
        <div class="label-18 poppins-semi-bold-comet-12px">
          <span class="poppins-semi-bold-comet-12px">{{ spanText5 }}</span>
        </div>
        <div class="dropdown-container">
          <dropdown52 :spanText="dropdown522Props.spanText" />
          <dropdown52 :spanText="dropdown523Props.spanText" />
        </div>
        <div class="button-54">
          <div class="text-55 poppins-semi-bold-white-16px">
            <span class="poppins-semi-bold-white-16px">{{ spanText6 }}</span>
          </div>
        </div>
        <div class="frame-2675">
          <div class="already-have-an-account poppins-medium-comet-14px">
            <span class="poppins-medium-comet-14px">{{ spanText7 }}</span>
          </div>
          <div class="button-55">
            <div class="text-56 poppins-medium-caribbean-green-14px">
              <span class="poppins-medium-caribbean-green-14px">{{ spanText8 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame2674 from "./Frame2674";
import Dropdown52 from "./Dropdown52";
export default {
  name: "SignUp",
  components: {
    Frame2674,
    Dropdown52,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "inputType1",
    "inputPlaceholder1",
    "inputType2",
    "inputPlaceholder2",
    "inputType3",
    "inputPlaceholder3",
    "inputType4",
    "inputPlaceholder4",
    "spanText4",
    "inputType5",
    "inputPlaceholder5",
    "inputType6",
    "inputPlaceholder6",
    "inputType7",
    "inputPlaceholder7",
    "inputType8",
    "inputPlaceholder8",
    "inputType9",
    "inputPlaceholder9",
    "inputType10",
    "inputPlaceholder10",
    "inputType11",
    "inputPlaceholder11",
    "inputType12",
    "inputPlaceholder12",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "dropdown521Props",
    "dropdown522Props",
    "dropdown523Props",
  ],
};
</script>

<style>
.sign-up {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  gap: 64px;
  height: 984px;
  position: relative;
  width: 1440px;
}

.flex-col-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 63px;
  min-height: 857px;
  width: 608px;
}

.page-header-2 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.welcome-to-billeasy {
  letter-spacing: 0;
  line-height: 200px;
  margin-bottom: -168px;
  margin-top: 16px;
  min-height: 32px;
  white-space: nowrap;
}

.label-19 {
  letter-spacing: 1.44px;
  line-height: 24px;
  margin-top: 32px;
  white-space: nowrap;
}

.input-container {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  margin-top: 25px;
  min-width: 608px;
}

.input-1 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 192px;
}

.input-text-2 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 168px;
}

.input-text-2::placeholder,
.input-text-3::placeholder,
.input-text-4::placeholder,
.input-text-5::placeholder {
  color: #0d0d1d99;
}

.input-3 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  margin-top: 16px;
  overflow: hidden;
  padding: 7px 12px;
  width: 192px;
}

.label-18 {
  letter-spacing: 1.44px;
  line-height: 24px;
  margin-top: 47px;
  white-space: nowrap;
}

.flex-row-1 {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  margin-top: 16px;
  min-width: 608px;
  position: relative;
}

.input-4 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  margin-top: 16px;
  overflow: hidden;
  padding: 7px 12px;
  width: 608px;
}

.input-text-3 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 584px;
}

.input-container-1 {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  margin-top: 16px;
  min-width: 608px;
}

.input-2 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 296px;
}

.input-text-4 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 272px;
}

.input-text-5 {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  transition: all 0.15s ease;
  width: 272px;
}

.input-text-5:hover,
.button-54:hover {
  transform: translate(0, -5px);
}

.dropdown-container {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  height: 40px;
  margin-top: 25px;
  min-width: 400px;
  position: relative;
}

.button-54 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 48px;
  margin-top: 52px;
  min-width: 400px;
  padding: 11px 153.5px;
  transition: all 0.15s ease;
}

.text-55 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 93px;
  text-align: center;
}

.frame-2675 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  height: 28px;
  margin-top: 24px;
  min-width: 232px;
}

.already-have-an-account {
  letter-spacing: 0;
  line-height: 200px;
  margin-top: -1px;
  min-height: 28px;
  min-width: 186px;
  white-space: nowrap;
}

.button-55 {
  align-items: flex-start;
  align-self: center;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 21px;
  min-width: 38px;
  transition: all 0.15s ease;
}

.button-55:hover {
  transform: scale(1.1);
}

.text-56 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 38px;
  text-align: center;
}
</style>
