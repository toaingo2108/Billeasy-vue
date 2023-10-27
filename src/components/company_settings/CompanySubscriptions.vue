<template>
  <v-card class="rounded-xl me-8 mt-8" elevation="0">
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
        </v-window-item>
      </v-window>
    </v-card-text>
    <v-card-actions class="d-flex flex-row justify-end">
      <v-btn
        color="white"
        prepend-icon="mdi-check"
        rounded="lg"
        style="
          background: #20c39d !important;
          color: white !important;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 7px;
          padding-bottom: 7px;
          margin-right: 48px;
          margin-bottom: 35px;
        "
        class="text-none"
        >Save</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, watch, watchEffect } from "vue";
import CompanySubscriptionsPackage from "./CompanySubscriptionsPackage.vue";

const tab = ref(0);
const menus = ["Package", "Payments", "Integration"];
</script>

<style scoped></style>
