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
      <div class="app-semibold-font font-28 dark-font">New Invoice</div>
    </div>
    <v-card color="white" class="px-8 pt-4 pb-8 rounded-xl">
      <div class="d-flex flex-row flex-wrap">
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font">Customer</span>
          <v-text-field
            placeholder="Customer"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font"
            >Invoice template</span
          >
          <v-text-field
            placeholder="Invoice template"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div class="five-row">
          <span class="font-13 app-medium-font dark-font">Reminder flow</span>
          <v-text-field
            placeholder="Remind"
            variant="outlined"
            rounded="lg"
            hide-details
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
          <v-text-field
            placeholder="Time report"
            variant="outlined"
            rounded="lg"
            hide-details
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
                <v-text-field
                  placeholder="Payment Terms"
                  variant="outlined"
                  rounded="lg"
                  hide-details
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
              <v-col cols="12" md="4">
                <v-checkbox color="#20c39d" value="#20c39d" hide-details>
                  <template v-slot:label>
                    <span class="font-14 app-regular-font dark-font">
                      Prices Incl. VAT
                    </span>
                  </template>
                </v-checkbox>
              </v-col>
              <v-col cols="12" md="4">
                <span class="font-13 app-medium-font dark-font">Currency</span>
                <v-text-field
                  placeholder="Currency"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </v-col>
              <v-col cols="12" md="4">
                <span class="font-13 app-medium-font dark-font"
                  >Price List</span
                >
                <v-text-field
                  placeholder="Price List"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="h-100">
        <div class="h-50 pt-4">
          <v-card class="rounded-xl pa-2" height="100%">
            <v-card-text>
              <span class="font-13 app-medium-font dark-font"
                >Invoice Text</span
              >
              <v-textarea
                placeholder="Enter text..."
                variant="outlined"
                rounded="lg"
                hide-details
                rows="2"
              />
            </v-card-text>
          </v-card>
        </div>
        <div class="h-50 pt-4">
          <v-card class="rounded-xl pa-2 mt-0" height="100%">
            <v-card-text>
              <span class="font-13 app-medium-font dark-font"
                >Payment Methods</span
              >
              <v-text-field
                placeholder="Enter method..."
                variant="outlined"
                rounded="lg"
                hide-details
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
                <v-text-field
                  placeholder="Enter Text"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.product"
                />
              </td>
              <td class="white-bottom">
                <v-text-field
                  placeholder="Enter Text"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.description"
                />
              </td>
              <td class="white-bottom">
                <v-text-field
                  placeholder="Enter Text"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.quantity"
                />
              </td>
              <td class="white-bottom">
                <v-text-field
                  placeholder="Enter Text"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.price"
                />
              </td>
              <td class="white-bottom">
                <v-text-field
                  placeholder="Enter Text"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.rate"
                />
              </td>
              <td class="white-bottom">
                <v-text-field
                  placeholder="Enter Text"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.disc"
                />
              </td>
              <td class="white-bottom">
                <v-text-field
                  placeholder="Enter Text"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.disc_type"
                />
              </td>
              <td class="white-bottom">
                <v-text-field
                  placeholder="Enter Text"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                  v-model="item.total"
                />
              </td>
              <td class="white-bottom">
                <v-btn icon size="x-small" flat>
                  <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
              </td>
            </tr>
            <tr>
              <td class="pe-0">
                <v-icon>mdi-unfold-more-horizontal</v-icon>
              </td>
              <td colspan="9" class="ps-0">
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
            padding-top: 10px;
            padding-bottom: 10px;
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
              <v-text-field
                placeholder="Percent"
                variant="outlined"
                rounded="lg"
                hide-details
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
              <v-text-field
                placeholder="PDF-template, invoice"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </v-col>
            <v-col cols="12" md="4">
              <span class="font-13 app-medium-font dark-font"
                >PDF-template, reminder</span
              >
              <v-text-field
                placeholder="Percent"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </v-col>
            <v-col cols="12" md="4">
              <span class="font-13 app-medium-font dark-font"
                >PDF-template, inkasso</span
              >
              <v-text-field
                placeholder="Percent"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <v-card class="rounded-xl pa-6" height="100%">
          <v-card-title> Total </v-card-title>
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
          padding-top: 10px;
          padding-bottom: 10px;
        "
        class="text-none ms-2 font-14 app-medium-font"
        flat
        >Create</v-btn
      >
    </div>
    <new-customer-category-dialog
      :dialog="addNewCategoryDialog"
      @update:dialog="(val) => (addNewCategoryDialog = val)"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import generalIcon from "@/assets/svg/customers/general.svg";
import addressIcon from "@/assets/svg/customers/address.svg";
import contactIcon from "@/assets/svg/customers/contact.svg";
import invoiceIcon from "@/assets/svg/customers/invoice.svg";
// import NewCustomerCategoryDialog from "./NewCustomerCategoryDialog.vue";

import { useDisplay } from "vuetify";
const { mdAndUp } = useDisplay();

const tab = ref(0);
const customerType = ref("company");
const addNewDialog = ref(false);
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
.v-text-field input.v-field__input {
  min-height: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 12px;
  padding-right: 12px;
}

.v-label {
  opacity: 1;
}
.v-chip__close {
  color: #8b8ba9;
}

@media (max-width: 600px) {
  .five-row {
    width: 100%;
  }
}
@media (min-width: 600px) {
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
