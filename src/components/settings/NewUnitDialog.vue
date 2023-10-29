<template>
  <v-dialog v-model="props.dialog" width="400" persistent>
    <v-card class="rounded-xl" color="#F2F2F7">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        New Unit
      </v-card-title>
      <v-card-text class="d-flex flex-column mx-3 pb-1">
        <span class="font-13 app-medium-font dark-font">Code *</span>
        <v-text-field
          placeholder="Enter Header"
          variant="outlined"
          rounded="lg"
          hide-details
        />
      </v-card-text>
      <v-card-text class="d-flex flex-column mx-3 pb-1">
        <span class="font-13 app-medium-font dark-font">Description</span>
        <v-textarea
          bg-color="white"
          placeholder="Enter description..."
          variant="outlined"
          rounded="lg"
          hide-details
          rows="3"
        />
      </v-card-text>
      <v-card-text class="d-flex flex-row pb-1">
        <app-checkbox v-model="defaultUnit" class="me-2 ms-3" />
        <span class="font-14 app-regular-font dark-font"> Default unit </span>
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

const defaultUnit = ref(false);
</script>

<style scoped></style>
