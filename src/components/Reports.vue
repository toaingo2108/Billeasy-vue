<template>
  <div class="container-center-horizontal">
    <form class="reports screen" name="form9" action="form9" method="post">
      <left-navigation-menu3 v-bind="leftNavigationMenu3Props" />
      <div class="flex-col-125">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-41 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="tab-19">
          <div class="tab-menu-57">
            <div class="flex-row-69">
              <img class="subscription-120" :src="subscription1" alt="Subscription" />
              <div class="label-212 poppins-medium-caribbean-green-14px">
                <span class="poppins-medium-caribbean-green-14px">{{ spanText2 }}</span>
              </div>
            </div>
            <div class="rectangle-6502-26"></div>
          </div>
          <a href="javascript:SubmitForm('form9')">
            <div class="tab-menu-58">
              <img class="subscription-121" :src="subscription2" alt="Subscription" />
              <div class="label-207 poppins-medium-manatee-14px">
                <span class="poppins-medium-manatee-14px">{{ spanText3 }}</span>
              </div>
            </div></a
          ><a href="javascript:SubmitForm('form9')">
            <div class="tab-menu-59">
              <img class="customer-114" :src="customer" alt="Customer" />
              <div class="label-207 poppins-medium-manatee-14px">
                <span class="poppins-medium-manatee-14px">{{ spanText4 }}</span>
              </div>
            </div></a
          ><a href="javascript:SubmitForm('form9')">
            <div class="tab-menu-60">
              <img class="products-127" :src="products" alt="Products" />
              <div class="label-207 poppins-medium-manatee-14px">
                <span class="poppins-medium-manatee-14px">{{ spanText5 }}</span>
              </div>
            </div></a
          >
        </div>
        <img class="line-701-26" :src="line7011" alt="Line 701" />
        <div class="flex-row-70">
          <dropdown8 :spanText1="dropdown81Props.spanText1" :spanText2="dropdown81Props.spanText2" />
          <dropdown8 :spanText1="dropdown82Props.spanText1" :spanText2="dropdown82Props.spanText2" />
          <div class="option-31">
            <checkbox :className="checkboxProps.className" />
            <div class="label-213 poppins-normal-ebony-14px">
              <span class="poppins-normal-ebony-14px">{{ spanText6 }}</span>
            </div>
          </div>
        </div>
        <div class="chart">
          <div class="flex-col-126">
            <div class="flex-row-71">
              <div class="header-60">
                <frame2443 :src="frame2443Props.src" :className="frame2443Props.className" />
                <div class="title-77 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText7 }}</span>
                </div>
              </div>
              <div class="title-78 poppins-semi-bold-cadet-blue-16px">
                <span class="poppins-semi-bold-cadet-blue-16px">{{ spanText8 }}</span>
              </div>
              <div class="button-153">
                <img class="export-13" :src="xexport" alt="Export" />
                <div class="text-243 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText9 }}</span>
                </div>
              </div>
            </div>
            <div class="frame-container-10">
              <div class="frame-2551">
                <frame2549 :children="frame25491Props.children" />
                <div class="label-214 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText10 }}</span>
                </div>
                <frame2549 :children="frame25492Props.children" />
              </div>
              <div class="frame-2555">
                <div class="frame-2554">
                  <div class="ellipse-17"></div>
                  <div class="x-invoices poppins-medium-ebony-14px">
                    <span class="poppins-medium-ebony-14px">{{ spanText11 }}</span>
                  </div>
                </div>
                <div class="frame-2553">
                  <div class="ellipse-17-1"></div>
                  <div class="x-invoices poppins-medium-ebony-14px">
                    <span class="poppins-medium-ebony-14px">{{ spanText12 }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-row-72">
              <div class="label-215 valign-text-middle poppins-normal-ebony-12px">
                <span
                  ><span class="poppins-normal-ebony-12px">{{ spanText13 }}</span>
                </span>
              </div>
              <img class="line-702" :src="line702" alt="Line 702" />
            </div>
          </div>
          <div class="flex-row-73">
            <div class="label-container-1">
              <div class="label-216 valign-text-middle poppins-normal-ebony-12px">
                <span
                  ><span class="poppins-normal-ebony-12px">{{ spanText14 }}</span>
                </span>
              </div>
              <div class="label-208 valign-text-middle poppins-normal-ebony-12px">
                <span
                  ><span class="poppins-normal-ebony-12px">{{ spanText15 }}</span>
                </span>
              </div>
              <div class="label-208 valign-text-middle poppins-normal-ebony-12px">
                <span
                  ><span class="poppins-normal-ebony-12px">{{ spanText16 }}</span>
                </span>
              </div>
              <div class="label-208 valign-text-middle poppins-normal-ebony-12px">
                <span
                  ><span class="poppins-normal-ebony-12px">{{ spanText17 }}</span>
                </span>
              </div>
              <div class="label-217 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText18 }}</span>
              </div>
            </div>
            <div class="flex-col-127">
              <div class="overlap-group1-9">
                <div class="overlap-group-23">
                  <img class="line-703" :src="line703" alt="Line 703" /><img
                    class="line-704"
                    :src="line704"
                    alt="Line 704"
                  /><img class="line-705" :src="line705" alt="Line 705" /><img
                    class="line-706"
                    :src="line706"
                    alt="Line 706"
                  />
                  <div class="rectangle-6494"></div>
                  <div class="rectangle-6495"></div>
                  <div class="rectangle-6494-1"></div>
                  <div class="rectangle-6495-1"></div>
                  <div class="rectangle-6494-2"></div>
                  <div class="rectangle-6495-2"></div>
                  <div class="rectangle-6494-3"></div>
                  <div class="rectangle-6495-3"></div>
                  <div class="rectangle-6494-4"></div>
                  <div class="rectangle-6495-4"></div>
                  <div class="rectangle-6494-5"></div>
                  <div class="rectangle-6494-6"></div>
                  <div class="rectangle-6495-5"></div>
                  <div class="rectangle-6495-6"></div>
                  <div class="rectangle-6494-7"></div>
                  <div class="rectangle-6494-8"></div>
                  <div class="rectangle-6495-7"></div>
                  <div class="rectangle-6494-9"></div>
                  <div class="rectangle-6495-8"></div>
                  <div class="rectangle-6494-10"></div>
                  <div class="rectangle-6495-9"></div>
                </div>
                <div class="rectangle-6495-10"></div>
                <div class="rectangle-6494-11"></div>
                <div class="rectangle-6495-11"></div>
              </div>
              <img class="line-707" :src="line707" alt="Line 707" />
              <div class="frame-2552 poppins-normal-ebony-12px">
                <div class="label-209 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText19 }}</span>
                  </span>
                </div>
                <div class="label-210 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText20 }}</span>
                  </span>
                </div>
                <div class="label-209 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText21 }}</span>
                  </span>
                </div>
                <div class="label-218 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText22 }}</span>
                  </span>
                </div>
                <div class="label-219 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText23 }}</span>
                  </span>
                </div>
                <div class="label-210 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText24 }}</span>
                  </span>
                </div>
                <div class="label-220 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText25 }}</span>
                  </span>
                </div>
                <div class="label-211 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText26 }}</span>
                  </span>
                </div>
                <div class="label-209 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText27 }}</span>
                  </span>
                </div>
                <div class="label-210 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText28 }}</span>
                  </span>
                </div>
                <div class="label-209 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText29 }}</span>
                  </span>
                </div>
                <div class="label-211 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText30 }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="information-2">
          <header82
            :spanText="header8Props.spanText"
            :className="header8Props.className"
            :frame2443Props="header8Props.frame2443Props"
          />
          <div class="tab-20">
            <div class="tab-menu-57">
              <div class="label-221 poppins-medium-caribbean-green-14px">
                <span class="poppins-medium-caribbean-green-14px">{{ spanText31 }}</span>
              </div>
              <div class="rectangle-6502-26"></div>
            </div>
            <div class="label-222 poppins-medium-manatee-14px">
              <span class="poppins-medium-manatee-14px">{{ spanText32 }}</span>
            </div>
          </div>
          <img class="line-701-27" :src="line7012" alt="Line 701" />
          <div class="table-24">
            <column
              :spanText1="column1Props.spanText1"
              :spanText2="column1Props.spanText2"
              :spanText3="column1Props.spanText3"
              :spanText4="column1Props.spanText4"
              :spanText5="column1Props.spanText5"
            />
            <column
              :spanText1="column2Props.spanText1"
              :spanText2="column2Props.spanText2"
              :spanText3="column2Props.spanText3"
              :spanText4="column2Props.spanText4"
              :spanText5="column2Props.spanText5"
              :className="column2Props.className"
            />
            <column2
              :spanText1="column21Props.spanText1"
              :spanText2="column21Props.spanText2"
              :spanText3="column21Props.spanText3"
              :spanText4="column21Props.spanText4"
              :spanText5="column21Props.spanText5"
            />
            <div class="column-container">
              <column2
                :spanText1="column22Props.spanText1"
                :spanText2="column22Props.spanText2"
                :spanText3="column22Props.spanText3"
                :spanText4="column22Props.spanText4"
                :spanText5="column22Props.spanText5"
                :className="column22Props.className"
              />
              <column2
                :spanText1="column23Props.spanText1"
                :spanText2="column23Props.spanText2"
                :spanText3="column23Props.spanText3"
                :spanText4="column23Props.spanText4"
                :spanText5="column23Props.spanText5"
                :className="column23Props.className"
              />
              <column2
                :spanText1="column24Props.spanText1"
                :spanText2="column24Props.spanText2"
                :spanText3="column24Props.spanText3"
                :spanText4="column24Props.spanText4"
                :spanText5="column24Props.spanText5"
                :className="column24Props.className"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu3 from "./LeftNavigationMenu3";
import TopNavigation from "./TopNavigation";
import Dropdown8 from "./Dropdown8";
import Checkbox from "./Checkbox";
import Frame2443 from "./Frame2443";
import Frame2549 from "./Frame2549";
import Header82 from "./Header82";
import Column from "./Column";
import Column2 from "./Column2";
export default {
  name: "Reports",
  components: {
    LeftNavigationMenu3,
    TopNavigation,
    Dropdown8,
    Checkbox,
    Frame2443,
    Frame2549,
    Header82,
    Column,
    Column2,
  },
  props: [
    "spanText1",
    "subscription1",
    "spanText2",
    "subscription2",
    "spanText3",
    "customer",
    "spanText4",
    "products",
    "spanText5",
    "line7011",
    "spanText6",
    "spanText7",
    "spanText8",
    "xexport",
    "spanText9",
    "spanText10",
    "spanText11",
    "spanText12",
    "spanText13",
    "line702",
    "spanText14",
    "spanText15",
    "spanText16",
    "spanText17",
    "spanText18",
    "line703",
    "line704",
    "line705",
    "line706",
    "line707",
    "spanText19",
    "spanText20",
    "spanText21",
    "spanText22",
    "spanText23",
    "spanText24",
    "spanText25",
    "spanText26",
    "spanText27",
    "spanText28",
    "spanText29",
    "spanText30",
    "spanText31",
    "spanText32",
    "line7012",
    "leftNavigationMenu3Props",
    "topNavigationProps",
    "dropdown81Props",
    "dropdown82Props",
    "checkboxProps",
    "frame2443Props",
    "frame25491Props",
    "frame25492Props",
    "header8Props",
    "column1Props",
    "column2Props",
    "column21Props",
    "column22Props",
    "column23Props",
    "column24Props",
  ],
};
</script>

<style>
.reports {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 1221px;
  position: relative;
  width: 1440px;
}

.flex-col-125 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1153px;
  position: relative;
  width: 1216px;
}

