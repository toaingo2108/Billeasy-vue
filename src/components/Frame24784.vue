<template>
  <div class="frame-2478-14">
    <tab-menu24
      :invoice="tabMenu241Props.invoice"
      :spanText="tabMenu241Props.spanText"
      :className="tabMenu241Props.className"
    />
    <tab-menu26 :className="tabMenu26Props.className" />
    <tab-menu24
      :invoice="tabMenu242Props.invoice"
      :spanText="tabMenu242Props.spanText"
      :className="tabMenu242Props.className"
    />
    <div class="tab-menu-199">
      <div class="flex-row-286">
        <img
          class="time-5"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a9b6c969ad2067407da/img/time-3@2x.png"
          alt="Time"
        />
        <div class="label-532 poppins-medium-caribbean-green-14px">
          <span class="poppins-medium-caribbean-green-14px">Time Report</span>
        </div>
      </div>
      <div class="rectangle-6502-76"></div>
    </div>
  </div>
</template>

<script>
import TabMenu24 from "./TabMenu24";
import TabMenu26 from "./TabMenu26";
export default {
  name: "Frame24784",
  components: {
    TabMenu24,
    TabMenu26,
  },
  props: ["tabMenu241Props", "tabMenu26Props", "tabMenu242Props"],
};
</script>

<style>
.frame-2478-14,
.frame-2478-15,
.frame-2478-16 {
  align-items: flex-start;
  align-self: flex-start;
  display: flex;
  height: 40px;
  margin-left: 24px;
  min-width: 480px;
  position: relative;
}

.tab-menu-199,
.tab-menu-200,
.tab-menu-201 {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 9px;
  min-height: 40px;
  width: 120px;
}

.flex-row-286,
.flex-row-287,
.flex-row-288 {
  align-items: flex-end;
  display: flex;
  gap: 6px;
  height: 20px;
  margin-top: 9px;
  min-width: 109px;
}

.time-5,
.time-6,
.time-7 {
  height: 18px;
  width: 18px;
}

.label-532,
.label-533,
.label-534 {
  letter-spacing: 0;
  line-height: 20px;
  min-width: 85px;
  white-space: nowrap;
}

.rectangle-6502-76,
.rectangle-6502-77,
.rectangle-6502-78 {
  background-color: var(--caribbean-green);
  height: 2px;
  width: 120px;
}
</style>
