<template>
  <v-menu activator="parent" :close-on-content-click="false">
    <v-card class="rounded-xl pa-2" width="400">
      <v-card-text class="font-16 dark-font app-semibold-font">
        Call Jimmy regarding project
      </v-card-text>
      <v-card-text class="d-flex flex-row justify-between pb-0">
        <span class="font-14 app-medium-font dark-font">Person</span>
        <span class="font-13 app-regular-font shade-font">Elen Doe</span>
      </v-card-text>
      <v-card-text class="d-flex flex-row justify-between pb-0 pt-2">
        <span class="font-14 app-medium-font dark-font">Customer</span>
        <span class="font-13 app-regular-font shade-font">John Benver</span>
      </v-card-text>
      <v-card-text class="d-flex flex-row justify-between pb-0 pt-2">
        <span class="font-14 app-medium-font dark-font">Invoice</span>
        <span class="font-13 app-regular-font shade-font">1202933</span>
      </v-card-text>
      <v-card-text class="d-flex flex-row justify-between pb-0 pt-2">
        <span class="font-14 app-medium-font dark-font">Subscription</span>
        <span class="font-13 app-regular-font shade-font">Premium</span>
      </v-card-text>
      <v-card-text class="d-flex flex-row justify-between pb-0 pt-2">
        <span class="font-14 app-medium-font dark-font">Due Date</span>
        <span class="font-13 app-regular-font shade-font">2023/05/03</span>
      </v-card-text>
      <v-card-text class="d-flex flex-row justify-between pb-0 pt-2">
        <span class="font-14 app-medium-font dark-font">Created on</span>
        <span class="font-13 app-regular-font shade-font">2023/05/03</span>
      </v-card-text>
      <v-card-text class="d-flex flex-row justify-between pt-2">
        <span class="font-14 app-medium-font dark-font">Status</span>
        <span class="font-13 app-semibold-font bright-blue-font">Status</span>
      </v-card-text>
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
