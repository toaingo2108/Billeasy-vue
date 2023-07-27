<template>
  <div :class="[`tab-15`, className || ``]">
    <div class="tab-menu-51">
      <div class="flex-row-63">
        <img
          class="users-123"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22c9d2becfc5db46b9d71/img/users-2@2x.png"
          alt="Users"
        />
        <div class="label-195 poppins-medium-caribbean-green-14px">
          <span class="span-398 poppins-medium-caribbean-green-14px">Users</span>
        </div>
      </div>
      <div class="rectangle-6502-22"></div>
    </div>
    <div class="tab-menu-52">
      <img
        class="key-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22c9d2becfc5db46b9d71/img/key-1@2x.png"
        alt="Key"
      />
      <div class="label-196 poppins-medium-manatee-14px">
        <span class="span-398 poppins-medium-manatee-14px">Roles and Permissions</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab2",
  props: ["className"],
};
</script>

<style>
.tab-15 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  margin-left: 32px;
  margin-top: 33px;
  min-width: 336px;
}

.tab-menu-51 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 112px;
}

.flex-row-63 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-top: 9px;
  min-width: 63px;
}

.users-123 {
  height: 18px;
  width: 18px;
}

.label-195 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 39px;
  white-space: nowrap;
}

.rectangle-6502-22 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 112px;
}

.tab-menu-52 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 224px;
  padding: 9px 21px;
  transition: all 0.15s ease;
}

.tab-menu-52:hover {
  transform: translate(0, -5px);
}

.key-1 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-196 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-15.tab-16,
.tab-15.tab-17 {
  align-self: unset;
  height: 40px;
  left: 256px;
  margin-left: unset;
  margin-top: unset;
  position: absolute;
  top: 168px;
}

.tab-15.tab-16 .tab-menu-52,
.tab-15.tab-17 .tab-menu-52 {
  cursor: unset;
  transition: unset;
}
</style>
