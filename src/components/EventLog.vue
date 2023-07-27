<template>
  <div class="container-center-horizontal">
    <div class="event-log-112 screen">
      <div class="left-navigation-menu-4">
        <div class="logo-52" :style="{ 'background-image': 'url(' + logo + ')' }"></div>
        <div class="items-33">
          <menu-item22 :products="menuItem221Props.products" :spanText="menuItem221Props.spanText" />
          <menu-item22
            :products="menuItem222Props.products"
            :spanText="menuItem222Props.spanText"
            :className="menuItem222Props.className"
          />
          <menu-item22
            :products="menuItem223Props.products"
            :spanText="menuItem223Props.spanText"
            :className="menuItem223Props.className"
          />
          <menu-item22
            :products="menuItem224Props.products"
            :spanText="menuItem224Props.spanText"
            :className="menuItem224Props.className"
          />
          <menu-item22
            :products="menuItem225Props.products"
            :spanText="menuItem225Props.spanText"
            :className="menuItem225Props.className"
          />
          <menu-item22
            :products="menuItem226Props.products"
            :spanText="menuItem226Props.spanText"
            :className="menuItem226Props.className"
          />
          <menu-item22
            :products="menuItem227Props.products"
            :spanText="menuItem227Props.spanText"
            :className="menuItem227Props.className"
          />
          <menu-item22
            :products="menuItem228Props.products"
            :spanText="menuItem228Props.spanText"
            :className="menuItem228Props.className"
          />
          <x-menu-item :home="menuItemProps.home" :spanText="menuItemProps.spanText" />
          <menu-item22
            :products="menuItem229Props.products"
            :spanText="menuItem229Props.spanText"
            :className="menuItem229Props.className"
          />
        </div>
      </div>
      <div class="flex-col-124">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-40 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="search-34">
          <div class="input-83">
            <img class="search-35" :src="search" alt="Search" /><input
              class="input-text-109 poppins-normal-manatee-14px"
              name="inputtext"
              :placeholder="inputPlaceholder"
              :type="inputType"
            />
          </div>
          <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
        </div>
        <div class="overlap-group-22">
          <div class="table-23">
            <div class="row-event-log poppins-semi-bold-ebony-13px">
              <div class="cell-291">
                <div class="blue-t-shirt-xs-187">
                  <span class="poppins-semi-bold-ebony-13px">{{ spanText2 }}</span>
                </div>
                <img class="sort-44" :src="sort1" alt="Sort" />
              </div>
              <div class="cell-293">
                <div class="blue-t-shirt-xs-188">
                  <span class="poppins-semi-bold-ebony-13px">{{ spanText3 }}</span>
                </div>
                <img class="sort-44" :src="sort2" alt="Sort" />
              </div>
              <div class="cell-294">
                <div class="blue-t-shirt-xs-189">
                  <span class="poppins-semi-bold-ebony-13px">{{ spanText4 }}</span>
                </div>
                <img class="sort-44" :src="sort3" alt="Sort" />
              </div>
              <div class="cell-291">
                <div class="blue-t-shirt-xs-190">
                  <span class="poppins-semi-bold-ebony-13px">{{ spanText5 }}</span>
                </div>
                <img class="sort-44" :src="sort4" alt="Sort" />
              </div>
              <div class="cell-295">
                <div class="blue-t-shirt-xs-191">
                  <span class="poppins-semi-bold-ebony-13px">{{ spanText6 }}</span>
                </div>
                <img class="sort-44" :src="sort5" alt="Sort" />
              </div>
              <div class="cell-296">
                <div class="blue-t-shirt-xs-192">
                  <span class="poppins-semi-bold-ebony-13px">{{ spanText7 }}</span>
                </div>
                <img class="sort-44" :src="sort6" alt="Sort" />
              </div>
            </div>
            <div class="table-row-23">
              <row-event-log
                :cell23Props="rowEventLog1Props.cell23Props"
                :cell23Props2="rowEventLog1Props.cell23Props2"
                :cell142Props="rowEventLog1Props.cell142Props"
                :cell24Props="rowEventLog1Props.cell24Props"
                :cell232Props="rowEventLog1Props.cell232Props"
              />
              <row-event-log
                :cell23Props="rowEventLog2Props.cell23Props"
                :cell23Props2="rowEventLog2Props.cell23Props2"
                :cell142Props="rowEventLog2Props.cell142Props"
                :cell24Props="rowEventLog2Props.cell24Props"
                :cell232Props="rowEventLog2Props.cell232Props"
              />
              <row-event-log
                :cell23Props="rowEventLog3Props.cell23Props"
                :cell23Props2="rowEventLog3Props.cell23Props2"
                :cell142Props="rowEventLog3Props.cell142Props"
                :cell24Props="rowEventLog3Props.cell24Props"
                :cell232Props="rowEventLog3Props.cell232Props"
              />
              <div class="row-event-log-1">
                <div class="cell-292">
                  <div class="blue-t-shirt-xs-186 poppins-semi-bold-ebony-13px">
                    <span class="poppins-semi-bold-ebony-13px">{{ spanText8 }}</span>
                  </div>
                </div>
                <div class="cell-297">
                  <div class="blue-t-shirt-xs-193 poppins-semi-bold-ebony-13px">
                    <span class="poppins-semi-bold-ebony-13px">{{ spanText9 }}</span>
                  </div>
                </div>
                <div class="cell-298">
                  <div class="blue-t-shirt-xs-194 poppins-medium-comet-13px">
                    <span class="poppins-medium-comet-13px">{{ spanText10 }}</span>
                  </div>
                </div>
                <div class="cell-292">
                  <div class="blue-t-shirt-xs-186 poppins-medium-comet-13px">
                    <span class="poppins-medium-comet-13px">{{ spanText11 }}</span>
                  </div>
                </div>
                <cell24 :children="cell24Props.children" :className="cell24Props.className" />
                <div class="cell-299"><status :src="statusProps.src" :className="statusProps.className" /></div>
              </div>
              <row-event-log
                :cell23Props="rowEventLog4Props.cell23Props"
                :cell23Props2="rowEventLog4Props.cell23Props2"
                :cell142Props="rowEventLog4Props.cell142Props"
                :cell24Props="rowEventLog4Props.cell24Props"
                :cell232Props="rowEventLog4Props.cell232Props"
              />
            </div>
          </div>
          <bottom-section323 :paginationProps="bottomSection32Props.paginationProps" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem22 from "./MenuItem22";
