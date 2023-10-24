<template>
  <div class="w-100 h-100 py-2 d-flex flex-column">
    <div>
      <app-data-table
        :headers="headers"
        :items="items"
        items-per-page="15"
        style="margin-bottom: 80px"
        :on-row-clicked="onSelectedRule"
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
    <send-invoice-dialog
      :dialog="sendInvoiceDialog"
      @update:dialog="(val) => (sendInvoiceDialog = val)"
    />
    <register-payment-dialog
      :dialog="registerPaymentDialog"
      @update:dialog="(val) => (registerPaymentDialog = val)"
    />
    <create-external-invoice-rule-dialog
      :dialog="createExternalInvoiceDialog"
      @update:dialog="(val) => (createExternalInvoiceDialog = val)"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ItemMenu from "./InvoicesItemMenu.vue";
import { useRouter } from "vue-router";
import AppDataTable from "@/components/default/AppDataTable.vue";
import AppDataTableBottom from "@/components/default/AppDataTableBottom.vue";
import SendInvoiceDialog from "@/components/invoices/SendInvoiceDialog.vue";
import RegisterPaymentDialog from "@/components/invoices/RegisterPaymentDialog.vue";
import CreateExternalInvoiceRuleDialog from "@/components/invoices/CreateExternalInvoiceRuleDialog.vue";

const headers = [
  { title: "Name", key: "name", style: "bold", align: "left" },
  { title: "Rule Type", key: "rule_type", style: "bold" },
  { title: "From Date", key: "from_date" },
  { title: "Key", key: "key" },
  { title: "Comparer", key: "comparer" },
  { title: "Value", key: "value" },
  { title: "", key: "action" },
];

const items = [
  {
    name: "Send via Swish",
    rule_type: "Sending",
    from_date: "2023-07-01",
    key: "Total Amount",
    comparer: ">",
    value: "1000,000",
  },
  {
    name: "Send via Swish",
    rule_type: "Sending",
    from_date: "2023-07-01",
    key: "Total Amount",
    comparer: ">",
    value: "1000,000",
  },
  {
    name: "Send via Swish",
    rule_type: "Sending",
    from_date: "2023-07-01",
    key: "Total Amount",
    comparer: ">",
    value: "1000,000",
  },
  {
    name: "Send via Swish",
    rule_type: "Sending",
    from_date: "2023-07-01",
    key: "Total Amount",
    comparer: ">",
    value: "1000,000",
  },
  {
    name: "Send via Swish",
    rule_type: "Sending",
    from_date: "2023-07-01",
    key: "Total Amount",
    comparer: ">",
    value: "1000,000",
  },
  {
    name: "Send via Swish",
    rule_type: "Sending",
    from_date: "2023-07-01",
    key: "Total Amount",
    comparer: ">",
    value: "1000,000",
  },
  {
    name: "Send via Swish",
    rule_type: "Sending",
    from_date: "2023-07-01",
    key: "Total Amount",
    comparer: ">",
    value: "1000,000",
  },
  {
    name: "Send via Swish",
    rule_type: "Sending",
    from_date: "2023-07-01",
    key: "Total Amount",
    comparer: ">",
    value: "1000,000",
  },
  {
    name: "Send via Swish",
    rule_type: "Sending",
    from_date: "2023-07-01",
    key: "Total Amount",
    comparer: ">",
    value: "1000,000",
  },
  {
    name: "Send via Swish",
    rule_type: "Sending",
    from_date: "2023-07-01",
    key: "Total Amount",
    comparer: ">",
    value: "1000,000",
  },
  {
    name: "Send via Swish",
    rule_type: "Sending",
    from_date: "2023-07-01",
    key: "Total Amount",
    comparer: ">",
    value: "1000,000",
  },
  {
    name: "Send via Swish",
    rule_type: "Sending",
    from_date: "2023-07-01",
    key: "Total Amount",
    comparer: ">",
    value: "1000,000",
  },
  {
    name: "Send via Swish",
    rule_type: "Sending",
    from_date: "2023-07-01",
    key: "Total Amount",
    comparer: ">",
    value: "1000,000",
  },
  {
    name: "Send via Swish",
    rule_type: "Sending",
    from_date: "2023-07-01",
    key: "Total Amount",
    comparer: ">",
    value: "1000,000",
  },
  {
    name: "Send via Swish",
    rule_type: "Sending",
    from_date: "2023-07-01",
    key: "Total Amount",
    comparer: ">",
    value: "1000,000",
  },
  {
    name: "Send via Swish",
    rule_type: "Sending",
    from_date: "2023-07-01",
    key: "Total Amount",
    comparer: ">",
    value: "1000,000",
  },
];

const createExternalInvoiceDialog = ref(false);
const sendInvoiceDialog = ref(false);
const registerPaymentDialog = ref(false);
const router = useRouter();

const onRegisterPayment = function () {
  registerPaymentDialog.value = true;
};
const onSendInvoice = function () {
  sendInvoiceDialog.value = true;
};
const onSelectedRule = function (item: any, index: number) {
  console.log("asdfasdf");
  createExternalInvoiceDialog.value = true;
};
</script>
<style scoped>
div :deep(.v-text-field input.v-field__input) {
  min-height: 40px;
  padding: 5px;
}
</style>
