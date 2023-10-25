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
      <div class="app-semibold-font font-20 blue-600">Customers</div>
      <div class="app-semibold-font font-20 dark-font">#1234</div>
    </div>
    <v-row>
      <v-col cols="12" md="5">
        <v-card class="rounded-xl pa-3">
          <v-card-title class="d-flex flex-row justify-between">
            <div class="d-flex flex-row align-center">
              <div class="me-2">
                <v-img
                  width="28"
                  height="28"
                  src="@/assets/svg/customers/information.svg"
                />
              </div>
              Information
            </div>
            <v-btn
              variant="outlined"
              class="icon-button"
              @click="onCustomerInformationDetails"
              ><v-icon color="#0d0d1e">mdi-pencil</v-icon></v-btn
            >
          </v-card-title>
          <v-card-text class="mt-5 d-flex flex-row justify-between">
            <span class="font-14 dark-font app-medium-font">Company Name</span>
            <span class="font-13 shade-font app-regular-font"
              >Company Inc.</span
            >
          </v-card-text>
          <v-card-text class="pt-1 d-flex flex-row justify-between">
            <span class="font-14 dark-font app-medium-font">Org. Number</span>
            <span class="font-13 shade-font app-regular-font">11111-11111</span>
          </v-card-text>
          <v-card-text class="pt-1 d-flex flex-row justify-between">
            <span class="font-14 dark-font app-medium-font">Website</span>
            <span class="font-13 shade-font app-regular-font">
              www.website.com
            </span>
          </v-card-text>
          <v-card-text class="pt-1 d-flex flex-row justify-between">
            <span class="font-14 dark-font app-medium-font">Phone</span>
            <span class="font-13 shade-font app-regular-font"> 1232933 </span>
          </v-card-text>
          <v-card-text class="pt-1 d-flex flex-row justify-between">
            <span class="font-14 dark-font app-medium-font">Address</span>
            <span class="font-13 shade-font app-regular-font ms-5">
              22, House Name, Street, City
            </span>
          </v-card-text>
          <v-card-text class="pt-1 d-flex flex-row justify-between">
            <span class="font-14 dark-font app-medium-font">City</span>
            <span class="font-13 shade-font app-regular-font"> Stockholm </span>
          </v-card-text>
          <v-card-text class="pt-1 d-flex flex-row justify-between">
            <span class="font-14 dark-font app-medium-font">Country</span>
            <span class="font-13 shade-font app-regular-font"> SE </span>
          </v-card-text>
        </v-card>
        <v-card class="rounded-xl pa-3 mt-6">
          <v-card-title class="d-flex flex-row justify-between">
            <div class="d-flex flex-row align-center">
              <div class="me-2">
                <v-img
                  width="28"
                  height="28"
                  src="@/assets/svg/customers/statistics.svg"
                />
              </div>
              Statistics
            </div>
          </v-card-title>
          <v-card-text class="mt-5 d-flex flex-row">
            <span class="font-14 dark-font app-medium-font"
              >Late invoices:</span
            >
            <span class="font-13 shade-font app-regular-font ms-3"
              >10(16%)</span
            >
          </v-card-text>
          <v-card-text class="pt-1 d-flex flex-row justify-between">
            <span class="font-14 dark-font app-medium-font"
              >Sum This Year (2023)</span
            >
          </v-card-text>
          <v-card-text class="pt-1 d-flex flex-row ms-4">
            <span class="font-13 dark-font app-medium-font"
              >All 3 in SEK:
            </span>
            <span class="font-13 shade-font app-regular-font ms-1">
              130300 :- (3 300 :- VAT),
            </span>
            <span class="font-13 dark-font app-medium-font">Netto: </span>
            <span class="font-13 shade-font app-regular-font ms-1">
              10 000 :-
            </span>
          </v-card-text>
          <v-card-text class="pt-1 d-flex flex-row ms-4">
            <span class="font-13 dark-font app-medium-font">2 in SEK: </span>
            <span class="font-13 shade-font app-regular-font ms-1">
              2 100 :- (300 :- VAT),
            </span>
            <span class="font-13 dark-font app-medium-font">Netto: </span>
            <span class="font-13 shade-font app-regular-font ms-1">
              1 800 :-
            </span>
          </v-card-text>
          <v-card-text class="pt-1 d-flex flex-row ms-4">
            <span class="font-13 dark-font app-medium-font">1 in EUR: </span>
            <span class="font-13 shade-font app-regular-font ms-1">
              11 000 :- (3 000 :- VAT),
            </span>
            <span class="font-13 dark-font app-medium-font">Netto: </span>
            <span class="font-13 shade-font app-regular-font ms-1">
              7 000 :-
            </span>
          </v-card-text>
          <v-card-text class="pt-1 d-flex flex-row justify-between">
            <span class="font-14 dark-font app-medium-font">Sum In Total</span>
          </v-card-text>
          <v-card-text class="pt-1 d-flex flex-row ms-4">
            <span class="font-13 dark-font app-medium-font"
              >All 3 in SEK:
            </span>
            <span class="font-13 shade-font app-regular-font ms-1">
              130300 :- (3 300 :- VAT),
            </span>
            <span class="font-13 dark-font app-medium-font">Netto: </span>
            <span class="font-13 shade-font app-regular-font ms-1">
              10 000 :-
            </span>
          </v-card-text>
          <v-card-text class="pt-1 d-flex flex-row ms-4">
            <span class="font-13 dark-font app-medium-font">2 in SEK: </span>
            <span class="font-13 shade-font app-regular-font ms-1">
              2 100 :- (300 :- VAT),
            </span>
            <span class="font-13 dark-font app-medium-font">Netto: </span>
            <span class="font-13 shade-font app-regular-font ms-1">
              1 800 :-
            </span>
          </v-card-text>
          <v-card-text class="pt-1 d-flex flex-row ms-4">
            <span class="font-13 dark-font app-medium-font">1 in EUR: </span>
            <span class="font-13 shade-font app-regular-font ms-1">
              11 000 :- (3 000 :- VAT),
            </span>
            <span class="font-13 dark-font app-medium-font">Netto: </span>
            <span class="font-13 shade-font app-regular-font ms-1">
              7 000 :-
            </span>
          </v-card-text>
        </v-card>
        <v-card class="rounded-xl pa-3 mt-6">
          <v-card-title class="d-flex flex-row justify-between">
            <div class="d-flex flex-row align-center">
              <div class="me-2">
                <v-img
                  width="28"
                  height="28"
                  src="@/assets/svg/customers/email.svg"
                />
              </div>
              Email Address
            </div>
            <v-btn variant="outlined" class="icon-button"
              ><v-icon color="#0d0d1e">mdi-plus</v-icon></v-btn
            >
          </v-card-title>
          <v-card-text class="mt-5 d-flex flex-row flex-wrap">
            <v-chip
              closable
              v-for="email in emails"
              class="mt-3 me-3 dark-font font-12 app-regular-font"
              close-icon="mdi-close-circle-outline"
            >
              {{ email }}
            </v-chip>
          </v-card-text>
        </v-card>
        <v-card class="rounded-xl pa-3 mt-6">
          <v-card-title class="d-flex flex-row justify-between">
            <div class="d-flex flex-row align-center">
              <div class="me-2">
                <v-img
                  width="28"
                  height="28"
                  src="@/assets/svg/customers/custom_fields.svg"
                />
              </div>
              Custom Fields
            </div>
            <v-btn
              variant="outlined"
              class="icon-button"
              @click="onAddNewCustomField"
              ><v-icon color="#0d0d1e">mdi-plus</v-icon></v-btn
            >
          </v-card-title>
          <v-card-text class="mt-5 d-flex flex-row justify-between">
            <v-table style="width: 100%">
              <thead>
                <tr>
                  <th
                    class="text-left font-12 app-semibold-font shade-font"
                    v-for="header in customFieldsHeaders"
                    :key="header"
                  >
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in customFields"
                  :key="item.name"
                  style="height: 36px"
                >
                  <td>
                    <span class="font-14 dark-font app-medium-font">{{
                      item.name
                    }}</span>
                  </td>
                  <td>
                    <span class="font-13 shade-font app-regular-font">
                      {{ item.value }}
                    </span>
                  </td>
                  <td style="width: 30px">
                    <v-btn
                      size="x-small"
                      flat
                      class="me-5"
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
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="7">
        <v-card class="rounded-xl pa-3">
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
                  :src="
                    tab == index ? menu.selected_icon : menu.unselected_icon
                  "
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
                <div class="d-flex flex-row justify-end mt-2">
                  <v-btn
                    color="white"
                    prepend-icon="mdi-plus"
                    rounded="lg"
                    style="
                      background: #20c39d !important;
                      color: white !important;
                      padding-left: 20px;
                      padding-right: 20px;
                      padding-top: 10px;
                      padding-bottom: 10px;
                    "
                    class="text-none"
                    @click="onNewInvoice"
                    >New Invoice</v-btn
                  >
                </div>

                <div class="d-flex flex-row align-center mt-8 mb-10 mx-4">
                  <app-data-table
                    :headers="invoiceHeaders"
                    :items="invoiceItems"
                    :checkable="false"
                    row-color="#f7f7fa"
                  />
                </div>
              </div>
              <div v-else-if="menu.title == 'Notes'">
                <div class="d-flex flex-row justify-end mt-2">
                  <v-btn
                    color="white"
                    @click="onAddNewNote"
                    prepend-icon="mdi-plus"
                    rounded="lg"
                    style="
                      background: #20c39d !important;
                      color: white !important;
                      padding-left: 20px;
                      padding-right: 20px;
                      padding-top: 10px;
                      padding-bottom: 10px;
                    "
                    class="text-none"
                    >New Note</v-btn
                  >
                </div>
                <div class="d-flex flex-row align-center mt-8 mb-10 mx-4">
                  <app-data-table
                    :headers="noteHeaders"
                    :items="noteItems"
                    :checkable="false"
                    row-color="#f7f7fa"
                  >
                    <template v-slot:action>
                      <update-header-menu />
                    </template>
                  </app-data-table>
                </div>
              </div>
              <div v-else-if="menu.title == `To-do's`" class="px-2">
                <div class="d-flex flex-row align-center mt-8">
                  <div class="flex-grow me-4 ms-2">
                    <search-field />
                  </div>
                  <div style="width: 130px">
                    <v-btn
                      color="white"
                      prepend-icon="mdi-plus"
                      rounded="lg"
                      width="100%"
                      style="
                        background: #20c39d !important;
                        color: white !important;
                        padding-left: 20px;
                        padding-right: 20px;
                        padding-top: 10px;
                        padding-bottom: 10px;
                      "
                      class="text-none"
                      @click="onAddNewTodo"
                    >
                      New To-do
                    </v-btn>
                  </div>
                </div>
                <div class="d-flex flex-row align-center mt-8 mb-10">
                  <todo-category-list>
                    <template v-slot:action>
                      <todo-details-menu />
                    </template>
                  </todo-category-list>
                </div>
              </div>
              <div v-else-if="menu.title == 'Time Report'">
                <div class="d-flex flex-row justify-end mt-2">
                  <v-btn
                    color="white"
                    @click="onAddNewReport"
                    prepend-icon="mdi-plus"
                    rounded="lg"
                    style="
                      background: #20c39d !important;
                      color: white !important;
                      padding-left: 20px;
                      padding-right: 20px;
                      padding-top: 10px;
                      padding-bottom: 10px;
                    "
                    class="text-none"
                    >New Report</v-btn
                  >
                </div>

                <div class="d-flex flex-row align-center mt-8 mb-10 mx-4">
                  <app-data-table
                    :headers="reportHeaders"
                    :items="reportItems"
                    :checkable="false"
                    row-color="#f7f7fa"
                  >
                    <template v-slot:action>
                      <report-details-menu />
                    </template>
                  </app-data-table>
                </div>
              </div>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
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
import notesIcon from "@/assets/svg/customers/notes.svg";
import todosIcon from "@/assets/svg/customers/todos.svg";
import timeReportIcon from "@/assets/svg/customers/time_report_selected.svg";
import invoiceUnselectedIcon from "@/assets/svg/customers/invoice_unselected.svg";
import notesUnselectedIcon from "@/assets/svg/customers/notes_unselected.svg";
import todosUnselectedIcon from "@/assets/svg/customers/todos_unselected.svg";
import timeReportUnselectedIcon from "@/assets/svg/customers/time_report_unselected.svg";
import UpdateHeaderMenu from "./CustomerUpdateHeaderMenu.vue";
import AddNoteDialog from "./CustomerAddNoteDialog.vue";
import AddCustomFieldDialog from "./CustomerAddCustomFieldDialog.vue";
import AddReportDialog from "./CustomerAddTimeReportDialog.vue";
import TodoDetailsMenu from "./CustomerTodoDetailsMenu.vue";
import ReportDetailsMenu from "./CustomerTimeReportDetailsMenu.vue";
import TodoCategoryList from "../default/TodoCategoryList.vue";
import SearchField from "../default/SearchField.vue";
import AppDataTable from "../default/AppDataTable.vue";
import NewTodoItemDialog from "../todos/NewTodoItemDialog.vue";

