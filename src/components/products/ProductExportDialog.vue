<template>
  <v-dialog v-model="props.dialog" width="592" persistent>
    <v-card class="rounded-xl" color="#F2F2F7">
      <v-card-title class="app-semibold-font font-20 dark-font mt-6 mx-3">
        Export
      </v-card-title>
      <v-card-text class="d-flex flex-row pb-1 ps-4">
        <div style="width: 50%">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Fields to include in export
          </span>
          <div class="d-flex flex-row align-center mt-1">
            <v-checkbox color="#20c39d" value="#20c39d" hide-details>
              <template v-slot:label>
                <span class="font-14 app-regular-font dark-font">
                  Product nr.
                </span>
              </template>
            </v-checkbox>
          </div>
          <div class="d-flex flex-row align-center">
            <v-checkbox color="#20c39d" value="#20c39d" hide-details>
              <template v-slot:label>
                <span class="font-14 app-regular-font dark-font"> Name </span>
              </template>
            </v-checkbox>
          </div>
          <div class="d-flex flex-row align-center">
            <v-checkbox color="#20c39d" value="#20c39d" hide-details>
              <template v-slot:label>
                <span class="font-14 app-regular-font dark-font"> SKU </span>
              </template>
            </v-checkbox>
          </div>
          <div class="d-flex flex-row align-center">
            <v-checkbox color="#20c39d" value="#20c39d" hide-details>
              <template v-slot:label>
                <span class="font-14 app-regular-font dark-font">
                  Default Price
                </span>
              </template>
            </v-checkbox>
          </div>
          <div class="d-flex flex-row align-center">
            <v-checkbox color="#20c39d" value="#20c39d" hide-details>
              <template v-slot:label>
                <span class="font-14 app-regular-font dark-font">
                  Quantity in Stock
                </span>
              </template>
            </v-checkbox>
          </div>
          <div class="d-flex flex-row align-center">
            <v-checkbox color="#20c39d" value="#20c39d" hide-details>
              <template v-slot:label>
                <span class="font-14 app-regular-font dark-font"> Unit </span>
              </template>
            </v-checkbox>
          </div>
          <div class="d-flex flex-row align-center">
            <v-checkbox color="#20c39d" value="#20c39d" hide-details>
              <template v-slot:label>
                <span class="font-14 app-regular-font dark-font"> EAN </span>
              </template>
            </v-checkbox>
          </div>
          <div class="d-flex flex-row align-center">
            <v-checkbox color="#20c39d" value="#20c39d" hide-details>
              <template v-slot:label>
                <span class="font-14 app-regular-font dark-font">
                  VAT Rate
                </span>
              </template>
            </v-checkbox>
          </div>
        </div>
        <div style="width: 50%">
          <span class="font-14 app-semibold-font dark-font ps-3">
            Sort export on
          </span>
          <v-radio-group class="mt-3">
            <div class="d-flex flex-row align-center">
              <v-radio value="one">
                <template v-slot:label>
                  <span class="font-14 app-regular-font dark-font">
                    Product nr.
                  </span>
                </template>
              </v-radio>
            </div>
            <div class="d-flex flex-row align-center">
              <v-radio value="two">
                <template v-slot:label>
                  <span class="font-14 app-regular-font dark-font"> Name </span>
                </template>
              </v-radio>
            </div>
            <div class="d-flex flex-row align-center">
              <v-radio value="three">
                <template v-slot:label>
                  <span class="font-14 app-regular-font dark-font"> SKU </span>
                </template>
              </v-radio>
            </div>
            <div class="d-flex flex-row align-center">
              <v-radio value="four">
                <template v-slot:label>
                  <span class="font-14 app-regular-font dark-font">
                    Quantity in Stock
                  </span>
                </template>
              </v-radio>
            </div>
          </v-radio-group>
        </div>
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
          prepend-icon="mdi-download"
          rounded="lg"
          class="text-none"
          style="
            background: #20c39d;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 10px;
            padding-bottom: 10px;
          "
          >Export</v-btn
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

<style scoped>
div :deep(.v-text-field input.v-field__input) {
  min-height: 40px;
  padding: 5px 10px;
}
div :deep(.v-checkbox) {
  min-height: 36px;
  height: 36px;
}
div :deep(.v-radio) {
  min-height: 36px;
  height: 36px;
}
div :deep(.v-label) {
  opacity: 1;
}
.v-card::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.v-card::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px light-grey;
  border-radius: 3px;
  margin-top: 20px;
  margin-bottom: 20px;
}
/* Handle */
.v-card::-webkit-scrollbar-thumb {
  background: #f0a00055;
  border-radius: 3px;
}

/* Handle on hover */
.v-dialog::-webkit-scrollbar-thumb:hover {
  background: #f0a00055;
}
</style>
