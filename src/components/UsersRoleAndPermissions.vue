<template>
  <div class="container-center-horizontal">
    <div class="users-u47-role-and-permissions screen">
      <left-navigation-menu2 v-bind="leftNavigationMenu2Props" />
      <div class="flex-col-123">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <h1 class="page-header-37 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="tab-18">
          <div class="tab-menu-54">
            <img class="users-126" :src="users" alt="Users" />
            <div class="label-201 poppins-medium-manatee-14px">
              <span class="poppins-medium-manatee-14px">{{ spanText2 }}</span>
            </div>
          </div>
          <div class="tab-menu-56">
            <div class="flex-row-66">
              <img class="key-4" :src="key" alt="Key" />
              <div class="label-202 poppins-medium-caribbean-green-14px">
                <span class="poppins-medium-caribbean-green-14px">{{ spanText3 }}</span>
              </div>
            </div>
            <div class="rectangle-6502-25"></div>
          </div>
        </div>
        <img class="line-701-23" :src="line701" alt="Line 701" />
        <div class="actions-13">
          <div class="input-51">
            <img class="search-3" :src="search" alt="Search" /><input
              class="input-text-76 poppins-normal-manatee-14px"
              name="inputtext"
              :placeholder="inputPlaceholder1"
              :type="inputType1"
            />
          </div>
          <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
        </div>
        <div class="table-22">
          <div class="row-users-role-and-permissions-1">
            <div class="cell-275">
              <div class="blue-t-shirt-xs-178 poppins-semi-bold-ebony-13px-2">
                <span class="poppins-semi-bold-ebony-13px-2">{{ spanText4 }}</span>
              </div>
            </div>
            <cell19 :children="cell191Props.children" />
            <div class="cell-276">
              <div class="blue-t-shirt-xs-179 poppins-semi-bold-ebony-13px-2">
                <span class="poppins-semi-bold-ebony-13px-2">{{ spanText5 }}</span>
              </div>
              <img class="chevron-down-304" :src="chevronDown" alt="Chevron Down" />
            </div>
            <div class="cell-277">
              <div class="blue-t-shirt-xs-178 poppins-semi-bold-ebony-13px-2">
                <span class="poppins-semi-bold-ebony-13px-2">{{ spanText6 }}</span>
              </div>
            </div>
            <div class="cell-278">
              <div class="blue-t-shirt-xs-178 poppins-semi-bold-ebony-13px-2">
                <span class="poppins-semi-bold-ebony-13px-2">{{ spanText7 }}</span>
              </div>
            </div>
            <div class="cell-279">
              <div class="blue-t-shirt-xs-178 poppins-semi-bold-ebony-13px-2">
                <span class="poppins-semi-bold-ebony-13px-2">{{ spanText8 }}</span>
              </div>
            </div>
            <div class="cell-280">
              <div class="blue-t-shirt-xs-178 poppins-semi-bold-ebony-13px-2">
                <span class="poppins-semi-bold-ebony-13px-2">{{ spanText9 }}</span>
              </div>
            </div>
          </div>
          <div class="table-row-22">
            <div class="row-users-role-and-permissions">
              <div class="cell-274">
                <div class="input-50">
                  <input
                    class="input-text-75 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder2"
                    :type="inputType2"
                  />
                </div>
              </div>
              <cell19 :children="cell192Props.children" :className="cell192Props.className" />
              <cell20 :children="cell201Props.children" />
              <cell21 :checkboxProps="cell211Props.checkboxProps" />
              <cell22 />
              <cell22 />
              <cell22 />
              <cell132 :className="cell1321Props.className" />
            </div>
            <div class="row-users-role-and-permissions">
              <div class="cell-274">
                <div class="input-50">
                  <input
                    class="input-text-75 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder3"
                    :type="inputType3"
                  />
                </div>
              </div>
              <cell19 :children="cell193Props.children" :className="cell193Props.className" />
              <cell20 :children="cell202Props.children" />
              <cell22 />
              <cell21 :checkboxProps="cell212Props.checkboxProps" />
              <cell22 />
              <cell21 :checkboxProps="cell213Props.checkboxProps" />
              <cell132 :className="cell1322Props.className" />
            </div>
            <div class="row-users-role-and-permissions">
              <div class="cell-274">
                <div class="input-50">
                  <input
                    class="input-text-75 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder4"
                    :type="inputType4"
                  />
                </div>
              </div>
              <cell19 :children="cell194Props.children" :className="cell194Props.className" />
              <cell20 :children="cell203Props.children" />
              <cell22 />
              <cell21 :checkboxProps="cell214Props.checkboxProps" />
              <cell22 />
              <cell22 />
              <cell132 :className="cell1323Props.className" />
            </div>
            <div class="row-users-role-and-permissions">
              <div class="cell-274">
                <div class="input-50">
                  <input
                    class="input-text-77 poppins-normal-manatee-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder5"
                    :type="inputType5"
                  />
                </div>
              </div>
              <div class="cell-281">
                <div class="blue-t-shirt-xs-180 poppins-semi-bold-ebony-13px-2">{{ blueTShirtXs1 }}</div>
              </div>
              <div class="cell-282">
                <div class="blue-t-shirt-xs-181 poppins-medium-comet-13px">{{ blueTShirtXs2 }}</div>
              </div>
              <cell22 />
              <cell22 />
              <cell22 />
              <cell22 />
              <div class="cell-283"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu2 from "./LeftNavigationMenu2";
