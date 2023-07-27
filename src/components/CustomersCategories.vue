<template>
  <div class="container-center-horizontal">
    <form class="customers-u47-categories screen" name="form75" action="form75" method="post">
      <div class="overlap-group-66">
        <table9 v-bind="table9Props" />
        <left-navigation-menu5 v-bind="leftNavigationMenu5Props" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <actions5
          :searchProps="actions5Props.searchProps"
          :iconButton1Props="actions5Props.iconButton1Props"
          :iconButton2Props="actions5Props.iconButton2Props"
          :iconButton3Props="actions5Props.iconButton3Props"
        />
        <x-button19 :className="buttonProps.className" />
        <bottom-section92
          :className="bottomSection92Props.className"
          :iconButtonProps="bottomSection92Props.iconButtonProps"
          :paginationProps="bottomSection92Props.paginationProps"
        />
        <div class="scroll-bar-34"></div>
        <h1 class="page-header-92 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="overlay-product-categories">
          <div class="customers-categories">
            <div class="flex-row-218">
              <div class="flex-col-218">
                <div class="top-section-1">
                  <div class="title-108 poppins-semi-bold-ebony-20px">
                    <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                  </div>
                  <div class="actions-61">
                    <div class="input-179">
                      <img class="search-61" :src="search" alt="Search" /><input
                        class="input-text-284 poppins-normal-manatee-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder1"
                        :type="inputType1"
                      />
                    </div>
                    <a href="javascript:SubmitForm('form75')">
                      <div class="button-274">
                        <img class="add-88" :src="add" alt="Add" />
                        <div class="text-408 poppins-medium-white-14px">
                          <span class="poppins-medium-white-14px">{{ spanText3 }}</span>
                        </div>
                      </div></a
                    >
                  </div>
                </div>
                <div class="table-50 poppins-semi-bold-ebony-13px">
                  <div class="table-head-1">
                    <cell27 />
                    <div class="cell-628">
                      <div class="blue-t-shirt-xs-453">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText4 }}</span>
                      </div>
                      <img class="sort-155" :src="sort1" alt="Sort" />
                    </div>
                    <div class="cell-629">
                      <div class="blue-t-shirt-xs-454">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText5 }}</span>
                      </div>
                      <img class="sort-155" :src="sort2" alt="Sort" />
                    </div>
                  </div>
                  <img class="divider-3" :src="divider" alt="Divider" />
                  <div class="table-data-1">
                    <div class="row-product-categories">
                      <div class="text-1-4">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText6 }}</span>
                      </div>
                      <div class="input-177">
                        <input
                          class="input-text-282 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder2"
                          :type="inputType2"
                        />
                      </div>
                      <div class="input-178">
                        <input
                          class="input-text-283 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder3"
                          :type="inputType3"
                        />
                      </div>
                      <div class="x133">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText7 }}</span>
                      </div>
                      <div class="icon-button-380" :style="{ 'background-image': 'url(' + iconButton1 + ')' }"></div>
                    </div>
                    <div class="row-product-categories">
                      <div class="text-1-4">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText8 }}</span>
                      </div>
                      <div class="input-177">
                        <input
                          class="input-text-282 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder4"
                          :type="inputType4"
                        />
                      </div>
                      <div class="input-178">
                        <input
                          class="input-text-283 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder5"
                          :type="inputType5"
                        />
                      </div>
                      <div class="number-74">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText9 }}</span>
                      </div>
                      <div class="icon-button-380" :style="{ 'background-image': 'url(' + iconButton2 + ')' }"></div>
                    </div>
                    <div class="row-product-categories">
                      <div class="text-1-4">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText10 }}</span>
                      </div>
                      <div class="input-177">
                        <input
                          class="input-text-282 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder6"
                          :type="inputType6"
                        />
                      </div>
                      <div class="input-178">
                        <input
                          class="input-text-283 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder7"
                          :type="inputType7"
                        />
                      </div>
                      <div class="number-75">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText11 }}</span>
                      </div>
                      <div class="icon-button-380" :style="{ 'background-image': 'url(' + iconButton3 + ')' }"></div>
                    </div>
                    <div class="row-product-categories">
                      <div class="text-1-4">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText12 }}</span>
                      </div>
                      <div class="input-177">
                        <input
                          class="input-text-282 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder8"
                          :type="inputType8"
                        />
                      </div>
                      <div class="input-178">
                        <input
                          class="input-text-283 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder9"
                          :type="inputType9"
                        />
                      </div>
                      <div class="number-76">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText13 }}</span>
                      </div>
                      <div class="icon-button-380" :style="{ 'background-image': 'url(' + iconButton4 + ')' }"></div>
                    </div>
                    <div class="row-product-categories">
                      <div class="text-1-4">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText14 }}</span>
                      </div>
                      <div class="input-177">
                        <input
                          class="input-text-282 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder10"
                          :type="inputType10"
                        />
                      </div>
                      <div class="input-178">
                        <input
                          class="input-text-283 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder11"
                          :type="inputType11"
                        />
                      </div>
                      <div class="number-77">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText15 }}</span>
                      </div>
                      <div class="icon-button-380" :style="{ 'background-image': 'url(' + iconButton5 + ')' }"></div>
                    </div>
                    <div class="row-product-categories">
                      <div class="text-1-4">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText16 }}</span>
                      </div>
                      <div class="input-177">
                        <input
                          class="input-text-282 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder12"
                          :type="inputType12"
                        />
                      </div>
                      <div class="input-178">
                        <input
                          class="input-text-283 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder13"
                          :type="inputType13"
                        />
                      </div>
                      <div class="number-78">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText17 }}</span>
                      </div>
                      <div class="icon-button-380" :style="{ 'background-image': 'url(' + iconButton6 + ')' }"></div>
                    </div>
                    <div class="row-product-categories poppins-semi-bold-ebony-13px">
                      <div class="text-1-4">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText18 }}</span>
                      </div>
                      <div class="input-177">
                        <input
                          class="input-text-282 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder14"
                          :type="inputType14"
                        />
                      </div>
                      <div class="input-178">
                        <input
                          class="input-text-283 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder15"
                          :type="inputType15"
                        />
                      </div>
                      <div class="number-79">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText19 }}</span>
                      </div>
                      <div class="icon-button-380" :style="{ 'background-image': 'url(' + iconButton7 + ')' }"></div>
                    </div>
                    <row-product-categories />
                    <row-product-categories />
                    <row-product-categories />
                    <row-product-categories />
                    <row-product-categories />
                    <row-product-categories />
                  </div>
                </div>
              </div>
              <div class="scroll-bar-35"></div>
            </div>
            <bottom-section222
              :topBorder="bottomSection222Props.topBorder"
              :paginationProps="bottomSection222Props.paginationProps"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Table9 from "./Table9";
