<template>
  <div>
    <div
      class="d-flex justify-between"
      :class="mdAndUp ? 'flex-row' : 'flex-column'"
    >
      <div class="font-14 app-regular-font shade-font ms-3 mt-6">
        Here you can create subscription templates with default<br />
        settings to use when creating subscriptions.
      </div>
      <div class="me-4 mt-6">
        <v-btn
          prepend-icon="mdi-plus"
          rounded="lg"
          style="
            background: #20c39d !important;
            color: white !important;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 7px;
            padding-bottom: 7px;
          "
          class="text-none font-14 app-medium-font"
          @click="onAddNew"
        >
          Add Subscription Template
        </v-btn>
      </div>
    </div>
    <app-data-table
      :headers="invoiceHeaders"
      :items="invoiceItems"
      :checkable="false"
      row-color="#f7f7fa"
      class="mt-10 mb-10"
      :height="64"
    >
      <template v-slot:action>
        <customer-subscriptions-payments-item-menu />
      </template>
    </app-data-table>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import AppDataTable from "../default/AppDataTable.vue";
import CustomerSubscriptionsPaymentsItemMenu from "./CustomerSubscriptionsPaymentsItemMenu.vue";
import { useRouter } from "vue-router";
import { useDisplay } from "vuetify";

const { mdAndUp } = useDisplay();
const invoiceHeaders = [
  { title: "Name", key: "name", align: "left", style: "bold", width: "104px" },
  { title: "Code", key: "code", style: "bold", align: "left", width: "144px" },
  { title: "Description", key: "description", width: "380px", align: "left" },
  { title: "# Subscriptions", key: "subscriptions", align: "left" },
  { title: "", key: "action" },
];

const invoiceItems = reactive([
  {
    name: "Standard",
    code: "ST",
    description:
      "Nam vel mauris est. Ut ultricies, ex cursus efficitur maximus, ipsum lacus accumsan libero, ",
    subscriptions: 12,
  },
  {
    name: "Standard",
    code: "ST",
    description:
      "Nam vel mauris est. Ut ultricies, ex cursus efficitur maximus, ipsum lacus accumsan libero, ",
    subscriptions: 12,
  },
  {
    name: "Standard",
    code: "ST",
    description:
      "Nam vel mauris est. Ut ultricies, ex cursus efficitur maximus, ipsum lacus accumsan libero, ",
    subscriptions: 12,
  },
]);

const router = useRouter();
const onAddNew = () => {
  router.push({ name: "company-templates-subscription-new" });
};
</script>
