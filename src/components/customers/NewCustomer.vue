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
      <div class="app-semibold-font font-28 dark-font">New Customers</div>
      <div class="d-flex flex-row align-center ms-10">
        <v-radio-group hide-details color="#20C39D" v-model="customerType">
          <div class="d-flex flex-row">
            <v-radio value="company">
              <template v-slot:label>
                <span class="font-14 app-regular-font dark-font">
                  Company
                </span>
              </template>
            </v-radio>
            <v-radio value="person">
              <template v-slot:label>
                <span
                  class="font-14 app-regular-font dark-font"
                  style="width: 200px"
                >
                  Private Person
                </span>
              </template>
            </v-radio>
          </div>
        </v-radio-group>
      </div>
    </div>
    <v-card color="white" class="px-8 pt-4 pb-8 rounded-xl">
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
              :src="index == tab ? menu.selected_icon : menu.unselected_icon"
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
          <div v-if="menu.title == 'General'">
            <div
              class="d-flex flex-row align-center mt-8"
              v-if="customerType == 'company'"
            >
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Company Name
              </div>
              <div style="width: 336px">
                <v-text-field
                  placeholder="Company Name"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </div>
            </div>
            <div
              class="d-flex flex-row align-center mt-8"
              v-if="customerType == 'company'"
            >
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Organization Number
              </div>
              <div style="width: 336px">
                <v-text-field
                  placeholder="Organization Number"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </div>
            </div>
            <div
              class="d-flex flex-row align-center mt-8"
              v-if="customerType == 'company'"
            >
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                VAT Number
              </div>
              <div style="width: 336px">
                <v-text-field
                  placeholder="VAT Number"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </div>
            </div>
            <div
              class="d-flex flex-row align-center mt-8"
              v-if="customerType == 'company'"
            >
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Website
              </div>
              <div style="width: 336px">
                <v-text-field
                  placeholder="Website"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </div>
            </div>
            <div
              class="d-flex flex-row align-center mt-8"
              v-if="customerType == 'person'"
            >
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                First Name
              </div>
              <div style="width: 336px">
                <v-text-field
                  placeholder="First Name"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </div>
            </div>
            <div
              class="d-flex flex-row align-center mt-8"
              v-if="customerType == 'person'"
            >
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Last Name
              </div>
              <div style="width: 336px">
                <v-text-field
                  placeholder="Last Name"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </div>
            </div>
            <div
              class="d-flex flex-row align-center mt-8"
              v-if="customerType == 'person'"
            >
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Personal Number
              </div>
              <div style="width: 336px">
                <v-text-field
                  placeholder="Personal Number"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </div>
            </div>
            <div class="d-flex flex-row align-center mt-8">
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Customer Number
              </div>
              <div style="width: 336px">
                <v-text-field
                  placeholder="Customer Number"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </div>
            </div>
            <div class="d-flex flex-row align-center mt-8">
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Category
              </div>
              <div style="width: 336px">
                <v-select
                  placeholder="Category"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  :items="['Category', 'Category 2']"
                />
              </div>
              <div>
                <v-btn
                  variant="text"
                  prepend-icon="mdi-plus"
                  class="text-none app-medium-font font-14 ms-2"
                  color="#20C39D"
                  rounded="lg"
                  @click="onAddNewCategory"
                >
                  Add New
                </v-btn>
              </div>
            </div>
          </div>
          <div v-else-if="menu.title == 'Address'">
            <div class="d-flex flex-row align-center mt-8 flex-wrap">
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Street Address
              </div>
              <div style="width: 336px">
                <v-text-field
                  placeholder="Street Address"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </div>
              <div class="d-flex flex-row align-center ms-4">
                <v-radio-group
                  hide-details
                  color="#20C39D"
                  v-model="addressType"
                >
                  <div class="d-flex flex-row">
                    <v-radio value="billing_address">
                      <template v-slot:label>
                        <span class="font-14 app-regular-font dark-font">
                          Billing Address
                        </span>
                      </template>
                    </v-radio>
                    <v-radio value="shipping_address">
                      <template v-slot:label>
                        <span
                          class="font-14 app-regular-font dark-font"
                          style="width: 200px"
                        >
                          Shipping Address
                        </span>
                      </template>
                    </v-radio>
                  </div>
                </v-radio-group>
              </div>
            </div>
            <div class="d-flex flex-row align-center mt-8">
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                City
              </div>
              <div style="width: 336px">
                <v-text-field
                  placeholder="City"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </div>
            </div>
            <div class="d-flex flex-row align-center mt-8">
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Zip Code
              </div>
              <div style="width: 336px">
                <v-text-field
                  placeholder="Zip Code"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </div>
            </div>
            <div class="d-flex flex-row align-center mt-8 mb-6">
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Country
              </div>
              <div style="width: 336px">
                <v-text-field
                  placeholder="Country"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </div>
            </div>
          </div>
          <div v-else-if="menu.title == 'Contact'">
            <div class="d-flex flex-row align-center mt-8">
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Phone
              </div>
              <div style="width: 336px">
                <v-text-field
                  placeholder="Phone"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </div>
            </div>
            <div class="d-flex flex-row align-center mt-8">
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Mobile
              </div>
              <div style="width: 336px">
                <v-text-field
                  placeholder="Mobile"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </div>
            </div>
            <div class="d-flex flex-row mt-8 mb-10">
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font mt-3"
              >
                Email Address (Up to 3)
              </div>
              <div style="width: 336px">
                <v-text-field
                  placeholder="Enter Email"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
                <div>
                  <v-chip
                    closable
                    v-for="email in emails"
                    class="mt-3 me-3 dark-font font-12 app-regular-font"
                    close-icon="mdi-close-circle-outline"
                  >
                    {{ email }}
                  </v-chip>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="menu.title == 'Invoice'">
            <div class="d-flex flex-row align-center mt-8">
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Terms of payment
              </div>
              <div style="width: 336px">
                <v-select
                  placeholder="Terms of payment"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  :items="['Terms of payment', 'Terms of payment2']"
                />
              </div>
              <div>
                <v-btn
                  variant="text"
                  prepend-icon="mdi-plus"
                  class="text-none app-medium-font font-14 ms-2"
                  color="#20C39D"
                  rounded="lg"
                  @click="onAddNewPaymentTerms"
                >
                  Add New
                </v-btn>
              </div>
            </div>
            <div class="d-flex flex-row align-center mt-8">
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Price list
              </div>
              <div style="width: 336px">
                <v-select
                  placeholder="Price list"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  :items="['Price list', 'Price list2']"
                />
              </div>
              <div>
                <v-btn
                  variant="text"
                  prepend-icon="mdi-plus"
                  class="text-none app-medium-font font-14 ms-2"
                  color="#20C39D"
                  rounded="lg"
                  @click="onAddNewPriceList"
                >
                  Add New
                </v-btn>
              </div>
            </div>
            <div class="d-flex flex-row align-center mt-8">
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Currency
              </div>
              <div style="width: 336px">
                <v-select
                  placeholder="Currency"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  :items="['Currency', 'Currency2']"
                />
              </div>
              <div>
                <v-btn
                  variant="text"
                  prepend-icon="mdi-plus"
                  class="text-none app-medium-font font-14 ms-2"
                  color="#20C39D"
                  rounded="lg"
                  @click="onAddNewCurrency"
                >
                  Add New
                </v-btn>
              </div>
            </div>
            <div class="d-flex flex-row align-center mt-8">
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Reminder flow
              </div>
              <div style="width: 336px">
                <v-select
                  placeholder="Reminder flow"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  :items="['Reminder flow', 'Reminder flow 2']"
                />
              </div>
              <div>
                <v-btn
                  variant="text"
                  prepend-icon="mdi-plus"
                  class="text-none app-medium-font font-14 ms-2"
                  color="#20C39D"
                  rounded="lg"
                  @click="onAddNewReminderFlow"
                >
                  Add New
                </v-btn>
              </div>
            </div>
            <div class="d-flex flex-row align-center mt-8">
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Discount type
              </div>
              <div style="width: 336px">
                <v-select
                  placeholder="Discount type"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  :items="['Discount type', 'Discount typ2']"
                />
              </div>
            </div>
            <div class="d-flex flex-row align-center mt-8">
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Discount
              </div>
              <div style="width: 336px">
                <v-text-field
                  placeholder="Discount"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </div>
            </div>
            <div class="d-flex flex-row align-center mt-8 mb-3">
              <div
                style="width: 240px"
                class="font-14 app-regular-font dark-font"
              >
                Send invoices with
              </div>
              <div style="width: 336px">
                <v-select
                  placeholder="Send invoices with"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  :items="['Send invoice with', 'Send invoice with 2']"
                />
              </div>
            </div>
          </div>
        </v-window-item>
      </v-window>
    </v-card>
    <div class="d-flex flex-row justify-end mt-5">
      <v-btn
        color="white"
        @click="onBack"
        prepend-icon="mdi-check"
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
        >Save</v-btn
      >
    </div>
    <new-customer-category-dialog
      :dialog="addNewCategoryDialog"
      @update:dialog="(val) => (addNewCategoryDialog = val)"
    />
    <new-currency-dialog
      :dialog="addNewCurrencyDialog"
      @update:dialog="(val) => (addNewCurrencyDialog = val)"
    />
    <new-payment-terms-dialog
      :dialog="addNewPaymentTermsDialog"
      @update:dialog="(val) => (addNewPaymentTermsDialog = val)"
    />
    <new-price-list-dialog
      :dialog="addNewPriceListDialog"
      @update:dialog="(val) => (addNewPriceListDialog = val)"
    />
    <new-reminder-flow-dialog
      :dialog="addNewReminderFlowDialog"
      @update:dialog="(val) => (addNewReminderFlowDialog = val)"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import generalSelectedIcon from "@/assets/svg/customers/general_selected.svg";
