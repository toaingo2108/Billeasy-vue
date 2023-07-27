<template>
  <div class="best-customers">
    <div class="header-154">
      <frame2443 :src="frame2443Props.src" />
      <div class="title-166 poppins-semi-bold-ebony-20px">
        <span class="poppins-semi-bold-ebony-20px">Best Customers</span>
      </div>
      <img
        class="info-13"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/info-14@2x.png"
        alt="Info"
      />
    </div>
    <div class="flex-row-314">
      <div class="flex-col-269 poppins-normal-ebony-13px">
        <div class="flex-col-item-3"><span class="poppins-normal-ebony-13px">Jane Doe</span></div>
        <div class="flex-col-item-3"><span class="poppins-normal-ebony-13px">Jimmy Shoo</span></div>
        <div class="flex-col-item-3"><span class="poppins-normal-ebony-13px">Zara Smith</span></div>
      </div>
      <div class="overlap-group1-17">
        <img
          class="line-672-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/line-672-6@2x.png"
          alt="Line 672"
        />
        <img
          class="line-673-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/line-672-6@2x.png"
          alt="Line 673"
        />
        <img
          class="line-674-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/line-672-6@2x.png"
          alt="Line 674"
        />
        <img
          class="line-675-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/line-672-6@2x.png"
          alt="Line 675"
        />
        <img
          class="line-676-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/line-672-6@2x.png"
          alt="Line 676"
        />
        <div class="rectangle-6499-4"></div>
        <div class="rectangle-6500-3"></div>
        <div class="rectangle-6501-3"></div>
      </div>
      <img
        class="line-677-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/line-672-6@2x.png"
        alt="Line 677"
      />
    </div>
    <div class="title-container-2 poppins-semi-bold-comet-11px">
      <div class="title-167"><span class="poppins-semi-bold-comet-11px">0</span></div>
      <div class="title-168"><span class="poppins-semi-bold-comet-11px">10k</span></div>
      <div class="title-169"><span class="poppins-semi-bold-comet-11px">20k</span></div>
      <div class="title-170"><span class="poppins-semi-bold-comet-11px">30k</span></div>
      <div class="title-164"><span class="poppins-semi-bold-comet-11px">40k</span></div>
      <div class="title-164"><span class="poppins-semi-bold-comet-11px">50k</span></div>
    </div>
  </div>
</template>

<script>
import Frame2443 from "./Frame2443";
export default {
  name: "BestCustomers",
  components: {
    Frame2443,
  },
  props: ["frame2443Props"],
};
</script>

<style>
.best-customers,
.best-customers-1 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 222px;
  left: 736px;
  overflow: hidden;
  padding: 19px 29px;
  position: absolute;
  top: 448px;
  width: 448px;
}

.header-154,
.header-155 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  margin-left: 3px;
  margin-top: 5px;
  min-width: 231px;
  position: relative;
}

.title-166,
.title-171 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  min-width: 161px;
  white-space: nowrap;
}

.info-13,
.info-14 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.flex-row-314,
.flex-row-315 {
  align-items: center;
  display: flex;
  margin-left: 3px;
  margin-top: 28px;
  min-width: 377px;
}

.flex-col-269,
.flex-col-270 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 2px;
  min-height: 92px;
  width: 81px;
}

.flex-col-item-3,
.flex-col-item-4 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
}

.overlap-group1-17,
.overlap-group1-18 {
  height: 100px;
  margin-left: 55px;
  position: relative;
  width: 240px;
}

.line-672-1,
.line-672-2 {
  height: 100px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1px;
}

.line-673-1,
.line-673-2 {
  height: 100px;
  left: 48px;
  position: absolute;
  top: 0;
  width: 1px;
}

.line-674-1,
.line-674-2 {
  height: 100px;
  left: 96px;
  position: absolute;
  top: 0;
  width: 1px;
}

.line-675-1,
.line-675-2 {
  height: 100px;
  left: 144px;
  position: absolute;
  top: 0;
  width: 1px;
}

.line-676-1,
.line-676-2 {
  height: 100px;
  left: 192px;
  position: absolute;
  top: 0;
  width: 1px;
}

.rectangle-6499-4,
.rectangle-6499-5 {
  background-color: var(--green);
  border-radius: 6px;
  height: 20px;
  left: 0;
  position: absolute;
  top: 6px;
  width: 240px;
}

.rectangle-6500-3,
.rectangle-6500-4 {
  background-color: var(--cadet-blue);
  border-radius: 6px;
  height: 20px;
  left: 0;
  position: absolute;
  top: 42px;
  width: 192px;
}

.rectangle-6501-3,
.rectangle-6501-4 {
  background-color: var(--mischka);
  border-radius: 6px;
  height: 20px;
  left: 0;
  position: absolute;
  top: 78px;
  width: 175px;
}

.line-677-1,
.line-677-2 {
  height: 100px;
  width: 1px;
}

.title-container-2,
.title-container-3 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  height: 17px;
  margin-top: 6px;
  min-width: 255px;
}

.title-167,
.title-172 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 17px;
  min-width: 8px;
  text-align: center;
}

.title-168,
.title-173 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 35px;
  min-height: 17px;
  min-width: 18px;
  text-align: center;
}

.title-169,
.title-174 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 29px;
  min-height: 17px;
  min-width: 20px;
  text-align: center;
}

.title-170,
.title-175 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 28px;
  min-height: 17px;
  min-width: 21px;
  text-align: center;
}

.title-164,
.title-165 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 27px;
  min-height: 17px;
  min-width: 21px;
  text-align: center;
}
</style>
