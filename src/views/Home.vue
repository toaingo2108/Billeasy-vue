<template>
  <div class="w-100 h-100 pa-8 d-flex flex-column">
    <div class="d-flex flex-row">
      <div class="app-semibold-font font-28 dark-font">Welcome back,</div>
      <div class="app-semibold-font font-28 teal-font ms-2">Jane!</div>
    </div>
    <v-row>
      <v-col cols="12" md="7" class="h-100">
        <open-invoices />
        <sales />
      </v-col>
      <v-col cols="12" md="5" class="h-100">
        <subscription />
        <best-customers />
        <most-sold-products />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import OpenInvoices from "@/components/home/HomeOpenInvoices.vue";
import Sales from "@/components/home/HomeSales.vue";
import Subscription from "@/components/home/HomeSubscription.vue";
import BestCustomers from "@/components/home/HomeBestCustomers.vue";
import MostSoldProducts from "@/components/home/HomeMostSoldProducts.vue";
</script>
