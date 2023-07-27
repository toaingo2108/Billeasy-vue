<template>
  <div class="container-center-horizontal">
    <div class="blog-detail-page screen">
      <div class="frame-2569-5">
        <div class="flex-row-61">
          <div class="flex-col-110">
            <div class="logo-46" :style="{ 'background-image': 'url(' + logo + ')' }"></div>
            <div class="ellipse-95-6"></div>
          </div>
          <div class="flex-col-111">
            <div class="frame-2632">
              <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
              <div class="blog-product-updates poppins-medium-white-20px">
                <span class="poppins-medium-comet-20px">{{ spanText1 }}</span
                ><span class="poppins-medium-white-20px">{{ spanText2 }}</span>
              </div>
            </div>
            <img class="unsplashhpj-sk-u2-uysu-2" :src="unsplashHpjsku2Uysu" alt="unsplash:hpjSkU2UYSU" />
          </div>
        </div>
        <div class="flex-col-112">
          <div class="navbar-12 poppins-normal-white-16px">
            <div class="navbar-link-features-5">
              <span class="poppins-normal-white-16px">{{ spanText3 }}</span>
            </div>
            <div class="navbar-link-about-us-5">
              <span class="poppins-normal-white-16px">{{ spanText4 }}</span>
            </div>
            <div class="navbar-link-place-5">
              <span class="poppins-normal-white-16px">{{ spanText5 }}</span>
            </div>
            <div class="navbar-link-pricing-5">
              <span class="poppins-normal-white-16px">{{ spanText6 }}</span>
            </div>
            <div class="navbar-link-blog-5">
              <span class="poppins-normal-white-16px">{{ spanText7 }}</span>
            </div>
          </div>
          <div class="rectangle-6534-4"></div>
          <div class="frame-2625-1">
            <div class="frame-2623-1">
              <div class="what-is-b2-b-portal poppins-semi-bold-white-32px">
                <span class="poppins-semi-bold-white-32px">{{ spanText8 }}</span>
              </div>
              <p class="lorem-ipsum-dolor-si-9 poppins-medium-mischka-20px">
                <span class="poppins-medium-mischka-20px">{{ spanText9 }}</span>
              </p>
            </div>
            <div class="frame-2624-1">
              <img class="ellipse-48-1" :src="ellipse48" alt="Ellipse 48" />
              <p class="name-224 poppins-medium-blue-violet-20px">
                <span class="poppins-medium-white-20px">{{ spanText10 }}</span
                ><span class="poppins-medium-blue-violet-20px">{{ spanText11 }}</span
                ><span class="poppins-medium-manatee-20px">{{ spanText12 }}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="flex-col-113">
          <div class="button-144">
            <div class="text-233 poppins-semi-bold-white-16px">
              <span class="poppins-semi-bold-white-16px">{{ spanText13 }}</span>
            </div>
          </div>
          <div class="ellipse-94-7"></div>
        </div>
      </div>
      <div class="frame-2636">
        <frame2633 />
        <frame2633 :className="frame26331Props.className" />
        <frame2633 :className="frame26332Props.className" />
      </div>
      <h1 class="title-72 poppins-semi-bold-ebony-48px">
        <span class="poppins-semi-bold-ebony-48px">{{ spanText14 }}</span>
      </h1>
      <div class="frame-2637">
        <div class="input-47">
          <input
            class="input-text-72 poppins-normal-ebony-14px"
            name="inputtext"
            :placeholder="inputPlaceholder"
            :type="inputType"
            required
          />
        </div>
        <div class="button-145">
          <img class="send" :src="send" alt="Send" />
          <div class="text-234 poppins-semi-bold-white-16px">
            <span class="poppins-semi-bold-white-16px">{{ spanText15 }}</span>
          </div>
        </div>
      </div>
      <div class="frame-2639">
        <img class="ellipse-69" :src="ellipse69" alt="Ellipse 69" />
        <div class="frame-2638">
          <div class="name-225 poppins-semi-bold-ebony-24px">
            <span class="poppins-semi-bold-ebony-24px">{{ spanText16 }}</span>
          </div>
          <div class="address-2 poppins-medium-manatee-18px">
            <span class="poppins-medium-manatee-18px">{{ spanText17 }}</span>
          </div>
        </div>
      </div>
      <p class="aenean-mattis-amet-q poppins-medium-comet-20px">
        <span class="poppins-medium-comet-20px">{{ spanText18 }}</span>
      </p>
      <div class="frame-2640">
        <img class="thumb-up" :src="thumbUp" alt="thumb-up" />
        <div class="like-comment poppins-semi-bold-denim-16px">
          <span class="poppins-semi-bold-denim-16px">{{ spanText19 }}</span>
        </div>
      </div>
      <div class="frame-2641">
        <div class="share-on poppins-medium-white-20px">
          <span class="poppins-medium-white-20px">{{ spanText20 }}</span>
        </div>
        <div class="frame-2642">
          <div class="social-icon" :style="{ 'background-image': 'url(' + socialIcon1 + ')' }"></div>
          <img class="frame-2642-item" :src="socialIcon2" alt="Social icon" /><img
            class="frame-2642-item"
            :src="socialIcon3"
            alt="Social icon"
          /><img class="frame-2642-item" :src="share" alt="share" />
        </div>
      </div>
      <div class="recommended-posts poppins-semi-bold-ebony-48px">
        <span class="poppins-semi-bold-ebony-48px">{{ spanText21 }}</span>
      </div>
      <div class="frame-2644">
        <frame26272 :button7Props="frame262721Props.button7Props" />
        <frame26272 :button7Props="frame262722Props.button7Props" />
        <frame26272 :button7Props="frame262723Props.button7Props" />
      </div>
      <frame2610 :className="frame2610Props.className" />
    </div>
  </div>
