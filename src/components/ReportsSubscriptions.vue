<template>
  <div class="container-center-horizontal">
    <form class="reports-u47-subscriptions screen" name="form12" action="form12" method="post">
      <left-navigation-menu3 v-bind="leftNavigationMenu3Props" />
      <div class="flex-col-128">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-42 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="tab-21">
          <a href="javascript:SubmitForm('form12')">
            <div class="tab-menu-61">
              <img class="subscription-122" :src="subscription1" alt="Subscription" />
              <div class="label-227 poppins-medium-manatee-14px">
                <span class="poppins-medium-manatee-14px">{{ spanText2 }}</span>
              </div>
            </div></a
          >
          <div class="tab-menu-62">
            <div class="flex-row-75">
              <img class="subscription-123" :src="subscription2" alt="Subscription" />
              <div class="label-238 poppins-medium-caribbean-green-14px">
                <span class="poppins-medium-caribbean-green-14px">{{ spanText3 }}</span>
              </div>
            </div>
            <div class="rectangle-6502-27"></div>
          </div>
          <a href="javascript:SubmitForm('form12')">
            <div class="tab-menu-63">
              <img class="customer-116" :src="customer" alt="Customer" />
              <div class="label-227 poppins-medium-manatee-14px">
                <span class="poppins-medium-manatee-14px">{{ spanText4 }}</span>
              </div>
            </div></a
          ><a href="javascript:SubmitForm('form12')">
            <div class="tab-menu-64">
              <img class="products-128" :src="products" alt="Products" />
              <div class="label-227 poppins-medium-manatee-14px">
                <span class="poppins-medium-manatee-14px">{{ spanText5 }}</span>
              </div>
            </div></a
          >
        </div>
        <img class="line-701-28" :src="line7011" alt="Line 701" />
        <div class="flex-row-76">
          <dropdown8 :spanText1="dropdown81Props.spanText1" :spanText2="dropdown81Props.spanText2" />
          <dropdown8 :spanText1="dropdown82Props.spanText1" :spanText2="dropdown82Props.spanText2" />
          <div class="option-32">
            <checkbox :className="checkboxProps.className" />
            <div class="label-239 poppins-normal-ebony-14px">
              <span class="poppins-normal-ebony-14px">{{ spanText6 }}</span>
            </div>
          </div>
        </div>
        <div class="chart-1">
          <div class="flex-col-129">
            <div class="flex-row-74">
              <div class="header-61">
                <frame2443 :src="frame24431Props.src" :className="frame24431Props.className" />
                <div class="title-79 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText7 }}</span>
                </div>
              </div>
              <div class="title-80 poppins-semi-bold-cadet-blue-16px">
                <span class="poppins-semi-bold-cadet-blue-16px">{{ spanText8 }}</span>
              </div>
              <div class="button-154">
                <img class="export-14" :src="xexport1" alt="Export" />
                <div class="text-246 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText9 }}</span>
                </div>
              </div>
            </div>
            <div class="frame-container-11">
              <div class="frame-2551-1">
                <frame2549 :children="frame25491Props.children" />
                <div class="label-240 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText10 }}</span>
                </div>
                <frame2549 :children="frame25492Props.children" />
              </div>
              <div class="frame-2555-1">
                <div class="frame-2554-1">
                  <div class="ellipse-17-2"></div>
                  <div class="x-subscriptions poppins-medium-ebony-14px">
                    <span class="poppins-medium-ebony-14px">{{ spanText11 }}</span>
                  </div>
                </div>
                <div class="frame-2553-1">
                  <div class="ellipse-17-3"></div>
                  <div class="x-subscriptions poppins-medium-ebony-14px">
                    <span class="poppins-medium-ebony-14px">{{ spanText12 }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-row-77">
              <div class="label-228 valign-text-middle poppins-normal-ebony-12px">
                <span
                  ><span class="poppins-normal-ebony-12px">{{ spanText13 }}</span>
                </span>
              </div>
              <img class="line-70-1" :src="line7021" alt="Line 702" />
            </div>
          </div>
          <div class="flex-row-78">
            <div class="label-container-2">
              <div class="label-229 valign-text-middle poppins-normal-ebony-12px">
                <span
                  ><span class="poppins-normal-ebony-12px">{{ spanText14 }}</span>
                </span>
              </div>
              <div class="label-230 valign-text-middle poppins-normal-ebony-12px">
                <span
                  ><span class="poppins-normal-ebony-12px">{{ spanText15 }}</span>
                </span>
              </div>
              <div class="label-230 valign-text-middle poppins-normal-ebony-12px">
                <span
                  ><span class="poppins-normal-ebony-12px">{{ spanText16 }}</span>
                </span>
              </div>
              <div class="label-230 valign-text-middle poppins-normal-ebony-12px">
                <span
                  ><span class="poppins-normal-ebony-12px">{{ spanText17 }}</span>
                </span>
              </div>
              <div class="label-231 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText18 }}</span>
              </div>
            </div>
            <div class="flex-col-130">
              <div class="overlap-group1-10">
                <div class="overlap-group-24">
                  <img class="line-703-1" :src="line7031" alt="Line 703" /><img
                    class="line-704-1"
                    :src="line7041"
                    alt="Line 704"
                  /><img class="line-705-1" :src="line7051" alt="Line 705" /><img
                    class="line-706-1"
                    :src="line7061"
                    alt="Line 706"
                  />
                  <div class="rectangle-6494-12"></div>
                  <div class="rectangle-6495-12"></div>
                  <div class="rectangle-6494-13"></div>
                  <div class="rectangle-6495-13"></div>
                  <div class="rectangle-6494-14"></div>
                  <div class="rectangle-6495-14"></div>
                  <div class="rectangle-6494-15"></div>
                  <div class="rectangle-6495-15"></div>
                  <div class="rectangle-6494-16"></div>
                  <div class="rectangle-6495-16"></div>
                  <div class="rectangle-6494-17"></div>
                  <div class="rectangle-6494-18"></div>
                  <div class="rectangle-6495-17"></div>
                  <div class="rectangle-6495-18"></div>
                  <div class="rectangle-6494-19"></div>
                  <div class="rectangle-6494-20"></div>
                  <div class="rectangle-6495-19"></div>
                  <div class="rectangle-6494-21"></div>
                  <div class="rectangle-6495-20"></div>
                  <div class="rectangle-6494-22"></div>
                  <div class="rectangle-6495-21"></div>
                </div>
                <div class="rectangle-6495-22"></div>
                <div class="rectangle-6494-23"></div>
                <div class="rectangle-6495-23"></div>
              </div>
              <img class="line-707-1" :src="line7071" alt="Line 707" />
              <div class="frame-2552-1 poppins-normal-ebony-12px">
                <div class="label-232 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText19 }}</span>
                  </span>
                </div>
                <div class="label-233 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText20 }}</span>
                  </span>
                </div>
                <div class="label-232 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText21 }}</span>
                  </span>
                </div>
                <div class="label-234 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText22 }}</span>
                  </span>
                </div>
                <div class="label-235 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText23 }}</span>
                  </span>
                </div>
                <div class="label-233 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText24 }}</span>
                  </span>
                </div>
                <div class="label-236 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText25 }}</span>
                  </span>
                </div>
                <div class="label-237 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText26 }}</span>
                  </span>
                </div>
                <div class="label-232 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText27 }}</span>
                  </span>
                </div>
                <div class="label-233 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText28 }}</span>
                  </span>
                </div>
                <div class="label-232 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText29 }}</span>
                  </span>
                </div>
                <div class="label-237 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText30 }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="information-3">
          <header18
            :spanText="headerProps.spanText"
            :className="headerProps.className"
            :frame2443Props="headerProps.frame2443Props"
          />
          <div class="tab-22">
            <div class="tab-menu-65">
              <div class="label-241 poppins-medium-caribbean-green-14px">
                <span class="poppins-medium-caribbean-green-14px">{{ spanText31 }}</span>
              </div>
              <div class="rectangle-6502-28"></div>
            </div>
            <div class="label-242 poppins-medium-manatee-14px">
              <span class="poppins-medium-manatee-14px">{{ spanText32 }}</span>
            </div>
          </div>
          <img class="line-701-29" :src="line7012" alt="Line 701" />
          <div class="table-25">
            <div class="column-6">
              <div class="subscription-124 poppins-semi-bold-ebony-13px-2">
                <span class="poppins-semi-bold-ebony-13px-2">{{ spanText33 }}</span>
              </div>
              <div class="number-64 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText34 }}</span>
              </div>
              <div class="number-63 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText35 }}</span>
              </div>
              <div class="number-63 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText36 }}</span>
              </div>
              <div class="number-63 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText37 }}</span>
              </div>
            </div>
            <div class="column-7">
              <div class="customer-117 poppins-semi-bold-ebony-13px-2">
                <span class="poppins-semi-bold-ebony-13px-2">{{ spanText38 }}</span>
              </div>
              <div class="x12-sara-carlsson-5 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText39 }}</span>
              </div>
              <div class="x12-sara-carlsson-4 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText40 }}</span>
              </div>
              <div class="x12-sara-carlsson-4 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText41 }}</span>
              </div>
              <div class="x12-sara-carlsson-4 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText42 }}</span>
              </div>
            </div>
            <column3
              :spanText1="column31Props.spanText1"
              :spanText2="column31Props.spanText2"
              :spanText3="column31Props.spanText3"
              :spanText4="column31Props.spanText4"
              :spanText5="column31Props.spanText5"
            />
            <column3
              :spanText1="column32Props.spanText1"
              :spanText2="column32Props.spanText2"
              :spanText3="column32Props.spanText3"
              :spanText4="column32Props.spanText4"
              :spanText5="column32Props.spanText5"
            />
            <column3
              :spanText1="column33Props.spanText1"
              :spanText2="column33Props.spanText2"
              :spanText3="column33Props.spanText3"
              :spanText4="column33Props.spanText4"
              :spanText5="column33Props.spanText5"
            />
            <column3
              :spanText1="column34Props.spanText1"
              :spanText2="column34Props.spanText2"
              :spanText3="column34Props.spanText3"
              :spanText4="column34Props.spanText4"
              :spanText5="column34Props.spanText5"
            />
            <column3
              :spanText1="column35Props.spanText1"
              :spanText2="column35Props.spanText2"
              :spanText3="column35Props.spanText3"
              :spanText4="column35Props.spanText4"
              :spanText5="column35Props.spanText5"
            />
            <column3
              :spanText1="column36Props.spanText1"
              :spanText2="column36Props.spanText2"
              :spanText3="column36Props.spanText3"
              :spanText4="column36Props.spanText4"
              :spanText5="column36Props.spanText5"
            />
          </div>
        </div>
        <div class="chart-2">
          <div class="flex-col-131">
            <div class="flex-row-74">
              <div class="header-62">
                <frame2443 :src="frame24432Props.src" :className="frame24432Props.className" />
                <div class="title-79 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText43 }}</span>
                </div>
              </div>
              <div class="title-80 poppins-semi-bold-cadet-blue-16px">
                <span class="poppins-semi-bold-cadet-blue-16px">{{ spanText44 }}</span>
              </div>
              <div class="button-155">
                <img class="export-14" :src="xexport2" alt="Export" />
                <div class="text-246 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText45 }}</span>
                </div>
              </div>
            </div>
            <div class="upcoming-revenue-active-subscriptions poppins-medium-ebony-14px">
              <span class="poppins-medium-ebony-14px">{{ spanText46 }}</span>
            </div>
            <div class="flex-row-79">
              <div class="label-228 valign-text-middle poppins-normal-ebony-12px">
                <span
                  ><span class="poppins-normal-ebony-12px">{{ spanText47 }}</span>
                </span>
              </div>
              <img class="line-70-1" :src="line7022" alt="Line 702" />
            </div>
            <div class="flex-row-80">
              <div class="label-228 valign-text-middle poppins-normal-ebony-12px">
                <span
                  ><span class="poppins-normal-ebony-12px">{{ spanText48 }}</span>
                </span>
              </div>
              <img class="line-70-1" :src="line7032" alt="Line 703" />
            </div>
          </div>
          <div class="flex-row-81">
            <div class="label-container-3">
              <div class="label-229 valign-text-middle poppins-normal-ebony-12px">
                <span
                  ><span class="poppins-normal-ebony-12px">{{ spanText49 }}</span>
                </span>
              </div>
              <div class="label-230 valign-text-middle poppins-normal-ebony-12px">
                <span
                  ><span class="poppins-normal-ebony-12px">{{ spanText50 }}</span>
                </span>
              </div>
              <div class="label-230 valign-text-middle poppins-normal-ebony-12px">
                <span
                  ><span class="poppins-normal-ebony-12px">{{ spanText51 }}</span>
                </span>
              </div>
              <div class="label-231 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText52 }}</span>
              </div>
            </div>
            <div class="flex-col-132">
              <div class="overlap-group2-2">
                <img class="line-704-2" :src="line7042" alt="Line 704" /><img
                  class="line-705-2"
                  :src="line7052"
                  alt="Line 705"
                /><img class="line-706-2" :src="line7062" alt="Line 706" /><img
                  class="vector-1"
                  :src="vector1"
                  alt="Vector 1"
                />
                <div class="ellipse-81"></div>
                <div class="ellipse-92"></div>
                <div class="ellipse-82"></div>
                <div class="ellipse-83"></div>
                <div class="ellipse-84"></div>
                <div class="ellipse-85"></div>
                <div class="ellipse-86"></div>
                <div class="ellipse-87"></div>
                <div class="ellipse-88"></div>
                <div class="ellipse-89"></div>
                <div class="ellipse-90"></div>
                <div class="ellipse-91"></div>
              </div>
              <img class="line-707-2" :src="line7072" alt="Line 707" />
              <div class="frame-2552-1 poppins-normal-ebony-12px">
                <div class="label-232 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText53 }}</span>
                  </span>
                </div>
                <div class="label-233 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText54 }}</span>
                  </span>
                </div>
                <div class="label-232 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText55 }}</span>
                  </span>
                </div>
                <div class="label-234 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText56 }}</span>
                  </span>
                </div>
                <div class="label-235 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText57 }}</span>
                  </span>
                </div>
                <div class="label-233 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText58 }}</span>
                  </span>
                </div>
                <div class="label-236 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText59 }}</span>
                  </span>
                </div>
                <div class="label-237 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText60 }}</span>
                  </span>
                </div>
                <div class="label-232 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText61 }}</span>
                  </span>
                </div>
                <div class="label-233 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText62 }}</span>
                  </span>
                </div>
                <div class="label-232 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText63 }}</span>
                  </span>
                </div>
                <div class="label-237 valign-text-middle">
                  <span
                    ><span class="poppins-normal-ebony-12px">{{ spanText64 }}</span>
                  </span>
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
import LeftNavigationMenu3 from "./LeftNavigationMenu3";
import TopNavigation from "./TopNavigation";
import Dropdown8 from "./Dropdown8";
import Checkbox from "./Checkbox";
import Frame2443 from "./Frame2443";
import Frame2549 from "./Frame2549";
import Header18 from "./Header18";
import Column3 from "./Column3";
export default {
  name: "ReportsSubscriptions",
  components: {
    LeftNavigationMenu3,
    TopNavigation,
    Dropdown8,
    Checkbox,
    Frame2443,
    Frame2549,
    Header18,
    Column3,
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
    "xexport1",
    "spanText9",
    "spanText10",
    "spanText11",
    "spanText12",
    "spanText13",
    "line7021",
    "spanText14",
    "spanText15",
    "spanText16",
    "spanText17",
    "spanText18",
    "line7031",
    "line7041",
    "line7051",
    "line7061",
    "line7071",
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
    "spanText33",
    "spanText34",
    "spanText35",
    "spanText36",
    "spanText37",
    "spanText38",
    "spanText39",
    "spanText40",
    "spanText41",
    "spanText42",
    "spanText43",
    "spanText44",
    "xexport2",
    "spanText45",
    "spanText46",
    "spanText47",
    "line7022",
    "spanText48",
    "line7032",
    "spanText49",
    "spanText50",
    "spanText51",
    "spanText52",
    "line7042",
    "line7052",
    "line7062",
    "vector1",
    "line7072",
    "spanText53",
    "spanText54",
    "spanText55",
    "spanText56",
    "spanText57",
    "spanText58",
    "spanText59",
    "spanText60",
    "spanText61",
    "spanText62",
    "spanText63",
    "spanText64",
    "leftNavigationMenu3Props",
    "topNavigationProps",
    "dropdown81Props",
    "dropdown82Props",
    "checkboxProps",
    "frame24431Props",
    "frame25491Props",
    "frame25492Props",
    "headerProps",
    "column31Props",
    "column32Props",
    "column33Props",
    "column34Props",
    "column35Props",
    "column36Props",
    "frame24432Props",
  ],
};
</script>

<style>
.reports-u47-subscriptions {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 1633px;
  position: relative;
  width: 1440px;
}

.flex-col-128 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 1569px;
  position: relative;
  width: 1216px;
}

