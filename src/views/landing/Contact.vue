<template>
  <div class="w-100 d-flex flex-column">
    <div class="bg-landing">
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
            class="app-regular-font text-none selected-button"
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
      <div class="d-flex flex-column align-center">
        <div
          class="app-semibold-font white-font text-center"
          style="margin-top: 160px; line-height: 1.2"
          :class="mdAndUp ? 'font-80' : 'font-40'"
        >
          Get in touch
        </div>
        <div
          class="font-20 white-font text-center app-medium-font"
          style="margin-top: 32px; margin-bottom: 208px"
          :style="
            mdAndUp
              ? 'width: 1152px;'
              : 'width: 100%; padding-left: 30px; padding-right: 30px'
          "
        >
          Any question or remarks? Just write us a message!
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column align-center w-100"
      style="
        margin-top: -323px;
        margin-bottom: 128px;
        padding-left: 30px;
        padding-right: 30px;
      "
    >
      <v-card
        elevation="0"
        rounded="xl"
        :width="mdAndUp ? 1200 : '100%'"
        :height="mdAndUp ? 672 : 1000"
        style="
          padding-top: 80px;
          padding-bottom: 80px;
          padding-left: 128px;
          padding-right: 136px;
        "
      >
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6" class="d-flex flex-column">
              <span class="font-32 app-semibold-font dark-font">
                Contact Information
              </span>
              <span class="shade-font font-18 app-regular-font mt-6">
                Fill ou the form and our team will get back<br />
                to you within 24 hours
              </span>
              <div
                class="d-flex flex-row align-center"
                style="margin-top: 56px"
              >
                <div>
                  <v-img
                    width="40"
                    height="40"
                    src="@/assets/landing/contact_number.svg"
                  />
                </div>
                <span class="font-16 dark-font app-medium-font ms-5">
                  123 456 789 0
                </span>
              </div>
              <div
                class="d-flex flex-row align-center"
                style="margin-top: 20px"
              >
                <div>
                  <v-img
                    width="40"
                    height="40"
                    src="@/assets/landing/contact_email.svg"
                  />
                </div>
                <span class="font-16 dark-font app-medium-font ms-5">
                  hello@docsmart.com
                </span>
              </div>
              <div
                class="d-flex flex-row align-center"
                style="margin-top: 20px"
              >
                <div>
                  <v-img
                    width="40"
                    height="40"
                    src="@/assets/landing/contact_email.svg"
                  />
                </div>
                <span class="font-16 dark-font app-medium-font ms-5">
                  102 Street 2714 Don
                </span>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column">
              <div
                class="d-flex flex-column"
                :style="mdAndUp ? 'margin-left: 80px' : 'margin-top: 40px'"
              >
                <span class="font-13 app-medium-font dark-font mb-1">Name</span>
                <v-text-field
                  placeholder="Enter Name"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
                <span class="font-13 app-medium-font dark-font mb-1 mt-12">
                  Email
                </span>
                <v-text-field
                  placeholder="Enter Email"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
                <span class="font-13 app-medium-font dark-font mb-1 mt-12">
                  Mobile
                </span>
                <v-text-field
                  placeholder="Enter Mobile Number"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
                <span class="font-13 app-medium-font dark-font mb-1 mt-12">
                  Message
                </span>
                <v-text-field
                  placeholder="Enter Message"
                  variant="outlined"
                  rounded="lg"
                  hide-details
                />
                <v-btn
                  flat
                  class="text-none font-16 app-semibold-font"
                  color="white"
                  rounded="lg"
                  style="
                    background-color: #20c39d !important;
                    color: white !important;
                    height: 48px;
                    font-size: 16px;
                    margin-top: 56px;
                  "
                  append-icon="mdi-chevron-right"
                >
                  Send
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
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
</script>
<style scoped>
.bg-landing {
  background-image: url("@/assets/landing/bg_landing.png");
  background-size: cover;
  background-position: 50% 50%;
  height: 867px;
}
.bg-landing2 {
  background-image: url("@/assets/landing/bg_feature.png");
  background-size: cover;
}
.bg-landing3 {
  background-image: url("@/assets/landing/bg_landing3.png");
  background-size: cover;
  background-position: 50% 50%;
}
.bg-card {
  background-image: url("@/assets/landing/quote.svg");
  background-size: 131px 99px;
  background-position: 18px 15px;
  border-radius: 48px;
  width: 501.33px;
  height: 672px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bg-card-dark {
  background-image: url("@/assets/landing/quote_dark.svg");
  background-size: 131px 99px;
  background-position: 18px 15px;
  border-radius: 48px;
  width: 501.33px;
  height: 672px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.selected-button {
  position: relative;
}
.selected-button::after {
  content: "";
  height: 2px;
  color: #20c39d;
  opacity: 1;
  margin-top: 40px;
}
</style>
