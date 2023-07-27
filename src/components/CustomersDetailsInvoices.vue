<template>
  <div class="container-center-horizontal">
    <form class="customers-u47-details-u47-invoices screen" name="form87" action="form87" method="post">
      <left-navigation-menu5 v-bind="leftNavigationMenu5Props" />
      <div class="flex-col-226">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-235">
          <div class="flex-col-227">
            <div class="header-109">
              <a href="javascript:SubmitForm('form87')">
                <div class="button-283">
                  <img class="chevron-left-34" :src="chevronLeft" alt="Chevron Left" />
                  <div class="text-418 poppins-medium-ebony-14px">
                    <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                  </div>
                </div></a
              >
              <div class="page-header-98 poppins-semi-bold-ebony-20px">
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
            <div class="statistics-9">
              <div class="flex-row-236">
                <div class="flex-col-228">
                  <div class="header-110">
                    <frame2443 :src="frame2443Props.src" />
                    <div class="title-112 poppins-semi-bold-ebony-20px">
                      <span class="poppins-semi-bold-ebony-20px">{{ spanText4 }}</span>
                    </div>
                  </div>
                  <div class="place-112 poppins-medium-ebony-14px">
                    <span class="poppins-medium-ebony-14px">{{ spanText5 }}</span>
                  </div>
                </div>
                <div class="value poppins-normal-comet-13px">
                  <span class="poppins-normal-comet-13px">{{ spanText6 }}</span>
                </div>
                <a href="javascript:SubmitForm('form87')" className="align-self-flex-start">
                  <div class="icon-button-385"><img class="add-95" :src="add1" alt="Add" /></div
                ></a>
              </div>
              <img class="line-613-2" :src="line6131" alt="Line 613" />
              <div class="flex-row-237">
                <div class="regnr poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText7 }}</span>
                </div>
                <div class="number-82 poppins-normal-comet-13px">
                  <span class="poppins-normal-comet-13px">{{ spanText8 }}</span>
                </div>
                <div class="icon-button-384" :style="{ 'background-image': 'url(' + iconButton1 + ')' }"></div>
              </div>
              <div class="flex-row-234">
                <div class="regnr poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText9 }}</span>
                </div>
                <div class="number-82 poppins-normal-comet-13px">
                  <span class="poppins-normal-comet-13px">{{ spanText10 }}</span>
                </div>
                <div class="icon-button-384" :style="{ 'background-image': 'url(' + iconButton2 + ')' }"></div>
              </div>
              <div class="flex-row-234">
                <div class="regnr poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText11 }}</span>
                </div>
                <div class="number-82 poppins-normal-comet-13px">
                  <span class="poppins-normal-comet-13px">{{ spanText12 }}</span>
                </div>
                <div class="icon-button-384" :style="{ 'background-image': 'url(' + iconButton3 + ')' }"></div>
              </div>
              <div class="flex-row-234">
                <div class="regnr poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText13 }}</span>
                </div>
                <div class="number-82 poppins-normal-comet-13px">
                  <span class="poppins-normal-comet-13px">{{ spanText14 }}</span>
                </div>
                <div class="icon-button-384" :style="{ 'background-image': 'url(' + iconButton4 + ')' }"></div>
              </div>
              <div class="flex-row-234">
                <div class="regnr poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText15 }}</span>
                </div>
                <div class="number-82 poppins-normal-comet-13px">
                  <span class="poppins-normal-comet-13px">{{ spanText16 }}</span>
                </div>
                <div class="icon-button-384" :style="{ 'background-image': 'url(' + iconButton5 + ')' }"></div>
              </div>
            </div>
          </div>
          <div class="information-35">
            <div class="frame-2478-10">
              <div class="tab-menu-174">
                <div class="flex-row-238">
                  <img class="invoice-160" :src="invoice" alt="Invoice" />
                  <div class="label-515 poppins-medium-caribbean-green-14px">
                    <span class="poppins-medium-caribbean-green-14px">{{ spanText17 }}</span>
                  </div>
                </div>
                <div class="rectangle-6502-72"></div>
              </div>
              <a href="javascript:SubmitForm('form87')">
                <div class="tab-menu-175">
                  <img class="note-9" :src="note" alt="Note" />
                  <div class="label-514 poppins-medium-manatee-14px">
                    <span class="poppins-medium-manatee-14px">{{ spanText18 }}</span>
                  </div>
                </div></a
              ><a href="javascript:SubmitForm('form87')">
                <div class="tab-menu-176">
                  <img class="to-dos-126" :src="toDoS" alt="To-do&#39;s" />
                  <div class="label-514 poppins-medium-manatee-14px">
                    <span class="poppins-medium-manatee-14px">{{ spanText19 }}</span>
                  </div>
                </div></a
              ><a href="javascript:SubmitForm('form87')">
                <div class="tab-menu-177">
                  <img class="time" :src="time" alt="Time" />
                  <div class="label-514 poppins-medium-manatee-14px">
                    <span class="poppins-medium-manatee-14px">{{ spanText20 }}</span>
                  </div>
                </div></a
              >
            </div>
            <img class="line-613-3" :src="line6132" alt="Line 613" /><a
              href="javascript:SubmitForm('form87')"
              className="align-self-flex-end"
            >
              <div class="button-284">
                <img class="add-96" :src="add2" alt="Add" />
                <div class="text-419 poppins-medium-white-14px">
                  <span class="poppins-medium-white-14px">{{ spanText21 }}</span>
                </div>
              </div></a
            >
            <div class="table-57">
              <div class="row-customers-details-invoices">
                <div class="cell-759">
                  <div class="blue-t-shirt-xs-561 poppins-semi-bold-ebony-13px">
                    <span class="poppins-semi-bold-ebony-13px">{{ spanText22 }}</span>
                  </div>
                  <img class="sort-218" :src="sort1" alt="Sort" />
                </div>
                <div class="cell-758">
                  <div class="blue-t-shirt-xs-562 poppins-semi-bold-ebony-13px">
                    <span class="poppins-semi-bold-ebony-13px">{{ spanText23 }}</span>
                  </div>
                  <img class="sort-218" :src="sort2" alt="Sort" />
                </div>
                <div class="cell-760">
                  <div class="blue-t-shirt-xs-563 poppins-semi-bold-ebony-13px-2">
                    <span class="poppins-semi-bold-ebony-13px-2">{{ spanText24 }}</span>
                  </div>
                  <img class="sort-218" :src="sort3" alt="Sort" />
                </div>
                <div class="cell-758">
                  <div class="blue-t-shirt-xs-564 poppins-semi-bold-ebony-13px-2">
                    <span class="poppins-semi-bold-ebony-13px-2">{{ spanText25 }}</span>
                  </div>
                  <img class="sort-218" :src="sort4" alt="Sort" />
                </div>
                <div class="cell-758">
                  <div class="blue-t-shirt-xs-565 poppins-semi-bold-ebony-13px-2">
                    <span class="poppins-semi-bold-ebony-13px-2">{{ spanText26 }}</span>
                  </div>
                  <img class="sort-218" :src="sort5" alt="Sort" />
                </div>
                <cell62 :spanText="cell621Props.spanText" />
                <cell62 :spanText="cell622Props.spanText" />
              </div>
              <div class="table-row-54">
                <row-customers-details-invoices
                  :cellProps="rowCustomersDetailsInvoices1Props.cellProps"
                  :cell422Props="rowCustomersDetailsInvoices1Props.cell422Props"
                  :cell1721Props="rowCustomersDetailsInvoices1Props.cell1721Props"
                  :cell1722Props="rowCustomersDetailsInvoices1Props.cell1722Props"
                  :cell64Props="rowCustomersDetailsInvoices1Props.cell64Props"
                  :cell12Props="rowCustomersDetailsInvoices1Props.cell12Props"
                />
                <row-customers-details-invoices
                  :cellProps="rowCustomersDetailsInvoices2Props.cellProps"
                  :cell422Props="rowCustomersDetailsInvoices2Props.cell422Props"
                  :cell1721Props="rowCustomersDetailsInvoices2Props.cell1721Props"
                  :cell1722Props="rowCustomersDetailsInvoices2Props.cell1722Props"
                  :cell64Props="rowCustomersDetailsInvoices2Props.cell64Props"
                  :cell12Props="rowCustomersDetailsInvoices2Props.cell12Props"
                />
                <row-customers-details-invoices
                  :cellProps="rowCustomersDetailsInvoices3Props.cellProps"
                  :cell422Props="rowCustomersDetailsInvoices3Props.cell422Props"
                  :cell1721Props="rowCustomersDetailsInvoices3Props.cell1721Props"
                  :cell1722Props="rowCustomersDetailsInvoices3Props.cell1722Props"
                  :cell64Props="rowCustomersDetailsInvoices3Props.cell64Props"
                  :cell12Props="rowCustomersDetailsInvoices3Props.cell12Props"
                />
                <div class="row-customers-details-invoices">
                  <cell63 />
                  <cell :children="cell1Props.children" :className="cell1Props.className" />
                  <cell422 :className="cell4221Props.className" />
                  <cell172 :className="cell1721Props.className" />
                  <cell172 :className="cell1722Props.className" />
                  <cell122 :className="cell121Props.className" />
                  <cell64 :checkboxProps="cell64Props.checkboxProps" />
                </div>
                <div class="row-customers-details-invoices">
                  <cell63 />
                  <cell :children="cell2Props.children" :className="cell2Props.className" />
                  <cell422 :className="cell4222Props.className" />
                  <cell172 :className="cell1723Props.className" />
                  <cell172 :className="cell1724Props.className" />
                  <cell122 :className="cell122Props.className" />
                  <cell122 :className="cell123Props.className" />
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
import Information2 from "./Information2";
import Statistics from "./Statistics";
import Statistics2 from "./Statistics2";
import Frame2443 from "./Frame2443";
import Cell62 from "./Cell62";
import RowCustomersDetailsInvoices from "./RowCustomersDetailsInvoices";
import Cell63 from "./Cell63";
import Cell from "./Cell";
import Cell422 from "./Cell422";
import Cell172 from "./Cell172";
import Cell122 from "./Cell122";
import Cell64 from "./Cell64";
export default {
  name: "CustomersDetailsInvoices",
  components: {
    LeftNavigationMenu5,
    TopNavigation,
    Information2,
    Statistics,
    Statistics2,
    Frame2443,
    Cell62,
    RowCustomersDetailsInvoices,
    Cell63,
    Cell,
    Cell422,
    Cell172,
    Cell122,
    Cell64,
  },
  props: [
    "chevronLeft",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
    "add1",
    "line6131",
    "spanText7",
    "spanText8",
    "iconButton1",
    "spanText9",
    "spanText10",
    "iconButton2",
    "spanText11",
    "spanText12",
    "iconButton3",
    "spanText13",
    "spanText14",
    "iconButton4",
    "spanText15",
    "spanText16",
    "iconButton5",
    "invoice",
    "spanText17",
    "note",
    "spanText18",
    "toDoS",
    "spanText19",
    "time",
    "spanText20",
    "line6132",
    "add2",
    "spanText21",
    "spanText22",
    "sort1",
    "spanText23",
    "sort2",
    "spanText24",
    "sort3",
    "spanText25",
    "sort4",
    "spanText26",
    "sort5",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "information2Props",
    "statisticsProps",
    "statistics2Props",
    "frame2443Props",
    "cell621Props",
    "cell622Props",
    "rowCustomersDetailsInvoices1Props",
    "rowCustomersDetailsInvoices2Props",
    "rowCustomersDetailsInvoices3Props",
    "cell1Props",
    "cell4221Props",
    "cell1721Props",
    "cell1722Props",
    "cell121Props",
    "cell64Props",
    "cell2Props",
    "cell4222Props",
    "cell1723Props",
    "cell1724Props",
    "cell122Props",
    "cell123Props",
  ],
};
</script>

