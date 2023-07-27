<template>
  <div class="sales-10">
    <div class="flex-col-271">
      <div class="flex-row-316">
        <div class="header-156">
          <frame2443 :src="frame2443Props.src" :className="frame2443Props.className" />
          <div class="frame-2445-1">
            <div class="title-178 poppins-semi-bold-ebony-20px">
              <span class="poppins-semi-bold-ebony-20px">Sales</span>
            </div>
            <div class="title-179 poppins-semi-bold-manatee-13px">
              <span class="poppins-semi-bold-manatee-13px">(in SEK)</span>
            </div>
          </div>
          <img
            class="info-15"
            src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c22a456c969ad2067407d8/img/info-14@2x.png"
            alt="Info"
          />
        </div>
        <div class="toggle-action-3">
          <div class="net-1 poppins-medium-cadet-blue-14px">
            <span class="poppins-medium-cadet-blue-14px">Net</span>
          </div>
          <toggle />
          <div class="surname-2 poppins-medium-ebony-14px"><span class="poppins-medium-ebony-14px">Gross</span></div>
        </div>
      </div>
      <div class="frame-2448-1">
        <frame2446 :spanText1="frame24461Props.spanText1" :spanText2="frame24461Props.spanText2" />
        <frame2446 :spanText1="frame24462Props.spanText1" :spanText2="frame24462Props.spanText2" />
        <frame2446 :spanText1="frame24463Props.spanText1" :spanText2="frame24463Props.spanText2" />
        <frame2446 :spanText1="frame24464Props.spanText1" :spanText2="frame24464Props.spanText2" />
      </div>
    </div>
    <div class="flex-row-317">
      <div class="title-container-4 poppins-normal-ebony-12px">
        <div class="title-176"><span class="poppins-normal-ebony-12px">30</span></div>
        <div class="title-176"><span class="poppins-normal-ebony-12px">20</span></div>
        <div class="title-180"><span class="poppins-normal-ebony-12px">10</span></div>
        <div class="title-181"><span class="poppins-normal-ebony-12px">0</span></div>
      </div>
      <div class="flex-col-272">
        <div class="overlap-group-77">
          <img
            class="line-613-24"
            src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/top-border-10@2x.png"
            alt="Line 613"
          />
          <img
            class="line-614-4"
            src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/top-border-10@2x.png"
            alt="Line 614"
          />
          <img
            class="line-615-1"
            src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/top-border-10@2x.png"
            alt="Line 615"
          />
          <div class="frame-2450-1">
            <div class="rectangle-6488-1"></div>
            <div class="rectangle-6489-1"></div>
            <div class="rectangle-6490-1"></div>
            <div class="rectangle-6491-1"></div>
            <div class="rectangle-6492-1"></div>
            <div class="rectangle-6493-1"></div>
            <div class="rectangle-6494-27"></div>
            <div class="rectangle-6495-27"></div>
            <div class="rectangle-6496-3"></div>
            <div class="rectangle-6497-3"></div>
            <div class="rectangle-6498-3"></div>
            <div class="rectangle-6499-6"></div>
          </div>
        </div>
        <img
          class="line-612-4"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/top-border-10@2x.png"
          alt="Line 612"
        />
        <div class="title-182 poppins-semi-bold-comet-11px">
          <span class="poppins-semi-bold-comet-11px">Jul 23</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame2443 from "./Frame2443";
import Toggle from "./Toggle";
import Frame2446 from "./Frame2446";
export default {
  name: "Sales",
  components: {
    Frame2443,
    Toggle,
    Frame2446,
  },
  props: ["frame2443Props", "frame24461Props", "frame24462Props", "frame24463Props", "frame24464Props"],
};
</script>

<style>
.sales-10,
.sales-11 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  height: 368px;
  left: 32px;
  overflow: hidden;
  padding: 19px 0;
  position: absolute;
  top: 548px;
  width: 680px;
}

.flex-col-271,
.flex-col-273 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin-top: 5px;
  min-height: 127px;
  width: 616px;
}

.flex-row-316,
.flex-row-318 {
  align-items: flex-start;
  display: flex;
  gap: 316px;
  min-width: 616px;
}

.header-156,
.header-157 {
  align-items: center;
  display: flex;
  gap: 12px;
  min-width: 183px;
  position: relative;
}