.page-header-41 {
  letter-spacing: 0;
  line-height: 40px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.tab-19 {
  align-items: flex-start;
  display: flex;
  margin-left: 32px;
  margin-top: 33px;
  min-width: 616px;
}

.tab-menu-57 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 144px;
}

.flex-row-69 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-top: 9px;
  min-width: 74px;
}

.subscription-120 {
  height: 18px;
  width: 18px;
}

.label-212 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 50px;
  white-space: nowrap;
}

.rectangle-6502-26 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 144px;
}

.tab-menu-58 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 176px;
  padding: 9px 28px;
  transition: all 0.15s ease;
}

.tab-menu-58:hover,
.tab-menu-59:hover,
.tab-menu-60:hover,
.button-153:hover {
  transform: translate(0, -5px);
}

.subscription-121,
.customer-114,
.products-127 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-207 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-59 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 144px;
  padding: 9px 21px;
  transition: all 0.15s ease;
}

.tab-menu-60 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 152px;
  padding: 9px 32.5px;
  transition: all 0.15s ease;
}

.line-701-26 {
  align-self: center;
  height: 1px;
  width: 1152px;
}

.flex-row-70 {
  align-items: flex-end;
  display: flex;
  gap: 32px;
  height: 66px;
  margin-left: 32px;
  margin-top: 39px;
  min-width: 772px;
  position: relative;
}

