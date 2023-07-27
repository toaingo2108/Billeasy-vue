<template>
  <div class="container-center-horizontal">
    <div class="index-page screen">
      <div class="overlap-group8-1">
        <div class="frame-2569">
          <div class="flex-row-50">
            <div class="flex-col-69">
              <div class="logo-34" :style="{ 'background-image': 'url(' + logo + ')' }"></div>
              <div class="ellipse-95"></div>
            </div>
            <div class="flex-col-70">
              <div class="navbar-7 poppins-normal-white-16px">
                <div class="navbar-link-features">
                  <span class="poppins-normal-white-16px">{{ spanText1 }}</span>
                </div>
                <div class="navbar-link-about-us">
                  <span class="poppins-normal-white-16px">{{ spanText2 }}</span>
                </div>
                <div class="navbar-link-place">
                  <span class="poppins-normal-white-16px">{{ spanText3 }}</span>
                </div>
                <div class="navbar-link-pricing">
                  <span class="poppins-normal-white-16px">{{ spanText4 }}</span>
                </div>
                <div class="navbar-link-blog">
                  <span class="poppins-normal-white-16px">{{ spanText5 }}</span>
                </div>
              </div>
              <h1 class="title-67 poppins-semi-bold-white-80px">
                <span class="poppins-semi-bold-white-80px">{{ spanText6 }}</span>
              </h1>
              <p class="your-own-ai-powered poppins-medium-cadet-blue-20px">
                <span class="poppins-medium-cadet-blue-20px">{{ spanText7 }}</span>
              </p>
              <div class="buttons-40">
                <div class="button-128">
                  <div class="text-220 poppins-semi-bold-ebony-16px">
                    <span class="poppins-semi-bold-ebony-16px">{{ spanText8 }}</span>
                  </div>
                </div>
                <div class="button-129">
                  <img class="contact-1" :src="contact" alt="Contact" />
                  <div class="text-221 poppins-semi-bold-white-16px">
                    <span class="poppins-semi-bold-white-16px">{{ spanText9 }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="button-130">
              <div class="text-222 poppins-semi-bold-white-16px">
                <span class="poppins-semi-bold-white-16px">{{ spanText10 }}</span>
              </div>
            </div>
          </div>
          <div class="ellipse-94"></div>
        </div>
        <img class="home-1-1" :src="home11" alt="Home 1" />
      </div>
      <div class="how-billeasy-works poppins-semi-bold-ebony-56px">
        <span class="poppins-semi-bold-ebony-56px">{{ spanText11 }}</span>
      </div>
      <div class="frame-2573">
        <frame2571 />
        <frame2572 :frame2575Props="frame2572Props.frame2575Props" />
        <div class="frame-2573-1">
          <frame25743 :children="frame25743Props.children" />
          <frame2575
            :spanText1="frame2575Props.spanText1"
            :spanText2="frame2575Props.spanText2"
            :className="frame2575Props.className"
          />
        </div>
      </div>
      <div class="frame-2577">
        <div class="ellipse-95-1"></div>
        <div class="flex-col-71">
          <p class="what-problems-does-billeasy-solve poppins-semi-bold-white-56px">
            <span class="poppins-semi-bold-white-56px">{{ spanText12 }}</span>
          </p>
          <div class="flex-row-51">
            <div class="frame-2580">
              <frame25782 :spanText="frame257821Props.spanText" />
              <frame25782 :spanText="frame257822Props.spanText" :className="frame257822Props.className" />
              <frame25782 :spanText="frame257823Props.spanText" :className="frame257823Props.className" />
              <frame25782 :spanText="frame257824Props.spanText" :className="frame257824Props.className" />
              <frame25782 :spanText="frame257825Props.spanText" :className="frame257825Props.className" />
              <frame25782 :spanText="frame257826Props.spanText" />
            </div>
            <div class="overlap-group3">
              <div class="ellipse-96"></div>
              <img class="chat" :src="chat" alt="chat" /><img
                class="contacts_chat"
                :src="contacts_Chat"
                alt="contacts_chat"
              />
              <div class="ellipse-94-1"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="frame-2584">
        <div class="flex-col-72">
          <frame2576
            :spanText1="frame2576Props.spanText1"
            :spanText2="frame2576Props.spanText2"
            :frame25744Props="frame2576Props.frame25744Props"
          />
          <div class="overlap-group4">
            <div class="ellipse-97"></div>
            <div class="ellipse-98"></div>
            <img class="home-2-1" :src="home2" alt="Home 2" />
          </div>
        </div>
        <div class="flex-col-73">
          <frame25783
            :spanText1="frame257831Props.spanText1"
            :spanText2="frame257831Props.spanText2"
            :frame25744Props="frame257831Props.frame25744Props"
          />
          <frame25783
            :spanText1="frame257832Props.spanText1"
            :spanText2="frame257832Props.spanText2"
            :frame25744Props="frame257832Props.frame25744Props"
          />
          <frame25783
            :spanText1="frame257833Props.spanText1"
            :spanText2="frame257833Props.spanText2"
            :frame25744Props="frame257833Props.frame25744Props"
          />
          <frame25783
            :spanText1="frame257834Props.spanText1"
            :spanText2="frame257834Props.spanText2"
            :frame25744Props="frame257834Props.frame25744Props"
          />
          <button5 />
        </div>
      </div>
      <div class="frame-2585">
        <div class="overlap-group6-1">
          <div class="overlap-group5-1">
            <div class="ellipse-97-1"></div>
            <div class="ellipse-99"></div>
            <div class="ellipse-98-1"></div>
            <div class="ellipse-100"></div>
            <frame25762
              :spanText1="frame257621Props.spanText1"
              :spanText2="frame257621Props.spanText2"
              :frame25744Props="frame257621Props.frame25744Props"
            />
            <frame25762
              :spanText1="frame257622Props.spanText1"
              :spanText2="frame257622Props.spanText2"
              :className="frame257622Props.className"
              :frame25744Props="frame257622Props.frame25744Props"
            />
            <frame25762
              :spanText1="frame257623Props.spanText1"
              :spanText2="frame257623Props.spanText2"
              :className="frame257623Props.className"
              :frame25744Props="frame257623Props.frame25744Props"
            />
            <frame25762
              :spanText1="frame257624Props.spanText1"
              :spanText2="frame257624Props.spanText2"
              :className="frame257624Props.className"
              :frame25744Props="frame257624Props.frame25744Props"
            />
            <img class="products-1-1" :src="products1" alt="Products 1" /><img
              class="reports-1"
              :src="reports1"
              alt="Reports 1"
            />
          </div>
          <frame25762
            :spanText1="frame257625Props.spanText1"
            :spanText2="frame257625Props.spanText2"
            :className="frame257625Props.className"
            :frame25744Props="frame257625Props.frame25744Props"
          />
          <frame25762
            :spanText1="frame257626Props.spanText1"
            :spanText2="frame257626Props.spanText2"
            :className="frame257626Props.className"
            :frame25744Props="frame257626Props.frame25744Props"
          />
          <button5 :className="button51Props.className" />
          <button5 :className="button52Props.className" />
          <div class="ellipse-94-2"></div>
          <div class="ellipse-101"></div>
        </div>
      </div>
      <div class="frame-2587">
        <div class="frame-2571">
          <div class="overlap-group-18">
            <img class="image" :src="image1" alt="image" />
            <div class="frame-2576">
              <img class="ellipse-49" :src="ellipse49" alt="Ellipse 49" />
              <div class="frame-2575">
                <frame2588 :spanText1="frame2588Props.spanText1" />
                <p class="praesent-molestie-ma poppins-medium-mischka-18px">
                  <span class="poppins-medium-mischka-18px">{{ spanText13 }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="frame-2574">
          <div class="overlap-group-18">
            <frame25763 :ellipse55="frame257631Props.ellipse55" :frame2588Props="frame257631Props.frame2588Props" />
            <img class="image" :src="image2" alt="image" />
          </div>
        </div>
        <div class="frame-2575-1">
          <div class="overlap-group-18">
            <frame25763 :ellipse55="frame257632Props.ellipse55" :frame2588Props="frame257632Props.frame2588Props" />
            <img class="image" :src="image3" alt="image" />
          </div>
        </div>
      </div>
      <div class="frame-2593">
        <div class="integrated-with-leading-er-ps poppins-semi-bold-ebony-56px">
          <span class="poppins-semi-bold-ebony-56px">{{ spanText14 }}</span>
        </div>
        <div class="frame-container-5">
          <frame25744 :src="frame257441Props.src" :className="frame257441Props.className" />
          <div class="frame-2589">
            <img class="download-1" :src="download11" alt="download 1" /><img
              class="download-1-1"
              :src="download12"
              alt="download (1)"
            /><img class="visma_net-1" :src="visma_Net1" alt="visma_net 1" />
          </div>
          <frame25744 :src="frame257442Props.src" :className="frame257442Props.className" />
        </div>
      </div>
      <div class="pricing poppins-semi-bold-ebony-56px">
        <span class="poppins-semi-bold-ebony-56px">{{ spanText15 }}</span>
      </div>
      <div class="frame-2597">
        <div class="frame-2595">
          <div class="flexible-plan poppins-medium-white-18px">
            <span class="poppins-medium-white-18px">{{ spanText16 }}</span>
          </div>
        </div>
        <div class="frame-2596">
          <div class="fixed-plan poppins-medium-ebony-18px">
            <span class="poppins-medium-ebony-18px">{{ spanText17 }}</span>
          </div>
        </div>
      </div>
      <div class="frame-2594">
        <div class="frame-2574-1">
          <frame2599 :spanText1="frame25991Props.spanText1" />
          <button6 />
          <div class="frame-2598">
            <frame25784 :spanText="frame257841Props.spanText" />
            <frame25784 :spanText="frame257842Props.spanText" />
            <frame25784 :spanText="frame257843Props.spanText" />
            <frame25784 :spanText="frame257844Props.spanText" />
          </div>
        </div>
        <div class="frame-2571-1">
          <div class="frame-2599">
            <div class="pro-package poppins-medium-white-24px">
              <span class="poppins-medium-white-24px">{{ spanText18 }}</span>
            </div>
            <div class="x1200-month poppins-semi-bold-ebony-64px">
              <span class="span0-1">{{ spanText19 }}</span
              ><span class="span1">{{ spanText20 }}</span>
            </div>
          </div>
          <button6 />
          <div class="frame-2598">
            <frame25785 :spanText="frame257851Props.spanText" />
            <frame25785 :spanText="frame257852Props.spanText" />
            <frame25785 :spanText="frame257853Props.spanText" />
            <frame25785 :spanText="frame257854Props.spanText" />
          </div>
        </div>
        <div class="frame-2575-2">
          <frame2599 :spanText1="frame25992Props.spanText1" />
          <button6 />
          <div class="frame-2598-1">
            <frame25784 :spanText="frame257845Props.spanText" />
            <frame25784 :spanText="frame257846Props.spanText" />
            <frame25784 :spanText="frame257847Props.spanText" />
            <frame25784 :spanText="frame257848Props.spanText" />
            <frame25784 :spanText="frame257849Props.spanText" />
          </div>
        </div>
      </div>
      <div class="frequently-asked-questions poppins-semi-bold-ebony-56px">
        <span class="poppins-semi-bold-ebony-56px">{{ spanText21 }}</span>
      </div>
      <div class="frame-2605">
        <div class="frame-2603">
          <p class="do-you-have-a-setup-cost poppins-semi-bold-ebony-24px">
            <span class="poppins-semi-bold-ebony-24px">{{ spanText22 }}</span>
          </p>
          <icon-button3 :src="iconButton3Props.src" />
        </div>
        <p class="lorem-ipsum-dolor-si-5 poppins-medium-comet-18px">
          <span class="poppins-medium-comet-18px">{{ spanText23 }}</span>
        </p>
      </div>
      <frame2604 :iconButton3Props="frame26041Props.iconButton3Props" />
      <frame2604 :iconButton3Props="frame26042Props.iconButton3Props" />
      <frame2604 :iconButton3Props="frame26043Props.iconButton3Props" />
      <div class="frame-2608">
        <div class="overlap-group7-1">
          <div class="ellipse-101-1"></div>
          <div class="frame-2609">
            <p class="seamlessly-interact poppins-medium-mischka-32px">
              <span class="poppins-medium-mischka-32px">{{ spanText24 }}</span>
            </p>
            <div class="button-131">
              <div class="text-220 poppins-semi-bold-white-16px">
                <span class="poppins-semi-bold-white-16px">{{ spanText25 }}</span>
              </div>
              <img class="chevron-right" :src="chevronRight" alt="Chevron Right" />
            </div>
          </div>
        </div>
        <img class="home-1-2" :src="home12" alt="Home 1" />
        <div class="ellipse-container">
          <div class="ellipse-100-1"></div>
          <div class="ellipse-102"></div>
        </div>
      </div>
      <frame2610 />
    </div>
  </div>
</template>

<script>
import Frame2571 from "./Frame2571";
import Frame2572 from "./Frame2572";
import Frame25743 from "./Frame25743";
import Frame2575 from "./Frame2575";
import Frame25782 from "./Frame25782";
import Frame2576 from "./Frame2576";
import Frame25783 from "./Frame25783";
import Button5 from "./Button5";
import Frame25762 from "./Frame25762";
import Frame2588 from "./Frame2588";
import Frame25763 from "./Frame25763";
import Frame25744 from "./Frame25744";
import Frame2599 from "./Frame2599";
import Button6 from "./Button6";
import Frame25784 from "./Frame25784";
import Frame25785 from "./Frame25785";
import IconButton3 from "./IconButton3";
import Frame2604 from "./Frame2604";
import Frame2610 from "./Frame2610";
export default {
  name: "IndexPage",
  components: {
    Frame2571,
    Frame2572,
    Frame25743,
    Frame2575,
    Frame25782,
    Frame2576,
    Frame25783,
    Button5,
    Frame25762,
    Frame2588,
    Frame25763,
    Frame25744,
    Frame2599,
    Button6,
    Frame25784,
    Frame25785,
    IconButton3,
    Frame2604,
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
    "contact",
    "spanText9",
    "spanText10",
    "home11",
    "spanText11",
    "spanText12",
    "chat",
    "contacts_Chat",
    "home2",
    "products1",
    "reports1",
    "image1",
    "ellipse49",
    "spanText13",
    "image2",
    "image3",
    "spanText14",
    "download11",
    "download12",
    "visma_Net1",
    "spanText15",
    "spanText16",
    "spanText17",
    "spanText18",
    "spanText19",
    "spanText20",
    "spanText21",
    "spanText22",
    "spanText23",
    "spanText24",
    "spanText25",
    "chevronRight",
    "home12",
    "frame2572Props",
    "frame25743Props",
    "frame2575Props",
    "frame257821Props",
    "frame257822Props",
    "frame257823Props",
    "frame257824Props",
    "frame257825Props",
    "frame257826Props",
    "frame2576Props",
    "frame257831Props",
    "frame257832Props",
    "frame257833Props",
    "frame257834Props",
    "frame257621Props",
    "frame257622Props",
    "frame257623Props",
    "frame257624Props",
    "frame257625Props",
    "frame257626Props",
    "button51Props",
    "button52Props",
    "frame2588Props",
    "frame257631Props",
    "frame257632Props",
    "frame257441Props",
    "frame257442Props",
    "frame25991Props",
    "frame257841Props",
    "frame257842Props",
    "frame257843Props",
    "frame257844Props",
    "frame257851Props",
    "frame257852Props",
    "frame257853Props",
    "frame257854Props",
    "frame25992Props",
    "frame257845Props",
    "frame257846Props",
    "frame257847Props",
    "frame257848Props",
    "frame257849Props",
    "iconButton3Props",
    "frame26041Props",
    "frame26042Props",
    "frame26043Props",
  ],
};
</script>

<style>
.index-page {
  align-items: center;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 13472px;
  position: relative;
  width: 1920px;
}

.overlap-group8-1 {
  height: 1879px;
  position: relative;
  width: 1920px;
}

.frame-2569 {
  align-items: flex-start;
  background-color: var(--ebony);
  display: flex;
  flex-direction: column;
  gap: 258px;
  height: 1290px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 1920px;
}

.flex-row-50 {
  align-items: flex-start;
  display: flex;
  height: 792px;
  margin-left: -73px;
  margin-top: 40px;
  min-width: 1898px;
}

.flex-col-69 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 464px;
  min-height: 792px;
  width: 257px;
}

.logo-34 {
  align-self: flex-end;
  background-size: 100% 100%;
  height: 104px;
  width: 120px;
}

.ellipse-95 {
  background-color: var(--tan);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  width: 224px;
}

.flex-col-70 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-left: 325px;
  min-height: 712px;
  width: 1124px;
}