<style>
.customers-u47-details-u47-invoices {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 1540px;
  position: relative;
  width: 1440px;
}

.flex-col-226 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 1496px;
  position: relative;
  width: 1216px;
}

.flex-row-235 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 1400px;
  min-width: 1152px;
}

.flex-col-227 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 1400px;
  position: relative;
  width: 480px;
}

.header-109 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  min-width: 279px;
}

.button-283 {
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

.button-283:hover,
.icon-button-385:hover,
.tab-menu-175:hover,
.tab-menu-176:hover,
.tab-menu-177:hover,
.button-284:hover {
  transform: translate(0, -5px);
}

.chevron-left-34,
.add-96 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-418 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-98 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  white-space: nowrap;
}

.statistics-9 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 320px;
  margin-top: 24px;
  overflow: hidden;
  padding: 22px 0;
  width: 480px;
}

.flex-row-236 {
  align-items: flex-end;
  display: flex;
  height: 82px;
  min-width: 416px;
}

.flex-col-228 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 80px;
  width: 185px;
}

.header-110 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  min-width: 185px;
  position: relative;
}

.title-112 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.place-112 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
}

.value {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 1px;
  margin-left: 26px;
  min-height: 20px;
  min-width: 38px;
}

.icon-button-385 {
  align-items: center;
  align-self: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 32px;
  margin-left: 135px;
  min-width: 32px;
  padding: 0 6px;
  transition: all 0.15s ease;
}

