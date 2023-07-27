<template>
  <div class="container-center-horizontal">
    <div class="docsmart-contact-page screen">
      <div class="frame-container-6">
        <div class="frame-2569-3">
          <div class="flex-col-101">
            <div class="logo-44" :style="{ 'background-image': 'url(' + logo + ')' }"></div>
            <div class="ellipse-95-4"></div>
          </div>
          <div class="flex-col-102">
            <div class="navbar-10 poppins-normal-white-16px">
              <div class="navbar-link-features-3">
                <span class="poppins-normal-white-16px">{{ spanText1 }}</span>
              </div>
              <div class="navbar-link-about-us-3">
                <span class="poppins-normal-white-16px">{{ spanText2 }}</span>
              </div>
              <div class="navbar-link-place-3">
                <span class="poppins-normal-white-16px">{{ spanText3 }}</span>
              </div>
              <div class="navbar-link-pricing-3">
                <span class="poppins-normal-white-16px">{{ spanText4 }}</span>
              </div>
              <div class="navbar-link-blog-3">
                <span class="poppins-normal-white-16px">{{ spanText5 }}</span>
              </div>
            </div>
            <div class="rectangle-6534-2"></div>
            <h1 class="title-70 poppins-semi-bold-white-80px">
              <span class="poppins-semi-bold-white-80px">{{ spanText6 }}</span>
            </h1>
            <p class="any-question-or-rema poppins-medium-cadet-blue-20px">
              <span class="poppins-medium-cadet-blue-20px">{{ spanText7 }}</span>
            </p>
          </div>
          <div class="flex-col-103">
            <div class="button-139">
              <div class="text-228 poppins-semi-bold-white-16px">
                <span class="poppins-semi-bold-white-16px">{{ spanText8 }}</span>
              </div>
            </div>
            <div class="ellipse-94-5"></div>
          </div>
        </div>
        <div class="frame-2614">
          <div class="frame-2620">
            <div class="frame-2618">
              <div class="contact-information poppins-semi-bold-ebony-32px">
                <span class="poppins-semi-bold-ebony-32px">{{ spanText9 }}</span>
              </div>
              <p class="fill-ou-the-form-and poppins-normal-comet-18px">
                <span class="poppins-normal-comet-18px">{{ spanText10 }}</span>
              </p>
            </div>
            <div class="frame-2619">
              <frame2615 :spanText="frame26151Props.spanText" :iconButtonProps="frame26151Props.iconButtonProps" />
              <frame2615 :spanText="frame26152Props.spanText" :iconButtonProps="frame26152Props.iconButtonProps" />
              <frame2615 :spanText="frame26153Props.spanText" :iconButtonProps="frame26153Props.iconButtonProps" />
            </div>
          </div>
          <div class="frame-2622">
            <div class="frame-2621">
              <div class="input-field-17">
                <div class="label-183 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText11 }}</span>
                </div>
                <div class="input-46">
                  <input
                    class="input-text-70 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder1"
                    :type="inputType1"
                    required
                  />
                </div>
              </div>
              <div class="input-field-17">
                <div class="label-183 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText12 }}</span>
                </div>
                <div class="input-46">
                  <input
                    class="input-text-70 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                    required
                  />
                </div>
              </div>
              <div class="input-field-17">
                <div class="label-183 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText13 }}</span>
                </div>
                <div class="input-46">
                  <input
                    class="input-text-70 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder3"
                    :type="inputType3"
                    required
                  />
                </div>
              </div>
              <div class="input-field-17">
                <div class="label-183 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText14 }}</span>
                </div>
                <div class="input-46">
                  <input
                    class="input-text-70 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder4"
                    :type="inputType4"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="button-140">
              <div class="text-229 poppins-semi-bold-white-16px">
                <span class="poppins-semi-bold-white-16px">{{ spanText15 }}</span>
              </div>
              <img class="chevron-right-4" :src="chevronRight" alt="Chevron Right" />
            </div>
          </div>
        </div>
      </div>
      <frame2610 :className="frame2610Props.className" />
    </div>
  </div>
</template>

