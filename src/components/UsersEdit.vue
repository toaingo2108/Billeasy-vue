<template>
  <div class="container-center-horizontal">
    <form class="users-u47-edit screen" name="form6" action="form6" method="post">
      <div class="overlap-group-21">
        <img class="line-701-25" :src="line701" alt="Line 701" /><x-table
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
        <h1 class="page-header-39 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <tab2 :className="tab2Props.className" />
        <div class="overlay-13">
          <div class="edit-user">
            <div class="title-76 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
            </div>
            <div class="input-field-32">
              <div class="label-206 poppins-medium-ebony-13px">
                <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span
                ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText4 }}</span>
              </div>
              <div class="input-82">
                <div class="input-text-108 poppins-normal-ebony-14px">
                  <span class="poppins-normal-ebony-14px">{{ spanText5 }}</span>
                </div>
              </div>
            </div>
            <div class="input-field-container-3">
              <div class="input-field-31">
                <div class="label-205 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText6 }}</span
                  ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText7 }}</span>
                </div>
                <div class="input-81">
                  <input
                    class="input-text-107 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder1"
                    :type="inputType1"
                  />
                </div>
              </div>
              <div class="input-field-31">
                <div class="label-205 poppins-medium-ebony-13px">
                  <span class="poppins-medium-ebony-13px">{{ spanText8 }}</span
                  ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText9 }}</span>
                </div>
                <div class="input-81">
                  <input
                    class="input-text-107 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                  />
                </div>
              </div>
            </div>
            <div class="flex-row-68">
              <dropdown322
                :spanText1="dropdown322Props.spanText1"
                :spanText3="dropdown322Props.spanText3"
                :className="dropdown322Props.className"
              />
              <a href="javascript:SubmitForm('form6')">
                <div class="button-152">
                  <img class="add-25" :src="add" alt="Add" />
                  <div class="text-242 poppins-medium-caribbean-green-14px">
                    <span class="poppins-medium-caribbean-green-14px">{{ spanText10 }}</span>
                  </div>
                </div></a
              >
            </div>
            <bottom-section32 />
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
import BottomSection32 from "./BottomSection32";
export default {
  name: "UsersEdit",
  components: {
    xTable,
    LeftNavigationMenu2,
    TopNavigation,
    Actions,
    Tab2,
    Dropdown322,
    BottomSection32,
  },
  props: [
    "line701",
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
    "spanText7",
    "inputType1",
    "inputPlaceholder1",
    "spanText8",
    "spanText9",
    "inputType2",
    "inputPlaceholder2",
    "add",
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
.users-u47-edit {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-21 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.line-701-25 {
  height: 1px;
  left: 256px;
  position: absolute;
  top: 208px;
  width: 1152px;
}

.page-header-39 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-13 {
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

.edit-user {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 472px;
  overflow: hidden;
  position: relative;
  width: 512px;
}

.title-76 {
  align-self: flex-start;
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.input-field-32 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 41px;
  min-height: 66px;
  opacity: 0.5;
  width: 448px;
}

.label-206 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 448px;
}

.input-82 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 448px;
}

.input-text-108 {
  letter-spacing: 0;
  line-height: 24px;
  width: 424px;
}

.input-field-container-3 {
  align-items: flex-start;
  display: flex;
  gap: 32px;
  height: 66px;
  margin-top: 24px;
  min-width: 448px;
}

.input-field-31 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 208px;
}

.label-205 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 208px;
}

.input-81 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 208px;
}

.input-text-107 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 184px;
}

.input-text-107::placeholder {
  color: #0d0d1d99;
}

.flex-row-68 {
  align-items: flex-end;
  display: flex;
  gap: 23px;
  height: 66px;
  margin-top: 24px;
  min-width: 448px;
  position: relative;
}

.button-152 {
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

.button-152:hover {
  transform: scale(1.1);
}

.add-25 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-242 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 63px;
  text-align: center;
}
</style>
