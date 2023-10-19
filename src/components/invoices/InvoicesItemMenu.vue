<template>
  <v-menu activator="parent">
    <v-card width="240" class="rounded-xl pa-3">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
          rounded="lg"
          @click="item.onClick"
        >
          <template v-slot:prepend>
            <v-img :src="item.icon" width="20" height="20" class="me-3" />
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script lang="ts" setup>
import registerPaymentIcon from "@/assets/svg/invoices/register_payment.svg";
import invoiceIcon from "@/assets/svg/customers/invoice.svg";
import creditInvoiceIcon from "@/assets/svg/invoices/credit_invoice.svg";
import duplicateIcon from "@/assets/svg/invoices/duplicate.svg";
import previewPDFIcon from "@/assets/svg/invoices/preview_pdf.svg";

const props = defineProps({
  onScheduleSendOut: { type: Function, default: () => {} },
  onSendInvoice: { type: Function, default: () => {} },
  onCreditInvoice: { type: Function, default: () => {} },
  onDuplicate: { type: Function, default: () => {} },
  onPreviewPDF: { type: Function, default: () => {} },
});

const items = [
  {
    text: "Register Payment",
    icon: registerPaymentIcon,
    onClick: props.onScheduleSendOut,
  },
  { text: "Send Invoice", icon: invoiceIcon, onClick: props.onSendInvoice },
  {
    text: "Credit Invoice",
    icon: creditInvoiceIcon,
    onClick: props.onCreditInvoice,
  },
  { text: "Duplicate", icon: duplicateIcon, onClick: props.onDuplicate },
  {
    text: "Preview PDF",
    icon: previewPDFIcon,
    onClick: props.onPreviewPDF,
  },
];
</script>

<style scoped></style>
