<template>
  <div class="container-center-horizontal">
    <form class="home-1070 screen" name="form106" action="form106" method="post">
      <left-navigation-menu9 v-bind="leftNavigationMenu9Props" />
      <div class="flex-col-261">
        <div class="flex-col-262">
          <div class="top-navigation-2">
            <img class="line-220" :src="line1" alt="Line" /><a href="javascript:SubmitForm('form106')"
              ><img class="link" :src="support" alt="Support" /></a
            ><img class="line-219" :src="line2" alt="Line" /><a href="javascript:SubmitForm('form106')"
              ><img class="link" :src="notification" alt="Notification" /></a
            ><img class="line-219" :src="line3" alt="Line" /><language :chevronDown="languageProps.chevronDown" />
            <img class="line-219" :src="line4" alt="Line" /><user-profile :chevronDown="userProfileProps.chevronDown" />
          </div>
          <h1 class="page-header-107 poppins-semi-bold-ebony-28px">
            <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span
            ><span class="poppins-semi-bold-caribbean-green-28px">{{ spanText2 }}</span>
          </h1>
        </div>
        <div class="flex-row-300">
          <div class="flex-col-263">
            <open-invoices :frame2443Props="openInvoicesProps.frame2443Props" />
            <div class="sales-9">
              <div class="flex-col-264">
                <div class="flex-row-301">
                  <div class="header-145">
                    <frame2443 :src="frame2443Props.src" :className="frame2443Props.className" />
                    <div class="frame-2445">
                      <div class="title-148 poppins-semi-bold-ebony-20px">
                        <span class="poppins-semi-bold-ebony-20px">{{ spanText3 }}</span>
                      </div>
                      <div class="title-149 poppins-semi-bold-manatee-13px">
                        <span class="poppins-semi-bold-manatee-13px">{{ spanText4 }}</span>
                      </div>
                    </div>
                    <img class="info-7" :src="info1" alt="Info" />
                  </div>
                  <div class="toggle-action-2">
                    <div class="net poppins-medium-cadet-blue-14px">
                      <span class="poppins-medium-cadet-blue-14px">{{ spanText5 }}</span>
                    </div>
                    <toggle />
                    <div class="surname-1 poppins-medium-ebony-14px">
                      <span class="poppins-medium-ebony-14px">{{ spanText6 }}</span>
                    </div>
                  </div>
                </div>
                <div class="frame-2448">
                  <frame2446 :spanText1="frame24461Props.spanText1" :spanText2="frame24461Props.spanText2" />
                  <frame2446 :spanText1="frame24462Props.spanText1" :spanText2="frame24462Props.spanText2" />
                  <frame2446 :spanText1="frame24463Props.spanText1" :spanText2="frame24463Props.spanText2" />
                  <frame2446 :spanText1="frame24464Props.spanText1" :spanText2="frame24464Props.spanText2" />
                </div>
              </div>
              <div class="flex-row-302">
                <div class="title-container-1 poppins-normal-ebony-12px">
                  <div class="title-142">
                    <span class="poppins-normal-ebony-12px">{{ spanText7 }}</span>
                  </div>
                  <div class="title-142">
                    <span class="poppins-normal-ebony-12px">{{ spanText8 }}</span>
                  </div>
                  <div class="title-150">
                    <span class="poppins-normal-ebony-12px">{{ spanText9 }}</span>
                  </div>
                  <div class="title-151">
                    <span class="poppins-normal-ebony-12px">{{ spanText10 }}</span>
                  </div>
                </div>
                <div class="flex-col-265">
                  <div class="overlap-group-76">
                    <img class="line-613-20" :src="line613" alt="Line 613" /><img
                      class="line-614-3"
                      :src="line614"
                      alt="Line 614"
                    /><img class="line-615" :src="line615" alt="Line 615" />
                    <div class="frame-2450">
                      <div class="rectangle-6488"></div>
                      <div class="rectangle-6489"></div>
                      <div class="rectangle-6490"></div>
                      <div class="rectangle-6491"></div>
                      <div class="rectangle-6492"></div>
                      <div class="rectangle-6493"></div>
                      <div class="rectangle-6494-26"></div>
                      <div class="rectangle-6495-26"></div>
                      <div class="rectangle-6496-2"></div>
                      <div class="rectangle-6497-2"></div>
                      <div class="rectangle-6498-2"></div>
                      <div class="rectangle-6499-3"></div>
                    </div>
                  </div>
                  <img class="line-612" :src="line612" alt="Line 612" />
                  <div class="title-152 poppins-normal-ebony-12px">
                    <span class="poppins-normal-ebony-12px">{{ spanText11 }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-col-266">
            <div class="subscriptions-1">
              <div class="header-146">
                <a href="javascript:SubmitForm('form106')">
                  <div class="frame-2443-25">
                    <img class="subscription-143" :src="subscription" alt="Subscription" /></div
                ></a>
                <div class="title-153 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText12 }}</span>
                </div>
                <img class="info-6" :src="info2" alt="Info" />
              </div>
              <div class="flex-row-303">
                <div class="number-101 poppins-semi-bold-purple-heart-24px">
                  <span class="poppins-semi-bold-purple-heart-24px">{{ spanText13 }}</span>
                </div>
                <div class="total-subscribers poppins-normal-comet-13px">
                  <span class="poppins-normal-comet-13px">{{ spanText14 }}</span>
                </div>
              </div>
              <frame2454 />
              <frame2458 />
            </div>
            <div class="flex-col-item-2">
              <div class="header-147">
                <a href="javascript:SubmitForm('form106')">
                  <div class="frame-2443-25"><img class="customer-122" :src="customer" alt="Customer" /></div
                ></a>
                <div class="title-154 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText15 }}</span>
                </div>
                <img class="info-6" :src="info3" alt="Info" />
              </div>
              <div class="flex-row-299">
                <div class="flex-col-267 poppins-normal-ebony-13px">
                  <div class="name-236">
                    <span class="poppins-normal-ebony-13px">{{ spanText16 }}</span>
                  </div>
                  <div class="name-237">
                    <span class="poppins-normal-ebony-13px">{{ spanText17 }}</span>
                  </div>
                  <div class="zara-smith">
                    <span class="poppins-normal-ebony-13px">{{ spanText18 }}</span>
                  </div>
                </div>
                <div class="overlap-group1-16">
                  <img class="line-672" :src="line6721" alt="Line 672" /><img
                    class="line-673"
                    :src="line6731"
                    alt="Line 673"
                  /><img class="line-674" :src="line6741" alt="Line 674" /><img
                    class="line-675"
                    :src="line6751"
                    alt="Line 675"
                  /><img class="line-676" :src="line6761" alt="Line 676" />
                  <div class="rectangle-6499-2"></div>
                  <div class="rectangle-6500-2"></div>
                  <div class="rectangle-6501-2"></div>
                </div>
                <img class="line-677" :src="line6771" alt="Line 677" />
              </div>
              <div class="title-container poppins-semi-bold-comet-11px">
                <div class="title-143">
                  <span class="poppins-semi-bold-comet-11px">{{ spanText19 }}</span>
                </div>
                <div class="title-144">
                  <span class="poppins-semi-bold-comet-11px">{{ spanText20 }}</span>
                </div>
                <div class="title-145">
                  <span class="poppins-semi-bold-comet-11px">{{ spanText21 }}</span>
                </div>
                <div class="title-146">
                  <span class="poppins-semi-bold-comet-11px">{{ spanText22 }}</span>
                </div>
                <div class="title-147">
                  <span class="poppins-semi-bold-comet-11px">{{ spanText23 }}</span>
                </div>
                <div class="title-147">
                  <span class="poppins-semi-bold-comet-11px">{{ spanText24 }}</span>
                </div>
              </div>
            </div>
            <div class="flex-col-item-2">
              <div class="header-148">
                <a href="javascript:SubmitForm('form106')">
                  <div class="frame-2443-25"><img class="products-132" :src="products" alt="Products" /></div
                ></a>
                <div class="title-155 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText25 }}</span>
                </div>
                <img class="info-6" :src="info4" alt="Info" />
              </div>
              <div class="flex-row-299">
                <div class="flex-col-268 poppins-normal-ebony-13px">
                  <div class="blue-t-shirt">
                    <span class="poppins-normal-ebony-13px">{{ spanText26 }}</span>
                  </div>
                  <div class="place-139">
                    <span class="poppins-normal-ebony-13px">{{ spanText27 }}</span>
                  </div>
                  <div class="tv">
                    <span class="poppins-normal-ebony-13px">{{ spanText28 }}</span>
                  </div>
                </div>
                <div class="overlap-group2-11">
                  <img class="line-672" :src="line6722" alt="Line 672" /><img
                    class="line-673"
                    :src="line6732"
                    alt="Line 673"
                  /><img class="line-674" :src="line6742" alt="Line 674" /><img
                    class="line-675"
                    :src="line6752"
                    alt="Line 675"
                  /><img class="line-676" :src="line6762" alt="Line 676" />
                  <div class="rectangle-6499-2"></div>
                  <div class="rectangle-6500-2"></div>
                  <div class="rectangle-6501-2"></div>
                </div>
                <img class="line-677" :src="line6772" alt="Line 677" />
              </div>
              <div class="title-container poppins-semi-bold-comet-11px">
                <div class="title-143">
                  <span class="poppins-semi-bold-comet-11px">{{ spanText29 }}</span>
                </div>
                <div class="title-144">
                  <span class="poppins-semi-bold-comet-11px">{{ spanText30 }}</span>
                </div>
                <div class="title-145">
                  <span class="poppins-semi-bold-comet-11px">{{ spanText31 }}</span>
                </div>
                <div class="title-146">
                  <span class="poppins-semi-bold-comet-11px">{{ spanText32 }}</span>
                </div>
                <div class="title-147">
                  <span class="poppins-semi-bold-comet-11px">{{ spanText33 }}</span>
                </div>
                <div class="title-147">
                  <span class="poppins-semi-bold-comet-11px">{{ spanText34 }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu9 from "./LeftNavigationMenu9";
import Language from "./Language";
import UserProfile from "./UserProfile";
import OpenInvoices from "./OpenInvoices";
import Frame2443 from "./Frame2443";
import Toggle from "./Toggle";
import Frame2446 from "./Frame2446";
import Frame2454 from "./Frame2454";
import Frame2458 from "./Frame2458";
export default {
  name: "Home",
  components: {
    LeftNavigationMenu9,
    Language,
    UserProfile,
    OpenInvoices,
    Frame2443,
    Toggle,
    Frame2446,
    Frame2454,
    Frame2458,
  },
  props: [
    "line1",
    "support",
    "line2",
    "notification",
    "line3",
    "line4",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "info1",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "line613",
    "line614",
    "line615",
    "line612",
    "spanText11",
    "subscription",
    "spanText12",
    "info2",
    "spanText13",
    "spanText14",
    "customer",
    "spanText15",
    "info3",
    "spanText16",
    "spanText17",
    "spanText18",
    "line6721",
    "line6731",
    "line6741",
    "line6751",
    "line6761",
    "line6771",
    "spanText19",
    "spanText20",
    "spanText21",
    "spanText22",
    "spanText23",
    "spanText24",
    "products",
    "spanText25",
    "info4",
    "spanText26",
    "spanText27",
    "spanText28",
    "line6722",
    "line6732",
    "line6742",
    "line6752",
    "line6762",
    "line6772",
    "spanText29",
    "spanText30",
    "spanText31",
    "spanText32",
    "spanText33",
    "spanText34",
    "leftNavigationMenu9Props",
    "languageProps",
    "userProfileProps",
    "openInvoicesProps",
    "frame2443Props",
    "frame24461Props",
    "frame24462Props",
    "frame24463Props",
    "frame24464Props",
  ],
};
</script>

<style>
.home-1070 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-261 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 916px;
  width: 1216px;
}

.flex-col-262 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 135px;
  width: 1216px;
}

