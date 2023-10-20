<template>
  <v-dialog v-model="props.dialog" width="480" persistent>
    <v-card class="rounded-xl">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        Register Payment
      </v-card-title>
      <v-card-text class="d-flex flex-column mx-3 pb-1">
        <span class="font-13 app-medium-font dark-font">Payment Date *</span>
        <v-text-field
          placeholder="Payment Date"
          variant="outlined"
          rounded="lg"
          hide-details
        />
      </v-card-text>
      <v-card-text class="d-flex flex-column mx-3 pb-1">
        <span class="font-13 app-medium-font dark-font">Amount (EUR) *</span>
        <v-text-field
          placeholder="Amount"
          variant="outlined"
          rounded="lg"
          hide-details
        />
      </v-card-text>
      <v-card-text class="d-flex flex-column mx-3 pb-1">
        <span class="font-13 app-medium-font dark-font"
          >Currency Conversion (EUR to SEK)</span
        >
        <v-text-field
          placeholder="Currency Conversion"
          variant="outlined"
          rounded="lg"
          hide-details
        />
      </v-card-text>
      <v-card-text class="d-flex flex-column mx-3 pb-1">
        <div class="d-flex flex-row align-center mb-3">
          <span class="font-14 app-semibold-font dark-font" style="width: 182px"
            >Payment History</span
          >
          <v-divider />
        </div>
        <div class="d-flex flex-row mt-2" v-for="n in 3">
          <span class="font-12 app-medium-font dark-font">Date:</span>
          <span class="font-12 app-regular-font shade-font">2023-01-01</span>
          <span class="font-12 app-medium-font dark-font ms-6">Amount:</span>
          <span class="font-12 app-regular-font shade-font">12.25</span>
          <span class="font-12 app-medium-font dark-font ms-6">Remaining:</span>
          <span class="font-12 app-regular-font shade-font">12.25</span>
          <v-spacer />
          <v-icon color="#59597B">mdi-close</v-icon>
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
          prepend-icon="mdi-check"
          rounded="lg"
          style="
            background: #20c39d;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
          "
          class="text-none"
          >Register</v-btn
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
div >>> .v-text-field input.v-field__input {
  min-height: 40px;
  padding: 5px 10px;
}
</style>
