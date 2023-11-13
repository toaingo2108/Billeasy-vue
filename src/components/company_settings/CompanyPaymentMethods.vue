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
              BANK TRANSFER
            </span>
            <div class="d-flex flex-row align-center mt-6 mb-1">
              <span class="font-13 app-medium-font dark-font wx-200">
                Owner of bank account
              </span>
              <v-text-field
                placeholder="Owner of bank account"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
            <div class="d-flex flex-row align-center mt-6 mb-1">
              <span class="font-13 app-medium-font dark-font wx-200">
                Account number
              </span>
              <v-text-field
                placeholder="Account number"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
            <div class="d-flex flex-row align-center mt-6 mb-1">
              <span class="font-13 app-medium-font dark-font wx-200">
                Clearing number
              </span>
              <v-text-field
                placeholder="Clearing number"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
            <div class="d-flex flex-row align-center mt-6 mb-1">
              <span class="font-13 app-medium-font dark-font wx-200">
                Bank
              </span>
              <v-text-field
                placeholder="Bank"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
            <span class="font-12 app-semibold-font shade-font mt-12">
              IBAN
            </span>
            <div class="d-flex flex-row align-center mt-6 mb-1">
              <span class="font-13 app-medium-font dark-font wx-200">
                IBAN
              </span>
              <v-text-field
                placeholder="IBAN"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
            <div class="d-flex flex-row align-center mt-6 mb-1">
              <span class="font-13 app-medium-font dark-font wx-200">
                SWIFT/BIC
              </span>
              <v-text-field
                placeholder="SWIFT/BIC"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
            <div class="d-flex flex-row align-center mt-6 mb-1">
              <span class="font-13 app-medium-font dark-font wx-200">
                Bank
              </span>
              <v-text-field
                placeholder="Bank"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
            <div class="d-flex flex-row align-center mt-6 mb-1">
              <span class="font-13 app-medium-font dark-font wx-200">
                Bank
              </span>
              <v-text-field
                placeholder="Bank"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex flex-column" :class="mdAndUp ? 'ps-12' : ''">
            <span class="font-12 app-semibold-font shade-font"> PLUSGIRO </span>
            <div class="d-flex flex-row align-center mt-6 mb-1">
              <span class="font-13 app-medium-font dark-font wx-200">
                Plusgiro account
              </span>
              <v-text-field
                placeholder="Plusgiro account"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
            <span class="font-12 app-semibold-font shade-font mt-12">
              BANKGIRO
            </span>
            <div class="d-flex flex-row align-center mt-6 mb-1">
              <span class="font-13 app-medium-font dark-font wx-200">
                Bankgiro account
              </span>
              <v-text-field
                placeholder="Bankgiro account"
                variant="outlined"
                rounded="lg"
                hide-details
              />
            </div>
            <span class="font-12 app-semibold-font shade-font mt-12">
              SWISH
            </span>
            <div class="d-flex flex-row align-center mt-6 mb-1">
              <span class="font-13 app-medium-font dark-font wx-200">
                Swish
              </span>
              <v-text-field
                placeholder="Swish"
                variant="outlined"
                rounded="lg"
                hide-details
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
import { useDisplay } from "vuetify";

const vatRegistered = ref(false);
const approvedVAT = ref(false);

const { mdAndUp } = useDisplay();
</script>

<style scoped></style>
