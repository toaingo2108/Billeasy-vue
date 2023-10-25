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
            <v-img
              width="18"
              height="18"
              :src="tab == index ? menu.selected_icon : menu.unselected_icon"
            />
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
                  @click="onUpdateInvoice"
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
                      color="#20C39D"
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
          <div v-else-if="menu.title == 'Notes'">
            <div class="d-flex justify-between">
              <div class="d-flex mt-6">
                <div style="width: 288px">
                  <search-field />
                </div>
              </div>
              <div class="d-flex align-center">
                <v-btn
                  color="#20C39D"
                  prepend-icon="mdi-plus"
                  rounded="lg"
                  elevation="4"
                  class="text-none white-font app-medium-font font-14"
                  @click="openNewNoteDialog"
                >
                  New Note
                </v-btn>
              </div>
            </div>
            <div class="mt-10">
              <app-data-table
                :headers="noteHeaders"
                :items="noteItems"
                items-per-page="15"
                style="margin-bottom: 80px"
                :checkable="false"
              >
                <template v-slot:action>
                  <invoice-note-item-menu />
                </template>
              </app-data-table>
              <div
                style="height: 96px; bottom: 0; width: calc(100% - 300px)"
                class="bg-gray position-fixed d-flex flex-row align-center justify-end"
              >
                <app-data-table-bottom-pagination :length="15" class="me-10" />
              </div>
            </div>
          </div>
          <div v-else-if="menu.title == `To-do's`">
            <div class="d-flex justify-between">
              <div class="d-flex mt-6">
                <div style="width: 288px">
                  <search-field />
                </div>
              </div>
              <div class="d-flex align-center">
                <v-btn
                  color="#20C39D"
                  prepend-icon="mdi-plus"
                  rounded="lg"
                  elevation="4"
                  class="text-none white-font app-medium-font font-14"
                  @click="openNewTodoDialog"
                >
                  New To-do
                </v-btn>
              </div>
            </div>
            <div class="mt-10">
              <todo-category-list>
                <template v-slot:action>
                  <customer-todo-details-menu />
                </template>
              </todo-category-list>
            </div>
          </div>
        </v-window-item>
      </v-window>
    </div>
    <invoice-add-note-dialog
      :dialog="addNewNoteDialog"
      @update:dialog="(val) => (addNewNoteDialog = val)"
    />
    <new-todo-item-dialog
      :dialog="addNewTodoDialog"
      @update:dialog="(val) => (addNewTodoDialog = val)"
    />
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import invoiceIcon from "@/assets/svg/customers/invoice_selected.svg";
import invoiceUnselectedIcon from "@/assets/svg/customers/invoice_unselected.svg";
import notesIcon from "@/assets/svg/customers/notes.svg";
import notesUnselectedIcon from "@/assets/svg/customers/notes_unselected.svg";
import todosIcon from "@/assets/svg/customers/todos.svg";
import todosUnselectedIcon from "@/assets/svg/customers/todos_unselected.svg";
import registerPaymentIcon from "@/assets/svg/invoices/register_payment.svg";
import creditInvoiceIcon from "@/assets/svg/invoices/credit_invoice.svg";
import duplicateIcon from "@/assets/svg/invoices/duplicate.svg";
import previewPDFIcon from "@/assets/svg/invoices/preview_pdf.svg";
import cancelInvoiceIcon from "@/assets/svg/invoices/cancel_invoice.svg";
import SearchField from "../default/SearchField.vue";
import AppDataTable from "../default/AppDataTable.vue";
import InvoiceAddNoteDialog from "./InvoiceAddNoteDialog.vue";
import InvoiceNoteItemMenu from "./InvoiceNoteItemMenu.vue";
import AppDataTableBottomPagination from "../default/AppDataTableBottomPagination.vue";
import TodoCategoryList from "../default/TodoCategoryList.vue";
import CustomerTodoDetailsMenu from "../customers/CustomerTodoDetailsMenu.vue";
import NewTodoItemDialog from "../todos/NewTodoItemDialog.vue";

const tab = ref(0);

const addNewNoteDialog = ref(false);
const addNewTodoDialog = ref(false);

const router = useRouter();
const onBack = function () {
  router.back();
};

const menus = [
  {
    title: "Invoices",
    selected_icon: invoiceIcon,
    unselected_icon: invoiceUnselectedIcon,
  },
  {
    title: "Notes",
    selected_icon: notesIcon,
    unselected_icon: notesUnselectedIcon,
  },
  {
    title: "To-do's",
    selected_icon: todosIcon,
    unselected_icon: todosUnselectedIcon,
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

const noteHeaders = [
  { title: "Header", key: "header", style: "bold" },
  { title: "Updated At", key: "updated_at", style: "bold" },
  { title: "Created At", key: "created_at" },
  { title: "Created By", key: "created_by" },
  { title: "Updated By", key: "updated_by" },
  { title: "", key: "action" },
];

const noteItems = [
  {
    header: "Invoice note",
    update: "2023-08-01, 17:11",
    created_at: "2023-08-01, 12:32",
    updated_at: "2023-08-01, 12:32",
    created_by: "John Doe",
    updated_by: "John Doe",
  },
  {
    header: "Invoice note",
    update: "2023-08-01, 17:11",
    created_at: "2023-08-01, 12:32",
    updated_at: "2023-08-01, 12:32",
    created_by: "John Doe",
    updated_by: "John Doe",
  },
  {
    header: "Invoice note",
    update: "2023-08-01, 17:11",
    created_at: "2023-08-01, 12:32",
    updated_at: "2023-08-01, 12:32",
    created_by: "John Doe",
    updated_by: "John Doe",
  },
];

const openNewNoteDialog = function () {
  addNewNoteDialog.value = true;
};
const openNewTodoDialog = function () {
  addNewTodoDialog.value = true;
};
const onUpdateInvoice = () => {
  router.push({ name: "edit-invoice" });
};
</script>
<style scoped>
div :deep(.v-label) {
  opacity: 1;
}
div :deep(.v-chip__close) {
  color: #8b8ba9;
}

.icon-button {
  width: 32px;
  height: 32px;
  max-width: 32px;
  max-height: 32px;
  min-width: 32px;
  min-height: 32px;
  padding: 0;
  border-color: #d1d1e2;
}
</style>
