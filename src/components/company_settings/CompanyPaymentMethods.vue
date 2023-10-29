<template>
  <v-card class="rounded-xl me-8 my-8" elevation="0">
    <v-card-title
      class="app-semibold-font font-20 dark-font mt-6 mx-3 d-flex flex-row"
    >
      <div class="me-2">
        <v-img
          width="28"
          height="28"
          src="@/assets/svg/company_settings/company_information.svg"
        />
      </div>
      Payment methods
    </v-card-title>
    <v-card-text class="mt-8 ms-4">
      <v-row>
        <v-col cols="12" md="6">
          <div class="d-flex flex-column">
            <span class="font-12 app-semibold-font shade-font">
              COMPANY INFORMATION
            </span>
            <v-btn
              style="
                height: 80px;
                width: 224px;
                margin-top: 27px;
                border-color: #e6e6ed;
              "
              rounded="xl"
              variant="outlined"
            >
              <div>
                <v-img
                  width="32"
                  height="32"
                  src="@/assets/svg/company_settings/image.svg"
                />
              </div>
              <div class="d-flex flex-column ms-4">
                <span class="font-13 shade-font app-medium-font">
                  Upload Logo
                </span>
                <span class="font-14 teal-font app-semibold-font">
                  Browse Files
                </span>
              </div>
            </v-btn>
            <span class="font-13 app-medium-font dark-font mt-6 mb-1">
              Company Name
            </span>
            <div style="width: 224px">
              <v-text-field
                placeholder="Company Name"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
            <span class="font-13 app-medium-font dark-font mt-6 mb-1">
              Organization Number
            </span>
            <div style="width: 224px">
              <v-text-field
                placeholder="Organization Number"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
            <span class="font-13 app-medium-font dark-font mt-6 mb-1"
              >VAT Number</span
            >
            <div style="width: 224px">
              <v-text-field
                placeholder="Organization Number"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
            <div class="mt-6 mb-1">
              <app-checkbox v-model="vatRegistered" />
              <span class="font-14 app-regular-font dark-font ms-1">
                VAT Registered
              </span>
            </div>
            <span class="font-13 app-medium-font dark-font mt-6 mb-1">
              Standard VAT
            </span>
            <div style="width: 224px">
              <v-select
                placeholder="Standard VAT"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['25%', '50%']"
              />
            </div>
            <div class="mt-6 mb-1">
              <app-checkbox v-model="approvedVAT" />
              <span class="font-14 app-regular-font dark-font ms-1">
                Approved for VAT
              </span>
            </div>
            <span class="font-13 app-medium-font dark-font mt-6 mb-1">
              Website
            </span>
            <div style="width: 224px">
              <v-text-field
                placeholder="Website"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex flex-column">
            <span class="font-12 app-semibold-font shade-font"> ADDRESS </span>
            <span class="font-13 app-medium-font dark-font mt-6 mb-1">
              Street address
            </span>
            <div style="width: 224px">
              <v-text-field
                placeholder="Street address"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
            <span class="font-13 app-medium-font dark-font mt-6 mb-1">
              Zip code
            </span>
            <div style="width: 224px">
              <v-text-field
                placeholder="Zip code"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
            <span class="font-13 app-medium-font dark-font mt-6 mb-1">
              City
            </span>
            <div style="width: 224px">
              <v-text-field
                placeholder="City"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
            <span class="font-13 app-medium-font dark-font mt-6 mb-1">
              Country
            </span>
            <div style="width: 224px">
              <v-select
                placeholder="Country"
                variant="outlined"
                rounded="lg"
                hide-details
                :items="['Sweden', 'United State']"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider class="mt-8" />
    <v-card-actions class="d-flex flex-row justify-end bg-gray py-7 px-8">
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
        prepend-icon="mdi-check"
        rounded="lg"
        style="
          background: #20c39d !important;
          color: white !important;
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
</template>
<script lang="ts" setup>
import { ref, watch, watchEffect } from "vue";
import AppCheckbox from "../default/AppCheckbox.vue";

const vatRegistered = ref(false);
const approvedVAT = ref(false);
</script>

<style scoped></style>
