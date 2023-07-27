<template>
  <div class="container-center-horizontal">
    <form class="invoices-u47-detail-u47-invoice screen" name="form40" action="form40" method="post">
      <left-navigation-menu82 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-200">
        <div class="flex-col-201">
          <top-navigation
            :className="topNavigationProps.className"
            :languageProps="topNavigationProps.languageProps"
            :userProfileProps="topNavigationProps.userProfileProps"
          />
          <div class="header-96">
            <a href="javascript:SubmitForm('form40')">
              <div class="button-249">
                <img class="chevron-left-24" :src="chevronLeft" alt="Chevron Left" />
                <div class="text-384 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                </div>
              </div></a
            >
            <div class="page-header-80 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-manatee-20px">{{ spanText2 }}</span
              ><span class="poppins-semi-bold-ebony-20px">{{ spanText3 }}</span>
            </div>
          </div>
          <div class="tab-50">
            <tab-menu722 />
            <tab-menu522
              :rules="tabMenu5Props.rules"
              :spanText="tabMenu5Props.spanText"
              :className="tabMenu5Props.className"
            />
            <tab-menu222
              :general="tabMenu2Props.general"
              :spanText="tabMenu2Props.spanText"
              :className="tabMenu2Props.className"
            />
          </div>
          <img class="line-701-52" :src="line701" alt="Line 701" />
        </div>
        <div class="flex-row-193">
          <img class="image-202-5" :src="image202" alt="image 202" />
          <div class="flex-col-202">
            <div class="button-250">
              <img class="refresh-8" :src="refresh" alt="Refresh" />
              <div class="text-385 poppins-medium-white-14px">
                <span class="poppins-medium-white-14px">{{ spanText4 }}</span>
              </div>
            </div>
            <div class="options-4">
              <dropdown-item2 :payment="dropdownItem21Props.payment" :spanText="dropdownItem21Props.spanText" />
              <dropdown-item2
                :payment="dropdownItem22Props.payment"
                :spanText="dropdownItem22Props.spanText"
                :className="dropdownItem22Props.className"
              />
              <dropdown-item2
                :payment="dropdownItem23Props.payment"
                :spanText="dropdownItem23Props.spanText"
                :className="dropdownItem23Props.className"
              />
              <dropdown-item2
                :payment="dropdownItem24Props.payment"
                :spanText="dropdownItem24Props.spanText"
                :className="dropdownItem24Props.className"
              />
              <dropdown-item2
                :payment="dropdownItem25Props.payment"
                :spanText="dropdownItem25Props.spanText"
                :className="dropdownItem25Props.className"
              />
            </div>
            <div class="information-20">
              <div class="flex-row-194">
                <div class="header-97">
                  <frame2443 :src="frame2443Props.src" />
                  <div class="title-106 poppins-semi-bold-ebony-20px">
                    <span class="poppins-semi-bold-ebony-20px">{{ spanText5 }}</span>
                  </div>
                </div>
                <div class="button-251">
                  <a href="javascript:SubmitForm('form40')">
                    <div class="text-386 poppins-medium-caribbean-green-14px">
                      <span class="poppins-medium-caribbean-green-14px">{{ spanText6 }}</span>
                    </div>
                  </a>
                </div>
              </div>
              <frame24814 :spanText1="frame24811Props.spanText1" />
              <frame24814 :spanText1="frame24812Props.spanText1" :className="frame24812Props.className" />
              <frame24814 :spanText1="frame24813Props.spanText1" :className="frame24813Props.className" />
              <frame24814 :spanText1="frame24814Props.spanText1" :className="frame24814Props.className" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu82 from "./LeftNavigationMenu82";
import TopNavigation from "./TopNavigation";
import TabMenu722 from "./TabMenu722";
import TabMenu522 from "./TabMenu522";
import TabMenu222 from "./TabMenu222";
import DropdownItem2 from "./DropdownItem2";
import Frame2443 from "./Frame2443";
import Frame24814 from "./Frame24814";
export default {
  name: "InvoicesDetailInvoice",
  components: {
    LeftNavigationMenu82,
    TopNavigation,
    TabMenu722,
    TabMenu522,
    TabMenu222,
    DropdownItem2,
    Frame2443,
    Frame24814,
  },
  props: [
    "chevronLeft",
    "spanText1",
    "spanText2",
    "spanText3",
    "line701",
    "image202",
    "refresh",
    "spanText4",
    "spanText5",
    "spanText6",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "tabMenu5Props",
    "tabMenu2Props",
    "dropdownItem21Props",
    "dropdownItem22Props",
    "dropdownItem23Props",
    "dropdownItem24Props",
    "dropdownItem25Props",
    "frame2443Props",
    "frame24811Props",
    "frame24812Props",
    "frame24813Props",
    "frame24814Props",
  ],
};
</script>

<style>
.invoices-u47-detail-u47-invoice {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 1387px;
  position: relative;
  width: 1440px;
}

.flex-col-200 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 39px;
  min-height: 1320px;
  width: 1216px;
}

.flex-col-201 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 209px;
  position: relative;
  width: 1216px;
}

.header-96 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 304px;
}

.button-249 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
  width: 87px;
}

.button-249:hover,
.button-250:hover,
.button-251:hover {
  transform: translate(0, -5px);
}

.chevron-left-24,
.refresh-8 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-384 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-80 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  white-space: nowrap;
}

.tab-50 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 384px;
  position: relative;
}

.line-701-52 {
  align-self: center;
  height: 1px;
  width: 1152px;
}

.flex-row-193 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  min-width: 1152px;
}

.image-202-5 {
  height: 1072px;
  object-fit: cover;
  width: 776px;
}

.flex-col-202 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 560px;
  width: 352px;
}

.button-250 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 352px;
  padding: 8.5px 108.5px;
  transition: all 0.15s ease;
}

.text-385 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 107px;
  text-align: center;
}

.options-4 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 232px;
  overflow: hidden;
  padding: 20px 0;
  position: relative;
  width: 352px;
}

.information-20 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 240px;
  overflow: hidden;
  padding: 24px 0;
  position: relative;
  width: 352px;
}

.flex-row-194 {
  align-items: center;
  display: flex;
  gap: 129px;
  min-width: 288px;
}

.header-97 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  min-width: 112px;
  position: relative;
}

.title-106 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.button-251 {
  align-items: flex-start;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 21px;
  margin-bottom: 1px;
  min-width: 47px;
  transition: all 0.15s ease;
}

.text-386 {
  cursor: pointer;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 47px;
  text-align: center;
}
</style>
