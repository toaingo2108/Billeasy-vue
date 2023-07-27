<template>
  <div :class="[`tab-menu-202`, className || ``]">
    <img
      class="note-13"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/note-6@2x.png"
      alt="Note"
    />
    <div class="label-535 poppins-medium-manatee-14px">
      <span class="spanau3m8 poppins-medium-manatee-14px">Notes</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabMenu26",
  props: ["className"],
};
</script>

<style>
.tab-menu-202 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 120px;
  padding: 9px 27.5px;
  transition: all 0.15s ease;
}

.tab-menu-202:hover {
  transform: translate(0, -5px);
}

.note-13 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-535 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-menu-202.tab-menu-203,
.tab-menu-202.tab-menu-206 {
  cursor: unset;
  transition: unset;
}
</style>
