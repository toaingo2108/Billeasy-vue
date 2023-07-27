<template>
  <div class="container-center-horizontal">
    <form class="subscriptions-u47-categories screen" name="form27" action="form27" method="post">
      <div class="overlap-group-53">
        <img class="line-701-41" :src="line701" alt="Line 701" /><table3
          :cell101Props="table3Props.cell101Props"
          :cell102Props="table3Props.cell102Props"
          :tableRow2Props="table3Props.tableRow2Props"
        />
        <left-navigation-menu32 v-bind="leftNavigationMenu3Props" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <actions2 :searchProps="actions2Props.searchProps" :buttons3Props="actions2Props.buttons3Props" />
        <x-button19 :className="buttonProps.className" />
        <bottom-section92
          :className="bottomSection9Props.className"
          :iconButtonProps="bottomSection9Props.iconButtonProps"
          :paginationProps="bottomSection9Props.paginationProps"
        />
        <div class="scroll-bar-22"></div>
        <h1 class="page-header-67 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <tab22 />
        <options
          :className="optionsProps.className"
          :dropdownItem1Props="optionsProps.dropdownItem1Props"
          :dropdownItem2Props="optionsProps.dropdownItem2Props"
          :dropdownItem3Props="optionsProps.dropdownItem3Props"
          :dropdownItem4Props="optionsProps.dropdownItem4Props"
          :dropdownItem5Props="optionsProps.dropdownItem5Props"
        />
        <div class="overlay-subscription-categories">
          <div class="subscriptions-categories">
            <div class="flex-row-162">
              <div class="flex-col-177">
                <div class="top-section">
                  <div class="title-97 poppins-semi-bold-ebony-20px">
                    <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                  </div>
                  <div class="actions-55">
                    <div class="input-118">
                      <img class="search-52" :src="search" alt="Search" /><input
                        class="input-text-192 poppins-normal-manatee-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder1"
                        :type="inputType1"
                      />
                    </div>
                    <a href="javascript:SubmitForm('form27')">
                      <div class="button-228">
                        <img class="add-68" :src="add" alt="Add" />
                        <div class="text-334 poppins-medium-white-14px">
                          <span class="poppins-medium-white-14px">{{ spanText3 }}</span>
                        </div>
                      </div></a
                    >
                  </div>
                </div>
                <div class="table-39">
                  <div class="table-head">
                    <cell27 />
                    <div class="cell-533">
                      <div class="blue-t-shirt-xs-358 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText4 }}</span>
                      </div>
                      <img class="sort-100" :src="sort1" alt="Sort" />
                    </div>
                    <div class="cell-534">
                      <div class="blue-t-shirt-xs-359 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText5 }}</span>
                      </div>
                      <img class="sort-100" :src="sort2" alt="Sort" />
                    </div>
                    <div class="cell-535">
                      <p class="blue-t-shirt-xs-360 poppins-semi-bold-ebony-13px">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText6 }}</span>
                      </p>
                      <img class="sort-100" :src="sort3" alt="Sort" />
                    </div>
                  </div>
                  <img class="divider-2" :src="divider" alt="Divider" />
                  <div class="table-data poppins-semi-bold-ebony-13px">
                    <div class="row-subscriptions-categories">
                      <div class="text-333">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText7 }}</span>
                      </div>
                      <div class="input-116">
                        <input
                          class="input-text-190 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder2"
                          :type="inputType2"
                        />
                      </div>
                      <div class="input-117">
                        <input
                          class="input-text-191 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder3"
                          :type="inputType3"
                        />
                      </div>
                      <div class="number-71">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText8 }}</span>
                      </div>
                      <dropdown82 />
                      <div class="icon-button-375" :style="{ 'background-image': 'url(' + iconButton1 + ')' }"></div>
                    </div>
                    <div class="row-subscriptions-categories">
                      <div class="text-333">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText9 }}</span>
                      </div>
                      <div class="input-116">
                        <input
                          class="input-text-190 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder4"
                          :type="inputType4"
                        />
                      </div>
                      <div class="input-117">
                        <input
                          class="input-text-191 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder5"
                          :type="inputType5"
                        />
                      </div>
                      <div class="number-71">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText10 }}</span>
                      </div>
                      <dropdown82 />
                      <div class="icon-button-375" :style="{ 'background-image': 'url(' + iconButton2 + ')' }"></div>
                    </div>
                    <div class="row-subscriptions-categories">
                      <div class="text-333">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText11 }}</span>
                      </div>
                      <div class="input-116">
                        <input
                          class="input-text-190 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder6"
                          :type="inputType6"
                        />
                      </div>
                      <div class="input-117">
                        <input
                          class="input-text-191 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder7"
                          :type="inputType7"
                        />
                      </div>
                      <div class="number-71">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText12 }}</span>
                      </div>
                      <dropdown82 />
                      <div class="icon-button-375" :style="{ 'background-image': 'url(' + iconButton3 + ')' }"></div>
                    </div>
                    <div class="row-subscriptions-categories">
                      <div class="text-333">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText13 }}</span>
                      </div>
                      <div class="input-116">
                        <input
                          class="input-text-190 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder8"
                          :type="inputType8"
                        />
                      </div>
                      <div class="input-117">
                        <input
                          class="input-text-191 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder9"
                          :type="inputType9"
                        />
                      </div>
                      <div class="number-71">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText14 }}</span>
                      </div>
                      <dropdown82 />
                      <div class="icon-button-375" :style="{ 'background-image': 'url(' + iconButton4 + ')' }"></div>
                    </div>
                    <div class="row-subscriptions-categories">
                      <div class="text-333">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText15 }}</span>
                      </div>
                      <div class="input-116">
                        <input
                          class="input-text-190 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder10"
                          :type="inputType10"
                        />
                      </div>
                      <div class="input-117">
                        <input
                          class="input-text-191 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder11"
                          :type="inputType11"
                        />
                      </div>
                      <div class="number-71">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText16 }}</span>
                      </div>
                      <dropdown82 />
                      <div class="icon-button-375" :style="{ 'background-image': 'url(' + iconButton5 + ')' }"></div>
                    </div>
                    <div class="row-subscriptions-categories">
                      <div class="text-333">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText17 }}</span>
                      </div>
                      <div class="input-116">
                        <input
                          class="input-text-190 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder12"
                          :type="inputType12"
                        />
                      </div>
                      <div class="input-117">
                        <input
                          class="input-text-191 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder13"
                          :type="inputType13"
                        />
                      </div>
                      <div class="number-71">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText18 }}</span>
                      </div>
                      <dropdown82 />
                      <div class="icon-button-375" :style="{ 'background-image': 'url(' + iconButton6 + ')' }"></div>
                    </div>
                    <div class="row-subscriptions-categories poppins-semi-bold-ebony-13px">
                      <div class="text-333">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText19 }}</span>
                      </div>
                      <div class="input-116">
                        <input
                          class="input-text-190 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder14"
                          :type="inputType14"
                        />
                      </div>
                      <div class="input-117">
                        <input
                          class="input-text-191 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder15"
                          :type="inputType15"
                        />
                      </div>
                      <div class="number-71">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText20 }}</span>
                      </div>
                      <dropdown82 />
                      <div class="icon-button-375" :style="{ 'background-image': 'url(' + iconButton7 + ')' }"></div>
                    </div>
                    <row-subscriptions-categories />
                    <row-subscriptions-categories />
                    <row-subscriptions-categories />
                    <row-subscriptions-categories />
                    <row-subscriptions-categories />
                    <row-subscriptions-categories />
                  </div>
                </div>
              </div>
              <div class="scroll-bar-23"></div>
            </div>
            <bottom-section222
              :topBorder="bottomSection22Props.topBorder"
              :paginationProps="bottomSection22Props.paginationProps"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Table3 from "./Table3";