import xMenuItem from "./xMenuItem";
import TopNavigation from "./TopNavigation";
import IconButton from "./IconButton";
import RowEventLog from "./RowEventLog";
import Cell24 from "./Cell24";
import Status from "./Status";
import BottomSection323 from "./BottomSection323";
export default {
  name: "EventLog",
  components: {
    MenuItem22,
    xMenuItem,
    TopNavigation,
    IconButton,
    RowEventLog,
    Cell24,
    Status,
    BottomSection323,
  },
  props: [
    "logo",
    "spanText1",
    "search",
    "inputType",
    "inputPlaceholder",
    "spanText2",
    "sort1",
    "spanText3",
    "sort2",
    "spanText4",
    "sort3",
    "spanText5",
    "sort4",
    "spanText6",
    "sort5",
    "spanText7",
    "sort6",
    "spanText8",
    "spanText9",
    "spanText10",
    "spanText11",
    "menuItem221Props",
    "menuItem222Props",
    "menuItem223Props",
    "menuItem224Props",
    "menuItem225Props",
    "menuItem226Props",
    "menuItem227Props",
    "menuItem228Props",
    "menuItemProps",
    "menuItem229Props",
    "topNavigationProps",
    "iconButtonProps",
    "rowEventLog1Props",
    "rowEventLog2Props",
    "rowEventLog3Props",
    "cell24Props",
    "statusProps",
    "rowEventLog4Props",
    "bottomSection32Props",
  ],
};
</script>

<style>
.event-log-112 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.left-navigation-menu-4 {
  align-items: center;
  background-color: var(--ebony);
  display: flex;
  flex-direction: column;
  gap: 58px;
  height: 967px;
  padding: 30px 0;
  width: 224px;
}

.logo-52 {
  background-size: 100% 100%;
  height: 104px;
  width: 120px;
}

.items-33 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 480px;
  position: relative;
  width: 224px;
}

.flex-col-124 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 967px;
  position: relative;
  width: 1216px;
}

.page-header-40 {
  letter-spacing: 0;
  line-height: 40px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.search-34 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-left: 32px;
  margin-top: 41px;
  min-width: 336px;
  position: relative;
}

.input-83 {
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

.search-35 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-109 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-109::placeholder {
  color: #8a8aa899;
}

.overlap-group-22 {
  height: 711px;
  margin-top: 40px;
  position: relative;
  width: 1216px;
}

.table-23 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 711px;
  left: 32px;
  position: absolute;
  top: 0;
  width: 1152px;
}

.row-event-log {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  overflow: hidden;
  width: 1152px;
}

.cell-291 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 40px;
  padding: 9px 12px;
  width: 176px;
}

.blue-t-shirt-xs-187 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 81px;
}

.sort-44 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-293 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 40px;
  padding: 9px 12px;
  width: 192px;
}

.blue-t-shirt-xs-188 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 58px;
}

.cell-294 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 40px;
  padding: 9px 12px;
  width: 208px;
}

.blue-t-shirt-xs-189 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 30px;
}

.blue-t-shirt-xs-190 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 50px;
}

.cell-295 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 40px;
  padding: 9px 12px;
  width: 296px;
}

.blue-t-shirt-xs-191 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 37px;
}

.cell-296 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 40px;
  padding: 9px 12px;
  width: 104px;
}

.blue-t-shirt-xs-192 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 33px;
}

.table-row-23 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 665px;
  position: relative;
  width: 1152px;
}

.row-event-log-1 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.cell-292 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 140px;
  padding: 59px 12px;
  width: 176px;
}

.blue-t-shirt-xs-186 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 152px;
}

.cell-297 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 140px;
  padding: 59px 12px;
  width: 192px;
}

.blue-t-shirt-xs-193 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 168px;
}

.cell-298 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 140px;
  padding: 59px 12px;
  width: 208px;
}

.blue-t-shirt-xs-194 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 184px;
}

.cell-299 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 140px;
  padding: 0 40px;
  position: relative;
  width: 104px;
}
</style>
