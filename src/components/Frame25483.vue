<template>
  <div class="frame-2548-13">
    <div class="flex-col-28">
      <header18
        :spanText="header18Props.spanText"
        :className="header18Props.className"
        :frame2443Props="header18Props.frame2443Props"
      />
      <div class="tab-3">
        <div class="label-114 poppins-medium-manatee-14px">
          <span class="poppins-medium-manatee-14px">Package</span>
        </div>
        <div class="label-115 poppins-medium-manatee-14px">
          <span class="poppins-medium-manatee-14px">Payments</span>
        </div>
        <tab-menu11 :className="tabMenu11Props.className" />
      </div>
      <img
        class="line-701-10"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22d61f5c226309e8379e1/img/line-701-4@2x.png"
        alt="Line 701"
      />
      <div class="frame-2661-5">
        <div class="frame-container-1">
          <frame2659 />
          <div class="frame-2660-1">
            <div class="activated-1 poppins-normal-comet-14px">
              <span class="poppins-normal-comet-14px">Activated</span>
            </div>
          </div>
          <frame2661 :children="frame2661Props.children" :className="frame2661Props.className" />
        </div>
      </div>
      <div class="frame-2669-1">
        <frame2666
          :className="frame26661Props.className"
          :frame26641Props="frame26661Props.frame26641Props"
          :frame26642Props="frame26661Props.frame26642Props"
        />
        <frame2666
          :className="frame26662Props.className"
          :frame26641Props="frame26662Props.frame26641Props"
          :frame26642Props="frame26662Props.frame26642Props"
        />
        <frame2666
          :className="frame26663Props.className"
          :frame26641Props="frame26663Props.frame26641Props"
          :frame26642Props="frame26663Props.frame26642Props"
        />
      </div>
    </div>
    <div class="scroll-bar-10"></div>
  </div>
</template>

<script>
import Header18 from "./Header18";
import TabMenu11 from "./TabMenu11";
import Frame2659 from "./Frame2659";
import Frame2661 from "./Frame2661";
import Frame2666 from "./Frame2666";
export default {
  name: "Frame25483",
  components: {
    Header18,
    TabMenu11,
    Frame2659,
    Frame2661,
    Frame2666,
  },
  props: ["header18Props", "tabMenu11Props", "frame2661Props", "frame26661Props", "frame26662Props", "frame26663Props"],
};
</script>

<style>
.frame-2548-13,
.frame-2548-14 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  gap: 20px;
  height: 832px;
  left: 480px;
  overflow: hidden;
  position: absolute;
  top: 96px;
  width: 928px;
}

.flex-col-28,
.flex-col-29 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  margin-bottom: -408px;
  margin-left: 32px;
  min-height: 1216px;
  position: relative;
  width: 864px;
}

.tab-3,
.tab-4 {
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: flex-end;
  margin-top: 40px;
  min-width: 388px;
  position: relative;
}

.label-114,
.label-116 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  min-width: 62px;
  white-space: nowrap;
}

.label-115,
.label-117 {
  letter-spacing: 0;
  line-height: 20px;
  margin-bottom: 2px;
  margin-left: 63px;
  min-width: 71px;
  white-space: nowrap;
}

.line-701-10,
.line-701-11 {
  height: 1px;
  width: 864px;
}

.frame-2661-5,
.frame-2661-6 {
  align-items: flex-start;
  border-radius: 10px;
  display: flex;
  margin-top: 31px;
  overflow: hidden;
  width: 275px;
}

.frame-container-1,
.frame-container-2 {
  height: 40px;
  position: relative;
  width: 275px;
}

.frame-2660-1,
.frame-2660-2 {
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  height: 40px;
  left: 49px;
  min-width: 100px;
  padding: 8.5px 16px;
  position: absolute;
  top: 0;
}

.activated-1,
.activated-2 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
}

.frame-2669-1,
.frame-2669-2 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;
  min-height: 996px;
  position: relative;
  width: 864px;
}

.scroll-bar-10,
.scroll-bar-11 {
  background-color: var(--cadet-blue);
  border-radius: 20px 0px 0px 20px;
  height: 136px;
  margin-bottom: 208px;
  width: 12px;
}
</style>