.frame-2445-1,
.frame-2445-2 {
  align-items: flex-start;
  display: flex;
  gap: 6px;
  height: 28px;
  min-width: 113px;
}

.title-178,
.title-183 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  min-width: 55px;
  white-space: nowrap;
}

.title-179,
.title-184 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 20px;
  min-width: 52px;
}

.info-15,
.info-16 {
  height: 18px;
  width: 18px;
}

.toggle-action-3,
.toggle-action-4 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 21px;
  min-width: 117px;
  position: relative;
}

.net-1,
.net-2 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
  min-width: 24px;
}

.surname-2,
.surname-3 {
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  min-height: 21px;
}

.frame-2448-1,
.frame-2448-2 {
  align-items: flex-start;
  display: flex;
  gap: 19px;
  height: 47px;
  min-width: 616px;
  position: relative;
}

.flex-row-317,
.flex-row-319 {
  align-items: center;
  display: flex;
  gap: 8px;
  height: 150px;
  margin-left: 1px;
  min-width: 615px;
}

.title-container-4,
.title-container-5 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 2px;
  min-height: 114px;
  width: 15px;
}

.title-176,
.title-177 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
  min-width: 15px;
  text-align: right;
}

.title-180,
.title-185 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
  min-width: 12px;
  text-align: right;
}

.title-181,
.title-186 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
  min-width: 8px;
  text-align: right;
}

.flex-col-272,
.flex-col-274 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 150px;
  width: 592px;
}

.overlap-group-77,
.overlap-group-78 {
  height: 126px;
  position: relative;
  width: 592px;
}

.line-613-24,
.line-613-25 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 94px;
  width: 592px;
}

.line-614-4,
.line-614-5 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 62px;
  width: 592px;
}

.line-615-1,
.line-615-2 {
  height: 1px;
  left: 0;
  position: absolute;
  top: 30px;
  width: 592px;
}

.frame-2450-1,
.frame-2450-2 {
  align-items: flex-end;
  display: flex;
  gap: 25px;
  height: 126px;
  left: 16px;
  min-width: 560px;
  position: absolute;
  top: 0;
}

.rectangle-6488-1,
.rectangle-6488-2 {
  background-color: var(--mystic);
  border-radius: 6px;
  height: 80px;
  width: 24px;
}

.rectangle-6489-1,
.rectangle-6489-2 {
  background-color: var(--mystic);
  border-radius: 6px;
  height: 98px;
  width: 24px;
}

.rectangle-6490-1,
.rectangle-6490-2 {
  background-color: var(--mischka);
  border-radius: 6px;
  height: 58px;
  width: 24px;
}

.rectangle-6491-1,
.rectangle-6491-2 {
  background-color: var(--mischka);
  border-radius: 6px;
  height: 73px;
  width: 24px;
}

.rectangle-6492-1,
.rectangle-6492-2 {
  background-color: var(--cadet-blue);
  border-radius: 6px;
  height: 38px;
  width: 24px;
}

.rectangle-6493-1,
.rectangle-6493-2 {
  background-color: var(--cadet-blue);
  border-radius: 6px;
  height: 93px;
  width: 24px;
}

.rectangle-6494-27,
.rectangle-6494-28 {
  background-color: var(--green);
  border-radius: 6px;
  height: 126px;
  width: 24px;
}

.rectangle-6495-27,
.rectangle-6495-28 {
  background-color: var(--cadet-blue);
  border-radius: 6px;
  height: 56px;
  width: 24px;
}

.rectangle-6496-3,
.rectangle-6496-4 {
  background-color: var(--cadet-blue);
  border-radius: 6px;
  height: 46px;
  width: 24px;
}

.rectangle-6497-3,
.rectangle-6497-4 {
  background-color: var(--mischka);
  border-radius: 6px;
  height: 68px;
  width: 24px;
}

.rectangle-6498-3,
.rectangle-6498-4 {
  background-color: var(--mischka);
  border-radius: 6px;
  height: 19px;
  width: 24px;
}

.rectangle-6499-6,
.rectangle-6499-7 {
  background-color: var(--mystic);
  border-radius: 6px;
  height: 104px;
  width: 24px;
}

.line-612-4,
.line-612-5 {
  height: 1px;
  width: 592px;
}

.title-182,
.title-187 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 49px;
  margin-top: 6px;
  min-height: 17px;
  min-width: 33px;
  text-align: center;
}
</style>
