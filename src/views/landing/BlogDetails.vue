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
        class="w-100 d-flex flex-column align-center justify-center"
        style="margin-top: 100px"
      >
        <div style="max-width: 1424px">
          <div class="d-flex flex-row align-center">
            <v-btn flat variant="text" class="button-40" rounded="lg">
              <v-img
                width="40"
                height="40"
                src="@/assets/landing/btn_back.svg"
                @click="goToBlog"
              />
            </v-btn>
            <span class="font-20 shade-font app-medium-font ms-6 me-2"
              >Blog</span
            >
            <span class="font-20 white-font app-medium-font"
              >/ Product Updates</span
            >
          </div>
          <div style="padding-top: 90px" class="d-flex flex-row align-center">
            <div>
              <v-img
                width="576"
                height="400"
                src="@/assets/landing/img_blog.png"
              />
            </div>
            <div class="d-flex flex-column" style="margin-left: 64px">
              <span class="font-32 app-semibold-font white-font">
                What is B2B Portal?
              </span>
              <span
                class="font-20 app-medium-font light-font mt-4"
                style="line-height: 1.5"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                nulla ipsum,<br />
                gravida pellentesque massa nec, feugiat. Lorem ipsum dolor sit
                amet,<br />
                consectetur adipiscing elit. Nulla nulla ipsum, gravida
                pellentesque massa<br />
                nec, feugiat sagittis......
              </span>
              <div class="d-flex flex-row mt-8 align-center">
                <div>
                  <v-img
                    width="40"
                    height="40"
                    src="@/assets/sample/profile5.png"
                  />
                </div>
                <span class="font-20 white-font app-medium-font ms-4"
                  >Ryan Pollock</span
                >
                <span class="font-20 blue-600 app-medium-font ms-2"
                  >on Product Updates</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column"
      style="
        margin-bottom: 156px;
        margin-top: 112px;
        margin-left: 240px;
        max-width: 1216px;
        margin-right: 240px;
      "
    >
      <span class="font-32 dark-font app-semibold-font">
        Condimentum vitae sed
      </span>
      <span class="font-20 shade-font app-medium-font mt-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, dolor
        posuere sagittis nisi, nulla in sed tristique. Malesuada nec curabitur
        donec mi ac diam dolor egestas. Congue aenean sed vel egestas. Platea
        massa sit vel consectetur purus facilisi sit purus. Pharetra sit sit
        urna amet. Purus facilisi amet, varius suspendisse pretium. Nisi,
        facilisis diam ut id risus. Volutpat odio imperdiet commodo venenatis,
        tortor, erat eget. Lectus nunc sit sagittis eu a cursus. Neque, neque
        mattis nisl dolor odio. At nunc gravida tincidunt nulla. Facilisis et
        ullamcorper tempus scelerisque vitae tincidunt netus elementum. Fames
        non convallis consequat orci. Sit et pulvinar nunc orci cras tempor ut
        dolor, semper. Eget tristique faucibus at malesuada. Commodo tincidunt
        purus dolor porttitor. Sed ut penatibus ridiculus vivamus mauris sed
        quam sed aliquam. Posuere tortor felis, diam consequat aliquet sit
        tempor augue elementum. Sed sit dolor leo ultrices. Egestas viverra
        vestibulum tristique quis mauris, vestibulum ac. Fringilla senectus
        venenatis, sit diam odio vitae imperdiet quam. Purus arcu dapibus dictum
        lacus malesuada donec duis ipsum. Natoque diam luctus adipiscing
        phasellus magna eros. Arcu bibendum mauris suscipit viverra.
      </span>
      <span
        class="font-32 dark-font app-semibold-font"
        style="margin-top: 160px"
      >
        Condimentum vitae sed
      </span>
      <span class="font-20 shade-font app-medium-font mt-12">
        Nulla sit orci volutpat mauris augue tellus varius. Sed sapien porta
        nibh nisl vulputate urna. Iaculis arcu lectus eget tellus, volutpat
        diam. Ullamcorper vestibulum etiam amet egestas. Sociis gravida volutpat
        nunc convallis. Congue ullamcorper diam nisi in nisl, massa. In in est
        vitae cum quam eu mattis massa. Pharetra nulla ullamcorper at dignissim.
        Volutpat, pretium diam ante id nunc. Urna pulvinar amet, arcu odio
        tellus, mollis enim felis quis. Fringilla eget nec cras lobortis mattis
        lorem cras malesuada. Varius nunc, nec rhoncus risus, commodo neque.
        Sodales ultricies dictum integer eget. Tincidunt risus nisi adipiscing
        sit enim diam. Sed donec sit turpis blandit praesent massa. Porta eget
        elit at viverra porttitor pharetra, aliquam. Nunc facilisis augue
        euismod nullam duis laoreet a ut. Et sed purus at donec. Malesuada
        accumsan, arcu est morbi mattis eu in id. Habitasse elementum, in risus
        diam molestie justo, at. Imperdiet in fringilla gravida at nullam. Eu
        laoreet velit cursus ullamcorper odio cras tincidunt congue lorem. Eu
        velit nisl nunc urna. Senectus scelerisque ipsum dui tellus, interdum.
        Diam lacus ultricies viverra sed enim mollis ut mattis. Eu mi
        scelerisque purus, nisl, sagittis dictumst volutpat vel. Arcu quis id
        velit nulla. Quam consectetur at urna porttitor proin nisl adipiscing
        suspendisse. Mollis orci mattis tortor vel at commodo phasellus
        tincidunt. Placerat a luctus nunc vulputate amet urna. Lectus augue
        etiam porttitor eget urna, ut. Morbi dui lectus tempor nunc velit diam.
        Ornare viverra amet donec risus ut velit orci massa. Aenean mattis amet
        quisque diam tempus sed quis. Sollicitudin sed lacus sit et aliquet
        sagittis malesuada turpis aliquam. Tellus donec libero aenean erat.
        Tellus sem ultricies at cursus ipsum. Iaculis viverra semper nec turpis
        ornare lorem. Ut ut in risus condimentum amet, vitae sed. Mauris, nunc
        vitae, ut varius fusce massa venenatis sit adipiscing. Aenean ut ut
        neque, rutrum viverra vulputate faucibus. Imperdiet ipsum habitant
        facilisis amet, enim, aliquam tortor, aenean proin. Venenatis ac
        placerat gravida mattis viverra dolor nibh. Dignissim dictum a ut velit.
      </span>
      <span
        class="font-32 dark-font app-semibold-font"
        style="margin-top: 160px"
      >
        Condimentum vitae sed
      </span>
      <span class="font-20 shade-font app-medium-font mt-12">
        Aenean mattis amet quisque diam tempus sed quis. Sollicitudin sed lacus
        sit et aliquet sagittis malesuada turpis aliquam. Tellus donec libero
        aenean erat. Tellus sem ultricies at cursus ipsum. Iaculis viverra
        semper nec turpis ornare lorem. Ut ut in risus condimentum amet, vitae
        sed. Mauris, nunc vitae, ut varius fusce massa venenatis sit adipiscing.
        Aenean ut ut neque, rutrum viverra vulputate faucibus. Imperdiet ipsum
        habitant facilisis amet, enim, aliquam tortor, aenean proin. Venenatis
        ac placerat gravida mattis viverra dolor nibh. Dignissim dictum a ut
        velit.
      </span>
      <span class="font-48 app-semibold-font dark-font"> Comments </span>
      <div
        style="width: 800px; margin-bottom: 114px"
        class="d-flex flex-column"
      >
        <div class="d-flex flex-row my-12">
          <v-text-field
            placeholder="Enter Email"
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
              width: 192px;
              font-size: 16px;
              margin-left: 12px;
            "
            prepend-icon="mdi-send-outline"
          >
            Post Comment
          </v-btn>
        </div>
        <div class="d-flex flex-row align-center">
          <div>
            <v-img width="64" height="64" src="@/assets/sample/profile6.png" />
          </div>
          <div class="d-flex flex-column ms-5">
            <span class="font-24 dark-font app-semibold-font">Jeff Gibson</span>
            <span class="font-18 blue-600 app-medium-font">2 hours ago</span>
          </div>
        </div>
        <span class="font-20 shade-font app-medium-font mt-12 mb-5">
          Aenean mattis amet quisque diam tempus sed quis. Sollicitudin sed
          lacus sit et aliquet sagittis malesuada turpis aliquam. Tellus donec
          libero aenean erat. Tellus sem ultricies at cursus ipsum. Iaculis
          viverra semper nec turpis ornare lorem. Ut ut in risus condimentum
          amet, vitae sed.
        </span>
        <div>
          <v-btn
            flat
            rounded="lg"
            class="text-none medium-blue-font app-semibold-font"
            prepend-icon="mdi-thumb-up-outline"
            style="background-color: #d0e3ff; height: 40px; width: 180"
          >
            Like Comment
          </v-btn>
        </div>
      </div>
    </div>
    <div
      class="w-100 d-flex flex-row align-center justify-center"
      style="background-color: #0d0d1e"
    >
      <div
        class="d-flex flex-row align-center justify-center"
        style="margin-top: 52px; margin-bottom: 52px"
      >
        <span class="font-20 white-font app-medium-font">Share on</span>
        <div style="margin-left: 64px">
          <v-img width="32" height="32" src="@/assets/landing/facebook.svg" />
        </div>
        <div style="margin-left: 48px">
          <v-img width="32" height="32" src="@/assets/landing/twitter.svg" />
        </div>
        <div style="margin-left: 48px">
          <v-img width="32" height="32" src="@/assets/landing/linkedin.svg" />
        </div>
        <div style="margin-left: 48px">
          <v-img width="32" height="32" src="@/assets/landing/share.svg" />
        </div>
      </div>
    </div>
    <div
      class="w-100 d-flex flex-column align-center"
      style="margin-top: 104px; margin-bottom: 112px"
    >
      <span class="font-48 dark-font app-semibold-font" style="width: 1600px">
        Recommended posts
      </span>
      <div class="d-flex flex-row justify-center" style="margin-top: 64px">
        <v-card
          color="white"
          width="501"
          height="701"
          rounded="xl"
          elevation="0"
          style="border-radius: 48px !important"
          class="d-flex flex-column align-center justify-center mx-6"
          v-for="n in 3"
        >
          <v-card-text class="pa-8">
            <v-img
              width="437"
              height="288"
              src="@/assets/landing/img_blog2.png"
              cover
            />
          </v-card-text>
          <v-card-text
            class="font-32 dark-font app-semibold-font pt-2 px-8 pb-0 w-100"
          >
            What is DocSmart?
          </v-card-text>
          <span
            class="font-20 shade-font app-medium-font pt-4 px-8 pb-0"
            style="line-height: 1.6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla
            ipsum, gravida pellentesque massa nec, feugiat sagittis erat.
          </span>
          <v-card-text class="d-flex flex-row w-100 px-8 py-0">
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
                margin-top: 40px;
              "
              append-icon="mdi-chevron-right"
            >
              Read More
            </v-btn>
          </v-card-text>
        </v-card>
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

div :deep(.v-text-field input.v-field__input) {
  min-height: 48px;
  padding: 10px 10px !important;
  background-color: white;
  border-radius: 10px;
}
</style>
