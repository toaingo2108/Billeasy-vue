<template>
  <div class="w-100 h-100 pa-8 d-flex flex-column">
    <div class="d-flex flex-row mb-5 align-center justify-between w-100">
      <div class="app-semibold-font font-28 dark-font">Customers</div>
      <div
        class="app-medium-font font-14 teal-font d-flex flex-row align-center"
      >
        <v-icon color="#20C39D" class="me-2">mdi-vector-square</v-icon>Customize
      </div>
    </div>
    <div class="d-flex justify-between">
      <div class="d-flex">
        <div style="width: 288px">
          <v-text-field
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            rounded="lg"
            style="width: 288px"
            hide-details
          />
        </div>
        <div class="ml-2">
          <v-btn
            variant="plain"
            width="40"
            height="40"
            class="img-button"
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
        <div class="me-3">
          <v-btn
            variant="plain"
            width="40"
            height="40"
            class="img-button"
            rounded="lg"
            @click="onExportData"
          >
            <v-img
              width="40"
              height="40"
              src="@/assets/svg/products/download.svg"
            />
          </v-btn>
        </div>
        <div class="me-3">
          <v-btn
            variant="plain"
            width="40"
            height="40"
            class="img-button"
            rounded="lg"
            @click="onImportData"
          >
            <v-img
              width="40"
              height="40"
              src="@/assets/svg/products/upload.svg"
            />
          </v-btn>
        </div>
        <div class="me-3">
          <v-btn
            variant="plain"
            width="40"
            height="40"
            class="img-button"
            rounded="lg"
            @click="onCustomerCategories"
          >
            <v-img
              width="40"
              height="40"
              src="@/assets/svg/products/products.svg"
            />
          </v-btn>
        </div>
        <v-btn
          color="#20C39D"
          prepend-icon="mdi-plus"
          rounded="lg"
          elevation="4"
          class="text-none white-font app-medium-font font-14"
          @click="openNewCustomerDialog"
        >
          New Customer
        </v-btn>
      </div>
    </div>
    <div class="mt-10">
      <app-data-table
        :headers="headers"
        :items="items"
        items-per-page="15"
        :on-row-clicked="onSelectCustomer"
        style="margin-bottom: 80px"
      >
      </app-data-table>
      <app-data-table-bottom :length="15" />
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

const exportDialog = ref(false);
const importDialog = ref(false);
const customerCategoriesDialog = ref(false);

import { useRouter } from "vue-router";

const router = useRouter();

const headers = [
  { title: "ID", key: "id", style: "bold" },
  { title: "Name", key: "name", style: "bold" },
  { title: "#Personal/org", key: "org" },
  { title: "City", key: "city" },
  { title: "Country", key: "country" },
  { title: "Phone", key: "phone" },
  { title: "Mobile", key: "mobile" },
  { title: "Category", key: "category" },
  { title: "Status", key: "status" },
  { title: "", key: "action" },
];

const items = [
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    org: "1231231234",
    city: "Stockholm",
    country: "SE",
    phone: "010101010",
    mobile: "010101010",
    category: "New Product",
    status: true,
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

const onSelectCustomer = function (item: any, index: number) {
  router.push({ name: "customer-details", query: { id: item.id } });
};
</script>
<style scoped>
.v-text-field input.v-field__input {
  min-height: 40px;
  padding: 5px;
}
.img-button {
  width: 40px;
  height: 40px;
  min-height: 40px;
  min-width: 40px;
  max-height: 40px;
  max-width: 40px;
}
</style>
