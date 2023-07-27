<template>
  <div class="container-center-horizontal">
    <form class="customers-u47-details-u47-time-report-u47-details screen" name="form96" action="form96" method="post">
      <left-navigation-menu5 v-bind="leftNavigationMenu5Props" />
      <div class="flex-col-253">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-290">
          <div class="flex-col-254">
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
          <div class="overlap-group-73">
            <div class="information-47">
              <frame24784
                :tabMenu241Props="frame24784Props.tabMenu241Props"
                :tabMenu26Props="frame24784Props.tabMenu26Props"
                :tabMenu242Props="frame24784Props.tabMenu242Props"
              />
              <img class="line-613-15" :src="line613" alt="Line 613" /><a
                href="javascript:SubmitForm('form96')"
                className="align-self-flex-end"
              >
                <div class="button-292">
                  <img class="add-100" :src="add" alt="Add" />
                  <div class="text-427 poppins-medium-white-14px">
                    <span class="poppins-medium-white-14px">{{ spanText1 }}</span>
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
            <div class="update-report">
              <div class="flex-row-291">
                <div class="flex-col-252">
                  <dropdown9 :spanText="dropdown91Props.spanText" />
                  <div class="input-field-92">
                    <div class="label-544 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText2 }}</span>
                    </div>
                    <div class="input-191">
                      <input
                        class="input-text-295 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder1"
                        :type="inputType1"
                      />
                    </div>
                  </div>
                  <div class="dropdown-179">
                    <div class="label-544 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span>
                    </div>
                    <div class="dropdown-180">
                      <input
                        class="text-428 poppins-medium-ebony-14px"
                        name="text"
                        :placeholder="inputPlaceholder2"
                        :type="inputType2"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex-col-252">
                  <dropdown9 :spanText="dropdown92Props.spanText" />
                  <div class="input-field-93">
                    <div class="label-544 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText4 }}</span>
                    </div>
                    <div class="input-191">
                      <input
                        class="input-text-295 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder3"
                        :type="inputType3"
                      />
                    </div>
                  </div>
                  <dropdown9 :spanText="dropdown93Props.spanText" />
                </div>
                <div class="flex-col-255">
                  <dropdown9 :spanText="dropdown94Props.spanText" />
                  <div class="input-field-94">
                    <div class="label-544 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span>
                    </div>
                    <div class="input-191">
                      <input
                        class="input-text-295 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder4"
                        :type="inputType4"
                      />
                    </div>
                  </div>
                  <div class="option-96">
                    <checkbox :className="checkboxProps.className" />
                    <div class="label-545 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText6 }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-col-256">
                <div class="flex-row-292">
                  <div class="input-field-95">
                    <div class="label-546 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText7 }}</span>
                    </div>
                    <div class="input-192">
                      <input
                        class="input-text-296 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder5"
                        :type="inputType5"
                      />
                    </div>
                  </div>
                  <div class="frame-2504-3">
                    <div class="total-4 poppins-semi-bold-comet-12px">
                      <span class="poppins-semi-bold-comet-12px">{{ spanText8 }}</span>
                    </div>
                    <h1 class="price-1 poppins-semi-bold-ebony-24px">
                      <span class="poppins-semi-bold-ebony-24px">{{ spanText9 }}</span>
                    </h1>
                  </div>
                </div>
                <frame2491
                  :className="frame2491Props.className"
                  :frame24811Props="frame2491Props.frame24811Props"
                  :frame24812Props="frame2491Props.frame24812Props"
                />
                <div class="bottom-section-104">
                  <img class="top-border-115" :src="topBorder" alt="Top Border" />
                  <div class="buttons-69">
                    <a href="javascript:SubmitForm('form96')">
                      <div class="button-293">
                        <div class="text-429 poppins-medium-ebony-14px">
                          <span class="poppins-medium-ebony-14px">{{ spanText10 }}</span>
                        </div>
                      </div></a
                    ><a href="javascript:SubmitForm('form96')">
                      <div class="button-294">
                        <img class="check-178" :src="check" alt="Check" />
                        <div class="text-430 poppins-medium-white-14px">
                          <span class="poppins-medium-white-14px">{{ spanText11 }}</span>
                        </div>
                      </div></a
                    >
                  </div>
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
import LeftNavigationMenu5 from "./LeftNavigationMenu5";
import TopNavigation from "./TopNavigation";
import Header15 from "./Header15";
import Information2 from "./Information2";
import Statistics from "./Statistics";
import Statistics2 from "./Statistics2";
import Statistics3 from "./Statistics3";
import Frame24784 from "./Frame24784";
import Table10 from "./Table10";
import Dropdown9 from "./Dropdown9";
import Checkbox from "./Checkbox";
import Frame2491 from "./Frame2491";
export default {
  name: "CustomersDetailsTimeReportDetails",
  components: {
    LeftNavigationMenu5,
    TopNavigation,
    Header15,
    Information2,
    Statistics,
    Statistics2,
    Statistics3,
    Frame24784,
    Table10,
    Dropdown9,
    Checkbox,
    Frame2491,
  },
  props: [
    "line613",
    "add",
    "spanText1",
    "spanText2",
    "inputType1",
    "inputPlaceholder1",
    "spanText3",
    "inputType2",
    "inputPlaceholder2",
    "spanText4",
    "inputType3",
    "inputPlaceholder3",
    "spanText5",
    "inputType4",
    "inputPlaceholder4",
    "spanText6",
    "spanText7",
    "inputType5",
    "inputPlaceholder5",
    "spanText8",
    "spanText9",
    "topBorder",
    "spanText10",
    "check",
    "spanText11",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "header15Props",
    "information2Props",
    "statisticsProps",
    "statistics2Props",
    "statistics3Props",
    "frame24784Props",
    "table10Props",
    "dropdown91Props",
    "dropdown92Props",
    "dropdown93Props",
    "dropdown94Props",
    "checkboxProps",
    "frame2491Props",
  ],
};
</script>

