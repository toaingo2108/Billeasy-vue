<template>
  <div class="w-100 h-100 py-8 d-flex flex-column">
    <div class="d-flex justify-between">
      <div class="d-flex">
        <div :style="mdAndUp ? 'width: 288px' : 'width: 110px'">
          <search-field :width="mdAndUp ? '288px' : '110px'" />
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
            @click="onSubscriptionCategories"
          >
            <v-img
              width="40"
              height="40"
              src="@/assets/svg/subscriptions/btn_subscription.svg"
            />
          </v-btn>
        </div>
        <v-btn
          color="#20C39D"
          prepend-icon="mdi-plus"
          rounded="lg"
          elevation="4"
          class="text-none white-font app-medium-font font-14"
          @click="goToNewSubscription"
        >
          New Subscription
        </v-btn>
      </div>
    </div>
    <div class="mt-10">
      <app-data-table
        :headers="headers"
        :items="items"
        items-per-page="15"
        style="margin-bottom: 80px"
        :on-row-clicked="onSelectedSubscription"
      >
        <template v-slot:action>
          <item-menu />
        </template>
      </app-data-table>
      <app-data-table-bottom :length="15" />
    </div>
    <subscription-categories-dialog
      :dialog="subCategoriesDialog"
      @update:dialog="(val) => (subCategoriesDialog = val)"
      v-if="subCategoriesDialog"
    />
    <subscription-import-dialog
      :dialog="importDialog"
      @update:dialog="(val) => (importDialog = val)"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ItemMenu from "./SubscriptionsItemMenu.vue";
import { useRouter } from "vue-router";
import AppDataTable from "@/components/default/AppDataTable.vue";
import AppDataTableBottom from "@/components/default/AppDataTableBottom.vue";
import SubscriptionImportDialog from "@/components/subscriptions/SubscriptionImportDialog.vue";
import SearchField from "../default/SearchField.vue";
import SubscriptionCategoriesDialog from "@/components/subscriptions/SubscriptionCategoriesDialog.vue";
import { useDisplay } from "vuetify";

const headers = [
  { title: "Sub nr.", key: "id", style: "bold" },
  { title: "Customer Name", key: "name", style: "bold" },
  { title: "#Billing cycles", key: "billing_cycle" },
  { title: "Interval", key: "interval" },
  { title: "Start Date", key: "start_date" },
  { title: "End Date", key: "end_date" },
  { title: "Last Billed", key: "last_billed" },
  { title: "Total", key: "total" },
  { title: "Status", key: "status" },
  { title: "", key: "action" },
];

const items = [
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    billing_cycle: 12,
    interval: 3,
    start_date: "2023-07-01",
    end_date: "2023-07-01",
    last_billed: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    billing_cycle: 12,
    interval: 3,
    start_date: "2023-07-01",
    end_date: "2023-07-01",
    last_billed: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    billing_cycle: 12,
    interval: 3,
    start_date: "2023-07-01",
    end_date: "2023-07-01",
    last_billed: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    billing_cycle: 12,
    interval: 3,
    start_date: "2023-07-01",
    end_date: "2023-07-01",
    last_billed: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    billing_cycle: 12,
    interval: 3,
    start_date: "2023-07-01",
    end_date: "2023-07-01",
    last_billed: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    billing_cycle: 12,
    interval: 3,
    start_date: "2023-07-01",
    end_date: "2023-07-01",
    last_billed: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    billing_cycle: 12,
    interval: 3,
    start_date: "2023-07-01",
    end_date: "2023-07-01",
    last_billed: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    billing_cycle: 12,
    interval: 3,
    start_date: "2023-07-01",
    end_date: "2023-07-01",
    last_billed: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    billing_cycle: 12,
    interval: 3,
    start_date: "2023-07-01",
    end_date: "2023-07-01",
    last_billed: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    name: "Blue t-shirt, XS",
    billing_cycle: 12,
    interval: 3,
    start_date: "2023-07-01",
    end_date: "2023-07-01",
    last_billed: "2023-07-01",
    total: "0101101010",
    status: true,
  },
];

const importDialog = ref(false);
const registerPaymentDialog = ref(false);
const subCategoriesDialog = ref(false);
const router = useRouter();
const goToNewSubscription = function () {
  router.push({ name: "new-subscription" });
};

const onSubscriptionCategories = function () {
  subCategoriesDialog.value = true;
};
const onImportData = function () {
  importDialog.value = true;
};

onImportData;
const onSelectedSubscription = function (item: any, index: number) {
  router.push({ name: "subscription-details", query: { id: item.id } });
};

const { mdAndUp } = useDisplay();
</script>
<style scoped></style>
