<template>
  <div class="container-center-horizontal">
    <div class="invoices-u47-detail-u47-notes2 screen">
      <div class="overlap-group-64">
        <left-navigation-menu82 v-bind="leftNavigationMenuProps" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <header222 :className="header2Props.className" :button32Props="header2Props.button32Props" />
        <img class="line-701-54" :src="line701" alt="Line 701" /><tab222
          :className="tab2Props.className"
          :tabMenu4Props="tab2Props.tabMenu4Props"
          :tabMenu2Props="tab2Props.tabMenu2Props"
        />
        <button52 :check="button5Props.check" :spanText="button5Props.spanText" :className="button5Props.className" />
        <table52
          :className="table5Props.className"
          :rowInvoicesDetailNotes1Props="table5Props.rowInvoicesDetailNotes1Props"
          :rowInvoicesDetailNotes2Props="table5Props.rowInvoicesDetailNotes2Props"
          :rowInvoicesDetailNotes3Props="table5Props.rowInvoicesDetailNotes3Props"
        />
        <bottom-section323
          :className="bottomSection3Props.className"
          :paginationProps="bottomSection3Props.paginationProps"
        />
        <update-note
          :inputField221Props="button5Props2.inputField221Props"
          :inputField222Props="button5Props2.inputField222Props"
          :bottomSection2Props="button5Props2.bottomSection2Props"
        />
        <input52 :className="inputProps.className" />
        <div class="overlay-25">
          <div class="new-invoice-note">
            <div class="title-107 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText1 }}</span>
            </div>
            <div class="input-field-82">
              <div class="label-458 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText2 }}</span>
              </div>
              <div class="input-157">
                <input
                  class="input-text-238 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder1"
                  :type="inputType1"
                />
              </div>
            </div>
            <div class="input-field-83">
              <div class="label-458 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span>
              </div>
              <div class="input-158">
                <input
                  class="input-text-238 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder2"
                  :type="inputType2"
                />
              </div>
            </div>
            <bottom-section22
              :className="bottomSection22Props.className"
              :button22Props="bottomSection22Props.button22Props"
            />
          </div>
        </div>
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
import BottomSection323 from "./BottomSection323";
import UpdateNote from "./UpdateNote";
import Input52 from "./Input52";
import BottomSection22 from "./BottomSection22";
export default {
  name: "InvoicesDetailNotes2",
  components: {
    LeftNavigationMenu82,
    TopNavigation,
    Header222,
    Tab222,
    Button52,
    Table52,
    BottomSection323,
    UpdateNote,
    Input52,
    BottomSection22,
  },
  props: [
    "line701",
    "spanText1",
    "spanText2",
    "inputType1",
    "inputPlaceholder1",
    "spanText3",
    "inputType2",
    "inputPlaceholder2",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "header2Props",
    "tab2Props",
    "button5Props",
    "table5Props",
    "bottomSection3Props",
    "button5Props2",
    "inputProps",
    "bottomSection22Props",
  ],
};
</script>

<style>
.invoices-u47-detail-u47-notes2 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-64 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.line-701-54 {
  height: 1px;
  left: 256px;
  position: absolute;
  top: 208px;
  width: 1152px;
}

.overlay-25 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 180px 408px;
  position: absolute;
  top: 0;
}

.new-invoice-note {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 412px;
  overflow: hidden;
  position: relative;
  width: 400px;
}

.title-107 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.input-field-82 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 41px;
  min-height: 66px;
  width: 336px;
}

.label-458 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 336px;
}

.input-157 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-238 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-238::placeholder {
  color: #0d0d1d99;
}

.input-field-83 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 104px;
  width: 336px;
}

.input-158 {
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
