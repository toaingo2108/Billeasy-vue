<template>
  <v-card class="rounded-xl me-8 mt-8 responsive-card" elevation="0">
    <v-card-title class="d-flex flex-row w-100">
      <div class="d-flex flex-column flex-grow">
        <div
          class="app-semibold-font font-20 dark-font mt-6 mx-3 d-flex flex-row"
        >
          <div class="me-2">
            <v-img
              width="28"
              height="28"
              src="@/assets/svg/company_settings/company_information.svg"
            />
          </div>
          Reminder Flows
        </div>
        <div
          class="font-14 app-regular-font shade-font ms-3 mt-2"
          style="width: 100px"
        >
          Here you can create the flow of what's to happen when a<br />
          customer does not pay an invoice on time.
        </div>
      </div>
      <div class="me-4 mt-6">
        <v-btn
          prepend-icon="mdi-plus"
          rounded="lg"
          style="
            background: #20c39d !important;
            color: white !important;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 7px;
            padding-bottom: 7px;
          "
          class="text-none app-medium-font"
          :class="mdAndUp ? 'font-14' : 'font-8'"
          @click="onAddNew"
          >Add Reminder Flow</v-btn
        >
      </div>
    </v-card-title>
    <v-card-text class="mt-8 ms-4 mb-15">
      <v-table style="width: 100%; background-color: #0000">
        <thead>
          <tr>
            <th
              class="text-left font-13 app-semibold-font dark-font remove-border-bottom"
              v-for="(header, index) in headers"
              :key="index"
            >
              {{ header.title }}
              <v-icon color="#59597B" v-if="header.title"
                >mdi-unfold-more-horizontal</v-icon
              >
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index" style="height: 36px">
            <td class="remove-border-bottom">
              <span class="font-13 dark-font app-regular-font">{{
                item.name
              }}</span>
            </td>
            <td class="remove-border-bottom">
              <span class="font-13 dark-font app-regular-font">{{
                item.code
              }}</span>
            </td>
            <td style="min-width: 140px" class="remove-border-bottom">
              <v-text-field
                placeholder="Grace Period"
                variant="outlined"
                rounded="lg"
                hide-details
                v-model="item.period"
              />
            </td>
            <td class="remove-border-bottom">
              <v-text-field
                placeholder="Reminder Fee"
                variant="outlined"
                rounded="lg"
                hide-details
                v-model="item.reminder_fee"
              />
            </td>
            <td class="remove-border-bottom">
              <v-select
                placeholder="Final Measure"
                variant="outlined"
                rounded="lg"
                hide-details
                v-model="item.final_measure"
                :items="['Paused Sub', 'Resumed Sub']"
              />
            </td>
            <td class="remove-border-bottom">
              <v-img
                src="@/assets/svg/customers/status_done.svg"
                width="24"
                height="24"
              />
            </td>
            <td class="remove-border-bottom">
              <span class="font-13 dark-font app-regular-font">{{
                item.events
              }}</span>
            </td>
            <td class="remove-border-bottom">
              <div class="d-flex flex-row justify-end">
                <v-btn
                  size="x-small"
                  flat
                  class="me-1"
                  style="
                    width: 24px;
                    height: 24px;
                    min-height: 24px;
                    min-width: 24px;
                    max-height: 24px;
                    min-height: 24px;
                    padding: 0;
                  "
                >
                  <v-img
                    src="@/assets/svg/datatable/dot_menu.svg"
                    width="24"
                    height="24"
                  />
                  <item-menu :on-edit="onEdit" />
                </v-btn>
              </div>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
  <new-reminder-flow-dialog
    :dialog="newDialog"
    @update:dialog="(val) => (newDialog = val)"
  />
  <edit-reminder-flow-dialog
    :dialog="editDialog"
    @update:dialog="(val) => (editDialog = val)"
  />
</template>
<script lang="ts" setup>
import { ref, watch, watchEffect, reactive } from "vue";
import ItemMenu from "./CustomerSubscriptionsPaymentsItemMenu.vue";
import NewReminderFlowDialog from "../customers/NewReminderFlowDialog.vue";
import EditReminderFlowDialog from "../customers/EditReminderFlowDialog.vue";
import { useDisplay } from "vuetify";

const newItem = reactive({
  name: "",
  value: "",
  description: "",
  invoice: false,
  customer: false,
});
const headers = [
  { title: "Name", key: "name" },
  { title: "Code", key: "code" },
  { title: "Grace Period", key: "period" },
  { title: "Reminder Fee", key: "reminder_fee" },
  { title: "Final Measure", key: "final_measure" },
  { title: "Default", key: "default" },
  { title: "# Events", key: "events" },
  { title: "", key: "action" },
];

const items = reactive([
  {
    name: "Standard",
    code: "ST",
    period: 2,
    reminder_fee: "8.00",
    final_measure: "Pause Sub",
    default: true,
    events: 3,
  },
  {
    name: "Light",
    code: "LT",
    period: 2,
    reminder_fee: "8.00",
    final_measure: "Pause Sub",
    default: true,
    events: 3,
  },
  {
    name: "Harsh",
    code: "HS",
    period: 2,
    reminder_fee: "8.00",
    final_measure: "Pause Sub",
    default: true,
    events: 3,
  },
]);

const newDialog = ref(false);
const onAddNew = () => {
  newDialog.value = true;
};

const editDialog = ref(false);
const onEdit = () => {
  editDialog.value = true;
};

const { mdAndUp } = useDisplay();
</script>

<style scoped>
@media (max-width: 810px) {
  .responsive-card {
    width: calc(100% - 250px);
  }
}
@media (max-width: 820px) and (min-width: 811px) {
  .responsive-card {
    width: calc(100% - 240px);
  }
}
@media (max-width: 911px) and (min-width: 821px) {
  .responsive-card {
    width: calc(100% - 200px);
  }
}
@media (max-width: 960px) and (min-width: 911px) {
  .responsive-card {
    width: calc(100% - 146px);
  }
}
@media (max-width: 1000px) and (min-width: 961px) {
  .responsive-card {
    width: calc(100% - 560px);
  }
}
@media (max-width: 1230px) and (min-width: 1001px) {
  .responsive-card {
    width: calc(100% - 360px);
  }
}
@media (max-width: 1420px) and (min-width: 1231px) {
  .responsive-card {
    width: calc(100% - 150px);
  }
}
</style>
