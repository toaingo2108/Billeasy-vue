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
        >
          Back
        </v-btn>
      </div>
      <div class="app-semibold-font font-28 dark-font">
        {{ connected ? "Fortnox Settings" : "Visma eAccount Settings" }}
      </div>
      <span
        class="font-12 forest-font app-regular-font ms-4"
        v-if="connected"
        style="
          background-color: #eafaf1;
          border-color: #22b762;
          border-radius: 100px;
          border-style: solid;
          border-width: 1px;
          padding-left: 15px;
          padding-right: 15px;
          padding-top: 4px;
          padding-bottom: 4px;
        "
      >
        Connected
      </span>
      <v-spacer />
      <v-btn
        rounded="lg"
        @click="onConnectVisma"
        color="#F58D13"
        class="text-none font-14 app-medium-font"
        v-if="!connected"
      >
        Connect to Visma
      </v-btn>
    </div>
    <v-card color="white" class="px-8 pt-4 pb-8 rounded-xl">
      <v-card-title class="d-flex flex-row align-center ps-0">
        <div>
          <v-img
            width="28"
            height="28"
            src="@/assets/svg/settings/data_transfer.svg"
          />
        </div>
        <span class="font-20 dark-font app-semibold-font ms-2">
          Data Transfer
        </span>
        <v-spacer />
        <span class="font-14 app-medium-font dark-font me-2"
          >From Billeasy</span
        >
        <div>
          <v-switch
            hide-details
            v-model="fromBilleasy"
            :style="`--v-theme-surface-variant: ${
              fromBilleasy ? '178,178,203' : '32,195,157'
            }`"
          />
        </div>
        <span class="font-14 app-medium-font dark-font ms-2">To Billeasy</span>
      </v-card-title>
      <v-row class="mt-2">
        <v-col cols="12" md="3" v-if="!fromBilleasy">
          <span class="font-12 shade-font app-semibold-font">INVOICES</span>
          <span
            class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1 mt-6"
          >
            <div>
              <app-checkbox v-model="transferInvoices" class="me-2" />
              Transfer invoices
            </div>
            <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
          </span>
          <div class="mt-6">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Transfer invoices with invoice date<br />from
              <v-icon color="#8B8BA9" class="ms-2">
                mdi-help-circle-outline
              </v-icon>
            </span>
            <v-text-field
              placeholder="Invoice Date"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </div>
          <div class="mt-6">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Transfer invoices as
              <v-icon color="#8B8BA9" class="ms-2"
                >mdi-help-circle-outline
              </v-icon>
            </span>
            <v-select
              placeholder="Invoice Date"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['Invoices', 'Invoices 2']"
            />
          </div>
          <span
            class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1 mt-6"
          >
            <div>
              <app-checkbox v-model="bookKeepInvoices" class="me-2" />
              Book keep invoices
            </div>
            <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
          </span>
        </v-col>
        <v-col cols="12" md="3" v-if="!fromBilleasy">
          <span class="font-12 shade-font app-semibold-font">PAYMENTS</span>
          <span
            class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1 mt-6"
          >
            <div>
              <app-checkbox v-model="transferPayments" class="me-2" />
              Transfer payments
            </div>
            <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
          </span>
          <div class="mt-6">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Transfer payments with payment<br />date from
              <v-icon color="#8B8BA9" class="ms-2"
                >mdi-help-circle-outline
              </v-icon>
            </span>
            <v-text-field
              placeholder="Invoice Date"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <span class="font-12 shade-font app-semibold-font">CUSTOMERS</span>
          <span
            class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1 mt-6"
          >
            <div>
              <app-checkbox v-model="transferCustomers" class="me-2" />
              Transfer customers
            </div>
            <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
          </span>
          <div class="mt-6" v-if="!fromBilleasy">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Transfer customers created since
              <v-icon color="#8B8BA9" class="ms-2"
                >mdi-help-circle-outline
              </v-icon>
            </span>
            <v-text-field
              placeholder="Invoice Date"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <span class="font-12 shade-font app-semibold-font">PRODUCTS</span>
          <span
            class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1 mt-6"
          >
            <div>
              <app-checkbox v-model="transferProducts" class="me-2" />
              Transfer products
            </div>
            <v-icon color="#8B8BA9">mdi-help-circle-outline </v-icon>
          </span>
          <div class="mt-6" v-if="!fromBilleasy">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Transfer products created since
              <v-icon color="#8B8BA9" class="ms-2"
                >mdi-help-circle-outline
              </v-icon>
            </span>
            <v-text-field
              placeholder="Invoice Date"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-card rounded="xl" class="mt-4 px-8 pt-4 pb-8">
      <v-card-title class="d-flex flex-row align-center ps-0">
        <div>
          <v-img
            width="28"
            height="28"
            src="@/assets/svg/settings/accounting_account.svg"
          />
        </div>
        <span class="font-20 dark-font app-semibold-font ms-2">
          Accounting Accounts
        </span>
      </v-card-title>
      <v-card-text class="d-flex flex-row align-center mt-4 ps-0">
        <span class="font-14 dark-font app-semibold-font" style="width: 160px"
          >Default Accounts</span
        >
        <v-divider />
      </v-card-text>
      <v-row>
        <v-col cols="12" md="3">
          <div class="mt-4">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Default sales account SE 25%
            </span>
            <v-select
              placeholder="Invoice Date"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['3001 - SE sales 25%', '3001 - SE sales 50%']"
            />
          </div>
          <div class="mt-6">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Default sales account SE 12%
            </span>
            <v-select
              placeholder="Invoice Date"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['3001 - SE sales 25%', '3001 - SE sales 50%']"
            />
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="mt-4">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Default sales account SE 6%
            </span>
            <v-select
              placeholder="Invoice Date"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['3001 - SE sales 25%', '3001 - SE sales 50%']"
            />
          </div>
          <div class="mt-6">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Default sales account SE 0%
            </span>
            <v-select
              placeholder="Invoice Date"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['3001 - SE sales 25%', '3001 - SE sales 50%']"
            />
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="mt-4">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Default sales account EU
            </span>
            <v-select
              placeholder="Invoice Date"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['3001 - SE sales 25%', '3001 - SE sales 50%']"
            />
          </div>
          <div class="mt-6">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Default sales account Export
            </span>
            <v-select
              placeholder="Invoice Date"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['3001 - SE sales 25%', '3001 - SE sales 50%']"
            />
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="mt-4">
            <span
              class="font-13 app-medium-font dark-font d-flex flex-row align-center justify-between mb-1"
            >
              Default payment account
            </span>
            <v-select
              placeholder="Invoice Date"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['3001 - SE sales 25%', '3001 - SE sales 50%']"
            />
          </div>
        </v-col>
      </v-row>
      <v-card-text
        class="d-flex flex-row align-center mt-6 ps-0 pb-0"
        v-if="!fromBilleasy"
      >
        <span class="font-14 dark-font app-semibold-font" style="width: 160px">
          Custom Accounts
        </span>
        <v-divider />
      </v-card-text>
      <v-card-text
        class="mt-5 d-flex flex-row justify-between pt-0 px-0"
        v-if="!fromBilleasy"
      >
        <v-table style="width: 100%">
          <thead>
            <tr>
              <th
                class="text-left font-12 app-semibold-font shade-font px-1 white-bottom"
                style="height: 24px"
                v-for="header in productListsHeaders"
                :key="header"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in productLists"
              :key="index"
              style="height: 36px"
            >
              <td class="ps-0 white-bottom">
                <v-select
                  placeholder="Country"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.country"
                  :items="['SE', 'EU', 'Export', 'US', 'DK']"
                />
              </td>
              <td class="ps-0 white-bottom">
                <v-select
                  placeholder="VAT RAte"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.vat_rate"
                  :items="['25.00%', '50.00%']"
                />
              </td>
              <td class="ps-0 white-bottom">
                <v-select
                  placeholder="Account Type"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.account_type"
                  :items="['Sales', 'Sales 2']"
                />
              </td>
              <td class="ps-0 white-bottom">
                <v-select
                  placeholder="Customer Type"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.customer_type"
                  :items="['Private', 'Public']"
                />
              </td>
              <td class="ps-0 white-bottom">
                <v-select
                  placeholder="Account Number"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.account_number"
                  :items="['3001 - SE Sales 25%', '3001 - SE Sales 50%']"
                />
              </td>
              <td class="px-0 white-bottom">
                <v-btn size="small" flat class="me-5" icon>
                  <v-icon color="#8B8BA9">mdi-close</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
      <v-card-actions class="mb-4 ps-0" v-if="!fromBilleasy">
        <v-btn
          color="#20C39D"
          prepend-icon="mdi-plus"
          rounded="lg"
          style="
            color: #20c39d !important;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 7px;
            padding-bottom: 7px;
          "
          class="text-none"
          variant="text"
          >Add New Account</v-btn
        >
      </v-card-actions>
    </v-card>
    <div class="d-flex flex-row mt-5 justify-end">
      <v-btn
        color="#20c39d"
        @click="onBack"
        rounded="lg"
        style="
          /* background: #20c39d !important; */
          border-color: #20c39d !important;
          padding-left: 20px;
          padding-right: 20px;
          padding-top: 10px;
          padding-bottom: 10px;
          color: #0d0d1e;
        "
        class="text-none"
        flat
        variant="outlined"
        >Cancel</v-btn
      >
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
          padding-top: 5px;
          padding-bottom: 5px;
        "
        class="text-none ms-2 font-14 app-medium-font"
        flat
        >Save</v-btn
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import generalIcon from "@/assets/svg/customers/general.svg";
import addressIcon from "@/assets/svg/customers/address.svg";
import contactIcon from "@/assets/svg/customers/contact.svg";
import invoiceIcon from "@/assets/svg/customers/invoice.svg";
import AppCheckbox from "@/components/default/AppCheckbox.vue";

import { useDisplay } from "vuetify";
const { mdAndUp } = useDisplay();

const fromBilleasy = ref(false);
const paymentMethods = ["Swish", "Bankgiro"];

const router = useRouter();
const onBack = function () {
  // router.back();
  router.push({ name: "settings" });
};

const connected = ref(false);
const transferInvoices = ref(false);
const bookKeepInvoices = ref(false);
const transferPayments = ref(false);
const transferCustomers = ref(false);
const transferProducts = ref(false);

const onConnectVisma = function () {
  connected.value = true;
};

const menus = [
  {
    title: "General",
    icon: generalIcon,
  },
  {
    title: "Address",
    icon: addressIcon,
  },
  {
    title: "Contact",
    icon: contactIcon,
  },
  {
    title: "Invoice",
    icon: invoiceIcon,
  },
];

const productListsHeaders = [
  "COUNTRY",
  "VAT RATE",
  "ACCOUNT TYPE",
  "CUSTOMER TYPE",
  "ACCOUNT NUMBER",
  "",
];
const productLists = [
  {
    country: "SE",
    vat_rate: "25.00%",
    account_type: "Sales",
    customer_type: "Private",
    account_number: "3001 - SE sales 25%",
  },
  {
    country: "EU",
    vat_rate: "25.00%",
    account_type: "Sales",
    customer_type: "Private",
    account_number: "3001 - SE sales 25%",
  },
  {
    country: "Export",
    vat_rate: "25.00%",
    account_type: "Sales",
    customer_type: "Private",
    account_number: "3001 - SE sales 25%",
  },
  {
    country: "US",
    vat_rate: "25.00%",
    account_type: "Sales",
    customer_type: "Private",
    account_number: "3001 - SE sales 25%",
  },
  {
    country: "DK",
    vat_rate: "25.00%",
    account_type: "Sales",
    customer_type: "Private",
    account_number: "3001 - SE sales 25%",
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

@media (max-width: 960px) {
  .five-row {
    width: 100%;
  }
}
@media (min-width: 960px) {
  .five-row {
    width: 20%;
    padding-left: 10px;
    padding-right: 10px;
  }
}

.white-bottom {
  border-bottom: 1px solid #0000 !important;
}
</style>