<script>
import Frame2615 from "./Frame2615";
import Frame2610 from "./Frame2610";
export default {
  name: "DocSmartContactPage",
  components: {
    Frame2615,
    Frame2610,
  },
  props: [
    "logo",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "spanText11",
    "inputType1",
    "inputPlaceholder1",
    "spanText12",
    "inputType2",
    "inputPlaceholder2",
    "spanText13",
    "inputType3",
    "inputPlaceholder3",
    "spanText14",
    "inputType4",
    "inputPlaceholder4",
    "spanText15",
    "chevronRight",
    "frame26151Props",
    "frame26152Props",
    "frame26153Props",
    "frame2610Props",
  ],
};
</script>

<style>
.docsmart-contact-page {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 128px;
  height: 1968px;
  position: relative;
  width: 1920px;
}

.frame-container-6 {
  height: 1216px;
  position: relative;
  width: 1920px;
}

.frame-2569-3 {
  align-items: flex-start;
  background-color: var(--ebony);
  display: flex;
  height: 867px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 1920px;
}

.flex-col-101 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 464px;
  margin-left: -73px;
  margin-top: 5px;
  min-height: 792px;
  width: 257px;
}

.logo-44 {
  align-self: flex-end;
  background-size: 100% 100%;
  height: 104px;
  width: 120px;
}

.ellipse-95-4 {
  background-color: var(--tan);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  width: 224px;
}

.flex-col-102 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-left: 325px;
  margin-top: 80px;
  min-height: 367px;
  width: 1124px;
}

.navbar-10 {
  align-items: flex-start;
  display: flex;
  gap: 78px;
  height: 24px;
  min-width: 608px;
}

.navbar-link-features-3 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 70px;
  transition: all 0.2s ease;
}

.navbar-link-features-3:hover,
.navbar-link-about-us-3:hover,
.navbar-link-pricing-3:hover,
.navbar-link-blog-3:hover {
  transform: scale(1.1);
}

.navbar-link-about-us-3 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 71px;
  transition: all 0.2s ease;
}

.navbar-link-place-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 66px;
}

.navbar-link-pricing-3 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 54px;
  transition: all 0.2s ease;
}

.navbar-link-blog-3 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  transition: all 0.2s ease;
}

.rectangle-6534-2 {
  background-color: var(--caribbean-green);
  border-radius: 10px;
  height: 2px;
  margin-right: 217px;
  margin-top: 15px;
  width: 121px;
}

.title-70 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 104px;
  margin-top: 150px;
  text-align: center;
  width: 901px;
}

.any-question-or-rema {
  align-self: center;
  letter-spacing: 0;
  line-height: 200px;
  margin-bottom: -160px;
  margin-right: 223px;
  margin-top: 32px;
  min-height: 40px;
  min-width: 513px;
  text-align: center;
  white-space: nowrap;
}

.flex-col-103 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 544px;
  margin-bottom: -13px;
  margin-left: 80px;
  min-height: 808px;
  width: 240px;
}

.button-139 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 40px;
  min-width: 112px;
  padding: 7px 34px;
  transition: all 0.15s ease;
}

.button-139:hover,
.button-140:hover {
  transform: translate(0, -5px);
}

.text-228 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 44px;
  text-align: center;
}

.ellipse-94-5 {
  align-self: flex-end;
  background-color: var(--chetwode-blue);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  width: 224px;
}

.frame-2614 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 64px;
  display: flex;
  gap: 175px;
  height: 672px;
  left: 360px;
  overflow: hidden;
  padding: 0 128px;
  position: absolute;
  top: 544px;
  width: 1200px;
}

.frame-2620 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin-top: 80px;
  min-height: 345px;
  width: 377px;
}

.frame-2618 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: -75px;
  min-height: 129px;
  width: 377px;
}

.contact-information {
  letter-spacing: 0;
  line-height: 140px;
  margin-top: -1px;
  min-height: 45px;
  white-space: nowrap;
}

.fill-ou-the-form-and {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 64px;
}

.frame-2619 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 160px;
  position: relative;
  width: 336px;
}

.frame-2622 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 56px;
  min-height: 512px;
  width: 384px;
}

.frame-2621 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 48px;
  min-height: 408px;
  width: 384px;
}

.input-field-17 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 384px;
}

.label-183 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 384px;
}

.input-46 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 384px;
}

.input-text-70 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 360px;
}

.input-text-70::placeholder {
  color: #0d0d1d99;
}

.button-140 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 48px;
  min-width: 384px;
  padding: 11px 155px;
  transition: all 0.15s ease;
}

.text-229 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 42px;
  text-align: center;
}

.chevron-right-4 {
  align-self: center;
  height: 24px;
  width: 24px;
}
</style>
