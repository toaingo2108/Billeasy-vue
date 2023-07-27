<template>
  <div class="container-center-horizontal">
    <div class="feature-details screen">
      <div class="frame-2569-1">
        <div class="flex-col-95">
          <div class="logo-42" :style="{ 'background-image': 'url(' + logo + ')' }"></div>
          <div class="ellipse-95-2"></div>
        </div>
        <div class="flex-col-96">
          <div class="navbar-8 poppins-normal-white-16px">
            <div class="navbar-link-features-1">
              <span class="poppins-normal-white-16px">{{ spanText1 }}</span>
            </div>
            <div class="navbar-link-about-us-1">
              <span class="poppins-normal-white-16px">{{ spanText2 }}</span>
            </div>
            <div class="navbar-link-place-1">
              <span class="poppins-normal-white-16px">{{ spanText3 }}</span>
            </div>
            <div class="navbar-link-pricing-1">
              <span class="poppins-normal-white-16px">{{ spanText4 }}</span>
            </div>
            <div class="navbar-link-blog-1">
              <span class="poppins-normal-white-16px">{{ spanText5 }}</span>
            </div>
          </div>
          <div class="rectangle-6534"></div>
          <h1 class="title-68 poppins-semi-bold-white-80px">
            <span class="poppins-semi-bold-white-80px">{{ spanText6 }}</span>
          </h1>
          <p class="lorem-ipsum-dolor-si-6 poppins-medium-cadet-blue-20px">
            <span class="poppins-medium-cadet-blue-20px">{{ spanText7 }}</span>
          </p>
        </div>
        <div class="flex-col-97">
          <div class="button-136">
            <div class="text-225 poppins-semi-bold-white-16px">
              <span class="poppins-semi-bold-white-16px">{{ spanText8 }}</span>
            </div>
          </div>
          <div class="ellipse-94-3"></div>
        </div>
      </div>
      <div class="overlap-group2-1">
        <div class="overlap-group-19">
          <div class="ellipse-99-1"></div>
          <div class="ellipse-100-2"></div>
          <div class="ellipse-101-2"></div>
          <img class="home-2-2" :src="home2" alt="Home 2" /><img class="home-5-1" :src="home5" alt="Home 5" /><img
            class="home-3-1"
            :src="home3"
            alt="Home 3"
          /><img class="home-1-3" :src="home1" alt="Home 1" /><img class="home-7-1" :src="home7" alt="Home 7" /><img
            class="home-4-1"
            :src="home4"
            alt="Home 4"
          /><frame2576
            :spanText1="frame25761Props.spanText1"
            :spanText2="frame25761Props.spanText2"
            :className="frame25761Props.className"
            :frame25744Props="frame25761Props.frame25744Props"
          />
          <frame2576
            :spanText1="frame25762Props.spanText1"
            :spanText2="frame25762Props.spanText2"
            :className="frame25762Props.className"
            :frame25744Props="frame25762Props.frame25744Props"
          />
        </div>
        <frame2576
          :spanText1="frame25763Props.spanText1"
          :spanText2="frame25763Props.spanText2"
          :className="frame25763Props.className"
          :frame25744Props="frame25763Props.frame25744Props"
        />
      </div>
      <div class="overlap-group1-8">
        <div class="ellipse-103"></div>
        <div class="ellipse-102-1"></div>
        <img class="home-6-1" :src="home6" alt="Home 6" /><frame2610 :className="frame2610Props.className" />
        <img class="home-8-1" :src="home8" alt="Home 8" /><frame2576
          :spanText1="frame25764Props.spanText1"
          :spanText2="frame25764Props.spanText2"
          :className="frame25764Props.className"
          :frame25744Props="frame25764Props.frame25744Props"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Frame2576 from "./Frame2576";
import Frame2610 from "./Frame2610";
export default {
  name: "FeatureDetails",
  components: {
    Frame2576,
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
    "home2",
    "home5",
    "home3",
    "home1",
    "home7",
    "home4",
    "home6",
    "home8",
    "frame25761Props",
    "frame25762Props",
    "frame25763Props",
    "frame2610Props",
    "frame25764Props",
  ],
};
</script>

<style>
.feature-details {
  align-items: center;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 4964px;
  width: 1920px;
}

.frame-2569-1 {
  align-items: flex-end;
  background-color: var(--ebony);
  display: flex;
  height: 832px;
  overflow: hidden;
  width: 1920px;
}

.flex-col-95 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 464px;
  margin-left: -73px;
  min-height: 792px;
  width: 257px;
}

