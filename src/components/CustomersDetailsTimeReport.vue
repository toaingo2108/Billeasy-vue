<template>
  <div class="container-center-horizontal">
    <form class="customers-u47-details-u47-time-report screen" name="form91" action="form91" method="post">
      <left-navigation-menu5 v-bind="leftNavigationMenu5Props" />
      <div class="flex-col-248">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-285">
          <div class="flex-col-249">
            <div class="header-138">
              <a href="javascript:SubmitForm('form91')">
                <div class="button-287">
                  <img class="chevron-left-36" :src="chevronLeft" alt="Chevron Left" />
                  <div class="text-422 poppins-medium-ebony-14px">
                    <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                  </div>
                </div></a
              >
              <div class="page-header-100 poppins-semi-bold-ebony-20px">
                <span class="poppins-semi-bold-manatee-20px">{{ spanText2 }}</span
                ><span class="poppins-semi-bold-ebony-20px">{{ spanText3 }}</span>
              </div>
            </div>
            <information2
              :header5Props="information2Props.header5Props"
              :iconButton32Props="information2Props.iconButton32Props"
            />
            <statistics :frame2443Props="statisticsProps.frame2443Props" />
            <statistics2
              :frame2443Props="statistics2Props.frame2443Props"
              :frame2480Props="statistics2Props.frame2480Props"
              :iconButton32Props="statistics2Props.iconButton32Props"
            />
            <statistics3
              :frame2443Props="statistics3Props.frame2443Props"
              :iconButton32Props="statistics3Props.iconButton32Props"
            />
          </div>
          <div class="information-46">
            <frame24784
              :tabMenu241Props="frame24784Props.tabMenu241Props"
              :tabMenu26Props="frame24784Props.tabMenu26Props"
              :tabMenu242Props="frame24784Props.tabMenu242Props"
            />
            <img class="line-613-13" :src="line613" alt="Line 613" /><a
              href="javascript:SubmitForm('form91')"
              className="align-self-flex-end"
            >
              <div class="button-288">
                <img class="add-98" :src="add" alt="Add" />
                <div class="text-423 poppins-medium-white-14px">
                  <span class="poppins-medium-white-14px">{{ spanText4 }}</span>
                </div>
              </div></a
            ><table10
              :rowCustomersDetailsTimeReport1Props="table10Props.rowCustomersDetailsTimeReport1Props"
              :rowCustomersDetailsTimeReport21Prop="table10Props.rowCustomersDetailsTimeReport21Prop"
              :rowCustomersDetailsTimeReport2Props="table10Props.rowCustomersDetailsTimeReport2Props"
              :rowCustomersDetailsTimeReport22Prop="table10Props.rowCustomersDetailsTimeReport22Prop"
              :rowCustomersDetailsTimeReport3Props="table10Props.rowCustomersDetailsTimeReport3Props"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu5 from "./LeftNavigationMenu5";
import TopNavigation from "./TopNavigation";
import Information2 from "./Information2";
import Statistics from "./Statistics";
import Statistics2 from "./Statistics2";
import Statistics3 from "./Statistics3";
import Frame24784 from "./Frame24784";
import Table10 from "./Table10";
export default {
  name: "CustomersDetailsTimeReport",
  components: {
    LeftNavigationMenu5,
    TopNavigation,
    Information2,
    Statistics,
    Statistics2,
    Statistics3,
    Frame24784,
    Table10,
  },
  props: [
    "chevronLeft",
    "spanText1",
    "spanText2",
    "spanText3",
    "line613",
    "add",
    "spanText4",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "information2Props",
    "statisticsProps",
    "statistics2Props",
    "statistics3Props",
    "frame24784Props",
    "table10Props",
  ],
};
</script>

<style>
.customers-u47-details-u47-time-report {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 1540px;
  position: relative;
  width: 1440px;
}

.flex-col-248 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 1496px;
  position: relative;
  width: 1216px;
}

.flex-row-285 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 1400px;
  min-width: 1152px;
}

.flex-col-249 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1400px;
  position: relative;
  width: 480px;
}

.header-138 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  min-width: 279px;
}

.button-287 {
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

.button-287:hover,
.button-288:hover {
  transform: translate(0, -5px);
}

.chevron-left-36,
.add-98 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-422 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-100 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  white-space: nowrap;
}

.information-46 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  min-height: 740px;
  padding: 24px 0;
  position: relative;
  width: 648px;
}

.line-613-13 {
  height: 1px;
  width: 600px;
}

.button-288 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-right: 24px;
  margin-top: 23px;
  min-width: 136px;
  padding: 8.5px 13.5px;
  transition: all 0.15s ease;
}

.text-423 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 81px;
  text-align: center;
}
</style>