.page-header-42 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 40px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.tab-21 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  margin-left: 32px;
  margin-top: 33px;
  min-width: 616px;
}

.tab-menu-61 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 144px;
  padding: 9px 35px;
  transition: all 0.15s ease;
}

.tab-menu-61:hover,
.tab-menu-63:hover,
.tab-menu-64:hover,
.button-154:hover,
.button-155:hover {
  transform: translate(0, -5px);
}

.subscription-122,
.customer-116,
.products-128 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-227 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-62 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 176px;
}

.flex-row-75 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-top: 9px;
  min-width: 120px;
}

.subscription-123 {
  height: 18px;
  width: 18px;
}

.label-238 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 96px;
  white-space: nowrap;
}

.rectangle-6502-27 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 176px;
}

.tab-menu-63 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 144px;
  padding: 9px 21px;
  transition: all 0.15s ease;
}

.tab-menu-64 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 152px;
  padding: 9px 32.5px;
  transition: all 0.15s ease;
}

.line-701-28 {
  height: 1px;
  width: 1152px;
}

.flex-row-76 {
  align-items: flex-end;
  align-self: flex-start;
  display: flex;
  gap: 32px;
  height: 66px;
  margin-left: 32px;
  margin-top: 39px;
  min-width: 772px;
  position: relative;
}

