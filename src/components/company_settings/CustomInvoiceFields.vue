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
      Custom Invoice Fields
    </v-card-title>
    <v-card-text class="font-14 app-regular-font shade-font ms-3 mt-2">
      Here you can add custom fields to include in your customer registry and/or
      in your invoices.
    </v-card-text>
    <v-card-text class="mt-8 ms-4 mb-15">
      <v-table style="width: 100%; background-color: #0000">
        <thead>
          <tr>
            <th
              class="text-left font-13 app-semibold-font dark-font remove-border-bottom"
              v-for="(header, index) in headers"
              :key="index"
            >
              {{ header.title }}
              <v-icon color="#59597B" v-if="header.title"
                >mdi-unfold-more-horizontal</v-icon
              >
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index" style="height: 36px">
            <td class="remove-border-bottom" style="min-width: 170px">
              <span class="font-13 dark-font app-medium-font">{{
                item.name
              }}</span>
            </td>
            <td style="min-width: 170px" class="remove-border-bottom">
              <v-text-field
                placeholder="Value"
                variant="outlined"
                rounded="lg"
                hide-details
                v-model="item.value"
              />
            </td>
            <td style="width: 100%" class="remove-border-bottom">
              <v-text-field
                placeholder="Description"
                variant="outlined"
                rounded="lg"
                hide-details
                v-model="item.description"
              />
            </td>
            <td style="min-width: 136px" class="remove-border-bottom">
              <div class="d-flex flex-row justify-center me-4">
                <app-checkbox v-model="item.invoice" />
              </div>
            </td>
            <td style="min-width: 136px" class="remove-border-bottom">
              <div class="d-flex flex-row justify-center me-4">
                <app-checkbox v-model="item.customer" />
              </div>
            </td>
            <td class="remove-border-bottom">
              <div class="d-flex flex-row justify-end">
                <v-btn
                  size="x-small"
                  flat
                  class="me-1"
                  style="
                    width: 24px;
                    height: 24px;
                    min-height: 24px;
                    min-width: 24px;
                    max-height: 24px;
                    min-height: 24px;
                    padding: 0;
                  "
                >
                  <v-img
                    src="@/assets/svg/datatable/dot_menu.svg"
                    width="24"
                    height="24"
                  />
                  <item-menu />
                </v-btn>
              </div>
            </td>
          </tr>
          <tr>
            <td class="remove-border-bottom" style="min-width: 170px">
              <v-text-field
                placeholder="Name"
                variant="outlined"
                rounded="lg"
                hide-details
                v-model="newItem.name"
              />
            </td>
            <td style="min-width: 170px" class="remove-border-bottom">
              <v-text-field
                placeholder="Value"
                variant="outlined"
                rounded="lg"
                hide-details
                v-model="newItem.value"
              />
            </td>
            <td style="width: 100%" class="remove-border-bottom">
              <v-text-field
                placeholder="Description"
                variant="outlined"
                rounded="lg"
                hide-details
                v-model="newItem.description"
              />
            </td>
            <td style="min-width: 136px" class="remove-border-bottom">
              <div class="d-flex flex-row justify-center me-4">
                <app-checkbox v-model="newItem.invoice" />
              </div>
            </td>
            <td style="min-width: 136px" class="remove-border-bottom">
              <div class="d-flex flex-row justify-center me-4">
                <app-checkbox v-model="newItem.customer" />
              </div>
            </td>
            <td class="remove-border-bottom">
              <v-btn
                flat
                class="text-none app-medium-font font-14"
                style="
                  height: 36px;
                  min-height: 36px;
                  max-height: 36px;
                  min-height: 36px;
                  padding-left: 10px;
                  padding-right: 10px;
                  background-color: #20c39d;
                  color: white;
                "
                rounded="lg"
              >
                Add Field
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>
<script lang="ts" setup>
import { ref, watch, watchEffect, reactive } from "vue";
import AppCheckbox from "../default/AppCheckbox.vue";
import ItemMenu from "./CustomerSubscriptionsPaymentsItemMenu.vue";

const newItem = reactive({
  name: "",
  value: "",
  description: "",
  invoice: false,
  customer: false,
});
const headers = [
  { title: "Name", key: "name" },
  { title: "Value", key: "value" },
  { title: "Description", key: "description" },
  { title: "Invoice", key: "invoice" },
  { title: "Customer", key: "customer" },
  { title: "", key: "action" },
];

const items = reactive([
  {
    name: "License Plate",
    value: "Value",
    description: "Description",
    invoice: true,
    customer: false,
  },
  {
    name: "License Plate",
    value: "Value",
    description: "Description",
    invoice: true,
    customer: true,
  },
  {
    name: "License Plate",
    value: "Value",
    description: "Description",
    invoice: false,
    customer: false,
  },
]);
</script>

<style scoped></style>
