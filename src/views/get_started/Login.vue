<template>
  <div class="d-flex flex-row">
    <div
      class="w-50 position-relative d-flex flex-column"
      v-if="mdAndUp"
      style="height: 100vh"
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
      class="d-flex flex-column align-center justify-center"
    >
      <div
        style="max-width: 432px; margin-bottom: 95px"
        class="d-flex flex-column w-100"
      >
        <span class="font-28 dark-font app-semibold-font mx-4">Login</span>
        <span
          class="font-16 shade-font app-medium-font mt-4 mx-4"
          style="margin-bottom: 64px"
        >
          Welcome back please enter your details
        </span>
        <v-text-field
          placeholder="Enter Email"
          variant="outlined"
          rounded="lg"
          hide-details
          class="mx-4"
        />
        <v-text-field
          placeholder="Enter Password"
          variant="outlined"
          rounded="lg"
          hide-details
          type="password"
          class="mt-4 mx-4"
        />
        <div class="w-100 d-flex flex-row justify-end">
          <v-btn
            flat
            variant="text"
            class="text-none app-medium-font font-14 mt-1"
            color="#20c39d"
            rounded="lg"
            @click="goToForgotPassword"
          >
            Forgot password?
          </v-btn>
        </div>
        <v-btn
          rounded="lg"
          flat
          style="
            height: 48px;
            background-color: #20c39d;
            color: white;
            margin-top: 56px;
          "
          class="text-none app-semibold-font font-16 mx-4"
          @click="goToHome"
        >
          Login
        </v-btn>
        <div class="d-flex flex-row align-center justify-center mt-6">
          <span class="font-14 shade-font app-medium-font">
            Don't have an account?
          </span>
          <v-btn
            flat
            variant="text"
            class="text-none app-medium-font font-14 ms-1"
            color="#20c39d"
            rounded="lg"
          >
            Sign Up
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
const goToForgotPassword = () => {
  router.push({ name: "forgot-password" });
};
</script>
<style scoped>
.bg-landing {
  background-image: url("@/assets/landing/bg_login.png");
  background-size: cover;
  height: 100vh;
}
</style>
