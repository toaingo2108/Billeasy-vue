<template>
  <div class="w-100 d-flex flex-column bg-white">
    <div class="bg-landing" :style="mdAndUp ? 'height: 1228px;' : ''">
      <div class="d-flex flex-row">
        <div>
          <v-img
            :width="mdAndUp ? 120 : 60"
            :height="mdAndUp ? 104 : 52"
            src="@/assets/logo.png"
            class="mt-10"
            :class="mdAndUp ? 'ms-15' : 'ms-2'"
          />
        </div>
        <v-spacer />
        <div
          class="d-flex flex-row"
          :style="
            mdAndUp
              ? 'margin-top: 72px; margin-right: 95px'
              : 'margin-top: 50px; margin-right: 30px'
          "
        >
          <v-btn
            flat
            variant="text"
            class="app-regular-font text-none"
            :class="mdAndUp ? 'font-16' : 'font-8'"
            color="white"
            @click="goToFeatures"
          >
            Features
          </v-btn>
          <v-btn
            flat
            variant="text"
            class="app-regular-font text-none"
            :class="mdAndUp ? 'font-16 ms-10' : 'font-8 ms-2'"
            color="white"
            @click="goToAboutUs"
          >
            About us
          </v-btn>
          <v-btn
            flat
            variant="text"
            class="app-regular-font text-none"
            :class="mdAndUp ? 'font-16 ms-10' : 'font-8 ms-2'"
            color="white"
            @click="goToContact"
          >
            Contact
          </v-btn>
          <v-btn
            flat
            variant="text"
            class="app-regular-font text-none"
            color="white"
            @click="goToPricing"
            :class="mdAndUp ? 'font-16 ms-10' : 'font-8 ms-2'"
          >
            Pricing
          </v-btn>
          <v-btn
            flat
            variant="text"
            class="app-regular-font text-none"
            color="white"
            @click="goToBlog"
            :class="mdAndUp ? 'font-16 ms-10' : 'font-8 ms-2'"
          >
            Blog
          </v-btn>
          <v-btn
            flat
            class="app-regular-font text-none"
            rounded="lg"
            style="
              background-color: #20c39d;
              color: white;
              height: 40px;
              min-height: 40px;
              max-height: 40px;
            "
            @click="goToLogin"
            :class="mdAndUp ? 'font-16 ms-10' : 'font-8 ms-2'"
          >
            Login
          </v-btn>
        </div>
      </div>
      <div
        class="d-flex flex-column align-center"
        :class="mdAndUp ? '' : 'mb-15'"
      >
        <div
          class="app-semibold-font white-font text-center"
          style="margin-top: 160px"
          :class="mdAndUp ? 'font-80' : 'font-40'"
        >
          En vinnande kombination.
        </div>
        <div
          class="light-font text-center app-medium-font"
          style="margin-top: 64px; margin-bottom: 104px; line-height: 2"
          :class="mdAndUp ? 'font-20' : 'font-12'"
          :style="
            mdAndUp
              ? 'width: 772px;'
              : 'width: 100%; padding-left: 30px; padding-right: 30px'
          "
        >
          Grundarna av Imexta är en av Fortnoxs ledande integrationspartners och
          har sedan 2019 levererat över 50 andra kopplingar som hjälper
          företagare och redovisningsbyråer med effektivisering och
          automatisering.
        </div>
        <div>
          <div
            class="d-flex flex-row app-medium-font white-font"
            :class="mdAndUp ? 'font-24' : 'font-14'"
          >
            <v-icon color="#20C39D" class="me-2"> mdi-check </v-icon>
            Skapa personliga import-/exportmallar
          </div>
          <div
            class="d-flex flex-row app-medium-font white-font"
            style="margin-top: 28px"
            :class="mdAndUp ? 'font-24' : 'font-14'"
          >
            <v-icon color="#20C39D" class="me-2"> mdi-check </v-icon>
            Importera bokföringsdata via Imexta
          </div>
          <div
            class="d-flex flex-row app-medium-font white-font"
            style="margin-top: 28px"
            :class="mdAndUp ? 'font-24' : 'font-14'"
          >
            <v-icon color="#20C39D" class="me-2"> mdi-check </v-icon>
            Exportera bokföringsdata via Imexta
          </div>
          <div
            class="d-flex flex-row app-medium-font white-font"
            style="margin-top: 28px"
            :class="mdAndUp ? 'font-24' : 'font-14'"
          >
            <v-icon color="#20C39D" class="me-2"> mdi-check </v-icon>
            Bokför & skicka importerade fakturor automatiskt
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column align-center">
      <div class="w-100">
        <div
          :style="
            mdAndUp
              ? 'margin-top: 112px; margin-left: 240px; margin-bottom: 112px'
              : 'margin: 30px;'
          "
        >
          <v-img
            :width="mdAndUp ? 563 : 232"
            :height="mdAndUp ? 208 : 104"
            src="@/assets/landing/fortnox_logo.png"
          />
        </div>
      </div>
      <span
        class="forest-font app-semibold-font w-100"
        style="margin-bottom: 48px"
        :class="mdAndUp ? 'font-32' : 'font-16'"
        :style="mdAndUp ? 'padding-left: 240px' : 'padding-left: 30px'"
      >
        Småföretagarnas bästa vän.
      </span>
      <div
        class="w-100"
        style="padding-left: 240px; padding-right: 240px"
        :style="
          mdAndUp
            ? 'padding-left: 240px; padding-right: 240px'
            : 'padding-left: 30px; padding-right: 30px'
        "
      >
        <div
          class="shade-font app-medium-font mt-12 w-100"
          style="margin-bottom: 72px"
          :class="mdAndUp ? 'font-20' : 'font-12'"
          :style="mdAndUp ? 'max-width: 1216px;' : 'width: 100%;'"
        >
          Fortnox är ett av Sveriges mest använda ekonomiprogram med många
          funktioner som underlättar redovisning för små och stora bolag. Med
          Fortnox kan företagare sköta allt från bokföring till lagerhantering.
        </div>
      </div>
      <div
        style="width: 100%; margin-top: 72px"
        :style="mdAndUp ? 'padding-left: 240px;' : 'padding-left: 30px'"
      >
        <div
          class="d-flex flex-row app-medium-font dark-font"
          :class="mdAndUp ? 'font-24' : 'font-14'"
        >
          <v-icon color="#20C39D" class="me-2"> mdi-check </v-icon>
          Helt molnbaserat
        </div>
        <div
          class="d-flex flex-row app-medium-font dark-font"
          style="margin-top: 28px"
          :class="mdAndUp ? 'font-24' : 'font-14'"
        >
          <v-icon color="#20C39D" class="me-2"> mdi-check </v-icon>
          Öppet API för skräddarsydda flöden
        </div>
        <div
          class="d-flex flex-row app-medium-font dark-font"
          :class="mdAndUp ? 'font-24' : 'font-14'"
          style="margin-top: 28px"
        >
          <v-icon color="#20C39D" class="me-2"> mdi-check </v-icon>
          Mer än 300 integrationer
        </div>
        <div
          class="d-flex flex-row app-medium-font dark-font"
          :class="mdAndUp ? 'font-24' : 'font-14'"
          style="margin-top: 28px"
        >
          <v-icon color="#20C39D" class="me-2"> mdi-check </v-icon>
          Populär bland byråer
        </div>
      </div>
      <span
        class="dark-font app-semibold-font"
        style="margin-top: 240px"
        :class="mdAndUp ? 'font-56' : 'font-28'"
      >
        Så här går det till
      </span>
      <div style="margin-top: 80px; margin-bottom: 192px">
        <div
          class="d-flex justify-center"
          :class="mdAndUp ? 'flex-row' : 'flex-column'"
        >
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
            color="#F7F7FA"
            width="501"
            height="352"
            rounded="xl"
            elevation="0"
            class="d-flex flex-column align-center justify-center mx-6"
            :class="mdAndUp ? '' : 'mt-5'"
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
              2
            </span>
            <span class="font-32 app-semibold-font dark-font mt-12">
              Enrich your store
            </span>
            <span
              class="font-18 app-medium-font dark-font mx-8 text-center mt-6"
            >
              Import product data, set your branding, store look and invite
              customers.
            </span>
          </v-card>
          <v-card
            color="#F7F7FA"
            width="501"
            height="352"
            rounded="xl"
            elevation="0"
            class="d-flex flex-column align-center justify-center mx-6"
            :class="mdAndUp ? '' : 'mt-5'"
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
              3
            </span>
            <span class="font-32 app-semibold-font dark-font mt-12">
              Start selling
            </span>
            <span
              class="font-18 app-medium-font dark-font mx-8 text-center mt-6"
            >
              Launch your B2B portal without any fuss! Receive orders, cater to
              your customers and manage your B2B sales smoothly.
            </span>
          </v-card>
        </div>
      </div>
    </div>
    <div class="bg-dark-blue" style="padding-top: 80px">
      <v-row style="margin-bottom: 108px">
        <v-col cols="12" md="5">
          <div class="d-flex flex-column align-center justify-center">
            <div
              :style="
                mdAndUp
                  ? 'width: 458px'
                  : 'width: 100%; padding-left: 30px; padding-right: 30px'
              "
            >
              <div>
                <v-img width="120" height="104" src="@/assets/logo.png" />
              </div>
              <div
                class="font-18 app-regular-font blue-magenta-font"
                style="margin-top: 48px"
              >
                Billeasy is a web and mobile app which helps companies and
                organisations to produce, manage, share, digitally sign and
                store documents and sales proposals.
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <div class="d-flex" :class="mdAndUp ? 'flex-row' : 'flex-column'">
            <div
              class="d-flex flex-column"
              :style="
                mdAndUp
                  ? 'width: 388px'
                  : 'width: 100%; padding-left: 30px; padding-right: 30px'
              "
            >
              <span class="font-28 app-semibold-font white-font">
                Resources
              </span>
              <span class="font-18 app-medium-font blue-magenta-font mt-12">
                Request Integration or Feature
              </span>
              <span
                class="font-18 app-medium-font blue-magenta-font"
                style="margin-top: 18px"
              >
                Privacy Policy
              </span>
              <span
                class="font-18 app-medium-font blue-magenta-font"
                style="margin-top: 18px"
              >
                Terms & Conditions
              </span>
              <span
                class="font-18 app-medium-font blue-magenta-font"
                style="margin-top: 18px"
              >
                Partnerships
              </span>
            </div>
            <div
              class="d-flex flex-column"
              :style="
                mdAndUp
                  ? ''
                  : 'width: 100%; padding-left: 30px; padding-right: 30px; padding-top: 30px'
              "
            >
              <span class="font-28 app-semibold-font white-font">
                Features
              </span>
              <span class="font-18 app-medium-font blue-magenta-font mt-12">
                Backrupsy Monitoring
              </span>
              <span
                class="font-18 app-medium-font blue-magenta-font"
                style="margin-top: 18px"
              >
                Bankrupsy Automated Fillings
              </span>
              <span
                class="font-18 app-medium-font blue-magenta-font"
                style="margin-top: 18px"
              >
                Corporate Event Alerts
              </span>
              <span
                class="font-18 app-medium-font blue-magenta-font"
                style="margin-top: 18px"
              >
                AI Trained Custom Action Flow
              </span>
              <span
                class="font-18 app-medium-font blue-magenta-font"
                style="margin-top: 18px"
              >
                Recommendation Advisor
              </span>
              <span
                class="font-18 app-medium-font blue-magenta-font"
                style="margin-top: 18px"
              >
                Business Analytics
              </span>
            </div>
          </div>
        </v-col>
      </v-row>
      <div
        :style="
          mdAndUp
            ? 'margin-left: calc(20.8333% - 236px); margin-right: calc(20.8333% - 236px); margin-bottom: 50px;'
            : 'width: 100%; padding-left: 30px;padding-right: 30px; padding-bottom: 30px'
        "
      >
        <v-divider color="#59597B" class="mb-5" />
        <span class="font-18 app-medium-font blue-magenta-font">
          © 2023 Billeasy l All rights reserved
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useDisplay } from "vuetify";
const { mdAndUp } = useDisplay();

