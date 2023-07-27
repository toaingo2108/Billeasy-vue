<template>
  <div :class="[`statistics-28`, className || ``]">
    <div class="flex-row-266">
      <div class="flex-col-240">
        <div class="header-130">
          <frame2443 :src="frame2443Props.src" />
          <div class="title-131 poppins-semi-bold-ebony-20px">
            <span class="span-809 poppins-semi-bold-ebony-20px">Custom Fields</span>
          </div>
        </div>
        <div class="place-131 poppins-medium-ebony-14px">
          <span class="span-809 poppins-medium-ebony-14px">Name</span>
        </div>
      </div>
      <div class="value-1 poppins-normal-comet-13px"><span class="span-809 poppins-normal-comet-13px">Value</span></div>
      <icon-button32 :src="iconButton32Props.src" :className="iconButton32Props.className" />
    </div>
    <img
      class="line-613-5"
      src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/top-border-14@2x.png"
      alt="Line 613"
    />
    <div class="flex-row-267">
      <div class="regnr-1 poppins-medium-ebony-14px">
        <span class="span-809 poppins-medium-ebony-14px">Reg.nr.</span>
      </div>
      <div class="number-92 poppins-normal-comet-13px"><span class="span-809 poppins-normal-comet-13px">10</span></div>
      <div class="icon-button-386"></div>
    </div>
    <div class="flex-row-258">
      <div class="regnr-1 poppins-medium-ebony-14px">
        <span class="span-809 poppins-medium-ebony-14px">Reg.nr.</span>
      </div>
      <div class="number-92 poppins-normal-comet-13px"><span class="span-809 poppins-normal-comet-13px">10</span></div>
      <div class="icon-button-386"></div>
    </div>
    <div class="flex-row-258">
      <div class="regnr-1 poppins-medium-ebony-14px">
        <span class="span-809 poppins-medium-ebony-14px">Reg.nr.</span>
      </div>
      <div class="number-92 poppins-normal-comet-13px"><span class="span-809 poppins-normal-comet-13px">10</span></div>
      <div class="icon-button-386"></div>
    </div>
    <div class="flex-row-258">
      <div class="regnr-1 poppins-medium-ebony-14px">
        <span class="span-809 poppins-medium-ebony-14px">Reg.nr.</span>
      </div>
      <div class="number-92 poppins-normal-comet-13px"><span class="span-809 poppins-normal-comet-13px">10</span></div>
      <div class="icon-button-386"></div>
    </div>
    <div class="flex-row-258">
      <div class="regnr-1 poppins-medium-ebony-14px">
        <span class="span-809 poppins-medium-ebony-14px">Reg.nr.</span>
      </div>
      <div class="number-92 poppins-normal-comet-13px"><span class="span-809 poppins-normal-comet-13px">10</span></div>
      <div class="icon-button-386"></div>
    </div>
  </div>
</template>

<script>
import Frame2443 from "./Frame2443";
import IconButton32 from "./IconButton32";
export default {
  name: "Statistics3",
  components: {
    Frame2443,
    IconButton32,
  },
  props: ["className", "frame2443Props", "iconButton32Props"],
};
</script>

<style>
.statistics-28 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  height: 320px;
  margin-top: 24px;
  overflow: hidden;
  padding: 22px 0;
  width: 480px;
}

.flex-row-266 {
  align-items: flex-end;
  display: flex;
  height: 82px;
  min-width: 416px;
  position: relative;
}

.flex-col-240 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 31px;
  min-height: 80px;
  width: 185px;
}

.header-130 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  min-width: 185px;
  position: relative;
}

.title-131 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.place-131 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
}

.value-1 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 1px;
  margin-left: 26px;
  min-height: 20px;
  min-width: 38px;
}

.line-613-5 {
  height: 1px;
  margin-top: 13px;
  width: 416px;
}

.flex-row-267 {
  align-items: flex-start;
  display: flex;
  height: 22px;
  margin-top: 10px;
  min-width: 416px;
}

.regnr-1 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 49px;
}

.number-92 {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 0.5px;
  margin-left: 162px;
  min-height: 20px;
  min-width: 13px;
}

.icon-button-386 {
  align-self: flex-end;
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/dot-menu-14@2x.png);
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 172px;
  width: 20px;
}

.flex-row-258 {
  align-items: flex-start;
  display: flex;
  height: 22px;
  margin-top: 12px;
  min-width: 416px;
}

.statistics-28.statistics-30,
.statistics-28.statistics-34,
.statistics-28.statistics-35 {
  margin-right: 448px;
}
</style>
