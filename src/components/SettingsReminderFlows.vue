<template>
  <div class="container-center-horizontal">
    <form class="settings-u47-reminder-flows screen" name="form4" action="form4" method="post">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-66">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-48">
          <div class="flex-col-67">
            <h1 class="page-header-34 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <frame2645 :className="frame2443Props.className" />
          </div>
          <div class="frame-2548-27">
            <div class="flex-row-49">
              <div class="flex-col-68">
                <div class="header-58">
                  <frame2443 :src="frame2443Props2.src" />
                  <div class="title-66 poppins-semi-bold-ebony-20px">
                    <span class="poppins-semi-bold-ebony-20px">{{ spanText7 }}</span>
                  </div>
                </div>
                <p class="input-text-69 poppins-normal-comet-14px">
                  <span class="poppins-normal-comet-14px">{{ spanText3 }}</span>
                </p>
              </div>
              <a href="javascript:SubmitForm('form4')">
                <div class="button-127">
                  <img class="add-17" :src="add" alt="Add" />
                  <div class="text-219 poppins-medium-white-14px">
                    <span class="poppins-medium-white-14px">{{ spanText6 }}</span>
                  </div>
                </div></a
              >
            </div>
            <div class="table-18">
              <x-header />
              <div class="table-row-18">
                <div class="row-settings-reminder-flows-2">
                  <div class="input-text-64 poppins-normal-ebony-13px">
                    <span class="poppins-normal-ebony-13px">{{ spanText2 }}</span>
                  </div>
                  <div class="input-text-65 poppins-normal-ebony-13px">
                    <span class="poppins-normal-ebony-13px">{{ spanText8 }}</span>
                  </div>
                  <x-input />
                  <div class="input-44">
                    <input
                      class="input-text-66 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder1"
                      :type="inputType1"
                    />
                  </div>
                  <dropdown32 :spanText="dropdown321Props.spanText" />
                  <status :src="status1Props.src" />
                  <div class="input-text-67 poppins-normal-ebony-13px">
                    <span class="poppins-normal-ebony-13px">{{ spanText11 }}</span>
                  </div>
                  <div class="icon-button-332" :style="{ 'background-image': 'url(' + iconButton1 + ')' }"></div>
                </div>
                <div class="row-settings-reminder-flows-2">
                  <div class="input-text-64 poppins-normal-ebony-13px">
                    <span class="poppins-normal-ebony-13px">{{ spanText4 }}</span>
                  </div>
                  <div class="input-text-65 poppins-normal-ebony-13px">
                    <span class="poppins-normal-ebony-13px">{{ spanText9 }}</span>
                  </div>
                  <div class="input-45">
                    <input
                      class="input-text-68 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder2"
                      :type="inputType2"
                    />
                  </div>
                  <div class="input-44">
                    <input
                      class="input-text-66 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder3"
                      :type="inputType3"
                    />
                  </div>
                  <dropdown32 :spanText="dropdown322Props.spanText" />
                  <status :src="status2Props.src" />
                  <div class="input-text-67 poppins-normal-ebony-13px">
                    <span class="poppins-normal-ebony-13px">{{ spanText12 }}</span>
                  </div>
                  <div class="icon-button-332" :style="{ 'background-image': 'url(' + iconButton2 + ')' }"></div>
                </div>
                <div class="row-settings-reminder-flows-2">
                  <div class="input-text-64 poppins-normal-ebony-13px">
                    <span class="poppins-normal-ebony-13px">{{ spanText5 }}</span>
                  </div>
                  <div class="input-text-65 poppins-normal-ebony-13px">
                    <span class="poppins-normal-ebony-13px">{{ spanText10 }}</span>
                  </div>
                  <div class="input-45">
                    <input
                      class="input-text-68 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder4"
                      :type="inputType4"
                    />
                  </div>
                  <div class="input-44">
                    <input
                      class="input-text-66 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder5"
                      :type="inputType5"
                    />
                  </div>
                  <dropdown32 :spanText="dropdown323Props.spanText" />
                  <status :src="status3Props.src" />
                  <div class="input-text-67 poppins-normal-ebony-13px">
                    <span class="poppins-normal-ebony-13px">{{ spanText13 }}</span>
                  </div>
                  <div class="icon-button-332" :style="{ 'background-image': 'url(' + iconButton3 + ')' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu from "./LeftNavigationMenu";
import TopNavigation from "./TopNavigation";
import Frame2645 from "./Frame2645";
import Frame2443 from "./Frame2443";
import xHeader from "./xHeader";
import xInput from "./xInput";
import Dropdown32 from "./Dropdown32";
import Status from "./Status";
export default {
  name: "SettingsReminderFlows",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Frame2645,
    Frame2443,
    xHeader,
    xInput,
    Dropdown32,
    Status,
  },
  props: [
    "spanText1",
    "spanText7",
    "spanText3",
    "add",
    "spanText6",
    "spanText2",
    "spanText8",
    "inputType1",
    "inputPlaceholder1",
    "spanText11",
    "iconButton1",
    "spanText4",
    "spanText9",
    "inputType2",
    "inputPlaceholder2",
    "inputType3",
    "inputPlaceholder3",
    "spanText12",
    "iconButton2",
    "spanText5",
    "spanText10",
    "inputType4",
    "inputPlaceholder4",
    "inputType5",
    "inputPlaceholder5",
    "spanText13",
    "iconButton3",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "frame2443Props",
    "frame2443Props2",
    "dropdown321Props",
    "status1Props",
    "dropdown322Props",
    "status2Props",
    "dropdown323Props",
    "status3Props",
  ],
};
</script>

<style>
.settings-u47-reminder-flows {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-66 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 928px;
  position: relative;
  width: 1216px;
}

.flex-row-48 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 833px;
  min-width: 1152px;
}

.flex-col-67 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  position: relative;
  width: 184px;
}

.page-header-34 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2548-27 {
  align-items: center;
  align-self: flex-end;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 49px;
  height: 832px;
  overflow: hidden;
  width: 928px;
}

.flex-row-49 {
  align-items: flex-start;
  display: flex;
  gap: 251px;
  height: 91px;
  margin-top: 24px;
  min-width: 864px;
}

.flex-col-68 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-height: 91px;
  width: 425px;
}

.header-58 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  min-width: 201px;
  position: relative;
}

.title-66 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.input-text-69 {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 48px;
  width: 425px;
}

.button-127 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-top: 8px;
  min-width: 188px;
  padding: 8.5px 12px;
  transition: all 0.2s ease;
}

.button-127:hover {
  transform: translate(0, -5px);
}

.add-17 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-219 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 136px;
  text-align: center;
}

.table-18 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 668px;
  position: relative;
  width: 864px;
}

.table-row-18 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 152px;
  width: 864px;
}

.row-settings-reminder-flows-2 {
  align-items: center;
  display: flex;
  min-width: 864px;
  position: relative;
}

.input-text-64 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 20px;
  width: 80px;
}

.input-text-65 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 15px;
  min-height: 20px;
  width: 56px;
}

.input-44 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  margin-left: 12px;
  overflow: hidden;
  padding: 7px 12px;
  width: 136px;
}

.input-text-66 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 112px;
}

.input-text-66::placeholder,
.input-text-68::placeholder {
  color: #0d0d1d99;
}

.input-text-67 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 51px;
  min-height: 20px;
  width: 64px;
}

.icon-button-332 {
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 33px;
  width: 20px;
}

.input-45 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  margin-left: 21px;
  overflow: hidden;
  padding: 7px 12px;
  width: 128px;
}

.input-text-68 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 104px;
}
</style>
