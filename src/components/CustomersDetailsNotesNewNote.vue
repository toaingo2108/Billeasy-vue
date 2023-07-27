<template>
  <div class="container-center-horizontal">
    <form class="customers-u47-details-u47-notes-u47-new-note screen" name="form101" action="form101" method="post">
      <div class="overlap-group-74">
        <frame2488
          :frame24783Props="frame2488Props.frame24783Props"
          :tableRow32Props="frame2488Props.tableRow32Props"
        />
        <left-navigation-menu5 v-bind="leftNavigationMenu5Props" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <header15 :button32Props="header15Props.button32Props" />
        <information2
          :className="information2Props.className"
          :header5Props="information2Props.header5Props"
          :iconButton32Props="information2Props.iconButton32Props"
        />
        <statistics :className="statisticsProps.className" :frame2443Props="statisticsProps.frame2443Props" />
        <div class="overlay-31">
          <div class="new-note">
            <div class="title-140 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText1 }}</span>
            </div>
            <div class="input-field-96">
              <div class="label-550 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText2 }}</span
                ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText3 }}</span>
              </div>
              <div class="input-195">
                <input
                  class="input-text-299 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder1"
                  :type="inputType1"
                />
              </div>
            </div>
            <div class="input-field-97">
              <div class="label-550 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText4 }}</span
                ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText5 }}</span>
              </div>
              <div class="input-196">
                <input
                  class="input-text-300 poppins-normal-manatee-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder2"
                  :type="inputType2"
                />
              </div>
            </div>
            <div class="bottom-section-105">
              <img class="top-border-116" :src="topBorder" alt="Top Border" />
              <div class="buttons-70">
                <a href="javascript:SubmitForm('form101')">
                  <div class="button-297">
                    <div class="text-433 poppins-medium-ebony-14px">
                      <span class="poppins-medium-ebony-14px">{{ spanText6 }}</span>
                    </div>
                  </div></a
                ><a href="javascript:SubmitForm('form101')">
                  <div class="button-298">
                    <img class="check-179" :src="check" alt="Check" />
                    <div class="text-434 poppins-medium-white-14px">
                      <span class="poppins-medium-white-14px">{{ spanText7 }}</span>
                    </div>
                  </div></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <statistics2
        :className="statistics2Props.className"
        :frame2443Props="statistics2Props.frame2443Props"
        :frame2480Props="statistics2Props.frame2480Props"
        :iconButton32Props="statistics2Props.iconButton32Props"
      />
      <statistics3
        :className="statistics3Props.className"
        :frame2443Props="statistics3Props.frame2443Props"
        :iconButton32Props="statistics3Props.iconButton32Props"
      />
    </form>
  </div>
</template>

<script>
import Frame2488 from "./Frame2488";
import LeftNavigationMenu5 from "./LeftNavigationMenu5";
import TopNavigation from "./TopNavigation";
import Header15 from "./Header15";
import Information2 from "./Information2";
import Statistics from "./Statistics";
import Statistics2 from "./Statistics2";
import Statistics3 from "./Statistics3";
export default {
  name: "CustomersDetailsNotesNewNote",
  components: {
    Frame2488,
    LeftNavigationMenu5,
    TopNavigation,
    Header15,
    Information2,
    Statistics,
    Statistics2,
    Statistics3,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "inputType1",
    "inputPlaceholder1",
    "spanText4",
    "spanText5",
    "inputType2",
    "inputPlaceholder2",
    "topBorder",
    "spanText6",
    "check",
    "spanText7",
    "frame2488Props",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "header15Props",
    "information2Props",
    "statisticsProps",
    "statistics2Props",
    "statistics3Props",
  ],
};
</script>

<style>
.customers-u47-details-u47-notes-u47-new-note {
  align-items: center;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 967px;
  overflow: hidden;
  position: relative;
  width: 1440px;
}

.overlap-group-74 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.overlay-31 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 256px 408px;
  position: absolute;
  top: 0;
}

.new-note {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 432px;
  overflow: hidden;
  width: 400px;
}

.title-140 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.input-field-96 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 41px;
  min-height: 66px;
  width: 336px;
}

.label-550 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 336px;
}

.input-195 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-299,
.input-text-300 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-299::placeholder {
  color: #0d0d1d99;
}

.input-field-97 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 120px;
  width: 336px;
}

.input-196 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 94px;
  overflow: hidden;
  padding: 9px 12px;
  width: 336px;
}

.input-text-300::placeholder {
  color: #8a8aa899;
}

.bottom-section-105 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 26px;
  width: 400px;
}

.top-border-116 {
  height: 1px;
  width: 400px;
}

.buttons-70 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 216px;
}

.button-297 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 40px;
  min-width: 104px;
  padding: 8.5px 26.5px;
  transition: all 0.15s ease;
}

.button-297:hover,
.button-298:hover {
  transform: translate(0, -5px);
}

.text-433 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 51px;
  text-align: center;
}

.button-298 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 104px;
  padding: 8.5px 20.5px;
  transition: all 0.15s ease;
}

.check-179 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-434 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}
</style>
