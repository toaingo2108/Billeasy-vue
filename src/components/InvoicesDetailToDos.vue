<template>
  <div class="container-center-horizontal">
    <form class="invoices-u47-detail-u47-tou45dou39s screen" name="form41" action="form41" method="post">
      <left-navigation-menu82 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-204">
        <div class="flex-col-205">
          <top-navigation
            :className="topNavigationProps.className"
            :languageProps="topNavigationProps.languageProps"
            :userProfileProps="topNavigationProps.userProfileProps"
          />
          <header class="header-100">
            <a href="javascript:SubmitForm('form41')">
              <div class="button-252">
                <img class="chevron-left-25" :src="chevronLeft" alt="Chevron Left" />
                <div class="text-388 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText1 }}</span>
                </div>
              </div></a
            >
            <div class="page-header-83 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-manatee-20px">{{ spanText2 }}</span
              ><span class="poppins-semi-bold-ebony-20px">{{ spanText3 }}</span>
            </div>
          </header>
          <div class="tab-53">
            <tab-menu4222 />
            <tab-menu522
              :rules="tabMenu5Props.rules"
              :spanText="tabMenu5Props.spanText"
              :className="tabMenu5Props.className"
            />
            <tab-menu14 />
          </div>
          <img class="line-217" :src="line701" alt="Line 701" />
          <div class="flex-row-201">
            <div class="input-156">
              <img class="search-60" :src="search" alt="Search" /><input
                class="input-text-237 poppins-normal-manatee-14px"
                name="inputtext"
                :placeholder="inputPlaceholder"
                :type="inputType"
              />
            </div>
            <div class="button-253">
              <img class="add-77" :src="add1" alt="Add" />
              <div class="text-389 poppins-medium-white-14px">
                <span class="poppins-medium-white-14px">{{ spanText4 }}</span>
              </div>
            </div>
          </div>
          <div class="flex-row-202">
            <frame2498 :iconButton2Props="frame24981Props.iconButton2Props" />
            <button62 />
          </div>
        </div>
        <div class="flex-row-203">
          <div class="rectangle-6530-4"></div>
          <div class="task-container-1">
            <frame2495 :frame2494Props="topNavigationProps2.frame2494Props" />
            <frame2496 :frame2494Props="frame24983Props.frame2494Props" />
            <frame2497 :frame2494Props="frame24983Props2.frame2494Props" />
          </div>
        </div>
        <div class="flex-col-206">
          <img class="line-217" :src="add2" alt="Line 614" /><frame2498
            :className="frame24982Props.className"
            :iconButton2Props="frame24982Props.iconButton2Props"
          />
          <img class="line-218" :src="line614" alt="Line 702" /><frame2498
            :className="frame24983Props3.className"
            :iconButton2Props="frame24983Props3.iconButton2Props"
          />
          <img class="line-218" :src="line702" alt="Line 616" /><bottom-section323
            :className="bottomSection3Props.className"
            :paginationProps="bottomSection3Props.paginationProps"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu82 from "./LeftNavigationMenu82";
import TopNavigation from "./TopNavigation";
import TabMenu4222 from "./TabMenu4222";
import TabMenu522 from "./TabMenu522";
import TabMenu14 from "./TabMenu14";
import Frame2498 from "./Frame2498";
import Button62 from "./Button62";
import Frame2495 from "./Frame2495";
import Frame2496 from "./Frame2496";
import Frame2497 from "./Frame2497";
import BottomSection323 from "./BottomSection323";
export default {
  name: "InvoicesDetailToDos",
  components: {
    LeftNavigationMenu82,
    TopNavigation,
    TabMenu4222,
    TabMenu522,
    TabMenu14,
    Frame2498,
    Button62,
    Frame2495,
    Frame2496,
    Frame2497,
    BottomSection323,
  },
  props: [
    "chevronLeft",
    "spanText1",
    "spanText2",
    "spanText3",
    "line701",
    "search",
    "inputType",
    "inputPlaceholder",
    "add1",
    "spanText4",
    "add2",
    "line614",
    "line702",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "tabMenu5Props",
    "frame24981Props",
    "topNavigationProps2",
    "frame24983Props",
    "frame24983Props2",
    "frame24982Props",
    "frame24983Props3",
    "bottomSection3Props",
  ],
};
</script>

<style>
.invoices-u47-detail-u47-tou45dou39s {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-204 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 967px;
  width: 1216px;
}

.flex-col-205 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 352px;
  position: relative;
  width: 1216px;
}

.header-100 {
  align-items: flex-start;
  align-self: flex-start;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  gap: 24px;
  justify-content: flex-start;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 304px;
  width: auto;
}

.button-252 {
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

.button-252:hover,
.button-253:hover {
  transform: translate(0, -5px);
}

.chevron-left-25,
.search-60,
.add-77 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-388 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}

.page-header-83 {
  letter-spacing: 0;
  line-height: 40px;
  margin-top: -1px;
  min-width: 193px;
  white-space: nowrap;
}

.tab-53 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  height: 40px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 384px;
  position: relative;
}

.line-217 {
  height: 1px;
  width: 1152px;
}

.flex-row-201 {
  align-items: flex-start;
  display: flex;
  gap: 736px;
  margin-top: 39px;
  min-width: 1152px;
}

.input-156 {
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

.input-text-237 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-237::placeholder {
  color: #8a8aa899;
}

.button-253 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 128px;
  padding: 8.5px 11px;
  transition: all 0.15s ease;
}

.text-389 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 78px;
  text-align: center;
}

.flex-row-202 {
  align-items: center;
  display: flex;
  gap: 892px;
  height: 24px;
  margin-top: 40px;
  min-width: 1152px;
  position: relative;
}

.flex-row-203 {
  align-items: flex-start;
  display: flex;
  gap: 26px;
  margin-left: 20px;
  margin-top: 24px;
  min-width: 1132px;
}

.rectangle-6530-4 {
  background-color: var(--purple-heart);
  border-radius: 10px;
  height: 228px;
  width: 2px;
}

.task-container-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 228px;
  position: relative;
  width: 1104px;
}

.flex-col-206 {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  min-height: 347px;
  position: relative;
  width: 1216px;
}

.line-218 {
  height: 1px;
  margin-top: 16px;
  width: 1152px;
}
</style>
