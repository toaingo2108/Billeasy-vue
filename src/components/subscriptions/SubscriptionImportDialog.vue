<template>
  <v-dialog v-model="props.dialog" width="624" persistent>
    <v-card class="rounded-xl">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        Import Subscriptions
      </v-card-title>
      <v-card-text class="d-flex flex-row pb-1 ps-4 align-center">
        <div style="width: 212px">
          <span class="font-14 app-medium-font dark-font ps-3">
            Subscription to import
          </span>
        </div>
        <div class="flex-grow">
          <v-radio-group class="mt-7 w-100">
            <div class="d-flex flex-row">
              <v-radio value="one">
                <template v-slot:label>
                  <span class="font-14 app-regular-font dark-font">
                    All Subscriptions
                  </span>
                </template>
              </v-radio>
              <v-radio value="two">
                <template v-slot:label>
                  <span class="font-14 app-regular-font dark-font">
                    Active Subscriptions
                  </span>
                </template>
              </v-radio>
            </div>
          </v-radio-group>
        </div>
      </v-card-text>
      <v-divider class="mt-5" />
      <v-card-actions class="py-7 px-8 d-flex flex-row justify-end">
        <v-btn
          color="#0D0D1E"
          @click="closeDialog"
          variant="outlined"
          rounded="lg"
          class="text-none"
          style="
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
            border-color: #d1d1e2;
          "
          >Cancel</v-btn
        >
        <v-btn
          class="text-none"
          color="white"
          @click="closeDialog"
          prepend-icon="mdi-cloud-upload-outline"
          rounded="lg"
          style="
            background: #20c39d;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
          "
          >Import</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps({
  dialog: Boolean,
});

const emit = defineEmits();

const closeDialog = () => {
  emit("update:dialog", false);
};
</script>

<style scoped>
div :deep(.v-label) {
  opacity: 1;
}

.file-upload-button .v-btn__content {
  width: 100%;
  justify-content: space-between;
}
</style>
