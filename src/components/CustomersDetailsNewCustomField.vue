<template>
  <div class="container-center-horizontal">
    <div class="customers-u47-details-u47-new-custom-field screen">
      <div class="overlap-group-75">
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
        <div class="overlay-32">
          <div class="new-note-1">
            <div class="title-141 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText1 }}</span>
            </div>
            <div class="input-field-98">
              <div class="label-551 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText2 }}</span
                ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText3 }}</span>
              </div>
              <div class="input-197">
                <input
                  class="input-text-301 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder1"
                  :type="inputType1"
                />
              </div>
            </div>
            <div class="input-field-99">
              <div class="label-551 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText4 }}</span
                ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText5 }}</span>
              </div>
              <div class="input-197">
                <input
                  class="input-text-301 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder2"
                  :type="inputType2"
                />
              </div>
            </div>
            <div class="input-field-100">
              <div class="label-551 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText6 }}</span>
              </div>
              <div class="input-198">
                <input
                  class="input-text-302 poppins-normal-manatee-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder3"
                  :type="inputType3"
                />
              </div>
            </div>
            <bottom-section3 :className="statisticsProps2.className" />
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
    </div>
  </div>
</template>

<script>
import Frame2488 from "./Frame2488";
import LeftNavigationMenu5 from "./LeftNavigationMenu5";
import TopNavigation from "./TopNavigation";
import Header15 from "./Header15";
import Information2 from "./Information2";
import Statistics from "./Statistics";
import BottomSection3 from "./BottomSection3";
import Statistics2 from "./Statistics2";
import Statistics3 from "./Statistics3";
export default {
  name: "CustomersDetailsNewCustomField",
  components: {
    Frame2488,
    LeftNavigationMenu5,
    TopNavigation,
    Header15,
    Information2,
    Statistics,
    BottomSection3,
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
    "spanText6",
    "inputType3",
    "inputPlaceholder3",
    "frame2488Props",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "header15Props",
    "information2Props",
    "statisticsProps",
    "statisticsProps2",
    "statistics2Props",
    "statistics3Props",
  ],
};
</script>

<style>
.customers-u47-details-u47-new-custom-field {
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

.overlap-group-75 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.overlay-32 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 192px 408px;
  position: absolute;
  top: 0;
}

.new-note-1 {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 520px;
  overflow: hidden;
  position: relative;
  width: 400px;
}

.title-141 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.input-field-98 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 41px;
  min-height: 66px;
  width: 336px;
}

.label-551 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 336px;
}

.input-197 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 336px;
}

.input-text-301,
.input-text-302 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 312px;
}

.input-text-301::placeholder {
  color: #0d0d1d99;
}

.input-field-99 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 336px;
}

.input-field-100 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 120px;
  width: 336px;
}

.input-198 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 94px;
  overflow: hidden;
  padding: 9px 12px;
  width: 336px;
}

.input-text-302::placeholder {
  color: #8a8aa899;
}
</style>
