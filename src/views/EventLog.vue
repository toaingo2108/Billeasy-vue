<template>
  <div class="w-100 h-100 pa-8 d-flex flex-column">
    <div class="d-flex flex-row mb-5 align-center justify-between w-100">
      <div class="app-semibold-font font-28 dark-font">Event Log</div>
    </div>
    <div class="d-flex justify-between">
      <div class="d-flex">
        <div style="width: 288px">
          <search-field />
        </div>
        <div class="ml-2">
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
              src="@/assets/svg/products/filter.svg"
            />
          </v-btn>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <app-data-table
        :headers="headers"
        :items="items"
        items-per-page="15"
        :on-row-clicked="onSelectLog"
        style="margin-bottom: 80px"
        :checkable="false"
      >
        <template v-slot:action>
          <item-menu />
        </template>
      </app-data-table>
      <app-data-table-bottom :length="15" :hide-button="true" />
    </div>
    <customer-export-dialog
      :dialog="exportDialog"
      @update:dialog="(val) => (exportDialog = val)"
    />
    <customer-import-dialog
      :dialog="importDialog"
      @update:dialog="(val) => (importDialog = val)"
    />
    <customer-categories-dialog
      :dialog="customerCategoriesDialog"
      @update:dialog="(val) => (customerCategoriesDialog = val)"
      v-if="customerCategoriesDialog"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CustomerExportDialog from "@/components/customers/CustomerExportDialog.vue";
import CustomerImportDialog from "@/components/customers/CustomerImportDialog.vue";
import CustomerCategoriesDialog from "@/components/customers/CustomerCategoriesDialog.vue";
import AppDataTable from "@/components/default/AppDataTable.vue";
import AppDataTableBottom from "@/components/default/AppDataTableBottom.vue";
import ItemMenu from "@/components/customers/CustomerItemMenu.vue";

const exportDialog = ref(false);
const importDialog = ref(false);
const customerCategoriesDialog = ref(false);

import { useRouter } from "vue-router";
import SearchField from "@/components/default/SearchField.vue";

const router = useRouter();

const headers = [
  { title: "Date & Time", key: "date", style: "bold" },
  { title: "Program", key: "program", style: "bold" },
  { title: "User", key: "user" },
  { title: "Subject", key: "subject" },
  { title: "Event", key: "event", width: "300px" },
  { title: "type", key: "type", style: "status" },
];

const items = [
  {
    date: "2023-08-01, 23:12",
    program: "Invoices",
    user: "John Doe",
    subject: "Invoice creation",
    event: "Invoice 23451 was created",
    type: "true",
  },
  {
    date: "2023-08-01, 23:12",
    program: "Invoices",
    user: "John Doe",
    subject: "Invoice creation",
    event: "Invoice 452 could not be sent",
    type: "alert",
  },
  {
    date: "2023-08-01, 23:12",
    program: "Invoices",
    user: "John Doe",
    subject: "Invoice creation",
    event: "Invoice 23451 was created",
    type: "cancel",
  },
  {
    date: "2023-08-01, 23:12",
    program: "Invoices",
    user: "John Doe",
    subject: "Invoice creation",
    event:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel mauris est. Ut ultricies, ex cursus efficitur maximus, ipsum lacus accumsan libero, et ornare nibh orci sit amet justo.",
    type: "alert",
  },
  {
    date: "2023-08-01, 23:12",
    program: "Invoices",
    user: "John Doe",
    subject: "Invoice creation",
    event: "Invoice 23451 was created",
    type: "cancel",
  },
];

const openNewCustomerDialog = function () {
  router.push({ name: "new-customer" });
};

const onExportData = function () {
  exportDialog.value = true;
};

const onImportData = function () {
  importDialog.value = true;
};
const onCustomerCategories = function () {
  customerCategoriesDialog.value = true;
};

const onSelectLog = function (item: any, index: number) {
  // router.push({ name: "customer-details", query: { id: item.id } });
};
</script>
<style scoped></style>