.navbar-7 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  gap: 78px;
  height: 24px;
  min-width: 608px;
}

.navbar-link-features {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 70px;
  transition: all 0.2s ease;
}

.navbar-link-features:hover,
.navbar-link-about-us:hover,
.navbar-link-place:hover,
.navbar-link-pricing:hover,
.navbar-link-blog:hover,
.home-1-1:hover,
.frame-2573-1:hover {
  transform: scale(1.1);
}

.navbar-link-about-us {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 71px;
  transition: all 0.2s ease;
}

.navbar-link-place {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 66px;
  transition: all 0.2s ease;
}

.navbar-link-pricing {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  min-width: 54px;
  transition: all 0.2s ease;
}

.navbar-link-blog {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 24px;
  transition: all 0.2s ease;
}

.title-67 {
  letter-spacing: 0;
  line-height: 104px;
  margin-top: 167px;
  min-height: 208px;
  text-align: center;
  width: 901px;
}

.your-own-ai-powered {
  letter-spacing: 0;
  line-height: 200px;
  margin-bottom: -80px;
  margin-left: 64px;
  margin-top: 64px;
  min-height: 120px;
  text-align: center;
  width: 772px;
}

.buttons-40 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  gap: 12px;
  margin-right: 224px;
  margin-top: 65px;
  min-width: 364px;
}

