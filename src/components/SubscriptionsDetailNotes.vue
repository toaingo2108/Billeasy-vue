<template>
  <div class="container-center-horizontal">
    <form class="subscriptions-u47-detail-u47-notes screen" name="form25" action="form25" method="post">
      <left-navigation-menu32 v-bind="leftNavigationMenu3Props" />
      <div class="flex-col-169">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <header4 :button32Props="header4Props.button32Props" />
        <tab7 :tabMenu4Props="tabProps.tabMenu4Props" />
        <img class="line-701-36" :src="line701" alt="Line 701" />
        <div class="flex-row-138">
          <div class="input-100">
            <img class="search-44" :src="search" alt="Search" /><input
              class="input-text-177 poppins-normal-manatee-14px"
              name="inputtext"
              :placeholder="inputPlaceholder1"
              :type="inputType1"
            />
          </div>
          <a href="javascript:SubmitForm('form25')">
            <div class="button-225">
              <img class="add-62" :src="add" alt="Add" />
              <div class="text-321 poppins-medium-white-14px">
                <span class="poppins-medium-white-14px">{{ spanText1 }}</span>
              </div>
            </div></a
          >
        </div>
        <div class="overlap-group-46">
          <table52
            :rowInvoicesDetailNotes1Props="table52Props.rowInvoicesDetailNotes1Props"
            :rowInvoicesDetailNotes2Props="table52Props.rowInvoicesDetailNotes2Props"
            :rowInvoicesDetailNotes3Props="table52Props.rowInvoicesDetailNotes3Props"
          />
          <div class="update-note-1">
            <div class="input-field-46">
              <div class="label-337 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText2 }}</span>
              </div>
              <div class="input-101">
                <input
                  class="input-text-176 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder2"
                  :type="inputType2"
                />
              </div>
            </div>
            <div class="input-field-47">
              <div class="label-337 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span>
              </div>
              <div class="input-102">
                <input
                  class="input-text-176 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder3"
                  :type="inputType3"
                />
              </div>
            </div>
            <bottom-section22
              :className="bottomSection2Props.className"
              :button22Props="bottomSection2Props.button22Props"
            />
          </div>
        </div>
        <bottom-section323
          :className="bottomSection32Props.className"
          :paginationProps="bottomSection32Props.paginationProps"
        />
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu32 from "./LeftNavigationMenu32";
import TopNavigation from "./TopNavigation";
import Header4 from "./Header4";
import Tab7 from "./Tab7";
import Table52 from "./Table52";
import BottomSection22 from "./BottomSection22";
import BottomSection323 from "./BottomSection323";
export default {
  name: "SubscriptionsDetailNotes",
  components: {
    LeftNavigationMenu32,
    TopNavigation,
    Header4,
    Tab7,
    Table52,
    BottomSection22,
    BottomSection323,
  },
  props: [
    "line701",
    "search",
    "inputType1",
    "inputPlaceholder1",
    "add",
    "spanText1",
    "spanText2",
    "inputType2",
    "inputPlaceholder2",
    "spanText3",
    "inputType3",
    "inputPlaceholder3",
    "leftNavigationMenu3Props",
    "topNavigationProps",
    "header4Props",
    "tabProps",
    "table52Props",
    "bottomSection2Props",
    "bottomSection32Props",
  ],
};
</script>

<style>
.subscriptions-u47-detail-u47-notes {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-169 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 967px;
  position: relative;
  width: 1216px;
}

.line-701-36 {
  height: 1px;
  width: 1152px;
}

.flex-row-138 {
  align-items: flex-start;
  display: flex;
  gap: 736px;
  margin-top: 39px;
  min-width: 1152px;
}

.input-100 {
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

.search-44,
.add-62 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-177 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-177::placeholder {
  color: #8a8aa899;
}

.button-225 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 128px;
  padding: 8.5px 16.5px;
  transition: all 0.15s ease;
}

.button-225:hover {
  transform: translate(0, -5px);
}

.text-321 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 67px;
  text-align: center;
}

.overlap-group-46 {
  height: 543px;
  margin-top: 40px;
  position: relative;
  width: 1152px;
}

.update-note-1 {
  align-items: center;
  background-color: var(--white);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 336px;
  left: 708px;
  overflow: hidden;
  position: absolute;
  top: 144px;
  width: 400px;
}

.input-field-46 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 336px;
}

.label-337 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 336px;
}

.input-101 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-176 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-176::placeholder {
  color: #0d0d1d99;
}

.input-field-47 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 104px;
  width: 336px;
}

.input-102 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 78px;
  overflow: hidden;
  padding: 9px 12px;
  width: 336px;
}
</style>
