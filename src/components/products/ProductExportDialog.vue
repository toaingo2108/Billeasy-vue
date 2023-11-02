<template>
  <v-dialog v-model="props.dialog" width="592" persistent>
    <v-card class="rounded-xl" color="#F2F2F7">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        Export
      </v-card-title>
      <v-card-text class="d-flex flex-row pb-1 ps-4">
        <div style="width: 50%">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Fields to include in export
          </span>
          <div class="d-flex flex-row align-center mt-1 hx-36">
            <app-checkbox v-model="productNr" class="me-2 ms-3" />
            <span class="font-14 app-regular-font dark-font">
              Product nr.
            </span>
          </div>
          <div class="d-flex flex-row align-center hx-36">
            <app-checkbox v-model="name" class="me-2 ms-3" />
            <span class="font-14 app-regular-font dark-font"> Name </span>
          </div>
          <div class="d-flex flex-row align-center hx-36">
            <app-checkbox v-model="sku" class="me-2 ms-3" />
            <span class="font-14 app-regular-font dark-font"> SKU </span>
          </div>
          <div class="d-flex flex-row align-center hx-36">
            <app-checkbox v-model="defaultPrice" class="me-2 ms-3" />
            <span class="font-14 app-regular-font dark-font">
              Default Price
            </span>
          </div>
          <div class="d-flex flex-row align-center hx-36">
            <app-checkbox v-model="quantityInStock" class="me-2 ms-3" />
            <span class="font-14 app-regular-font dark-font">
              Quantity in Stock
            </span>
          </div>
          <div class="d-flex flex-row align-center hx-36">
            <app-checkbox v-model="unit" class="me-2 ms-3" />
            <span class="font-14 app-regular-font dark-font"> Unit </span>
          </div>
          <div class="d-flex flex-row align-center hx-36">
            <app-checkbox v-model="ean" class="me-2 ms-3" />
            <span class="font-14 app-regular-font dark-font"> EAN </span>
          </div>
          <div class="d-flex flex-row align-center hx-36">
            <app-checkbox v-model="vatRate" class="me-2 ms-3" />
            <span class="font-14 app-regular-font dark-font"> VAT Rate </span>
          </div>
        </div>
        <div style="width: 50%">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Sort export on
          </span>
          <app-radio-group
            class="mt-6"
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

const productNr = ref(false);
const name = ref(false);
const sku = ref(false);
const defaultPrice = ref(false);
const quantityInStock = ref(false);
const unit = ref(false);
const ean = ref(false);
const vatRate = ref(false);
</script>

<style scoped>
div :deep(.v-radio) {
  min-height: 36px;
  height: 36px;
}
div :deep(.v-label) {
  opacity: 1;
}
</style>
