<template>
  <div class="container-center-horizontal">
    <div class="home-u47-resources screen">
      <left-navigation-menu9 v-bind="leftNavigationMenu9Props" />
      <div class="overlap-group4-2">
        <div class="overlap-group7-2">
          <div class="overlap-group6-2">
            <div class="overlap-group5-2">
              <div class="overlap-group3-5">
                <top-navigation
                  :className="topNavigationProps.className"
                  :languageProps="topNavigationProps.languageProps"
                  :userProfileProps="topNavigationProps.userProfileProps"
                />
                <div class="subscriptions-2">
                  <header16 :frame2443Props="header16Props.frame2443Props" />
                  <div class="flex-row-313">
                    <h1 class="number-120 poppins-semi-bold-purple-heart-32px">
                      <span class="poppins-semi-bold-purple-heart-32px">{{ spanText1 }}</span>
                    </h1>
                    <div class="total-subscribers-1 poppins-normal-comet-13px">
                      <span class="poppins-normal-comet-13px">{{ spanText2 }}</span>
                    </div>
                  </div>
                  <frame2454 :className="frame2454Props.className" />
                  <frame2458 />
                </div>
                <div class="frame-2471">
                  <dropdown-item3 :guide="dropdownItem31Props.guide" :spanText="dropdownItem31Props.spanText" />
                  <dropdown-item3
                    :guide="dropdownItem32Props.guide"
                    :spanText="dropdownItem32Props.spanText"
                    :className="dropdownItem32Props.className"
                  />
                </div>
                <div class="frame-2472">
                  <dropdown-item4 :children="dropdownItem41Props.children" />
                  <dropdown-item4 :children="dropdownItem42Props.children" :className="dropdownItem42Props.className" />
                  <dropdown-item4 :children="dropdownItem43Props.children" :className="dropdownItem43Props.className" />
                  <dropdown-item4 :children="dropdownItem44Props.children" :className="dropdownItem44Props.className" />
                </div>
              </div>
              <div class="page-header-108 poppins-semi-bold-ebony-28px">
                <span class="poppins-semi-bold-ebony-28px">{{ spanText3 }}</span
                ><span class="poppins-semi-bold-caribbean-green-28px">{{ spanText4 }}</span>
              </div>
              <open-invoices
                :className="openInvoicesProps.className"
                :frame2443Props="openInvoicesProps.frame2443Props"
              />
            </div>
            <best-customers :frame2443Props="bestCustomersProps.frame2443Props" />
          </div>
          <sales
            :frame2443Props="salesProps.frame2443Props"
            :frame24461Props="salesProps.frame24461Props"
            :frame24462Props="salesProps.frame24462Props"
            :frame24463Props="salesProps.frame24463Props"
            :frame24464Props="salesProps.frame24464Props"
          />
        </div>
        <most-sold-products :frame2443Props="mostSoldProductsProps.frame2443Props" />
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu9 from "./LeftNavigationMenu9";
import TopNavigation from "./TopNavigation";
import Header16 from "./Header16";
import Frame2454 from "./Frame2454";
import Frame2458 from "./Frame2458";
import DropdownItem3 from "./DropdownItem3";
import DropdownItem4 from "./DropdownItem4";
import OpenInvoices from "./OpenInvoices";
import BestCustomers from "./BestCustomers";
import Sales from "./Sales";
import MostSoldProducts from "./MostSoldProducts";
export default {
  name: "HomeResources",
  components: {
    LeftNavigationMenu9,
    TopNavigation,
    Header16,
    Frame2454,
    Frame2458,
    DropdownItem3,
    DropdownItem4,
    OpenInvoices,
    BestCustomers,
    Sales,
    MostSoldProducts,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "leftNavigationMenu9Props",
    "topNavigationProps",
    "header16Props",
    "frame2454Props",
    "dropdownItem31Props",
    "dropdownItem32Props",
    "dropdownItem41Props",
    "dropdownItem42Props",
    "dropdownItem43Props",
    "dropdownItem44Props",
    "openInvoicesProps",
    "bestCustomersProps",
    "salesProps",
    "mostSoldProductsProps",
  ],
};
</script>

<style>
.home-u47-resources {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.overlap-group4-2 {
  height: 916px;
  position: relative;
  width: 1216px;
}

.overlap-group7-2 {
  height: 916px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1216px;
}

.overlap-group6-2 {
  height: 670px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1216px;
}

.overlap-group5-2 {
  height: 524px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1216px;
}

.overlap-group3-5 {
  height: 424px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1216px;
}

.subscriptions-2 {
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

.flex-row-313 {
  align-items: center;
  display: flex;
  gap: 8px;
  height: 48px;
  margin-top: 15px;
  min-width: 181px;
}

.number-120 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 48px;
  min-width: 61px;
}

.total-subscribers-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 2px;
  min-height: 20px;
  min-width: 112px;
}

.frame-2471 {
  align-items: center;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  gap: 2px;
  left: 680px;
  min-height: 90px;
  padding: 12px 0;
  position: absolute;
  top: 48px;
  width: 200px;
}

.frame-2472 {
  align-items: center;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  gap: 2px;
  left: 868px;
  min-height: 158px;
  padding: 12px 0;
  position: absolute;
  top: 60px;
  width: 224px;
}

.page-header-108 {
  left: 32px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}
</style>
