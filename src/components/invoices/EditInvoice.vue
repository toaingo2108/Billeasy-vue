<template>
  <div
    class="w-100 h-100 d-flex flex-column"
    :class="mdAndUp ? 'pa-8' : 'py-8 ps-8 pe-15'"
  >
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
      <div class="app-semibold-font font-28 dark-font">Edit Invoice</div>
    </div>
    <v-card color="white" class="px-8 pt-4 pb-8 rounded-xl">
      <div class="d-flex flex-row flex-wrap">
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font">Customer</span>
          <v-select
            placeholder="Customer"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Customer', 'Customer2']"
          />
        </div>
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font"
            >Invoice template</span
          >
          <v-select
            placeholder="Invoice template"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Standard', 'Special']"
          />
        </div>
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font">Reminder flow</span>
          <v-select
            placeholder="Remind"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Remind', 'Remind2']"
          />
        </div>
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font">Invoice Number</span>
          <v-text-field
            placeholder="Invoice Number"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font">Time report</span>
          <v-select
            placeholder="Time report"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Time report', 'Time report2']"
          />
        </div>
      </div>
      <div class="d-flex flex-row mt-4 flex-wrap">
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font"
            >Buyer's Order Number</span
          >
          <v-text-field
            placeholder="Enter Text"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font">Reference 1</span>
          <v-text-field
            placeholder="Enter text"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font">Reference 2</span>
          <v-text-field
            placeholder="Enter Text"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font">Your Reference</span>
          <v-text-field
            placeholder="Enter Text"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font">Our Reference</span>
          <v-text-field
            placeholder="Enter Text"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
      </div>
      <div class="d-flex flex-row mt-4 flex-wrap">
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font">Extra Field</span>
          <v-text-field
            placeholder="Enter Text"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font">Extra Field</span>
          <v-text-field
            placeholder="Enter Text"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font">Extra Field</span>
          <v-text-field
            placeholder="Enter Text"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font">Extra Field</span>
          <v-text-field
            placeholder="Enter Text"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font">Extra Field</span>
          <v-text-field
            placeholder="Enter Text"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
      </div>
    </v-card>
    <v-row>
      <v-col cols="12" md="6" :class="mdAndUp ? 'h-100' : ''">
        <div class="pt-4" :class="mdAndUp ? 'h-100' : ''">
          <v-card class="rounded-xl pa-6" height="100%">
            <v-row>
              <v-col cols="12" md="4">
                <span class="font-13 app-medium-font dark-font"
                  >Invoice Date</span
                >
                <v-text-field
                  placeholder="Invoice Date"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </v-col>
              <v-col cols="12" md="4">
                <span class="font-13 app-medium-font dark-font"
                  >Payment Terms</span
                >
                <v-select
                  placeholder="Payment Terms"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  :items="['30', '40', '50']"
                />
              </v-col>
              <v-col cols="12" md="4">
                <span class="font-13 app-medium-font dark-font">Due Date</span>
                <v-text-field
                  placeholder="Due Date"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </v-col>
              <v-col cols="12" md="4">
                <span class="font-13 app-medium-font dark-font"
                  >Period Start</span
                >
                <v-text-field
                  placeholder="Period Start"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </v-col>
              <v-col cols="12" md="4">
                <span class="font-13 app-medium-font dark-font"
                  >Period End</span
                >
                <v-text-field
                  placeholder="Period End"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </v-col>
              <v-col cols="12" md="4" class="mt-7">
                <app-checkbox v-model="priceVat" class="me-2 ms-3" />
                <span class="font-14 app-regular-font dark-font">
                  Prices Incl. VAT
                </span>
              </v-col>
              <v-col cols="12" md="4">
                <span class="font-13 app-medium-font dark-font">Currency</span>
                <v-select
                  placeholder="Currency"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  :items="['EUR', 'USD']"
                />
              </v-col>
              <v-col cols="12" md="4">
                <span class="font-13 app-medium-font dark-font"
                  >Price List</span
                >
                <v-select
                  placeholder="Price List"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  :items="['A', 'B', 'C']"
                />
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" md="6" :class="mdAndUp ? 'h-100' : ''">
        <div class="pt-4" :class="mdAndUp ? 'h-50' : ''">
          <v-card class="rounded-xl pa-2" height="100%">
            <v-card-text>
              <span class="font-13 app-medium-font dark-font"
                >Invoice Text</span
              >
              <v-textarea
                bg-color="white"
                placeholder="Enter text..."
                variant="outlined"
                rounded="lg"
                hide-details
                rows="2"
              />
            </v-card-text>
          </v-card>
        </div>
        <div class="pt-4" :class="mdAndUp ? 'h-50' : ''">
          <v-card class="rounded-xl pa-2 mt-0" height="100%">
            <v-card-text>
              <span class="font-13 app-medium-font dark-font"
                >Payment Methods</span
              >
              <v-select
                placeholder="Enter method..."
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['Swish', 'Bankgiro']"
              />
              <div>
                <v-chip
                  v-for="payment in paymentMethods"
                  :key="payment"
                  closable
                  class="mt-2 me-2"
                  >{{ payment }}</v-chip
                >
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-card rounded="xl" class="mt-4">
      <v-card-text class="mt-5 d-flex flex-row justify-between">
        <v-table style="width: 100%">
          <thead>
            <tr>
              <th
                class="text-left font-14 app-semibold-font dark-font"
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
              <td class="pe-0 white-bottom">
                <v-icon>mdi-unfold-more-horizontal</v-icon>
              </td>
              <td class="ps-0 white-bottom">
                <v-select
                  placeholder="Enter Text"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.product"
                  :items="['Enter Text', 'Enter Text2']"
                />
              </td>
              <td class="ps-0 white-bottom">
                <v-text-field
                  placeholder="Enter Text"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.description"
                />
              </td>
              <td class="ps-0 white-bottom">
                <v-text-field
                  placeholder="Enter Text"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.quantity"
                />
              </td>
              <td class="ps-0 white-bottom">
                <v-select
                  placeholder="Unit"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.unit"
                  :items="['Pcs', 'Pcs2']"
                />
              </td>
              <td class="ps-0 white-bottom">
                <v-text-field
                  placeholder="Price"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.price"
                />
              </td>
              <td class="ps-0 white-bottom">
                <v-select
                  placeholder="VAT Rate"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.rate"
                  :items="['25%', '50%', '100%']"
                />
              </td>
              <td class="ps-0 white-bottom">
                <v-text-field
                  placeholder="Enter Text"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.disc"
                />
              </td>
              <td class="ps-0 white-bottom">
                <v-select
                  placeholder="Enter Text"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.disc_type"
                  :items="['%', '%%']"
                />
              </td>
              <td class="ps-0 white-bottom">
                <v-text-field
                  placeholder="Enter Text"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.total"
                  disabled
                />
              </td>
              <td class="px-0 white-bottom">
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
                  <invoice-products-row-menu />
                </v-btn>
              </td>
            </tr>
            <tr>
              <td class="pe-0">
                <v-icon>mdi-unfold-more-horizontal</v-icon>
              </td>
              <td colspan="10" class="ps-0">
                <v-text-field
                  placeholder="Enter Text"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
      <v-card-text>
        <v-divider />
      </v-card-text>
      <v-card-actions class="mx-4 mb-4">
        <v-btn
          color="white"
          @click="onBack"
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
          class="text-none"
          >New Invoice Row</v-btn
        >
        <v-btn
          @click="onBack"
          prepend-icon="mdi-plus"
          rounded="lg"
          style="
            color: #0d0d1e !important;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 7px;
            padding-bottom: 7px;
            border-color: #20c39d;
          "
          class="text-none ms-2"
          variant="outlined"
          >New Text Row</v-btn
        >
      </v-card-actions>
    </v-card>
    <v-row class="mt-2">
      <v-col cols="12" md="7">
        <v-card class="rounded-xl pa-6" height="100%">
          <v-row>
            <v-col cols="12" md="4">
              <span class="font-13 app-medium-font dark-font"
                >Discount type</span
              >
              <v-select
                placeholder="Percent"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['Percent', 'Percent 2']"
              />
            </v-col>
            <v-col cols="12" md="4">
              <span class="font-13 app-medium-font dark-font">Discount</span>
              <v-text-field
                placeholder="Discount"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </v-col>
            <v-col cols="12" md="4" v-if="mdAndUp"></v-col>
            <v-col cols="12" md="4">
              <span class="font-13 app-medium-font dark-font"
                >PDF template, invoice</span
              >
              <v-select
                placeholder="PDF-template, invoice"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['Percent', 'Percent 2']"
              />
            </v-col>
            <v-col cols="12" md="4">
              <span class="font-13 app-medium-font dark-font"
                >PDF-template, reminder</span
              >
              <v-select
                placeholder="Percent"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['Percent', 'Percent 2']"
              />
            </v-col>
            <v-col cols="12" md="4">
              <span class="font-13 app-medium-font dark-font"
                >PDF-template, inkasso</span
              >
              <v-select
                placeholder="Percent"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['Percent', 'Percent 2']"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <v-card class="rounded-xl pa-6" height="100%">
          <v-card-title
            class="d-flex flex-row align-center font-20 app-semibold-font dark-font"
          >
            <div class="me-3">
              <v-img
                width="28"
                height="28"
                src="@/assets/svg/invoices/bill.svg"
              />
            </div>
            Total
          </v-card-title>
          <v-card-text class="mt-2 d-flex flex-row justify-between">
            <span class="font-14 dark-font app-medium-font">Total fees</span>
            <span class="font-13 shade-font app-regular-font">2180,00</span>
          </v-card-text>
          <v-card-text class="pt-0 d-flex flex-row justify-between">
            <span class="font-14 dark-font app-medium-font"
              >Total discounts</span
            >
            <span class="font-13 shade-font app-regular-font">2000,00</span>
          </v-card-text>
          <v-card-text class="pt-0 d-flex flex-row justify-between">
            <span class="font-14 dark-font app-medium-font">Total VAT</span>
            <span class="font-13 shade-font app-regular-font">180,00</span>
          </v-card-text>
          <v-card-text class="pt-0 d-flex flex-row justify-between">
            <span class="font-14 dark-font app-medium-font"
              >Total incl. VAT</span
            >
            <span class="font-13 shade-font app-regular-font">180,00</span>
          </v-card-text>
          <v-card-text class="pt-0 d-flex flex-row justify-between">
            <span class="font-14 dark-font app-medium-font"
              >Total excl. VAT</span
            >
            <span class="font-13 shade-font app-regular-font">180,00</span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
        >Create</v-btn
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import InvoiceProductsRowMenu from "./InvoiceProductsRowMenu.vue";

import { useDisplay } from "vuetify";
import AppCheckbox from "../default/AppCheckbox.vue";
const { mdAndUp } = useDisplay();

const tab = ref(0);
const customerType = ref("company");
const priceVat = ref(false);
const addNewCategoryDialog = ref(false);
const paymentMethods = ["Swish", "Bankgiro"];

const router = useRouter();
const onBack = function () {
  // router.back();
  router.push({ name: "invoices" });
};

const productListsHeaders = [
  "",
  "Product",
  "Description",
  "Qt.",
  "Unit",
  "Price",
  "VAT Rate",
  "Disc.",
  "Disc. Type",
  "Total",
  "",
];
const productLists = [
  {
    product: "Enter Text",
    description: "New Customers",
    quantity: 2,
    unit: "Pcs",
    price: 2,
    rate: "25%",
    disc: 2,
    disc_type: "%",
    total: 2,
  },
  {
    product: "Enter Text",
    description: "New Customers",
    quantity: 2,
    unit: "Pcs",
    price: 2,
    rate: "25%",
    disc: 2,
    disc_type: "%",
    total: 2,
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
  border-bottom: 1px solid #fff;
}
</style>
