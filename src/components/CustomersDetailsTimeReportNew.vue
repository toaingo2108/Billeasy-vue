<template>
  <div class="container-center-horizontal">
    <form class="customers-u47-details-u47-time-report-u45-new screen" name="form93" action="form93" method="post">
      <div class="overlap-group2-10">
        <div class="frame-2488">
          <frame24784
            :tabMenu241Props="frame24784Props.tabMenu241Props"
            :tabMenu26Props="frame24784Props.tabMenu26Props"
            :tabMenu242Props="frame24784Props.tabMenu242Props"
          />
          <img class="line-613-14" :src="line613" alt="Line 613" />
          <div class="button-289">
            <img class="add-99" :src="add" alt="Add" />
            <div class="text-424 poppins-medium-white-14px">
              <span class="poppins-medium-white-14px">{{ spanText1 }}</span>
            </div>
          </div>
          <table10
            :rowCustomersDetailsTimeReport1Props="table10Props.rowCustomersDetailsTimeReport1Props"
            :rowCustomersDetailsTimeReport21Prop="table10Props.rowCustomersDetailsTimeReport21Prop"
            :rowCustomersDetailsTimeReport2Props="table10Props.rowCustomersDetailsTimeReport2Props"
            :rowCustomersDetailsTimeReport22Prop="table10Props.rowCustomersDetailsTimeReport22Prop"
            :rowCustomersDetailsTimeReport3Props="table10Props.rowCustomersDetailsTimeReport3Props"
          />
        </div>
        <left-navigation-menu5 v-bind="leftNavigationMenu5Props" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <header15 :button32Props="header15Props.button32Props" />
        <information2
          :className="information2Props.className"
          :header5Props="information2Props.header5Props"
          :iconButton32Props="information2Props.iconButton32Props"
        />
        <statistics :className="statisticsProps.className" :frame2443Props="statisticsProps.frame2443Props" />
        <div class="overlay-30">
          <div class="new-time-report">
            <div class="title-139 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
            <div class="input-field-89">
              <div class="label-541 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span
                ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText4 }}</span>
              </div>
              <div class="input-189">
                <input
                  class="input-text-293 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder1"
                  :type="inputType1"
                />
              </div>
            </div>
            <div class="flex-row-289">
              <div class="flex-row-item-1">
                <div class="input-field-88">
                  <div class="label-540 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span>
                  </div>
                  <div class="input-188">
                    <input
                      class="input-text-292 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder2"
                      :type="inputType2"
                    />
                  </div>
                </div>
                <div class="input-field-88">
                  <div class="label-540 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText6 }}</span>
                  </div>
                  <div class="input-188">
                    <input
                      class="input-text-292 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder3"
                      :type="inputType3"
                    />
                  </div>
                </div>
                <div class="input-field-88">
                  <div class="label-540 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText7 }}</span>
                  </div>
                  <div class="input-188">
                    <input
                      class="input-text-292 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder4"
                      :type="inputType4"
                    />
                  </div>
                </div>
              </div>
              <div class="flex-row-item-1">
                <div class="input-field-88">
                  <div class="label-540 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText8 }}</span>
                  </div>
                  <div class="input-188">
                    <input
                      class="input-text-292 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder5"
                      :type="inputType5"
                    />
                  </div>
                </div>
                <div class="input-field-88">
                  <div class="label-540 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText9 }}</span>
                  </div>
                  <div class="input-188">
                    <input
                      class="input-text-292 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder6"
                      :type="inputType6"
                    />
                  </div>
                </div>
                <div class="overlap-group-72">
                  <input-field4 :spanText1="inputField41Props.spanText1" :spanText2="inputField41Props.spanText2" />
                  <img class="chevron-down-338" :src="chevronDown1" alt="Chevron Down" />
                </div>
              </div>
              <div class="flex-col-250">
                <div class="overlap-group-72">
                  <input-field4 :spanText1="inputField42Props.spanText1" :spanText2="inputField42Props.spanText2" />
                  <img class="chevron-down-339" :src="chevronDown2" alt="Chevron Down" />
                </div>
                <div class="input-field-90">
                  <div class="label-540 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText10 }}</span>
                  </div>
                  <div class="input-188">
                    <input
                      class="input-text-292 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder7"
                      :type="inputType7"
                    />
                  </div>
                </div>
                <div class="option-95">
                  <checkbox :className="checkboxProps.className" />
                  <div class="label-542 poppins-normal-ebony-14px">
                    <span class="poppins-normal-ebony-14px">{{ spanText11 }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-col-251">
              <div class="frame-2504-2">
                <div class="total-3 poppins-semi-bold-comet-12px">
                  <span class="poppins-semi-bold-comet-12px">{{ spanText12 }}</span>
                </div>
                <h1 class="price poppins-semi-bold-ebony-24px">
                  <span class="poppins-semi-bold-ebony-24px">{{ spanText13 }}</span>
                </h1>
              </div>
              <div class="bottom-section-103">
                <img class="top-border-114" :src="topBorder" alt="Top Border" />
                <div class="buttons-68">
                  <a href="javascript:SubmitForm('form93')">
                    <div class="button-290">
                      <div class="text-425 poppins-medium-ebony-14px">
                        <span class="poppins-medium-ebony-14px">{{ spanText14 }}</span>
                      </div>
                    </div></a
                  ><a href="javascript:SubmitForm('form93')">
                    <div class="button-291">
                      <img class="check-177" :src="check" alt="Check" />
                      <div class="text-426 poppins-medium-white-14px">
                        <span class="poppins-medium-white-14px">{{ spanText15 }}</span>
                      </div>
                    </div></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <statistics2
        :className="statistics2Props.className"
        :frame2443Props="statistics2Props.frame2443Props"
        :frame2480Props="statistics2Props.frame2480Props"
        :iconButton32Props="statistics2Props.iconButton32Props"
      />
      <statistics3
        :className="statistics3Props.className"
        :frame2443Props="statistics3Props.frame2443Props"
        :iconButton32Props="statistics3Props.iconButton32Props"
      />
    </form>
  </div>
</template>

<script>
import Frame24784 from "./Frame24784";
import Table10 from "./Table10";
import LeftNavigationMenu5 from "./LeftNavigationMenu5";
import TopNavigation from "./TopNavigation";
import Header15 from "./Header15";
import Information2 from "./Information2";
import Statistics from "./Statistics";
import InputField4 from "./InputField4";
import Checkbox from "./Checkbox";
import Statistics2 from "./Statistics2";
import Statistics3 from "./Statistics3";
export default {
  name: "CustomersDetailsTimeReportNew",
  components: {
    Frame24784,
    Table10,
    LeftNavigationMenu5,
    TopNavigation,
    Header15,
    Information2,
    Statistics,
    InputField4,
    Checkbox,
    Statistics2,
    Statistics3,
  },
  props: [
    "line613",
    "add",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "inputType1",
    "inputPlaceholder1",
    "spanText5",
    "inputType2",
    "inputPlaceholder2",
    "spanText6",
    "inputType3",
    "inputPlaceholder3",
    "spanText7",
    "inputType4",
    "inputPlaceholder4",
    "spanText8",
    "inputType5",
    "inputPlaceholder5",
    "spanText9",
    "inputType6",
    "inputPlaceholder6",
    "chevronDown1",
    "chevronDown2",
    "spanText10",
    "inputType7",
    "inputPlaceholder7",
    "spanText11",
    "spanText12",
    "spanText13",
    "topBorder",
    "spanText14",
    "check",
    "spanText15",
    "frame24784Props",
    "table10Props",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "header15Props",
    "information2Props",
    "statisticsProps",
    "inputField41Props",
    "inputField42Props",
    "checkboxProps",
    "statistics2Props",
    "statistics3Props",
  ],
};
</script>

<style>
.customers-u47-details-u47-time-report-u45-new {
  align-items: center;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 967px;
  overflow: hidden;
  position: relative;
  width: 1440px;
}

.overlap-group2-10 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.frame-2488 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  left: 760px;
  min-height: 740px;
  padding: 24px 0;
  position: absolute;
  top: 176px;
  width: 648px;
}

