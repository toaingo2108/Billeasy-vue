<template>
  <div class="container-center-horizontal">
    <div class="home-u47-notification screen">
      <left-navigation-menu9 v-bind="leftNavigationMenu9Props" />
      <div class="overlap-group4-3">
        <div class="overlap-group3-6">
          <top-navigation
            :className="topNavigationProps.className"
            :languageProps="topNavigationProps.languageProps"
            :userProfileProps="topNavigationProps.userProfileProps"
          />
          <open-invoices :className="openInvoicesProps.className" :frame2443Props="openInvoicesProps.frame2443Props" />
          <sales
            :frame2443Props="salesProps.frame2443Props"
            :frame24461Props="salesProps.frame24461Props"
            :frame24462Props="salesProps.frame24462Props"
            :frame24463Props="salesProps.frame24463Props"
            :frame24464Props="salesProps.frame24464Props"
          />
          <div class="subscriptions-3">
            <header16 :frame2443Props="header16Props.frame2443Props" />
            <div class="flex-row-322">
              <h1 class="number-121 poppins-semi-bold-purple-heart-32px">
                <span class="poppins-semi-bold-purple-heart-32px">{{ spanText1 }}</span>
              </h1>
              <div class="total-subscribers-2 poppins-normal-comet-13px">
                <span class="poppins-normal-comet-13px">{{ spanText2 }}</span>
              </div>
            </div>
            <frame2454 :className="frame2454Props.className" />
            <div class="frame-2458-2">
              <div class="frame-2456-2">
                <div class="x-month-2 poppins-normal-ebony-13px">
                  <span class="poppins-normal-ebony-13px">{{ spanText3 }}</span>
                </div>
                <div class="frame-2455-4">
                  <div class="x-new-2 poppins-semi-bold-green-13px">
                    <span class="poppins-semi-bold-green-13px">{{ spanText4 }}</span
                    ><span class="poppins-normal-comet-13px">{{ spanText5 }}</span>
                  </div>
                  <div class="x-cancels-2 poppins-semi-bold-alizarin-crimson-13px">
                    <span class="poppins-semi-bold-alizarin-crimson-13px">{{ spanText6 }}</span
                    ><span class="poppins-normal-comet-13px">{{ spanText7 }}</span>
                  </div>
                </div>
              </div>
              <div class="frame-2457-2">
                <div class="x-month-2 poppins-normal-ebony-13px">
                  <span class="poppins-normal-ebony-13px">{{ spanText8 }}</span>
                </div>
                <div class="frame-2455-5">
                  <div class="x-new-2 poppins-semi-bold-green-13px">
                    <span class="poppins-semi-bold-green-13px">{{ spanText9 }}</span
                    ><span class="poppins-normal-comet-13px">{{ spanText10 }}</span>
                  </div>
                  <div class="x-cancels-2 poppins-semi-bold-alizarin-crimson-13px">
                    <span class="poppins-semi-bold-alizarin-crimson-13px">{{ spanText11 }}</span
                    ><span class="poppins-semi-bold-alizarin-crimson-13px">{{ spanText12 }}</span
                    ><span class="poppins-semi-bold-alizarin-crimson-13px">{{ spanText13 }}</span
                    ><span class="poppins-normal-comet-13px">{{ spanText14 }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <best-customers :frame2443Props="bestCustomersProps.frame2443Props" />
          <div class="notification-1">
            <div class="flex-row-323">
              <div class="title-200 poppins-semi-bold-ebony-20px">
                <span class="poppins-semi-bold-ebony-20px">{{ spanText15 }}</span>
              </div>
              <div class="frame-2466">
                <div class="title-201 poppins-medium-white-12px">
                  <span class="poppins-medium-white-12px">{{ spanText16 }}</span>
                </div>
              </div>
              <div class="input-199">
                <img class="search-66" :src="search" alt="Search" /><input
                  class="input-text-303 poppins-normal-manatee-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder"
                  :type="inputType"
                />
              </div>
            </div>
            <div class="frame-2460">
              <div class="tab-menu-210">
                <div class="label-552 poppins-medium-caribbean-green-14px">
                  <span class="poppins-medium-caribbean-green-14px">{{ spanText17 }}</span>
                </div>
                <div class="rectangle-6502-81"></div>
              </div>
              <div class="label-553 poppins-medium-manatee-14px">
                <span class="poppins-medium-manatee-14px">{{ spanText18 }}</span>
              </div>
              <div class="label-554 poppins-medium-manatee-14px">
                <span class="poppins-medium-manatee-14px">{{ spanText19 }}</span>
              </div>
              <div class="label-555 poppins-medium-manatee-14px">
                <span class="poppins-medium-manatee-14px">{{ spanText20 }}</span>
              </div>
            </div>
            <img class="line-678-8" :src="line678" alt="Line 678" />
            <div class="frame-2468">
              <div class="frame-2467">
                <frame2463 :frame2443Props="frame24631Props.frame2443Props" />
                <img class="line-6-1" :src="line679" alt="Line 679" /><frame2463
                  :className="frame24632Props.className"
                  :frame2443Props="frame24632Props.frame2443Props"
                />
                <img class="line-6-1" :src="line680" alt="Line 680" /><frame2463
                  :className="frame24633Props.className"
                  :frame2443Props="frame24633Props.frame2443Props"
                />
                <img class="line-6-1" :src="line681" alt="Line 681" /><frame2463
                  :className="frame24634Props.className"
                  :frame2443Props="frame24634Props.frame2443Props"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="page-header-109 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText21 }}</span
          ><span class="poppins-semi-bold-caribbean-green-28px">{{ spanText22 }}</span>
        </div>
        <most-sold-products :frame2443Props="mostSoldProductsProps.frame2443Props" />
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu9 from "./LeftNavigationMenu9";
import TopNavigation from "./TopNavigation";
import OpenInvoices from "./OpenInvoices";
import Sales from "./Sales";
import Header16 from "./Header16";
import Frame2454 from "./Frame2454";
import BestCustomers from "./BestCustomers";
import Frame2463 from "./Frame2463";
import MostSoldProducts from "./MostSoldProducts";
export default {
  name: "HomeNotification",
  components: {
    LeftNavigationMenu9,
    TopNavigation,
    OpenInvoices,
    Sales,
    Header16,
    Frame2454,
    BestCustomers,
    Frame2463,
    MostSoldProducts,
  },
  props: [
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
    "spanText12",
    "spanText13",
    "spanText14",
    "spanText15",
    "spanText16",
    "search",
    "inputType",
    "inputPlaceholder",
    "spanText17",
    "spanText18",
    "spanText19",
    "spanText20",
    "line678",
    "line679",
    "line680",
    "line681",
    "spanText21",
    "spanText22",
    "leftNavigationMenu9Props",
    "topNavigationProps",
    "openInvoicesProps",
    "salesProps",
    "header16Props",
    "frame2454Props",
    "bestCustomersProps",
    "frame24631Props",
    "frame24632Props",
    "frame24633Props",
    "frame24634Props",
    "mostSoldProductsProps",
  ],
};
</script>

<style>
.home-u47-notification {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.overlap-group4-3 {
  height: 916px;
  position: relative;
  width: 1216px;
}

.overlap-group3-6 {
  height: 916px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1216px;
}

.subscriptions-3 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 248px;
  left: 736px;
  overflow: hidden;
  padding: 24px 32px;
  position: absolute;
  top: 176px;
  width: 448px;
}

.flex-row-322 {
  align-items: center;
  display: flex;
  gap: 8px;
  height: 48px;
  margin-top: 15px;
  min-width: 181px;
}

.number-121 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 48px;
  min-width: 61px;
}

