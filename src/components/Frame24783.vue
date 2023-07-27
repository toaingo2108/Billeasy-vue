<template>
  <div class="frame-2478-11">
    <tab-menu24
      :invoice="tabMenu241Props.invoice"
      :spanText="tabMenu241Props.spanText"
      :className="tabMenu241Props.className"
    />
    <div class="tab-menu-178">
      <div class="flex-row-282">
        <img
          class="note-10"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/note-2@2x.png"
          alt="Note"
        />
        <div class="label-517 poppins-medium-caribbean-green-14px">
          <span class="poppins-medium-caribbean-green-14px">Notes</span>
        </div>
      </div>
      <div class="rectangle-6502-73"></div>
    </div>
    <tab-menu24
      :invoice="tabMenu242Props.invoice"
      :spanText="tabMenu242Props.spanText"
      :className="tabMenu242Props.className"
    />
    <tab-menu25 :className="tabMenu25Props.className" />
  </div>
</template>

<script>
import TabMenu24 from "./TabMenu24";
import TabMenu25 from "./TabMenu25";
export default {
  name: "Frame24783",
  components: {
    TabMenu24,
    TabMenu25,
  },
  props: ["tabMenu241Props", "tabMenu242Props", "tabMenu25Props"],
};
</script>

<style>
.frame-2478-11,
.frame-2478-12,
.frame-2478-13 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  height: 40px;
  margin-left: 24px;
  min-width: 480px;
  position: relative;
}

.tab-menu-178,
.tab-menu-179,
.tab-menu-180 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 120px;
}

.flex-row-282,
.flex-row-283,
.flex-row-284 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-top: 9px;
  min-width: 65px;
}

.note-10,
.note-11,
.note-12 {
  height: 18px;
  width: 18px;
}

.label-517,
.label-518,
.label-519 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 41px;
  white-space: nowrap;
}

.rectangle-6502-73,
.rectangle-6502-74,
.rectangle-6502-75 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 120px;
}
</style>
