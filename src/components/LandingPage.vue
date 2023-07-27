<template>
  <div class="container-center-horizontal">
    <div class="landing-page screen">
      <div class="frame-2569-6">
        <div class="flex-col-114">
          <div class="logo-47" :style="{ 'background-image': 'url(' + logo + ')' }"></div>
          <div class="ellipse-95-7"></div>
        </div>
        <div class="flex-col-115">
          <div class="navbar-13 poppins-normal-white-16px">
            <div class="navbar-link-features-6">
              <span class="poppins-normal-white-16px">{{ spanText1 }}</span>
            </div>
            <div class="navbar-link-about-us-6">
              <span class="poppins-normal-white-16px">{{ spanText2 }}</span>
            </div>
            <div class="navbar-link-place-6">
              <span class="poppins-normal-white-16px">{{ spanText3 }}</span>
            </div>
            <div class="navbar-link-pricing-6">
              <span class="poppins-normal-white-16px">{{ spanText4 }}</span>
            </div>
            <div class="navbar-link-blog-6">
              <span class="poppins-normal-white-16px">{{ spanText5 }}</span>
            </div>
          </div>
          <h1 class="title-73 poppins-semi-bold-white-80px">
            <span class="poppins-semi-bold-white-80px">{{ spanText6 }}</span>
          </h1>
          <p class="grundarna-av-imexta poppins-medium-cadet-blue-20px">
            <span class="poppins-medium-cadet-blue-20px">{{ spanText7 }}</span>
          </p>
          <div class="frame-2580-2">
            <frame25786 :spanText="frame257861Props.spanText" />
            <frame25786 :spanText="frame257862Props.spanText" />
            <frame25786 :spanText="frame257863Props.spanText" />
            <frame25786 :spanText="frame257864Props.spanText" />
          </div>
        </div>
        <div class="flex-col-116">
          <div class="button-146">
            <div class="text-235 poppins-semi-bold-white-16px">
              <span class="poppins-semi-bold-white-16px">{{ spanText8 }}</span>
            </div>
          </div>
          <div class="ellipse-94-8"></div>
        </div>
      </div>
      <img
        class="skarmavbild-2023-03-13-kl-2126-1"
        :src="skarmavbild20230313Kl21261"
        alt="Skarmavbild 2023-03-13 kl. 21.26 1"
      />
      <div class="frame-2633-1">
        <div class="smfretagarnas-bsta-vn poppins-semi-bold-green-32px">
          <span class="poppins-semi-bold-green-32px">{{ spanText9 }}</span>
        </div>
        <p class="fortnox-r-ett-av-sv poppins-medium-comet-20px">
          <span class="poppins-medium-comet-20px">{{ spanText10 }}</span>
        </p>
      </div>
      <div class="frame-2580-3">
        <frame25787 :spanText="frame257871Props.spanText" />
        <frame25787 :spanText="frame257872Props.spanText" />
        <frame25787 :spanText="frame257873Props.spanText" />
        <frame25787 :spanText="frame257874Props.spanText" />
      </div>
      <p class="s-hr-gr-det-till poppins-semi-bold-ebony-56px">
        <span class="poppins-semi-bold-ebony-56px">{{ spanText11 }}</span>
      </p>
      <div class="frame-2573-5">
        <frame2571 />
        <frame2572 :className="frame2572Props.className" :frame2575Props="frame2572Props.frame2575Props" />
        <div class="frame-2573-6">
          <frame25743 :children="frame25743Props.children" />
          <frame2575
            :spanText1="frame2575Props.spanText1"
            :spanText2="frame2575Props.spanText2"
            :className="frame2575Props.className"
          />
        </div>
      </div>
      <frame2610 :className="frame2610Props.className" />
    </div>
  </div>
</template>

<script>
import Frame25786 from "./Frame25786";
import Frame25787 from "./Frame25787";
import Frame2571 from "./Frame2571";
import Frame2572 from "./Frame2572";
import Frame25743 from "./Frame25743";
import Frame2575 from "./Frame2575";
import Frame2610 from "./Frame2610";
export default {
  name: "LandingPage",
  components: {
    Frame25786,
    Frame25787,
    Frame2571,
    Frame2572,
    Frame25743,
    Frame2575,
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
    "skarmavbild20230313Kl21261",
    "spanText9",
    "spanText10",
    "spanText11",
    "frame257861Props",
    "frame257862Props",
    "frame257863Props",
    "frame257864Props",
    "frame257871Props",
    "frame257872Props",
    "frame257873Props",
    "frame257874Props",
    "frame2572Props",
    "frame25743Props",
    "frame2575Props",
    "frame2610Props",
  ],
};
</script>

