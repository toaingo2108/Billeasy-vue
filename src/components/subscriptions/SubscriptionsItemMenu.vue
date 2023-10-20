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
import invoiceIcon from "@/assets/svg/customers/invoice.svg";
import addToCyclesIcon from "@/assets/svg/subscriptions/add_to_cycles.svg";
import cancelIcon from "@/assets/svg/subscriptions/cancel.svg";
import duplicateIcon from "@/assets/svg/invoices/duplicate.svg";
import pauseIcon from "@/assets/svg/subscriptions/pause.svg";

const props = defineProps({
  onCreateInvoice: { type: Function, default: () => {} },
  onAddToCycles: { type: Function, default: () => {} },
  onCancelSubscription: { type: Function, default: () => {} },
  onPauseSubscription: { type: Function, default: () => {} },
  onDuplicate: { type: Function, default: () => {} },
});

const items = [
  {
    text: "Create Invoice",
    icon: invoiceIcon,
    onClick: props.onCreateInvoice,
  },
  {
    text: "Add to Cycles",
    icon: addToCyclesIcon,
    onClick: props.onAddToCycles,
  },
  { text: "Duplicate", icon: duplicateIcon, onClick: props.onDuplicate },
  {
    text: "Cancel Subscription",
    icon: cancelIcon,
    onClick: props.onCancelSubscription,
  },
  {
    text: "Pause Subscription",
    icon: pauseIcon,
    onClick: props.onPauseSubscription,
  },
];
</script>

<style scoped></style>
