<template>
  <div>
    <div class="ma-8">
      <span class="font-14 blue-600 app-medium-font"
        >Current payment method:
      </span>
      <span class="font-14 dark-font app-semibold-font">Invoice</span>
      <span class="font-14 blue-600 app-medium-font ms-6">Update Method</span>
    </div>
    <div class="d-flex flex-row justify-between">
      <div>
        <v-btn
          variant="outlined"
          style="
            border-color: #f7f7fa;
            height: 40px;
            max-height: 40px;
            min-height: 40px;
          "
          :style="
            option == 0
              ? 'background-color: #F7F7FA'
              : 'background-color: white'
          "
          class="font-14 text-none"
          :class="
            option == 0
              ? 'app-medium-font dark-font'
              : 'shade-font app-regular-font'
          "
          rounded="s-lg"
          @click="onSelectOption(0)"
          >All</v-btn
        >
        <v-btn
          variant="outlined"
          style="
            border-color: #f7f7fa;
            height: 40px;
            max-height: 40px;
            min-height: 40px;
          "
          :style="
            option == 1
              ? 'background-color: #F7F7FA'
              : 'background-color: white'
          "
          class="font-14 text-none"
          :class="
            option == 1
              ? 'app-medium-font dark-font'
              : 'shade-font app-regular-font'
          "
          rounded="0"
          @click="onSelectOption(1)"
          >Unpaid</v-btn
        >
        <v-btn
          variant="outlined"
          style="
            border-color: #f7f7fa;
            height: 40px;
            max-height: 40px;
            min-height: 40px;
          "
          :style="
            option == 2
              ? 'background-color: #F7F7FA'
              : 'background-color: white'
          "
          class="font-14 text-none"
          :class="
            option == 2
              ? 'app-medium-font dark-font'
              : 'shade-font app-regular-font'
          "
          rounded="0"
          @click="onSelectOption(2)"
          >Unpaid & late</v-btn
        >
        <v-btn
          variant="outlined"
          style="
            border-color: #f7f7fa;
            height: 40px;
            max-height: 40px;
            min-height: 40px;
          "
          :style="
            option == 3
              ? 'background-color: #F7F7FA'
              : 'background-color: white'
          "
          class="font-14 text-none"
          :class="
            option == 3
              ? 'app-medium-font dark-font'
              : 'shade-font app-regular-font'
          "
          rounded="e-lg"
          @click="onSelectOption(3)"
          >Paid</v-btn
        >
      </div>
      <div style="width: 288px">
        <search-field />
      </div>
    </div>
    <app-data-table
      :headers="invoiceHeaders"
      :items="invoiceItems"
      :checkable="false"
      row-color="#f7f7fa"
      class="mt-10"
    >
      <template v-slot:action>
        <customer-subscriptions-payments-item-menu />
      </template>
    </app-data-table>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import SearchField from "../default/SearchField.vue";
import AppDataTable from "../default/AppDataTable.vue";
import CustomerSubscriptionsPaymentsItemMenu from "./CustomerSubscriptionsPaymentsItemMenu.vue";

const option = ref(0);

const invoiceHeaders = [
  { title: "# Invoice", key: "id", align: "left", style: "bold" },
  { title: "Payment Method", key: "payment_method", style: "bold" },
  { title: "Invoice Date", key: "invoice_date" },
  { title: "Due Date", key: "due_date" },
  { title: "Payment Date", key: "payment_date" },
  { title: "Status", key: "status" },
  { title: "", key: "action" },
];

const invoiceItems = reactive([
  {
    id: "1001",
    payment_method: "Invoice",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    payment_date: "2023-07-01",
    status: true,
  },
  {
    id: "1001",
    payment_method: "Invoice",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    payment_date: "2023-07-01",
    status: true,
  },
  {
    id: "1001",
    payment_method: "Invoice",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    payment_date: "2023-07-01",
    status: true,
  },
  {
    id: "1001",
    payment_method: "Invoice",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    payment_date: "2023-07-01",
    status: true,
  },
  {
    id: "1001",
    payment_method: "Invoice",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    payment_date: "2023-07-01",
    status: true,
  },
  {
    id: "1001",
    payment_method: "Invoice",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    payment_date: "2023-07-01",
    status: true,
  },
  {
    id: "1001",
    payment_method: "Invoice",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    payment_date: "2023-07-01",
    status: true,
  },
]);

const onSelectOption = (index: number) => {
  option.value = index;
};
</script>