const router = useRouter();
const goHome = () => {
  router.push({ name: "landing-index" });
};
const goToFeatures = () => {
  router.push({ name: "landing-features" });
};
const goToAboutUs = () => {
  router.push({ name: "landing-about" });
};
const goToContact = () => {
  router.push({ name: "landing-contact" });
};
const goToPricing = () => {
  router.push({ name: "landing-pricing" });
};
const goToBlog = () => {
  router.push({ name: "landing-blog" });
};
const goToLogin = () => {
  router.push({ name: "login" });
};

const questions = reactive([
  {
    title: "Do you have a setup cost?",
    text: "Lorem ipsum dolor sit amet consectetur. Felis sit malesuada dis aliquet convallis arcu dictum. Ut nisi tellus erat nisi pellentesque accumsan sit. Laoreet vulputate at nibh nulla nam neque at turpis. Volutpat placerat et nunc a amet sapien. Purus massa nisl sollicitudin lectus tortor. Ullamcorper pellentesque lacus vel eget amet. Libero enim lectus lectus eu volutpat lobortis.",
    expand: false,
  },
  {
    title: "Do you have a setup cost?",
    text: "Lorem ipsum dolor sit amet consectetur. Felis sit malesuada dis aliquet convallis arcu dictum. Ut nisi tellus erat nisi pellentesque accumsan sit. Laoreet vulputate at nibh nulla nam neque at turpis. Volutpat placerat et nunc a amet sapien. Purus massa nisl sollicitudin lectus tortor. Ullamcorper pellentesque lacus vel eget amet. Libero enim lectus lectus eu volutpat lobortis.",
    expand: false,
  },
  {
    title: "Do you have a setup cost?",
    text: "Lorem ipsum dolor sit amet consectetur. Felis sit malesuada dis aliquet convallis arcu dictum. Ut nisi tellus erat nisi pellentesque accumsan sit. Laoreet vulputate at nibh nulla nam neque at turpis. Volutpat placerat et nunc a amet sapien. Purus massa nisl sollicitudin lectus tortor. Ullamcorper pellentesque lacus vel eget amet. Libero enim lectus lectus eu volutpat lobortis.",
    expand: false,
  },
  {
    title: "Do you have a setup cost?",
    text: "Lorem ipsum dolor sit amet consectetur. Felis sit malesuada dis aliquet convallis arcu dictum. Ut nisi tellus erat nisi pellentesque accumsan sit. Laoreet vulputate at nibh nulla nam neque at turpis. Volutpat placerat et nunc a amet sapien. Purus massa nisl sollicitudin lectus tortor. Ullamcorper pellentesque lacus vel eget amet. Libero enim lectus lectus eu volutpat lobortis.",
    expand: false,
  },
]);

window.scrollTo(0, 0);
</script>
<style scoped>
.bg-landing {
  background-image: url("@/assets/landing/bg_fortnox.png");
  background-size: cover;
  background-position: 50% 50%;
}
</style>