</template>

<script>
import IconButton from "./IconButton";
import Frame2633 from "./Frame2633";
import Frame26272 from "./Frame26272";
import Frame2610 from "./Frame2610";
export default {
  name: "BlogDetailPage",
  components: {
    IconButton,
    Frame2633,
    Frame26272,
    Frame2610,
  },
  props: [
    "logo",
    "spanText1",
    "spanText2",
    "unsplashHpjsku2Uysu",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "ellipse48",
    "spanText10",
    "spanText11",
    "spanText12",
    "spanText13",
    "spanText14",
    "inputType",
    "inputPlaceholder",
    "send",
    "spanText15",
    "ellipse69",
    "spanText16",
    "spanText17",
    "spanText18",
    "thumbUp",
    "spanText19",
    "spanText20",
    "socialIcon1",
    "socialIcon2",
    "socialIcon3",
    "share",
    "spanText21",
    "iconButtonProps",
    "frame26331Props",
    "frame26332Props",
    "frame262721Props",
    "frame262722Props",
    "frame262723Props",
    "frame2610Props",
  ],
};
</script>

<style>
.blog-detail-page {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 5813px;
  position: relative;
  width: 1920px;
}

.frame-2569-5 {
  align-items: flex-start;
  background-color: var(--ebony);
  display: flex;
  height: 1056px;
  overflow: hidden;
  width: 1920px;
}

.flex-row-61 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  gap: 72px;
  height: 1128px;
  margin-bottom: -112px;
  margin-left: -112px;
  min-width: 944px;
}

.flex-col-110 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 800px;
  min-height: 1128px;
  width: 296px;
}

.logo-46 {
  align-self: flex-end;
  background-size: 100% 100%;
  height: 104px;
  width: 120px;
}

.ellipse-95-6 {
  background-color: var(--tan);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  width: 224px;
}

.flex-col-111 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 90px;
  margin-bottom: 192px;
  min-height: 530px;
  width: 576px;
}

.frame-2632 {
  align-items: center;
  display: flex;
  gap: 24px;
  height: 40px;
  min-width: 298px;
  position: relative;
}

.blog-product-updates {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  min-width: 234px;
  white-space: nowrap;
}

.unsplashhpj-sk-u2-uysu-2 {
  height: 400px;
  width: 576px;
}

.flex-col-112 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  margin-left: 64px;
  margin-top: 80px;
  min-height: 640px;
  width: 784px;
}

.navbar-12 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 78px;
  height: 24px;
  margin-left: 82px;
  min-width: 608px;
}

.navbar-link-features-5 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 70px;
  transition: all 0.2s ease;
}

.navbar-link-features-5:hover,
.navbar-link-about-us-5:hover,
.navbar-link-place-5:hover,
.navbar-link-pricing-5:hover {
  transform: scale(1.1);
}