.top-navigation-2 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 64px;
  padding: 0 32px;
  position: relative;
  width: 1216px;
}

.line-220 {
  height: 32px;
  margin-left: 795px;
  width: 1px;
}

.link {
  cursor: pointer;
  height: 20px;
  margin-left: 15px;
  transition: all 0.15s ease;
  width: 20px;
}

.link:hover,
.frame-2443-25:hover {
  transform: translate(0, -5px);
}

.line-219 {
  height: 32px;
  margin-left: 16px;
  width: 1px;
}

.page-header-107 {
  letter-spacing: 0;
  line-height: 40px;
  margin-left: 32px;
  white-space: nowrap;
}

.flex-row-300 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 740px;
  min-width: 1152px;
}

.flex-col-263 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 740px;
  position: relative;
  width: 680px;
}

.sales-9 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  height: 368px;
  overflow: hidden;
  padding: 18px 0;
  width: 680px;
}

.flex-col-264 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin-top: 6px;
  min-height: 127px;
  width: 616px;
}

.flex-row-301 {
  align-items: flex-start;
  display: flex;
  gap: 316px;
  min-width: 616px;
}

.header-145 {
  align-items: center;
  display: flex;
  gap: 12px;
  min-width: 183px;
  position: relative;
}

.frame-2445 {
  align-items: flex-start;
  display: flex;
  gap: 6px;
  height: 28px;
  min-width: 113px;
}

