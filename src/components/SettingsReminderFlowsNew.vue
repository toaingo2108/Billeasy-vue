<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-reminder-flows-u47-new screen">
      <div class="overlap-group-6">
        <left-navigation-menu v-bind="leftNavigationMenuProps" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-6 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <frame2645 />
        <frame2548
          :frame2443Props="frame2548Props.frame2443Props"
          :rowSettingsReminderFlows1Props="frame2548Props.rowSettingsReminderFlows1Props"
          :rowSettingsReminderFlows2Props="frame2548Props.rowSettingsReminderFlows2Props"
          :rowSettingsReminderFlows3Props="frame2548Props.rowSettingsReminderFlows3Props"
        />
        <div class="overlay-1">
          <div class="new-reminder-flow">
            <div class="flex-col-5">
              <div class="title-13 poppins-semi-bold-ebony-20px">
                <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
              </div>
              <div class="frame-2670">
                <div class="input-field-1">
                  <div class="label-20 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span>
                  </div>
                  <div class="input-11">
                    <input
                      class="input-text-9 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder1"
                      :type="inputType1"
                    />
                  </div>
                </div>
                <div class="input-field-1">
                  <div class="label-20 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText4 }}</span>
                  </div>
                  <div class="input-11">
                    <input
                      class="input-text-9 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder2"
                      :type="inputType2"
                    />
                  </div>
                </div>
                <div class="input-field-1">
                  <div class="label-20 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span>
                  </div>
                  <div class="input-11">
                    <input
                      class="input-text-9 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder3"
                      :type="inputType3"
                    />
                  </div>
                </div>
                <div class="input-field-1">
                  <div class="label-20 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText6 }}</span>
                  </div>
                  <div class="input-11">
                    <input
                      class="input-text-9 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder4"
                      :type="inputType4"
                    />
                  </div>
                </div>
              </div>
              <div class="input-field-container">
                <div class="input-field-1">
                  <div class="label-20 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText7 }}</span>
                  </div>
                  <div class="input-11">
                    <input
                      class="input-text-9 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder5"
                      :type="inputType5"
                    />
                  </div>
                </div>
                <div class="input-field-2">
                  <div class="label-21 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText8 }}</span>
                  </div>
                  <div class="input-12">
                    <input
                      class="input-text-10 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder6"
                      :type="inputType6"
                    />
                  </div>
                </div>
              </div>
              <div class="flex-row-2">
                <div class="label-22 poppins-semi-bold-ebony-14px">
                  <span class="poppins-semi-bold-ebony-14px">{{ spanText9 }}</span>
                </div>
                <img class="top-border-2" :src="topBorder" alt="Top Border" />
              </div>
            </div>
            <div class="flex-row-3">
              <div class="flex-col-6">
                <img class="calendar" :src="calendar" alt="Calendar" /><img
                  class="line-75-1"
                  :src="line754"
                  alt="Line 754"
                /><img class="clock-2" :src="clock" alt="Clock" /><img
                  class="line-75-1"
                  :src="line755"
                  alt="Line 755"
                /><img class="add-2" :src="add" alt="Add" /><img class="line-75-1" :src="line756" alt="Line 756" /><img
                  class="calendar-2"
                  :src="calendar2"
                  alt="Calendar 2"
                />
              </div>
              <div class="flex-col-7">
                <div class="dropdown-13">
                  <div class="text-73 poppins-medium-ebony-14px">{{ text1 }}</div>
                  <img class="chevron-down-234" :src="chevronDown1" alt="Chevron Down" />
                </div>
                <div class="frame-2671 poppins-normal-ebony-14px">
                  <div class="label-23">
                    <span class="poppins-normal-ebony-14px">{{ spanText10 }}</span>
                  </div>
                  <div class="input-13">
                    <input
                      class="input-text-11 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder7"
                      :type="inputType7"
                    />
                  </div>
                  <div class="label-24">
                    <span class="poppins-normal-ebony-14px">{{ spanText11 }}</span>
                  </div>
                </div>
                <div class="button-63">
                  <div class="text-74 poppins-medium-white-14px">
                    <span class="poppins-medium-white-14px">{{ spanText12 }}</span>
                  </div>
                </div>
                <div class="frame-2672">
                  <div class="label-25 poppins-semi-bold-comet-12px">
                    <span class="poppins-semi-bold-comet-12px">{{ spanText13 }}</span>
                  </div>
                  <div class="dropdown-14">
                    <div class="label-26 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText14 }}</span>
                    </div>
                    <div class="dropdown-15">
                      <div class="text-75 poppins-medium-ebony-14px">{{ text2 }}</div>
                      <img class="chevron-down-235" :src="chevronDown2" alt="Chevron Down" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <bottom-section />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu from "./LeftNavigationMenu";
