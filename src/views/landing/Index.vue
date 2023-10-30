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
    </div>
    <div class="bg-landing2 w-100">
      <v-row>
        <v-col cols="12" md="6" class="d-flex flex-column align-center">
          <div class="w-100 d-flex flex-row align-center justify-center">
            <div
              class="d-flex flex-column"
              style="
                max-width: 640px;
                margin-top: 128px;
                margin-bottom: 120px;
                width: 100%;
              "
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
                >Self Service Portal</span
              >
              <span class="font-18 app-medium-font shade-font mt-6"
                >Beautiful and intuitive graphs allow for you to quickly see
                your accounts receivable, accounts payable, get highlighted
                alerts on what bills are in danger zone and how to take
                action</span
              >
            </div>
          </div>
          <div style="max-width: 960px; max-height: 776px; width: 100%">
            <v-img
              width="100%"
              height="100%"
              src="@/assets/landing/screenshot2.png"
            />
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column align-center">
          <div class="w-100 d-flex flex-row align-center justify-center">
            <div
              class="d-flex flex-column"
              style="
                max-width: 640px;
                margin-top: 128px;
                margin-bottom: 96px;
                width: 100%;
              "
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
                style="width: 640px"
                >Customizable Portal</span
              >
              <span class="font-18 app-medium-font shade-font mt-6"
                >Fully control which products and categories are visible to
                which customers.</span
              >
            </div>
          </div>
          <div class="w-100 d-flex flex-row align-center justify-center">
            <div
              class="d-flex flex-column"
              style="width: 640px; margin-bottom: 96px"
            >
              <div>
                <v-img
                  width="64"
                  height="64"
                  src="@/assets/landing/customer_pricing.svg"
                />
              </div>
              <span
                class="font-32 dark-font app-semibold-font mt-8"
                style="width: 640px"
                >Customer Specific Pricing</span
              >
              <span class="font-18 app-medium-font shade-font mt-6"
                >Set buyer-specific prices and assign them right to the company
                profile</span
              >
            </div>
          </div>
          <div class="w-100 d-flex flex-row align-center justify-center">
            <div
              class="d-flex flex-column"
              style="width: 640px; margin-bottom: 96px"
            >
              <div>
                <v-img
                  width="64"
                  height="64"
                  src="@/assets/landing/customer_segment.svg"
                />
              </div>
              <span
                class="font-32 dark-font app-semibold-font mt-8"
                style="width: 640px"
                >Customer Segment</span
              >
              <span class="font-18 app-medium-font shade-font mt-6"
                >Install the web app, connect to your accounting and configure
                your account settings.</span
              >
            </div>
          </div>
          <div class="w-100 d-flex flex-row align-center justify-center">
            <div
              class="d-flex flex-column"
              style="width: 640px; margin-bottom: 96px"
            >
              <div>
                <v-img
                  width="64"
                  height="64"
                  src="@/assets/landing/campaign.svg"
                />
              </div>
              <span
                class="font-32 dark-font app-semibold-font mt-8"
                style="width: 640px"
              >
                Campaign & Communication Tools
              </span>
              <span class="font-18 app-medium-font shade-font mt-6">
                Send newsletters, create campaigns and blog posts to keep your
                customers informed on the latest offerings.
              </span>
            </div>
          </div>
          <div style="width: 660px">
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
                margin-bottom: 120px;
              "
              append-icon="mdi-chevron-right"
            >
              Learn More
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="bg-landing3 w-100">
      <v-row class="mb-0">
        <v-col cols="12" md="6" class="d-flex flex-column align-center">
          <div class="w-100 d-flex flex-column align-center justify-center">
            <div
              class="d-flex flex-column"
              style="max-width: 640px; margin-top: 128px; width: 100%"
            >
              <div>
                <v-img
                  width="64"
                  height="64"
                  src="@/assets/landing/portal.svg"
                />
              </div>
              <span
                class="font-32 white-font app-semibold-font mt-8"
                style="max-width: 640px; width: 100%"
                >Helpdesk & RMA Support</span
              >
              <span class="font-18 app-medium-font light-font mt-6"
                >Beautiful and intuitive graphs allow for you to quickly see
                your accounts receivable, accounts payable, get highlighted
                alerts on what bills are in danger zone and how to take
                action</span
              >
            </div>
            <div
              class="d-flex flex-column"
              style="max-width: 640px; margin-top: 80px; width: 100%"
            >
              <div>
                <v-img
                  width="64"
                  height="64"
                  src="@/assets/landing/portal.svg"
                />
              </div>
              <span
                class="font-32 white-font app-semibold-font mt-8"
                style="max-width: 640px; width: 100%"
                >Helpdesk & RMA Support</span
              >
              <span class="font-18 app-medium-font light-font mt-6"
                >Unified helpdesk allowing for customers to make pre-sale
                inquiries, submit order or product requests and file RMA
                claims.</span
              >
            </div>
            <div
              class="d-flex flex-column"
              style="
                max-width: 640px;
                margin-top: 80px;
                margin-bottom: 80px;
                width: 100%;
              "
            >
              <div>
                <v-img
                  width="64"
                  height="64"
                  src="@/assets/landing/portal.svg"
                />
              </div>
              <span
                class="font-32 white-font app-semibold-font mt-8"
                style="max-width: 640px; width: 100%"
              >
                Accounting & ERP Integration
              </span>
              <span class="font-18 app-medium-font light-font mt-6"
                >Integrated with leading accounting software to fully automate
                order and product sync.</span
              >
            </div>
            <div style="width: 660px">
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
                  margin-bottom: 147px;
                "
                append-icon="mdi-chevron-right"
              >
                Learn More
              </v-btn>
            </div>
          </div>
          <div style="max-width: 960px; max-height: 967px; width: 100%">
            <v-img
              width="100%"
              height="100%"
              src="@/assets/landing/screenshot_reports.png"
            />
          </div>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column align-center">
          <div
            style="
              max-width: 898px;
              max-height: 967px;
              width: 100%;
              margin-top: 113px;
            "
          >
            <v-img
              width="100%"
              height="100%"
              src="@/assets/landing/screenshot_products.png"
            />
          </div>
          <div class="w-100 d-flex flex-column align-center justify-center">
            <div
              class="d-flex flex-column"
              style="max-width: 640px; margin-top: 194px; width: 100%"
            >
              <div>
                <v-img
                  width="64"
                  height="64"
                  src="@/assets/landing/portal.svg"
                />
              </div>
              <span
                class="font-32 white-font app-semibold-font mt-8"
                style="max-width: 640px; width: 100%"
              >
                BankID Signing
              </span>
              <span class="font-18 app-medium-font light-font mt-6">
                Ready made (NDA’s, Service Contracts etc) document templates to
                purchase/sell
              </span>
            </div>
            <div
              class="d-flex flex-column"
              style="max-width: 640px; margin-top: 80px; width: 100%"
            >
              <div>
                <v-img
                  width="64"
                  height="64"
                  src="@/assets/landing/portal.svg"
                />
              </div>
              <span
                class="font-32 white-font app-semibold-font mt-8"
                style="max-width: 640px; width: 100%"
              >
                Customer Credit Control
              </span>
              <span class="font-18 app-medium-font light-font mt-6"
                >Data driven insights into how the offer is being viewed, by
                whom, how often, when</span
              >
            </div>
            <div
              class="d-flex flex-column"
              style="
                max-width: 640px;
                margin-top: 80px;
                margin-bottom: 80px;
                width: 100%;
              "
            >
              <div>
                <v-img
                  width="64"
                  height="64"
                  src="@/assets/landing/portal.svg"
                />
              </div>
              <span
                class="font-32 white-font app-semibold-font mt-8"
                style="max-width: 640px; width: 100%"
              >
                Analytics
              </span>
              <span class="font-18 app-medium-font light-font mt-6">
                Cost & Profits, sales per agent, recurring clients, best sold
                articles, profit margin per article, profit margin average per
                sales agent
              </span>
            </div>
            <div style="width: 660px">
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
                  margin-bottom: 147px;
                "
                append-icon="mdi-chevron-right"
              >
                Learn More
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="w-100 d-flex flex-row justify-center">
      <div style="margin-top: 144px; max-width: 1600px; margin-bottom: 192px">
        <v-row>
          <v-col cols="12" md="4">
            <div class="bg-card bg-dark">
              <div style="margin-top: 80px">
                <v-img
                  width="120"
                  height="120"
                  src="@/assets/sample/profile2.png"
                />
              </div>
              <span class="font-32 teal-font mt-12 app-semibold-font"
                >Jane Cooper</span
              >
              <span class="font-24 teal-font app-medium-font">Designation</span>
              <span class="light-font font-18 app-medium-font mt-10 mx-15"
                >Praesent molestie massa eu auctor tristique. Quisque vitae
                massa ut elit elementum bibendum. Vivamus non tempus dui.
                Curabitur tincidunt massa risus, mollis molestie tortor egestas
                vel. Pellentesque at sodales eros, aliquam iaculis ligula. Morbi
                non dolor tellus.
              </span>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="bg-card-dark bg-white">
              <div style="margin-top: 80px">
                <v-img
                  width="120"
                  height="120"
                  src="@/assets/sample/profile3.png"
                />
              </div>
              <span class="font-32 teal-font mt-12 app-semibold-font">
                Wade Warren
              </span>
              <span class="font-24 teal-font app-medium-font">Designation</span>
              <span class="light-font font-18 app-medium-font mt-10 mx-15"
                >Praesent molestie massa eu auctor tristique. Quisque vitae
                massa ut elit elementum bibendum. Vivamus non tempus dui.
                Curabitur tincidunt massa risus, mollis molestie tortor egestas
                vel. Pellentesque at sodales eros, aliquam iaculis ligula. Morbi
                non dolor tellus.
              </span>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="bg-card-dark bg-white">
              <div style="margin-top: 80px">
                <v-img
                  width="120"
                  height="120"
                  src="@/assets/sample/profile4.png"
                />
              </div>
              <span class="font-32 teal-font mt-12 app-semibold-font">
                Annette Black
              </span>
              <span class="font-24 teal-font app-medium-font">Designation</span>
              <span class="light-font font-18 app-medium-font mt-10 mx-15"
                >Praesent molestie massa eu auctor tristique. Quisque vitae
                massa ut elit elementum bibendum. Vivamus non tempus dui.
                Curabitur tincidunt massa risus, mollis molestie tortor egestas
                vel. Pellentesque at sodales eros, aliquam iaculis ligula. Morbi
                non dolor tellus.
              </span>
            </div>
          </v-col>
        </v-row>
      </div>
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
.bg-landing2 {
  background-image: url("@/assets/landing/bg_landing2.png");
  background-size: cover;
  background-position: 50% 50%;
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
</style>