.option-32 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-bottom: 8px;
  min-width: 196px;
  position: relative;
}

.label-239 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  white-space: nowrap;
}

.chart-1 {
  align-items: center;
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

.flex-col-129 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 155px;
  width: 1088px;
}

.flex-row-74 {
  align-items: flex-start;
  display: flex;
  min-width: 1088px;
}

.header-61 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  min-width: 151px;
  position: relative;
}

.title-79 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.title-80 {
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 20px;
  min-width: 112px;
  white-space: nowrap;
}

.button-154 {
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

.export-14 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-246 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 44px;
  text-align: center;
}

.frame-container-11 {
  align-items: center;
  display: flex;
  gap: 29px;
  margin-top: 23px;
  min-width: 610px;
}

.frame-2551-1 {
  align-items: center;
  display: flex;
  gap: 8px;
  height: 36px;
  min-width: 207px;
  position: relative;
}

.label-240 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 15px;
  white-space: nowrap;
}

.frame-2555-1 {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  margin-top: 1px;
  min-width: 374px;
}

.frame-2554-1 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 21px;
  min-width: 150px;
}

.ellipse-17-2 {
  align-self: center;
  background-color: var(--laurel);
  border-radius: 4px;
  height: 8px;
  width: 8px;
}

.x-subscriptions {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
}