import TopNavigation from "./TopNavigation";
import Frame2645 from "./Frame2645";
import Frame2548 from "./Frame2548";
import BottomSection from "./BottomSection";
export default {
  name: "SettingsReminderFlowsNew",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame2645,
    Frame2548,
    BottomSection,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "inputType1",
    "inputPlaceholder1",
    "spanText4",
    "inputType2",
    "inputPlaceholder2",
    "spanText5",
    "inputType3",
    "inputPlaceholder3",
    "spanText6",
    "inputType4",
    "inputPlaceholder4",
    "spanText7",
    "inputType5",
    "inputPlaceholder5",
    "spanText8",
    "inputType6",
    "inputPlaceholder6",
    "spanText9",
    "topBorder",
    "calendar",
    "line754",
    "clock",
    "line755",
    "add",
    "line756",
    "calendar2",
    "text1",
    "chevronDown1",
    "spanText10",
    "inputType7",
    "inputPlaceholder7",
    "spanText11",
    "spanText12",
    "spanText13",
    "spanText14",
    "text2",
    "chevronDown2",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "frame2548Props",
  ],
};
</script>

<style>
.settings-u47-reminder-flows-u47-new {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-6 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.page-header-6 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-1 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-end;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 51px 232px;
  position: absolute;
  top: 0;
}

.new-reminder-flow {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 864px;
  overflow: hidden;
  position: relative;
  width: 752px;
}

.flex-col-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-right: 2px;
  margin-top: 31px;
  min-height: 296px;
  width: 690px;
}

.title-13 {
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 2px;
  white-space: nowrap;
}

.frame-2670 {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  height: 66px;
  margin-left: 2px;
  margin-top: 41px;
  min-width: 688px;
}

.input-field-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 148px;
}

.label-20 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 148px;
}

.input-11 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 148px;
}

.input-text-9 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 124px;
}

.input-text-9::placeholder,
.input-text-10::placeholder,
.input-text-11::placeholder {
  color: #0d0d1d99;
}

.input-field-container {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  height: 66px;
  margin-left: 2px;
  margin-top: 24px;
  min-width: 688px;
}

.input-field-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 508px;
}

.label-21 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 508px;
}

.input-12 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 508px;
}

.input-text-10 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 484px;
}

.flex-row-2 {
  align-items: center;
  display: flex;
  gap: 12px;
  height: 24px;
  margin-top: 47px;
  min-width: 690px;
}

.label-22 {
  letter-spacing: 0;
  line-height: 24px;
  min-width: 75px;
  white-space: nowrap;
}

.top-border-2 {
  height: 1px;
  margin-top: 5px;
  width: 603px;
}

.flex-row-3 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 392px;
  margin-top: 33px;
  min-width: 688px;
}

.flex-col-6 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
  min-height: 264px;
  width: 24px;
}

.calendar,
.clock-2,
.add-2,
.calendar-2,
.chevron-down-234,
.chevron-down-235 {
  height: 24px;
  width: 24px;
}

.line-75-1 {
  height: 32px;
  margin-left: 1px;
  width: 1px;
}

.flex-col-7 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 392px;
  width: 640px;
}

.dropdown-13 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 640px;
}

.text-73 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 584px;
}

.frame-2671 {
  align-items: center;
  display: flex;
  gap: 12px;
  margin-top: 40px;
  min-width: 184px;
}

.label-23 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 32px;
  white-space: nowrap;
}

.input-13 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 80px;
}

.input-text-11 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 56px;
}

.label-24 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 48px;
  white-space: nowrap;
}

.button-63 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 40px;
  margin-top: 40px;
  min-width: 89px;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
}

.button-63:hover {
  transform: translate(0, -5px);
}

.text-74 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 65px;
  text-align: center;
}

.frame-2672 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 19px;
  height: 144px;
  margin-top: 48px;
  overflow: hidden;
  padding: 15px 0;
  width: 640px;
}

.label-25 {
  letter-spacing: 1.44px;
  line-height: 24px;
  margin-left: 24px;
  white-space: nowrap;
}

.dropdown-14 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 592px;
}

.label-26 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 592px;
}

.dropdown-15 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 592px;
}

.text-75 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 21px;
  width: 536px;
}
</style>