.button-128 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 64px;
  min-width: 176px;
  padding: 19px 41.5px;
  transition: all 0.15s ease;
}

.button-128:hover,
.button-129:hover,
.button-130:hover,
.button-131:hover {
  transform: translate(0, -5px);
}

.text-220 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 93px;
  text-align: center;
}

.button-129 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 64px;
  min-width: 176px;
  padding: 19px 27px;
  transition: all 0.15s ease;
}

.contact-1,
.chevron-right {
  align-self: center;
  height: 24px;
  width: 24px;
}

.text-221 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 90px;
  text-align: center;
}

.button-130 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 40px;
  margin-left: 80px;
  margin-top: 32px;
  min-width: 112px;
  padding: 7px 34px;
  transition: all 0.15s ease;
}

.text-222 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 24px;
  min-width: 44px;
  text-align: center;
}

.ellipse-94 {
  align-self: flex-end;
  background-color: var(--chetwode-blue);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  margin-right: -33px;
  width: 224px;
}

.home-1-1 {
  cursor: pointer;
  height: 967px;
  left: 240px;
  object-fit: cover;
  position: absolute;
  top: 912px;
  transition: all 0.2s ease;
  width: 1440px;
}

.how-billeasy-works {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 1px;
  margin-top: 191px;
  min-height: 84px;
  min-width: 549px;
  text-align: center;
}

