<template>
  <div class="container-center-horizontal">
    <form class="products-u47-import-u45-file screen" name="form125" action="form125" method="post">
      <div class="overlap-group-87">
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
        <div class="scroll-bar-48"></div>
        <h1 class="page-header-122 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="overlay-38">
          <div class="import-products-4">
            <div class="flex-row-332">
              <div class="flex-col-287">
                <div class="title-209 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                </div>
                <div class="label-566 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText3 }}</span>
                </div>
                <div class="label-567 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText4 }}</span>
                </div>
              </div>
              <div class="flex-col-288">
                <dropdown52 :spanText="dropdown5Props.spanText" />
                <div class="upload-file-2">
                  <div class="input-210">
                    <div class="input-text-313 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText5 }}</span>
                    </div>
                    <img class="upload-38" :src="upload1" alt="Upload" />
                  </div>
                  <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
                </div>
              </div>
            </div>
            <div class="flex-row-333">
              <div class="label-568 poppins-semi-bold-ebony-14px">
                <span class="poppins-semi-bold-ebony-14px">{{ spanText6 }}</span>
              </div>
              <img class="top-border-122" :src="topBorder1" alt="Top Border" />
            </div>
            <div class="label-container-11 poppins-semi-bold-comet-12px">
              <div class="label-569">
                <span class="poppins-semi-bold-comet-12px">{{ spanText7 }}</span>
              </div>
              <div class="label-570">
                <span class="poppins-semi-bold-comet-12px">{{ spanText8 }}</span>
              </div>
            </div>
            <div class="flex-row-334 poppins-medium-ebony-14px">
              <div class="label-571">
                <span class="poppins-normal-ebony-14px">{{ spanText9 }}</span
                ><span class="poppins-normal-alizarin-crimson-14px">{{ spanText10 }}</span>
              </div>
              <div class="dropdown-184">
                <div class="text-462">
                  <span class="poppins-medium-ebony-14px">{{ spanText11 }}</span>
                </div>
                <img class="chevron-down-343" :src="chevronDown1" alt="Chevron Down" />
              </div>
            </div>
            <div class="flex-row-335 poppins-medium-ebony-14px">
              <div class="label-572">
                <span class="poppins-normal-ebony-14px">{{ spanText12 }}</span
                ><span class="poppins-normal-alizarin-crimson-14px">{{ spanText13 }}</span>
              </div>
              <div class="dropdown-185">
                <div class="text-462">
                  <span class="poppins-medium-ebony-14px">{{ spanText14 }}</span>
                </div>
                <img class="chevron-down-343" :src="chevronDown2" alt="Chevron Down" />
              </div>
            </div>
            <div class="flex-row-331">
              <div class="label-565 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText15 }}</span>
              </div>
              <div class="dropdown-186">
                <div class="text-462 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText16 }}</span>
                </div>
                <img class="chevron-down-343" :src="chevronDown3" alt="Chevron Down" />
              </div>
            </div>
            <div class="flex-row-336">
              <div class="label-573 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText17 }}</span>
              </div>
              <div class="dropdown-187">
                <div class="text-462 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText18 }}</span>
                </div>
                <img class="chevron-down-343" :src="chevronDown4" alt="Chevron Down" />
              </div>
            </div>
            <div class="flex-row-337">
              <div class="label-574 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText19 }}</span>
              </div>
              <div class="dropdown-188">
                <div class="text-462 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText20 }}</span>
                </div>
                <img class="chevron-down-343" :src="chevronDown5" alt="Chevron Down" />
              </div>
            </div>
            <div class="flex-row-331">
              <div class="label-565 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText21 }}</span>
              </div>
              <div class="dropdown-189">
                <div class="text-462 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText22 }}</span>
                </div>
                <img class="chevron-down-343" :src="chevronDown6" alt="Chevron Down" />
              </div>
            </div>
            <div class="flex-row-331">
              <div class="label-565 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText23 }}</span>
              </div>
              <div class="dropdown-190">
                <div class="text-462 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText24 }}</span>
                </div>
                <img class="chevron-down-343" :src="chevronDown7" alt="Chevron Down" />
              </div>
            </div>
            <div class="flex-row-338">
              <div class="label-575 poppins-normal-ebony-14px">
                <span class="poppins-normal-ebony-14px">{{ spanText25 }}</span>
              </div>
              <div class="dropdown-191">
                <div class="text-462 poppins-medium-ebony-14px">
                  <span class="poppins-medium-ebony-14px">{{ spanText26 }}</span>
                </div>
                <img class="chevron-down-343" :src="chevronDown8" alt="Chevron Down" />
              </div>
            </div>
            <div class="bottom-section-111">
              <img class="top-border-123" :src="topBorder2" alt="Top Border" />
              <div class="buttons-84">
                <a href="javascript:SubmitForm('form125')">
                  <div class="button-323">
                    <div class="text-463 poppins-medium-ebony-14px">
                      <span class="poppins-medium-ebony-14px">{{ spanText27 }}</span>
                    </div>
                  </div></a
                ><a href="javascript:SubmitForm('form125')">
                  <div class="button-324">
                    <img class="upload-38" :src="upload2" alt="Upload" />
                    <div class="text-464 poppins-medium-white-14px">
                      <span class="poppins-medium-white-14px">{{ spanText28 }}</span>
                    </div>
                  </div></a
                >
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
import Dropdown52 from "./Dropdown52";
import IconButton from "./IconButton";
export default {
  name: "ProductsImportFile",
  components: {
    Table11,
    LeftNavigationMenu10,
    TopNavigation,
    Actions6,
    BottomSection92,
    Dropdown52,
    IconButton,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "upload1",
    "spanText6",
    "topBorder1",
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
    "topBorder2",
    "spanText27",
    "upload2",
    "spanText28",
    "table11Props",
    "leftNavigationMenu10Props",
    "topNavigationProps",
    "actions6Props",
    "bottomSection92Props",
    "dropdown5Props",
    "iconButtonProps",
  ],
};
</script>

