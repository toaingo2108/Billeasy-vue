<template>
  <div class="w-100 h-100 py-8 d-flex flex-column">
    <div>
      <v-tabs v-model="tab" color="#20C39D">
        <v-tab
          :value="index"
          class="text-none font-14 app-medium-font"
          :class="tab == index ? 'teal-font' : 'blue-600'"
          v-for="(menu, index) in menus"
        >
          {{ menu.title }}
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item
          v-for="(menu, index) in menus"
          :key="index"
          :value="index"
        >
          <div v-if="menu.title == 'Subscriptions'">
            <scheduled-events-subscriptions />
          </div>
          <div v-else-if="menu.title == 'Subscription Rows'">
            <scheduled-events-subscription-rows />
          </div>
        </v-window-item>
      </v-window>
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
import ScheduledEventsSubscriptions from "@/components/subscriptions/ScheduledEventsSubscriptions.vue";
import ScheduledEventsSubscriptionRows from "./ScheduledEventsSubscriptionRows.vue";

const newProductDialog = ref(false);
const exportDialog = ref(false);
const importDialog = ref(false);
const productCategoriesDialog = ref(false);
const tab = ref(0);

const menus = [
  {
    title: "Subscriptions",
  },
  {
    title: "Subscription Rows",
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
<style scoped></style>