.frame-2573 {
  align-items: flex-start;
  display: flex;
  gap: 48px;
  margin-top: 81px;
  min-width: 1600px;
  position: relative;
}

.frame-2573-1 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 48px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 48px;
  height: 352px;
  overflow: hidden;
  padding: 52px 32px;
  position: relative;
  transition: all 0.2s ease;
  width: 501px;
}

.frame-2577 {
  align-items: flex-start;
  background-color: var(--ebony);
  display: flex;
  gap: 138px;
  height: 1168px;
  margin-top: 192px;
  overflow: hidden;
  width: 1920px;
}

.ellipse-95-1 {
  background-color: #22f6e9;
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  margin-left: -202px;
  margin-top: 55px;
  width: 224px;
}

.flex-col-71 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 81px;
  margin-bottom: -47px;
  min-height: 1120px;
  width: 1793px;
}

.what-problems-does-billeasy-solve {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 195px;
  min-height: 84px;
  min-width: 1020px;
  text-align: center;
}

.flex-row-51 {
  align-items: center;
  display: flex;
  gap: 357px;
  min-width: 1793px;
}

.frame-2580 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin-bottom: 217px;
  min-height: 500px;
  position: relative;
  width: 595px;
}

.overlap-group3 {
  height: 955px;
  position: relative;
  width: 841px;
}