.title-148 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  min-width: 55px;
  white-space: nowrap;
}

.title-149 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 20px;
  min-width: 52px;
}

.info-7 {
  height: 18px;
  width: 18px;
}

.toggle-action-2 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 21px;
  min-width: 117px;
  position: relative;
}

.net {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 24px;
}

.surname-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
}

.frame-2448 {
  align-items: flex-start;
  display: flex;
  gap: 19px;
  height: 47px;
  min-width: 616px;
  position: relative;
}

.flex-row-302 {
  align-items: center;
  display: flex;
  gap: 8px;
  height: 151px;
  margin-left: 1px;
  min-width: 615px;
}

.title-container-1 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 1px;
  min-height: 114px;
  width: 15px;
}

.title-142 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
  min-width: 15px;
  text-align: right;
}

.title-150 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
  min-width: 12px;
  text-align: right;
}

.title-151 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
  min-width: 8px;
  text-align: right;
}

.flex-col-265 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 151px;
  width: 592px;
}

.overlap-group-76 {
  height: 126px;
  position: relative;
  width: 592px;
}

.line-613-20 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 94px;
  width: 592px;
}

.line-614-3 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 62px;
  width: 592px;
}

.line-615 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 30px;
  width: 592px;
}

.frame-2450 {
  align-items: flex-end;
  display: flex;
  gap: 25px;
  height: 126px;
  left: 16px;
  min-width: 560px;
  position: absolute;
  top: 0;
}

