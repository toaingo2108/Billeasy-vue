<template>
  <div class="container-center-horizontal">
    <form class="customers screen" name="form79" action="form79" method="post">
      <left-navigation-menu5 v-bind="leftNavigationMenu5Props" />
      <div class="flex-col-219">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-219">
          <div class="flex-col-220">
            <div class="flex-row-220">
              <h1 class="page-header-93 poppins-semi-bold-ebony-28px">
                <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
              </h1>
              <x-button19 />
            </div>
            <div class="actions-67">
              <div class="search-62">
                <div class="input-182">
                  <img class="search-63" :src="search" alt="Search" /><input
                    class="input-text-287 poppins-normal-manatee-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder"
                    :type="inputType"
                  />
                </div>
                <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
              </div>
              <div class="buttons-66">
                <a href="javascript:SubmitForm('form79')">
                  <div class="icon-button-383"><img class="export-19" :src="xexport" alt="Export" /></div></a
                ><a href="javascript:SubmitForm('form79')">
                  <div class="icon-button-383"><img class="upload-35" :src="upload" alt="Upload" /></div></a
                ><a href="javascript:SubmitForm('form79')">
                  <div class="icon-button-383"><img class="products-131" :src="products" alt="Products" /></div></a
                ><a href="javascript:SubmitForm('form79')">
                  <div class="button-280">
                    <img class="add-94" :src="add" alt="Add" />
                    <div class="text-414 poppins-medium-white-14px">
                      <span class="poppins-medium-white-14px">{{ spanText2 }}</span>
                    </div>
                  </div></a
                >
              </div>
            </div>
            <table9 v-bind="table9Props" />
          </div>
          <div class="scroll-bar-36"></div>
        </div>
        <bottom-section92
          :className="bottomSection92Props.className"
          :iconButtonProps="bottomSection92Props.iconButtonProps"
          :paginationProps="bottomSection92Props.paginationProps"
        />
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu5 from "./LeftNavigationMenu5";
import TopNavigation from "./TopNavigation";
import xButton19 from "./xButton19";
import IconButton from "./IconButton";
import Table9 from "./Table9";
import BottomSection92 from "./BottomSection92";
export default {
  name: "Customers",
  components: {
    LeftNavigationMenu5,
    TopNavigation,
    xButton19,
    IconButton,
    Table9,
    BottomSection92,
  },
  props: [
    "spanText1",
    "search",
    "inputType",
    "inputPlaceholder",
    "xexport",
    "upload",
    "products",
    "add",
    "spanText2",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "iconButtonProps",
    "table9Props",
    "bottomSection92Props",
  ],
};
</script>

<style>
.customers {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-219 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 967px;
  position: relative;
  width: 1216px;
}

.flex-row-219 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 775px;
  margin-top: 31px;
  min-width: 1184px;
}

.flex-col-220 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 775px;
  position: relative;
  width: 1152px;
}

.flex-row-220 {
  align-items: flex-start;
  display: flex;
  gap: 892px;
  height: 40px;
  min-width: 1152px;
  position: relative;
}

.page-header-93 {
  letter-spacing: 0;
  line-height: 40px;
  min-width: 158px;
  white-space: nowrap;
}

.actions-67 {
  align-items: flex-start;
  display: flex;
  gap: 503px;
  margin-top: 41px;
  min-width: 1152px;
}

.search-62 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 336px;
  position: relative;
}

.input-182 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 288px;
}

.search-63,
.add-94 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-287 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-287::placeholder {
  color: #8a8aa899;
}

.buttons-66 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  min-width: 313px;
}

.icon-button-383 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 40px;
  min-width: 40px;
  padding: 0 10px;
  transition: all 0.15s ease;
}

.icon-button-383:hover,
.button-280:hover {
  transform: translate(0, -5px);
}

.export-19,
.upload-35,
.products-131 {
  height: 20px;
  width: 20px;
}

.button-280 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  box-shadow: 0px 10px 40px -10px #20c39d;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
  width: 157px;
}

.text-414 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 105px;
  text-align: center;
}

.scroll-bar-36 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 209px;
  width: 12px;
}
</style>