.ellipse-96 {
  background-color: #2290f6;
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  left: 230px;
  position: absolute;
  top: 731px;
  width: 224px;
}

.chat {
  height: 635px;
  left: 0;
  position: absolute;
  top: 52px;
  width: 648px;
}

.contacts_chat {
  height: 738px;
  left: 306px;
  position: absolute;
  top: 0;
  width: 342px;
}

.ellipse-94-1 {
  background-color: var(--chetwode-blue);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  left: 617px;
  position: absolute;
  top: 714px;
  width: 224px;
}

.frame-2584 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  gap: 90px;
  height: 1624px;
  overflow: hidden;
  width: 1920px;
}

.flex-col-72 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 120px;
  margin-bottom: -304px;
  margin-left: -320px;
  min-height: 1800px;
  position: relative;
  width: 1350px;
}

.overlap-group4 {
  height: 1416px;
  position: relative;
  width: 1350px;
}

.ellipse-97 {
  background-color: var(--green-sheen);
  border-radius: 620px;
  height: 1240px;
  left: 0;
  position: absolute;
  top: 176px;
  width: 1240px;
}

.ellipse-98 {
  background-color: var(--caribbean-green-2);
  border-radius: 125px;
  height: 250px;
  left: 1100px;
  position: absolute;
  top: 619px;
  width: 250px;
}