import TopNavigation from "./TopNavigation";
import IconButton from "./IconButton";
import Cell19 from "./Cell19";
import Cell20 from "./Cell20";
import Cell21 from "./Cell21";
import Cell22 from "./Cell22";
import Cell132 from "./Cell132";
export default {
  name: "UsersRoleAndPermissions",
  components: {
    LeftNavigationMenu2,
    TopNavigation,
    IconButton,
    Cell19,
    Cell20,
    Cell21,
    Cell22,
    Cell132,
  },
  props: [
    "spanText1",
    "users",
    "spanText2",
    "key",
    "spanText3",
    "line701",
    "search",
    "inputType1",
    "inputPlaceholder1",
    "spanText4",
    "spanText5",
    "chevronDown",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "inputType2",
    "inputPlaceholder2",
    "inputType3",
    "inputPlaceholder3",
    "inputType4",
    "inputPlaceholder4",
    "inputType5",
    "inputPlaceholder5",
    "blueTShirtXs1",
    "blueTShirtXs2",
    "leftNavigationMenu2Props",
    "topNavigationProps",
    "iconButtonProps",
    "cell191Props",
    "cell192Props",
    "cell201Props",
    "cell211Props",
    "cell1321Props",
    "cell193Props",
    "cell202Props",
    "cell212Props",
    "cell213Props",
    "cell1322Props",
    "cell194Props",
    "cell203Props",
    "cell214Props",
    "cell1323Props",
  ],
};
</script>

<style>
.users-u47-role-and-permissions {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-123 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 967px;
  position: relative;
  width: 1216px;
}

.page-header-37 {
  letter-spacing: 0;
  line-height: 40px;
  margin-left: 32px;
  margin-top: 31px;
  white-space: nowrap;
}

.tab-18 {
  align-items: flex-start;
  display: flex;
  margin-left: 32px;
  margin-top: 33px;
  min-width: 336px;
}

.tab-menu-54 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 112px;
  padding: 9px 24.5px;
  transition: all 0.15s ease;
}

.tab-menu-54:hover {
  transform: translate(0, -5px);
}

.users-126 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-201 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-56 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 224px;
}

.flex-row-66 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-top: 9px;
  min-width: 182px;
}

.key-4 {
  height: 18px;
  width: 18px;
}

.label-202 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 158px;
  white-space: nowrap;
}

.rectangle-6502-25 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 224px;
}

.line-701-23 {
  align-self: center;
  height: 1px;
  width: 1152px;
}

.actions-13 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-left: 32px;
  margin-top: 39px;
  min-width: 336px;
  position: relative;
}

.input-51 {
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

.search-3 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-76 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-76::placeholder,
.input-text-77::placeholder {
  color: #8a8aa899;
}

.table-22 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 639px;
  margin-top: 40px;
  width: 1152px;
}

.row-users-role-and-permissions-1 {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 48px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.cell-275 {
  align-items: flex-start;
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 224px;
}

.blue-t-shirt-xs-178 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
}

.cell-276 {
  align-items: flex-start;
  display: flex;
  gap: 2px;
  height: 64px;
  margin-top: -8px;
  padding: 21px 12px;
  width: 160px;
}

.blue-t-shirt-xs-179 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  min-width: 55px;
}

.chevron-down-304 {
  align-self: center;
  height: 14px;
  width: 14px;
}

.cell-277 {
  align-items: flex-start;
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 55px;
  width: 134px;
}

.cell-278 {
  align-items: flex-start;
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 42.5px;
  width: 134px;
}

.cell-279 {
  align-items: flex-start;
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 44px;
  width: 134px;
}

.cell-280 {
  align-items: flex-start;
  display: flex;
  height: 64px;
  margin-top: -8px;
  padding: 21px 45.5px;
  width: 134px;
}

.table-row-22 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 585px;
  width: 1152px;
}

.row-users-role-and-permissions {
  align-items: flex-start;
  border-radius: 16px;
  display: flex;
  height: 56px;
  overflow: hidden;
  position: relative;
  width: 1152px;
}

.cell-274 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -4px;
  padding: 0 12px;
  width: 224px;
}

.input-50 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 200px;
}

.input-text-75,
.input-text-77 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 176px;
}

.input-text-75::placeholder {
  color: #0d0d1d99;
}

.cell-281 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -4px;
  padding: 21px 12px;
  width: 168px;
}

.blue-t-shirt-xs-180 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 144px;
}

.cell-282 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 64px;
  margin-top: -4px;
  padding: 21px 12px;
  width: 160px;
}

.blue-t-shirt-xs-181 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
  width: 136px;
}

.cell-283 {
  background-color: var(--white);
  height: 64px;
  margin-top: -4px;
  width: 64px;
}
</style>