<style>
.products-u47-import-u45-file {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group-87 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.scroll-bar-48 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 310px;
  width: 12px;
}

.page-header-122 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-38 {
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

.import-products-4 {
  align-items: flex-start;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  height: 896px;
  overflow: hidden;
  width: 624px;
}

.flex-row-332 {
  align-items: flex-start;
  display: flex;
  gap: 57px;
  height: 182px;
  margin-left: 32px;
  margin-top: 31px;
  min-width: 462px;
}

.flex-col-287 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 168px;
  width: 165px;
}

.title-209 {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.label-566 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 48px;
  white-space: nowrap;
}

.label-567 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 44px;
  white-space: nowrap;
}

.flex-col-288 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 33px;
  min-height: 113px;
  position: relative;
  width: 240px;
}

.upload-file-2 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 240px;
  position: relative;
}

.input-210,
.dropdown-184,
.dropdown-185,
.dropdown-186,
.dropdown-187,
.dropdown-188,
.dropdown-189,
.dropdown-190,
.dropdown-191 {
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

.input-text-313 {
  letter-spacing: 0;
  line-height: 24px;
  width: 140px;
}

.upload-38 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.flex-row-333 {
  align-items: center;
  align-self: center;
  display: flex;
  gap: 15px;
  height: 24px;
  margin-top: 22px;
  min-width: 560px;
}

.label-568 {
  letter-spacing: 0;
  line-height: 24px;
  min-width: 129px;
  white-space: nowrap;
}

.top-border-122 {
  height: 1px;
  margin-top: 5px;
  width: 416px;
}

.label-container-11 {
  align-items: flex-start;
  display: flex;
  gap: 156px;
  height: 24px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 299px;
}

.label-569 {
  letter-spacing: 1.44px;
  line-height: 24px;
  min-width: 76px;
  white-space: nowrap;
}

.label-570 {
  letter-spacing: 1.44px;
  line-height: 24px;
  white-space: nowrap;
}

.flex-row-334 {
  align-items: center;
  display: flex;
  gap: 146px;
  margin-left: 32px;
  margin-top: 25px;
  min-width: 424px;
}

.label-571 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 86px;
  white-space: nowrap;
}

.text-462 {
  letter-spacing: 0;
  line-height: 24px;
  width: 136px;
}

.chevron-down-343 {
  align-self: center;
  height: 24px;
  width: 24px;
}

.flex-row-335 {
  align-items: center;
  display: flex;
  gap: 179px;
  margin-left: 32px;
  margin-top: 16px;
  min-width: 424px;
}

.label-572 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 53px;
  white-space: nowrap;
}

.flex-row-331 {
  align-items: center;
  display: flex;
  gap: 205px;
  margin-left: 32px;
  margin-top: 16px;
  min-width: 424px;
}

.label-565 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 27px;
  white-space: nowrap;
}

.flex-row-336 {
  align-items: center;
  display: flex;
  gap: 144px;
  margin-left: 32px;
  margin-top: 16px;
  min-width: 424px;
}

.label-573 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 88px;
  white-space: nowrap;
}

.flex-row-337 {
  align-items: center;
  display: flex;
  gap: 114px;
  margin-left: 32px;
  margin-top: 16px;
  min-width: 424px;
}

.label-574 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 118px;
  white-space: nowrap;
}

.flex-row-338 {
  align-items: center;
  display: flex;
  gap: 170px;
  margin-left: 32px;
  margin-top: 16px;
  min-width: 424px;
}

.label-575 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  min-width: 62px;
  white-space: nowrap;
}

.bottom-section-111 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 28px;
  width: 624px;
}

.top-border-123 {
  height: 1px;
  width: 624px;
}

.buttons-84 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 212px;
}

.button-323 {
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

.button-323:hover,
.button-324:hover {
  transform: translate(0, -5px);
}

.text-463 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 51px;
  text-align: center;
}

.button-324 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  height: 40px;
  min-width: 100px;
  padding: 8.5px 12px;
  transition: all 0.15s ease;
}

.text-464 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 48px;
  text-align: center;
}
</style>