.line-613-14 {
  height: 1px;
  width: 600px;
}

.button-289 {
  align-items: flex-start;
  align-self: flex-end;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-right: 24px;
  margin-top: 23px;
  min-width: 136px;
  padding: 8.5px 13.5px;
}

.add-99,
.check-177 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-424 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 81px;
  text-align: center;
}

.overlay-30 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 142px 304px;
  position: absolute;
  top: 0;
}

.new-time-report {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 660px;
  overflow: hidden;
  width: 608px;
}

.title-139 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.input-field-89 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 41px;
  min-height: 66px;
  width: 544px;
}

.label-541 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 544px;
}

.input-189 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 544px;
}

.input-text-293 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 520px;
}

.input-text-293::placeholder,
.input-text-292::placeholder {
  color: #0d0d1d99;
}

.flex-row-289 {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  height: 246px;
  margin-top: 24px;
  min-width: 544px;
}

.flex-row-item-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 246px;
  width: 160px;
}

.input-field-88 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 160px;
}

.label-540 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 160px;
}

.input-188 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 160px;
}

.input-text-292 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 136px;
}

.overlap-group-72 {
  height: 66px;
  position: relative;
  width: 160px;
}

.chevron-down-338 {
  height: 24px;
  left: 127px;
  position: absolute;
  top: 34px;
  width: 24px;
}

.flex-col-250 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 238px;
  width: 160px;
}

.chevron-down-339 {
  height: 24px;
  left: 130px;
  position: absolute;
  top: 34px;
  width: 24px;
}

.input-field-90 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 160px;
}

.option-95 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-top: 58px;
  min-width: 155px;
  position: relative;
}

.label-542 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.flex-col-251 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 40px;
  min-height: 184px;
  width: 608px;
}

.frame-2504-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-left: 32px;
  min-height: 56px;
  width: 98px;
}

.total-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 18px;
}

.price {
  letter-spacing: 0;
  line-height: normal;
  min-height: 36px;
}

.bottom-section-103 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  width: 608px;
}

.top-border-114 {
  height: 1px;
  width: 608px;
}

.buttons-68 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 199px;
}

.button-290 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 40px;
  min-width: 104px;
  padding: 8.5px 26.5px;
  transition: all 0.15s ease;
}

.button-290:hover,
.button-291:hover {
  transform: translate(0, -5px);
}

.text-425 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 51px;
  text-align: center;
}

.button-291 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 87px;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
}

.text-426 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}
</style>
