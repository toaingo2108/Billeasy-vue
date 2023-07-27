<template>
  <div class="container-center-horizontal">
    <form class="products-133 screen" name="form128" action="form128" method="post">
      <left-navigation-menu10 v-bind="leftNavigationMenu10Props" />
      <div class="flex-col-289">
        <div class="top-navigation-7">
          <img class="line-227" :src="line1" alt="Line" /><a href="javascript:SubmitForm('form128')"
            ><img class="link-2" :src="support" alt="Support" /></a
          ><img class="line-226" :src="line2" alt="Line" /><a href="javascript:SubmitForm('form128')"
            ><img class="link-2" :src="notification" alt="Notification" /></a
          ><img class="line-226" :src="line3" alt="Line" /><language :chevronDown="languageProps.chevronDown" />
          <img class="line-226" :src="line4" alt="Line" /><user-profile :chevronDown="userProfileProps.chevronDown" />
        </div>
        <div class="flex-row-339">
          <div class="flex-col-290">
            <div class="flex-row-340">
              <h1 class="page-header-123 poppins-semi-bold-ebony-28px">
                <span class="poppins-semi-bold-ebony-28px">{{ spanText }}</span>
              </h1>
              <x-button19 />
            </div>
            <div class="actions-76">
              <div class="search-68">
                <div class="input-211">
                  <img class="search-69" :src="search" alt="Search" /><input
                    class="input-text-314 poppins-normal-manatee-14px"
                    name="inputtext"
                    :placeholder="inputPlaceholder"
                    :type="inputType"
                  />
                </div>
                <icon-button :src="iconButtonProps.src" :className="iconButtonProps.className" />
              </div>
              <buttons5
                :className="buttons5Props.className"
                :iconButton1Props="buttons5Props.iconButton1Props"
                :iconButton2Props="buttons5Props.iconButton2Props"
                :iconButton3Props="buttons5Props.iconButton3Props"
              />
            </div>
            <table11 v-bind="table11Props" />
          </div>
          <div class="scroll-bar-49"></div>
        </div>
        <div class="bottom-section-112">
          <img class="top-border-124" :src="topBorder" alt="Top Border" />
          <div class="tion-container-41">
            <div class="actions-77">
              <dropdown172 />
              <a href="javascript:SubmitForm('form128')">
                <div class="icon-button-403"><img class="apply-52" :src="apply" alt="Apply" /></div
              ></a>
            </div>
            <pagination
              :iconButton21Props="paginationProps.iconButton21Props"
              :iconButton22Props="paginationProps.iconButton22Props"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import LeftNavigationMenu10 from "./LeftNavigationMenu10";
import Language from "./Language";
import UserProfile from "./UserProfile";
import xButton19 from "./xButton19";
import IconButton from "./IconButton";
import Buttons5 from "./Buttons5";
import Table11 from "./Table11";
import Dropdown172 from "./Dropdown172";
import Pagination from "./Pagination";
export default {
  name: "Products",
  components: {
    LeftNavigationMenu10,
    Language,
    UserProfile,
    xButton19,
    IconButton,
    Buttons5,
    Table11,
    Dropdown172,
    Pagination,
  },
  props: [
    "line1",
    "support",
    "line2",
    "notification",
    "line3",
    "line4",
    "spanText",
    "search",
    "inputType",
    "inputPlaceholder",
    "topBorder",
    "apply",
    "leftNavigationMenu10Props",
    "languageProps",
    "userProfileProps",
    "iconButtonProps",
    "buttons5Props",
    "table11Props",
    "paginationProps",
  ],
};
</script>

<style>
.products-133 {
  align-items: flex-start;
  background-color: var(--concrete);
  border: 1px none;
  display: flex;
  height: 967px;
  position: relative;
  width: 1440px;
}

.flex-col-289 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 967px;
  width: 1216px;
}

.top-navigation-7 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  height: 64px;
  padding: 0 32px;
  position: relative;
  width: 1216px;
}

.line-227 {
  height: 32px;
  margin-left: 795px;
  width: 1px;
}

.link-2 {
  cursor: pointer;
  height: 20px;
  margin-left: 15px;
  transition: all 0.15s ease;
  width: 20px;
}

.link-2:hover,
.icon-button-403:hover {
  transform: translate(0, -5px);
}

.line-226 {
  height: 32px;
  margin-left: 16px;
  width: 1px;
}

.flex-row-339 {
  align-items: center;
  display: flex;
  gap: 20px;
  height: 775px;
  margin-top: 31px;
  min-width: 1184px;
}

.flex-col-290 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 775px;
  position: relative;
  width: 1152px;
}

.flex-row-340 {
  align-items: flex-start;
  display: flex;
  gap: 768px;
  height: 40px;
  min-width: 1152px;
  position: relative;
}

.page-header-123 {
  letter-spacing: 0;
  line-height: 40px;
  min-width: 282px;
  white-space: nowrap;
}

.actions-76 {
  align-items: flex-start;
  display: flex;
  gap: 519px;
  margin-top: 41px;
  min-width: 1152px;
  position: relative;
}

.search-68 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 336px;
  position: relative;
}

.input-211 {
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

.search-69 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.input-text-314 {
  background-color: transparent;
  border: 0;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  padding: 0;
  width: 236px;
}

.input-text-314::placeholder {
  color: #8a8aa899;
}

.scroll-bar-49 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 209px;
  width: 12px;
}

.bottom-section-112 {
  align-items: center;
  background-color: var(--whisper);
  display: flex;
  flex-direction: column;
  gap: 27px;
  height: 96px;
  margin-top: 1px;
  width: 1216px;
}

.top-border-124 {
  height: 1px;
  width: 1216px;
}

.tion-container-41 {
  align-items: flex-start;
  display: flex;
  gap: 608px;
  min-width: 1152px;
  position: relative;
}

.actions-77 {
  align-items: flex-start;
  display: flex;
  gap: 8px;
  min-width: 208px;
  position: relative;
}

.icon-button-403 {
  align-items: center;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 40px;
  min-width: 40px;
  padding: 0 10px;
  transition: all 0.15s ease;
}

.apply-52 {
  height: 20px;
  width: 20px;
}
</style>
