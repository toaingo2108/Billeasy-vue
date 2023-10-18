<template>
  <v-menu activator="parent" :close-on-content-click="false">
    <v-card width="240" class="rounded-xl pa-3">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          color="primary"
          rounded="lg"
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

const items = [
  { text: "Register Payment", icon: registerPaymentIcon },
  { text: "Send Invoice", icon: invoiceIcon },
  { text: "Credit Invoice", icon: creditInvoiceIcon },
  { text: "Duplicate", icon: duplicateIcon },
  { text: "Preview PDF", icon: previewPDFIcon },
];
</script>

<style scoped></style>
