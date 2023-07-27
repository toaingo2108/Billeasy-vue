<template>
  <div class="container-center-horizontal">
    <div class="settings-u47-payment-methods screen">
      <left-navigation-menu v-bind="leftNavigationMenuProps" />
      <div class="flex-col-40">
        <top-navigation
          :className="topNavigationProps.className"
          :languageProps="topNavigationProps.languageProps"
          :userProfileProps="topNavigationProps.userProfileProps"
        />
        <div class="flex-row-28">
          <div class="flex-col-41">
            <h1 class="page-header-22 poppins-semi-bold-ebony-28px">
              <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
            </h1>
            <div class="frame-2645-24">
              <div class="label-137 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText2 }}</span>
              </div>
              <div class="label-134 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText3 }}</span>
              </div>
              <div class="label-134 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText4 }}</span>
              </div>
              <div class="label-134 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText5 }}</span>
              </div>
              <div class="label-134 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText6 }}</span>
              </div>
              <div class="label-134 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText7 }}</span>
              </div>
              <div class="label-134 poppins-medium-comet-14px">
                <span class="poppins-medium-comet-14px">{{ spanText8 }}</span>
              </div>
              <div class="label-134 poppins-semi-bold-caribbean-green-14px">
                <span class="poppins-semi-bold-caribbean-green-14px">{{ spanText9 }}</span>
              </div>
            </div>
          </div>
          <div class="frame-2548-19">
            <div class="flex-row-29">
              <div class="flex-col-42">
                <header3 :spanText="header3Props.spanText" :frame2443Props="header3Props.frame2443Props" />
                <div class="label-138 poppins-semi-bold-comet-12px">
                  <span class="poppins-semi-bold-comet-12px">{{ spanText10 }}</span>
                </div>
                <div class="input-37">
                  <div class="information">
                    <div class="label-135 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText11 }}</span>
                    </div>
                    <div class="input-36">
                      <input
                        class="input-text-56 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder1"
                        :type="inputType1"
                      />
                    </div>
                  </div>
                  <div class="information">
                    <div class="label-135 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText12 }}</span>
                    </div>
                    <div class="input-36">
                      <input
                        class="input-text-56 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder2"
                        :type="inputType2"
                      />
                    </div>
                  </div>
                  <div class="information">
                    <div class="label-135 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText13 }}</span>
                    </div>
                    <div class="input-36">
                      <input
                        class="input-text-56 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder3"
                        :type="inputType3"
                      />
                    </div>
                  </div>
                  <div class="information">
                    <div class="label-135 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText14 }}</span>
                    </div>
                    <div class="input-36">
                      <input
                        class="input-text-56 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder4"
                        :type="inputType4"
                      />
                    </div>
                  </div>
                </div>
                <div class="label-136 poppins-semi-bold-comet-12px">
                  <span class="poppins-semi-bold-comet-12px">{{ spanText15 }}</span>
                </div>
                <div class="input-38">
                  <div class="information">
                    <div class="label-135 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText16 }}</span>
                    </div>
                    <div class="input-36">
                      <input
                        class="input-text-56 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder5"
                        :type="inputType5"
                      />
                    </div>
                  </div>
                  <div class="information">
                    <div class="label-135 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText17 }}</span>
                    </div>
                    <div class="input-36">
                      <input
                        class="input-text-56 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder6"
                        :type="inputType6"
                      />
                    </div>
                  </div>
                  <div class="information">
                    <div class="label-135 poppins-normal-ebony-14px">
                      <span class="poppins-normal-ebony-14px">{{ spanText18 }}</span>
                    </div>
                    <div class="input-36">
                      <input
                        class="input-text-56 poppins-normal-ebony-14px"
                        name="inputtext"
                        :placeholder="inputPlaceholder7"
                        :type="inputType7"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex-col-43">
                <div class="label-139 poppins-semi-bold-comet-12px">
                  <span class="poppins-semi-bold-comet-12px">{{ spanText19 }}</span>
                </div>
                <div class="information-1">
                  <div class="label-135 poppins-normal-ebony-14px">
                    <span class="poppins-normal-ebony-14px">{{ spanText20 }}</span>
                  </div>
                  <div class="input-36">
                    <input
                      class="input-text-56 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder8"
                      :type="inputType8"
                    />
                  </div>
                </div>
                <div class="label-136 poppins-semi-bold-comet-12px">
                  <span class="poppins-semi-bold-comet-12px">{{ spanText21 }}</span>
                </div>
                <div class="information-1">
                  <div class="label-135 poppins-normal-ebony-14px">
                    <span class="poppins-normal-ebony-14px">{{ spanText22 }}</span>
                  </div>
                  <div class="input-36">
                    <input
                      class="input-text-56 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder9"
                      :type="inputType9"
                    />
                  </div>
                </div>
                <div class="label-136 poppins-semi-bold-comet-12px">
                  <span class="poppins-semi-bold-comet-12px">{{ spanText23 }}</span>
                </div>
                <div class="information-1">
                  <div class="label-135 poppins-normal-ebony-14px">
                    <span class="poppins-normal-ebony-14px">{{ spanText24 }}</span>
                  </div>
                  <div class="input-36">
                    <input
                      class="input-text-56 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder10"
                      :type="inputType10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <bottom-section14 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNavigationMenu from "./LeftNavigationMenu";
