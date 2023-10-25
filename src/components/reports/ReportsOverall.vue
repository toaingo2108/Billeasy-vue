<template>
  <div class="mt-6">
    <div class="d-flex flex-row mb-6">
      <div style="width: 224px">
        <span class="font-13 app-medium-font dark-font">Period</span>
        <v-select
          bg-color="white"
          placeholder="Period"
          variant="outlined"
          rounded="lg"
          hide-details
          :items="['12 months', '2 years']"
          bg-color="white"
        />
      </div>
      <div style="width: 224px" class="ms-12">
        <span class="font-13 app-medium-font dark-font">Currency</span>
        <v-select
          bg-color="white"
          placeholder="VAT rate"
          variant="outlined"
          rounded="lg"
          hide-details
          :items="['SEK', 'USD']"
          bg-color="white"
        />
      </div>
      <div class="ms-12 mt-7">
        <app-checkbox v-model="showAmountIncl" />
        <span class="font-14 app-regular-font dark-font">
          Show amounts incl. VAT
        </span>
      </div>
    </div>
    <v-card class="d-flex flex-column rounded-xl" elevation="0">
      <v-card-title
        class="app-semibold-font font-20 dark-font d-flex flex-row ms-4 align-center"
      >
        <div class="me-3">
          <v-img width="28" height="28" src="@/assets/svg/home/sales.svg" />
        </div>
        <div>
          Total Sales<span class="font-13 blue-600 ms-2">$550,000,000</span>
        </div>
        <v-spacer />
        <v-btn
          variant="outlined"
          rounded="lg"
          style="height: 37px; border-color: #d1d1e2; color: #0d0d1e"
          class="text-none mt-2"
          prepend-icon="mdi-download"
        >
          Export
        </v-btn>
      </v-card-title>
      <v-card-text
        class="d-flex flex-row mx-4 mt-5 pb-0 d-flex flex-row align-center"
      >
        <span
          class="font-12 dark-font app-regular-font d-flex flex-row align-center justify-center me-2"
          style="
            height: 28px;
            width: 88px;
            background-color: #f2f2f7;
            border-radius: 10px;
          "
        >
          2022-06-01
        </span>
        to
        <span
          class="font-12 dark-font app-regular-font d-flex flex-row align-center justify-center ms-2"
          style="
            height: 28px;
            width: 88px;
            background-color: #f2f2f7;
            border-radius: 10px;
          "
        >
          2023-05-31
        </span>
        <div
          style="
            width: 8px;
            height: 8px;
            border-radius: 4px;
            margin-right: 12px;
            background-color: #474780;
            margin-left: 29px;
          "
        />
        <span class="font-14 dark-font app-medium-font">
          Full paid invoices
        </span>
        <div
          style="
            width: 8px;
            height: 8px;
            border-radius: 4px;
            margin-right: 12px;
            margin-left: 29px;
            background-color: #c3c3d8;
          "
        />
        <span class="font-14 dark-font app-medium-font"> Open invoices </span>
      </v-card-text>
      <v-card-text class="mt-2">
        <highcharts
          :options="chartOptions"
          class="homechart_container"
        ></highcharts>
      </v-card-text>
    </v-card>
    <v-card class="mt-6 d-flex flex-column rounded-xl mb-4" elevation="0">
      <v-card-title
        class="app-semibold-font font-20 dark-font d-flex flex-row mt-4 ms-4 align-center"
      >
        <div class="me-3">
          <v-img
            width="28"
            height="28"
            src="@/assets/svg/home/open_invoices.svg"
          />
        </div>
        Invoices
        <v-icon color="#8B8BA9" size="14" class="ms-3"
          >mdi-information-outline</v-icon
        >
      </v-card-title>
      <v-card-text class="ms-4 mb-2">
        <v-tabs v-model="tab" color="#20C39D">
          <v-tab
            :value="index"
            class="text-none font-14 app-medium-font"
            :class="tab == index ? 'teal-font' : 'blue-600'"
            v-for="(menu, index) in menus"
          >
            {{ menu.title }}
          </v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item
            v-for="(menu, index) in menus"
            :key="index"
            :value="index"
          >
            <div v-if="index == 0">
              <table class="w-100 h-100 py-5 styled-table">
                <tr>
                  <th style="text-align: left; height: 48px">
                    <span class="font-13 app-semibold-font dark-font">
                      Invoice
                    </span>
                  </th>
                  <th style="text-align: left">
                    <span class="font-13 app-semibold-font dark-font">
                      Customer
                    </span>
                  </th>
                  <th style="text-align: left">
                    <span class="font-13 app-semibold-font dark-font">
                      Total
                    </span>
                  </th>
                  <th style="text-align: left">
                    <span class="font-13 app-semibold-font dark-font">
                      Invoice Date
                    </span>
                  </th>
                  <th style="text-align: left">
                    <span class="font-13 app-semibold-font dark-font">
                      Payment Date
                    </span>
                  </th>
                  <th style="text-align: left">
                    <span class="font-13 app-semibold-font dark-font">
                      Due Date
                    </span>
                  </th>
                </tr>
                <tr>
                  <td
                    class="remove-border-bottom font-13 app-medium-font dark-font"
                    style="height: 36px"
                  >
                    12345
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font dark-font"
                  >
                    12 - Sara Carlsson
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    1000,00
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                </tr>
                <tr>
                  <td
                    class="remove-border-bottom font-13 app-medium-font dark-font"
                    style="height: 36px"
                  >
                    12345
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font dark-font"
                  >
                    12 - Sara Carlsson
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    1000,00
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                </tr>
                <tr>
                  <td
                    class="remove-border-bottom font-13 app-medium-font dark-font"
                    style="height: 36px"
                  >
                    12345
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font dark-font"
                  >
                    12 - Sara Carlsson
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    1000,00
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                </tr>
                <tr>
                  <td
                    class="remove-border-bottom font-13 app-medium-font dark-font"
                    style="height: 36px"
                  >
                    12345
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font dark-font"
                  >
                    12 - Sara Carlsson
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    1000,00
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                </tr>
              </table>
            </div>
            <div v-else-if="index == 1">
              <table class="w-100 h-100 py-5 styled-table">
                <tr>
                  <th style="text-align: left; height: 48px">
                    <span class="font-13 app-semibold-font dark-font">
                      Invoice
                    </span>
                  </th>
                  <th style="text-align: left">
                    <span class="font-13 app-semibold-font dark-font">
                      Customer
                    </span>
                  </th>
                  <th style="text-align: left">
                    <span class="font-13 app-semibold-font dark-font">
                      Total
                    </span>
                  </th>
                  <th style="text-align: left">
                    <span class="font-13 app-semibold-font dark-font">
                      Invoice Date
                    </span>
                  </th>
                  <th style="text-align: left">
                    <span class="font-13 app-semibold-font dark-font">
                      Payment Date
                    </span>
                  </th>
                  <th style="text-align: left">
                    <span class="font-13 app-semibold-font dark-font">
                      Due Date
                    </span>
                  </th>
                </tr>
                <tr>
                  <td
                    class="remove-border-bottom font-13 app-medium-font dark-font"
                    style="height: 36px"
                  >
                    12345
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font dark-font"
                  >
                    12 - Sara Carlsson
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    1000,00
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                </tr>
                <tr>
                  <td
                    class="remove-border-bottom font-13 app-medium-font dark-font"
                    style="height: 36px"
                  >
                    12345
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font dark-font"
                  >
                    12 - Sara Carlsson
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    1000,00
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                </tr>
                <tr>
                  <td
                    class="remove-border-bottom font-13 app-medium-font dark-font"
                    style="height: 36px"
                  >
                    12345
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font dark-font"
                  >
                    12 - Sara Carlsson
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    1000,00
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                </tr>
                <tr>
                  <td
                    class="remove-border-bottom font-13 app-medium-font dark-font"
                    style="height: 36px"
                  >
                    12345
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font dark-font"
                  >
                    12 - Sara Carlsson
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    1000,00
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                  <td
                    class="remove-border-bottom font-13 app-medium-font shade-font"
                  >
                    2023-01-01
                  </td>
                </tr>
              </table>
            </div>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import AppCheckbox from "@/components/default/AppCheckbox.vue";
