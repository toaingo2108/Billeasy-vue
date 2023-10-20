<template>
  <div class="w-100 h-100 pa-8 d-flex flex-column">
    <div class="d-flex flex-row mb-5 align-center w-100">
      <div>
        <v-btn
          variant="outlined"
          prepend-icon="mdi-chevron-left"
          @click="onBack"
          rounded="lg"
          color="#0D0D1E"
          style="
            border-color: #d1d1e2;
            text-decoration: none;
            margin-right: 24px;
          "
          >Back</v-btn
        >
      </div>
      <div class="app-semibold-font font-20 blue-600">Invoice</div>
      <div class="app-semibold-font font-20 dark-font">#12312352</div>
    </div>
    <div>
      <v-tabs v-model="tab" color="#20C39D">
        <v-tab
          :value="index"
          class="text-none font-14 app-medium-font"
          :class="tab == index ? 'teal-font' : 'blue-600'"
          v-for="(menu, index) in menus"
        >
          <div class="me-2">
            <v-img width="18" height="18" :src="menu.icon" />
          </div>
          {{ menu.title }}
        </v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item
          v-for="(menu, index) in menus"
          :key="index"
          :value="index"
        >
          <div v-if="menu.title == 'Invoices'">
            <v-row class="mt-3">
              <v-col cols="12" md="7">
                <v-img src="@/assets/sample/image-invoice.png" />
              </v-col>
              <v-col cols="12" md="5">
                <v-btn
                  prepend-icon="mdi-sync"
                  color="white"
                  style="
                    background-color: #20c39d !important;
                    color: white !important;
                    height: 40px;
                    max-height: 40px;
                    font-family: 'Poppins-Medium' !important;
                  "
                  class="text-none"
                  rounded="lg"
                  block
                  >Update Invoice
                </v-btn>
                <v-card class="rounded-xl pa-3 mt-6" elevation="0">
                  <v-list>
                    <v-list-item
                      v-for="(item, i) in invoiceMenuItems"
                      :key="i"
                      :value="item"
                      color="primary"
                      rounded="lg"
                      @click="item.onClick"
                    >
                      <template v-slot:prepend>
                        <v-img
                          :src="item.icon"
                          width="20"
                          height="20"
                          class="me-3"
                        />
                      </template>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card>
                <v-card class="rounded-xl pa-3 mt-3" elevation="0">
                  <v-card-title class="d-flex flex-row justify-between">
                    <div
                      class="d-flex flex-row align-center font-20 app-semibold-font dark-font"
                    >
                      <div class="me-2">
                        <v-img
                          width="28"
                          height="28"
                          src="@/assets/svg/invoices/history.svg"
                        />
                      </div>
                      History
                    </div>
                    <v-btn
                      variant="text"
                      style="
                        font-size: 14px;
                        font-family: 'Poppins-Medium' !important;
                      "
                      color="#E6E6ED"
                      class="text-none"
                      >See all</v-btn
                    >
                  </v-card-title>
                  <v-card-text class="mt-5 d-flex flex-row justify-between">
                    <span class="font-14 dark-font app-medium-font"
                      >Payment</span
                    >
                    <span class="font-13 shade-font app-regular-font"
                      >2023-06-01, 12.30</span
                    >
                  </v-card-text>
                  <v-card-text class="pt-1 d-flex flex-row justify-between">
                    <span class="font-14 dark-font app-medium-font">Sent</span>
                    <span class="font-13 shade-font app-regular-font"
                      >2023-06-01, 12.30</span
                    >
                  </v-card-text>
                  <v-card-text class="pt-1 d-flex flex-row justify-between">
                    <span class="font-14 dark-font app-medium-font"
                      >Updated</span
                    >
                    <span class="font-13 shade-font app-regular-font">
                      2023-06-01, 12.30
                    </span>
                  </v-card-text>
                  <v-card-text class="pt-1 d-flex flex-row justify-between">
                    <span class="font-14 dark-font app-medium-font"
                      >Created</span
                    >
                    <span class="font-13 shade-font app-regular-font">
                      2023-06-01, 12.30
                    </span>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </div>
          <div v-else-if="menu.title == 'Scheduled Events'">
            <scheduled-events />
          </div>
        </v-window-item>
      </v-window>
    </div>
    <add-note-dialog
      :dialog="addNewNoteDialog"
      @update:dialog="(val) => (addNewNoteDialog = val)"
    />
    <add-custom-field-dialog
      :dialog="addNewCustomFieldDialog"
      @update:dialog="(val) => (addNewCustomFieldDialog = val)"
    />
    <add-report-dialog
      :dialog="addNewReportDialog"
      @update:dialog="(val) => (addNewReportDialog = val)"
    />
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import invoiceIcon from "@/assets/svg/customers/invoice.svg";
import notesIcon from "@/assets/svg/customers/notes.svg";
import todosIcon from "@/assets/svg/customers/todos.svg";
import registerPaymentIcon from "@/assets/svg/invoices/register_payment.svg";
import creditInvoiceIcon from "@/assets/svg/invoices/credit_invoice.svg";
import duplicateIcon from "@/assets/svg/invoices/duplicate.svg";
import previewPDFIcon from "@/assets/svg/invoices/preview_pdf.svg";
import cancelInvoiceIcon from "@/assets/svg/invoices/cancel_invoice.svg";
import todoImage from "@/assets/sample/profile.png";

