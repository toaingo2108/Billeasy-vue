<template>
  <div :class="[`tab-29`, className || ``]">
    <tab-menu422 :className="tabMenu4Props.className" />
    <div class="tab-menu-90">
      <div class="flex-row-139">
        <img
          class="note-2"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/note-2@2x.png"
          alt="Note"
        />
        <div class="label-338 poppins-medium-caribbean-green-14px">
          <span class="span-525 poppins-medium-caribbean-green-14px">Notes</span>
        </div>
      </div>
      <div class="rectangle-6502-39"></div>
    </div>
    <div class="tab-menu-91">
      <img
        class="to-dos-119"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/to-do-s-6@2x.png"
        alt="To-do&#39;s"
      />
      <div class="label-339 poppins-medium-manatee-14px">
        <span class="span-525 poppins-medium-manatee-14px">To-do’s</span>
      </div>
    </div>
  </div>
</template>

<script>
import TabMenu422 from "./TabMenu422";
export default {
  name: "Tab7",
  components: {
    TabMenu422,
  },
  props: ["className", "tabMenu4Props"],
};
</script>

<style>
.tab-29 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 429px;
  position: relative;
}

.tab-menu-90 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 134px;
}

.flex-row-139 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-top: 9px;
  min-width: 65px;
}

.note-2 {
  height: 18px;
  width: 18px;
}

.label-338 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 41px;
  white-space: nowrap;
}

.rectangle-6502-39 {
  background-color: var(--caribbean-green);
  height: 2px;
  margin-left: 0.5px;
  width: 135px;
}

.tab-menu-91 {
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  gap: 6px;
  height: 40px;
  min-width: 134px;
  padding: 9px 27.8px;
  transition: all 0.15s ease;
}

.tab-menu-91:hover {
  transform: translate(0, -5px);
}

.to-dos-119 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.label-339 {
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
}

.tab-29.tab-30 {
  align-self: unset;
  height: 40px;
  left: 256px;
  margin-left: unset;
  margin-top: unset;
  position: absolute;
  top: 168px;
}

.tab-29.tab-30 .tab-menu-91 {
  cursor: unset;
  transition: unset;
}
</style>
