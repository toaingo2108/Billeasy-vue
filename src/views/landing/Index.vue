<template>
  <div class="w-100 d-flex flex-column">
    <div class="bg-landing" style="height: 1290px">
      <div class="d-flex flex-row">
        <div>
          <v-img
            width="120"
            height="104"
            src="@/assets/logo.png"
            class="mt-10 ms-15"
          />
        </div>
        <v-spacer />
        <div
          class="d-flex flex-row"
          style="margin-top: 72px; margin-right: 95px"
        >
          <v-btn
            flat
            variant="text"
            class="font-16 app-regular-font text-none"
            color="white"
          >
            Features
          </v-btn>
          <v-btn
            flat
            variant="text"
            class="font-16 app-regular-font text-none ms-10"
            color="white"
          >
            About us
          </v-btn>
          <v-btn
            flat
            variant="text"
            class="font-16 app-regular-font text-none ms-10"
            color="white"
          >
            Contacts
          </v-btn>
          <v-btn
            flat
            variant="text"
            class="font-16 app-regular-font text-none ms-10"
            color="white"
          >
            Pricing
          </v-btn>
          <v-btn
            flat
            variant="text"
            class="font-16 app-regular-font text-none ms-10"
            color="white"
          >
            Blog
          </v-btn>
          <v-btn
            flat
            class="font-16 app-regular-font text-none ms-10"
            rounded="lg"
            style="
              background-color: #20c39d;
              color: white;
              height: 40px;
              min-height: 40px;
              max-height: 40px;
            "
          >
            Login
          </v-btn>
        </div>
      </div>
      <div class="d-flex flex-column align-center">
        <div
          class="font-80 app-semibold-font white-font text-center"
          style="margin-top: 160px; line-height: 1.2"
        >
          Corporate monitoring<br />
          on Autopilot
        </div>
        <div
          class="font-20 white-font text-center app-medium-font"
          style="width: 772px; margin-top: 64px"
        >
          Your own AI powered assistant monitoring, alerting and taking actions
          on critical financial events. Stay on top of corporate filings for
          your customers and suppliers, take swift action and protect your
          cashflow.
        </div>
        <div style="margin-top: 64px">
          <v-btn
            flat
            class="text-none dark-font app-semibold-font font-16"
            color="#0D0D1E"
            style="
              background-color: white;
              height: 64px;
              width: 176px;
              font-size: 16px;
            "
            rounded="lg"
          >
            Get Started
          </v-btn>
          <v-btn
            flat
            class="text-none font-16 app-semibold-font"
            color="white"
            rounded="lg"
            style="
              background-color: #20c39d !important;
              color: white !important;
              height: 64px;
              width: 176px;
              font-size: 16px;
              margin-left: 12px;
            "
          >
            <v-img width="24" height="24" src="@/assets/landing/contact.svg" />
            Contact Us
          </v-btn>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column align-center">
      <div style="margin-top: -500px">
        <v-img width="1440" height="967" src="@/assets/landing/main_home.png" />
      </div>
      <span class="font-56 dark-font app-semibold-font">
        How Billeasy Works
      </span>
      <div style="margin-top: 80px; margin-bottom: 190px">
        <div class="d-flex flex-row justify-center">
          <v-card
            color="#0D0D1E"
            width="501"
            height="352"
            rounded="xl"
            elevation="0"
            class="d-flex flex-column align-center justify-center mx-6"
          >
            <span
              style="
                width: 64px;
                height: 64px;
                color: white;
                border-radius: 32px;
                background-color: #20c39d;
              "
              class="font-32 app-semibold-font d-flex align-center justify-center mx-6"
            >
              1
            </span>
            <span class="font-32 app-semibold-font white-font mt-12">
              Create Account
            </span>
            <span
              class="font-18 app-medium-font white-font mx-8 text-center mt-6"
            >
              Install the web app, connect to your accounting and configure your
              account settings.
            </span>
          </v-card>
          <v-card
            color="white"
            width="501"
            height="352"
            rounded="xl"
            elevation="0"
            class="d-flex flex-column align-center justify-center mx-6"
          >
            <span
              style="
                width: 64px;
                height: 64px;
                color: white;
                border-radius: 32px;
                background-color: #20c39d;
              "
              class="font-32 app-semibold-font d-flex align-center justify-center"
            >
              1
            </span>
            <span class="font-32 app-semibold-font dark-font mt-12">
              Set Monitor Rules
            </span>
            <span
              class="font-18 app-medium-font dark-font mx-8 text-center mt-6"
            >
              Select what you want monitored and how you want to be notified.
            </span>
          </v-card>
          <v-card
            color="white"
            width="501"
            height="352"
            rounded="xl"
            elevation="0"
            class="d-flex flex-column align-center justify-center mx-6"
          >
            <span
              style="
                width: 64px;
                height: 64px;
                color: white;
                border-radius: 32px;
                background-color: #20c39d;
              "
              class="font-32 app-semibold-font d-flex align-center justify-center"
            >
              1
            </span>
            <span class="font-32 app-semibold-font dark-font mt-12">
              AI gets to work
            </span>
            <span
              class="font-18 app-medium-font dark-font mx-8 text-center mt-6"
            >
              Receive notifications, recommendation and get automated help with
              document filings
            </span>
          </v-card>
        </div>
      </div>
    </div>
    <div class="bg-landing d-flex flex-column align-center">
      <span
        class="font-56 white-font app-semibold-font"
        style="margin-top: 90px"
      >
        What problems does Billeasy solve?
      </span>
      <div style="margin-top: 80px; margin-bottom: 80px">
        <v-row>
          <v-col
            cols="12"
            md="6"
            class="d-flex flex-column justify-center"
            style="width: 595px"
          >
            <div
              class="font-24 white-font app-medium-font mx-10 d-flex flex-row"
            >
              <v-icon color="#20C39D" class="me-2">mdi-check</v-icon>
              Bevaka alla dina bolagsengagemang
            </div>
            <div
              class="font-24 white-font app-medium-font mx-10 mt-7 d-flex flex-row"
            >
              <v-icon color="#20C39D" class="me-2">mdi-check</v-icon>
              Håll koll på dina kunder, leverantörer och konkurrenter
            </div>
            <div
              class="font-24 white-font app-medium-font mx-10 mt-7 d-flex flex-row"
            >
              <v-icon color="#20C39D" class="me-2">mdi-check</v-icon>
              Få notiser på tidiga signaler och undvik onödiga kreditförluster
            </div>
            <div
              class="font-24 white-font app-medium-font mx-10 mt-7 d-flex flex-row"
            >
              <v-icon color="#20C39D" class="me-2">mdi-check</v-icon>
              Automatisera Fodringsanmälningar för kundkonkurser
            </div>
            <div
              class="font-24 white-font app-medium-font mx-10 mt-7 d-flex flex-row"
            >
              <v-icon color="#20C39D" class="me-2">mdi-check</v-icon>
              Bygg upp smarta logikregler vid bevakningar
            </div>
            <div
              class="font-24 white-font app-medium-font mx-10 mt-7 d-flex flex-row"
            >
              <v-icon color="#20C39D" class="me-2">mdi-check</v-icon>
              Bevaka marknad och industritrender
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="font-24 white-font app-medium-font mx-10">
              <v-img
                src="@/assets/landing/screenshot_mobile.png"
                width="648"
                height="738"
              />
            </div>
          </v-col>
        </v-row>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style scoped>
.bg-landing {
  background-image: url("@/assets/landing/bg_landing.png");
  background-size: cover;
  background-position: 50% 50%;
}
</style>