.home-2-1 {
  height: 776px;
  left: 124px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1156px;
}

.flex-col-73 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 96px;
  margin-top: 8px;
  min-height: 1376px;
  position: relative;
  width: 576px;
}

.frame-2585 {
  align-items: flex-end;
  background-color: var(--ebony);
  display: flex;
  height: 2400px;
  overflow: hidden;
  width: 1920px;
}

.overlap-group6-1 {
  height: 2571px;
  margin-bottom: -284px;
  margin-left: -480px;
  position: relative;
  width: 2942px;
}

.overlap-group5-1 {
  height: 2571px;
  left: 0;
  position: absolute;
  top: 0;
  width: 2942px;
}

.ellipse-97-1 {
  background-color: var(--green-sheen);
  border-radius: 620px;
  height: 1240px;
  left: 90px;
  position: absolute;
  top: 1331px;
  width: 1240px;
}

.ellipse-99 {
  background-color: var(--mineral-green);
  border-radius: 620px;
  height: 1240px;
  left: 910px;
  position: absolute;
  top: 214px;
  width: 1240px;
}

.ellipse-98-1 {
  background-color: #20c39d12;
  border-radius: 125px;
  height: 250px;
  left: 371px;
  position: absolute;
  top: 1002px;
  width: 250px;
}

