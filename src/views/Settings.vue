<template>
  <div class="w-100 h-100 pt-8 d-flex flex-column">
    <div class="d-flex flex-row mb-5 align-center justify-between w-100">
      <div class="app-semibold-font font-28 dark-font mx-8">Settings</div>
    </div>
    <div class="w-100">
      <v-tabs v-model="tab" color="#20C39D" class="w-100">
        <v-tab
          :value="index"
          class="text-none font-14 app-medium-font mx-8"
          :class="[
            tab == index ? 'teal-font' : 'blue-600',
            mdAndUp ? 'font-14' : 'font-8',
          ]"
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
          <div v-else-if="menu.title == 'Subscription Settings'">
            <subscription-settings />
          </div>
          <div v-else-if="menu.title == 'Integration Settings'">
            <integration-settings />
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
import SubscriptionSettings from "@/components/settings/SubscriptionSettings.vue";
import invoiceIcon from "@/assets/svg/customers/invoice_selected.svg";
import invoiceUnselectedIcon from "@/assets/svg/customers/invoice_unselected.svg";
import subscriptionIcon from "@/assets/svg/subscriptions/subscription.svg";
import subscriptionUnselectedIcon from "@/assets/svg/subscriptions/subscription_unselected.svg";
import settingIcon from "@/assets/svg/settings/setting.svg";
import settingUnselectedIcon from "@/assets/svg/settings/setting_unselected.svg";
import IntegrationSettings from "@/components/settings/IntegrationSettings.vue";
import { useDisplay } from "vuetify";

const newProductDialog = ref(false);
const exportDialog = ref(false);
const importDialog = ref(false);
const productCategoriesDialog = ref(false);
const tab = ref(0);

const mdAndUp = useDisplay();

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
@media (max-width: 850px) {
  div :deep(.v-tab) {
    margin-left: 5px !important;
    margin-right: 5px !important;
  }
}
</style>
