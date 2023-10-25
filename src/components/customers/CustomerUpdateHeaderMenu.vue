<template>
  <v-menu activator="parent" :close-on-content-click="false">
    <v-card class="rounded-xl pa-2" width="400" color="#F2F2F7">
      <v-card-text class="d-flex flex-column pb-1 ps-4">
        <div>
          <span class="font-13 app-medium-font dark-font"> Header </span>
        </div>
        <div class="mt-1">
          <v-text-field
            placeholder="Enter Header"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-column pb-1 ps-4">
        <div>
          <span class="font-13 app-medium-font dark-font"> Note </span>
        </div>
        <div class="mt-1">
          <v-textarea
            bg-color="white"
            placeholder="Enter note..."
            variant="outlined"
            rounded="lg"
            hide-details
            rows="3"
          />
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row pb-1 ps-4 justify-between">
        <div>
          <span class="font-14 app-medium-font dark-font"> Created on </span>
        </div>
        <div>
          <span class="font-13 app-regular-font shade-font">
            2023-05-01, 13.20
          </span>
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row pt-1 pb-1 ps-4 justify-between">
        <div>
          <span class="font-14 app-medium-font dark-font">
            Last updated on
          </span>
        </div>
        <div>
          <span class="font-13 app-regular-font shade-font">
            2023-05-01, 13.20
          </span>
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
          prepend-icon="mdi-check"
          rounded="lg"
          style="
            background: #20c39d;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 7px;
            padding-bottom: 7px;
          "
          >Update</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";

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
div :deep(.v-label) {
  opacity: 1;
}
</style>