import LeftNavigationMenu32 from "./LeftNavigationMenu32";
import TopNavigation from "./TopNavigation";
import Actions2 from "./Actions2";
import xButton19 from "./xButton19";
import BottomSection92 from "./BottomSection92";
import Tab22 from "./Tab22";
import Options from "./Options";
import Cell27 from "./Cell27";
import Dropdown82 from "./Dropdown82";
import RowSubscriptionsCategories from "./RowSubscriptionsCategories";
import BottomSection222 from "./BottomSection222";
export default {
  name: "SubscriptionsCategories",
  components: {
    Table3,
    LeftNavigationMenu32,
    TopNavigation,
    Actions2,
    xButton19,
    BottomSection92,
    Tab22,
    Options,
    Cell27,
    Dropdown82,
    RowSubscriptionsCategories,
    BottomSection222,
  },
  props: [
    "line701",
    "spanText1",
    "spanText2",
    "search",
    "inputType1",
    "inputPlaceholder1",
    "add",
    "spanText3",
    "spanText4",
    "sort1",
    "spanText5",
    "sort2",
    "spanText6",
    "sort3",
    "divider",
    "spanText7",
    "inputType2",
    "inputPlaceholder2",
    "inputType3",
    "inputPlaceholder3",
    "spanText8",
    "iconButton1",
    "spanText9",
    "inputType4",
    "inputPlaceholder4",
    "inputType5",
    "inputPlaceholder5",
    "spanText10",
    "iconButton2",
    "spanText11",
    "inputType6",
    "inputPlaceholder6",
    "inputType7",
    "inputPlaceholder7",
    "spanText12",
    "iconButton3",
    "spanText13",
    "inputType8",
    "inputPlaceholder8",
    "inputType9",
    "inputPlaceholder9",
    "spanText14",
    "iconButton4",
    "spanText15",
    "inputType10",
    "inputPlaceholder10",
    "inputType11",
    "inputPlaceholder11",
    "spanText16",
    "iconButton5",
    "spanText17",
    "inputType12",
    "inputPlaceholder12",
    "inputType13",
    "inputPlaceholder13",
    "spanText18",
    "iconButton6",
    "spanText19",
    "inputType14",
    "inputPlaceholder14",
    "inputType15",
    "inputPlaceholder15",
    "spanText20",
    "iconButton7",
    "table3Props",
    "leftNavigationMenu3Props",
    "topNavigationProps",
    "actions2Props",
    "buttonProps",
    "bottomSection9Props",
    "optionsProps",
    "bottomSection22Props",
  ],
};
</script>