.navbar-link-about-us-5 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 71px;
  transition: all 0.2s ease;
}

.navbar-link-place-5 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 66px;
  transition: all 0.2s ease;
}

.navbar-link-pricing-5 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 54px;
  transition: all 0.2s ease;
}

.navbar-link-blog-5 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
}

.rectangle-6534-4 {
  background-color: var(--caribbean-green);
  border-radius: 10px;
  height: 2px;
  margin-right: 25px;
  margin-top: 15px;
  width: 79px;
}

.frame-2625-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 306px;
  min-height: 293px;
  width: 784px;
}

.frame-2623-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: -79px;
  min-height: 221px;
  width: 784px;
}

.what-is-b2-b-portal {
  letter-spacing: 0;
  line-height: 140px;
  margin-top: -1px;
  min-height: 45px;
  white-space: nowrap;
}

.lorem-ipsum-dolor-si-9 {
  letter-spacing: 0;
  line-height: 200px;
  margin-bottom: -40px;
  min-height: 160px;
  width: 784px;
}

.frame-2624-1 {
  align-items: center;
  display: flex;
  gap: 16px;
  min-width: 388px;
}

.ellipse-48-1 {
  height: 40px;
  width: 40px;
}

.name-224 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  min-width: 332px;
  white-space: nowrap;
}

.flex-col-113 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 544px;
  margin-bottom: 104px;
  margin-left: 33px;
  min-height: 808px;
  width: 240px;
}

.button-144 {
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

.button-144:hover,
.button-145:hover,
.frame-2640:hover {
  transform: translate(0, -5px);
}

.text-233 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 44px;
  text-align: center;
}

.ellipse-94-7 {
  align-self: flex-end;
  background-color: var(--chetwode-blue);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  width: 224px;
}

.frame-2636 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 160px;
  margin-right: 224px;
  margin-top: 112px;
  min-height: 1959px;
  position: relative;
  width: 1216px;
}

.title-72 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 240px;
  margin-top: 207px;
  min-height: 72px;
}

.frame-2637 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  margin-left: 240px;
  margin-top: 49px;
  min-width: 800px;
}

.input-47 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 48px;
  overflow: hidden;
  padding: 11px 12px;
  width: 596px;
}

.input-text-72 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 572px;
}

.input-text-72::placeholder {
  color: #0d0d1d99;
}

.button-145 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 48px;
  min-width: 192px;
  padding: 11px 19px;
  transition: all 0.15s ease;
}

.send,
.thumb-up {
  align-self: center;
  height: 24px;
  width: 24px;
}

.text-234 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 122px;
  text-align: center;
}

.frame-2639 {
  align-items: center;
  display: flex;
  gap: 19px;
  height: 67px;
  margin-left: 240px;
  margin-top: 48px;
  min-width: 220px;
}

.ellipse-69 {
  height: 64px;
  object-fit: cover;
  width: 64px;
}

.frame-2638 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 67px;
  width: 137px;
}

.name-225 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 36px;
}

.address-2 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 27px;
}

.aenean-mattis-amet-q {
  letter-spacing: 0;
  line-height: 200px;
  margin-bottom: -40px;
  margin-left: 240px;
  margin-top: 47px;
  min-height: 160px;
  width: 800px;
}

.frame-2640 {
  align-items: flex-start;
  background-color: #d0e2ff;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  margin-left: 240px;
  margin-top: 21px;
  min-width: 180px;
  padding: 7px 16px;
  transition: all 0.15s ease;
}

.like-comment {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
}

.frame-2641 {
  align-items: center;
  background-color: var(--ebony);
  display: flex;
  gap: 64px;
  height: 136px;
  margin-top: 114px;
  padding: 0 747px;
  width: 1920px;
}

.share-on {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 30px;
  min-width: 90px;
}

.frame-2642 {
  align-items: flex-start;
  display: flex;
  gap: 48px;
  min-width: 272px;
}

.social-icon {
  background-size: 100% 100%;
  height: 32px;
  width: 32px;
}

.frame-2642-item {
  height: 32px;
  width: 32px;
}

.recommended-posts {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 160px;
  margin-top: 103px;
  min-height: 72px;
}

.frame-2644 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 48px;
  height: 701px;
  margin-top: 65px;
  min-width: 1600px;
  position: relative;
}
</style>
