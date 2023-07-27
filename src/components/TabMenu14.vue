<template>
  <div :class="[`tab-menu-167`, className || ``]">
    <div class="flex-row-204">
      <img
        class="to-dos-125"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/to-do-s-16@2x.png"
        alt="To-do&#39;s"
      />
      <div class="label-457 poppins-medium-caribbean-green-14px">
        <span class="spanecx6ti poppins-medium-caribbean-green-14px">To-do’s</span>
      </div>
    </div>
    <div class="rectangle-6502-69"></div>
  </div>
</template>

<script>
export default {
  name: "TabMenu14",
  props: ["className"],
};
</script>

<style>
.tab-menu-167 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 128px;
}

.flex-row-204 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-top: 9px;
  min-width: 79px;
}

.to-dos-125 {
  height: 18px;
  width: 18px;
}

.label-457 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 55px;
  white-space: nowrap;
}

.rectangle-6502-69 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 128px;
}

.tab-menu-167.tab-menu-168 .flex-row-204,
.tab-menu-167.tab-menu-169 .flex-row-204 {
  min-width: 80px;
}

.tab-menu-167.tab-menu-168 .label-457,
.tab-menu-167.tab-menu-169 .label-457 {
  min-width: 56px;
}
</style>