import addressSelectedIcon from "@/assets/svg/customers/address_selected.svg";
import contactSelectedIcon from "@/assets/svg/customers/contact_selected.svg";
import invoiceSelectedIcon from "@/assets/svg/customers/invoice_selected.svg";
import generalUnselectedIcon from "@/assets/svg/customers/general_unselected.svg";
import addressUnselectedIcon from "@/assets/svg/customers/address_unselected.svg";
import contactUnselectedIcon from "@/assets/svg/customers/contact_unselected.svg";
import invoiceUnselectedIcon from "@/assets/svg/customers/invoice_unselected.svg";
import NewCustomerCategoryDialog from "./NewCustomerCategoryDialog.vue";
import NewCurrencyDialog from "./NewCurrencyDialog.vue";
import NewPaymentTermsDialog from "./NewPaymentTermsDialog.vue";
import NewPriceListDialog from "./NewPriceListDialog.vue";
import NewReminderFlowDialog from "./NewReminderFlowDialog.vue";

const tab = ref(0);
const customerType = ref("company");

const addNewCategoryDialog = ref(false);
const addNewCurrencyDialog = ref(false);
const addNewPaymentTermsDialog = ref(false);
const addNewPriceListDialog = ref(false);
const addNewReminderFlowDialog = ref(false);