.option-31 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-bottom: 8px;
  min-width: 196px;
  position: relative;
}

.label-213 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.chart {
  align-items: center;
  align-self: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 392px;
  margin-top: 31px;
  overflow: hidden;
  padding: 24px 0;
  width: 1152px;
}

.flex-col-126 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 155px;
  width: 1088px;
}

.flex-row-71 {
  align-items: flex-start;
  display: flex;
  min-width: 1088px;
}

.header-60 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  min-width: 151px;
  position: relative;
}

.title-77 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.title-78 {
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 20px;
  min-width: 112px;
  white-space: nowrap;
}

.button-153 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 37px;
  margin-left: 709px;
  min-width: 96px;
  padding: 7px 12px;
  transition: all 0.15s ease;
}

.export-13 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-243 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 44px;
  text-align: center;
}

.frame-container-10 {
  align-items: center;
  display: flex;
  gap: 29px;
  margin-top: 23px;
  min-width: 530px;
}

.frame-2551 {
  align-items: center;
  display: flex;
  gap: 8px;
  height: 36px;
  min-width: 207px;
  position: relative;
}

.label-214 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 15px;
  white-space: nowrap;
}

.frame-2555 {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  margin-top: 1px;
  min-width: 294px;
}

.frame-2554 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 21px;
  min-width: 142px;
}