import TopNavigation from "./TopNavigation";
import Header3 from "./Header3";
import BottomSection14 from "./BottomSection14";
export default {
  name: "SettingsPaymentMethods",
  components: {
    LeftNavigationMenu,
    TopNavigation,
    Header3,
    BottomSection14,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "spanText10",
    "spanText11",
    "inputType1",
    "inputPlaceholder1",
    "spanText12",
    "inputType2",
    "inputPlaceholder2",
    "spanText13",
    "inputType3",
    "inputPlaceholder3",
    "spanText14",
    "inputType4",
    "inputPlaceholder4",
    "spanText15",
    "spanText16",
    "inputType5",
    "inputPlaceholder5",
    "spanText17",
    "inputType6",
    "inputPlaceholder6",
    "spanText18",
    "inputType7",
    "inputPlaceholder7",
    "spanText19",
    "spanText20",
    "inputType8",
    "inputPlaceholder8",
    "spanText21",
    "spanText22",
    "inputType9",
    "inputPlaceholder9",
    "spanText23",
    "spanText24",
    "inputType10",
    "inputPlaceholder10",
    "leftNavigationMenuProps",
    "topNavigationProps",
    "header3Props",
  ],
};
</script>

<style>
.settings-u47-payment-methods {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-40 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 928px;
  position: relative;
  width: 1216px;
}

.flex-row-28 {
  align-items: flex-start;
  display: flex;
  gap: 40px;
  height: 833px;
  min-width: 1152px;
}

.flex-col-41 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 41px;
  min-height: 409px;
  width: 184px;
}

.page-header-22 {
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
}

.frame-2645-24 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 328px;
  width: 184px;
}

.label-137 {
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  width: 184px;
}

.label-134 {
  letter-spacing: 0;
  line-height: 20px;
  width: 184px;
}

.frame-2548-19 {
  align-items: center;
  align-self: flex-end;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 108px;
  height: 832px;
  overflow: hidden;
  position: relative;
  width: 928px;
}

.flex-row-29 {
  align-items: center;
  display: flex;
  gap: 48px;
  height: 604px;
  margin-top: 24px;
  min-width: 864px;
}

.flex-col-42 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 604px;
  position: relative;
  width: 408px;
}

.label-138 {
  letter-spacing: 1.44px;
  line-height: 24px;
  margin-top: 39px;
  white-space: nowrap;
}

.input-37 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 21px;
  min-height: 232px;
  width: 408px;
}

.information {
  align-items: center;
  display: flex;
  gap: 32px;
  min-width: 408px;
}

.label-135 {
  letter-spacing: 0;
  line-height: 24px;
  margin-bottom: 2px;
  width: 168px;
}

.input-36 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 208px;
}

.input-text-56 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 184px;
}

.input-text-56::placeholder {
  color: #0d0d1d99;
}

.label-136 {
  letter-spacing: 1.44px;
  line-height: 24px;
  margin-top: 47px;
  white-space: nowrap;
}

.input-38 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 21px;
  min-height: 168px;
  width: 408px;
}

.flex-col-43 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-bottom: 121px;
  min-height: 349px;
  width: 408px;
}

.label-139 {
  letter-spacing: 1.44px;
  line-height: 24px;
  white-space: nowrap;
}

.information-1 {
  align-items: center;
  display: flex;
  gap: 32px;
  margin-top: 21px;
  min-width: 408px;
}
</style>