.rectangle-6488 {
  background-color: var(--mystic);
  border-radius: 6px;
  height: 80px;
  width: 24px;
}

.rectangle-6489 {
  background-color: var(--mystic);
  border-radius: 6px;
  height: 98px;
  width: 24px;
}

.rectangle-6490 {
  background-color: var(--mischka);
  border-radius: 6px;
  height: 58px;
  width: 24px;
}

.rectangle-6491 {
  background-color: var(--mischka);
  border-radius: 6px;
  height: 73px;
  width: 24px;
}

.rectangle-6492 {
  background-color: var(--cadet-blue);
  border-radius: 6px;
  height: 38px;
  width: 24px;
}

.rectangle-6493 {
  background-color: var(--cadet-blue);
  border-radius: 6px;
  height: 93px;
  width: 24px;
}

.rectangle-6494-26 {
  background-color: var(--green);
  border-radius: 6px;
  height: 126px;
  width: 24px;
}

.rectangle-6495-26 {
  background-color: var(--cadet-blue);
  border-radius: 6px;
  height: 56px;
  width: 24px;
}

.rectangle-6496-2 {
  background-color: var(--cadet-blue);
  border-radius: 6px;
  height: 46px;
  width: 24px;
}

.rectangle-6497-2 {
  background-color: var(--mischka);
  border-radius: 6px;
  height: 68px;
  width: 24px;
}

.rectangle-6498-2 {
  background-color: var(--mischka);
  border-radius: 6px;
  height: 19px;
  width: 24px;
}

