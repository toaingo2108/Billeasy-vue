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
            class="app-regular-font text-none selected-button"
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
    </div>
    <div
      class="d-flex flex-column align-center"
      style="margin-top: -626px; margin-bottom: 156px"
    >
      <v-card
        elevation="0"
        rounded="xl"
        max-width="1600"
        width="100%"
        height="800"
        style="
          padding-top: 80px;
          padding-bottom: 68px;
          padding-left: 96px;
          padding-right: 80px;
          margin-left: 60px;
          margin-right: 60px;
        "
      >
        <v-card-title class="font-48 dark-font app-semibold-font">
          Main headline
        </v-card-title>
        <v-card-text
          style="width: 784px; padding-top: 32px"
          class="font-20 shade-font app-medium-font"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla
          ipsum, gravida pellentesque massa nec, feugiat sagittis erat.
        </v-card-text>
        <v-card-text style="padding-top: 73px" class="d-flex flex-row">
          <div>
            <v-img
              width="576"
              height="400"
              src="@/assets/landing/img_blog.png"
            />
          </div>
          <div class="d-flex flex-column" style="margin-left: 64px">
            <span class="font-24 app-semibold-font pumpkin-orange-font">
              2023-03-16
            </span>
            <span class="font-32 app-semibold-font dark-font mt-8">
              What is DocSmart?
            </span>
            <span
              class="font-20 app-medium-font shade-font mt-8"
              style="line-height: 2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              nulla ipsum, gravida pellentesque massa nec, feugiat sagittis
              erat.
            </span>
            <div class="d-flex flex-row mt-8 align-center">
              <div>
                <v-img
                  width="40"
                  height="40"
                  src="@/assets/sample/profile5.png"
                />
              </div>
              <span class="font-20 dark-font app-medium-font ms-4"
                >Ryan Pollock</span
              >
              <span class="font-20 blue-600 app-medium-font ms-2"
                >on Product Updates</span
              >
            </div>
            <v-btn
              flat
              class="text-none font-16 app-semibold-font"
              color="white"
              rounded="lg"
              style="
                background-color: #20c39d !important;
                color: white !important;
                height: 48px;
                width: 160px;
                font-size: 16px;
                margin-top: 83px;
              "
              append-icon="mdi-chevron-right"
              @click="goToBlogDetails"
            >
              Read More
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
      <div
        class="w-100 d-flex flex-row"
        style="margin-top: 80px; padding-left: 160px; padding-right: 160px"
      >
        <div style="width: 352px">
          <span class="font-32 dark-font app-semibold-font ms-4">Topics</span>
          <div class="d-flex flex-column mt-12">
            <div v-for="(item, index) in menus" class="font-14">
              <v-btn
                flat
                variant="text"
                style="height: 44px; min-height: 44px; max-height: 44px"
                class="text-none font-14 app-medium-font d-flex flex-row justify-start"
                :class="index == menuIndex ? 'teal-font' : 'blue-600'"
                @click="onSelectMenu(index)"
                width="250"
              >
                {{ item.title }}
              </v-btn>
            </div>
          </div>
        </div>
        <div class="flex-grow">
          <v-card elevation="0" rounded="xl" class="mb-5" v-for="n in 5">
            <v-card-text class="d-flex flex-row" style="padding: 32px">
              <div>
                <v-img
                  width="320"
                  height="288"
                  src="@/assets/landing/img_blog_small.png"
                />
              </div>
              <div class="d-flex flex-column" style="margin-left: 64px">
                <span class="font-24 app-semibold-font pumpkin-orange-font">
                  2023-03-16
                </span>
                <span class="font-32 app-semibold-font dark-font mt-8">
                  What is DocSmart?
                </span>
                <span
                  class="font-20 app-medium-font shade-font mt-8"
                  style="line-height: 2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  nulla ipsum, gravida pellentesque massa nec, feugiat sagittis
                  erat.
                </span>
                <div class="d-flex flex-row mt-8 align-center">
                  <div>
                    <v-img
                      width="40"
                      height="40"
                      src="@/assets/sample/profile5.png"
                    />
                  </div>
                  <span class="font-20 dark-font app-medium-font ms-4"
                    >Ryan Pollock</span
                  >
                  <span class="font-20 blue-600 app-medium-font ms-2"
                    >on Product Updates</span
                  >
                </div>
              </div>
            </v-card-text>
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
const goToBlogDetails = () => {
  router.push({ name: "landing-blog-details" });
};
const goToLogin = () => {
  router.push({ name: "login" });
};

const menuIndex = ref(0);
const menus = [
  {
    title: "All",
    route: "company-information",
  },
  {
    title: "Community",
    route: "company-account",
  },
  {
    title: "Design",
    route: "company-subscriptions",
  },
  {
    title: "Developer Relations",
    route: "company-register",
  },
  {
    title: "Engineering",
    route: "company-custom-fields",
  },
  {
    title: "Marketplace",
    route: "company-reminder-flows",
  },
  {
    title: "News",
    route: "company-templates-subscription",
  },
  {
    title: "Product Updates",
    route: "company-payment-methods",
  },
  {
    title: "Culture",
    route: "company-payment-methods",
  },
  {
    title: "Trust & Security",
    route: "company-payment-methods",
  },
];
const onSelectMenu = (index: number) => {
  menuIndex.value = index;
};
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