<style>
.customers-u47-details-u47-time-report-u47-details {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 1540px;
  position: relative;
  width: 1440px;
}

.flex-col-253 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 1496px;
  position: relative;
  width: 1216px;
}

.flex-row-290 {
  align-items: center;
  display: flex;
  gap: 24px;
  height: 1400px;
  min-width: 1152px;
}

.flex-col-254 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1400px;
  position: relative;
  width: 480px;
}

.overlap-group-73 {
  height: 1114px;
  margin-bottom: 126px;
  position: relative;
  width: 648px;
}

.information-47 {
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

.line-613-15 {
  height: 1px;
  width: 600px;
}

.button-292 {
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

.button-292:hover,
.button-293:hover,
.button-294:hover {
  transform: translate(0, -5px);
}

.add-100,
.check-178 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-427 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 81px;
  text-align: center;
}

.update-report {
  align-items: center;
  background-color: var(--white);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 584px;
  left: 16px;
  overflow: hidden;
  position: absolute;
  top: 530px;
  width: 608px;
}

.flex-row-291 {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  height: 246px;
  margin-top: 24px;
  min-width: 544px;
}

.flex-col-252 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 246px;
  position: relative;
  width: 160px;
}

.input-field-92,
.dropdown-179,
.input-field-93 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 160px;
}

.label-544 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 160px;
}

.input-191 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 160px;
}

.input-text-295 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 136px;
}

.input-text-295::placeholder,
.text-428::placeholder,
.input-text-296::placeholder {
  color: #0d0d1d99;
}

.dropdown-180 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 8.5px 12px;
  width: 160px;
}

.text-428 {
  background-color: transparent;
  border: 0;
  height: 21px;
  letter-spacing: 0;
  line-height: normal;
  padding: 0;
  width: 136px;
}

.flex-col-255 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 238px;
  position: relative;
  width: 160px;
}

.input-field-94 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 160px;
}

.option-96 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-top: 58px;
  min-width: 155px;
  position: relative;
}

.label-545 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.flex-col-256 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 290px;
  position: relative;
  width: 608px;
}

.flex-row-292 {
  align-items: flex-end;
  align-self: center;
  display: flex;
  gap: 32px;
  height: 88px;
  margin-right: 62px;
  min-width: 482px;
}

.input-field-95 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 88px;
  width: 352px;
}

.label-546 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 352px;
}

.input-192 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 62px;
  overflow: hidden;
  padding: 9px 12px;
  width: 352px;
}

.input-text-296 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 328px;
}

.frame-2504-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 3px;
  min-height: 56px;
  width: 98px;
}

.total-4 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 18px;
}

.price-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 36px;
}

.bottom-section-104 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 24px;
  width: 608px;
}

.top-border-115 {
  height: 1px;
  width: 608px;
}

.buttons-69 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 216px;
}

.button-293 {
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

.text-429 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 51px;
  text-align: center;
}

.button-294 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 104px;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
}

.text-430 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 52px;
  text-align: center;
}
</style>