.rectangle-6499-3 {
  background-color: var(--mystic);
  border-radius: 6px;
  height: 104px;
  width: 24px;
}

.line-612 {
  height: 1px;
  width: 592px;
}

.title-152 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 47px;
  margin-top: 6px;
  min-height: 18px;
  min-width: 35px;
  text-align: right;
}

.flex-col-266 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 740px;
  width: 448px;
}

.subscriptions-1 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 248px;
  overflow: hidden;
  padding: 24px 32px;
  position: relative;
  width: 448px;
}

.header-146 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  min-width: 210px;
}

.frame-2443-25 {
  align-items: center;
  background-color: var(--mystic);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  height: 28px;
  overflow: hidden;
  padding: 0 6px;
  transition: all 0.15s ease;
  width: 28px;
}

.subscription-143,
.customer-122,
.products-132 {
  height: 16px;
  width: 16px;
}

.title-153 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  min-width: 140px;
  white-space: nowrap;
}

.info-6 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.flex-row-303 {
  align-items: center;
  display: flex;
  gap: 6px;
  height: 36px;
  margin-top: 23px;
  min-width: 164px;
}

.number-101 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 36px;
  min-width: 46px;
}

.total-subscribers {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 112px;
}

.flex-col-item-2 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 222px;
  overflow: hidden;
  padding: 19px 29px;
  width: 448px;
}

.header-147 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  margin-left: 3px;
  margin-top: 5px;
  min-width: 231px;
}

.title-154 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  min-width: 161px;
  white-space: nowrap;
}

.flex-row-299 {
  align-items: center;
  display: flex;
  margin-left: 3px;
  margin-top: 28px;
  min-width: 377px;
}

.flex-col-267 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 2px;
  min-height: 92px;
  width: 81px;
}

.name-236,
.name-237,
.zara-smith,
.blue-t-shirt,
.place-139,
.tv {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
}

.overlap-group1-16 {
  height: 100px;
  margin-left: 55px;
  position: relative;
  width: 240px;
}

.line-672 {
  height: 100px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1px;
}

.line-673 {
  height: 100px;
  left: 48px;
  position: absolute;
  top: 0;
  width: 1px;
}

.line-674 {
  height: 100px;
  left: 96px;
  position: absolute;
  top: 0;
  width: 1px;
}

.line-675 {
  height: 100px;
  left: 144px;
  position: absolute;
  top: 0;
  width: 1px;
}

.line-676 {
  height: 100px;
  left: 192px;
  position: absolute;
  top: 0;
  width: 1px;
}

.rectangle-6499-2 {
  background-color: var(--green);
  border-radius: 6px;
  height: 20px;
  left: 0;
  position: absolute;
  top: 6px;
  width: 240px;
}

.rectangle-6500-2 {
  background-color: var(--cadet-blue);
  border-radius: 6px;
  height: 20px;
  left: 0;
  position: absolute;
  top: 42px;
  width: 192px;
}

.rectangle-6501-2 {
  background-color: var(--mischka);
  border-radius: 6px;
  height: 20px;
  left: 0;
  position: absolute;
  top: 78px;
  width: 175px;
}

.line-677 {
  height: 100px;
  width: 1px;
}

.title-container {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  height: 17px;
  margin-top: 6px;
  min-width: 255px;
}

.title-143 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 17px;
  min-width: 8px;
  text-align: center;
}

.title-144 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 35px;
  min-height: 17px;
  min-width: 18px;
  text-align: center;
}

.title-145 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 29px;
  min-height: 17px;
  min-width: 20px;
  text-align: center;
}

.title-146 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 28px;
  min-height: 17px;
  min-width: 21px;
  text-align: center;
}

.title-147 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 27px;
  min-height: 17px;
  min-width: 21px;
  text-align: center;
}

.header-148 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  margin-left: 3px;
  margin-top: 5px;
  min-width: 264px;
}

.title-155 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  min-width: 194px;
  white-space: nowrap;
}

.flex-col-268 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 2px;
  min-height: 92px;
  width: 72px;
}

.overlap-group2-11 {
  height: 100px;
  margin-left: 64px;
  position: relative;
  width: 240px;
}
</style>