const tab = ref(0);
const addNewNoteDialog = ref(false);
const addNewCustomFieldDialog = ref(false);
const addNewReportDialog = ref(false);
const addNewTodoDialog = ref(false);
const addNewInvoiceDialog = ref(false);
const emails = ["test@email.com", "user@email.com", "customer@email.com"];

const router = useRouter();
const onBack = () => {
  router.push({ name: "customers" });
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
  {
    title: "Time Report",
    selected_icon: timeReportIcon,
    unselected_icon: timeReportUnselectedIcon,
  },
];

const invoiceHeaders = [
  { title: "#", key: "id", align: "left" },
  { title: "Amount", key: "amount" },
  { title: "Currency", key: "currency" },
  { title: "Due", key: "due" },
  { title: "Invoice", key: "date" },
  { title: "Sent", key: "sent", style: "checkbox" },
  { title: "Paid", key: "paid", style: "checkbox" },
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

const noteHeaders = [
  { title: "Header", key: "header", align: "left", style: "bold" },
  { title: "Updated at", key: "updated_at", align: "left" },
  { title: "", key: "action" },
];

const noteItems = [
  {
    header: 123,
    updated_at: "2023-05-01, 15:55",
  },
  {
    header: 123,
    updated_at: "2023-05-01, 15:55",
  },
  {
    header: 123,
    updated_at: "2023-05-01, 15:55",
  },
  {
    header: 123,
    updated_at: "2023-05-01, 15:55",
  },
  {
    header: 123,
    updated_at: "2023-05-01, 15:55",
  },
];

const reportHeaders = [
  { title: "Hourly Rate", key: "rate", align: "left", style: "bold" },
  { title: "Start Time", key: "start_time" },
  { title: "End Time", key: "end_time" },
  { title: "Invoiced", key: "invoiced", style: "checkbox" },
  { title: "", key: "action" },
];

const reportItems = reactive([
  {
    rate: "$60",
    start_time: "2023-07-01, 15:55",
    end_time: "2023-07-01, 15:55",
    invoiced: false,
  },
  {
    rate: "$60",
    start_time: "2023-07-01, 15:55",
    end_time: "2023-07-01, 15:55",
    invoiced: true,
  },
  {
    rate: "$60",
    start_time: "2023-07-01, 15:55",
    end_time: "2023-07-01, 15:55",
    invoiced: false,
  },
  {
    rate: "$60",
    start_time: "2023-07-01, 15:55",
    end_time: "2023-07-01, 15:55",
    invoiced: true,
  },
  {
    rate: "$60",
    start_time: "2023-07-01, 15:55",
    end_time: "2023-07-01, 15:55",
    invoiced: false,
  },
]);

const onAddNewNote = function () {
  addNewNoteDialog.value = true;
};
const onAddNewTodo = () => {
  addNewTodoDialog.value = true;
};
const onCustomerInformationDetails = () => {
  router.push({ name: "new-customer" });
};
const onNewInvoice = () => {
  router.push({ name: "new-invoice" });
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
