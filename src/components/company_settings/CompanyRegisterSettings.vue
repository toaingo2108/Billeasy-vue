<template>
  <v-card class="rounded-xl me-8 my-8 responsive-card" elevation="0">
    <v-card-title
      class="app-semibold-font font-20 dark-font mt-6 mx-3 d-flex flex-row"
    >
      <div class="me-2">
        <v-img
          width="28"
          height="28"
          src="@/assets/svg/company_settings/company_information.svg"
        />
      </div>
      Register
    </v-card-title>
    <v-card-text class="mt-8 ms-4">
      <v-tabs v-model="tab" color="#20C39D">
        <v-tab
          :value="index"
          class="text-none app-medium-font"
          :class="[
            tab == index ? 'teal-font' : 'blue-600',
            mdAndUp ? 'font-14' : 'font-10',
          ]"
          v-for="(menu, index) in menus"
        >
          {{ menu }}
        </v-tab>
      </v-tabs>
      <v-divider />
      <v-window v-model="tab">
        <v-window-item v-for="n in 5" :key="n" :value="n">
          <company-register-currencies v-if="tab == 0" />
          <company-register-payment-terms v-else-if="tab == 1" />
          <company-register-price-lists v-else-if="tab == 2" />
          <company-register-units v-else-if="tab == 3" />
          <company-register-vat-rates v-else-if="tab == 4" />
        </v-window-item>
      </v-window>
    </v-card-text>
    <v-divider class="mt-8" />
    <v-card-actions class="py-7 px-8 d-flex flex-row justify-end">
      <div class="ms-10">
        <v-select
          bg-color="white"
          placeholder="Import Source"
          variant="outlined"
          rounded="lg"
          hide-details
          :items="['Activate', 'Deactivate', 'Delete']"
          style="width: 160px; height: 40px"
          v-model="type"
        />
      </div>
      <v-btn
        variant="plain"
        width="40"
        height="40"
        class="button-40 ms-2"
        rounded="lg"
      >
        <v-img
          width="40"
          height="40"
          src="@/assets/svg/customers/upload_done.svg"
        />
      </v-btn>
      <v-spacer />
      <app-data-table-bottom-pagination :length="15" class="me-10" />
    </v-card-actions>
  </v-card>
  <cancel-subscription-dialog
    :dialog="cancelSubscriptionDialog"
    @update:dialog="(val) => (cancelSubscriptionDialog = val)"
  />
</template>
<script lang="ts" setup>
import { ref, watch, watchEffect } from "vue";
import CancelSubscriptionDialog from "./CancelSubscriptionDialog.vue";
import CompanyRegisterCurrencies from "./CompanyRegisterCurrencies.vue";
import AppDataTableBottomPagination from "../default/AppDataTableBottomPagination.vue";
import CompanyRegisterPaymentTerms from "./CompanyRegisterPaymentTerms.vue";
import CompanyRegisterPriceLists from "./CompanyRegisterPriceLists.vue";
import CompanyRegisterUnits from "./CompanyRegisterUnits.vue";
import CompanyRegisterVatRates from "./CompanyRegisterVatRates.vue";
import { useDisplay } from "vuetify";

const tab = ref(0);
const menus = [
  "Currencies",
  "Payment Terms",
  "Price Lists",
  "Units",
  "VAT Rates",
];

const type = ref("Delete");
const cancelSubscriptionDialog = ref(false);
const { sm, mdAndUp } = useDisplay();
const onCancelSubscription = () => {
  cancelSubscriptionDialog.value = true;
};
</script>

<style scoped>
@media (max-width: 850px) {
  div :deep(.v-tab) {
    margin-left: 5px !important;
    margin-right: 5px !important;
  }
  .responsive-card {
    width: calc(100% - 250px);
  }
}
@media (max-width: 910px) and (min-width: 851px) {
  .responsive-card {
    width: calc(100% - 240px);
  }
}
@media (max-width: 960px) and (min-width: 911px) {
  .responsive-card {
    width: calc(100% - 180px);
  }
}
@media (max-width: 1230px) and (min-width: 961px) {
  .responsive-card {
    width: calc(100% - 300px);
  }
}
@media (max-width: 1420px) and (min-width: 1231px) {
  .responsive-card {
    width: calc(100% - 50px);
  }
}
</style>
