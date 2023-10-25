<template>
  <v-dialog v-model="props.dialog" width="704" persistent>
    <v-card class="rounded-xl" color="#F2F2F7">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        New Product
      </v-card-title>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div style="width: 224px">
          <span class="font-13 app-medium-font dark-font">Product Number</span>
          <v-text-field
            placeholder="Product Number"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 224px" class="ms-12">
          <span class="font-13 app-medium-font dark-font">VAT rate</span>
          <v-select
            bg-color="white"
            placeholder="VAT rate"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['25%', '50%', '100%']"
          />
        </div>
        <div class="mt-6 ms-2">
          <v-btn
            variant="text"
            prepend-icon="mdi-plus"
            class="text-none app-medium-font font-14"
            color="#20c39d"
            @click="onAddNewVATRate"
          >
            Add New
          </v-btn>
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div style="width: 224px">
          <span class="font-13 app-medium-font dark-font">Name</span>
          <v-text-field
            placeholder="Name"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 224px" class="ms-12">
          <span class="font-13 app-medium-font dark-font">Unit</span>
          <v-select
            bg-color="white"
            placeholder="Unit"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['st', 'st1', 'st2']"
          />
        </div>
        <div class="mt-6 ms-2">
          <v-btn
            variant="text"
            prepend-icon="mdi-plus"
            class="text-none app-medium-font font-14"
            color="#20c39d"
            @click="onAddNewUnit"
          >
            Add New
          </v-btn>
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div style="width: 224px">
          <span class="font-13 app-medium-font dark-font">SKU</span>
          <v-text-field
            placeholder="SKU"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 224px" class="ms-12">
          <span class="font-13 app-medium-font dark-font">Category</span>
          <v-select
            bg-color="white"
            placeholder="Category"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['New categories', 'Old categories', 'Very old categories']"
          />
        </div>
        <div class="mt-6 ms-2">
          <v-btn
            variant="text"
            prepend-icon="mdi-plus"
            class="text-none app-medium-font font-14"
            color="#20c39d"
            @click="onAddNewCategory"
          >
            Add New
          </v-btn>
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div style="width: 224px">
          <span class="font-13 app-medium-font dark-font">EAN</span>
          <v-text-field
            placeholder="EAN"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 224px" class="ms-12">
          <span class="font-13 app-medium-font dark-font"
            >Quantity in Stock</span
          >
          <v-text-field
            placeholder="Quantity in Stock"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
      </v-card-text>
      <v-card-text>
        <v-table>
          <thead>
            <tr>
              <th
                class="text-left font-12 app-semibold-font shade-font"
                v-for="header in headers"
                :key="header"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td>
                <v-text-field
                  placeholder="PRICE Incl. VAT"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.incl"
                />
              </td>
              <td>
                <v-text-field
                  placeholder="PRICE excl. VAT"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.excl"
                />
              </td>
              <td>
                <v-text-field
                  placeholder="FROM QUANTITY"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.quantity"
                />
              </td>
              <td>
                <v-select
                  bg-color="white"
                  placeholder="PRICELIST"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.price"
                  :items="['A', 'B', 'C', 'X']"
                />
              </td>
              <td>
                <v-btn flat icon size="small"
                  ><v-icon color="#8B8BA9">mdi-close</v-icon></v-btn
                >
              </td>
            </tr>
          </tbody>
        </v-table>
        <div>
          <v-btn
            variant="text"
            prepend-icon="mdi-plus"
            class="text-none app-medium-font font-14"
            color="#20c39d"
            @click="onAddNewPrice"
          >
            Add New Price
          </v-btn>
        </div>
      </v-card-text>
      <v-divider class="mt-10" />
      <v-card-actions class="py-7 px-8 d-flex flex-row justify-end bg-gray">
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
      <new-product-price-dialog
        :dialog="priceDialog"
        @update:dialog="(val) => (priceDialog = val)"
      />
      <new-product-category-dialog
        :dialog="categoryDialog"
        @update:dialog="(val) => (categoryDialog = val)"
      />
      <new-unit-dialog
        :dialog="newUnitDialog"
        @update:dialog="(val) => (newUnitDialog = val)"
      />
      <new-vat-rate-dialog
        :dialog="newVatRateDialog"
        @update:dialog="(val) => (newVatRateDialog = val)"
      />
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import NewProductPriceDialog from "./NewProductPriceDialog.vue";
import NewProductCategoryDialog from "./NewProductCategoryDialog.vue";
import NewUnitDialog from "../settings/NewUnitDialog.vue";
import NewVatRateDialog from "../settings/NewVatRateDialog.vue";

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
  "",
];

const items = [
  { incl: 1000, excl: 800, quantity: 0, price: "A" },
  { incl: 1000, excl: 800, quantity: 2, price: "B" },
  { incl: 1000, excl: 800, quantity: 0, price: "C" },
];

const priceDialog = ref(false);
const categoryDialog = ref(false);
const newUnitDialog = ref(false);
const newVatRateDialog = ref(false);

const onAddNewPrice = function () {
  priceDialog.value = true;
};
const onAddNewCategory = function () {
  categoryDialog.value = true;
};
const onAddNewUnit = () => {
  newUnitDialog.value = true;
};
const onAddNewVATRate = () => {
  newVatRateDialog.value = true;
};
</script>

<style scoped></style>
