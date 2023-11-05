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
      Templates
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
          <router-view />
        </v-window-item>
      </v-window>
    </v-card-text>
    <v-divider
      class="mt-8"
      v-if="
        route.name == 'company-templates-subscription-new' ||
        route.name == 'company-templates-invoice-new'
      "
    />
    <v-card-actions
      class="py-7 px-8 d-flex flex-row justify-end bg-gray"
      v-if="
        route.name == 'company-templates-subscription-new' ||
        route.name == 'company-templates-invoice-new'
      "
    >
      <v-btn
        color="#0D0D1E"
        variant="outlined"
        rounded="lg"
        style="
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 5px;
          padding-bottom: 5px;
          border-color: #d1d1e2;
        "
        class="text-none"
        >Cancel</v-btn
      >
      <v-btn
        color="white"
        prepend-icon="mdi-check"
        rounded="lg"
        style="
          background: #20c39d !important;
          color: white !important;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 5px;
          padding-bottom: 5px;
        "
        class="text-none ms-2"
        >Save</v-btn
      >
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
import { useRouter, useRoute } from "vue-router";
import { useDisplay } from "vuetify";

const tab = ref(0);
const menus = ["Subscription Templates", "Invoice Templates"];
const cancelSubscriptionDialog = ref(false);

const onCancelSubscription = () => {
  cancelSubscriptionDialog.value = true;
};

const router = useRouter();
const route = useRoute();
const { mdAndUp } = useDisplay();

watch(
  () => tab.value,
  (newValue) => {
    switch (newValue) {
      case 0:
        router.push({ name: "company-templates-subscription" });
        break;
      case 1:
        router.push({ name: "company-templates-invoice" });
        break;
    }
  }
);
watch(
  () => route.name,
  (newValue) => {
    switch (route.name) {
      case "company-templates-subscription":
        tab.value = 0;
        break;
      case "company-templates-subscription-new":
        tab.value = 0;
        break;
      case "company-templates-invoice":
        tab.value = 1;
        break;
      case "company-templates-invoice-new":
        tab.value = 1;
        break;
    }
  }
);
</script>
<style scoped></style>
