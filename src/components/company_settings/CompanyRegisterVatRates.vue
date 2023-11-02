<template>
  <div>
    <div class="mt-6 d-flex flex-row justify-end">
      <v-btn
        prepend-icon="mdi-plus"
        flat
        variant="text"
        color="white"
        class="ms-3 me-4 font-14 app-medium-font text-none"
        rounded="lg"
        style="background-color: #20c39d"
        @click="onAddNew"
      >
        Add VAT Rate
      </v-btn>
    </div>
    <app-data-table
      :headers="headers"
      :items="items"
      items-per-page="15"
      class="mt-6"
      row-color="#F7F7FA"
    >
      <template v-slot:action>
        <item-menu />
      </template>
    </app-data-table>
  </div>
  <new-vat-rate-dialog
    :dialog="newCurrentDialog"
    @update:dialog="(val) => (newCurrentDialog = val)"
  />
</template>
<script lang="ts" setup>
import { ref, watch, watchEffect } from "vue";
import AppDataTable from "../default/AppDataTable.vue";
import ItemMenu from "./CustomerSubscriptionsPaymentsItemMenu.vue";
import NewVatRateDialog from "../settings/NewVatRateDialog.vue";

const newCurrentDialog = ref(false);
const importUnitDialog = ref(false);

const onAddNew = () => {
  newCurrentDialog.value = true;
};
const onImports = () => {
  importUnitDialog.value = true;
};

const headers = [
  {
    title: "Percentage",
    key: "code",
    style: "bold",
    align: "left",
    width: "100%",
  },
  { title: "", key: "action" },
];

const items = [
  {
    code: 1001,
    currency: "Invoice",
    status: true,
  },
  {
    code: 1001,
    currency: "Invoice",
    status: true,
  },
  {
    code: 1001,
    currency: "Invoice",
    status: true,
  },
  {
    code: 1001,
    currency: "Invoice",
    status: true,
  },
  {
    code: 1001,
    currency: "Invoice",
    status: true,
  },
  {
    code: 1001,
    currency: "Invoice",
    status: true,
  },
  {
    code: 1001,
    currency: "Invoice",
    status: true,
  },
];
</script>

<style scoped></style>