.ellipse-100 {
  background-color: var(--caribbean-green-2);
  border-radius: 125px;
  height: 250px;
  left: 2040px;
  position: absolute;
  top: 778px;
  width: 250px;
}

.products-1-1 {
  height: 967px;
  left: 1502px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 1440px;
}

.reports-1 {
  height: 967px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 1194px;
  width: 1440px;
}

.ellipse-94-2 {
  background-color: var(--chetwode-blue);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  left: 2240px;
  position: absolute;
  top: 2141px;
  width: 224px;
}

.ellipse-101 {
  background-color: var(--chetwode-blue);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  left: 352px;
  position: absolute;
  top: 23px;
  width: 224px;
}

.frame-2587 {
  align-items: flex-start;
  display: flex;
  gap: 48px;
  margin-top: 144px;
  min-width: 1600px;
}

.frame-2571 {
  align-items: flex-start;
  background-color: var(--ebony);
  border-radius: 48px;
  display: flex;
  height: 672px;
  overflow: hidden;
  padding: 15px 18px;
  width: 501px;
}

.overlap-group-18 {
  height: 579px;
  position: relative;
  width: 425px;
}

.image {
  height: 99px;
  left: 0;
  position: absolute;
  top: 0;
  width: 131px;
}

.frame-2576 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 48px;
  left: 41px;
  min-height: 514px;
  position: absolute;
  top: 65px;
  width: 384px;
}

.ellipse-49 {
  height: 120px;
  object-fit: cover;
  width: 120px;
}

.frame-2575 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 39px;
  min-height: 346px;
  position: relative;
  width: 384px;
}

.praesent-molestie-ma {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 224px;
  text-align: center;
  width: 384px;
}

.frame-2574 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 48px;
  display: flex;
  height: 672px;
  overflow: hidden;
  padding: 15px 17.7px;
  width: 501px;
}

.frame-2575-1 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 48px;
  display: flex;
  height: 672px;
  overflow: hidden;
  padding: 15px 18.3px;
  width: 501px;
}

.frame-2593 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 113px;
  height: 576px;
  margin-top: 192px;
  padding: 111px 0;
  width: 1920px;
}

.integrated-with-leading-er-ps {
  letter-spacing: 0;
  line-height: normal;
  margin-right: 2px;
  min-height: 84px;
  min-width: 826px;
  text-align: center;
}

.frame-container-5 {
  align-items: center;
  display: flex;
  gap: 152px;
  min-width: 1600px;
  position: relative;
}

.frame-2589 {
  align-items: center;
  display: flex;
  gap: 224px;
  min-width: 1168px;
}

.download-1 {
  height: 121px;
  object-fit: cover;
  width: 240px;
}

.download-1-1 {
  height: 63px;
  width: 240px;
}

.visma_net-1 {
  height: 93px;
  object-fit: cover;
  width: 240px;
}

.pricing {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 1px;
  margin-top: 143px;
  min-height: 84px;
  min-width: 197px;
  text-align: center;
}

.frame-2597 {
  align-items: flex-start;
  border-radius: 18px;
  display: flex;
  margin-top: 57px;
  overflow: hidden;
  width: 384px;
}

.frame-2595 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  display: flex;
  height: 64px;
  min-width: 192px;
  padding: 15px 40.5px;
}

.flexible-plan {
  letter-spacing: 0;
  line-height: 32px;
  min-width: 111px;
  text-align: center;
  white-space: nowrap;
}

.frame-2596 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  min-width: 192px;
  padding: 15px 50.5px;
}

