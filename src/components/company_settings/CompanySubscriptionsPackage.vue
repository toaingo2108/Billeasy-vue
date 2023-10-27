<template>
  <div>
    <div class="ma-8">
      <span class="font-14 blue-600 app-medium-font"
        >Current payment plan:
      </span>
      <span class="font-14 dark-font app-semibold-font">Quarterly</span>
      <span class="font-14 blue-600 app-medium-font ms-6">Update Plan</span>
    </div>
    <v-row class="mt-4">
      <v-col cols="12" md="3" v-for="(item, index) in packages">
        <div
          :class="packageIndex == index ? 'app-dark-border' : 'app-border'"
          class="mx-2 d-flex flex-column pt-6 px-5 pb-5"
        >
          <span class="font-18 dark-font app-semibold-font mb-1">{{
            item.title
          }}</span>
          <div class="d-flex flex-row mt-4" v-for="li in item.list">
            <v-icon color="#8B8BA9" class="me-1">mdi-check</v-icon>
            {{ li }}
          </div>
          <div class="mt-9">
            <span class="font-28 dark-font app-semibold-font"
              >€{{ item.price }}</span
            >
            <span class="font-14 blue-600 app-medium-font">/ month</span>
          </div>
          <v-btn
            variant="outlined"
            style="border-color: #d1d1e2"
            class="font-14 app-medium-font mt-10 text-none"
            rounded="lg"
            @click="choosePackage(index)"
            v-if="index != packageIndex"
          >
            Choose Package
          </v-btn>
          <div
            class="forest-font font-13 app-medium-font mt-10 d-flex flex-row align-center justify-center"
            style="height: 35px"
            v-else
          >
            <v-icon class="me-1">mdi-check-circle-outline</v-icon>
            <span>Current Subscription</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const packageIndex = ref(2);
const packages = [
  {
    title: "Basic",
    list: [
      "Up to 100 customers",
      "Up to 100 products",
      "100 free invoices/ month",
      "1 SEK / invoice after first 100",
    ],
    price: 20,
  },
  {
    title: "Extra",
    list: [
      "Up to 100 customers",
      "Up to 100 products",
      "100 free invoices/ month",
      "1 SEK / invoice after first 100",
    ],
    price: 30,
  },
  {
    title: "Mega",
    list: [
      "Up to 100 customers",
      "Up to 100 products",
      "100 free invoices/ month",
      "1 SEK / invoice after first 100",
    ],
    price: 40,
  },
  {
    title: "Enterprise",
    list: [
      "Up to 100 customers",
      "Up to 100 products",
      "100 free invoices/ month",
      "1 SEK / invoice after first 100",
    ],
    price: 50,
  },
];

const choosePackage = (index: number) => {
  packageIndex.value = index;
};
</script>
