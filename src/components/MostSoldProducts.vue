<template>
  <div class="most-sold-products">
    <div class="header-158">
      <frame2443 :src="frame2443Props.src" />
      <div class="title-190 poppins-semi-bold-ebony-20px">
        <span class="poppins-semi-bold-ebony-20px">Most Sold Products</span>
      </div>
      <img
        class="info-17"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/info-14@2x.png"
        alt="Info"
      />
    </div>
    <div class="flex-row-320">
      <div class="flex-col-275 poppins-normal-ebony-13px">
        <div class="flex-col-item-5"><span class="poppins-normal-ebony-13px">Blue t-shirt</span></div>
        <div class="flex-col-item-5"><span class="poppins-normal-ebony-13px">Red Jacket</span></div>
        <div class="flex-col-item-5"><span class="poppins-normal-ebony-13px">TV</span></div>
      </div>
      <div class="overlap-group2-12">
        <img
          class="line-672-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/line-672-6@2x.png"
          alt="Line 672"
        />
        <img
          class="line-673-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/line-672-6@2x.png"
          alt="Line 673"
        />
        <img
          class="line-674-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/line-672-6@2x.png"
          alt="Line 674"
        />
        <img
          class="line-675-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/line-672-6@2x.png"
          alt="Line 675"
        />
        <img
          class="line-676-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/line-672-6@2x.png"
          alt="Line 676"
        />
        <div class="rectangle-6499-8"></div>
        <div class="rectangle-6500-5"></div>
        <div class="rectangle-6501-5"></div>
      </div>
      <img
        class="line-677-3"
        src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/line-672-6@2x.png"
        alt="Line 677"
      />
    </div>
    <div class="title-container-6 poppins-semi-bold-comet-11px">
      <div class="title-191"><span class="poppins-semi-bold-comet-11px">0</span></div>
      <div class="title-192"><span class="poppins-semi-bold-comet-11px">10k</span></div>
      <div class="title-193"><span class="poppins-semi-bold-comet-11px">20k</span></div>
      <div class="title-194"><span class="poppins-semi-bold-comet-11px">30k</span></div>
      <div class="title-188"><span class="poppins-semi-bold-comet-11px">40k</span></div>
      <div class="title-188"><span class="poppins-semi-bold-comet-11px">50k</span></div>
    </div>
  </div>
</template>

<script>
import Frame2443 from "./Frame2443";
export default {
  name: "MostSoldProducts",
  components: {
    Frame2443,
  },
  props: ["frame2443Props"],
};
</script>

<style>
.most-sold-products,
.most-sold-products-1 {
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
  top: 694px;
  width: 448px;
}

.header-158,
.header-159 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  margin-left: 3px;
  margin-top: 5px;
  min-width: 264px;
  position: relative;
}

.title-190,
.title-195 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  min-width: 194px;
  white-space: nowrap;
}

.info-17,
.info-18 {
  align-self: center;
  height: 18px;
  width: 18px;
}

.flex-row-320,
.flex-row-321 {
  align-items: center;
  display: flex;
  margin-left: 3px;
  margin-top: 28px;
  min-width: 377px;
}

.flex-col-275,
.flex-col-276 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 2px;
  min-height: 92px;
  width: 72px;
}

.flex-col-item-5,
.flex-col-item-6 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 20px;
}

.overlap-group2-12,
.overlap-group2-13 {
  height: 100px;
  margin-left: 64px;
  position: relative;
  width: 240px;
}

.line-672-3,
.line-672-4 {
  height: 100px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1px;
}

.line-673-3,
.line-673-4 {
  height: 100px;
  left: 48px;
  position: absolute;
  top: 0;
  width: 1px;
}

.line-674-3,
.line-674-4 {
  height: 100px;
  left: 96px;
  position: absolute;
  top: 0;
  width: 1px;
}

.line-675-3,
.line-675-4 {
  height: 100px;
  left: 144px;
  position: absolute;
  top: 0;
  width: 1px;
}

.line-676-3,
.line-676-4 {
  height: 100px;
  left: 192px;
  position: absolute;
  top: 0;
  width: 1px;
}

.rectangle-6499-8,
.rectangle-6499-9 {
  background-color: var(--green);
  border-radius: 6px;
  height: 20px;
  left: 0;
  position: absolute;
  top: 6px;
  width: 240px;
}

.rectangle-6500-5,
.rectangle-6500-6 {
  background-color: var(--cadet-blue);
  border-radius: 6px;
  height: 20px;
  left: 0;
  position: absolute;
  top: 42px;
  width: 192px;
}

.rectangle-6501-5,
.rectangle-6501-6 {
  background-color: var(--mischka);
  border-radius: 6px;
  height: 20px;
  left: 0;
  position: absolute;
  top: 78px;
  width: 175px;
}

.line-677-3,
.line-677-4 {
  height: 100px;
  width: 1px;
}

.title-container-6,
.title-container-7 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  height: 17px;
  margin-top: 6px;
  min-width: 255px;
}

.title-191,
.title-196 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 17px;
  min-width: 8px;
  text-align: center;
}

.title-192,
.title-197 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 35px;
  min-height: 17px;
  min-width: 18px;
  text-align: center;
}

.title-193,
.title-198 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 29px;
  min-height: 17px;
  min-width: 20px;
  text-align: center;
}

.title-194,
.title-199 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 28px;
  min-height: 17px;
  min-width: 21px;
  text-align: center;
}

.title-188,
.title-189 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 27px;
  min-height: 17px;
  min-width: 21px;
  text-align: center;
}
</style>