.frame-2553-1 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 21px;
  min-width: 192px;
}

.ellipse-17-3 {
  align-self: center;
  background-color: var(--tana);
  border-radius: 4px;
  height: 8px;
  width: 8px;
}

.flex-row-77 {
  align-items: center;
  display: flex;
  gap: 14px;
  margin-top: 35px;
  min-width: 1088px;
}

.label-228 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  min-width: 22px;
  white-space: nowrap;
}

.line-70-1 {
  height: 1px;
  margin-top: 3px;
  width: 1052px;
}

.flex-row-78 {
  align-items: flex-start;
  display: flex;
  gap: 14px;
  height: 173px;
  min-width: 1088px;
}

.label-container-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 150px;
  width: 22px;
}

.label-229 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}

.label-230 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 8px;
  white-space: nowrap;
}

.label-231 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 6px;
  white-space: nowrap;
}

.flex-col-130 {
  align-items: center;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 169px;
  width: 1052px;
}

.overlap-group1-10 {
  height: 137px;
  position: relative;
  width: 1052px;
}

.overlap-group-24 {
  height: 137px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1052px;
}

.line-703-1 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 9px;
  width: 1052px;
}

.line-704-1 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 41px;
  width: 1052px;
}

.line-705-1 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 73px;
  width: 1052px;
}

