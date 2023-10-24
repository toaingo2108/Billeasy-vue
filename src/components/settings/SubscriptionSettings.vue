<template>
  <div class="w-100 h-100 py-8 d-flex flex-column">
    <v-alert
      class="mb-5 app-regular-font font-14"
      icon="mdi-alert-circle-outline"
      text="Here you set default settings for your subscriptions."
      variant="outlined"
      rounded="xl"
      color="#0D0D1E"
      width="632"
      style="border-color: #8b8ba9; background-color: white"
    />
    <v-row>
      <v-col cols="12" md="4">
        <v-card rounded="xl" class="pa-2">
          <v-card-title
            class="font-20 app-semibold-font dark-font d-flex flex-row align-center"
          >
            <div class="me-2">
              <v-img
                width="28"
                height="28"
                src="@/assets/svg/settings/subscription.svg"
              />
            </div>
            Automatic billing
          </v-card-title>
          <v-card-text class="pb-3 pt-8">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              <div class="d-flex flex-row">
                <app-checkbox
                  v-model="autoBillSubscription"
                  class="me-3 mt-1"
                />
                <span style="width: 246px">
                  Automatically bill active subscription
                </span>
              </div>
              <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
            </span>
          </v-card-text>
          <v-card-text class="py-3">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Billing based on
              <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
            </span>
            <v-select
              placeholder="Billing based on"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['John Doe', 'Percent 2']"
            />
          </v-card-text>
          <v-card-text class="py-3">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Days before period start to bill
              <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
            </span>
            <v-select
              placeholder="Billing based on"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['Method', 'Percent 2']"
            />
          </v-card-text>
          <v-card-text class="py-3">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Calendar date of every month to bill on
              <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
            </span>
            <v-select
              placeholder="Calendar Date"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['Method', 'Percent 2']"
            />
          </v-card-text>
          <v-card-text class="py-3">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Day to bill
              <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
            </span>
            <v-select
              placeholder="Day to bill"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['First weekday', 'Second weekday']"
            />
          </v-card-text>
          <v-card-text class="pb-3 pt-8">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              <div class="d-flex flex-row">
                <app-checkbox v-model="autoSendInvoice" class="me-3 mt-1" />
                <span style="width: 246px">
                  Automatically send created invoices
                </span>
              </div>
              <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
            </span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card rounded="xl" class="pa-2">
          <v-card-title
            class="font-20 app-semibold-font dark-font d-flex flex-row align-center"
          >
            <div class="me-2">
              <v-img
                width="28"
                height="28"
                src="@/assets/svg/settings/subscription.svg"
              />
            </div>
            Subscription Templates
          </v-card-title>
          <v-card-text class="pb-3 pt-8">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Default Subscription Template
              <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
            </span>
            <v-select
              placeholder="Default Subscription Template"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['John Doe', 'Subscription Template']"
            />
          </v-card-text>
          <v-card-text class="py-3">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              <div class="d-flex flex-row">
                <app-checkbox
                  v-model="autoUpdateSubscriptions"
                  class="me-3 mt-1"
                />
                <span style="width: 255px">
                  Automatically update subscriptions in accordance with its
                  subscription template
                </span>
              </div>
              <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
            </span>
          </v-card-text>
          <v-card-text class="py-2 ms-6">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              <div>
                <app-checkbox v-model="invoiceTemplate" class="me-2" />
                Invoice Template
              </div>
            </span>
          </v-card-text>
          <v-card-text class="py-2 ms-6">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              <div>
                <app-checkbox v-model="paymentTerms" class="me-2" />
                Payment Terms
              </div>
            </span>
          </v-card-text>
          <v-card-text class="py-2 ms-6">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              <div>
                <app-checkbox v-model="invoiceHeader" class="me-2" />
                Invoice Header
              </div>
            </span>
          </v-card-text>
          <v-card-text class="py-2 ms-6">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              <div>
                <app-checkbox v-model="invoiceText" class="me-2" />
                Invoice Text
              </div>
            </span>
          </v-card-text>
          <v-card-text class="py-2 ms-6">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              <div>
                <app-checkbox v-model="footerHeader1" class="me-2" />
                Footer Header 1
              </div>
            </span>
          </v-card-text>
          <v-card-text class="py-2 ms-6">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              <div>
                <app-checkbox v-model="footerHeader2" class="me-2" />
                Footer Header 2
              </div>
            </span>
          </v-card-text>
          <v-card-text class="py-2 ms-6">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              <div>
                <app-checkbox v-model="footerValue1" class="me-2" />
                Footer Value 1
              </div>
            </span>
          </v-card-text>
          <v-card-text class="py-2 ms-6 pb-6">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              <div>
                <app-checkbox v-model="footerValue2" class="me-2" />
                Footer Value 2
              </div>
            </span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card rounded="xl" class="pa-2">
          <v-card-title
            class="font-20 app-semibold-font dark-font d-flex flex-row align-center"
          >
            <div class="me-2">
              <v-img
                width="28"
                height="28"
                src="@/assets/svg/settings/subscription.svg"
              />
            </div>
            Other Settings
            <v-spacer />
            <v-icon color="#8B8BA9" size="20">mdi-help-circle-outline </v-icon>
          </v-card-title>
          <v-card-text class="pb-6 pt-8">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              <div>
                <app-checkbox v-model="autoUpdatePrice" class="me-2" />
                Automatically update subscription prices
              </div>
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div class="mt-6 d-flex flex-row justify-end">
      <v-btn
        color="#0D0D1E"
        @click="closeDialog"
        variant="outlined"
        rounded="lg"
        style="
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 5px;
          padding-bottom: 5px;
          border-color: #d1d1e2;
        "
        class="text-none"
        >Cancel</v-btn
      >
      <v-btn
        color="white"
        @click="closeDialog"
        prepend-icon="mdi-check"
        rounded="lg"
        style="
          background: #20c39d !important;
          color: white !important;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 5px;
          padding-bottom: 5px;
        "
        class="text-none ms-2"
        >Save</v-btn
      >
    </div>
    <new-todo-category-dialog
      :dialog="newTodoCategoryDialog"
      @update:dialog="(val) => (newTodoCategoryDialog = val)"
      v-if="newTodoCategoryDialog"
    />
    <new-todo-status-dialog
      :dialog="newTodoStatusDialog"
      @update:dialog="(val) => (newTodoStatusDialog = val)"
      v-if="newTodoStatusDialog"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import NewTodoCategoryDialog from "@/components/todos/NewTodoCategoryDialog.vue";
import NewTodoStatusDialog from "@/components/todos/NewTodoStatusDialog.vue";
import AppCheckbox from "@/components/default/AppCheckbox.vue";

const autoBillSubscription = ref(false);
const autoSendInvoice = ref(false);
const autoUpdateSubscriptions = ref(false);
const invoiceTemplate = ref(false);
const paymentTerms = ref(false);
const invoiceHeader = ref(false);
const invoiceText = ref(false);
const footerHeader1 = ref(false);
const footerHeader2 = ref(false);
const footerValue1 = ref(false);
const footerValue2 = ref(false);
const autoUpdatePrice = ref(false);

import { useRouter } from "vue-router";

const router = useRouter();
</script>
<style scoped>
div :deep(.v-text-field input.v-field__input) {
  min-height: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 12px;
  padding-right: 12px;
}
div :deep(.v-select .v-field__input) {
  min-height: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 12px;
  padding-right: 12px;
}
div :deep(.v-chip__close) {
  color: #8b8ba9;
}
</style>
