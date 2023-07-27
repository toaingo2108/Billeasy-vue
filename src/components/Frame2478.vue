<template>
  <div class="frame-2478-4">
    <tab-menu222
      :general="tabMenu21Props.general"
      :spanText="tabMenu21Props.spanText"
      :className="tabMenu21Props.className"
    />
    <tab-menu3222
      :address="tabMenu3Props.address"
      :spanText="tabMenu3Props.spanText"
      :className="tabMenu3Props.className"
    />
    <tab-menu222
      :general="tabMenu22Props.general"
      :spanText="tabMenu22Props.spanText"
      :className="tabMenu22Props.className"
    />
    <tab-menu4222 :className="tabMenu22Props2.className" />
  </div>
</template>

<script>
import TabMenu222 from "./TabMenu222";
import TabMenu3222 from "./TabMenu3222";
import TabMenu4222 from "./TabMenu4222";
export default {
  name: "Frame2478",
  components: {
    TabMenu222,
    TabMenu3222,
    TabMenu4222,
  },
  props: ["tabMenu21Props", "tabMenu3Props", "tabMenu22Props", "tabMenu22Props2"],
};
</script>

<style>
.frame-2478-4,
.frame-2478-5 {
  align-items: flex-start;
  display: flex;
  height: 40px;
  margin-left: 32px;
  margin-top: 24px;
  min-width: 512px;
  position: relative;
}
</style>
