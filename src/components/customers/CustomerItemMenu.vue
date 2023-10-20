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
  onDelete: { type: Function, default: () => {} },
  onToggleActive: { type: Function, default: () => {} },
});

const items = [
  {
    text: "Delete",
    onClick: props.onDelete,
  },
  {
    text: "Active / Inactive",
    onClick: props.onToggleActive,
  },
];
</script>

<style scoped></style>
