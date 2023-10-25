<template>
  <v-menu
    activator="parent"
    :close-on-content-click="false"
    v-model="menuDialog"
  >
    <v-card class="rounded-xl pa-2" width="608">
      <v-card-text class="d-flex flex-row pb-1 w-100">
        <div style="width: 33.33%" class="px-2">
          <div>
            <span class="font-13 app-medium-font dark-font"> To-do </span>
          </div>
          <div class="mt-1">
            <v-text-field
              placeholder="To-do"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </div>
        </div>
        <div style="width: 33.33%" class="px-2">
          <div>
            <span class="font-13 app-medium-font dark-font"> Product </span>
          </div>
          <div class="mt-1">
            <v-text-field
              placeholder="Product"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </div>
        </div>
        <div style="width: 33.33%" class="px-2">
          <div>
            <span class="font-13 app-medium-font dark-font"> User </span>
          </div>
          <div class="mt-1">
            <v-text-field
              placeholder="Performer"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </div>
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row pb-1 w-100">
        <div style="width: 33.33%" class="px-2">
          <div>
            <span class="font-13 app-medium-font dark-font"> Start Time </span>
          </div>
          <div class="mt-1">
            <v-text-field
              placeholder="Start Time"
              variant="outlined"
              rounded="lg"
              hide-details
              value="2023-06-01, 14:15"
            />
          </div>
        </div>
        <div style="width: 33.33%" class="px-2">
          <div>
            <span class="font-13 app-medium-font dark-font"> End Time </span>
          </div>
          <div class="mt-1">
            <v-text-field
              placeholder="End Time"
              variant="outlined"
              rounded="lg"
              hide-details
              value="2023-06-01, 14:15"
            />
          </div>
        </div>
        <div style="width: 33.33%" class="px-2">
          <div>
            <span class="font-13 app-medium-font dark-font"> Hours </span>
          </div>
          <div class="mt-1">
            <v-text-field
              placeholder="Hours"
              variant="outlined"
              rounded="lg"
              hide-details
              value="16:25"
            />
          </div>
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row pb-1 w-100">
        <div style="width: 33.33%" class="px-2">
          <div>
            <span class="font-13 app-medium-font dark-font"> Hourly Rate </span>
          </div>
          <div class="mt-1">
            <v-text-field
              placeholder="Hourly Rate"
              variant="outlined"
              rounded="lg"
              hide-details
              value="2023-06-01, 14:15"
            />
          </div>
        </div>
        <div style="width: 33.33%" class="px-2">
          <div>
            <span class="font-13 app-medium-font dark-font"> VAT Rate </span>
          </div>
          <div class="mt-1">
            <v-text-field
              placeholder="VAT Rate"
              variant="outlined"
              rounded="lg"
              hide-details
              value="2023-06-01, 14:15"
            />
          </div>
        </div>
        <div style="width: 33.33%" class="px-2">
          <div class="mt-6">
            <v-checkbox color="#20c39d" value="#20c39d" hide-details>
              <template v-slot:label>
                <span class="font-14 app-regular-font dark-font">
                  Rate includes VAT
                </span>
              </template>
            </v-checkbox>
          </div>
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row pb-1 w-100">
        <div style="width: 66.66%" class="px-2">
          <div>
            <span class="font-13 app-medium-font dark-font"> Description </span>
          </div>
          <div class="mt-1">
            <v-textarea
              placeholder="Enter description..."
              variant="outlined"
              rounded="lg"
              hide-details
              rows="2"
            />
          </div>
        </div>
        <div style="width: 33.33%" class="px-2 mt-5">
          <div>
            <span class="font-12 app-semibold-font shade-font"> Total </span>
          </div>
          <div>
            <span class="font-24 app-semibold-font dark-font"> $406.25 </span>
          </div>
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row pb-1 px-6 justify-between mt-3">
        <div>
          <span class="font-14 app-medium-font dark-font"> Created on </span>
        </div>
        <div>
          <span class="font-13 app-regular-font shade-font">
            2023-05-01, 13.20
          </span>
        </div>
      </v-card-text>
      <v-card-text class="d-flex flex-row pt-1 pb-1 px-6 justify-between">
        <div>
          <span class="font-14 app-medium-font dark-font">
            Last updated on
          </span>
        </div>
        <div>
          <span class="font-13 app-regular-font shade-font">
            2023-05-01, 13.20
          </span>
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
          prepend-icon="mdi-check"
          rounded="lg"
          style="
            background: #20c39d;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
          "
          >Update</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";

const menuDialog = ref(false);
const closeDialog = () => {
  menuDialog.value = false;
};
</script>

<style scoped>
div :deep(.v-label) {
  opacity: 1;
}

.v-checkbox .v-selection-control {
  min-height: 40px;
}
</style>
