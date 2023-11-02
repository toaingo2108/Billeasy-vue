<template>
  <v-card class="rounded-xl me-8 mt-8" elevation="0">
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
      Account
    </v-card-title>
    <v-card-text class="mt-8 ms-4">
      <div class="d-flex flex-column">
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
          First Name
        </span>
        <div style="width: 224px">
          <v-text-field
            placeholder="First Name"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <span class="font-13 app-medium-font dark-font mt-6 mb-1">
          Last Name
        </span>
        <div style="width: 224px">
          <v-text-field
            placeholder="Last Name"
            variant="outlined"
            rounded="lg"
            hide-details
          />
        </div>
        <span
          class="font-13 app-medium-font dark-font mt-6 mb-1"
          style="opacity: 0.5"
        >
          Email
        </span>
        <div style="width: 224px">
          <v-text-field
            placeholder="Email"
            variant="outlined"
            rounded="lg"
            hide-details
            disabled
          />
        </div>
        <span class="font-13 app-medium-font dark-font mt-6 mb-1"> Phone </span>
        <div style="width: 224px">
          <v-text-field
            placeholder="Phone"
            variant="outlined"
            rounded="lg"
            hide-details
            :items="['25%', '50%']"
          />
        </div>
        <span class="font-13 app-medium-font dark-font mt-6 mb-1">
          Password
        </span>
        <div class="d-flex flex-row align-center">
          <div style="width: 224px">
            <v-text-field
              placeholder="Password"
              variant="outlined"
              rounded="lg"
              hide-details
              type="password"
            />
          </div>
          <v-btn
            flat
            variant="text"
            prepend-icon="mdi-key-variant"
            class="text-none font-14 app-medium-font ms-2"
            color="#20C39D"
          >
            Change Password
          </v-btn>
        </div>
      </div>
    </v-card-text>
    <v-card-actions class="d-flex flex-row justify-end">
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
          margin-right: 48px;
          margin-bottom: 35px;
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
