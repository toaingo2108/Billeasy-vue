<template>
  <div class="container-center-horizontal">
    <div class="invoices-u47-detail-u47-notes screen">
      <left-navigation-menu82 v-bind="leftNavigationMenuProps" />
      <div class="flex-col-203">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <header222 :button32Props="tab2Props.button32Props" />
        <tab222 :tabMenu4Props="tab2Props2.tabMenu4Props" :tabMenu2Props="tab2Props2.tabMenu2Props" />
        <img class="line-701-53" :src="line701" alt="Line 701" />
        <div class="flex-row-198">
          <div class="input-153">
            <img class="search-59" :src="search" alt="Search" /><input
              class="input-text-234 poppins-normal-manatee-14px"
              name="inputtext"
              :placeholder="inputPlaceholder1"
              :type="inputType1"
            />
          </div>
          <button52 :check="button5Props.check" :spanText="button5Props.spanText" :className="button5Props.className" />
        </div>
        <div class="overlap-group-63">
          <table52
            :rowInvoicesDetailNotes1Props="table5Props.rowInvoicesDetailNotes1Props"
            :rowInvoicesDetailNotes2Props="table5Props.rowInvoicesDetailNotes2Props"
            :rowInvoicesDetailNotes3Props="table5Props.rowInvoicesDetailNotes3Props"
          />
          <div class="update-note-4">
            <div class="input-field-80">
              <div class="label-447 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText1 }}</span>
              </div>
              <div class="input-154">
                <input
                  class="input-text-235 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder2"
                  :type="inputType2"
                />
              </div>
            </div>
            <div class="input-field-81">
              <div class="label-447 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText2 }}</span>
              </div>
              <div class="input-155">
                <input
                  class="input-text-236 poppins-normal-ebony-14px"
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
          :className="bottomSection3Props.className"
          :paginationProps="bottomSection3Props.paginationProps"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu82 from "./LeftNavigationMenu82";
import TopNavigation from "./TopNavigation";
import Header222 from "./Header222";
import Tab222 from "./Tab222";
import Button52 from "./Button52";
import Table52 from "./Table52";
import BottomSection22 from "./BottomSection22";
import BottomSection323 from "./BottomSection323";
export default {
  name: "InvoicesDetailNotes",
  components: {
    LeftNavigationMenu82,
    TopNavigation,
    Header222,
    Tab222,
    Button52,
    Table52,
    BottomSection22,
    BottomSection323,
  },
  props: [
    "line701",
    "search",
    "inputType1",
    "inputPlaceholder1",
    "spanText1",
    "inputType2",
    "inputPlaceholder2",
    "spanText2",
    "inputType3",
    "inputPlaceholder3",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "tab2Props",
    "tab2Props2",
    "button5Props",
    "table5Props",
    "bottomSection2Props",
    "bottomSection3Props",
  ],
};
</script>

<style>
.invoices-u47-detail-u47-notes {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-203 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 967px;
  position: relative;
  width: 1216px;
}

.line-701-53 {
  height: 1px;
  width: 1152px;
}

.flex-row-198 {
  align-items: flex-start;
  display: flex;
  gap: 736px;
  margin-top: 39px;
  min-width: 1152px;
  position: relative;
}

.input-153 {
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

.search-59 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-234 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-234::placeholder {
  color: #8a8aa899;
}

.overlap-group-63 {
  height: 543px;
  margin-top: 40px;
  position: relative;
  width: 1152px;
}

.update-note-4 {
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

.input-field-80 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 336px;
}

.label-447 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 336px;
}

.input-154 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-235 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-235::placeholder,
.input-text-236::placeholder {
  color: #0d0d1d99;
}

.input-field-81 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 104px;
  width: 336px;
}

.input-155 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 78px;
  overflow: hidden;
  padding: 9px 12px;
  width: 336px;
}

.input-text-236 {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  transition: all 0.15s ease;
  width: 312px;
}

.input-text-236:hover {
  transform: translate(0, -5px);
}
</style>
