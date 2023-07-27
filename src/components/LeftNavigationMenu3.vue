<template>
  <div class="left-navigation-menu-8">
    <div class="logo-53"></div>
    <div class="items-34">
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
      <x-menu-item :home="menuItemProps.home" :spanText="menuItemProps.spanText" />
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
    </div>
  </div>
</template>

<script>
import MenuItem22 from "./MenuItem22";
import xMenuItem from "./xMenuItem";
export default {
  name: "LeftNavigationMenu3",
  components: {
    MenuItem22,
    xMenuItem,
  },
  props: [
    "menuItem221Props",
    "menuItem222Props",
    "menuItem223Props",
    "menuItem224Props",
    "menuItem225Props",
    "menuItem226Props",
    "menuItemProps",
    "menuItem227Props",
    "menuItem228Props",
    "menuItem229Props",
  ],
};
</script>

<style>
.left-navigation-menu-8,
.left-navigation-menu-9,
.left-navigation-menu-11,
.left-navigation-menu-12 {
  align-items: center;
  background-color: var(--ebony);
  display: flex;
  flex-direction: column;
  gap: 58px;
  height: 967px;
  padding: 30px 0;
  width: 224px;
}

.logo-53,
.logo-54,
.logo-55,
.logo-56 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/logo-image-10@2x.png);
  background-size: 100% 100%;
  height: 104px;
  width: 120px;
}

.items-34,
.items-35,
.items-36,
.items-37 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 480px;
  position: relative;
  width: 224px;
}
</style>
