<template>
  <div :class="[`tab-51`, className || ``]">
    <tab-menu4222 :className="tabMenu4Props.className" />
    <div class="tab-menu-158">
      <div class="flex-row-199">
        <img
          class="note-7"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/note-2@2x.png"
          alt="Note"
        />
        <div class="label-448 poppins-medium-caribbean-green-14px">
          <span class="span9q603 poppins-medium-caribbean-green-14px">Notes</span>
        </div>
      </div>
      <div class="rectangle-6502-67"></div>
    </div>
    <tab-menu222
      :general="tabMenu2Props.general"
      :spanText="tabMenu2Props.spanText"
      :className="tabMenu2Props.className"
    />
  </div>
</template>

<script>
import TabMenu4222 from "./TabMenu4222";
import TabMenu222 from "./TabMenu222";
export default {
  name: "Tab222",
  components: {
    TabMenu4222,
    TabMenu222,
  },
  props: ["className", "tabMenu4Props", "tabMenu2Props"],
};
</script>

<style>
.tab-51 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  height: 40px;
  margin-left: 32px;
  margin-top: 32px;
  min-width: 384px;
  position: relative;
}

.tab-menu-158 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 128px;
}

.flex-row-199 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-top: 9px;
  min-width: 65px;
}

.note-7 {
  height: 18px;
  width: 18px;
}

.label-448 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 41px;
  white-space: nowrap;
}

.rectangle-6502-67 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 128px;
}

.tab-51.tab-52 {
  align-self: unset;
  left: 256px;
  margin-left: unset;
  margin-top: unset;
  position: absolute;
  top: 168px;
}
</style>
