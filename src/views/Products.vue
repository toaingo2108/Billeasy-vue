<template>
  <div class="w-100 h-100 pa-8 d-flex flex-column">
    <div class="d-flex flex-row mb-5 align-center justify-between w-100">
      <div class="app-semibold-font font-28 dark-font">Products & Services</div>
      <div
        class="app-medium-font font-14 teal-font d-flex flex-row align-center"
      >
        <v-btn variant="plain" class="text-none">
          <v-icon color="#20C39D" class="me-2">mdi-vector-square</v-icon
          >Customize
        </v-btn>
      </div>
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
      <div class="d-flex align-center">
        <div class="me-3">
          <v-btn
            variant="plain"
            width="40"
            height="40"
            class="button-40"
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
            class="button-40"
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
            class="button-40"
            rounded="lg"
            @click="onProductCategories"
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
          @click="openNewProductDialog"
        >
          New Product
        </v-btn>
      </div>
    </div>
    <div class="mt-10">
      <app-data-table
        :headers="headers"
        :items="items"
        items-per-page="15"
        style="margin-bottom: 80px"
      >
      </app-data-table>
      <app-data-table-bottom :length="15" />
    </div>
    <new-product-dialog
      :dialog="newProductDialog"
      @update:dialog="(val) => (newProductDialog = val)"
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
import NewProductDialog from "@/components/products/NewProductDialog.vue";
import ProductExportDialog from "@/components/products/ProductExportDialog.vue";
import ProductImportDialog from "@/components/products/ProductImportDialog.vue";
import ProductCategoriesDialog from "@/components/products/ProductCategoriesDialog.vue";
import AppDataTable from "@/components/default/AppDataTable.vue";
import AppDataTableBottom from "@/components/default/AppDataTableBottom.vue";
import SearchField from "@/components/default/SearchField.vue";

const newProductDialog = ref(false);
const exportDialog = ref(false);
const importDialog = ref(false);
const productCategoriesDialog = ref(false);

const headers = [
  { title: "ID", key: "id", style: "bold" },
  { title: "Name", key: "name", style: "bold" },
  { title: "SKU", key: "sku" },
  { title: "Price", key: "price" },
  { title: "In Stock", key: "inStock" },
  { title: "Unit", key: "unit" },
  { title: "VAT", key: "vat" },
  { title: "Category", key: "category" },
  { title: "EAN", key: "ean" },
  { title: "Status", key: "status" },
  { title: "", key: "action" },
];

const items = [
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },

  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    sku: "1231231234",
    price: "12,000",
    inStock: "12,000",
    unit: "Pcs",
    vat: "25%",
    category: "New Product",
    ean: "AASBSOAD1I",
    status: true,
  },
];

const openNewProductDialog = function () {
  newProductDialog.value = true;
};

const onExportData = function () {
  exportDialog.value = true;
};

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
