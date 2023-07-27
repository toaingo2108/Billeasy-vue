<template>
  <div class="container-center-horizontal">
    <div class="about-us screen">
      <div class="frame-2569-2">
        <div class="flex-col-98">
          <div class="logo-43" :style="{ 'background-image': 'url(' + logo + ')' }"></div>
          <div class="ellipse-95-3"></div>
        </div>
        <div class="flex-col-99">
          <div class="navbar-9 poppins-normal-white-16px">
            <div class="navbar-link-features-2">
              <span class="poppins-normal-white-16px">{{ spanText1 }}</span>
            </div>
            <div class="navbar-link-about-us-2">
              <span class="poppins-normal-white-16px">{{ spanText2 }}</span>
            </div>
            <div class="navbar-link-place-2">
              <span class="poppins-normal-white-16px">{{ spanText3 }}</span>
            </div>
            <div class="navbar-link-pricing-2">
              <span class="poppins-normal-white-16px">{{ spanText4 }}</span>
            </div>
            <div class="navbar-link-blog-2">
              <span class="poppins-normal-white-16px">{{ spanText5 }}</span>
            </div>
          </div>
          <div class="rectangle-6534-1"></div>
          <h1 class="title-69 poppins-semi-bold-white-80px">
            <span class="poppins-semi-bold-white-80px">{{ spanText6 }}</span>
          </h1>
          <p class="surname poppins-medium-cadet-blue-20px">
            <span class="poppins-medium-cadet-blue-20px"
              >White label refers to a product or service that is developed by one company and sold to another company
              that puts its own logo and brand name on the product or service. White label is nothing but a readymade
              product with very little customization and investment.<br /><br />Our white label solution for B2B Portal
              is basically a readymade and fully integrated website with your own domain name and logo, which make
              branding very easy. <br />As a reseller you will be free from concerns about needing to spend time and
              money on development. You can add your own branding and identity, and start business immediately. With
              your own white label you can provide your customers a prepackaged solution to meet their need
              immediately.&nbsp;&nbsp;To achieve your business goals you need to get maximum from available resources
              and competencies. With a white label software you do not deviate from your core competency and business
              model. You have to just concentrate on marketing, networking and customer care after all your network is
              the measurement of your net worth.</span
            >
          </p>
        </div>
        <div class="flex-col-100">
          <div class="button-137">
            <div class="text-226 poppins-semi-bold-white-16px">
              <span class="poppins-semi-bold-white-16px">{{ spanText8 }}</span>
            </div>
          </div>
          <div class="ellipse-94-4"></div>
        </div>
      </div>
      <div class="benefits poppins-semi-bold-ebony-56px">
        <span class="poppins-semi-bold-ebony-56px">{{ spanText9 }}</span>
      </div>
      <p class="our-mission-is-to-em poppins-medium-comet-18px">
        <span class="poppins-medium-comet-18px">{{ spanText10 }}</span>
      </p>
      <div class="frame-2573-2">
        <div class="frame-2571-4">
          <frame2574 />
          <p class="x-your-b poppins-semi-bold-white-24px">
            <span class="poppins-semi-bold-white-24px">{{ spanText11 }}</span>
          </p>
        </div>
        <div class="frame-2572-2">
          <frame25742 />
          <p class="save-on-expenses-by poppins-semi-bold-ebony-24px">
            <span class="poppins-semi-bold-ebony-24px">{{ spanText12 }}</span>
          </p>
        </div>
        <frame2573 :spanText="frame25731Props.spanText" :frame25743Props="frame25731Props.frame25743Props" />
      </div>
      <div class="frame-2611-8">
        <div class="frame-2572-3">
          <div class="frame-2574-14">
            <div class="number-55 poppins-semi-bold-white-32px">
              <span class="poppins-semi-bold-white-32px">{{ spanText13 }}</span>
            </div>
          </div>
          <p class="your-domain-your-br poppins-semi-bold-ebony-24px">
            <span class="poppins-semi-bold-ebony-24px">{{ spanText14 }}</span>
          </p>
        </div>
        <frame2573
          :spanText="frame25732Props.spanText"
          :className="frame25732Props.className"
          :frame25743Props="frame25732Props.frame25743Props"
        />
        <div class="frame-2573-3">
          <frame25743 :children="frame25743Props.children" :className="frame25743Props.className" />
          <p class="x-your-b poppins-semi-bold-ebony-24px">
            <span class="poppins-semi-bold-ebony-24px">{{ spanText15 }}</span>
          </p>
        </div>
      </div>
      <div class="button-138">
        <div class="text-227 poppins-semi-bold-white-16px">
          <span class="poppins-semi-bold-white-16px">{{ spanText16 }}</span>
        </div>
        <img class="chevron-right-3" :src="chevronRight" alt="Chevron Right" />
      </div>
      <frame2610 :className="frame2610Props.className" />
    </div>
  </div>
</template>

<script>
import Frame2574 from "./Frame2574";
import Frame25742 from "./Frame25742";
import Frame2573 from "./Frame2573";
import Frame25743 from "./Frame25743";
import Frame2610 from "./Frame2610";
export default {
  name: "AboutUs",
  components: {
    Frame2574,
    Frame25742,
    Frame2573,
    Frame25743,
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
    "spanText8",
    "spanText9",
    "spanText10",
    "spanText11",
    "spanText12",
    "spanText13",
    "spanText14",
    "spanText15",
    "spanText16",
    "chevronRight",
    "frame25731Props",
    "frame25732Props",
    "frame25743Props",
    "frame2610Props",
  ],
};
</script>

