<template>
  <div class="w-100 h-100 pa-8 d-flex flex-column">
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
      <div class="d-flex align-center">
        <v-btn
          color="#20C39D"
          prepend-icon="mdi-plus"
          rounded="lg"
          elevation="4"
          class="text-none white-font app-medium-font font-14"
          @click="openNewEventDialog"
        >
          New event
        </v-btn>
      </div>
    </div>
    <div class="mt-10">
      <app-data-table
        :headers="headers"
        :items="items"
        items-per-page="15"
        style="margin-bottom: 80px"
        :on-row-clicked="onSelectedEvent"
      >
      </app-data-table>
      <app-data-table-bottom :length="15" />
    </div>
    <new-event-dialog
      :dialog="newEventDialog"
      @update:dialog="(val) => (newEventDialog = val)"
    />
    <product-export-dialog
      :dialog="exportDialog"
      @update:dialog="(val) => (exportDialog = val)"
    />
    <product-import-dialog
      :dialog="importDialog"
      @update:dialog="(val) => (importDialog = val)"
    />
    <product-categories-dialog
      :dialog="productCategoriesDialog"
      @update:dialog="(val) => (productCategoriesDialog = val)"
      v-if="productCategoriesDialog"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ProductExportDialog from "@/components/products/ProductExportDialog.vue";
import ProductImportDialog from "@/components/products/ProductImportDialog.vue";
import ProductCategoriesDialog from "@/components/products/ProductCategoriesDialog.vue";
import NewEventDialog from "@/components/invoices/NewEventDialog.vue";
import SearchField from "../default/SearchField.vue";
import AppDataTable from "../default/AppDataTable.vue";
import AppDataTableBottom from "../default/AppDataTableBottom.vue";

const newEventDialog = ref(false);
const exportDialog = ref(false);
const importDialog = ref(false);
const productCategoriesDialog = ref(false);

const headers = [
  { title: "Invoice nr.", key: "id", style: "bold", align: "left" },
  { title: "Event", key: "event", style: "bold", align: "left" },
  { title: "Event Date", key: "event_date" },
  { title: "Completed", key: "status" },
  { title: "", key: "action" },
];

const items = [
  {
    id: 1001,
    event: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    event_date: "2023-07-01",
    status: true,
  },
  {
    id: 1001,
    event: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    event_date: "2023-07-01",
    status: true,
  },
  {
    id: 1001,
    event: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    event_date: "2023-07-01",
    status: true,
  },
  {
    id: 1001,
    event: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    event_date: "2023-07-01",
    status: true,
  },
  {
    id: 1001,
    event: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    event_date: "2023-07-01",
    status: true,
  },
  {
    id: 1001,
    event: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    event_date: "2023-07-01",
    status: true,
  },
  {
    id: 1001,
    event: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    event_date: "2023-07-01",
    status: true,
  },
  {
    id: 1001,
    event: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    event_date: "2023-07-01",
    status: true,
  },
  {
    id: 1001,
    event: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    event_date: "2023-07-01",
    status: true,
  },
  {
    id: 1001,
    event: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    event_date: "2023-07-01",
    status: true,
  },
];

const openNewEventDialog = function () {
  newEventDialog.value = true;
};

const onExportData = function () {
  exportDialog.value = true;
};

const onSelectedEvent = function () {};
const onImportData = function () {
  importDialog.value = true;
};
const onProductCategories = function () {
  productCategoriesDialog.value = true;
};
</script>
<style scoped>
div :deep(.v-text-field input.v-field__input) {
  min-height: 40px;
  padding: 5px;
}
</style>
