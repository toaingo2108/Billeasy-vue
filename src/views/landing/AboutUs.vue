<template>
  <div class="w-100 d-flex flex-column">
    <div class="bg-landing">
      <div class="d-flex flex-row">
        <div @click="goHome" class="cursor-pointer">
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
            @click="goToFeatures"
          >
            Features
          </v-btn>
          <v-btn
            flat
            variant="text"
            class="font-16 app-regular-font text-none ms-10 selected-button"
            color="white"
            @click="goToAboutUs"
          >
            About us
          </v-btn>
          <v-btn
            flat
            variant="text"
            class="font-16 app-regular-font text-none ms-10"
            color="white"
            @click="goToContact"
          >
            Contact
          </v-btn>
          <v-btn
            flat
            variant="text"
            class="font-16 app-regular-font text-none ms-10"
            color="white"
            @click="goToPricing"
          >
            Pricing
          </v-btn>
          <v-btn
            flat
            variant="text"
            class="font-16 app-regular-font text-none ms-10"
            color="white"
            @click="goToBlog"
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
            @click="goToLogin"
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
          About Billeasy
        </div>
        <div
          class="font-20 white-font text-center app-medium-font"
          style="width: 1152px; margin-top: 64px; margin-bottom: 208px"
        >
          White label refers to a product or service that is developed by one
          company and sold to another company that puts its own logo and brand
          name on the product or service. White label is nothing but a readymade
          product with very little customization and investment.<br /><br />
          Our white label solution for B2B Portal is basically a readymade and
          fully integrated website with your own domain name and logo, which
          make branding very easy. <br /><br />
          As a reseller you will be free from concerns about needing to spend
          time and money on development. You can add your own branding and
          identity, and start business immediately. With your own white label
          you can provide your customers a prepackaged solution to meet their
          need immediately. To achieve your business goals you need to get
          maximum from available resources and competencies. With a white label
          software you do not deviate from your core competency and business
          model. You have to just concentrate on marketing, networking and
          customer care after all your network is the measurement of your net
          worth.
        </div>
      </div>
    </div>
    <div class="d-flex flex-column align-center">
      <span
        class="font-56 dark-font app-semibold-font"
        style="margin-top: 192px"
      >
        Benefits
      </span>
      <span
        class="font-18 app-medium-font shade-font"
        style="width: 1120px; margin-top: 48px"
        >Our mission is to empower businesses who are already active with B2B
        commerce or looking to start with their B2B offerings by providing a one
        stop shop solution which requires no major technical knowledge or
        investment. We built the platform to do one thing and one thing well -
        to make your B2B commerce enjoyable.</span
      >
      <div style="margin-top: 96px">
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
            <span
              class="font-24 app-semibold-font white-font mt-12 text-center"
            >
              Launch your B2B shop with<br />
              no development cost.
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
              2
            </span>
            <span class="font-24 app-semibold-font dark-font mt-12 text-center">
              Save on expenses by<br />
              outsourcing the development<br />
              and maintenance of your<br />
              B2B shop.
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
              3
            </span>
            <span class="font-24 app-semibold-font dark-font mt-12 text-center">
              Connect to ERP for an<br />
              automated flow of product <br />
              and orders.
            </span>
          </v-card>
        </div>
        <div class="d-flex flex-row justify-center" style="margin-top: 48px">
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
              4
            </span>
            <span class="font-24 app-semibold-font dark-font mt-12 text-center">
              Your domain. Your branding.<br />
              Your style. Fully brand your <br />
              B2B Portal with a few clicks.
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
              5
            </span>
            <span class="font-24 app-semibold-font dark-font mt-12 text-center">
              Free Support included with <br />
              paid SLA packages <br />
              available.
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
              6
            </span>
            <span class="font-24 app-semibold-font dark-font mt-12 text-center">
              Focus on your business's <br />
              core competency
            </span>
          </v-card>
        </div>
      </div>
      <v-btn
        flat
        class="text-none font-16 app-semibold-font"
        color="white"
        rounded="lg"
        style="
          background-color: #20c39d !important;
          color: white !important;
          height: 80px;
          width: 352px;
          font-size: 16px;
          margin-top: 96px;
          margin-bottom: 176px;
        "
        append-icon="mdi-chevron-right"
      >
        Book a Demo
      </v-btn>
    </div>
    <div class="bg-dark-blue" style="padding-top: 80px">
      <v-row style="margin-bottom: 108px">
        <v-col cols="12" md="5">
          <div class="d-flex flex-column align-center justify-center">
            <div style="width: 458px">
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
          <div class="d-flex flex-row">
            <div class="d-flex flex-column" style="width: 388px">
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
            <div class="d-flex flex-column">
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
        style="
          margin-left: calc(20.8333% - 236px);
          margin-right: calc(20.8333% - 236px);
          margin-bottom: 50px;
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
