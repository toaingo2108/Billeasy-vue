<template>
  <div class="container-center-horizontal">
    <form class="products-u47-new screen" name="form115" action="form115" method="post">
      <div class="overlap-group3-7">
        <table11 v-bind="table11Props" />
        <left-navigation-menu10 v-bind="leftNavigationMenu10Props" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <actions6 :searchProps="actions6Props.searchProps" :buttons5Props="actions6Props.buttons5Props" />
        <bottom-section92
          :className="bottomSection92Props.className"
          :iconButtonProps="bottomSection92Props.iconButtonProps"
          :paginationProps="bottomSection92Props.paginationProps"
        />
        <div class="scroll-bar-43"></div>
        <h1 class="page-header-117 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="overlay-33">
          <div class="new-product">
            <div class="flex-row-326">
              <div class="flex-col-280">
                <div class="title-205 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                </div>
                <div class="input-field-102">
                  <div class="label-556 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span>
                  </div>
                  <div class="input-203">
                    <input
                      class="input-text-307 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder1"
                      :type="inputType1"
                    />
                  </div>
                </div>
                <div class="input-field-101">
                  <div class="label-556 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText4 }}</span>
                  </div>
                  <div class="input-203">
                    <input
                      class="input-text-307 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder2"
                      :type="inputType2"
                    />
                  </div>
                </div>
                <div class="input-field-101">
                  <div class="label-556 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span>
                  </div>
                  <div class="input-203">
                    <input
                      class="input-text-307 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder3"
                      :type="inputType3"
                    />
                  </div>
                </div>
                <div class="input-field-101">
                  <div class="label-556 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText6 }}</span>
                  </div>
                  <div class="input-203">
                    <input
                      class="input-text-307 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder4"
                      :type="inputType4"
                    />
                  </div>
                </div>
              </div>
              <div class="flex-col-281">
                <div class="flex-col-item-7">
                  <div class="label-556 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText7 }}</span>
                  </div>
                  <div class="dropdown-181">
                    <input
                      class="text-448 poppins-medium-ebony-14px"
                      name="text"
                      :placeholder="inputPlaceholder5"
                      :type="inputType5"
                    /><img class="chevron-down-340" :src="chevronDown1" alt="Chevron Down" />
                  </div>
                </div>
                <div class="flex-col-item-7">
                  <div class="label-556 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText8 }}</span>
                  </div>
                  <div class="dropdown-181">
                    <input
                      class="text-448 poppins-medium-ebony-14px"
                      name="text"
                      :placeholder="inputPlaceholder6"
                      :type="inputType6"
                    /><img class="chevron-down-340" :src="chevronDown2" alt="Chevron Down" />
                  </div>
                </div>
                <div class="flex-col-item-7">
                  <div class="label-556 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText9 }}</span>
                  </div>
                  <div class="dropdown-181">
                    <input
                      class="text-448 poppins-medium-ebony-14px"
                      name="text"
                      :placeholder="inputPlaceholder7"
                      :type="inputType7"
                    /><img class="chevron-down-340" :src="chevronDown3" alt="Chevron Down" />
                  </div>
                </div>
                <div class="flex-col-item-7">
                  <div class="label-556 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText10 }}</span>
                  </div>
                  <div class="input-203">
                    <input
                      class="input-text-307 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder8"
                      :type="inputType8"
                    />
                  </div>
                </div>
              </div>
              <div class="button-container-2">
                <button16 />
                <button16 />
                <button16 />
              </div>
            </div>
            <div class="flex-col-282">
              <div class="label-container-10 poppins-semi-bold-comet-12px">
                <div class="label-557">
                  <span class="poppins-semi-bold-comet-12px">{{ spanText11 }}</span>
                </div>
                <div class="label-557">
                  <span class="poppins-semi-bold-comet-12px">{{ spanText12 }}</span>
                </div>
                <div class="label-557">
                  <span class="poppins-semi-bold-comet-12px">{{ spanText13 }}</span>
                </div>
                <div class="label-557">
                  <span class="poppins-semi-bold-comet-12px">{{ spanText14 }}</span>
                </div>
              </div>
              <div class="flex-row-327">
                <div class="input-204">
                  <input
                    class="input-text-308 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder9"
                    :type="inputType9"
                  />
                </div>
                <div class="input-205">
                  <input
                    class="input-text-308 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder10"
                    :type="inputType10"
                  />
                </div>
                <div class="input-205">
                  <input
                    class="input-text-308 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder11"
                    :type="inputType11"
                  />
                </div>
                <div class="overlap-group-82">
                  <div class="input-206">
                    <div class="input-text-309 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText15 }}</span>
                    </div>
                  </div>
                  <img class="chevron-down-341" :src="chevronDown4" alt="Chevron Down" />
                </div>
                <div class="icon-button-402" :style="{ 'background-image': 'url(' + iconButton1 + ')' }"></div>
              </div>
              <div class="flex-row-325">
                <div class="input-204">
                  <input
                    class="input-text-308 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder12"
                    :type="inputType12"
                  />
                </div>
                <div class="input-205">
                  <input
                    class="input-text-308 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder13"
                    :type="inputType13"
                  />
                </div>
                <div class="input-205">
                  <input
                    class="input-text-308 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder14"
                    :type="inputType14"
                  />
                </div>
                <div class="overlap-group-82">
                  <div class="input-206">
                    <div class="input-text-309 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText16 }}</span>
                    </div>
                  </div>
                  <img class="chevron-down-341" :src="chevronDown5" alt="Chevron Down" />
                </div>
                <div class="icon-button-402" :style="{ 'background-image': 'url(' + iconButton2 + ')' }"></div>
              </div>
              <div class="flex-row-325">
                <div class="input-204">
                  <input
                    class="input-text-308 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder15"
                    :type="inputType15"
                  />
                </div>
                <div class="input-205">
                  <input
                    class="input-text-308 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder16"
                    :type="inputType16"
                  />
                </div>
                <div class="input-205">
                  <input
                    class="input-text-308 poppins-normal-ebony-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder17"
                    :type="inputType17"
                  />
                </div>
                <div class="overlap-group-82">
                  <div class="input-206">
                    <div class="input-text-309 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText17 }}</span>
                    </div>
                  </div>
                  <img class="chevron-down-341" :src="chevronDown6" alt="Chevron Down" />
                </div>
                <div class="icon-button-402" :style="{ 'background-image': 'url(' + iconButton3 + ')' }"></div>
              </div>
              <div class="button-311">
                <img class="add-113" :src="add" alt="Add" />
                <div class="text-449 poppins-medium-caribbean-green-14px">
                  <span class="poppins-medium-caribbean-green-14px">{{ spanText18 }}</span>
                </div>
              </div>
              <div class="bottom-section-106">
                <img class="top-border-117" :src="topBorder" alt="Top Border" />
                <div class="buttons-79">
                  <a href="javascript:SubmitForm('form115')">
                    <div class="button-312">
                      <div class="text-450 poppins-medium-ebony-14px">
                        <span class="poppins-medium-ebony-14px">{{ spanText19 }}</span>
                      </div>
                    </div></a
                  ><a href="javascript:SubmitForm('form115')">
                    <div class="button-313">
                      <img class="check-180" :src="check" alt="Check" />
                      <div class="text-451 poppins-medium-white-14px">
                        <span class="poppins-medium-white-14px">{{ spanText20 }}</span>
                      </div>
                    </div></a
                  >
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
import Table11 from "./Table11";
import LeftNavigationMenu10 from "./LeftNavigationMenu10";
import TopNavigation from "./TopNavigation";
import Actions6 from "./Actions6";
import BottomSection92 from "./BottomSection92";
import Button16 from "./Button16";
export default {
  name: "ProductsNew",
  components: {
    Table11,
    LeftNavigationMenu10,
    TopNavigation,
    Actions6,
    BottomSection92,
    Button16,
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
    "chevronDown1",
    "spanText8",
    "inputType6",
    "inputPlaceholder6",
    "chevronDown2",
    "spanText9",
    "inputType7",
    "inputPlaceholder7",
    "chevronDown3",
    "spanText10",
    "inputType8",
    "inputPlaceholder8",
    "spanText11",
    "spanText12",
    "spanText13",
    "spanText14",
    "inputType9",
    "inputPlaceholder9",
    "inputType10",
    "inputPlaceholder10",
    "inputType11",
    "inputPlaceholder11",
    "spanText15",
    "chevronDown4",
    "iconButton1",
    "inputType12",
    "inputPlaceholder12",
    "inputType13",
    "inputPlaceholder13",
    "inputType14",
    "inputPlaceholder14",
    "spanText16",
    "chevronDown5",
    "iconButton2",
    "inputType15",
    "inputPlaceholder15",
    "inputType16",
    "inputPlaceholder16",
    "inputType17",
    "inputPlaceholder17",
    "spanText17",
    "chevronDown6",
    "iconButton3",
    "add",
    "spanText18",
    "topBorder",
    "spanText19",
    "check",
    "spanText20",
    "table11Props",
    "leftNavigationMenu10Props",
    "topNavigationProps",
    "actions6Props",
    "bottomSection92Props",
  ],
};
</script>

