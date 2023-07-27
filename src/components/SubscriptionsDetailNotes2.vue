<template>
  <div class="container-center-horizontal">
    <div class="subscriptions-u47-detail-u47-notes2 screen">
      <div class="overlap-group-47">
        <left-navigation-menu32 v-bind="leftNavigationMenu3Props" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <header4 :className="header4Props.className" :button32Props="header4Props.button32Props" />
        <img class="line-701-37" :src="line701" alt="Line 701" /><tab7
          :className="tabProps.className"
          :tabMenu4Props="tabProps.tabMenu4Props"
        />
        <button52 :check="button5Props.check" :spanText="button5Props.spanText" :className="button5Props.className" />
        <table52
          :className="table52Props.className"
          :rowInvoicesDetailNotes1Props="table52Props.rowInvoicesDetailNotes1Props"
          :rowInvoicesDetailNotes2Props="table52Props.rowInvoicesDetailNotes2Props"
          :rowInvoicesDetailNotes3Props="table52Props.rowInvoicesDetailNotes3Props"
        />
        <bottom-section323
          :className="bottomSection32Props.className"
          :paginationProps="bottomSection32Props.paginationProps"
        />
        <update-note
          :inputField221Props="updateNoteProps.inputField221Props"
          :inputField222Props="updateNoteProps.inputField222Props"
          :bottomSection2Props="updateNoteProps.bottomSection2Props"
        />
        <input52 :className="inputProps.className" />
        <div class="overlay-16">
          <div class="new-subscriptions-note">
            <div class="title-93 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText1 }}</span>
            </div>
            <div class="input-field-48">
              <div class="label-347 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText2 }}</span
                ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText3 }}</span>
              </div>
              <div class="input-104">
                <input
                  class="input-text-179 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder1"
                  :type="inputType1"
                />
              </div>
            </div>
            <div class="input-field-49">
              <div class="label-347 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText4 }}</span
                ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText5 }}</span>
              </div>
              <div class="input-105">
                <input
                  class="input-text-179 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder2"
                  :type="inputType2"
                />
              </div>
            </div>
            <bottom-section4 :check="table52Props2.check" :className="table52Props2.className" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu32 from "./LeftNavigationMenu32";
import TopNavigation from "./TopNavigation";
import Header4 from "./Header4";
import Tab7 from "./Tab7";
import Button52 from "./Button52";
import Table52 from "./Table52";
import BottomSection323 from "./BottomSection323";
import UpdateNote from "./UpdateNote";
import Input52 from "./Input52";
import BottomSection4 from "./BottomSection4";
export default {
  name: "SubscriptionsDetailNotes2",
  components: {
    LeftNavigationMenu32,
    TopNavigation,
    Header4,
    Tab7,
    Button52,
    Table52,
    BottomSection323,
    UpdateNote,
    Input52,
    BottomSection4,
  },
  props: [
    "line701",
    "spanText1",
    "spanText2",
    "spanText3",
    "inputType1",
    "inputPlaceholder1",
    "spanText4",
    "spanText5",
    "inputType2",
    "inputPlaceholder2",
    "leftNavigationMenu3Props",
    "topNavigationProps",
    "header4Props",
    "tabProps",
    "button5Props",
    "table52Props",
    "bottomSection32Props",
    "updateNoteProps",
    "inputProps",
    "table52Props2",
  ],
};
</script>

<style>
.subscriptions-u47-detail-u47-notes2 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-47 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.line-701-37 {
  height: 1px;
  left: 256px;
  position: absolute;
  top: 208px;
  width: 1152px;
}

.overlay-16 {
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

.new-subscriptions-note {
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

.title-93 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.input-field-48 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 41px;
  min-height: 66px;
  width: 336px;
}

.label-347 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 336px;
}

.input-104 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-179 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-179::placeholder {
  color: #0d0d1d99;
}

.input-field-49 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 104px;
  width: 336px;
}

.input-105 {
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
