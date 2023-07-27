<template>
  <div class="container-center-horizontal">
    <div class="blog-overview screen">
      <div class="frame-container-7">
        <div class="frame-2569-4">
          <div class="flex-col-104">
            <div class="logo-45" :style="{ 'background-image': 'url(' + logo + ')' }"></div>
            <div class="ellipse-95-5"></div>
          </div>
          <div class="flex-col-105">
            <div class="navbar-11 poppins-normal-white-16px">
              <div class="navbar-link-features-4">
                <span class="poppins-normal-white-16px">{{ spanText1 }}</span>
              </div>
              <div class="navbar-link-about-us-4">
                <span class="poppins-normal-white-16px">{{ spanText2 }}</span>
              </div>
              <div class="navbar-link-place-4">
                <span class="poppins-normal-white-16px">{{ spanText3 }}</span>
              </div>
              <div class="navbar-link-pricing-4">
                <span class="poppins-normal-white-16px">{{ spanText4 }}</span>
              </div>
              <div class="navbar-link-blog-4">
                <span class="poppins-normal-white-16px">{{ spanText5 }}</span>
              </div>
            </div>
            <div class="rectangle-6534-3"></div>
          </div>
          <div class="flex-col-106">
            <div class="button-141">
              <div class="text-230 poppins-semi-bold-white-16px">
                <span class="poppins-semi-bold-white-16px">{{ spanText6 }}</span>
              </div>
            </div>
            <div class="ellipse-94-6"></div>
          </div>
        </div>
        <div class="frame-2614-1">
          <div class="flex-col-107">
            <h1 class="title-71 poppins-semi-bold-ebony-48px">
              <span class="poppins-semi-bold-ebony-48px">{{ spanText7 }}</span>
            </h1>
            <p class="lorem-ipsum-dolor-si-7 poppins-medium-comet-20px">
              <span class="poppins-medium-comet-20px">{{ spanText8 }}</span>
            </p>
          </div>
          <div class="flex-row-59">
            <img class="unsplashhpj-sk-u2-uysu" :src="unsplashHpjsku2Uysu" alt="unsplash:hpjSkU2UYSU" />
            <div class="flex-col-108">
              <frame2625 />
              <button7 />
            </div>
          </div>
        </div>
      </div>
      <div class="flex-row-60">
        <div class="flex-col-109">
          <div class="topics poppins-semi-bold-ebony-32px">
            <span class="poppins-semi-bold-ebony-32px">{{ spanText9 }}</span>
          </div>
          <div class="frame-2626">
            <div class="all-4 poppins-medium-manatee-20px">
              <span class="poppins-medium-manatee-20px">{{ spanText10 }}</span>
            </div>
            <div class="frame-2626-item poppins-medium-manatee-20px">
              <span class="poppins-medium-manatee-20px">{{ spanText11 }}</span>
            </div>
            <div class="frame-2626-item poppins-medium-manatee-20px">
              <span class="poppins-medium-manatee-20px">{{ spanText12 }}</span>
            </div>
            <div class="frame-2626-item poppins-medium-manatee-20px">
              <span class="poppins-medium-manatee-20px">{{ spanText13 }}</span>
            </div>
            <div class="frame-2626-item poppins-medium-manatee-20px">
              <span class="poppins-medium-manatee-20px">{{ spanText14 }}</span>
            </div>
            <div class="frame-2626-item poppins-medium-manatee-20px">
              <span class="poppins-medium-manatee-20px">{{ spanText15 }}</span>
            </div>
            <div class="frame-2626-item poppins-medium-manatee-20px">
              <span class="poppins-medium-manatee-20px">{{ spanText16 }}</span>
            </div>
            <div class="frame-2626-item poppins-semi-bold-caribbean-green-20px">
              <span class="poppins-semi-bold-caribbean-green-20px">{{ spanText17 }}</span>
            </div>
            <div class="frame-2626-item poppins-medium-manatee-20px">
              <span class="poppins-medium-manatee-20px">{{ spanText18 }}</span>
            </div>
            <div class="frame-2626-item poppins-medium-manatee-20px">
              <span class="poppins-medium-manatee-20px">{{ spanText19 }}</span>
            </div>
          </div>
        </div>
        <div class="frame-container-8">
          <frame2627 />
          <frame2627 />
        </div>
      </div>
      <div class="frame-container-9">
        <frame2627 :className="frame26271Props.className" />
        <frame2627 :className="frame26272Props.className" />
        <frame2627 :className="frame26273Props.className" />
        <frame2610 :className="frame2610Props.className" />
      </div>
    </div>
  </div>
