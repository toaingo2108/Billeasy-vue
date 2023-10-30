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
        >Create Invoice Template</span
      >
    </div>
    <div class="mt-8">
      <v-row>
        <v-col cols="12" md="4">
          <v-card rounded="xl" class="pa-2" elevation="0" color="#F7F7FA">
            <v-card-title
              class="font-20 app-semibold-font dark-font d-flex flex-row align-center"
            >
              <div class="me-2">
                <v-img
                  width="28"
                  height="28"
                  src="@/assets/svg/settings/invoice.svg"
                />
              </div>
              Invoice Resources
            </v-card-title>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                PDF Template, Invoices
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
              <v-select
                placeholder="PDF Template, Invoices"
                variant="outlined"
                rounded="lg"
                hide-details
                bg-color="white"
                :items="[
                  'John Doe',
                  'PDF Template, Invoices',
                  'PDF Template, Invoices 2',
                ]"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                PDF Template, Reminders
              </span>
              <v-select
                placeholder="PDF Template, Reminders"
                variant="outlined"
                rounded="lg"
                hide-details
                bg-color="white"
                :items="[
                  'John Doe',
                  'PDF Template, Reminders',
                  'PDF Template, Reminders 2',
                ]"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                PDF Template, Inkasso
              </span>
              <v-select
                placeholder="PDF Template, Inkasso"
                variant="outlined"
                rounded="lg"
                hide-details
                bg-color="white"
                :items="[
                  'John Doe',
                  'PDF Template, Inkasso',
                  'PDF Template, Inkasso 2',
                ]"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Currency
              </span>
              <v-select
                placeholder="Currency"
                variant="outlined"
                rounded="lg"
                hide-details
                bg-color="white"
                :items="['John Doe', 'Currency', 'Currency 2']"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Payment Terms
              </span>
              <v-select
                placeholder="Currency"
                variant="outlined"
                rounded="lg"
                hide-details
                bg-color="white"
                :items="['John Doe', 'Currency', 'Currency 2']"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Reminder Flow
              </span>
              <v-select
                placeholder="Currency"
                variant="outlined"
                rounded="lg"
                hide-details
                bg-color="white"
                :items="['John Doe', 'Reminder', 'Reminder 2']"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Send Method
              </span>
              <v-select
                placeholder="Method"
                variant="outlined"
                rounded="lg"
                hide-details
                bg-color="white"
                :items="['John Doe', 'Method', 'Method 2']"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Price List
              </span>
              <v-select
                placeholder="Price"
                variant="outlined"
                rounded="lg"
                hide-details
                bg-color="white"
                :items="['John Doe', 'Price', 'Price 2']"
              />
            </v-card-text>
            <v-card-text>
              <span class="font-13 app-medium-font dark-font"
                >Payment Methods</span
              >
              <v-select
                placeholder="Enter method..."
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['Swish', 'Bankgiro']"
                bg-color="white"
              />
              <div>
                <v-chip
                  v-for="payment in paymentMethods"
                  :key="payment"
                  closable
                  class="mt-2 me-2 font-12 dark-font app-regular-font"
                  size="small"
                >
                  {{ payment }}
                </v-chip>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
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
              Info Display
            </v-card-title>
            <v-card-text class="pb-3 pt-8">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Rounding
              </span>
              <v-select
                placeholder="Rounding"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['None', 'Rounding']"
                bg-color="white"
              />
            </v-card-text>
            <v-card-text class="py-3 hx-36">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div class="d-flex flex-row align-center">
                  <app-checkbox
                    v-model="autoUpdateSubscriptions"
                    class="me-3 mt-1"
                  />
                  <span style="width: 255px"> Show prices incl. VAT </span>
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3 mt-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Invoice Header
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
              <v-text-field
                placeholder="Invoice Header"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['Category', 'Subscription Template Category']"
                bg-color="white"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Invoice Text
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
              <v-textarea
                placeholder="Invoice Text"
                variant="outlined"
                rounded="lg"
                hide-details
                rows="3"
                bg-color="white"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Footer Header 1
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
              <v-text-field
                placeholder="Footer Header 1"
                variant="outlined"
                rounded="lg"
                hide-details
                bg-color="white"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Footer Header 2
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
              <v-text-field
                placeholder="Footer Header 2"
                variant="outlined"
                rounded="lg"
                hide-details
                bg-color="white"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Footer Value 1
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
              <v-text-field
                placeholder="Footer Value 1"
                variant="outlined"
                rounded="lg"
                hide-details
                bg-color="white"
              />
            </v-card-text>
            <v-card-text class="py-3 mb-6">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Footer Value 2
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
              <v-text-field
                placeholder="Footer Value 2"
                variant="outlined"
                rounded="lg"
                hide-details
                bg-color="white"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
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
              Fields to Show
            </v-card-title>
            <v-card-text class="py-3 hx-36">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div class="d-flex flex-row align-center">
                  <app-checkbox v-model="yourReference" class="me-3" />
                  <span style="width: 255px"> Your reference </span>
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3 hx-36">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div class="d-flex flex-row align-center">
                  <app-checkbox v-model="ourReference" class="me-3" />
                  <span style="width: 255px"> Our reference </span>
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3 hx-36">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div class="d-flex flex-row align-center">
                  <app-checkbox v-model="orderReference" class="me-3" />
                  <span style="width: 255px"> Buyers order reference </span>
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3 hx-36">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div class="d-flex flex-row align-center">
                  <app-checkbox v-model="referenceField1" class="me-3" />
                  <span style="width: 255px"> Reference field 1 </span>
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3 hx-36 mb-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div class="d-flex flex-row align-center">
                  <app-checkbox v-model="referenceField2" class="me-3" />
                  <span style="width: 255px"> Reference field 2 </span>
                </div>
              </span>
            </v-card-text>
          </v-card>
          <v-card rounded="xl" class="pa-2 mt-6" elevation="0" color="#F7F7FA">
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
              Row Fields to Show
            </v-card-title>
            <v-card-text class="py-3 hx-36">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div class="d-flex flex-row align-center">
                  <app-checkbox v-model="productNumber" class="me-3" />
                  <span style="width: 255px"> Product number </span>
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3 hx-36">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div class="d-flex flex-row align-center">
                  <app-checkbox v-model="priceInclVat" class="me-3" />
                  <span style="width: 255px"> Price incl. VAT</span>
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3 hx-36">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div class="d-flex flex-row align-center">
                  <app-checkbox v-model="priceExclVat" class="me-3" />
                  <span style="width: 255px"> Price excl. VAT </span>
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3 hx-36">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div class="d-flex flex-row align-center">
                  <app-checkbox v-model="unit" class="me-3" />
                  <span style="width: 255px"> Unit </span>
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3 hx-36 mb-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div class="d-flex flex-row align-center">
                  <app-checkbox v-model="vatRate" class="me-3" />
                  <span style="width: 255px"> VAT Rate </span>
                </div>
              </span>
            </v-card-text>
          </v-card>
          <v-card rounded="xl" class="pa-2 mt-6" elevation="0" color="#F7F7FA">
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
              Other
            </v-card-title>
            <v-card-text class="py-3 hx-36 mb-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div class="d-flex flex-row align-center">
                  <app-checkbox v-model="includeOcrNumbers" class="me-3" />
                  <span style="width: 255px"> Include OCR-numbers </span>
                </div>
              </span>
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

const autoUpdateSubscriptions = ref(false);
const yourReference = ref(false);
const ourReference = ref(false);
const orderReference = ref(false);
const referenceField1 = ref(false);
const referenceField2 = ref(false);
const productNumber = ref(false);
const priceInclVat = ref(false);
const priceExclVat = ref(false);
const unit = ref(false);
const vatRate = ref(false);
const includeOcrNumbers = ref(false);

import { useRouter } from "vue-router";

const router = useRouter();

const onBack = function () {
  router.push({ name: "company-templates-invoice" });
};

const paymentMethods = ["Swish", "Other method"];
</script>
<style scoped>
div :deep(.v-chip__close) {
  color: #8b8ba9;
}
</style>
