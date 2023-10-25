<template>
  <v-dialog v-model="props.dialog" width="512" persistent>
    <v-card class="rounded-xl" color="#F2F2F7">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        Invite User
      </v-card-title>
      <v-card-text class="d-flex flex-column mx-3 pb-1">
        <span class="font-13 app-medium-font dark-font" style="opacity: 0.5"
          >Email *</span
        >
        <v-text-field
          placeholder="Email"
          variant="outlined"
          rounded="lg"
          hide-details
          disabled
        />
      </v-card-text>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div class="w-50 me-2">
          <span class="font-13 app-medium-font dark-font">First Name *</span>
          <v-text-field
            placeholder="First Name"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div class="w-50 ms-2">
          <span class="font-13 app-medium-font dark-font">Last Name *</span>
          <v-text-field
            placeholder="Last Name"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div class="flex-grow">
          <span class="font-13 app-medium-font dark-font">Role *</span>
          <v-select
            bg-color="white"
            placeholder="Role"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Role 1', 'Role 2']"
          />
        </div>
        <v-btn
          prepend-icon="mdi-plus"
          flat
          variant="text"
          color="#20C39D"
          class="mt-6 ms-2 font-14 app-medium-font text-none"
          style="height: 40px; min-height: 40px; max-height: 40px"
        >
          Add New
        </v-btn>
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
          prepend-icon="mdi-check"
          rounded="lg"
          style="
            background: #20c39d;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 7px;
            padding-bottom: 7px;
          "
          class="text-none"
          >Save</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
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

<style scoped></style>