import LeftNavigationMenu5 from "./LeftNavigationMenu5";
import TopNavigation from "./TopNavigation";
import Actions5 from "./Actions5";
import xButton19 from "./xButton19";
import BottomSection92 from "./BottomSection92";
import Cell27 from "./Cell27";
import RowProductCategories from "./RowProductCategories";
import BottomSection222 from "./BottomSection222";
export default {
  name: "CustomersCategories",
  components: {
    Table9,
    LeftNavigationMenu5,
    TopNavigation,
    Actions5,
    xButton19,
    BottomSection92,
    Cell27,
    RowProductCategories,
    BottomSection222,
  },
  props: [
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
    "divider",
    "spanText6",
    "inputType2",
    "inputPlaceholder2",
    "inputType3",
    "inputPlaceholder3",
    "spanText7",
    "iconButton1",
    "spanText8",
    "inputType4",
    "inputPlaceholder4",
    "inputType5",
    "inputPlaceholder5",
    "spanText9",
    "iconButton2",
    "spanText10",
    "inputType6",
    "inputPlaceholder6",
    "inputType7",
    "inputPlaceholder7",
    "spanText11",
    "iconButton3",
    "spanText12",
    "inputType8",
    "inputPlaceholder8",
    "inputType9",
    "inputPlaceholder9",
    "spanText13",
    "iconButton4",
    "spanText14",
    "inputType10",
    "inputPlaceholder10",
    "inputType11",
    "inputPlaceholder11",
    "spanText15",
    "iconButton5",
    "spanText16",
    "inputType12",
    "inputPlaceholder12",
    "inputType13",
    "inputPlaceholder13",
    "spanText17",
    "iconButton6",
    "spanText18",
    "inputType14",
    "inputPlaceholder14",
    "inputType15",
    "inputPlaceholder15",
    "spanText19",
    "iconButton7",
    "table9Props",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "actions5Props",
    "buttonProps",
    "bottomSection92Props",
    "bottomSection222Props",
  ],
};
</script>

<style>
.customers-u47-categories {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-66 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.scroll-bar-34 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 310px;
  width: 12px;
}

.page-header-92 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-product-categories {
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

.customers-categories {
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

.flex-row-218 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 548px;
  margin-top: 32px;
  min-width: 1088px;
}

.flex-col-218 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 56px;
  min-height: 548px;
  width: 1056px;
}

.top-section-1 {
  align-items: center;
  display: flex;
  gap: 469px;
  min-width: 1056px;
}

.title-108 {
  letter-spacing: 0;
  line-height: 28px;
  margin-bottom: 2px;
  min-width: 219px;
  white-space: nowrap;
}

.actions-61 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 368px;
}

.input-179 {
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

.search-61,
.add-88 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-284 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 155px;
}

.input-text-284::placeholder {
  color: #8a8aa899;
}

.button-274 {
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

.button-274:hover {
  transform: translate(0, -5px);
}

.text-408 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 101px;
  text-align: center;
}

.table-50 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 452px;
  width: 1056px;
}

.table-head-1 {
  align-items: flex-start;
  display: flex;
  min-width: 1056px;
  padding: 0 36px;
  position: relative;
}

.cell-628 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 28px;
  padding: 3px 12px;
  width: 620px;
}

.blue-t-shirt-xs-453 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 76px;
}

.sort-155 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-629 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 28px;
  overflow: hidden;
  padding: 3px 0;
  width: 192px;
}

.blue-t-shirt-xs-454 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 12px;
  min-height: 20px;
  min-width: 165px;
}

.divider-3 {
  height: 1px;
  margin-top: 16px;
  width: 1056px;
}

.table-data-1 {
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

.row-product-categories {
  align-items: center;
  display: flex;
  min-width: 1056px;
}

.text-1-4 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 20px;
  width: 24px;
}

.input-177 {
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

.input-text-282 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 120px;
}

.input-text-282::placeholder,
.input-text-283::placeholder {
  color: #0d0d1d99;
}

.input-178 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  margin-left: 12px;
  overflow: hidden;
  padding: 7px 12px;
  width: 596px;
}

.input-text-283 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 572px;
}

.x133,
.number-74,
.number-75,
.number-76,
.number-77,
.number-78,
.number-79 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 12px;
  min-height: 20px;
  text-align: center;
  width: 192px;
}

.icon-button-380 {
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 22px;
  width: 20px;
}

.scroll-bar-35 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 128px;
  width: 12px;
}
</style>