.ellipse-17 {
  align-self: center;
  background-color: #474780;
  border-radius: 4px;
  height: 8px;
  width: 8px;
}

.x-invoices {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
}

.frame-2553 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 21px;
  min-width: 120px;
}

.ellipse-17-1 {
  align-self: center;
  background-color: var(--blue-haze);
  border-radius: 4px;
  height: 8px;
  width: 8px;
}

.flex-row-72 {
  align-items: center;
  display: flex;
  gap: 14px;
  margin-top: 35px;
  min-width: 1088px;
}

.label-215 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  min-width: 22px;
  white-space: nowrap;
}

.line-702 {
  height: 1px;
  margin-top: 3px;
  width: 1052px;
}

.flex-row-73 {
  align-items: flex-start;
  display: flex;
  gap: 14px;
  height: 173px;
  min-width: 1088px;
}

.label-container-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 150px;
  width: 22px;
}

.label-216 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}

.label-208 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 8px;
  white-space: nowrap;
}

.label-217 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 6px;
  white-space: nowrap;
}

.flex-col-127 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 169px;
  width: 1052px;
}

.overlap-group1-9 {
  height: 137px;
  position: relative;
  width: 1052px;
}

.overlap-group-23 {
  height: 137px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1052px;
}

.line-703 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 9px;
  width: 1052px;
}

.line-704 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 41px;
  width: 1052px;
}

.line-705 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 73px;
  width: 1052px;
}

.line-706 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 105px;
  width: 1052px;
}

.rectangle-6494 {
  background-color: var(--east-bay);
  border-radius: 6px;
  height: 96px;
  left: 24px;
  position: absolute;
  top: 41px;
  width: 24px;
}

.rectangle-6495 {
  background-color: var(--blue-haze);
  border-radius: 6px;
  height: 56px;
  left: 48px;
  position: absolute;
  top: 81px;
  width: 24px;
}

.rectangle-6494-1 {
  background-color: var(--east-bay);
  border-radius: 6px;
  height: 87px;
  left: 112px;
  position: absolute;
  top: 50px;
  width: 24px;
}

.rectangle-6495-1 {
  background-color: var(--blue-haze);
  border-radius: 6px;
  height: 73px;
  left: 136px;
  position: absolute;
  top: 64px;
  width: 24px;
}

.rectangle-6494-2 {
  background-color: var(--east-bay);
  border-radius: 6px;
  height: 56px;
  left: 200px;
  position: absolute;
  top: 81px;
  width: 24px;
}

.rectangle-6495-2 {
  background-color: var(--blue-haze);
  border-radius: 6px;
  height: 96px;
  left: 224px;
  position: absolute;
  top: 41px;
  width: 24px;
}

.rectangle-6494-3 {
  background-color: var(--east-bay);
  border-radius: 6px;
  height: 137px;
  left: 288px;
  position: absolute;
  top: 0;
  width: 24px;
}

.rectangle-6495-3 {
  background-color: var(--blue-haze);
  border-radius: 6px;
  height: 73px;
  left: 312px;
  position: absolute;
  top: 64px;
  width: 24px;
}

.rectangle-6494-4 {
  background-color: var(--east-bay);
  border-radius: 6px;
  height: 108px;
  left: 376px;
  position: absolute;
  top: 29px;
  width: 24px;
}

.rectangle-6495-4 {
  background-color: var(--blue-haze);
  border-radius: 6px;
  height: 91px;
  left: 400px;
  position: absolute;
  top: 46px;
  width: 24px;
}

