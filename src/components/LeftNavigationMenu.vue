<template>
  <div :class="[`left-navigation-menu`, className || ``]">
    <div class="logo"></div>
    <div class="items">
      <menu-item22 :products="menuItem221Props.products" :spanText="menuItem221Props.spanText" />
      <menu-item22
        :products="menuItem222Props.products"
        :spanText="menuItem222Props.spanText"
        :className="menuItem222Props.className"
      />
      <menu-item22
        :products="menuItem223Props.products"
        :spanText="menuItem223Props.spanText"
        :className="menuItem223Props.className"
      />
      <menu-item22
        :products="menuItem224Props.products"
        :spanText="menuItem224Props.spanText"
        :className="menuItem224Props.className"
      />
      <menu-item22
        :products="menuItem225Props.products"
        :spanText="menuItem225Props.spanText"
        :className="menuItem225Props.className"
      />
      <menu-item22
        :products="menuItem226Props.products"
        :spanText="menuItem226Props.spanText"
        :className="menuItem226Props.className"
      />
      <menu-item22
        :products="menuItem227Props.products"
        :spanText="menuItem227Props.spanText"
        :className="menuItem227Props.className"
      />
      <menu-item22
        :products="menuItem228Props.products"
        :spanText="menuItem228Props.spanText"
        :className="menuItem228Props.className"
      />
      <menu-item22
        :products="menuItem229Props.products"
        :spanText="menuItem229Props.spanText"
        :className="menuItem229Props.className"
      />
      <menu-item22
        :products="menuItem2210Props.products"
        :spanText="menuItem2210Props.spanText"
        :className="menuItem2210Props.className"
      />
    </div>
  </div>
</template>

<script>
import MenuItem22 from "./MenuItem22";
export default {
  name: "LeftNavigationMenu",
  components: {
    MenuItem22,
  },
  props: [
    "className",
    "menuItem221Props",
    "menuItem222Props",
    "menuItem223Props",
    "menuItem224Props",
    "menuItem225Props",
    "menuItem226Props",
    "menuItem227Props",
    "menuItem228Props",
    "menuItem229Props",
    "menuItem2210Props",
  ],
};
</script>

<style>
.left-navigation-menu {
  align-items: center;
  background-color: var(--ebony);
  display: flex;
  flex-direction: column;
  gap: 58px;
  height: 967px;
  left: 0;
  padding: 30px 0;
  position: absolute;
  top: 0;
  width: 224px;
}

.logo {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/logo-image-10@2x.png);
  background-size: 100% 100%;
  height: 104px;
  width: 120px;
}

.items {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 480px;
  position: relative;
  width: 224px;
}

.left-navigation-menu.left-navigation-menu-3,
.left-navigation-menu.left-navigation-menu-6,
.left-navigation-menu.left-navigation-menu-10,
.left-navigation-menu.left-navigation-menu-13,
.left-navigation-menu.left-navigation-menu-14,
.left-navigation-menu.left-navigation-menu-15,
.left-navigation-menu.left-navigation-menu-16,
.left-navigation-menu.left-navigation-menu-17,
.left-navigation-menu.left-navigation-menu-18,
.left-navigation-menu.left-navigation-menu-19,
.left-navigation-menu.left-navigation-menu-20,
.left-navigation-menu.left-navigation-menu-21,
.left-navigation-menu.left-navigation-menu-22,
.left-navigation-menu.left-navigation-menu-23,
.left-navigation-menu.left-navigation-menu-26,
.left-navigation-menu.left-navigation-menu-27,
.left-navigation-menu.left-navigation-menu-28 {
  left: unset;
  position: unset;
  top: unset;
}
</style>