.line-706-1 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 105px;
  width: 1052px;
}

.rectangle-6494-12 {
  background-color: var(--laurel);
  border-radius: 6px;
  height: 96px;
  left: 24px;
  position: absolute;
  top: 41px;
  width: 24px;
}

.rectangle-6495-12 {
  background-color: var(--tana);
  border-radius: 6px;
  height: 56px;
  left: 48px;
  position: absolute;
  top: 81px;
  width: 24px;
}

.rectangle-6494-13 {
  background-color: var(--laurel);
  border-radius: 6px;
  height: 87px;
  left: 112px;
  position: absolute;
  top: 50px;
  width: 24px;
}

.rectangle-6495-13 {
  background-color: var(--tana);
  border-radius: 6px;
  height: 73px;
  left: 136px;
  position: absolute;
  top: 64px;
  width: 24px;
}

.rectangle-6494-14 {
  background-color: var(--laurel);
  border-radius: 6px;
  height: 56px;
  left: 200px;
  position: absolute;
  top: 81px;
  width: 24px;
}

.rectangle-6495-14 {
  background-color: var(--tana);
  border-radius: 6px;
  height: 96px;
  left: 224px;
  position: absolute;
  top: 41px;
  width: 24px;
}

.rectangle-6494-15 {
  background-color: var(--laurel);
  border-radius: 6px;
  height: 137px;
  left: 288px;
  position: absolute;
  top: 0;
  width: 24px;
}

