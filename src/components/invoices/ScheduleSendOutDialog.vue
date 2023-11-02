<template>
  <v-dialog v-model="props.dialog" width="400" persistent>
    <v-card class="rounded-xl" color="#F2F2F7">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        Schedule Send Out
      </v-card-title>
      <v-card-text class="d-flex flex-column mx-3 pb-1">
        <span class="font-13 app-medium-font dark-font">Send Method *</span>
        <v-select
          bg-color="white"
          placeholder="Method"
          variant="outlined"
          rounded="lg"
          hide-details
          :items="['Method', 'Method 2']"
          value="Method"
        />
      </v-card-text>
      <v-card-text class="d-flex flex-column mx-3 pb-1" v-if="scheduled">
        <span class="font-13 app-medium-font dark-font">Send Date</span>
        <v-text-field
          placeholder="Date"
          variant="outlined"
          rounded="lg"
          hide-details
          value="2023-07-01"
        />
      </v-card-text>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <app-checkbox v-model="scheduled" class="me-2" />
        <span class="font-14 app-regular-font dark-font">
          Scheduled Send Out
        </span>
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
        >
          Schedule
        </v-btn>
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

const scheduled = ref(false);
</script>

<style scoped></style>
