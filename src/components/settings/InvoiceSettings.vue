<template>
  <div class="w-100 h-100 pt-8 d-flex flex-column">
    <v-alert
      class="mb-5 app-regular-font font-14 mx-8"
      icon="mdi-alert-circle-outline"
      text="Here you set default settings for your invoices. These settings will be applied to all invoices automatically, but can be overwritten in each respective invoice and invoice template."
      variant="outlined"
      rounded="xl"
      color="#0D0D1E"
      width="632"
      style="border-color: #8b8ba9; background-color: white"
    />
    <div class="mx-8">
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
                  src="@/assets/svg/settings/invoice.svg"
                />
              </div>
              Invoice Resources
            </v-card-title>
            <v-card-text class="pb-3 pt-8">
              <span class="font-13 app-medium-font dark-font"
                >PDF template, invoice</span
              >
              <v-select
                placeholder="PDF-template, invoice"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['John Doe', 'Percent 2']"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span class="font-13 app-medium-font dark-font"
                >PDF template, Reminders</span
              >
              <v-select
                placeholder="PDF-template, invoice"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['John Doe', 'Percent 2']"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span class="font-13 app-medium-font dark-font"
                >PDF template, Inkasso</span
              >
              <v-select
                placeholder="PDF-template, Inkasso"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['John Doe', 'Percent 2']"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span class="font-13 app-medium-font dark-font">Currency</span>
              <v-select
                placeholder="Currency"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['John Doe', 'Percent 2']"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span class="font-13 app-medium-font dark-font">
                Payment Terms
              </span>
              <v-select
                placeholder="Payment Terms"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['John Doe', 'Percent 2']"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span class="font-13 app-medium-font dark-font">
                Reminder Flow
              </span>
              <v-select
                placeholder="Reminder Flow"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['John Doe', 'Percent 2']"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span class="font-13 app-medium-font dark-font">
                Send Method
              </span>
              <v-select
                placeholder="Send Method"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['John Doe', 'Percent 2']"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span class="font-13 app-medium-font dark-font">
                Price List
              </span>
              <v-select
                placeholder="Price List"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['John Doe', 'Percent 2']"
              />
            </v-card-text>
            <v-card-text class="pt-3 pb-10">
              <span class="font-13 app-medium-font dark-font">
                Payment Methods
              </span>
              <v-select
                placeholder="Payment Methods"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['Swish', 'Bankgiro']"
              />
              <div>
                <v-chip
                  v-for="payment in paymentMethods"
                  :key="payment"
                  closable
                  class="mt-2 me-2"
                  >{{ payment }}</v-chip
                >
              </div>
            </v-card-text>
          </v-card>
          <v-card rounded="xl" class="pa-2 mt-6">
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
              Reminder Settings
            </v-card-title>
            <v-card-text class="pb-3 pt-8">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Text on Reminder Invoice
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
              <v-textarea
                bg-color="white"
                placeholder="Enter text..."
                variant="outlined"
                rounded="lg"
                hide-details
                rows="3"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                Text on Collection Invoice
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
              <v-textarea
                bg-color="white"
                placeholder="Enter text..."
                variant="outlined"
                rounded="lg"
                hide-details
                rows="3"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div>
                  <app-checkbox v-model="useAttorney" class="me-2" />
                  Use attorney to send inkasso
                </div>
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
            </v-card-text>
            <v-card-text class="pt-3 pb-5">
              <span class="font-13 app-medium-font dark-font">Attorney</span>
              <v-select
                placeholder="Attorney"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['John Doe', 'Percent 2']"
              />
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
                  src="@/assets/svg/settings/invoice.svg"
                />
              </div>
              Invoice Info Display
            </v-card-title>
            <v-card-text class="pb-3 pt-8">
              <span class="font-13 app-medium-font dark-font">Rounding</span>
              <v-select
                placeholder="PDF-template, invoice"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['None', 'Percent 2']"
              />
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div>
                  <app-checkbox v-model="showPrices" class="me-2" />
                  Show prices incl. VAT
                </div>
                <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
              </span>
            </v-card-text>
            <v-card-text class="py-3">
              <span class="font-13 app-medium-font dark-font"
                >Invoice Header</span
              >
              <v-text-field
                placeholder="PDF-template, invoice"
                variant="outlined"
                rounded="lg"
                hide-details
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
                bg-color="white"
                placeholder="Enter text..."
                variant="outlined"
                rounded="lg"
                hide-details
                rows="3"
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
                :items="['John Doe', 'Percent 2']"
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
                :items="['John Doe', 'Percent 2']"
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
                :items="['John Doe', 'Percent 2']"
              />
            </v-card-text>
            <v-card-text class="pt-3 pb-5">
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
                :items="['John Doe', 'Percent 2']"
              />
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
                  src="@/assets/svg/settings/invoice.svg"
                />
              </div>
              Fields to Show
              <v-spacer />
              <v-icon color="#8B8BA9" size="20"
                >mdi-help-circle-outline
              </v-icon>
            </v-card-title>
            <v-card-text class="pb-3 pt-8">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div>
                  <app-checkbox v-model="yourReference" class="me-2" />
                  Your reference
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div>
                  <app-checkbox v-model="ourReference" class="me-2" />
                  Our reference
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div>
                  <app-checkbox v-model="orderReference" class="me-2" />
                  Buyers order reference
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div>
                  <app-checkbox v-model="referenceField1" class="me-2" />
                  Reference field 1
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div>
                  <app-checkbox v-model="referenceField2" class="me-2" />
                  Reference field 2
                </div>
              </span>
            </v-card-text>
          </v-card>
          <v-card rounded="xl" class="pa-2 mt-6">
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
              Row Fields to Show
              <v-spacer />
              <v-icon color="#8B8BA9" size="20"
                >mdi-help-circle-outline
              </v-icon>
            </v-card-title>
            <v-card-text class="pb-3 pt-8">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div>
                  <app-checkbox v-model="productNumber" class="me-2" />
                  Product number
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div>
                  <app-checkbox v-model="priceInclVAT" class="me-2" />
                  Price incl. VAT
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div>
                  <app-checkbox v-model="priceExclVAT" class="me-2" />
                  Price excl. VAT
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div>
                  <app-checkbox v-model="unit" class="me-2" />
                  Unit
                </div>
              </span>
            </v-card-text>
            <v-card-text class="py-3">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div>
                  <app-checkbox v-model="vatRate" class="me-2" />
                  VAT rate
                </div>
              </span>
            </v-card-text>
          </v-card>
          <v-card rounded="xl" class="pa-2 mt-6">
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
              Other
            </v-card-title>
            <v-card-text class="pb-3 pt-8">
              <span
                class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
              >
                <div>
                  <app-checkbox v-model="includeOCR" class="me-2" />
                  Include OCR-numbers
                </div>
              </span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-divider class="mt-6" />
    <div class="pa-6 d-flex flex-row justify-end bg-gray">
      <v-btn
        color="#0D0D1E"
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

const newTodoCategoryDialog = ref(false);
const newTodoStatusDialog = ref(false);
const useAttorney = ref(false);
const showPrices = ref(false);
const yourReference = ref(false);
const ourReference = ref(false);
const orderReference = ref(false);
const referenceField1 = ref(false);
const referenceField2 = ref(false);
const productNumber = ref(false);
const priceInclVAT = ref(false);
const priceExclVAT = ref(false);
const unit = ref(false);
const vatRate = ref(false);
const includeOCR = ref(false);

import { useRouter } from "vue-router";

const router = useRouter();

const openNewTodoDialog = function () {
  router.push({ name: "new-customer" });
};

const onTodoStatus = function () {
  newTodoStatusDialog.value = true;
};
const onTodoCategory = function () {
  newTodoCategoryDialog.value = true;
};

const paymentMethods = ["Swish", "Bankgiro"];
</script>
<style scoped>
div :deep(.v-chip__close) {
  color: #8b8ba9;
}
</style>