import moment from "moment";
import { ref } from "vue";
const chartOptions = {
  showInLegend: false,
  chart: {
    backgroundColor: "white",
    renderTo: "container",
    type: "column",
  },
  credits: {
    enabled: false,
  },
  title: {
    text: " ", //Distributed Analysis'
  },
  // subtitle: {
  //     text: 'Test options by dragging the sliders below'
  // },
  plotOptions: {
    column: {
      depth: 25,
      borderRadius: 6,
    },
    series: {
      color: "#7024C4",
    },
  },
  xAxis: {
    labels: {
      style: {
        color: "#0D0D1E",
        fontSize: "12px",
        fontFamily: "Poppins-Regular",
      },
    },
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    lineColor: "#E6E6ED",
  },
  yAxis: {
    title: "",
    max: 50000,
    gridLineColor: "#E6E6ED",
    labels: {
      style: {
        color: "#0D0D1E",
        fontSize: "12px",
        fontFamily: "Poppins-Regular",
      },
    },
  },
  series: [
    {
      name: "Full paid invoices",
      color: "#474780",
      data: [
        30000, 26000, 17000, 42000, 33000, 15000, 31000, 6000, 40000, 19000,
        28000, 20000,
      ],
    },
    {
      name: "Open invoices",
      color: "#c3c3d8",
      data: [
        17000, 23000, 30000, 22000, 28000, 8000, 33000, 23000, 6000, 22000,
        26000, 22000,
      ],
    },
  ],
  legend: {
    enabled: false,
  },
};

const showAmountIncl = ref(false);

const tab = ref(0);

const menus = [
  {
    title: "Open Invoices",
  },
  {
    title: "Fully Paid Invoices",
  },
];
</script>
<style scoped>
.homechart_container {
  min-height: 300px;
  height: 100%;
  width: 100%;
}
</style>
