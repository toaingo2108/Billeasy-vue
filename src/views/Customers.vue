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
          <v-img
            width="40"
            height="40"
            src="@/assets/svg/products/filter.svg"
          />
        </div>
      </div>
      <div class="d-flex align-center">
        <div class="me-3">
          <v-img
            width="40"
            height="40"
            src="@/assets/svg/products/download.svg"
          />
        </div>
        <div class="me-3">
          <v-img
            width="40"
            height="40"
            src="@/assets/svg/products/upload.svg"
          />
        </div>
        <div class="me-3">
          <v-img
            width="40"
            height="40"
            src="@/assets/svg/products/products.svg"
          />
        </div>
        <v-btn
          color="#20C39D"
          prepend-icon="mdi-plus"
          rounded="lg"
          elevation="4"
          class="text-none white-font app-medium-font font-14"
        >
          New Customer
        </v-btn>
      </div>
    </div>
    <div class="mt-10">
      <v-data-table :headers="headers" :items="items" items-per-page="15">
      </v-data-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
const headers = [
  { title: "ID", key: "id" },
  { title: "Name", key: "name" },
  { title: "SKU", key: "sku" },
  { title: "Price", key: "price" },
  { title: "In Stock", key: "inStock" },
  { title: "Unit", key: "unit" },
  { title: "VAT", key: "vat" },
  { title: "Category", key: "category" },
  { title: "EAN", key: "ean" },
  { title: "Status", key: "status" },
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
</script>
<style scoped>
div >>> .v-text-field input.v-field__input {
  min-height: 40px;
  padding: 5px;
}
</style>
