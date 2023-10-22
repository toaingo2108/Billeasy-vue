<template>
  <v-menu activator="parent" :close-on-content-click="false" v-model="menu">
    <v-card class="rounded-xl">
      <v-card-text class="d-flex flex-row mx-3 pb-1 mt-2">
        <div style="width: 336px">
          <span class="font-13 app-medium-font dark-font">Header *</span>
          <v-text-field
            placeholder="Enter header"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div style="width: 336px">
          <span class="font-13 app-medium-font dark-font">Note *</span>
          <v-textarea
            placeholder="Enter note..."
            variant="outlined"
            rounded="lg"
            hide-details
            rows="3"
          />
        </div>
      </v-card-text>
      <v-divider class="mt-8" />
      <v-card-actions class="py-7 px-8 d-flex flex-row justify-end">
        <v-btn
          color="#0D0D1E"
          @click="closeDialog"
          variant="outlined"
          rounded="lg"
          style="
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
            border-color: #d1d1e2;
          "
          class="text-none"
          >Cancel</v-btn
        >
        <v-btn
          color="white"
          @click="closeDialog"
          prepend-icon="mdi-check"
          rounded="lg"
          style="
            background: #20c39d;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
          "
          class="text-none"
          >Update</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script lang="ts" setup>
import registerPaymentIcon from "@/assets/svg/invoices/register_payment.svg";
import invoiceIcon from "@/assets/svg/customers/invoice.svg";
import creditInvoiceIcon from "@/assets/svg/invoices/credit_invoice.svg";
import duplicateIcon from "@/assets/svg/invoices/duplicate.svg";
import previewPDFIcon from "@/assets/svg/invoices/preview_pdf.svg";
import { ref } from "vue";

const props = defineProps({
  onRegisterPayment: { type: Function, default: () => {} },
  // onScheduleSendOut: { type: Function, default: () => {} },
  onSendInvoice: { type: Function, default: () => {} },
  onCreditInvoice: { type: Function, default: () => {} },
  onDuplicate: { type: Function, default: () => {} },
  onPreviewPDF: { type: Function, default: () => {} },
});

const menu = ref();
const closeDialog = function () {
  menu.value = false;
};
</script>

<style scoped>
div :deep(.v-text-field input.v-field__input) {
  min-height: 40px;
  padding: 5px 10px;
}
</style>
