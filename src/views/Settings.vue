<template>
  <div class="w-100 h-100 pa-8 d-flex flex-column">
    <div class="d-flex flex-row mb-5 align-center justify-between w-100">
      <div class="app-semibold-font font-28 dark-font">Settings</div>
    </div>
    <div>
      <v-tabs v-model="tab" color="#20C39D">
        <v-tab
          :value="index"
          class="text-none font-14 app-medium-font"
          :class="tab == index ? 'teal-font' : 'blue-600'"
          v-for="(menu, index) in menus"
        >
          <div class="me-2">
            <v-img
              width="18"
              height="18"
              :src="tab == index ? menu.selected_icon : menu.unselected_icon"
            />
          </div>
          {{ menu.title }}
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item
          v-for="(menu, index) in menus"
          :key="index"
          :value="index"
        >
          <div v-if="menu.title == 'Invoice Settings'">
            <invoice-settings />
          </div>
          <div v-else-if="menu.title == 'Scheduled Events'">
            <scheduled-events />
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
import InvoiceSettings from "@/components/settings/InvoiceSettings.vue";
import ScheduledEvents from "@/components/subscriptions/ScheduledEvents.vue";
import invoiceIcon from "@/assets/svg/customers/invoice_selected.svg";
import invoiceUnselectedIcon from "@/assets/svg/customers/invoice_unselected.svg";
import subscriptionIcon from "@/assets/svg/subscriptions/subscription.svg";
import subscriptionUnselectedIcon from "@/assets/svg/subscriptions/subscription_unselected.svg";
import settingIcon from "@/assets/svg/settings/setting.svg";
import settingUnselectedIcon from "@/assets/svg/settings/setting_unselected.svg";

const newProductDialog = ref(false);
const exportDialog = ref(false);
const importDialog = ref(false);
const productCategoriesDialog = ref(false);
const tab = ref(0);

const menus = [
  {
    title: "Invoice Settings",
    selected_icon: invoiceIcon,
    unselected_icon: invoiceUnselectedIcon,
  },
  {
    title: "Subscription Settings",
    selected_icon: subscriptionIcon,
    unselected_icon: subscriptionUnselectedIcon,
  },
  {
    title: "Integration Settings",
    selected_icon: settingIcon,
    unselected_icon: settingUnselectedIcon,
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