.rectangle-6495-15 {
  background-color: var(--tana);
  border-radius: 6px;
  height: 73px;
  left: 312px;
  position: absolute;
  top: 64px;
  width: 24px;
}

.rectangle-6494-16 {
  background-color: var(--laurel);
  border-radius: 6px;
  height: 108px;
  left: 376px;
  position: absolute;
  top: 29px;
  width: 24px;
}

.rectangle-6495-16 {
  background-color: var(--tana);
  border-radius: 6px;
  height: 91px;
  left: 400px;
  position: absolute;
  top: 46px;
  width: 24px;
}

.rectangle-6494-17 {
  background-color: var(--laurel);
  border-radius: 6px;
  height: 52px;
  left: 464px;
  position: absolute;
  top: 85px;
  width: 24px;
}

.rectangle-6494-18 {
  background-color: var(--laurel);
  border-radius: 6px;
  height: 96px;
  left: 552px;
  position: absolute;
  top: 41px;
  width: 24px;
}

.rectangle-6495-17 {
  background-color: var(--tana);
  border-radius: 6px;
  height: 102px;
  left: 576px;
  position: absolute;
  top: 35px;
  width: 24px;
}

.rectangle-6495-18 {
  background-color: var(--tana);
  border-radius: 6px;
  height: 73px;
  left: 664px;
  position: absolute;
  top: 64px;
  width: 24px;
}