.add-95 {
  height: 20px;
  width: 20px;
}

.line-613-2 {
  height: 1px;
  margin-top: 13px;
  width: 416px;
}

.flex-row-237 {
  align-items: flex-start;
  display: flex;
  height: 22px;
  margin-top: 10px;
  min-width: 416px;
}

.regnr {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 49px;
}

.number-82 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 0.5px;
  margin-left: 162px;
  min-height: 20px;
  min-width: 13px;
}

.icon-button-384 {
  align-self: flex-end;
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 172px;
  width: 20px;
}

.flex-row-234 {
  align-items: flex-start;
  display: flex;
  height: 22px;
  margin-top: 12px;
  min-width: 416px;
}

.information-35 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 740px;
  margin-top: 80px;
  overflow: hidden;
  padding: 24px 0;
  width: 648px;
}

.frame-2478-10 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  margin-left: 24px;
  min-width: 480px;
}

.tab-menu-174 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 120px;
}

.flex-row-238 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-top: 9px;
  min-width: 82px;
}

.invoice-160 {
  height: 18px;
  width: 18px;
}

.label-515 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 58px;
  white-space: nowrap;
}

.rectangle-6502-72 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 120px;
}

.tab-menu-175 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 120px;
  padding: 9px 27.5px;
  transition: all 0.15s ease;
}

.note-9,
.to-dos-126,
.time {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-514 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-176 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 120px;
  padding: 9px 20.5px;
  transition: all 0.15s ease;
}

.tab-menu-177 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 120px;
  padding: 9px 5.5px;
  transition: all 0.15s ease;
}

.line-613-3 {
  height: 1px;
  width: 600px;
}

.button-284 {
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
  min-width: 144px;
  padding: 8.5px 15.5px;
  transition: all 0.15s ease;
}

.text-419 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 85px;
  text-align: center;
}

.table-57 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 318px;
  margin-top: 24px;
  width: 600px;
}

.row-customers-details-invoices {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 600px;
}

.cell-759 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 64px;
}

.blue-t-shirt-xs-561 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 12px;
}

.sort-218 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-758 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 104px;
}

.blue-t-shirt-xs-562 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 54px;
}

.cell-760 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 6px;
  width: 96px;
}

.blue-t-shirt-xs-563 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 6px;
  min-height: 20px;
  min-width: 62px;
}

.blue-t-shirt-xs-564 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 26px;
}

.blue-t-shirt-xs-565 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 48px;
}

.table-row-54 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 264px;
  position: relative;
  width: 600px;
}
</style>
