<template>
  <div class="w-100 h-100 d-flex align-center justify-center flex-column">
    <div class="app-bold-font blue-font font-160">500</div>
    <div class="app-semibold-font font-28 dark-font">Server Error</div>
    <div
      class="app-regular-font font-16 dark-font mx-5 text-center mt-8"
      style="max-width: 432px; line-height: 2"
    >
      Server got some temporary problems, try again shortly.
    </div>
    <v-btn
      color="#20C39D"
      prepend-icon="mdi-chevron-left"
      rounded="lg"
      elevation="8"
      class="text-none mt-12 white-font app-medium-font font-14"
      size="large"
      @click="goToHome"
    >
      Back to Home
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

function goToHome() {
  router.replace({ name: "home" });
}
</script>
