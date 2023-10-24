<template>
  <div class="w-100 h-100 py-8 d-flex flex-column">
    <v-row>
      <v-col cols="12" md="8">
        <div class="d-flex w-100">
          <search-field width="100%" />
          <div class="ml-2">
            <v-btn
              variant="plain"
              width="40"
              height="40"
              class="button-40"
              rounded="lg"
            >
              <v-img
                width="40"
                height="40"
                src="@/assets/svg/products/filter.svg"
              />
            </v-btn>
          </div>
        </div>
        <div class="mt-10">
          <app-data-table
            :headers="headers"
            :items="items"
            items-per-page="15"
            style="margin-bottom: 80px"
          >
            <template v-slot:action>
              <subscription-products-row-menu />
            </template>
          </app-data-table>
          <app-data-table-bottom :length="15" />
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="rounded-xl">
          <v-card-title
            class="app-semibold-font font-20 dark-font mt-3 mx-3 d-flex flex-row align-center"
          >
            <div class="me-2">
              <v-img
                width="28"
                height="28"
                src="@/assets/svg/subscriptions/schedule.svg"
              />
            </div>
            Schedule New Event
          </v-card-title>
          <v-card-text class="d-flex flex-row mx-3 pb-1 mt-6">
            <div class="w-50 me-2">
              <span class="font-13 app-medium-font dark-font"
                >Subscription *</span
              >
              <v-select
                placeholder="Subscription"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['Subscription', 'Subscription2']"
              />
            </div>
            <div class="w-50 ms-2">
              <span class="font-13 app-medium-font dark-font"
                >Event Date *</span
              >
              <v-text-field
                placeholder="Date"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
          </v-card-text>
          <v-card-text class="d-flex flex-column mx-3 pb-1">
            <span class="font-13 app-medium-font dark-font">Event *</span>
            <v-select
              placeholder="Event"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['30', '40', '50']"
            />
          </v-card-text>
          <v-card-text
            class="d-flex flex-column mx-3 pb-1"
            v-if="recurringEvent"
          >
            <span class="font-13 app-medium-font dark-font"
              >Number of Events</span
            >
            <v-text-field
              placeholder="Number of Events"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </v-card-text>
          <v-card-text class="d-flex flex-column mx-3 pb-1">
            <v-checkbox
              color="#20c39d"
              value="#20c39d"
              hide-details
              v-model="recurringEvent"
            >
              <template v-slot:label>
                <span class="font-14 app-regular-font dark-font">
                  Recurring event
                </span>
              </template>
            </v-checkbox>
          </v-card-text>
          <v-card-actions class="py-7 px-8 d-flex flex-row justify-end">
            <v-btn
              color="white"
              @click="saveEvent"
              prepend-icon="mdi-check"
              rounded="lg"
              style="
                background: #20c39d;
                padding-left: 20px;
                padding-right: 20px;
                padding-top: 10px;
                padding-bottom: 10px;
              "
              class="text-none"
              >Save</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <subscription-categories-dialog
      :dialog="subCategoriesDialog"
      @update:dialog="(val) => (subCategoriesDialog = val)"
      v-if="subCategoriesDialog"
    />
    <send-invoice-dialog
      :dialog="sendInvoiceDialog"
      @update:dialog="(val) => (sendInvoiceDialog = val)"
    />
    <register-payment-dialog
      :dialog="registerPaymentDialog"
      @update:dialog="(val) => (registerPaymentDialog = val)"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ItemMenu from "./SubscriptionsItemMenu.vue";
import { useRouter } from "vue-router";
import AppDataTable from "@/components/default/AppDataTable.vue";
import AppDataTableBottom from "@/components/default/AppDataTableBottom.vue";
import SendInvoiceDialog from "@/components/invoices/SendInvoiceDialog.vue";
import RegisterPaymentDialog from "@/components/invoices/RegisterPaymentDialog.vue";
import SearchField from "../default/SearchField.vue";
import SubscriptionCategoriesDialog from "@/components/subscriptions/SubscriptionCategoriesDialog.vue";
import SubscriptionProductsRowMenu from "./SubscriptionProductsRowMenu.vue";

const headers = [
  { title: "Sub nr.", key: "id", style: "bold" },
  { title: "Event", key: "name", style: "bold" },
  { title: "Event Date", key: "event_date" },
  { title: "Completed", key: "completed", style: "status" },
  { title: "Recurring", key: "recurring", style: "status" },
  { title: "#Events", key: "events" },
  { title: "", key: "action" },
];

const items = [
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    event_date: "2023-07-01",
    completed: true,
    recurring: true,
    events: "2/5",
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    event_date: "2023-07-01",
    completed: true,
    recurring: true,
    events: "2/5",
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    event_date: "2023-07-01",
    completed: true,
    recurring: true,
    events: "2/5",
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    event_date: "2023-07-01",
    completed: true,
    recurring: true,
    events: "2/5",
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    event_date: "2023-07-01",
    completed: true,
    recurring: true,
    events: "2/5",
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    event_date: "2023-07-01",
    completed: true,
    recurring: true,
    events: "2/5",
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    event_date: "2023-07-01",
    completed: true,
    recurring: true,
    events: "2/5",
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    event_date: "2023-07-01",
    completed: true,
    recurring: true,
    events: "2/5",
  },
];

const sendInvoiceDialog = ref(false);
const registerPaymentDialog = ref(false);
const subCategoriesDialog = ref(false);
const recurringEvent = ref(false);
const router = useRouter();
const goToNewSubscription = function () {
  router.push({ name: "new-subscription" });
};

const saveEvent = function () {};
const onRegisterPayment = function () {
  registerPaymentDialog.value = true;
};
const onSendInvoice = function () {
  sendInvoiceDialog.value = true;
};
const onSelectedSubscription = function (item: any, index: number) {
  router.push({ name: "subscription-details", query: { id: item.id } });
};
</script>
<style scoped>
div :deep(.v-text-field input.v-field__input) {
  min-height: 40px;
  padding: 7px !important;
  padding-left: 12px !important;
  padding-right: 12px !important;
}
div :deep(.v-select .v-field__input) {
  min-height: 40px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 12px;
  padding-right: 12px;
}
div :deep(.v-label) {
  opacity: 1;
}
</style>
