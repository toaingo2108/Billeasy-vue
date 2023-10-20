<template>
  <v-dialog v-model="props.dialog" width="400" persistent>
    <v-card class="rounded-xl">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        New Customer Category
      </v-card-title>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div class="w-50 me-2">
          <span class="font-13 app-medium-font dark-font">Name *</span>
          <v-text-field
            placeholder="Name"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div class="w-50 ms-2">
          <span class="font-13 app-medium-font dark-font">Color *</span>
          <v-text-field
            placeholder="Color"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div style="width: 336px">
          <span class="font-13 app-medium-font dark-font">Description</span>
          <v-textarea
            placeholder="Add description..."
            variant="outlined"
            rounded="lg"
            hide-details
            rows="3"
          />
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-column mx-3 pb-1">
        <span class="font-13 app-medium-font dark-font"
          >Subscription Template</span
        >
        <v-text-field
          placeholder="Subscription Template"
          variant="outlined"
          rounded="lg"
          hide-details
        />
      </v-card-text>
      <v-card-text class="d-flex flex-column mx-3 pb-1">
        <span class="font-13 app-medium-font dark-font">Invoice Template</span>
        <v-text-field
          placeholder="Invoice Template"
          variant="outlined"
          rounded="lg"
          hide-details
        />
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
          >Save</v-btn
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
</style>