.rectangle-6494-19 {
  background-color: var(--laurel);
  border-radius: 6px;
  height: 129px;
  left: 728px;
  position: absolute;
  top: 8px;
  width: 24px;
}

.rectangle-6494-20 {
  background-color: var(--laurel);
  border-radius: 6px;
  height: 60px;
  left: 816px;
  position: absolute;
  top: 77px;
  width: 24px;
}

.rectangle-6495-19 {
  background-color: var(--tana);
  border-radius: 6px;
  height: 73px;
  left: 840px;
  position: absolute;
  top: 64px;
  width: 24px;
}

.rectangle-6494-21 {
  background-color: var(--laurel);
  border-radius: 6px;
  height: 91px;
  left: 904px;
  position: absolute;
  top: 46px;
  width: 24px;
}

.rectangle-6495-20 {
  background-color: var(--tana);
  border-radius: 6px;
  height: 84px;
  left: 928px;
  position: absolute;
  top: 53px;
  width: 24px;
}

.rectangle-6494-22 {
  background-color: var(--laurel);
  border-radius: 6px;
  height: 66px;
  left: 992px;
  position: absolute;
  top: 71px;
  width: 24px;
}

.rectangle-6495-21 {
  background-color: var(--tana);
  border-radius: 6px;
  height: 73px;
  left: 1016px;
  position: absolute;
  top: 64px;
  width: 24px;
}

.rectangle-6495-22 {
  background-color: var(--tana);
  border-radius: 6px;
  height: 27px;
  left: 488px;
  position: absolute;
  top: 110px;
  width: 24px;
}

.rectangle-6494-23 {
  background-color: var(--laurel);
  border-radius: 6px;
  height: 22px;
  left: 640px;
  position: absolute;
  top: 115px;
  width: 24px;
}

.rectangle-6495-23 {
  background-color: var(--tana);
  border-radius: 6px;
  height: 18px;
  left: 752px;
  position: absolute;
  top: 119px;
  width: 24px;
}

.line-707-1 {
  height: 1px;
  width: 1052px;
}

.frame-2552-1 {
  align-items: flex-start;
  display: flex;
  gap: 65px;
  margin-left: 3px;
  margin-top: 11px;
  min-width: 981px;
}

.label-232 {
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  min-width: 23px;
  text-align: center;
  white-space: nowrap;
}

.label-233 {
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  min-width: 22px;
  text-align: center;
  white-space: nowrap;
}

.label-234 {
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  min-width: 21px;
  text-align: center;
  white-space: nowrap;
}

.label-235 {
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  min-width: 26px;
  text-align: center;
  white-space: nowrap;
}

.label-236 {
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  min-width: 17px;
  text-align: center;
  white-space: nowrap;
}

.label-237 {
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  min-width: 24px;
  text-align: center;
  white-space: nowrap;
}

.information-3 {
  align-items: flex-start;
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

.tab-22 {
  align-items: center;
  display: flex;
  gap: 16px;
  height: 40px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 400px;
}

.tab-menu-65 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 200px;
}

.label-241 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: 9px;
  min-width: 138px;
  white-space: nowrap;
}

.rectangle-6502-28 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 200px;
}

.label-242 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  min-width: 168px;
  white-space: nowrap;
}

.line-701-29 {
  align-self: center;
  height: 1px;
  width: 1088px;
}

.table-25 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  height: 192px;
  margin-top: 31px;
  min-width: 1088px;
  position: relative;
}

.column-6 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 192px;
  padding: 9px 0;
  width: 112px;
}

.subscription-124 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 4px;
  min-height: 20px;
  width: 88px;
}

.number-64 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 22px;
  min-height: 20px;
  width: 88px;
}

.number-63 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 16px;
  min-height: 20px;
  width: 88px;
}

.column-7 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 192px;
  padding: 9px 0;
  width: 192px;
}

.customer-117 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 4px;
  min-height: 20px;
  width: 168px;
}

.x12-sara-carlsson-5 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 22px;
  min-height: 20px;
  width: 168px;
}

.x12-sara-carlsson-4 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 16px;
  min-height: 20px;
  width: 168px;
}

