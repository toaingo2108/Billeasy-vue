<template>
  <div class="container-center-horizontal">
    <form class="products-u47-new-price screen" name="form117" action="form117" method="post">
      <div class="overlap-group1-19">
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
        <div class="scroll-bar-44"></div>
        <h1 class="page-header-118 poppins-semi-bold-ebony-28px">
          <span class="poppins-semi-bold-ebony-28px">{{ spanText1 }}</span>
        </h1>
        <div class="overlay-34">
          <div class="new-product-price">
            <div class="flex-row-328">
              <div class="flex-col-283">
                <div class="title-206 poppins-semi-bold-ebony-20px">
                  <span class="poppins-semi-bold-ebony-20px">{{ spanText2 }}</span>
                </div>
                <div class="overlap-group-83">
                  <div class="input-field-103">
                    <div class="label-558 poppins-medium-ebony-13px">
                      <span class="poppins-medium-ebony-13px">{{ spanText3 }}</span
                      ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText4 }}</span>
                    </div>
                    <input6 :children="inputProps.children" />
                  </div>
                  <img class="chevron-down-342" :src="chevronDown" alt="Chevron Down" />
                </div>
                <div class="input-field-104">
                  <div class="label-558 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText5 }}</span
                    ><span class="poppins-medium-alizarin-crimson-13px">{{ spanText6 }}</span>
                  </div>
                  <div class="input-207">
                    <input
                      class="input-text-310 poppins-normal-ebony-14px"
                      name="inputtext"
                      :placeholder="inputPlaceholder1"
                      :type="inputType1"
                    />
                  </div>
                </div>
              </div>
              <div class="dropdown-container-9">
                <div class="dropdown-182">
                  <div class="label-558 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText7 }}</span>
                  </div>
                  <div class="dropdown-183">
                    <input
                      class="text-453 poppins-medium-ebony-14px"
                      name="text"
                      :placeholder="inputPlaceholder2"
                      :type="inputType2"
                    />
                  </div>
                </div>
                <div class="dropdown-182">
                  <div class="label-558 poppins-medium-ebony-13px">
                    <span class="poppins-medium-ebony-13px">{{ spanText8 }}</span>
                  </div>
                  <div class="dropdown-183">
                    <input
                      class="text-453 poppins-medium-ebony-14px"
                      name="text"
                      :placeholder="inputPlaceholder3"
                      :type="inputType3"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom-section-107">
              <img class="top-border-118" :src="topBorder" alt="Top Border" />
              <div class="buttons-80">
                <a href="javascript:SubmitForm('form117')">
                  <div class="button-315">
                    <div class="text-454 poppins-medium-ebony-14px">
                      <span class="poppins-medium-ebony-14px">{{ spanText9 }}</span>
                    </div>
                  </div></a
                ><a href="javascript:SubmitForm('form117')">
                  <div class="button-316">
                    <img class="check-181" :src="check" alt="Check" />
                    <div class="text-455 poppins-medium-white-14px">
                      <span class="poppins-medium-white-14px">{{ spanText10 }}</span>
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
import Input6 from "./Input6";
export default {
  name: "ProductsNewPrice",
  components: {
    Table11,
    LeftNavigationMenu10,
    TopNavigation,
    Actions6,
    BottomSection92,
    Input6,
  },
  props: [
    "spanText1",
    "spanText2",
    "spanText3",
    "spanText4",
    "chevronDown",
    "spanText5",
    "spanText6",
    "inputType1",
    "inputPlaceholder1",
    "spanText7",
    "inputType2",
    "inputPlaceholder2",
    "spanText8",
    "inputType3",
    "inputPlaceholder3",
    "topBorder",
    "spanText9",
    "check",
    "spanText10",
    "table11Props",
    "leftNavigationMenu10Props",
    "topNavigationProps",
    "actions6Props",
    "bottomSection92Props",
    "inputProps",
  ],
};
</script>

<style>
.products-u47-new-price {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  width: 1440px;
}

.overlap-group1-19 {
  height: 967px;
  position: relative;
  width: 1440px;
}

.scroll-bar-44 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  left: 1428px;
  position: absolute;
  top: 310px;
  width: 12px;
}

.page-header-118 {
  left: 256px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 95px;
  white-space: nowrap;
}

.overlay-34 {
  -webkit-backdrop-filter: blur(6px) brightness(100%);
  align-items: flex-start;
  backdrop-filter: blur(6px) brightness(100%);
  background-color: var(--ebony-3);
  display: flex;
  height: 967px;
  justify-content: flex-end;
  left: 0;
  min-width: 1440px;
  padding: 256px 328px;
  position: absolute;
  top: 0;
}

.new-product-price {
  align-items: center;
  background-color: var(--concrete);
  border-radius: 24px;
  box-shadow: 0px 15px 60px #08084626;
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 384px;
  overflow: hidden;
  width: 560px;
}

.flex-row-328 {
  align-items: flex-end;
  display: flex;
  gap: 48px;
  height: 225px;
  margin-top: 31px;
  min-width: 496px;
}

.flex-col-283 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 225px;
  width: 224px;
}

.title-206 {
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
}

.overlap-group-83 {
  height: 66px;
  margin-top: 41px;
  position: relative;
  width: 224px;
}

.input-field-103 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  left: 0;
  min-height: 66px;
  position: absolute;
  top: 0;
  width: 224px;
}

.label-558 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 20px;
  width: 224px;
}

.chevron-down-342 {
  height: 24px;
  left: 188px;
  position: absolute;
  top: 34px;
  width: 24px;
}

.input-field-104 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 24px;
  min-height: 66px;
  width: 224px;
}

.input-207 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 7px 12px;
  width: 224px;
}

.input-text-310 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 200px;
}

.input-text-310::placeholder,
.text-453::placeholder {
  color: #0d0d1d99;
}

.dropdown-container-9 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 156px;
  width: 224px;
}

.dropdown-182 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-height: 66px;
  width: 224px;
}

.dropdown-183 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  overflow: hidden;
  padding: 8.5px 12px;
  width: 224px;
}

.text-453 {
  background-color: transparent;
  border: 0;
  height: 21px;
  letter-spacing: 0;
  line-height: normal;
  padding: 0;
  width: 200px;
}

.bottom-section-107 {
  align-items: flex-end;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  width: 560px;
}

.top-border-118 {
  height: 1px;
  width: 560px;
}

.buttons-80 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  margin-right: 32px;
  min-width: 216px;
}

.button-315 {
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

.button-315:hover,
.button-316:hover {
  transform: translate(0, -5px);
}

.text-454 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 51px;
  text-align: center;
}

.button-316 {
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

.check-181 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-455 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 35px;
  text-align: center;
}
</style>
