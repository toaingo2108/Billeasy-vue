<template>
  <v-dialog v-model="props.dialog" width="624" persistent>
    <v-card class="rounded-xl" color="#F2F2F7">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        Import Products
      </v-card-title>
      <v-card-text class="d-flex flex-row pb-1 ps-4 align-center">
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Import Source
          </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="Import Source"
            variant="outlined"
            rounded="lg"
            hide-details
            v-model="importType"
            :items="['Fortnox', 'File']"
          />
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center mt-5"
        v-if="importType == 'Fortnox'"
      >
        <div style="width: 212px">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Products to Import
          </span>
        </div>
        <div class="flex-grow mt-2">
          <app-radio-group
            :items="['All Products', 'Active Products']"
            direction="row"
          />
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Upload File (.svg/Excel)
          </span>
        </div>
        <div style="width: 192px">
          <v-btn
            color="#0D0D1E"
            variant="outlined"
            rounded="lg"
            height="40"
            style="
              padding-left: 20px;
              padding-right: 20px;
              padding-top: 10px;
              padding-bottom: 10px;
              border-color: #d1d1e2;
              background-color: white;
            "
            block
            class="text-none file-upload-button"
          >
            Add File
            <v-icon class="ms-2"> mdi-cloud-upload-outline</v-icon>
          </v-btn>
        </div>
        <div class="ms-2">
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
              src="@/assets/svg/customers/upload_done.svg"
            />
          </v-btn>
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row align-center"
        v-if="importType == 'File'"
      >
        <span
          class="font-14 app-semibold-font dark-font"
          style="min-width: 150px"
          >Map Product Data</span
        >
        <v-divider />
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-12 app-semibold-font shade-font ps-3">
            In Billeasy
          </span>
        </div>
        <div
          style="width: 192px"
          class="font-12 app-semibold-font shade-font ps-3"
        >
          From File
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Product nr. *
          </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="Product nr."
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Product nr.', 'Product nr2']"
          />
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3"> Name * </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="Name"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Name', 'Name2']"
          />
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3"> SKU </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="SKU"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['SKU', 'SKU2']"
          />
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Default Price
          </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="Default Price"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Default Price', 'Default Price 2']"
          />
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Quantity In Stock
          </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="Quantity In Stock"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Quantity In Stock', 'Quantity In Stock2']"
          />
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3"> Unit </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="Unit"
            variant="outlined"
            rounded="lg"
            hide-details
            :item="['Unit', 'Unit2']"
          />
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3"> EAN </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="EAN"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['EAN', 'EAN2']"
          />
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3">
            VAT RAte
          </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="VAT Rate"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['VAT Rate', 'VAT Rate 2']"
          />
        </div>
      </v-card-text>
      <v-divider class="mt-5" />
      <v-card-actions class="py-7 px-8 d-flex flex-row justify-end bg-gray">
        <v-btn
          color="#0D0D1E"
          @click="closeDialog"
          variant="outlined"
          rounded="lg"
          class="text-none"
          style="
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 7px;
            padding-bottom: 7px;
            border-color: #d1d1e2;
          "
          >Cancel</v-btn
        >
        <v-btn
          class="text-none"
          color="white"
          @click="closeDialog"
          prepend-icon="mdi-cloud-upload-outline"
          rounded="lg"
          style="
            background: #20c39d;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 7px;
            padding-bottom: 7px;
          "
          >Import</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import AppRadioGroup from "../default/AppRadioGroup.vue";

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
const importType = ref("Fortnox");

const onAddNewPrice = function () {
  priceDialog.value = true;
};
</script>

<style scoped>
div :deep(.v-label) {
  opacity: 1;
}

.file-upload-button .v-btn__content {
  width: 100%;
  justify-content: space-between;
}
</style>
