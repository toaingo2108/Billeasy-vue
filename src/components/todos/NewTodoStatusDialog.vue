<template>
  <v-dialog v-model="props.dialog" width="400" persistent>
    <v-card class="rounded-xl" color="#F2F2F7">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        New To-do Status
      </v-card-title>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div class="w-50 me-2">
          <span class="font-13 app-medium-font dark-font">Name *</span>
          <v-text-field
            placeholder="Name"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <div class="w-50 ms-2">
          <span class="font-13 app-medium-font dark-font">Color *</span>
          <v-select
            bg-color="white"
            placeholder="Color"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['Color', 'Color1']"
          />
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row mx-3 pb-1">
        <div style="width: 336px">
          <span class="font-13 app-medium-font dark-font">Description</span>
          <v-textarea
            bg-color="white"
            placeholder="Add description..."
            variant="outlined"
            rounded="lg"
            hide-details
            rows="3"
          />
        </div>
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

const props = defineProps({
  dialog: Boolean,
});

const emit = defineEmits();

const closeDialog = () => {
  emit("update:dialog", false);
};
</script>

<style scoped></style>