.logo-42 {
  align-self: flex-end;
  background-size: 100% 100%;
  height: 104px;
  width: 120px;
}

.ellipse-95-2 {
  background-color: var(--tan);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  width: 224px;
}

.flex-col-96 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 129px;
  margin-left: 325px;
  min-height: 543px;
  width: 1124px;
}

.navbar-8 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 78px;
  height: 24px;
  min-width: 608px;
}

.navbar-link-features-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 70px;
}

.navbar-link-about-us-1 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 71px;
  transition: all 0.2s ease;
}

.navbar-link-about-us-1:hover,
.navbar-link-place-1:hover,
.navbar-link-pricing-1:hover,
.navbar-link-blog-1:hover {
  transform: scale(1.1);
}

.navbar-link-place-1 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 66px;
  transition: all 0.2s ease;
}

.navbar-link-pricing-1 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 54px;
  transition: all 0.2s ease;
}

.navbar-link-blog-1 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  transition: all 0.2s ease;
}

.rectangle-6534 {
  align-self: center;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  height: 2px;
  margin-right: 19px;
  margin-top: 15px;
  width: 121px;
}

.title-68 {
  letter-spacing: 0;
  line-height: 104px;
  margin-top: 150px;
  min-height: 208px;
  text-align: center;
  width: 901px;
}

.lorem-ipsum-dolor-si-6 {
  letter-spacing: 0;
  line-height: 200px;
  margin-bottom: -120px;
  margin-left: 64px;
  margin-top: 64px;
  min-height: 80px;
  text-align: center;
  width: 772px;
}

.flex-col-97 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 634px;
  margin-bottom: -138px;
  margin-left: 80px;
  min-height: 898px;
  width: 240px;
}

.button-136 {
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

.button-136:hover {
  transform: translate(0, -5px);
}

.text-225 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 44px;
  text-align: center;
}

.ellipse-94-3 {
  align-self: flex-end;
  background-color: var(--chetwode-blue);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  width: 224px;
}

.overlap-group2-1 {
  height: 2222px;
  margin-top: 166px;
  position: relative;
  width: 1600px;
}

.overlap-group-19 {
  height: 2222px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1600px;
}

.ellipse-99-1 {
  background-color: var(--jet-stream);
  border-radius: 620px;
  height: 1240px;
  left: 180px;
  position: absolute;
  top: 374px;
  width: 1240px;
}

.ellipse-100-2 {
  background-color: var(--monte-carlo);
  border-radius: 125px;
  height: 250px;
  left: 736px;
  position: absolute;
  top: 1528px;
  width: 250px;
}

.ellipse-101-2 {
  background-color: var(--monte-carlo);
  border-radius: 125px;
  height: 250px;
  left: 736px;
  position: absolute;
  top: 0;
  width: 250px;
}

.home-2-2 {
  height: 464px;
  left: 912px;
  object-fit: cover;
  position: absolute;
  top: 158px;
  width: 688px;
}

.home-5-1 {
  height: 464px;
  left: 912px;
  object-fit: cover;
  position: absolute;
  top: 1758px;
  width: 688px;
}

.home-3-1 {
  height: 464px;
  left: 80px;
  object-fit: cover;
  position: absolute;
  top: 958px;
  width: 688px;
}

.home-1-3 {
  height: 464px;
  left: 832px;
  object-fit: cover;
  position: absolute;
  top: 78px;
  width: 688px;
}

.home-7-1 {
  height: 464px;
  left: 832px;
  object-fit: cover;
  position: absolute;
  top: 1678px;
  width: 688px;
}

.home-4-1 {
  height: 464px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 878px;
  width: 688px;
}

.overlap-group1-8 {
  height: 1706px;
  margin-top: 38px;
  position: relative;
  width: 1920px;
}

.ellipse-103 {
  background-color: var(--jet-stream);
  border-radius: 620px;
  height: 1240px;
  left: 340px;
  position: absolute;
  top: 0;
  width: 1240px;
}

.ellipse-102-1 {
  background-color: var(--monte-carlo);
  border-radius: 125px;
  height: 250px;
  left: 80px;
  position: absolute;
  top: 138px;
  width: 250px;
}

.home-6-1 {
  height: 464px;
  left: 240px;
  object-fit: cover;
  position: absolute;
  top: 298px;
  width: 688px;
}

.home-8-1 {
  height: 464px;
  left: 160px;
  object-fit: cover;
  position: absolute;
  top: 218px;
  width: 688px;
}
</style>