<style>
.products-u47-new {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group3-7 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.scroll-bar-43 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 310px;
  width: 12px;
}

.page-header-117 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-33 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-end;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 67px 256px;
  position: absolute;
  top: 0;
}

.new-product {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  gap: 63px;
  height: 832px;
  overflow: hidden;
  width: 704px;
}

.flex-row-326 {
  align-items: center;
  display: flex;
  height: 405px;
  margin-right: 39px;
  margin-top: 31px;
  min-width: 601px;
}

.flex-col-280 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 405px;
  width: 224px;
}

.title-205 {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.input-field-102 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 41px;
  min-height: 66px;
  width: 224px;
}

.label-556 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 224px;
}

.input-203 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 224px;
}

.input-text-307 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 200px;
}

.input-text-307::placeholder,
.text-448::placeholder,
.input-text-308::placeholder {
  color: #0d0d1d99;
}

.input-field-101 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 224px;
}

.flex-col-281 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: 48px;
  min-height: 336px;
  width: 224px;
}

.flex-col-item-7 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 224px;
}

.dropdown-181 {
  align-items: center;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 0 12px;
  width: 224px;
}

.text-448 {
  background-color: transparent;
  border: 0;
  height: 21px;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  padding: 0;
  width: 168px;
}

.chevron-down-340 {
  height: 24px;
  width: 24px;
}