.fixed-plan {
  letter-spacing: 0;
  line-height: 32px;
  min-width: 91px;
  text-align: center;
  white-space: nowrap;
}

.frame-2594 {
  align-items: flex-start;
  display: flex;
  gap: 48px;
  margin-top: 80px;
  min-width: 1600px;
}

.frame-2574-1 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 48px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  height: 784px;
  overflow: hidden;
  padding: 64px 48px;
  position: relative;
  width: 501px;
}

.frame-2598 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 240px;
  position: relative;
  width: 405px;
}

.frame-2571-1 {
  align-items: flex-start;
  background-color: var(--ebony);
  border-radius: 48px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  height: 784px;
  overflow: hidden;
  padding: 64px 47.7px;
  position: relative;
  width: 501px;
}

.frame-2599 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-height: 148px;
  width: 405px;
}

.pro-package {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 36px;
  width: 405px;
}

.x1200-month {
  letter-spacing: 0;
  line-height: 72px;
  width: 405px;
}

.span0-1 {
  color: var(--white);
  font-family: var(--font-family-poppins-bold);
  font-size: 72px;
  font-weight: 700;
}

.span1 {
  color: var(--comet);
  font-family: var(--font-family-poppins);
  font-size: 32px;
  font-weight: 400;
}

.frame-2575-2 {
  align-items: flex-end;
  background-color: var(--white);
  border-radius: 48px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  height: 784px;
  overflow: hidden;
  padding: 64px 48px;
  position: relative;
  width: 501px;
}

.frame-2598-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 308px;
  position: relative;
  width: 405px;
}

.frequently-asked-questions {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 283px;
  min-height: 84px;
  min-width: 794px;
  text-align: center;
}

.frame-2605 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 31px;
  height: 272px;
  margin-top: 81px;
  overflow: hidden;
  padding: 32px 0;
  width: 1104px;
}

.frame-2603 {
  align-items: flex-start;
  border-radius: 28px;
  display: flex;
  gap: 108px;
  height: 36px;
  min-width: 992px;
  position: relative;
}

.do-you-have-a-setup-cost {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 36px;
  width: 848px;
}

.lorem-ipsum-dolor-si-5 {
  letter-spacing: 0;
  line-height: 32px;
  min-height: 128px;
  width: 992px;
}

.frame-2608 {
  align-items: flex-start;
  background-color: var(--ebony);
  display: flex;
  height: 848px;
  margin-top: 189px;
  overflow: hidden;
  width: 1920px;
}

.overlap-group7-1 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--mineral-green);
  border-radius: 620px;
  display: flex;
  gap: 80px;
  height: 1240px;
  justify-content: flex-end;
  margin-bottom: -309px;
  margin-left: -360px;
  min-width: 1240px;
  padding: 219px 101px;
}

.ellipse-101-1 {
  background-color: var(--chetwode-blue);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  width: 224px;
}

.frame-2609 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 73px;
  margin-top: 52px;
  min-height: 472px;
  width: 603px;
}

.seamlessly-interact {
  letter-spacing: 0;
  line-height: 56px;
  margin-top: -1px;
  min-height: 336px;
  width: 603px;
}

.button-131 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 64px;
  min-width: 184px;
  padding: 19px 29.5px;
  transition: all 0.15s ease;
}

.home-1-2 {
  align-self: center;
  height: 500px;
  margin-left: 51px;
  object-fit: cover;
  width: 746px;
}

.ellipse-container {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 297px;
  margin-left: 44px;
  margin-top: -83px;
  min-height: 771px;
  width: 268px;
}

.ellipse-100-1 {
  background-color: var(--caribbean-green-2);
  border-radius: 125px;
  height: 250px;
  width: 250px;
}

.ellipse-102 {
  align-self: flex-end;
  background-color: var(--chetwode-blue);
  border-radius: 112px;
  filter: blur(400px);
  height: 224px;
  width: 224px;
}
</style>
