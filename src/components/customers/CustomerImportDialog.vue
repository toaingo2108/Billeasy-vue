<template>
  <v-dialog v-model="props.dialog" width="624" persistent>
    <v-card class="rounded-xl" color="#F2F2F7">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        Import Customers
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
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'Fortnox'"
      >
        <div style="width: 212px">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Customers to Import
          </span>
        </div>
        <div class="flex-grow">
          <app-radio-group
            class="mt-7"
            :items="['All Customers', 'Active Customers']"
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
          <span class="font-14 app-semibold-font dark-font ps-3"> Type * </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="Type"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Type', 'Type1', 'Type2']"
          />
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3">
            First Name *
          </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="First Name"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['First Name']"
          />
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Last Name *
          </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="Last Name"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Last Name']"
          />
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Company Name
          </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="Company Name"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Company Name', 'Company Name2']"
          />
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Personal/Org. Number
          </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="Personal/Org. Number"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['#', '##']"
          />
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Customer Number
          </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="Customer Number"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['#', '##']"
          />
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3">
            VAT Number
          </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="VAT Number"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['VAT Number', '##']"
          />
        </div>
      </v-card-text>
      <v-card-text
        class="d-flex flex-row pb-1 ps-4 align-center"
        v-if="importType == 'File'"
      >
        <div style="width: 222px">
          <span class="font-14 app-semibold-font dark-font ps-3"> Phone </span>
        </div>
        <div style="width: 192px">
          <v-select
            bg-color="white"
            placeholder="Phone"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Phone', '##']"
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