<style>
.landing-page {
  align-items: center;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 3705px;
  position: relative;
  width: 1920px;
}

.frame-2569-6 {
  align-items: flex-start;
  background-color: #06140b;
  display: flex;
  height: 1228px;
  overflow: hidden;
  padding: 40px 0;
  width: 1920px;
}

.flex-col-114 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 800px;
  margin-left: -112px;
  min-height: 1128px;
  width: 296px;
}

.logo-47 {
  align-self: flex-end;
  background-size: 100% 100%;
  height: 104px;
  width: 120px;
}

.ellipse-95-7 {
  background-color: var(--tan);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  width: 224px;
}

.flex-col-115 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 243px;
  margin-top: 40px;
  min-height: 812px;
  width: 1206px;
}

.navbar-13 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 78px;
  height: 24px;
  min-width: 608px;
}

.navbar-link-features-6 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 70px;
  transition: all 0.2s ease;
}

.navbar-link-features-6:hover,
.navbar-link-about-us-6:hover,
.navbar-link-place-6:hover,
.navbar-link-pricing-6:hover,
.navbar-link-blog-6:hover,
.frame-2573-6:hover {
  transform: scale(1.1);
}

.navbar-link-about-us-6 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 71px;
  transition: all 0.2s ease;
}

.navbar-link-place-6 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 66px;
  transition: all 0.2s ease;
}

.navbar-link-pricing-6 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 54px;
  transition: all 0.2s ease;
}

.navbar-link-blog-6 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  transition: all 0.2s ease;
}

.title-73 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 104px;
  margin-top: 167px;
  min-width: 1064px;
  text-align: center;
  white-space: nowrap;
}

.grundarna-av-imexta {
  letter-spacing: 0;
  line-height: 200px;
  margin-bottom: -80px;
  margin-right: 142px;
  margin-top: 64px;
  min-height: 120px;
  text-align: center;
  width: 772px;
}

.frame-2580-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-right: 140px;
  margin-top: 105px;
  min-height: 228px;
  position: relative;
  width: 688px;
}

.flex-col-116 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 544px;
  margin-left: 80px;
  margin-top: 32px;
  min-height: 808px;
  width: 240px;
}

.button-146 {
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

.button-146:hover {
  transform: translate(0, -5px);
}

.text-235 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 44px;
  text-align: center;
}

.ellipse-94-8 {
  align-self: flex-end;
  background-color: #8cd493;
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  width: 224px;
}

.skarmavbild-2023-03-13-kl-2126-1 {
  align-self: flex-start;
  height: 208px;
  margin-left: 240px;
  margin-top: 112px;
  width: 563px;
}

.frame-2633-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: -47px;
  margin-right: 224px;
  margin-top: 112px;
  min-height: 173px;
  width: 1216px;
}

.smfretagarnas-bsta-vn {
  letter-spacing: 0;
  line-height: 140px;
  margin-top: -1px;
  min-height: 45px;
  width: 1216px;
}

.fortnox-r-ett-av-sv {
  letter-spacing: 0;
  line-height: 200px;
  margin-bottom: -120px;
  min-height: 80px;
  width: 1216px;
}

.frame-2580-3 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-left: 240px;
  margin-top: 72px;
  min-height: 228px;
  position: relative;
  width: 688px;
}

.s-hr-gr-det-till {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 1px;
  margin-top: 239px;
  min-height: 84px;
  min-width: 485px;
  text-align: center;
}

.frame-2573-5 {
  align-items: flex-start;
  display: flex;
  gap: 48px;
  margin-top: 81px;
  min-width: 1600px;
  position: relative;
}

.frame-2573-6 {
  align-items: flex-start;
  background-color: var(--whisper);
  border-radius: 48px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 48px;
  height: 352px;
  overflow: hidden;
  padding: 36px 32px;
  position: relative;
  transition: all 0.2s ease;
  width: 501px;
}
</style>