</template>

<script>
import Frame2625 from "./Frame2625";
import Button7 from "./Button7";
import Frame2627 from "./Frame2627";
import Frame2610 from "./Frame2610";
export default {
  name: "BlogOverview",
  components: {
    Frame2625,
    Button7,
    Frame2627,
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
    "unsplashHpjsku2Uysu",
    "spanText9",
    "spanText10",
    "spanText11",
    "spanText12",
    "spanText13",
    "spanText14",
    "spanText15",
    "spanText16",
    "spanText17",
    "spanText18",
    "spanText19",
    "frame26271Props",
    "frame26272Props",
    "frame26273Props",
    "frame2610Props",
  ],
};
</script>

<style>
.blog-overview {
  align-items: center;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 3761px;
  width: 1920px;
}

.frame-container-7 {
  height: 1041px;
  position: relative;
  width: 1920px;
}

.frame-2569-4 {
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

.flex-col-104 {
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

.logo-45 {
  align-self: flex-end;
  background-size: 100% 100%;
  height: 104px;
  width: 120px;
}

.ellipse-95-5 {
  background-color: var(--tan);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  width: 224px;
}

.flex-col-105 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 841px;
  margin-top: 80px;
  min-height: 41px;
  width: 630px;
}

.navbar-11 {
  align-items: flex-start;
  display: flex;
  gap: 78px;
  height: 24px;
  min-width: 608px;
}

.navbar-link-features-4 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 70px;
  transition: all 0.2s ease;
}

.navbar-link-features-4:hover,
.navbar-link-about-us-4:hover,
.navbar-link-place-4:hover,
.navbar-link-pricing-4:hover {
  transform: scale(1.1);
}

.navbar-link-about-us-4 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 71px;
  transition: all 0.2s ease;
}

.navbar-link-place-4 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 66px;
  transition: all 0.2s ease;
}

.navbar-link-pricing-4 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 54px;
  transition: all 0.2s ease;
}

.navbar-link-blog-4 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
}

.rectangle-6534-3 {
  align-self: flex-end;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  height: 2px;
  width: 79px;
}

.flex-col-106 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 544px;
  margin-bottom: -13px;
  margin-left: 58px;
  min-height: 808px;
  width: 240px;
}

.button-141 {
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

.button-141:hover {
  transform: translate(0, -5px);
}

.text-230 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 44px;
  text-align: center;
}

.ellipse-94-6 {
  align-self: flex-end;
  background-color: var(--chetwode-blue);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  width: 224px;
}

.frame-2614-1 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 64px;
  display: flex;
  flex-direction: column;
  gap: 74px;
  height: 800px;
  left: 160px;
  overflow: hidden;
  padding: 68px 80px;
  position: absolute;
  top: 241px;
  width: 1600px;
}

.flex-col-107 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: -41px;
  margin-left: 16px;
  margin-top: 11px;
  min-height: 179px;
  width: 784px;
}

.title-71 {
  letter-spacing: 0;
  line-height: 140px;
  min-height: 67px;
  white-space: nowrap;
}

.lorem-ipsum-dolor-si-7 {
  letter-spacing: 0;
  line-height: 200px;
  margin-bottom: -120px;
  min-height: 80px;
  width: 784px;
}

.flex-row-59 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 64px;
  min-width: 1424px;
}

.unsplashhpj-sk-u2-uysu {
  height: 400px;
  width: 576px;
}

.flex-col-108 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 83px;
  min-height: 400px;
  position: relative;
  width: 784px;
}

.flex-row-60 {
  align-items: flex-start;
  display: flex;
  gap: 167px;
  height: 725px;
  margin-top: 79px;
  min-width: 1600px;
}

.flex-col-109 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: -46px;
  min-height: 610px;
  width: 201px;
}

.topics {
  letter-spacing: 0;
  line-height: 140px;
  min-height: 45px;
  white-space: nowrap;
}

.frame-2626 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 516px;
  width: 201px;
}

.all-4 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 30px;
}

.frame-2626-item {
  letter-spacing: 0;
  line-height: normal;
  min-height: 30px;
}

.frame-container-8 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 724px;
  position: relative;
  width: 1232px;
}

.frame-container-9 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  min-height: 1896px;
  position: relative;
  width: 1920px;
}
</style>
