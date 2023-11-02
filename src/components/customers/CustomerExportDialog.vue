<template>
  <v-dialog v-model="props.dialog" width="848" persistent>
    <v-card class="rounded-xl" color="#F2F2F7">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        Export
      </v-card-title>
      <v-card-text class="d-flex flex-row pb-1 ps-4">
        <div style="width: 66.66%">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Fields to include in export
          </span>
          <div class="d-flex flex-row">
            <div class="w-50">
              <div
                class="d-flex flex-row align-center mt-5"
                style="height: 36px"
              >
                <app-checkbox v-model="customerNr" class="me-2 ms-3" />
                <span class="font-14 app-regular-font dark-font">
                  Customer nr.
                </span>
              </div>
              <div class="d-flex flex-row align-center" style="height: 36px">
                <app-checkbox v-model="firstName" class="me-2 ms-3" />
                <span class="font-14 app-regular-font dark-font">
                  First Name
                </span>
              </div>
              <div class="d-flex flex-row align-center" style="height: 36px">
                <app-checkbox v-model="lastName" class="me-2 ms-3" />
                <span class="font-14 app-regular-font dark-font">
                  Last Name
                </span>
              </div>
              <div class="d-flex flex-row align-center" style="height: 36px">
                <app-checkbox v-model="personalNumber" class="me-2 ms-3" />
                <span class="font-14 app-regular-font dark-font">
                  Personal/Org. Number
                </span>
              </div>
              <div class="d-flex flex-row align-center" style="height: 36px">
                <app-checkbox v-model="city" class="me-2 ms-3" />
                <span class="font-14 app-regular-font dark-font"> City </span>
              </div>
              <div class="d-flex flex-row align-center" style="height: 36px">
                <app-checkbox v-model="country" class="me-2 ms-3" />
                <span class="font-14 app-regular-font dark-font">
                  Country
                </span>
              </div>
              <div class="d-flex flex-row align-center" style="height: 36px">
                <app-checkbox v-model="phone" class="me-2 ms-3" />
                <span class="font-14 app-regular-font dark-font"> Phone </span>
              </div>
              <div class="d-flex flex-row align-center" style="height: 36px">
                <app-checkbox v-model="mobile" class="me-2 ms-3" />
                <span class="font-14 app-regular-font dark-font"> Mobile </span>
              </div>
            </div>
            <div class="w-50">
              <div
                class="d-flex flex-row align-center mt-5"
                style="height: 36px"
              >
                <app-checkbox v-model="address" class="me-2 ms-3" />
                <span class="font-14 app-regular-font dark-font">
                  Address
                </span>
              </div>
              <div class="d-flex flex-row align-center" style="height: 36px">
                <app-checkbox v-model="website" class="me-2 ms-3" />
                <span class="font-14 app-regular-font dark-font">
                  Website
                </span>
              </div>
              <div class="d-flex flex-row align-center" style="height: 36px">
                <app-checkbox v-model="vatNumber" class="me-2 ms-3" />
                <span class="font-14 app-regular-font dark-font">
                  VAT Number
                </span>
              </div>
              <div class="d-flex flex-row align-center" style="height: 36px">
                <app-checkbox v-model="companyName" class="me-2 ms-3" />
                <span class="font-14 app-regular-font dark-font">
                  Company Name
                </span>
              </div>
              <div class="d-flex flex-row align-center" style="height: 36px">
                <app-checkbox v-model="type" class="me-2 ms-3" />
                <span class="font-14 app-regular-font dark-font"> Type </span>
              </div>
              <div class="d-flex flex-row align-center" style="height: 36px">
                <app-checkbox v-model="category" class="me-2 ms-3" />
                <span class="font-14 app-regular-font dark-font">
                  Category
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 33.33%">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Sort export on
          </span>
          <app-radio-group
            class="mt-6"
            v-model="radioGroup"
            :items="['Product nr.', 'Name', 'SKU', 'Quantity in Stock']"
          />
        </div>
      </v-card-text>
      <v-divider class="mt-8" />
      <v-card-actions class="py-7 px-8 d-flex flex-row justify-end bg-gray">
        <v-btn
          color="#0D0D1E"
          @click="closeDialog"
          variant="outlined"
          rounded="lg"
          style="
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 7px;
            padding-bottom: 7px;
            border-color: #d1d1e2;
          "
          class="text-none"
          >Cancel</v-btn
        >
        <v-btn
          color="white"
          @click="closeDialog"
          prepend-icon="mdi-download"
          rounded="lg"
          class="text-none"
          style="
            background: #20c39d;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 7px;
            padding-bottom: 7px;
          "
          >Export</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import AppCheckbox from "../default/AppCheckbox.vue";
import AppRadioGroup from "../default/AppRadioGroup.vue";

const props = defineProps({
  dialog: Boolean,
});

const emit = defineEmits();

const closeDialog = () => {
  emit("update:dialog", false);
};

const customerNr = ref(false);
const firstName = ref(false);
const lastName = ref(false);
const personalNumber = ref(false);
const city = ref(false);
const country = ref(false);
const phone = ref(false);
const mobile = ref(false);
const address = ref(false);
const website = ref(false);
const vatNumber = ref(false);
const companyName = ref(false);
const type = ref(false);
const category = ref(false);

const priceDialog = ref(false);

const onAddNewPrice = function () {
  priceDialog.value = true;
};

const radioGroup = ref(0);
</script>

<style scoped>
div :deep(.v-label) {
  opacity: 1;
}
</style>
