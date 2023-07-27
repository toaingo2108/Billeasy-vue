<template>
  <div class="container-center-horizontal">
    <div class="customers-u47-import2 screen">
      <div class="overlap-group-70">
        <table9 v-bind="table9Props" />
        <left-navigation-menu5 v-bind="leftNavigationMenu5Props" />
        <top-navigation
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <actions5
          :searchProps="actions5Props.searchProps"
          :iconButton1Props="actions5Props.iconButton1Props"
          :iconButton2Props="actions5Props.iconButton2Props"
          :iconButton3Props="actions5Props.iconButton3Props"
        />
        <x-button19 :className="buttonProps.className" />
        <bottom-section92
          :className="bottomSection92Props.className"
          :iconButtonProps="bottomSection92Props.iconButtonProps"
          :paginationProps="bottomSection92Props.paginationProps"
        />
        <div class="scroll-bar-40"></div>
        <h1 class="page-header-97 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="overlay-29">
          <div class="import-products-1">
            <div class="flex-row-224">
              <div class="flex-col-224">
                <div class="title-111 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                </div>
                <div class="label-501 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText3 }}</span>
                </div>
                <div class="label-502 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText4 }}</span>
                </div>
              </div>
              <div class="flex-col-225">
                <dropdown52 :spanText="dropdown5Props.spanText" />
                <div class="upload-file-1">
                  <div class="input-185">
                    <div class="input-text-290 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText5 }}</span>
                    </div>
                    <img class="upload-36" :src="upload" alt="Upload" />
                  </div>
                  <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
                </div>
              </div>
            </div>
            <div class="flex-row-225">
              <div class="label-503 poppins-semi-bold-ebony-14px">
                <span class="poppins-semi-bold-ebony-14px">{{ spanText6 }}</span>
              </div>
              <img class="top-border-113" :src="topBorder" alt="Top Border" />
            </div>
            <div class="label-container-9 poppins-semi-bold-comet-12px">
              <div class="label-504">
                <span class="poppins-semi-bold-comet-12px">{{ spanText7 }}</span>
              </div>
              <div class="label-505">
                <span class="poppins-semi-bold-comet-12px">{{ spanText8 }}</span>
              </div>
            </div>
            <div class="flex-row-226 poppins-medium-ebony-14px">
              <div class="label-506">
                <span class="poppins-normal-ebony-14px">{{ spanText9 }}</span
                ><span class="poppins-normal-alizarin-crimson-14px">{{ spanText10 }}</span>
              </div>
              <div class="dropdown-171">
                <div class="text-417">
                  <span class="poppins-medium-ebony-14px">{{ spanText11 }}</span>
                </div>
                <img class="chevron-down-337" :src="chevronDown1" alt="Chevron Down" />
              </div>
            </div>
            <div class="flex-row-227 poppins-medium-ebony-14px">
              <div class="label-507">
                <span class="poppins-normal-ebony-14px">{{ spanText12 }}</span
                ><span class="poppins-normal-alizarin-crimson-14px">{{ spanText13 }}</span>
              </div>
              <div class="dropdown-172">
                <div class="text-417">
                  <span class="poppins-medium-ebony-14px">{{ spanText14 }}</span>
                </div>
                <img class="chevron-down-337" :src="chevronDown2" alt="Chevron Down" />
              </div>
            </div>
            <div class="flex-row-228">
              <div class="label-508 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText15 }}</span>
              </div>
              <div class="dropdown-173">
                <div class="text-417 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText16 }}</span>
                </div>
                <img class="chevron-down-337" :src="chevronDown3" alt="Chevron Down" />
              </div>
            </div>
            <div class="flex-row-229">
              <div class="label-509 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText17 }}</span>
              </div>
              <div class="dropdown-174">
                <div class="text-417 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText18 }}</span>
                </div>
                <img class="chevron-down-337" :src="chevronDown4" alt="Chevron Down" />
              </div>
            </div>
            <div class="flex-row-230">
              <div class="label-510 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText19 }}</span>
              </div>
              <div class="dropdown-175">
                <div class="text-417 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText20 }}</span>
                </div>
                <img class="chevron-down-337" :src="chevronDown5" alt="Chevron Down" />
              </div>
            </div>
            <div class="flex-row-231">
              <div class="label-511 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText21 }}</span>
              </div>
              <div class="dropdown-176">
                <div class="text-417 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText22 }}</span>
                </div>
                <img class="chevron-down-337" :src="chevronDown6" alt="Chevron Down" />
              </div>
            </div>
            <div class="flex-row-232">
              <div class="label-512 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText23 }}</span>
              </div>
              <div class="dropdown-177">
                <div class="text-417 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText24 }}</span>
                </div>
                <img class="chevron-down-337" :src="chevronDown7" alt="Chevron Down" />
              </div>
            </div>
            <div class="flex-row-233">
              <div class="label-513 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText25 }}</span>
              </div>
              <div class="dropdown-178">
                <div class="text-417 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText26 }}</span>
                </div>
                <img class="chevron-down-337" :src="chevronDown8" alt="Chevron Down" />
              </div>
            </div>
            <bottom-section322
              :className="bottomSection322Props.className"
              :button222Props="bottomSection322Props.button222Props"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table9 from "./Table9";
