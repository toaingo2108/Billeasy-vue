<template>
  <div class="container-center-horizontal">
    <form class="products-u47-categories screen" name="form113" action="form113" method="post">
      <div class="overlap-group-81">
        <table11 v-bind="table11Props" />
        <left-navigation-menu10 v-bind="leftNavigationMenu10Props" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <actions6 :searchProps="actions6Props.searchProps" :buttons5Props="actions6Props.buttons5Props" />
        <bottom-section92
          :className="bottomSection92Props.className"
          :iconButtonProps="bottomSection92Props.iconButtonProps"
          :paginationProps="bottomSection92Props.paginationProps"
        />
        <div class="scroll-bar-41"></div>
        <h1 class="page-header-116 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="overlay-product-categories-1">
          <div class="product-categories">
            <div class="flex-row-324">
              <div class="flex-col-279">
                <div class="top-section-2">
                  <div class="title-204 poppins-semi-bold-ebony-20px">
                    <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                  </div>
                  <div class="actions-68">
                    <div class="input-201">
                      <img class="search-67" :src="search" alt="Search" /><input
                        class="input-text-305 poppins-normal-manatee-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder1"
                        :type="inputType1"
                      />
                    </div>
                    <a href="javascript:SubmitForm('form113')">
                      <div class="button-303">
                        <img class="add-104" :src="add" alt="Add" />
                        <div class="text-439 poppins-medium-white-14px">
                          <span class="poppins-medium-white-14px">{{ spanText3 }}</span>
                        </div>
                      </div></a
                    >
                  </div>
                </div>
                <div class="table-63 poppins-semi-bold-ebony-13px">
                  <div class="table-head-2">
                    <div class="cell-784">
                      <div class="blue-t-shirt-xs-585">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText4 }}</span>
                      </div>
                      <img class="sort-225" :src="sort1" alt="Sort" />
                    </div>
                    <div class="cell-785">
                      <div class="blue-t-shirt-xs-585">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText5 }}</span>
                      </div>
                      <img class="sort-225" :src="sort2" alt="Sort" />
                    </div>
                    <div class="cell-786">
                      <div class="blue-t-shirt-xs-586">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText6 }}</span>
                      </div>
                      <img class="sort-225" :src="sort3" alt="Sort" />
                    </div>
                  </div>
                  <img class="divider-4" :src="divider" alt="Divider" />
                  <div class="table-data-2">
                    <div class="row-product-categories-3">
                      <div class="text-16-2">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText7 }}</span>
                      </div>
                      <input42 />
                      <div class="input-200">
                        <input
                          class="input-text-304 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder2"
                          :type="inputType2"
                        />
                      </div>
                      <div class="x133-1">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText8 }}</span>
                      </div>
                      <div class="icon-button-401" :style="{ 'background-image': 'url(' + iconButton1 + ')' }"></div>
                    </div>
                    <row-product-categories />
                    <div class="row-product-categories-4">
                      <div class="text-16-2">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText9 }}</span>
                      </div>
                      <div class="input-202">
                        <input
                          class="input-text-306 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder3"
                          :type="inputType3"
                        />
                      </div>
                      <div class="input-200">
                        <input
                          class="input-text-304 poppins-normal-ebony-14px"
                          name="inputtext"
                          :placeholder="inputPlaceholder4"
                          :type="inputType4"
                        />
                      </div>
                      <div class="number-122">
                        <span class="poppins-semi-bold-ebony-13px">{{ spanText10 }}</span>
                      </div>
                      <div class="icon-button-401" :style="{ 'background-image': 'url(' + iconButton2 + ')' }"></div>
                    </div>
                    <row-product-categories />
                    <row-product-categories />
                    <row-product-categories />
                    <row-product-categories />
                    <row-product-categories />
                    <row-product-categories />
                    <row-product-categories />
                    <row-product-categories />
                    <row-product-categories />
                    <row-product-categories />
                  </div>
                </div>
              </div>
              <div class="scroll-bar-42"></div>
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
import Table11 from "./Table11";
import LeftNavigationMenu10 from "./LeftNavigationMenu10";
import TopNavigation from "./TopNavigation";
import Actions6 from "./Actions6";
import BottomSection92 from "./BottomSection92";
import Input42 from "./Input42";
import RowProductCategories from "./RowProductCategories";
import BottomSection222 from "./BottomSection222";
export default {
  name: "ProductsCategories",
  components: {
    Table11,
    LeftNavigationMenu10,
    TopNavigation,
    Actions6,
    BottomSection92,
    Input42,
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
    "spanText6",
    "sort3",
    "divider",
    "spanText7",
    "inputType2",
    "inputPlaceholder2",
    "spanText8",
    "iconButton1",
    "spanText9",
    "inputType3",
    "inputPlaceholder3",
    "inputType4",
    "inputPlaceholder4",
    "spanText10",
    "iconButton2",
    "table11Props",
    "leftNavigationMenu10Props",
    "topNavigationProps",
    "actions6Props",
    "bottomSection92Props",
    "bottomSection222Props",
  ],
};
</script>

<style>
.products-u47-categories {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-81 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.scroll-bar-41 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 310px;
  width: 12px;
}

.page-header-116 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-product-categories-1 {
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

.product-categories {
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

.flex-row-324 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 548px;
  margin-top: 32px;
  min-width: 1088px;
}

.flex-col-279 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 56px;
  min-height: 548px;
  width: 1056px;
}

.top-section-2 {
  align-items: center;
  display: flex;
  gap: 491px;
  min-width: 1056px;
}

.title-204 {
  letter-spacing: 0;
  line-height: 28px;
  margin-bottom: 2px;
  min-width: 197px;
  white-space: nowrap;
}

.actions-68 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 368px;
}

.input-201 {
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

.search-67,
.add-104 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-305 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 155px;
}

.input-text-305::placeholder {
  color: #8a8aa899;
}

.button-303 {
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

.button-303:hover {
  transform: translate(0, -5px);
}

.text-439 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 101px;
  text-align: center;
}

.table-63 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 452px;
  width: 1056px;
}

.table-head-2 {
  align-items: flex-start;
  display: flex;
  min-width: 1056px;
  padding: 0 36px;
}

.cell-784 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 28px;
  padding: 3px 12px;
  width: 144px;
}

.blue-t-shirt-xs-585 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 64px;
}

.sort-225 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-785 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 28px;
  padding: 3px 12px;
  width: 620px;
}

.cell-786 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 28px;
  padding: 3px 12px;
  width: 192px;
}

.blue-t-shirt-xs-586 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 142px;
}

.divider-4 {
  height: 1px;
  margin-top: 16px;
  width: 1056px;
}

.table-data-2 {
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

.row-product-categories-3 {
  align-items: center;
  display: flex;
  min-width: 1056px;
  position: relative;
}

.text-16-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 20px;
  width: 24px;
}

.input-200 {
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

.input-text-304 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 572px;
}

.input-text-304::placeholder,
.input-text-306::placeholder {
  color: #0d0d1d99;
}

.x133-1,
.number-122 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 12px;
  min-height: 20px;
  text-align: center;
  width: 192px;
}

.icon-button-401 {
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 22px;
  width: 20px;
}

.row-product-categories-4 {
  align-items: center;
  display: flex;
  min-width: 1056px;
}

.input-202 {
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

.input-text-306 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 120px;
}

.scroll-bar-42 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 128px;
  width: 12px;
}
</style>
