<template>
  <div class="row-settings-reminder-flows">
    <div class="input-text-14 poppins-normal-ebony-13px">
      <span class="poppins-normal-ebony-13px">{{ spanText1 }}</span>
    </div>
    <div class="input-text-15 poppins-normal-ebony-13px">
      <span class="poppins-normal-ebony-13px">{{ spanText2 }}</span>
    </div>
    <x-input />
    <div class="input-14">
      <div class="input-text-16 poppins-normal-ebony-14px"><span class="poppins-normal-ebony-14px">8.00</span></div>
    </div>
    <dropdown32 :spanText="dropdown32Props.spanText" />
    <status :src="statusProps.src" />
    <div class="input-text-17 poppins-normal-ebony-13px"><span class="poppins-normal-ebony-13px">3</span></div>
    <div class="icon-button-214"></div>
  </div>
</template>

<script>
import xInput from "./xInput";
import Dropdown32 from "./Dropdown32";
import Status from "./Status";
export default {
  name: "RowSettingsReminderFlows",
  components: {
    xInput,
    Dropdown32,
    Status,
  },
  props: ["spanText1", "spanText2", "dropdown32Props", "statusProps"],
};
</script>

<style>
.row-settings-reminder-flows,
.row-settings-reminder-flows-1 {
  align-items: center;
  display: flex;
  min-width: 864px;
  position: relative;
}

.input-text-14,
.input-text-18 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  min-height: 20px;
  width: 80px;
}

.input-text-15,
.input-text-19 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 15px;
  min-height: 20px;
  width: 56px;
}

.input-14,
.input-15 {
  align-items: flex-start;
  background-color: var(--white);
  border-radius: 10px;
  display: flex;
  height: 40px;
  margin-left: 12px;
  overflow: hidden;
  padding: 7px 12px;
  width: 136px;
}

.input-text-16,
.input-text-20 {
  letter-spacing: 0;
  line-height: 24px;
  width: 112px;
}

.input-text-17,
.input-text-21 {
  letter-spacing: 0;
  line-height: normal;
  margin-bottom: 2px;
  margin-left: 51px;
  min-height: 20px;
  width: 64px;
}

.icon-button-214,
.icon-button-215 {
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/dot-menu-14@2x.png);
  background-size: 100% 100%;
  border-radius: 10px;
  height: 20px;
  margin-left: 33px;
  width: 20px;
}
</style>
