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
            class="app-regular-font text-none selected-button"
            :class="mdAndUp ? 'font-16' : 'font-8'"
            color="white"
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
      <div class="d-flex flex-column align-center">
        <div
          class="font-80 app-semibold-font white-font text-center"
          style="margin-top: 160px; line-height: 1.2"
        >
          Big bold tagline here<br />
          about Features
        </div>
        <div
          class="font-20 white-font text-center app-medium-font"
          style="width: 772px; margin-top: 64px; margin-bottom: 208px"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla
          ipsum, gravida pellentesque massa nec, feugiat sagittis erat.
        </div>
      </div>
    </div>
    <div class="bg-landing2 w-100" style="padding-bottom: 320px">
      <v-row>
        <v-col cols="12" md="6" class="d-flex flex-column align-center">
          <div class="w-100 d-flex flex-row align-center justify-center">
            <div
              class="d-flex flex-column"
              style="max-width: 640px; margin-top: 296px; width: 100%"
            >
              <div>
                <v-img
                  width="64"
                  height="64"
                  src="@/assets/landing/portal.svg"
                />
              </div>
              <span
                class="font-32 dark-font app-semibold-font mt-8"
                style="max-width: 640px; width: 100%"
                >Feature Name</span
              >
              <span class="font-18 app-medium-font shade-font mt-6"
                >Lorem ipsum dolor sit amet consectetur. Felis sit malesuada dis
                aliquet convallis arcu dictum. Ut nisi tellus erat nisi
                pellentesque accumsan sit. Laoreet vulputate at nibh nulla nam
                neque at turpis. Volutpat placerat et nunc a amet sapien. Purus
                massa nisl sollicitudin lectus tortor. Ullamcorper pellentesque
                lacus vel eget amet. Libero enim lectus lectus eu volutpat
                lobortis.</span
              >
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column align-center">
          <div
            class="w-100 d-flex flex-column align-center justify-center"
            style="margin-top: 244px"
          >
            <div>
              <v-img
                width="688"
                height="464"
                src="@/assets/landing/home_shadowed.png"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column align-center">
          <div
            class="w-100 d-flex flex-column align-center justify-center"
            style="margin-top: 244px"
          >
            <div>
              <v-img
                width="688"
                height="464"
                src="@/assets/landing/home_shadowed.png"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column align-center">
          <div class="w-100 d-flex flex-row align-center justify-center">
            <div
              class="d-flex flex-column"
              style="max-width: 640px; margin-top: 296px; width: 100%"
            >
              <div>
                <v-img
                  width="64"
                  height="64"
                  src="@/assets/landing/portal.svg"
                />
              </div>
              <span
                class="font-32 dark-font app-semibold-font mt-8"
                style="max-width: 640px; width: 100%"
                >Feature Name</span
              >
              <span class="font-18 app-medium-font shade-font mt-6"
                >Lorem ipsum dolor sit amet consectetur. Felis sit malesuada dis
                aliquet convallis arcu dictum. Ut nisi tellus erat nisi
                pellentesque accumsan sit. Laoreet vulputate at nibh nulla nam
                neque at turpis. Volutpat placerat et nunc a amet sapien. Purus
                massa nisl sollicitudin lectus tortor. Ullamcorper pellentesque
                lacus vel eget amet. Libero enim lectus lectus eu volutpat
                lobortis.</span
              >
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column align-center">
          <div class="w-100 d-flex flex-row align-center justify-center">
            <div
              class="d-flex flex-column"
              style="max-width: 640px; margin-top: 296px; width: 100%"
            >
              <div>
                <v-img
                  width="64"
                  height="64"
                  src="@/assets/landing/portal.svg"
                />
              </div>
              <span
                class="font-32 dark-font app-semibold-font mt-8"
                style="max-width: 640px; width: 100%"
                >Feature Name</span
              >
              <span class="font-18 app-medium-font shade-font mt-6"
                >Lorem ipsum dolor sit amet consectetur. Felis sit malesuada dis
                aliquet convallis arcu dictum. Ut nisi tellus erat nisi
                pellentesque accumsan sit. Laoreet vulputate at nibh nulla nam
                neque at turpis. Volutpat placerat et nunc a amet sapien. Purus
                massa nisl sollicitudin lectus tortor. Ullamcorper pellentesque
                lacus vel eget amet. Libero enim lectus lectus eu volutpat
                lobortis.</span
              >
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column align-center">
          <div
            class="w-100 d-flex flex-column align-center justify-center"
            style="margin-top: 244px"
          >
            <div>
              <v-img
                width="688"
                height="464"
                src="@/assets/landing/home_shadowed.png"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column align-center">
          <div
            class="w-100 d-flex flex-column align-center justify-center"
            style="margin-top: 244px"
          >
            <div>
              <v-img
                width="688"
                height="464"
                src="@/assets/landing/home_shadowed.png"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column align-center">
          <div class="w-100 d-flex flex-row align-center justify-center">
            <div
              class="d-flex flex-column"
              style="max-width: 640px; margin-top: 296px; width: 100%"
            >
              <div>
                <v-img
                  width="64"
                  height="64"
                  src="@/assets/landing/portal.svg"
                />
              </div>
              <span
                class="font-32 dark-font app-semibold-font mt-8"
                style="max-width: 640px; width: 100%"
                >Feature Name</span
              >
              <span class="font-18 app-medium-font shade-font mt-6"
                >Lorem ipsum dolor sit amet consectetur. Felis sit malesuada dis
                aliquet convallis arcu dictum. Ut nisi tellus erat nisi
                pellentesque accumsan sit. Laoreet vulputate at nibh nulla nam
                neque at turpis. Volutpat placerat et nunc a amet sapien. Purus
                massa nisl sollicitudin lectus tortor. Ullamcorper pellentesque
                lacus vel eget amet. Libero enim lectus lectus eu volutpat
                lobortis.</span
              >
            </div>
          </div>
        </v-col>
      </v-row>
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
import { useDisplay } from "vuetify";
const { mdAndUp } = useDisplay();

const router = useRouter();
const goHome = () => {
  router.push({ name: "landing-index" });
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