const emails = ["test@email.com", "user@email.com", "customer@email.com"];
const addressType = ref("billing_address");
const router = useRouter();
const onBack = function () {
  router.push({ name: "customers" });
};

const onAddNewCategory = function () {
  addNewCategoryDialog.value = true;
};
const onAddNewCurrency = () => {
  addNewCurrencyDialog.value = true;
};
const onAddNewPaymentTerms = () => {
  addNewPaymentTermsDialog.value = true;
};
const onAddNewPriceList = () => {
  addNewPriceListDialog.value = true;
};
const onAddNewReminderFlow = () => {
  addNewReminderFlowDialog.value = true;
};

const menus = [
  {
    title: "General",
    selected_icon: generalSelectedIcon,
    unselected_icon: generalUnselectedIcon,
  },
  {
    title: "Address",
    selected_icon: addressSelectedIcon,
    unselected_icon: addressUnselectedIcon,
  },
  {
    title: "Contact",
    selected_icon: contactSelectedIcon,
    unselected_icon: contactUnselectedIcon,
  },
  {
    title: "Invoice",
    selected_icon: invoiceSelectedIcon,
    unselected_icon: invoiceUnselectedIcon,
  },
];
</script>
<style scoped>
div :deep(.v-label) {
  opacity: 1;
}
div :deep(.v-chip__close) {
  color: #8b8ba9;
}
</style>
