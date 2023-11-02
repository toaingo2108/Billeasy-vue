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
        class="d-flex flex-column"
      >
        <v-btn
          variant="outlined"
          prepend-icon="mdi-chevron-left"
          color="#0d0d1e"
          class="text-none font-14 app-medium-font mx-4"
          rounded="lg"
          style="height: 37px; width: 110px; border-color: #d1d1e2"
          @click="goBack"
        >
          Go to Login
        </v-btn>
        <span
          class="font-20 dark-font app-semibold-font mx-4"
          style="margin-top: 96px"
        >
          Password updated successfully
        </span>
        <v-text-field
          placeholder="Re-enter New Password"
          variant="outlined"
          rounded="lg"
          hide-details
          class="mx-4 mt-4"
        />
        <v-btn
          rounded="lg"
          flat
          style="
            height: 48px;
            background-color: #20c39d;
            color: white;
            margin-top: 24px;
          "
          class="text-none app-semibold-font font-16 mx-4"
          @click="goToNext"
        >
          Login
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useDisplay } from "vuetify";
import { useRouter } from "vue-router";
const { mdAndUp } = useDisplay();

const router = useRouter();
const goToNext = () => {
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