import LeftNavigationMenu5 from "./LeftNavigationMenu5";
import TopNavigation from "./TopNavigation";
import Actions5 from "./Actions5";
import xButton19 from "./xButton19";
import BottomSection92 from "./BottomSection92";
import Dropdown52 from "./Dropdown52";
import IconButton from "./IconButton";
import BottomSection322 from "./BottomSection322";
export default {
  name: "CustomersImport2",
  components: {
    Table9,
    LeftNavigationMenu5,
    TopNavigation,
    Actions5,
    xButton19,
    BottomSection92,
    Dropdown52,
    IconButton,
    BottomSection322,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "upload",
    "spanText6",
    "topBorder",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "spanText11",
    "chevronDown1",
    "spanText12",
    "spanText13",
    "spanText14",
    "chevronDown2",
    "spanText15",
    "spanText16",
    "chevronDown3",
    "spanText17",
    "spanText18",
    "chevronDown4",
    "spanText19",
    "spanText20",
    "chevronDown5",
    "spanText21",
    "spanText22",
    "chevronDown6",
    "spanText23",
    "spanText24",
    "chevronDown7",
    "spanText25",
    "spanText26",
    "chevronDown8",
    "table9Props",
    "leftNavigationMenu5Props",
    "topNavigationProps",
    "actions5Props",
    "buttonProps",
    "bottomSection92Props",
    "dropdown5Props",
    "iconButtonProps",
    "bottomSection322Props",
  ],
};
</script>

<style>
.customers-u47-import2 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-70 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.scroll-bar-40 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 310px;
  width: 12px;
}

.page-header-97 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-29 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 32px 296px;
  position: absolute;
  top: 0;
}

.import-products-1 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 896px;
  overflow: hidden;
  position: relative;
  width: 624px;
}

.flex-row-224 {
  align-items: flex-start;
  display: flex;
  gap: 36px;
  height: 182px;
  margin-left: 30px;
  margin-top: 31px;
  min-width: 464px;
}

.flex-col-224 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 168px;
  width: 188px;
}

.title-111 {
  letter-spacing: 0;
  line-height: 28px;
  margin-left: 2px;
  white-space: nowrap;
}

.label-501 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 48px;
  white-space: nowrap;
}

.label-502 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 44px;
  white-space: nowrap;
}

.flex-col-225 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 33px;
  min-height: 113px;
  position: relative;
  width: 240px;
}

.upload-file-1 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 240px;
  position: relative;
}

.input-185,
.dropdown-171,
.dropdown-172,
.dropdown-173,
.dropdown-174,
.dropdown-175,
.dropdown-176,
.dropdown-177,
.dropdown-178 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 192px;
}

.input-text-290 {
  letter-spacing: 0;
  line-height: 24px;
  width: 140px;
}

.upload-36 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.flex-row-225 {
  align-items: center;
  align-self: center;
  display: flex;
  gap: 17px;
  height: 24px;
  margin-right: 2px;
  margin-top: 22px;
  min-width: 562px;
}

.label-503 {
  letter-spacing: 0;
  line-height: 24px;
  min-width: 129px;
  white-space: nowrap;
}

.top-border-113 {
  height: 1px;
  margin-top: 5px;
  width: 416px;
}

.label-container-9 {
  align-items: flex-start;
  display: flex;
  gap: 158px;
  height: 24px;
  margin-left: 30px;
  margin-top: 32px;
  min-width: 301px;
}

.label-504 {
  letter-spacing: 1.44px;
  line-height: 24px;
  min-width: 76px;
  white-space: nowrap;
}

.label-505 {
  letter-spacing: 1.44px;
  line-height: 24px;
  white-space: nowrap;
}

.flex-row-226 {
  align-items: center;
  display: flex;
  gap: 189px;
  margin-left: 30px;
  margin-top: 25px;
  min-width: 426px;
}

.label-506 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 45px;
  white-space: nowrap;
}

.text-417 {
  letter-spacing: 0;
  line-height: 24px;
  width: 136px;
}

.chevron-down-337 {
  align-self: center;
  height: 24px;
  width: 24px;
}

.flex-row-227 {
  align-items: center;
  display: flex;
  gap: 149px;
  margin-left: 30px;
  margin-top: 16px;
  min-width: 426px;
}

.label-507 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 85px;
  white-space: nowrap;
}

.flex-row-228 {
  align-items: center;
  display: flex;
  gap: 159px;
  margin-left: 30px;
  margin-top: 16px;
  min-width: 426px;
}

.label-508 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 75px;
  white-space: nowrap;
}

.flex-row-229 {
  align-items: center;
  display: flex;
  gap: 117px;
  margin-left: 30px;
  margin-top: 16px;
  min-width: 426px;
}

.label-509 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 117px;
  white-space: nowrap;
}

.flex-row-230 {
  align-items: center;
  display: flex;
  gap: 78px;
  margin-left: 30px;
  margin-top: 16px;
  min-width: 426px;
}

.label-510 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 156px;
  white-space: nowrap;
}

.flex-row-231 {
  align-items: center;
  display: flex;
  gap: 104px;
  margin-left: 30px;
  margin-top: 16px;
  min-width: 426px;
}

.label-511 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 130px;
  white-space: nowrap;
}

.flex-row-232 {
  align-items: center;
  display: flex;
  gap: 147px;
  margin-left: 30px;
  margin-top: 16px;
  min-width: 426px;
}

.label-512 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 87px;
  white-space: nowrap;
}

.flex-row-233 {
  align-items: center;
  display: flex;
  gap: 190px;
  margin-left: 30px;
  margin-top: 16px;
  min-width: 426px;
}

.label-513 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 44px;
  white-space: nowrap;
}
</style>