<style>
.subscriptions-u47-categories {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-53 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.line-701-41 {
  height: 1px;
  left: 256px;
  position: absolute;
  top: 208px;
  width: 1152px;
}

.scroll-bar-22 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 382px;
  width: 12px;
}

.page-header-67 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-subscription-categories {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-end;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 145px 48px;
  position: absolute;
  top: 0;
}

.subscriptions-categories {
  align-items: flex-end;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 676px;
  overflow: hidden;
  position: relative;
  width: 1120px;
}

.flex-row-162 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 548px;
  margin-top: 32px;
  min-width: 1088px;
}

.flex-col-177 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 56px;
  min-height: 548px;
  width: 1056px;
}

.top-section {
  align-items: center;
  display: flex;
  gap: 431px;
  min-width: 1056px;
}

.title-97 {
  letter-spacing: 0;
  line-height: 28px;
  margin-bottom: 2px;
  min-width: 257px;
  white-space: nowrap;
}

.actions-55 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 368px;
}

.input-118 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 207px;
}

.search-52,
.add-68 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-192 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 155px;
}

.input-text-192::placeholder {
  color: #8a8aa899;
}

.button-228 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 153px;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
}

.button-228:hover {
  transform: translate(0, -5px);
}

.text-334 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 101px;
  text-align: center;
}

.table-39 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 452px;
  width: 1056px;
}

.table-head {
  align-items: flex-start;
  display: flex;
  min-width: 1056px;
  padding: 0 36px;
  position: relative;
}

.cell-533 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 28px;
  padding: 3px 12px;
  width: 488px;
}

.blue-t-shirt-xs-358 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 76px;
}

.sort-100 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-534 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 28px;
  padding: 3px 15.5px;
  width: 168px;
}

.blue-t-shirt-xs-359 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 121px;
}

.cell-535 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 28px;
  padding: 3px 12px;
  width: 156px;
}

.blue-t-shirt-xs-360 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 108px;
}

.divider-2 {
  height: 1px;
  margin-top: 16px;
  width: 1056px;
}

.table-data {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 392px;
  margin-top: 15px;
  overflow: hidden;
  position: relative;
  width: 1056px;
}

.row-subscriptions-categories {
  align-items: center;
  display: flex;
  min-width: 1056px;
  position: relative;
}

.text-333 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 20px;
  width: 24px;
}

.input-116 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  margin-left: 12px;
  overflow: hidden;
  padding: 7px 12px;
  width: 144px;
}

.input-text-190 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 120px;
}

.input-text-190::placeholder,
.input-text-191::placeholder {
  color: #0d0d1d99;
}

.input-117 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  margin-left: 12px;
  overflow: hidden;
  padding: 7px 12px;
  width: 464px;
}

.input-text-191 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 440px;
}

.number-71 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 12px;
  min-height: 20px;
  text-align: center;
  width: 168px;
}

.icon-button-375 {
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 22px;
  width: 20px;
}

.scroll-bar-23 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 128px;
  width: 12px;
}
</style>
