<template>
  <div>
    <div class="mt-6 d-flex flex-row justify-end">
      <v-btn
        class="text-none"
        color="#0D0D1E"
        @click="onImports"
        prepend-icon="mdi-cloud-upload-outline"
        rounded="lg"
        variant="outlined"
        style="
          border-color: #d1d1e2;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 7px;
          padding-bottom: 7px;
        "
      >
        Import
      </v-btn>
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
        Add Unit
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
  <new-unit-dialog
    :dialog="newCurrentDialog"
    @update:dialog="(val) => (newCurrentDialog = val)"
  />
  <import-units-dialog
    :dialog="importUnitDialog"
    @update:dialog="(val) => (importUnitDialog = val)"
  />
</template>
<script lang="ts" setup>
import { ref, watch, watchEffect } from "vue";
import AppDataTable from "../default/AppDataTable.vue";
import ItemMenu from "./CustomerSubscriptionsPaymentsItemMenu.vue";
import NewUnitDialog from "../settings/NewUnitDialog.vue";
import ImportUnitsDialog from "./ImportUnitsDialog.vue";

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
    title: "Code",
    key: "code",
    style: "bold",
    align: "left",
  },
  { title: "Description", key: "currency", align: "left" },
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