.chart-2 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 392px;
  margin-top: 24px;
  overflow: hidden;
  padding: 24px 0;
  width: 1152px;
}

.flex-col-131 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 187px;
  width: 1088px;
}

.header-62 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  min-width: 185px;
  position: relative;
}

.button-155 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 37px;
  margin-left: 675px;
  min-width: 96px;
  padding: 7px 12px;
  transition: all 0.15s ease;
}

.upcoming-revenue-active-subscriptions {
  letter-spacing: 0;
  line-height: normal;
  margin-top: 30px;
  min-height: 21px;
}

.flex-row-79 {
  align-items: center;
  display: flex;
  gap: 14px;
  margin-top: 43px;
  min-width: 1088px;
}

.flex-row-80 {
  align-items: center;
  display: flex;
  gap: 14px;
  margin-top: 8px;
  min-width: 1088px;
}

.flex-row-81 {
  align-items: flex-start;
  display: flex;
  gap: 15px;
  height: 141px;
  min-width: 1088px;
}

.label-container-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 118px;
  width: 21px;
}

.flex-col-132 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 141px;
  width: 1052px;
}

.overlap-group2-2 {
  height: 96px;
  position: relative;
  width: 1052px;
}

.line-704-2 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 13px;
  width: 1052px;
}

.line-705-2 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 45px;
  width: 1052px;
}

.line-706-2 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 77px;
  width: 1052px;
}

.vector-1 {
  height: 90px;
  left: 46px;
  position: absolute;
  top: 2px;
  width: 959px;
}

.ellipse-81 {
  background-color: var(--purple-heart-2);
  border-radius: 3px;
  height: 6px;
  left: 135px;
  position: absolute;
  top: 28px;
  width: 6px;
}

.ellipse-92 {
  background-color: var(--purple-heart-2);
  border-radius: 3px;
  height: 6px;
  left: 45px;
  position: absolute;
  top: 64px;
  width: 6px;
}

.ellipse-82 {
  background-color: var(--purple-heart-2);
  border-radius: 3px;
  height: 6px;
  left: 220px;
  position: absolute;
  top: 56px;
  width: 6px;
}

.ellipse-83 {
  background-color: var(--purple-heart-2);
  border-radius: 3px;
  height: 6px;
  left: 305px;
  position: absolute;
  top: 45px;
  width: 6px;
}

.ellipse-84 {
  background-color: var(--purple-heart-2);
  border-radius: 3px;
  height: 6px;
  left: 393px;
  position: absolute;
  top: 82px;
  width: 6px;
}

.ellipse-85 {
  background-color: var(--purple-heart-2);
  border-radius: 3px;
  height: 6px;
  left: 478px;
  position: absolute;
  top: 21px;
  width: 6px;
}

.ellipse-86 {
  background-color: var(--purple-heart-2);
  border-radius: 3px;
  height: 6px;
  left: 567px;
  position: absolute;
  top: 42px;
  width: 6px;
}

.ellipse-87 {
  background-color: var(--purple-heart-2);
  border-radius: 3px;
  height: 6px;
  left: 649px;
  position: absolute;
  top: 0;
  width: 6px;
}

.ellipse-88 {
  background-color: var(--purple-heart-2);
  border-radius: 3px;
  height: 6px;
  left: 741px;
  position: absolute;
  top: 31px;
  width: 6px;
}

.ellipse-89 {
  background-color: var(--purple-heart-2);
  border-radius: 3px;
  height: 6px;
  left: 825px;
  position: absolute;
  top: 90px;
  width: 6px;
}

.ellipse-90 {
  background-color: var(--purple-heart-2);
  border-radius: 3px;
  height: 6px;
  left: 915px;
  position: absolute;
  top: 71px;
  width: 6px;
}

.ellipse-91 {
  background-color: var(--purple-heart-2);
  border-radius: 3px;
  height: 6px;
  left: 1002px;
  position: absolute;
  top: 34px;
  width: 6px;
}

.line-707-2 {
  height: 1px;
  margin-top: 13px;
  width: 1052px;
}
</style>
