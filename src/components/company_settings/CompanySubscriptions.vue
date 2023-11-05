<template>
  <v-card
    class="rounded-xl me-8 my-8"
    elevation="0"
    :style="mdAndUp ? '' : 'width: calc(100vw - 270px)'"
  >
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
      Subscriptions
    </v-card-title>
    <v-card-text class="mt-8 ms-4">
      <v-tabs v-model="tab" color="#20C39D">
        <v-tab
          :value="index"
          class="text-none font-14 app-medium-font"
          :class="tab == index ? 'teal-font' : 'blue-600'"
          v-for="(menu, index) in menus"
        >
          {{ menu }}
        </v-tab>
      </v-tabs>
      <v-divider />
      <v-window v-model="tab">
        <v-window-item v-for="n in 3" :key="n" :value="n">
          <company-subscriptions-package v-if="tab == 0" />
          <company-subscriptions-payments v-else-if="tab == 1" />
          <company-subscriptions-integration v-else-if="tab == 2" />
        </v-window-item>
      </v-window>
    </v-card-text>
    <v-divider class="mt-8" v-if="tab == 0" />
    <v-card-actions
      class="py-7 px-8 d-flex flex-row justify-end bg-gray"
      v-if="tab == 0"
    >
      <v-btn
        color="E91818"
        prepend-icon="mdi-close-circle-outline"
        rounded="lg"
        style="
          border-color: #d1d1e2;
          background-color: white;
          color: #e91818 !important;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 7px;
          padding-bottom: 7px;
        "
        class="text-none"
        variant="outlined"
        @click="onCancelSubscription"
      >
        Cancel Subscription
      </v-btn>
      <v-btn
        color="white"
        prepend-icon="mdi-sync"
        rounded="lg"
        style="
          background: #20c39d !important;
          color: white !important;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 7px;
          padding-bottom: 7px;
          margin-left: 8px;
        "
        class="text-none"
      >
        Update Subscription
      </v-btn>
    </v-card-actions>
  </v-card>
  <cancel-subscription-dialog
    :dialog="cancelSubscriptionDialog"
    @update:dialog="(val) => (cancelSubscriptionDialog = val)"
  />
</template>
<script lang="ts" setup>
import { ref, watch, watchEffect } from "vue";
import CompanySubscriptionsPackage from "./CompanySubscriptionsPackage.vue";
import CancelSubscriptionDialog from "./CancelSubscriptionDialog.vue";
import CompanySubscriptionsPayments from "./CompanySubscriptionsPayments.vue";
import CompanySubscriptionsIntegration from "./CompanySubscriptionsIntegration.vue";
import { useDisplay } from "vuetify";

const tab = ref(0);
const menus = ["Package", "Payments", "Integration"];
const cancelSubscriptionDialog = ref(false);

const onCancelSubscription = () => {
  cancelSubscriptionDialog.value = true;
};

const { mdAndUp } = useDisplay();
</script>

<style scoped></style>
