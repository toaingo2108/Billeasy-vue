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
      <div class="app-semibold-font font-28 dark-font">New Subscription</div>
    </div>
    <v-card color="white" class="px-8 pt-4 pb-8 rounded-xl">
      <div class="d-flex flex-row flex-wrap">
        <div class="six-row">
          <span class="font-13 app-medium-font dark-font">Customer</span>
          <v-select
            placeholder="Customer"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Customer', 'Customer 2']"
          />
        </div>
        <div class="six-row">
          <span class="font-13 app-medium-font dark-font"
            >Subscription template</span
          >
          <v-select
            placeholder="Subscription template"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Standard', 'Template 2']"
          />
        </div>
        <div class="six-row">
          <span class="font-13 app-medium-font dark-font"
            >Invoice Template</span
          >
          <v-select
            placeholder="Invoice Template"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Standard', 'Invoice Template 2']"
          />
        </div>
        <div class="six-row">
          <span class="font-13 app-medium-font dark-font">Reminder flow</span>
          <v-select
            placeholder="Remind"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Remind', 'Remind 2']"
          />
        </div>
        <div class="six-row">
          <span class="font-13 app-medium-font dark-font">Sub. Number</span>
          <v-text-field
            placeholder="Enter text"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div class="six-row">
          <span class="font-13 app-medium-font dark-font">Category</span>
          <v-select
            placeholder="Category"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Category', 'Category 2']"
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
      <v-col cols="12" md="6" class="h-100">
        <div class="h-100 pt-4">
          <v-card class="rounded-xl pa-6" height="100%">
            <v-row>
              <v-col cols="12" md="6">
                <span class="font-13 app-medium-font dark-font"
                  >Start Date</span
                >
                <v-text-field
                  placeholder="Start Date"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </v-col>
              <v-col cols="12" md="6" style="opacity: 50%">
                <span class="font-13 app-medium-font dark-font">End Date</span>
                <v-text-field
                  placeholder="End Date"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </v-col>
              <v-col cols="12" md="6">
                <span class="font-13 app-medium-font dark-font"
                  >Billing Cycles</span
                >
                <v-text-field
                  placeholder="Billing Cycles"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </v-col>
              <v-col cols="12" md="6">
                <span class="font-13 app-medium-font dark-font"
                  >Period Interval</span
                >
                <v-text-field
                  placeholder="Period Interval"
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
              <v-col cols="12" md="4" style="opacity: 50%">
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
              <v-col cols="12" md="4">
                <v-checkbox
                  color="#20c39d"
                  value="#20c39d"
                  hide-details
                  class="mt-4"
                >
                  <template v-slot:label>
                    <span class="font-14 app-regular-font dark-font">
                      Prices Incl. VAT
                    </span>
                  
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="h-100">
        <div class="pt-4">
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="rounded-xl pa-2" height="100%">
                <v-card-text class="d-flex flex-column">
                  <span class="font-13 app-medium-font dark-font"
                    >Invoice Text</span
                  >
                  <v-textarea
                    bg-color="white"
                    placeholder="Enter text..."
                    variant="outlined"
                    rounded="lg"
                    hide-details
                    rows="6"
                    class="flex-grow mt-2"
                  />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="rounded-xl pa-6" height="100%">
                <v-card-title class="font-20 app-semibold-font dark-font">
                  Auto-tasks
                </v-card-title>
                <v-card-text class="mt-2 d-flex flex-row justify-between">
                  <div class="d-flex flex-row">
                    <v-img
                      width="18"
                      height="18"
                      src="@/assets/svg/subscriptions/check.svg"
                    />
                    <span class="font-14 dark-font app-medium-font ms-2"
                      >Create invoices</span
                    >
                  </div>
                  <v-icon color="#8B8BA9">mdi-help-circle-outline</v-icon>
                </v-card-text>
                <v-card-text class="pt-0 d-flex flex-row justify-between">
                  <div class="d-flex flex-row">
                    <v-img
                      width="18"
                      height="18"
                      src="@/assets/svg/subscriptions/check.svg"
                    />
                    <span class="font-14 dark-font app-medium-font ms-2"
                      >Send invoices</span
                    >
                  </div>
                  <v-icon color="#8B8BA9">mdi-help-circle-outline</v-icon>
                </v-card-text>
                <v-card-text class="pt-0 d-flex flex-row justify-between">
                  <div class="d-flex flex-row">
                    <v-img
                      width="18"
                      height="18"
                      src="@/assets/svg/subscriptions/check.svg"
                    />
                    <span class="font-14 dark-font app-medium-font ms-2"
                      >Update prices</span
                    >
                  </div>
                  <v-icon color="#8B8BA9">mdi-help-circle-outline</v-icon>
                </v-card-text>
                <v-card-text class="pt-0 d-flex flex-row justify-between pb-0">
                  <div class="d-flex flex-row">
                    <v-img
                      width="18"
                      height="18"
                      src="@/assets/svg/subscriptions/check.svg"
                    />
                    <span class="font-14 dark-font app-medium-font ms-2"
                      >Update according to template</span
                    >
                  </div>
                  <v-icon color="#8B8BA9">mdi-help-circle-outline</v-icon>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <div class="pt-4">
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
                  :items="['Enter Text', 'Enter Text 2']"
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
                  placeholder="Enter Text"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.price"
                />
              </td>
              <td class="ps-0 white-bottom">
                <v-select
                  placeholder="Enter Text"
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
                  <subscription-products-row-menu />
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
                  value="New Customers"
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
          prepend-icon="mdi-check"
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
          prepend-icon="mdi-check"
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
import generalIcon from "@/assets/svg/customers/general.svg";
import addressIcon from "@/assets/svg/customers/address.svg";
import contactIcon from "@/assets/svg/customers/contact.svg";
import invoiceIcon from "@/assets/svg/customers/invoice.svg";
import SubscriptionProductsRowMenu from "./SubscriptionProductsRowMenu.vue";

import { useDisplay } from "vuetify";
const { mdAndUp } = useDisplay();

const addNewCategoryDialog = ref(false);
const paymentMethods = ["Swish", "Bankgiro"];

const router = useRouter();
const onBack = function () {
  router.back();
};

const onAddNewCategory = function () {
  addNewCategoryDialog.value = true;
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

@media (max-width: 600px) {
  .five-row {
    width: 100%;
  }
  .six-row {
    width: 100%;
  }
}
@media (min-width: 600px) {
  .five-row {
    width: 20%;
    padding-left: 10px;
    padding-right: 10px;
  }
  .six-row {
    width: 16.66%;
    padding-left: 10px;
    padding-right: 10px;
  }
}

.white-bottom {
  border-bottom: 1px solid #fff;
}
</style>