.total-subscribers-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 2px;
  min-height: 20px;
  min-width: 112px;
}

.frame-2458-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 28px;
  min-height: 48px;
  width: 262px;
}

.frame-2456-2 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 257px;
}

.x-month-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 112px;
}

.frame-2455-4 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 20px;
  min-width: 137px;
}

.x-new-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  min-width: 55px;
}

.x-cancels-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
}

.frame-2457-2 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 262px;
}

.frame-2455-5 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 20px;
  min-width: 142px;
}

.notification-1 {
  align-items: center;
  background-color: var(--white);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 504px;
  left: 576px;
  overflow: hidden;
  position: absolute;
  top: 48px;
  width: 640px;
}

.flex-row-323 {
  align-items: center;
  display: flex;
  margin-top: 30px;
  min-width: 576px;
}

.title-200 {
  letter-spacing: 0;
  line-height: 28px;
  margin-bottom: 2px;
  min-width: 130px;
  white-space: nowrap;
}

.frame-2466 {
  align-items: flex-start;
  background-color: var(--west-side);
  border-radius: 100px;
  display: flex;
  height: 24px;
  margin-left: 12px;
  overflow: hidden;
  padding: 2px 6px;
  width: 56px;
}

.title-201 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
  min-width: 44px;
  text-align: center;
}

.input-199 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 32px;
  margin-left: 234px;
  overflow: hidden;
  padding: 3px 12px;
  width: 144px;
}

.search-66 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-303 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 92px;
}

.input-text-303::placeholder {
  color: #8a8aa899;
}

.frame-2460 {
  align-items: center;
  align-self: flex-start;
  display: flex;
  height: 40px;
  margin-left: 32px;
  margin-top: 22px;
  min-width: 338px;
}

.tab-menu-210 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 50px;
}

.label-552 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 9px;
  min-width: 18px;
  white-space: nowrap;
}

.rectangle-6502-81 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 50px;
}

.label-553 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 22px;
  min-width: 52px;
  white-space: nowrap;
}

.label-554 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 52px;
  min-width: 37px;
  white-space: nowrap;
}

.label-555 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 46px;
  min-width: 63px;
  white-space: nowrap;
}

.line-678-8 {
  height: 1px;
  width: 576px;
}

.frame-2468 {
  align-items: flex-end;
  display: flex;
  height: 372px;
  margin-top: 15px;
  overflow: hidden;
  width: 576px;
}

.frame-2467 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 420px;
  margin-bottom: -64px;
  position: relative;
  width: 576px;
}

.line-6-1 {
  height: 1px;
  margin-top: 24px;
  width: 576px;
}

.page-header-109 {
  left: 32px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}
</style>
