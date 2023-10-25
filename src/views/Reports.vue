<template>
  <div class="w-100 h-100 pa-8 d-flex flex-column">
    <div class="d-flex flex-row mb-5 align-center justify-between w-100">
      <div class="app-semibold-font font-28 dark-font">Reports</div>
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
          <div v-if="menu.title == 'Overall'">
            <reports-overall />
          </div>
          <div v-else-if="menu.title == 'Subscription'">
            <reports-subscription />
          </div>
          <div v-else-if="menu.title == 'Customers'">
            <reports-customers />
          </div>
          <div v-else-if="menu.title == 'Products'">
            <reports-products />
          </div>
        </v-window-item>
      </v-window>
    </div>
    <product-categories-dialog
      :dialog="productCategoriesDialog"
      @update:dialog="(val) => (productCategoriesDialog = val)"
      v-if="productCategoriesDialog"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ProductCategoriesDialog from "@/components/products/ProductCategoriesDialog.vue";
import ReportsOverall from "@/components/reports/ReportsOverall.vue";
import ReportsSubscription from "@/components/reports/ReportsSubscription.vue";
import overallIcon from "@/assets/svg/reports/overall_selected.svg";
import overallUnselectedIcon from "@/assets/svg/reports/overall_unselected.svg";
import subscriptionIcon from "@/assets/svg/reports/subscriptions_selected.svg";
import subscriptionUnselectedIcon from "@/assets/svg/reports/subscriptions_unselected.svg";
import customersIcon from "@/assets/svg/reports/customers_selected.svg";
import customersUnselectedIcon from "@/assets/svg/reports/customers_unselected.svg";
import productsIcon from "@/assets/svg/reports/products_selected.svg";
import productsUnselectedIcon from "@/assets/svg/reports/products_unselected.svg";
import ReportsCustomers from "@/components/reports/ReportsCustomers.vue";
import ReportsProducts from "@/components/reports/ReportsProducts.vue";

const productCategoriesDialog = ref(false);
const tab = ref(0);

const menus = [
  {
    title: "Overall",
    selected_icon: overallIcon,
    unselected_icon: overallUnselectedIcon,
  },
  {
    title: "Subscription",
    selected_icon: subscriptionIcon,
    unselected_icon: subscriptionUnselectedIcon,
  },
  {
    title: "Customers",
    selected_icon: customersIcon,
    unselected_icon: customersUnselectedIcon,
  },
  {
    title: "Products",
    selected_icon: productsIcon,
    unselected_icon: productsUnselectedIcon,
  },
];
</script>
<style scoped>
div :deep(.v-text-field input.v-field__input) {
  min-height: 40px;
  padding: 5px;
}
</style>
