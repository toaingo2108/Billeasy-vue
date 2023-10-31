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
    <div class="w-100 bg-white d-flex flex-column align-center">
      <span
        class="font-56 dark-font app-semibold-font"
        style="margin-top: 112px; margin-bottom: 112px"
      >
        Integrated with leading ERP's
      </span>
      <div
        class="d-flex flex-row align-center justify-around w-100"
        style="margin-bottom: 147px"
      >
        <div>
          <v-btn flat rounded="circle" variant="text" class="button-64">
            <v-img width="64" height="64" src="@/assets/landing/left.svg" />
          </v-btn>
        </div>
        <div>
          <v-img
            width="240"
            height="121"
            src="@/assets/landing/integrated_logo1.png"
          />
        </div>
        <div>
          <v-img
            width="240"
            height="63"
            src="@/assets/landing/integrated_logo2.png"
          />
        </div>
        <div>
          <v-img
            width="240"
            height="93"
            src="@/assets/landing/integrated_logo3.png"
          />
        </div>
        <div>
          <v-btn flat rounded="circle" variant="text" class="button-64">
            <v-img width="64" height="64" src="@/assets/landing/right.svg" />
          </v-btn>
        </div>
      </div>
    </div>
    <div class="w-100 bg-gray d-flex flex-column align-center">
      <span
        class="font-56 dark-font app-semibold-font"
        style="margin-top: 144px"
      >
        Pricing
      </span>
      <div style="margin-top: 56px; margin-bottom: 80px">
        <div>
          <v-btn
            style="height: 64px; max-height: 64px; min-height: 64px"
            :style="
              option == 0
                ? 'background-color: #20C39D'
                : 'background-color: white'
            "
            class="font-18 text-none app-medium-font rounded-0"
            :class="option == 0 ? 'white-font' : 'dark-font'"
            rounded="s-xl"
            @click="onSelectOption(0)"
            flat
            >Quarterly payment</v-btn
          >
          <v-btn
            style="height: 64px; max-height: 64px; min-height: 64px"
            :style="
              option == 1
                ? 'background-color: #20C39D'
                : 'background-color: white'
            "
            class="font-18 text-none app-medium-font rounded-0"
            :class="option == 1 ? 'white-font' : 'dark-font'"
            rounded="e-xl"
            @click="onSelectOption(1)"
            flat
          >
            Monthly payment
          </v-btn>
        </div>
      </div>
      <div style="max-width: 1600px">
        <v-row>
          <v-col cols="12" md="4">
            <v-card
              rounded="xl"
              elevation="0"
              color="white"
              style="width: 501.33px; height: 784px; padding: 48px"
            >
              <v-card-title class="font-24 app-medium-font dark-font pa-0 mt-4">
                Standard Package
              </v-card-title>
              <v-card-text style="line-height: 1; padding: 0; margin-top: 40px">
                <span class="font-72 dark-font app-bold-font">780</span>
                <span class="font-32 blue-600 app-regular-font">/ month</span>
              </v-card-text>
              <v-card-text class="pa-0">
                <v-btn
                  flat
                  class="text-none font-16 app-semibold-font"
                  color="white"
                  rounded="lg"
                  style="
                    background-color: #20c39d !important;
                    color: white !important;
                    height: 56px;
                    margin-top: 64px;
                  "
                  block
                >
                  Sign Up
                </v-btn>
              </v-card-text>
              <v-card-text
                class="d-flex flex-row align-center pa-0"
                style="margin-top: 64px; height: 68px"
              >
                <v-icon color="#20C39D">mdi-check</v-icon>
                <span class="font-24 dark-font app-medium-font ms-4">
                  Up to 20 company watches
                </span>
              </v-card-text>
              <v-card-text
                class="d-flex flex-row align-center pa-0"
                style="height: 68px"
              >
                <v-icon color="#20C39D">mdi-check</v-icon>
                <span class="font-24 dark-font app-medium-font ms-4">
                  Up to 2 users
                </span>
              </v-card-text>
              <v-card-text
                class="d-flex flex-row align-center pa-0"
                style="height: 68px"
              >
                <v-icon color="#20C39D">mdi-check</v-icon>
                <span class="font-24 dark-font app-medium-font ms-4">
                  Up to 2 Automation Rules
                </span>
              </v-card-text>
              <v-card-text
                class="d-flex flex-row align-center pa-0"
                style="height: 68px"
              >
                <v-icon color="#20C39D">mdi-check</v-icon>
                <span class="font-24 dark-font app-medium-font ms-4">
                  Basic Analytics
                </span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card
              rounded="xl"
              elevation="0"
              color="#0D0D1E"
              style="width: 501.33px; height: 784px; padding: 48px"
            >
              <v-card-title
                class="font-24 app-medium-font white-font pa-0 mt-4"
              >
                Standard Package
              </v-card-title>
              <v-card-text style="line-height: 1; padding: 0; margin-top: 40px">
                <span class="font-72 white-font app-bold-font">1200</span>
                <span class="font-32 blue-600 app-regular-font">/ month</span>
              </v-card-text>
              <v-card-text class="pa-0">
                <v-btn
                  flat
                  class="text-none font-16 app-semibold-font"
                  color="white"
                  rounded="lg"
                  style="
                    background-color: #20c39d !important;
                    color: white !important;
                    height: 56px;
                    margin-top: 64px;
                  "
                  block
                >
                  Sign Up
                </v-btn>
              </v-card-text>
              <v-card-text
                class="d-flex flex-row align-center pa-0"
                style="margin-top: 64px; height: 68px"
              >
                <v-icon color="#20C39D">mdi-check</v-icon>
                <span class="font-24 light-font app-medium-font ms-4">
                  Up to 50 company watches
                </span>
              </v-card-text>
              <v-card-text
                class="d-flex flex-row align-center pa-0"
                style="height: 68px"
              >
                <v-icon color="#20C39D">mdi-check</v-icon>
                <span class="font-24 light-font app-medium-font ms-4">
                  Up to 5 users
                </span>
              </v-card-text>
              <v-card-text
                class="d-flex flex-row align-center pa-0"
                style="height: 68px"
              >
                <v-icon color="#20C39D">mdi-check</v-icon>
                <span class="font-24 light-font app-medium-font ms-4">
                  Up till 5 Automation Rules
                </span>
              </v-card-text>
              <v-card-text
                class="d-flex flex-row align-center pa-0"
                style="height: 68px"
              >
                <v-icon color="#20C39D">mdi-check</v-icon>
                <span class="font-24 light-font app-medium-font ms-4">
                  Extended Analytics
                </span>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card
              rounded="xl"
              elevation="0"
              color="white"
              style="width: 501.33px; height: 784px; padding: 48px"
            >
              <v-card-title class="font-24 app-medium-font dark-font pa-0 mt-4">
                ENTERPRISE Package
              </v-card-title>
              <v-card-text style="line-height: 1; padding: 0; margin-top: 40px">
                <span class="font-72 dark-font app-bold-font">780</span>
                <span class="font-32 blue-600 app-regular-font">/ month</span>
              </v-card-text>
              <v-card-text class="pa-0">
                <v-btn
                  flat
                  class="text-none font-16 app-semibold-font"
                  color="white"
                  rounded="lg"
                  style="
                    background-color: #20c39d !important;
                    color: white !important;
                    height: 56px;
                    margin-top: 64px;
                  "
                  block
                >
                  Sign Up
                </v-btn>
              </v-card-text>
              <v-card-text
                class="d-flex flex-row align-center pa-0"
                style="margin-top: 64px; height: 68px"
              >
                <v-icon color="#20C39D">mdi-check</v-icon>
                <span class="font-24 dark-font app-medium-font ms-4">
                  Up to 200 company watches
                </span>
              </v-card-text>
              <v-card-text
                class="d-flex flex-row align-center pa-0"
                style="height: 68px"
              >
                <v-icon color="#20C39D">mdi-check</v-icon>
                <span class="font-24 dark-font app-medium-font ms-4">
                  Up to 10 users
                </span>
              </v-card-text>
              <v-card-text
                class="d-flex flex-row align-center pa-0"
                style="height: 68px"
              >
                <v-icon color="#20C39D">mdi-check</v-icon>
                <span class="font-24 dark-font app-medium-font ms-4">
                  Unlimited Automation Rules
                </span>
              </v-card-text>
              <v-card-text
                class="d-flex flex-row align-center pa-0"
                style="height: 68px"
              >
                <v-icon color="#20C39D">mdi-check</v-icon>
                <span class="font-24 dark-font app-medium-font ms-4">
                  AI Assistant
                </span>
              </v-card-text>
              <v-card-text
                class="d-flex flex-row align-center pa-0"
                style="height: 68px"
              >
                <v-icon color="#20C39D">mdi-check</v-icon>
                <span class="font-24 dark-font app-medium-font ms-4">
                  Premium analytics
                </span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <span
        class="font-56 dark-font app-semibold-font"
        style="margin-top: 284px"
      >
        Frequently Asked Questions
      </span>
      <div style="width: 1104px; margin-top: 80px; margin-bottom: 189px">
        <v-card
          elevation="0"
          style="
            border-radius: 28px;
            padding-top: 30px;
            padding-bottom: 30px;
            padding-left: 56px;
            padding-right: 56px;
            margin-bottom: 12px;
          "
          v-for="item in questions"
        >
          <v-card-title class="d-flex flex-row align-center justify-between">
            <span class="font-24 dark-font app-semibold-font">
              {{ item.title }}
            </span>
            <div>
              <v-btn
                flat
                rounded="lg"
                class="button-36"
                @click="item.expand = !item.expand"
              >
                <v-img
                  width="36"
                  height="36"
                  :src="item.expand ? MinusIcon : PlusIcon"
                />
              </v-btn>
            </div>
          </v-card-title>
          <v-card-text
            class="font-18 shade-font app-medium-font"
            v-if="item.expand"
            style="padding-bottom: 14px; margin-top: 32px"
          >
            {{ item.text }}
          </v-card-text>
        </v-card>
      </div>
    </div>
    <div class="bg-landing d-flex flex-column align-center">
      <div style="margin-top: 174px; margin-bottom: 174px; width: 100%">
        <v-row>
          <v-col cols="12" md="6">
            <div class="d-flex flex-column justify-center w-100 align-center">
              <div style="width: 603px">
                <div class="font-32 light-font app-medium-font d-flex flex-row">
                  Seamlessly interact with any piece of corporate filings
                  data—from bankrupsy filings, notifications to case details,
                  emails, parsed PDFs, aggregate statistics, and case
                  filing—within a single platform.
                </div>
              </div>
              <div style="width: 603px">
                <v-btn
                  flat
                  class="text-none font-16 app-semibold-font"
                  color="white"
                  rounded="lg"
                  style="
                    background-color: #20c39d !important;
                    color: white !important;
                    height: 64px;
                    width: 184px;
                    font-size: 16px;
                    margin-top: 72px;
                  "
                  append-icon="mdi-chevron-right"
                >
                  Get Started
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="font-24 white-font app-medium-font mx-10">
              <v-img
                src="@/assets/landing/home_second.png"
                width="746"
                height="500"
              />
            </div>
          </v-col>
        </v-row>
      </div>
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
import MinusIcon from "@/assets/landing/minus.svg";
import PlusIcon from "@/assets/landing/plus.svg";

const option = ref(0);
const onSelectOption = (index: number) => {
  option.value = index;
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
