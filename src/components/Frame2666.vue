<template>
  <div :class="[`frame-266-3`, className || ``]">
    <frame2664 :className="frame26641Props.className" />
    <div class="frame-2667">
      <div class="chip">
        <div class="input-text-35 poppins-normal-white-12px">
          <span class="span-260 poppins-normal-white-12px">Activated</span>
        </div>
      </div>
      <frame2667 />
      <p class="integrate-billeasy-w poppins-normal-comet-12px">
        <span class="span-260 poppins-normal-comet-12px"
          >Integrate Billeasy wtih Fortnox for automated bookkeeping of your sales and syncing of your customers and
          products between the programs..</span
        >
      </p>
      <p class="input-text-36 poppins-normal-ebony-12px">
        <span class="span-260 poppins-normal-ebony-12px">100 :- excl. VAT / month</span>
      </p>
      <div class="button-106">
        <div class="text-175 poppins-medium-ebony-14px">
          <span class="span-260 poppins-medium-ebony-14px">Inactivate</span>
        </div>
      </div>
    </div>
    <frame2664 :className="frame26642Props.className" />
  </div>
</template>

<script>
import Frame2664 from "./Frame2664";
import Frame2667 from "./Frame2667";
export default {
  name: "Frame2666",
  components: {
    Frame2664,
    Frame2667,
  },
  props: ["className", "frame26641Props", "frame26642Props"],
};
</script>

<style>
.frame-266-3 {
  align-items: flex-start;
  display: flex;
  gap: 30px;
  min-width: 864px;
  position: relative;
}

.frame-2667 {
  align-items: flex-start;
  background-color: var(--whisper);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  height: 312px;
  overflow: hidden;
  padding: 16px 20px;
  position: relative;
  width: 268px;
}

.chip {
  align-items: flex-start;
  background-color: var(--green);
  border-radius: 100px;
  display: flex;
  height: 26px;
  overflow: hidden;
  padding: 3px 8px;
  width: 74px;
}

.input-text-35 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 18px;
}

.integrate-billeasy-w {
  align-self: center;
  letter-spacing: 0;
  line-height: normal;
  margin-top: 15px;
  min-height: 90px;
  width: 220px;
}

.input-text-36 {
  letter-spacing: 0;
  line-height: normal;
  margin-left: 4px;
  margin-top: 16px;
  min-height: 18px;
}

.button-106 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 37px;
  margin-left: 4px;
  margin-top: 22px;
  min-width: 95px;
  padding: 7px 12px;
  transition: all 0.15s ease;
}

.button-106:hover {
  transform: translate(0, -5px);
}

.text-175 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 71px;
  text-align: center;
}

.frame-266-3.frame-266-4 .button-106,
.frame-266-3.frame-266-1-1 .button-106,
.frame-266-3.frame-266-2-1 .button-106,
.frame-266-3.frame-266 .button-106,
.frame-266-3.frame-266-1-2 .button-106,
.frame-266-3.frame-266-1 .button-106,
.frame-266-3.frame-266-2-2 .button-106,
.frame-266-3.frame-266-2 .button-106 {
  cursor: unset;
  transition: unset;
}
</style>
