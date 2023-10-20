<template>
  <v-dialog v-model="props.dialog" width="400" persistent>
    <v-card class="rounded-xl">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        Scheduled New Event
      </v-card-title>
      <v-card-text class="d-flex flex-column mx-3 pb-1">
        <span class="font-13 app-medium-font dark-font">Invoice *</span>
        <v-select
          placeholder="Invoice"
          variant="outlined"
          rounded="lg"
          hide-details
          :items="['Invoice', 'Invoice 2']"
        />
      </v-card-text>
      <v-card-text class="d-flex flex-column mx-3 pb-1">
        <span class="font-13 app-medium-font dark-font">Event Date</span>
        <v-text-field
          placeholder="Date"
          variant="outlined"
          rounded="lg"
          hide-details
        />
      </v-card-text>
      <v-card-text class="d-flex flex-column mx-3 pb-1">
        <span class="font-13 app-medium-font dark-font">Event *</span>
        <v-select
          placeholder="Invoice"
          variant="outlined"
          rounded="lg"
          hide-details
          :items="['Event', 'Event 2']"
        />
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
          >Save</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";

const props = defineProps({
  dialog: Boolean,
});

const emit = defineEmits();

const closeDialog = () => {
  emit("update:dialog", false);
};

const priceDialog = ref(false);

const onAddNewPrice = function () {
  priceDialog.value = true;
};
</script>

<style scoped>
.v-text-field input.v-field__input {
  min-height: 40px;
  padding: 5px 10px;
}
</style>