.rectangle-6494-5 {
  background-color: var(--east-bay);
  border-radius: 6px;
  height: 52px;
  left: 464px;
  position: absolute;
  top: 85px;
  width: 24px;
}

.rectangle-6494-6 {
  background-color: var(--east-bay);
  border-radius: 6px;
  height: 96px;
  left: 552px;
  position: absolute;
  top: 41px;
  width: 24px;
}

.rectangle-6495-5 {
  background-color: var(--blue-haze);
  border-radius: 6px;
  height: 102px;
  left: 576px;
  position: absolute;
  top: 35px;
  width: 24px;
}

.rectangle-6495-6 {
  background-color: var(--blue-haze);
  border-radius: 6px;
  height: 73px;
  left: 664px;
  position: absolute;
  top: 64px;
  width: 24px;
}

.rectangle-6494-7 {
  background-color: var(--east-bay);
  border-radius: 6px;
  height: 129px;
  left: 728px;
  position: absolute;
  top: 8px;
  width: 24px;
}

.rectangle-6494-8 {
  background-color: var(--east-bay);
  border-radius: 6px;
  height: 60px;
  left: 816px;
  position: absolute;
  top: 77px;
  width: 24px;
}

.rectangle-6495-7 {
  background-color: var(--blue-haze);
  border-radius: 6px;
  height: 73px;
  left: 840px;
  position: absolute;
  top: 64px;
  width: 24px;
}

.rectangle-6494-9 {
  background-color: var(--east-bay);
  border-radius: 6px;
  height: 91px;
  left: 904px;
  position: absolute;
  top: 46px;
  width: 24px;
}

.rectangle-6495-8 {
  background-color: var(--blue-haze);
  border-radius: 6px;
  height: 84px;
  left: 928px;
  position: absolute;
  top: 53px;
  width: 24px;
}

.rectangle-6494-10 {
  background-color: var(--east-bay);
  border-radius: 6px;
  height: 66px;
  left: 992px;
  position: absolute;
  top: 71px;
  width: 24px;
}

.rectangle-6495-9 {
  background-color: var(--blue-haze);
  border-radius: 6px;
  height: 73px;
  left: 1016px;
  position: absolute;
  top: 64px;
  width: 24px;
}

.rectangle-6495-10 {
  background-color: var(--blue-haze);
  border-radius: 6px;
  height: 27px;
  left: 488px;
  position: absolute;
  top: 110px;
  width: 24px;
}

.rectangle-6494-11 {
  background-color: var(--east-bay);
  border-radius: 6px;
  height: 22px;
  left: 640px;
  position: absolute;
  top: 115px;
  width: 24px;
}

.rectangle-6495-11 {
  background-color: var(--blue-haze);
  border-radius: 6px;
  height: 18px;
  left: 752px;
  position: absolute;
  top: 119px;
  width: 24px;
}

.line-707 {
  height: 1px;
  width: 1052px;
}

.frame-2552 {
  align-items: flex-start;
  display: flex;
  gap: 65px;
  margin-left: 3px;
  margin-top: 11px;
  min-width: 981px;
}

.label-209 {
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  min-width: 23px;
  text-align: center;
  white-space: nowrap;
}

.label-210 {
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  min-width: 22px;
  text-align: center;
  white-space: nowrap;
}

.label-218 {
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  min-width: 21px;
  text-align: center;
  white-space: nowrap;
}

.label-219 {
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  min-width: 26px;
  text-align: center;
  white-space: nowrap;
}

.label-220 {
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  min-width: 17px;
  text-align: center;
  white-space: nowrap;
}

.label-211 {
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  min-width: 24px;
  text-align: center;
  white-space: nowrap;
}

.information-2 {
  align-items: flex-start;
  align-self: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 392px;
  margin-top: 24px;
  overflow: hidden;
  padding: 24px 0;
  position: relative;
  width: 1152px;
}

.tab-20 {
  align-items: center;
  display: flex;
  gap: 24px;
  height: 40px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 320px;
}

.label-221 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 9px;
  min-width: 100px;
  white-space: nowrap;
}

.label-222 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  min-width: 129px;
  white-space: nowrap;
}

.line-701-27 {
  align-self: center;
  height: 1px;
  width: 1088px;
}

.table-24 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  margin-top: 31px;
  min-width: 1088px;
  position: relative;
}

.column-container {
  height: 192px;
  position: relative;
  width: 544px;
}
</style>
