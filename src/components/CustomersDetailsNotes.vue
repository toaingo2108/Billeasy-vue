<template>
  <div class="container-center-horizontal">
    <form class="customers-u47-details-u47-notes screen" name="form89" action="form89" method="post">
      <left-navigation-menu5 v-bind="leftNavigationMenu5Props" />
      <div class="flex-col-238">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-257">
          <div class="flex-col-239">
            <div class="header-129">
              <a href="javascript:SubmitForm('form89')">
                <div class="button-285">
                  <img class="chevron-left-35" :src="chevronLeft" alt="Chevron Left" />
                  <div class="text-420 poppins-medium-ebony-14px">
                    <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                  </div>
                </div></a
              >
              <div class="page-header-99 poppins-semi-bold-ebony-20px">
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
          <div class="overlap-group-71">
            <div class="information-45">
              <frame24783
                :tabMenu241Props="frame24783Props.tabMenu241Props"
                :tabMenu242Props="frame24783Props.tabMenu242Props"
                :tabMenu25Props="frame24783Props.tabMenu25Props"
              />
              <img class="line-613-4" :src="line613" alt="Line 613" /><a
                href="javascript:SubmitForm('form89')"
                className="align-self-flex-end"
              >
                <div class="button-286">
                  <img class="add-97" :src="add" alt="Add" />
                  <div class="text-421 poppins-medium-white-14px">
                    <span class="poppins-medium-white-14px">{{ spanText4 }}</span>
                  </div>
                </div></a
              ><table12 :className="table12Props.className" :tableRow32Props="table12Props.tableRow32Props" />
            </div>
            <div class="update-note-5">
              <div class="input-field-86">
                <div class="label-516 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span>
                </div>
                <div class="input-186">
                  <input
                    class="input-text-291 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder1"
                    :type="inputType1"
                  />
                </div>
              </div>
              <div class="input-field-87">
                <div class="label-516 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText6 }}</span>
                </div>
                <div class="input-187">
                  <input
                    class="input-text-291 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                  />
                </div>
              </div>
              <frame2491
                :frame24811Props="frame2491Props.frame24811Props"
                :frame24812Props="frame2491Props.frame24812Props"
              />
              <bottom-section22 :button22Props="bottomSection22Props.button22Props" />
            </div>
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
import Frame24783 from "./Frame24783";
import Table12 from "./Table12";
import Frame2491 from "./Frame2491";
import BottomSection22 from "./BottomSection22";
export default {
  name: "CustomersDetailsNotes",
  components: {
    LeftNavigationMenu5,
    TopNavigation,
    Information2,
    Statistics,
    Statistics2,
    Statistics3,
    Frame24783,
    Table12,
    Frame2491,
    BottomSection22,
  },
  props: [
    "chevronLeft",
    "spanText1",
    "spanText2",
    "spanText3",
    "line613",
    "add",
    "spanText4",
    "spanText5",
    "inputType1",
    "inputPlaceholder1",
    "spanText6",
    "inputType2",
    "inputPlaceholder2",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "information2Props",
    "statisticsProps",
    "statistics2Props",
    "statistics3Props",
    "frame24783Props",
    "table12Props",
    "frame2491Props",
    "bottomSection22Props",
  ],
};
</script>

<style>
.customers-u47-details-u47-notes {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 1540px;
  position: relative;
  width: 1440px;
}

.flex-col-238 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 1496px;
  position: relative;
  width: 1216px;
}

.flex-row-257 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 1400px;
  min-width: 1152px;
}

.flex-col-239 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1400px;
  position: relative;
  width: 480px;
}

.header-129 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  min-width: 279px;
}

.button-285 {
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

.button-285:hover,
.button-286:hover {
  transform: translate(0, -5px);
}

.chevron-left-35,
.add-97 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-420 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-99 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  white-space: nowrap;
}

.overlap-group-71 {
  height: 858px;
  margin-top: 80px;
  position: relative;
  width: 648px;
}

.information-45 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 740px;
  padding: 24px 0;
  position: absolute;
  top: 0;
  width: 648px;
}

.line-613-4 {
  height: 1px;
  width: 600px;
}

.button-286 {
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
  min-width: 128px;
  padding: 8.5px 16.5px;
  transition: all 0.15s ease;
}

.text-421 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 67px;
  text-align: center;
}

.update-note-5 {
  align-items: center;
  background-color: var(--white);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 424px;
  left: 180px;
  overflow: hidden;
  position: absolute;
  top: 434px;
  width: 400px;
}

.input-field-86 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 336px;
}

.label-516 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 336px;
}

.input-186 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-291 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-291::placeholder {
  color: #0d0d1d99;
}

.input-field-87 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 104px;
  width: 336px;
}

.input-187 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 78px;
  overflow: hidden;
  padding: 9px 12px;
  width: 336px;
}
</style>
