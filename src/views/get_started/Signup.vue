<template>
  <div class="d-flex flex-row">
    <div
      class="w-50 d-flex flex-column"
      v-if="mdAndUp"
      style="position: sticky; min-height: 100vh; max-height: 0; top: 0"
    >
      <div class="position-absolute h-100 w-100">
        <v-img
          width="100%"
          height="100%"
          src="@/assets/landing/bg_login.png"
          cover
        />
      </div>
      <div style="margin-top: 64px; margin-left: 82px; margin-right: 82px">
        <v-img width="120" height="104" src="@/assets/logo.png" />
      </div>
      <div
        class="font-16 app-medium-font light-font"
        style="
          margin-left: 82px;
          margin-right: 82px;
          margin-top: 56px;
          z-index: 1;
        "
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, dolor
        posuere sagittis nisi, nulla in sed tristique. Malesuada nec curabitur
        donec mi ac diam dolor egestas. Congue aenean sed vel egestas. Platea
        massa sit vel consectetur purus facilisi sit purus. Pharetra sit sit
        urna amet.
      </div>
    </div>
    <div
      :class="mdAndUp ? 'w-50' : 'w-100'"
      class="d-flex flex-column align-center justify-center h-100"
      style="overflow: auto"
    >
      <div class="d-flex flex-column w-100" style="padding: 64px">
        <div style="margin-right: 82px" v-if="!mdAndUp">
          <v-img width="120" height="104" src="@/assets/logo.png" />
        </div>
        <span class="font-28 dark-font app-semibold-font">Sign Up</span>
        <span class="font-16 shade-font app-medium-font mt-4">
          Welcome to Billeasy. Create your account now!
        </span>
        <span class="font-12 shade-font app-semibold-font mt-8">
          PERSONAL DETAILS
        </span>
        <v-row class="mt-6">
          <v-col cols="12" md="4">
            <v-text-field
              placeholder="First Name"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              placeholder="Last Name"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              placeholder="Phone Number"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              placeholder="Work Email"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </v-col>
        </v-row>
        <span class="font-12 shade-font app-semibold-font mt-12">
          COMPANY DETAILS
        </span>
        <v-row class="mt-6">
          <v-col cols="12" md="4">
            <v-text-field
              placeholder="Company name"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              placeholder="Organization number"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              placeholder="VAT-number"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              placeholder="Zip code"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              placeholder="City"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              placeholder="Country"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['Sweden', 'United State']"
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              placeholder="Address"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              placeholder="Business Contact email"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              placeholder="Business phone number"
              variant="outlined"
              rounded="lg"
              hide-details
            />
          </v-col>
        </v-row>
        <span class="font-12 shade-font app-semibold-font mt-12">
          SUBSCRIPTION DETAILS
        </span>
        <v-row class="mt-6">
          <v-col cols="12" md="4">
            <v-select
              placeholder="Package"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['Package', 'Package2']"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              placeholder="Payment period"
              variant="outlined"
              rounded="lg"
              hide-details
              :items="['Payment period', 'period 2']"
            />
          </v-col>
        </v-row>
        <v-btn
          rounded="lg"
          flat
          style="
            height: 48px;
            width: 400px;
            background-color: #20c39d;
            color: white;
            margin-top: 56px;
          "
          class="text-none app-semibold-font font-16"
          @click="goToHome"
        >
          Get Started
        </v-btn>
        <div class="d-flex flex-row align-center mt-6">
          <span class="font-14 shade-font app-medium-font">
            Already have an account?
          </span>
          <v-btn
            flat
            variant="text"
            class="text-none app-medium-font font-14 ms-1"
            color="#20c39d"
            rounded="lg"
            @click="goToLogin"
          >
            Login
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useDisplay } from "vuetify";
import { useRouter } from "vue-router";
const { sm, mdAndUp } = useDisplay();

const router = useRouter();
const goToHome = () => {
  router.push({ name: "home" });
};
const goToLogin = () => {
  router.push({ name: "login" });
};
</script>
<style scoped>
.bg-landing {
  background-image: url("@/assets/landing/bg_login.png");
  background-size: cover;
  height: 100vh;
}
</style>
