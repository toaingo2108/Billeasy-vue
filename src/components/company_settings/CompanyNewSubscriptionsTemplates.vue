<template>
  <div class="w-100 h-100 pt-8 d-flex flex-column">
    <div class="d-flex flex-row align-center">
      <v-btn
        variant="outlined"
        prepend-icon="mdi-chevron-left"
        @click="onBack"
        rounded="lg"
        color="#0D0D1E"
        style="
          border-color: #d1d1e2;
          text-decoration: none;
          height: 32px;
          min-height: 32px;
          max-height: 32px;
        "
        class="font-14 app-medium-font text-none"
      >
        Back
      </v-btn>
      <span class="font-16 dark-font app-semibold-font ms-6"
        >Create Subscription Template</span
      >
    </div>
    <div class="mt-8">
      <v-row>
        <v-col cols="12" md="6">
          <v-card rounded="xl" class="pa-2" elevation="0" color="#F7F7FA">
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
              Template Details
            </v-card-title>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Name
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
              <v-text-field
                placeholder="Name"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Code
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
              <v-text-field
                placeholder="Code"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </v-card-text>
            <v-card-text class="py-3 mb-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Description
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
              <v-textarea
                placeholder="Calendar Date"
                variant="outlined"
                rounded="lg"
                hide-details
                rows="3"
                bg-color="white"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card rounded="xl" class="pa-2" elevation="0" color="#F7F7FA">
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
              Subscription Settings
            </v-card-title>
            <v-card-text class="pb-3 pt-8">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Category
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
              <v-select
                placeholder="Category"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['Category', 'Subscription Template Category']"
                bg-color="white"
              />
            </v-card-text>
            <v-card-text class="pb-3 pt-8">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Billing Cycles
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
              <v-text-field
                placeholder="Billing Cycles"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['Category', 'Subscription Template Category']"
                bg-color="white"
              />
            </v-card-text>
            <v-card-text class="pb-3 pt-8">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Period Interval
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
              <v-text-field
                placeholder="Period Interval"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['Category', 'Subscription Template Category']"
                bg-color="white"
              />
            </v-card-text>
            <v-card-text class="py-3 hx-36">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div class="d-flex flex-row">
                  <app-checkbox
                    v-model="autoUpdateSubscriptions"
                    class="me-3 mt-1"
                  />
                  <span style="width: 255px">
                    Automatically create invoices
                  </span>
                </div>
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
            </v-card-text>
            <v-card-text class="py-3 hx-36">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div class="d-flex flex-row">
                  <app-checkbox v-model="autoSendInvoice" class="me-3 mt-1" />
                  <span style="width: 255px">
                    Automatically send invoices
                  </span>
                </div>
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
            </v-card-text>
            <v-card-text class="py-3 hx-36">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div class="d-flex flex-row">
                  <app-checkbox v-model="autoUpdatePrice" class="me-3 mt-1" />
                  <span style="width: 255px"> Automatic price updates </span>
                </div>
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
            </v-card-text>
            <v-card-text class="py-3 hx-36">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div class="d-flex flex-row">
                  <app-checkbox
                    v-model="autoBillSubscription"
                    class="me-3 mt-1"
                  />
                  <span style="width: 255px">
                    Automatic updates upon template updates
                  </span>
                </div>
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
            </v-card-text>
            <v-card-text class="pb-3 pt-8 mb-2">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Invoice Template
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
              <v-select
                placeholder="Invoice Template"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['Invoice Template', 'Invoice Template 2']"
                bg-color="white"
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
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

const onBack = function () {
  router.push({ name: "company-templates-subscription" });
};
</script>
<style scoped>
div :deep(.v-chip__close) {
  color: #8b8ba9;
}
</style>
