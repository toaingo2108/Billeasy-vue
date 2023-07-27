<template>
  <div class="container-center-horizontal">
    <form class="customers-u47-details-u47-tou45dou39s screen" name="form98" action="form98" method="post">
      <left-navigation-menu5 v-bind="leftNavigationMenu5Props" />
      <div class="flex-col-257">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-293">
          <div class="flex-col-258">
            <header15 :className="header15Props.className" :button32Props="header15Props.button32Props" />
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
          <div class="information-48">
            <div class="frame-2478-17">
              <tab-menu24 :invoice="tabMenu24Props.invoice" :spanText="tabMenu24Props.spanText" />
              <tab-menu26 />
              <tab-menu27 />
              <a href="javascript:SubmitForm('form98')">
                <div class="tab-menu-207">
                  <img class="time-8" :src="time" alt="Time" />
                  <div class="label-547 poppins-medium-manatee-14px">
                    <span class="poppins-medium-manatee-14px">{{ spanText1 }}</span>
                  </div>
                </div></a
              >
            </div>
            <img class="line-613-16" :src="line613" alt="Line 613" />
            <div class="frame-2492">
              <div class="input-193">
                <img class="search-64" :src="search" alt="Search" /><input
                  class="input-text-297 poppins-normal-manatee-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder"
                  :type="inputType"
                />
              </div>
              <a href="javascript:SubmitForm('form98')">
                <div class="button-295">
                  <img class="add-101" :src="add" alt="Add" />
                  <div class="text-431 poppins-medium-white-14px">
                    <span class="poppins-medium-white-14px">{{ spanText2 }}</span>
                  </div>
                </div></a
              >
            </div>
            <div class="flex-row-294">
              <frame2498 :iconButton2Props="frame24981Props.iconButton2Props" />
              <button62 />
            </div>
            <frame24952 :frame2494Props="frame24952Props.frame2494Props" :chipProps="frame24952Props.chipProps" />
            <frame24962 :frame2494Props="frame24962Props.frame2494Props" :chip2Props="frame24962Props.chip2Props" />
            <frame24972 :frame2494Props="frame24972Props.frame2494Props" :chip3Props="frame24972Props.chip3Props" />
            <img class="line-61-1" :src="line614" alt="Line 614" /><frame2498
              :className="frame24982Props.className"
              :iconButton2Props="frame24982Props.iconButton2Props"
            />
            <img class="line-61-1" :src="line615" alt="Line 615" /><frame2498
              :className="frame24983Props.className"
              :iconButton2Props="frame24983Props.iconButton2Props"
            />
            <img class="line-61-1" :src="line616" alt="Line 616" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu5 from "./LeftNavigationMenu5";
import TopNavigation from "./TopNavigation";
import Header15 from "./Header15";
import Information2 from "./Information2";
import Statistics from "./Statistics";
import Statistics2 from "./Statistics2";
import Statistics3 from "./Statistics3";
import TabMenu24 from "./TabMenu24";
import TabMenu26 from "./TabMenu26";
import TabMenu27 from "./TabMenu27";
import Frame2498 from "./Frame2498";
import Button62 from "./Button62";
import Frame24952 from "./Frame24952";
import Frame24962 from "./Frame24962";
import Frame24972 from "./Frame24972";
export default {
  name: "CustomersDetailsToDos",
  components: {
    LeftNavigationMenu5,
    TopNavigation,
    Header15,
    Information2,
    Statistics,
    Statistics2,
    Statistics3,
    TabMenu24,
    TabMenu26,
    TabMenu27,
    Frame2498,
    Button62,
    Frame24952,
    Frame24962,
    Frame24972,
  },
  props: [
    "time",
    "spanText1",
    "line613",
    "search",
    "inputType",
    "inputPlaceholder",
    "add",
    "spanText2",
    "line614",
    "line615",
    "line616",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "header15Props",
    "information2Props",
    "statisticsProps",
    "statistics2Props",
    "statistics3Props",
    "tabMenu24Props",
    "frame24981Props",
    "frame24952Props",
    "frame24962Props",
    "frame24972Props",
    "frame24982Props",
    "frame24983Props",
  ],
};
</script>

<style>
.customers-u47-details-u47-tou45dou39s {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 1540px;
  position: relative;
  width: 1440px;
}

.flex-col-257 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 1496px;
  position: relative;
  width: 1216px;
}

.flex-row-293 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 1400px;
  min-width: 1152px;
}

.flex-col-258 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1400px;
  position: relative;
  width: 480px;
}

.information-48 {
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

.frame-2478-17 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  margin-left: 24px;
  min-width: 480px;
  position: relative;
}

.tab-menu-207 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 120px;
  padding: 9px 5.5px;
  transition: all 0.15s ease;
}

.tab-menu-207:hover,
.button-295:hover {
  transform: translate(0, -5px);
}

.time-8 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-547 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.line-613-16 {
  height: 1px;
  width: 600px;
}

.frame-2492 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-top: 23px;
  min-width: 600px;
}

.input-193 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 462px;
}

.search-64,
.add-101 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-297 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 410px;
}

.input-text-297::placeholder {
  color: #8a8aa899;
}

.button-295 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 130px;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
}

.text-431 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 78px;
  text-align: center;
}

.flex-row-294 {
  align-items: center;
  display: flex;
  gap: 340px;
  height: 24px;
  margin-top: 48px;
  min-width: 600px;
  position: relative;
}

.line-61-1 {
  height: 1px;
  margin-top: 16px;
  width: 600px;
}
</style>