.button-container-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 69px;
  margin-left: 16px;
  margin-top: 6px;
  min-height: 201px;
  position: relative;
  width: 89px;
}

.flex-col-282 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 333px;
  width: 704px;
}

.label-container-10 {
  align-items: flex-start;
  display: flex;
  gap: 24px;
  height: 24px;
  margin-right: 56px;
  min-width: 584px;
}

.label-557 {
  letter-spacing: 1.44px;
  line-height: 24px;
  width: 128px;
}

.flex-row-327 {
  align-items: center;
  display: flex;
  margin-top: 13px;
  min-width: 640px;
}

.input-204 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 32px;
  overflow: hidden;
  padding: 3px 12px;
  width: 128px;
}

.input-text-308 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 104px;
}

.input-205 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 32px;
  margin-left: 24px;
  overflow: hidden;
  padding: 3px 12px;
  width: 128px;
}

.overlap-group-82 {
  border-radius: 10px;
  height: 32px;
  margin-left: 24px;
  position: relative;
  width: 128px;
}

.input-206 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 32px;
  left: 0;
  overflow: hidden;
  padding: 3px 12px;
  position: absolute;
  top: 0;
  width: 128px;
}

.input-text-309 {
  letter-spacing: 0;
  line-height: 24px;
  width: 104px;
}

.chevron-down-341 {
  height: 24px;
  left: 96px;
  position: absolute;
  top: 4px;
  width: 24px;
}

.icon-button-402 {
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 36px;
  width: 20px;
}

.flex-row-325 {
  align-items: center;
  display: flex;
  margin-top: 8px;
  min-width: 640px;
}

.button-311 {
  align-items: flex-start;
  align-self: flex-start;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 21px;
  margin-left: 32px;
  margin-top: 16px;
  min-width: 127px;
  transition: all 0.15s ease;
}

.button-311:hover {
  transform: scale(1.1);
}

.add-113,
.check-180 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-449 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 101px;
  text-align: center;
}

.bottom-section-106 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 51px;
  width: 704px;
}

.top-border-117 {
  height: 1px;
  width: 704px;
}

.buttons-79 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 216px;
}

.button-312 {
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

.button-312:hover,
.button-313:hover {
  transform: translate(0, -5px);
}

.text-450 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 51px;
  text-align: center;
}

.button-313 {
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

.text-451 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}
</style>
