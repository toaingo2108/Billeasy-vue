<template>
  <v-dialog v-model="props.dialog" width="848" persistent>
    <v-card class="rounded-xl">
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
              <div class="d-flex flex-row align-center mt-5">
                <v-checkbox color="#20c39d" value="#20c39d" hide-details>
                  <template v-slot:label>
                    <span class="font-14 app-regular-font dark-font">
                      Customer nr.
                    </span>
                  </template>
                </v-checkbox>
              </div>
              <div class="d-flex flex-row align-center">
                <v-checkbox color="#20c39d" value="#20c39d" hide-details>
                  <template v-slot:label>
                    <span class="font-14 app-regular-font dark-font">
                      First Name
                    </span>
                  </template>
                </v-checkbox>
              </div>
              <div class="d-flex flex-row align-center">
                <v-checkbox color="#20c39d" value="#20c39d" hide-details>
                  <template v-slot:label>
                    <span class="font-14 app-regular-font dark-font">
                      Last Name
                    </span>
                  </template>
                </v-checkbox>
              </div>
              <div class="d-flex flex-row align-center">
                <v-checkbox color="#20c39d" value="#20c39d" hide-details>
                  <template v-slot:label>
                    <span class="font-14 app-regular-font dark-font">
                      Personal/Org. Number
                    </span>
                  </template>
                </v-checkbox>
              </div>
              <div class="d-flex flex-row align-center">
                <v-checkbox color="#20c39d" value="#20c39d" hide-details>
                  <template v-slot:label>
                    <span class="font-14 app-regular-font dark-font">
                      City
                    </span>
                  </template>
                </v-checkbox>
              </div>
              <div class="d-flex flex-row align-center">
                <v-checkbox color="#20c39d" value="#20c39d" hide-details>
                  <template v-slot:label>
                    <span class="font-14 app-regular-font dark-font">
                      Country
                    </span>
                  </template>
                </v-checkbox>
              </div>
              <div class="d-flex flex-row align-center">
                <v-checkbox color="#20c39d" value="#20c39d" hide-details>
                  <template v-slot:label>
                    <span class="font-14 app-regular-font dark-font">
                      Phone
                    </span>
                  </template>
                </v-checkbox>
              </div>
              <div class="d-flex flex-row align-center">
                <v-checkbox color="#20c39d" value="#20c39d" hide-details>
                  <template v-slot:label>
                    <span class="font-14 app-regular-font dark-font">
                      Mobile
                    </span>
                  </template>
                </v-checkbox>
              </div>
            </div>
            <div class="w-50">
              <div class="d-flex flex-row align-center mt-5">
                <v-checkbox color="#20c39d" value="#20c39d" hide-details>
                  <template v-slot:label>
                    <span class="font-14 app-regular-font dark-font">
                      Address
                    </span>
                  </template>
                </v-checkbox>
              </div>
              <div class="d-flex flex-row align-center">
                <v-checkbox color="#20c39d" value="#20c39d" hide-details>
                  <template v-slot:label>
                    <span class="font-14 app-regular-font dark-font">
                      Website
                    </span>
                  </template>
                </v-checkbox>
              </div>
              <div class="d-flex flex-row align-center">
                <v-checkbox color="#20c39d" value="#20c39d" hide-details>
                  <template v-slot:label>
                    <span class="font-14 app-regular-font dark-font">
                      VAT Number
                    </span>
                  </template>
                </v-checkbox>
              </div>
              <div class="d-flex flex-row align-center">
                <v-checkbox color="#20c39d" value="#20c39d" hide-details>
                  <template v-slot:label>
                    <span class="font-14 app-regular-font dark-font">
                      Company Name
                    </span>
                  </template>
                </v-checkbox>
              </div>
              <div class="d-flex flex-row align-center">
                <v-checkbox color="#20c39d" value="#20c39d" hide-details>
                  <template v-slot:label>
                    <span class="font-14 app-regular-font dark-font">
                      Type
                    </span>
                  </template>
                </v-checkbox>
              </div>
              <div class="d-flex flex-row align-center">
                <v-checkbox color="#20c39d" value="#20c39d" hide-details>
                  <template v-slot:label>
                    <span class="font-14 app-regular-font dark-font">
                      Category
                    </span>
                  </template>
                </v-checkbox>
              </div>
            </div>
          </div>
        </div>
        <div style="width: 33.33%">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Sort export on
          </span>
          <v-radio-group class="mt-7">
            <div class="d-flex flex-row align-center">
              <v-radio value="one">
                <template v-slot:label>
                  <span class="font-14 app-regular-font dark-font">
                    Product nr.
                  </span>
                </template>
              </v-radio>
            </div>
            <div class="d-flex flex-row align-center mt-4">
              <v-radio value="two">
                <template v-slot:label>
                  <span class="font-14 app-regular-font dark-font"> Name </span>
                </template>
              </v-radio>
            </div>
            <div class="d-flex flex-row align-center mt-4">
              <v-radio value="three">
                <template v-slot:label>
                  <span class="font-14 app-regular-font dark-font"> SKU </span>
                </template>
              </v-radio>
            </div>
            <div class="d-flex flex-row align-center mt-4">
              <v-radio value="four">
                <template v-slot:label>
                  <span class="font-14 app-regular-font dark-font">
                    Quantity in Stock
                  </span>
                </template>
              </v-radio>
            </div>
          </v-radio-group>
        </div>
      </v-card-text>
      <v-divider class="mt-8" />
      <v-card-actions class="py-7 px-8 d-flex flex-row justify-end">
        <v-btn
          color="#0D0D1E"
          @click="closeDialog"
          variant="outlined"
          rounded="lg"
          style="
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
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
            padding-top: 10px;
            padding-bottom: 10px;
          "
          >Export</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits, watchEffect } from "vue";

const props = defineProps({
  dialog: Boolean,
});

const emit = defineEmits();

const closeDialog = () => {
  emit("update:dialog", false);
};

const headers = [
  "PRICE Incl. VAT",
  "PRICE excl. VAT",
  "FROM QUANTITY",
  "PRICELIST",
];

const items = [
  { incl: 1000, excl: 800, quantity: 0, price: "A" },
  { incl: 1000, excl: 800, quantity: 2, price: "B" },
  { incl: 1000, excl: 800, quantity: 0, price: "C" },
];

const priceDialog = ref(false);

const onAddNewPrice = function () {
  priceDialog.value = true;
};
</script>

<style scoped>
.v-text-field input.v-field__input {
  min-height: 40px;
  padding: 5px 10px;
}
.v-label {
  opacity: 1;
}
</style>
