<template>
  <div class="container-center-horizontal">
    <form class="users-u47-invite screen" name="form5" action="form5" method="post">
      <div class="overlap-group-20">
        <img class="line-701-24" :src="line701" alt="Line 701" /><x-table
          :className="tableProps.className"
          :cell14Props="tableProps.cell14Props"
          :cell15Props="tableProps.cell15Props"
          :rowUsers1Props="tableProps.rowUsers1Props"
          :rowUsers2Props="tableProps.rowUsers2Props"
          :rowUsers3Props="tableProps.rowUsers3Props"
        />
        <left-navigation-menu2 v-bind="leftNavigationMenu2Props" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <actions :searchProps="actionsProps.searchProps" :button8Props="actionsProps.button8Props" />
        <h1 class="page-header-38 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <tab2 :className="tab2Props.className" />
        <div class="overlay-12">
          <div class="invite-user">
            <div class="title-75 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
            <div class="input-field-30">
              <div class="label-204 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span
                ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText4 }}</span>
              </div>
              <div class="input-53">
                <input
                  class="input-text-79 poppins-normal-ebony-14px"
                  name="inputtext"
                  :placeholder="inputPlaceholder1"
                  :type="inputType1"
                />
              </div>
            </div>
            <div class="input-field-container-2">
              <div class="input-field-29">
                <div class="label-203 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span
                  ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText6 }}</span>
                </div>
                <div class="input-52">
                  <input
                    class="input-text-78 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                  />
                </div>
              </div>
              <div class="input-field-29">
                <div class="label-203 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText7 }}</span
                  ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText8 }}</span>
                </div>
                <div class="input-52">
                  <input
                    class="input-text-78 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder3"
                    :type="inputType3"
                  />
                </div>
              </div>
            </div>
            <div class="flex-row-67">
              <dropdown322
                :spanText1="dropdown322Props.spanText1"
                :spanText3="dropdown322Props.spanText3"
                :className="dropdown322Props.className"
              />
              <a href="javascript:SubmitForm('form5')">
                <div class="button-150">
                  <img class="add-24" :src="add" alt="Add" />
                  <div class="text-240 poppins-medium-caribbean-green-14px">
                    <span class="poppins-medium-caribbean-green-14px">{{ spanText9 }}</span>
                  </div>
                </div></a
              >
            </div>
            <div class="bottom-section-34">
              <img class="top-border-38" :src="topBorder" alt="Top Border" />
              <div class="buttons-41">
                <button222 />
                <div class="button-151">
                  <img class="check-162" :src="check" alt="Check" />
                  <div class="text-241 poppins-medium-white-14px">
                    <span class="poppins-medium-white-14px">{{ spanText10 }}</span>
                  </div>
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
import xTable from "./xTable";
import LeftNavigationMenu2 from "./LeftNavigationMenu2";
import TopNavigation from "./TopNavigation";
import Actions from "./Actions";
import Tab2 from "./Tab2";
import Dropdown322 from "./Dropdown322";
import Button222 from "./Button222";
export default {
  name: "UsersInvite",
  components: {
    xTable,
    LeftNavigationMenu2,
    TopNavigation,
    Actions,
    Tab2,
    Dropdown322,
    Button222,
  },
  props: [
    "line701",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "inputType1",
    "inputPlaceholder1",
    "spanText5",
    "spanText6",
    "inputType2",
    "inputPlaceholder2",
    "spanText7",
    "spanText8",
    "inputType3",
    "inputPlaceholder3",
    "add",
    "spanText9",
    "topBorder",
    "check",
    "spanText10",
    "tableProps",
    "leftNavigationMenu2Props",
    "topNavigationProps",
    "actionsProps",
    "tab2Props",
    "dropdown322Props",
  ],
};
</script>

<style>
.users-u47-invite {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-20 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.line-701-24 {
  height: 1px;
  left: 256px;
  position: absolute;
  top: 208px;
  width: 1152px;
}

.page-header-38 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-12 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-end;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 247px 352px;
  position: absolute;
  top: 0;
}

.invite-user {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 472px;
  overflow: hidden;
  width: 512px;
}

.title-75 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.input-field-30 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 41px;
  min-height: 66px;
  width: 448px;
}

.label-204 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 448px;
}

.input-53 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 448px;
}

.input-text-79 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 424px;
}

.input-text-79::placeholder,
.input-text-78::placeholder {
  color: #0d0d1d99;
}

.input-field-container-2 {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  height: 66px;
  margin-top: 24px;
  min-width: 448px;
}

.input-field-29 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 208px;
}

.label-203 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 208px;
}

.input-52 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 208px;
}

.input-text-78 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 184px;
}

.flex-row-67 {
  align-items: flex-end;
  display: flex;
  gap: 23px;
  height: 66px;
  margin-top: 24px;
  min-width: 448px;
  position: relative;
}

.button-150 {
  align-items: flex-start;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 21px;
  margin-bottom: 10px;
  min-width: 89px;
  transition: all 0.15s ease;
}

.button-150:hover {
  transform: scale(1.1);
}

.add-24,
.check-162 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-240 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 63px;
  text-align: center;
}

.bottom-section-34 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 30px;
  width: 512px;
}

.top-border-38 {
  height: 1px;
  width: 512px;
}

.buttons-41 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 216px;
  position: relative;
}

.button-151 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 104px;
  padding: 8.5px 18.5px;
  transition: all 0.15s ease;
}

.button-151:hover {
  transform: translate(0, -5px);
}

.text-241 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 39px;
  text-align: center;
}
</style>