const tab = ref(0);
const addNewDialog = ref(false);
const addNewNoteDialog = ref(false);
const addNewCustomFieldDialog = ref(false);
const addNewReportDialog = ref(false);
const emails = ["test@email.com", "user@email.com", "customer@email.com"];

const router = useRouter();
const onBack = function () {
  router.back();
};

const onAddNewCategory = function () {
  addNewDialog.value = true;
};
const onAddNewCustomField = function () {
  addNewCustomFieldDialog.value = true;
};
const onAddNewReport = function () {
  addNewReportDialog.value = true;
};

const customFieldsHeaders = ["Name", "Value", ""];
const customFields = [
  {
    name: "Reg.nr",
    value: 10,
  },
  {
    name: "Reg.nr",
    value: 10,
  },
  {
    name: "Reg.nr",
    value: 10,
  },
  {
    name: "Reg.nr",
    value: 10,
  },
  {
    name: "Reg.nr",
    value: 10,
  },
  {
    name: "Reg.nr",
    value: 10,
  },
];

const menus = [
  {
    title: "Invoices",
    icon: invoiceIcon,
  },
  {
    title: "Notes",
    icon: notesIcon,
  },
  {
    title: "To-do's",
    icon: todosIcon,
  },
];

const onRegisterPayment = function () {
  console.log("register payment");
};
const onCreditInvoice = function () {};
const onDuplicate = function () {};
const onPreviewPDF = function () {};
const onCancelInvoice = function () {};
const onSendInvoice = function () {};

const invoiceMenuItems = [
  {
    text: "Register Payment",
    icon: registerPaymentIcon,
    onClick: onRegisterPayment,
  },
  { text: "Send Invoice", icon: invoiceIcon, onClick: onSendInvoice },
  {
    text: "Credit Invoice",
    icon: creditInvoiceIcon,
    onClick: onCreditInvoice,
  },
  { text: "Duplicate", icon: duplicateIcon, onClick: onDuplicate },
  {
    text: "Preview PDF",
    icon: previewPDFIcon,
    onClick: onPreviewPDF,
  },
  {
    text: "Cancel invoice",
    icon: cancelInvoiceIcon,
    onClick: onCancelInvoice,
  },
];

const invoiceHeaders = [
  { title: "#", key: "id" },
  { title: "Amount", key: "amount" },
  { title: "Currency", key: "currency" },
  { title: "Due", key: "due" },
  { title: "Invoice", key: "date" },
  { title: "Sent", key: "sent" },
  { title: "Paid", key: "paid" },
];

const invoiceItems = reactive([
  {
    id: "1101",
    amount: 1100,
    currency: "SEK",
    due: "2023-07-01",
    date: "2023-07-01",
    sent: true,
    paid: false,
  },
  {
    id: "1101",
    amount: 1100,
    currency: "SEK",
    due: "2023-07-01",
    date: "2023-07-01",
    sent: true,
    paid: false,
  },
  {
    id: "1101",
    amount: 1100,
    currency: "SEK",
    due: "2023-07-01",
    date: "2023-07-01",
    sent: true,
    paid: false,
  },
  {
    id: "1101",
    amount: 1100,
    currency: "SEK",
    due: "2023-07-01",
    date: "2023-07-01",
    sent: false,
    paid: true,
  },
  {
    id: "1101",
    amount: 1100,
    currency: "SEK",
    due: "2023-07-01",
    date: "2023-07-01",
    sent: false,
    paid: false,
  },
]);

const onAddNewNote = function () {
  addNewNoteDialog.value = true;
};

const todoItems = [
  {
    image: todoImage,
    text: "Call Jimmy regarding project",
    status: "Done",
    date: "2023/05/01",
  },
  {
    image: todoImage,
    text: "Call Jimmy regarding project",
    status: "New",
    date: "2023/05/01",
  },
  {
    image: todoImage,
    text: "Call Jimmy regarding project",
    status: "Started",
    date: "2023/05/01",
  },
];
</script>
<style scoped>
div >>> .v-text-field input.v-field__input {
  min-height: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 12px;
  padding-right: 12px;
}

div >>> .v-label {
  opacity: 1;
}
div >>> .v-chip__close {
  color: #8b8ba9;
}

div >>> .icon-button {
  width: 32px;
  height: 32px;
  max-width: 32px;
  max-height: 32px;
  min-width: 32px;
  min-height: 32px;
  padding: 0;
  border-color: #d1d1e2;
}
div >>> .v-data-table-header__content {
  font-size: 13px;
  color: #0d0d1e !important;
  font-family: "Poppins-SemiBold" !important;
}

div >>> .v-data-table__tr > td {
  font-size: 13px;
}
div >>> .v-data-table-footer {
  display: none !important;
}
</style>
