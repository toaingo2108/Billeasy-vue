<template>
  <div class="w-100 h-100 py-8 d-flex flex-column">
    <div class="d-flex justify-between">
      <div class="d-flex">
        <div style="width: 288px">
          <search-field />
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
        <v-btn
          color="#20C39D"
          prepend-icon="mdi-plus"
          rounded="lg"
          elevation="4"
          class="text-none white-font app-medium-font font-14"
          @click="openNewInvoiceDialog"
        >
          New Invoice
        </v-btn>
      </div>
    </div>
    <div class="mt-10">
      <app-data-table
        :headers="headers"
        :items="items"
        items-per-page="15"
        style="margin-bottom: 80px"
        :on-row-clicked="onSelectedInvoice"
      >
        <template v-slot:action>
          <item-menu
            :on-register-payment="onRegisterPayment"
            :on-send-invoice="onSendInvoice"
          />
        </template>
      </app-data-table>
      <app-data-table-bottom :length="15" />
    </div>
    <scheduled-send-out-dialog
      :dialog="scheduleSendDialog"
      @update:dialog="(val) => (scheduleSendDialog = val)"
    />
    <send-invoice-dialog
      :dialog="sendInvoiceDialog"
      @update:dialog="(val) => (sendInvoiceDialog = val)"
    />
    <register-payment-dialog
      :dialog="registerPaymentDialog"
      @update:dialog="(val) => (registerPaymentDialog = val)"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ItemMenu from "./InvoicesItemMenu.vue";
import { useRouter } from "vue-router";
import AppDataTable from "@/components/default/AppDataTable.vue";
import AppDataTableBottom from "@/components/default/AppDataTableBottom.vue";
import ScheduledSendOutDialog from "@/components/invoices/ScheduleSendOutDialog.vue";
import SendInvoiceDialog from "@/components/invoices/SendInvoiceDialog.vue";
import RegisterPaymentDialog from "@/components/invoices/RegisterPaymentDialog.vue";
import SearchField from "../default/SearchField.vue";

const headers = [
  { title: "Invoice nr.", key: "id", style: "bold", align: "left" },
  { title: "OCR", key: "ocr", style: "bold" },
  { title: "Customer Name", key: "name" },
  { title: "Your Reference", key: "reference" },
  { title: "Invoice Date", key: "invoice_date" },
  { title: "Due Date", key: "due_date" },
  { title: "Total", key: "total" },
  { title: "Status", key: "status" },
  { title: "", key: "action" },
];

const items = [
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
  {
    id: 1001,
    ocr: "Blue t-shirt, XS",
    name: "1231231234",
    reference: "Stockholm",
    invoice_date: "2023-07-01",
    due_date: "2023-07-01",
    total: "0101101010",
    status: true,
  },
];

const scheduleSendDialog = ref(false);
const sendInvoiceDialog = ref(false);
const registerPaymentDialog = ref(false);
const router = useRouter();
const openNewInvoiceDialog = function () {
  router.push({ name: "new-invoice" });
};

const onScheduleSendOut = function () {
  scheduleSendDialog.value = true;
};
const onRegisterPayment = function () {
  registerPaymentDialog.value = true;
};
const onSendInvoice = function () {
  sendInvoiceDialog.value = true;
};
const onSelectedInvoice = function (item: any, index: number) {
  router.push({ name: "invoice-details", query: { id: item.id } });
};
</script>
<style scoped></style>
