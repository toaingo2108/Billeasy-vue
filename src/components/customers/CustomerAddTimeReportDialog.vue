<template>
  <v-dialog v-model="props.dialog" width="608" persistent>
    <v-card class="rounded-xl" color="#F2F2F7">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        New Time Report
      </v-card-title>
      <v-card-text class="d-flex flex-column mx-3 pb-1">
        <span class="font-13 app-medium-font dark-font">Task *</span>
        <v-text-field
          placeholder="Task name"
          variant="outlined"
          rounded="lg"
          hide-details
        />
      </v-card-text>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div style="width: 33.33%" class="pe-2">
          <span class="font-13 app-medium-font dark-font">Product</span>
          <v-text-field
            placeholder="Product"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 33.33%" class="px-1">
          <span class="font-13 app-medium-font dark-font">To-do</span>
          <v-text-field
            placeholder="To-do"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 33.33%" class="ps-2">
          <span class="font-13 app-medium-font dark-font"
            >Performer / User</span
          >
          <v-text-field
            placeholder="Performer/ User"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div style="width: 33.33%" class="pe-2">
          <span class="font-13 app-medium-font dark-font">Start Time</span>
          <v-text-field
            placeholder="Start Time"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 33.33%" class="px-1">
          <span class="font-13 app-medium-font dark-font">End Time</span>
          <v-text-field
            placeholder="End Time"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 33.33%" class="ps-2">
          <span class="font-13 app-medium-font dark-font">Hours</span>
          <v-text-field
            placeholder="Hours"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div style="width: 33.33%" class="pe-2">
          <span class="font-13 app-medium-font dark-font">Start Time</span>
          <v-text-field
            placeholder="Start Time"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 33.33%" class="px-1">
          <span class="font-13 app-medium-font dark-font">End Time</span>
          <v-text-field
            placeholder="End Time"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 33.33%" class="ps-2">
          <span class="font-13 app-medium-font dark-font">Hours</span>
          <v-text-field
            placeholder="Hours"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div style="width: 33.33%" class="pe-2">
          <span class="font-13 app-medium-font dark-font">Hourly Rate</span>
          <v-text-field
            placeholder="Hourly Rate"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 33.33%" class="px-1">
          <span class="font-13 app-medium-font dark-font">VAT Rate</span>
          <v-text-field
            placeholder="VAT Rate"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div style="width: 33.33%" class="ps-2 mt-8">
          <app-checkbox v-model="rateVat" />
          <span class="font-14 app-regular-font dark-font ms-1">
            Rate includes VAT
          </span>
        </div>
      </v-card-text>
      <v-card-text class="mx-3">
        <div class="font-12 shade-font app-semibold-font">Total</div>
        <div class="font-24 dark-font app-semibold-font">$406.25</div>
      </v-card-text>
      <v-divider class="mt-8" />
      <v-card-actions class="py-7 px-8 d-flex flex-row justify-end bg-gray">
        <v-btn
          color="#0D0D1E"
          @click="closeDialog"
          variant="outlined"
          rounded="lg"
          style="
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 7px;
            padding-bottom: 7px;
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
            padding-top: 7px;
            padding-bottom: 7px;
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
import AppCheckbox from "../default/AppCheckbox.vue";

const props = defineProps({
  dialog: Boolean,
});

const emit = defineEmits();

const closeDialog = () => {
  emit("update:dialog", false);
};

const rateVat = ref(false);
</script>

<style scoped></style>
