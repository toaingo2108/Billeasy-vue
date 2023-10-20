<template>
  <div style="height: 33.3%" class="pb-3">
    <v-card class="h-100 rounded-xl d-flex flex-column">
      <v-card-title
        class="app-semibold-font font-20 dark-font d-flex flex-row mt-4 ms-4 align-center"
      >
        <div class="me-3">
          <v-img
            width="28"
            height="28"
            src="@/assets/svg/home/subscriptions.svg"
          />
        </div>
        Subscriptions
        <v-icon color="#8B8BA9" size="14" class="ms-3"
          >mdi-information-outline</v-icon
        >
      </v-card-title>
      <v-card-text class="d-flex flex-row align-center mt-3 ms-4 pb-1">
        <div class="blue-font app-semibold-font font-24">300</div>
        <div class="app-regular-font font-13 shade-font ms-2">
          Total Subscribers
        </div>
      </v-card-text>
      <v-card-text class="d-flex pa-3">
        <div
          style="width: 33.33%"
          class="d-flex flex-row align-center justify-center"
        >
          <div class="me-1">
            <v-img
              width="18"
              height="18"
              src="@/assets/svg/home/subscription_active.svg"
            />
          </div>
          <span class="font-13 shade-font app-regular-font me-1">Active:</span>
          <span class="font-13 app-semibold-font dark-font">8676</span>
        </div>
        <div
          style="width: 33.33%"
          class="d-flex flex-row align-center justify-center"
        >
          <div class="me-1">
            <v-img
              width="18"
              height="18"
              src="@/assets/svg/home/subscription_paused.svg"
            />
          </div>
          <span class="font-13 shade-font app-regular-font me-1">Paused:</span>
          <span class="font-13 app-semibold-font dark-font">51</span>
        </div>
        <div
          style="width: 33.33%"
          class="d-flex flex-row align-center justify-center"
        >
          <div class="me-1">
            <v-img
              width="18"
              height="18"
              src="@/assets/svg/home/subscription_canceled.svg"
            />
          </div>
          <span class="font-13 shade-font app-regular-font me-1"
            >Canceled:</span
          >
          <span class="font-13 app-semibold-font dark-font">49</span>
        </div>
      </v-card-text>
      <v-card-text class="mt-0 pt-0">
        <table class="w-100 h-100">
          <tr>
            <td>
              <span class="font-13 dark-font app-regular-font"
                >This month:</span
              >
            </td>
            <td>
              <span class="font-13 forest-font app-semibold-font">+12</span>
              <span class="font-13 shade-font app-regular-font"> new</span>
            </td>
            <td>
              <span class="font-13 dark-font app-semibold-font">-2</span>
              <span class="font-13 shade-font app-regular-font"> cancels</span>
            </td>
          </tr>
          <tr>
            <td>
              <span class="font-13 dark-font app-regular-font"
                >Last 12 months:</span
              >
            </td>
            <td>
              <span class="font-13 forest-font app-semibold-font">+31</span>
              <span class="font-13 shade-font app-regular-font"> new</span>
            </td>
            <td>
              <span class="font-13 dark-font app-semibold-font">-14</span>
              <span class="font-13 shade-font app-regular-font"> cancels</span>
            </td>
          </tr>
        </table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup></script>