<style>
.about-us {
  align-items: center;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 3484px;
  position: relative;
  width: 1920px;
}

.frame-2569-2 {
  align-items: flex-start;
  background-color: var(--ebony);
  display: flex;
  height: 1240px;
  overflow: hidden;
  padding: 40px 0;
  width: 1920px;
}

.flex-col-98 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 464px;
  margin-left: -73px;
  min-height: 792px;
  width: 257px;
}

.logo-43 {
  align-self: flex-end;
  background-size: 100% 100%;
  height: 104px;
  width: 120px;
}

.ellipse-95-3 {
  background-color: var(--tan);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  width: 224px;
}

.flex-col-99 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  margin-top: 40px;
  min-height: 919px;
  width: 1249px;
}

.navbar-9 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 78px;
  height: 24px;
  min-width: 608px;
}

.navbar-link-features-2 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 70px;
  transition: all 0.2s ease;
}

.navbar-link-features-2:hover,
.navbar-link-place-2:hover,
.navbar-link-pricing-2:hover,
.navbar-link-blog-2:hover,
.frame-2571-4:hover,
.frame-2572-2:hover,
.frame-2572-3:hover,
.frame-2573-3:hover {
  transform: scale(1.1);
}

.navbar-link-about-us-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 71px;
}

.navbar-link-place-2 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 66px;
  transition: all 0.2s ease;
}

.navbar-link-pricing-2 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 54px;
  transition: all 0.2s ease;
}

.navbar-link-blog-2 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  transition: all 0.2s ease;
}

.rectangle-6534-1 {
  background-color: var(--caribbean-green);
  border-radius: 10px;
  height: 2px;
  margin-left: 400px;
  margin-top: 15px;
  width: 121px;
}

.title-69 {
  letter-spacing: 0;
  line-height: 104px;
  margin-right: 98px;
  margin-top: 150px;
  text-align: center;
  width: 901px;
}

.surname {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 200px;
  margin-top: 64px;
  min-height: 560px;
  text-align: center;
  width: 1152px;
}

.flex-col-100 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 634px;
  margin-left: 80px;
  margin-top: 32px;
  min-height: 898px;
  width: 240px;
}

.button-137 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  display: flex;
  height: 40px;
  min-width: 112px;
  padding: 7px 34px;
}

.text-226 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 44px;
  text-align: center;
  transition: all 0.15s ease;
}

.text-226:hover,
.button-138:hover {
  transform: translate(0, -5px);
}

.ellipse-94-4 {
  align-self: flex-end;
  background-color: var(--chetwode-blue);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  width: 224px;
}

.benefits {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 2px;
  margin-top: 191px;
  min-height: 84px;
  min-width: 230px;
  text-align: center;
}

.our-mission-is-to-em {
  letter-spacing: 0;
  line-height: 32px;
  margin-top: 48px;
  min-height: 96px;
  text-align: center;
  width: 1120px;
}

.frame-2573-2 {
  align-items: flex-start;
  display: flex;
  gap: 48px;
  margin-top: 97px;
  min-width: 1600px;
  position: relative;
}

.frame-2571-4 {
  align-items: flex-start;
  background-color: var(--ebony);
  border-radius: 48px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 47px;
  height: 352px;
  overflow: hidden;
  padding: 84px 32px;
  position: relative;
  transition: all 0.2s ease;
  width: 501px;
}

.x-your-b {
  letter-spacing: 0;
  line-height: normal;
  min-height: 72px;
  text-align: center;
  width: 437px;
}

.frame-2572-2 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 48px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 47px;
  height: 352px;
  overflow: hidden;
  padding: 48px 33px;
  position: relative;
  transition: all 0.2s ease;
  width: 501px;
}

.save-on-expenses-by {
  letter-spacing: 0;
  line-height: normal;
  min-height: 144px;
  text-align: center;
  width: 435px;
}

.frame-2611-8 {
  align-items: flex-start;
  display: flex;
  gap: 48px;
  margin-top: 48px;
  min-width: 1600px;
  position: relative;
}

.frame-2572-3 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 48px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 47px;
  height: 352px;
  overflow: hidden;
  padding: 66px 33px;
  transition: all 0.2s ease;
  width: 501px;
}

.frame-2574-14 {
  align-items: flex-start;
  align-self: center;
  background-color: var(--caribbean-green);
  border-radius: 100px;
  display: flex;
  height: 64px;
  margin-right: 0.33px;
  overflow: hidden;
  padding: 15px 21px;
  width: 64px;
}

.number-55 {
  letter-spacing: 0;
  line-height: 32px;
  min-width: 22px;
  text-align: center;
  white-space: nowrap;
}

.your-domain-your-br {
  letter-spacing: 0;
  line-height: normal;
  min-height: 108px;
  text-align: center;
  width: 435px;
}

.frame-2573-3 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 48px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 47px;
  height: 352px;
  overflow: hidden;
  padding: 84px 32px;
  position: relative;
  transition: all 0.2s ease;
  width: 501px;
}

.button-138 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 80px;
  margin-right: 80px;
  margin-top: 96px;
  min-width: 352px;
  padding: 27px 106.5px;
  transition: all 0.15s ease;
}

.text-227 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 107px;
  text-align: center;
}

.chevron-right-3 {
  align-self: center;
  height: 24px;
  width: 24px;
}
</style>
