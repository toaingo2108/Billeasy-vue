<template>
  <div class="frame-2548-1">
    <div class="flex-row-4">
      <div class="flex-col-8">
        <div class="header-9">
          <frame2443 :src="frame2443Props.src" />
          <div class="title-14 poppins-semi-bold-ebony-20px">
            <span class="poppins-semi-bold-ebony-20px">Reminder Flows</span>
          </div>
        </div>
        <p class="input-text-12 poppins-normal-comet-14px">
          <span class="poppins-normal-comet-14px"
            >Here you can create the flow of what’s to happen when a customer does not pay an invoice on time.</span
          >
        </p>
      </div>
      <div class="button-64">
        <img
          class="add-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/64c173bb4cff3f834fd24b7c/releases/64c1779edd964e9f6ef82ad0/img/add-13@2x.png"
          alt="Add"
        />
        <div class="text-76 poppins-medium-white-14px">
          <span class="poppins-medium-white-14px">Add Reminder Flow</span>
        </div>
      </div>
    </div>
    <div class="table">
      <x-header />
      <div class="table-row">
        <row-settings-reminder-flows
          :spanText1="rowSettingsReminderFlows1Props.spanText1"
          :spanText2="rowSettingsReminderFlows1Props.spanText2"
          :dropdown32Props="rowSettingsReminderFlows1Props.dropdown32Props"
          :statusProps="rowSettingsReminderFlows1Props.statusProps"
        />
        <row-settings-reminder-flows
          :spanText1="rowSettingsReminderFlows2Props.spanText1"
          :spanText2="rowSettingsReminderFlows2Props.spanText2"
          :dropdown32Props="rowSettingsReminderFlows2Props.dropdown32Props"
          :statusProps="rowSettingsReminderFlows2Props.statusProps"
        />
        <row-settings-reminder-flows
          :spanText1="rowSettingsReminderFlows3Props.spanText1"
          :spanText2="rowSettingsReminderFlows3Props.spanText2"
          :dropdown32Props="rowSettingsReminderFlows3Props.dropdown32Props"
          :statusProps="rowSettingsReminderFlows3Props.statusProps"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Frame2443 from "./Frame2443";
import xHeader from "./xHeader";
import RowSettingsReminderFlows from "./RowSettingsReminderFlows";
export default {
  name: "Frame2548",
  components: {
    Frame2443,
    xHeader,
    RowSettingsReminderFlows,
  },
  props: [
    "frame2443Props",
    "rowSettingsReminderFlows1Props",
    "rowSettingsReminderFlows2Props",
    "rowSettingsReminderFlows3Props",
  ],
};
</script>

<style>
.frame-2548-1,
.frame-2548-2 {
  align-items: center;
  background-color: var(--white);
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  gap: 49px;
  height: 832px;
  left: 480px;
  overflow: hidden;
  position: absolute;
  top: 96px;
  width: 928px;
}

.flex-row-4,
.flex-row-5 {
  align-items: flex-start;
  display: flex;
  gap: 251px;
  height: 91px;
  margin-top: 24px;
  min-width: 864px;
}

.flex-col-8,
.flex-col-9 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-height: 91px;
  width: 425px;
}

.header-9,
.header-10 {
  align-items: flex-start;
  display: flex;
  gap: 12px;
  height: 28px;
  min-width: 201px;
  position: relative;
}

.title-14,
.title-15 {
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  white-space: nowrap;
}

.input-text-12,
.input-text-13 {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 48px;
  width: 425px;
}

.button-64,
.button-65 {
  align-items: flex-start;
  background-color: var(--caribbean-green);
  border-radius: 10px;
  display: flex;
  gap: 8px;
  height: 40px;
  margin-top: 8px;
  min-width: 188px;
  padding: 8.5px 12px;
}

.add-3,
.add-4 {
  align-self: center;
  height: 20px;
  width: 20px;
}

.text-76,
.text-77 {
  letter-spacing: 0;
  line-height: normal;
  min-height: 21px;
  min-width: 136px;
  text-align: center;
}

.table,
.table-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 668px;
  position: relative;
  width: 864px;
}

.table-row,
.table-row-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 152px;
  position: relative;
  width: 864px;
}
</style>
