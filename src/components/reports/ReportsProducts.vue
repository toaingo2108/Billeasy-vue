<template>
  <div class="mt-6">
    <div class="d-flex flex-row mb-6">
      <div style="width: 224px">
        <span class="font-13 app-medium-font dark-font">Period</span>
        <v-select
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
        <span class="font-14 app-regular-font dark-font ms-2">
          Show amounts incl. VAT
        </span>
      </div>
      <v-spacer />
      <div style="width: 224px">
        <span class="font-13 app-medium-font dark-font">Product</span>
        <v-select
          placeholder="Customer"
          variant="outlined"
          rounded="lg"
          hide-details
          :items="['12 - Blue t-shirt, XS', '12 - Blue t-shirt, XL']"
          bg-color="white"
        />
      </div>
      <div style="width: 224px" class="ms-12">
        <span class="font-13 app-medium-font dark-font">Customer Category</span>
        <v-select
          placeholder="Customer Category"
          variant="outlined"
          rounded="lg"
          hide-details
          :items="['Bohemian items', 'Bohemian items 2']"
          bg-color="white"
        />
      </div>
    </div>
    <v-card class="d-flex flex-column rounded-xl" elevation="0">
      <v-card-title
        class="app-semibold-font font-20 dark-font d-flex flex-row ms-4 align-center"
      >
        <div class="me-3">
          <v-img
            width="28"
            height="28"
            src="@/assets/svg/home/best_customers.svg"
          />
        </div>
        <div>Top 10 Products</div>
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
      <v-card-text class="mt-2">
        <highcharts
          :options="chartOptions"
          class="homechart_container"
        ></highcharts>
      </v-card-text>
    </v-card>
    <v-card class="d-flex flex-column rounded-xl mt-6" elevation="0">
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
        <span class="font-14 dark-font app-medium-font">
          Sales to specific product
        </span>
        <div
          style="
            width: 8px;
            height: 8px;
            border-radius: 4px;
            margin-right: 12px;
            margin-left: 29px;
            background-color: #e6e6ed;
          "
        />
        <span class="font-14 shade-font app-medium-font">
          12 - Blue t-shirt, XS
        </span>
      </v-card-text>
      <v-card-text class="mt-2">
        <highcharts
          :options="chartOptions2"
          class="homechart_container2"
        ></highcharts>
      </v-card-text>
    </v-card>
    <v-card class="d-flex flex-column rounded-xl mt-6" elevation="0">
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
        <span class="font-14 dark-font app-medium-font">
          Sales to specific product category
        </span>
        <div
          style="
            width: 8px;
            height: 8px;
            border-radius: 4px;
            margin-right: 12px;
            margin-left: 29px;
            background-color: #e6e6ed;
          "
        />
        <span class="font-14 shade-font app-medium-font"> Bohemian items </span>
      </v-card-text>
      <v-card-text class="mt-2">
        <highcharts
          :options="chartOptions3"
          class="homechart_container2"
        ></highcharts>
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
    type: "bar",
    marginLeft: 206,
  },
  credits: {
    enabled: false,
  },
  title: {
    text: " ", //Distributed Analysis'
  },
  plotOptions: {
    column: {
      depth: 25,
    },
    bar: {
      borderRadius: 6,
      pointWidth: 25,
    },
    series: {
      color: "#7024C4",
    },
  },
  xAxis: {
    type: "category",
    labels: {
      style: {
        color: "#0D0D1E",
        fontSize: "13px",
        fontFamily: "Poppins-Regular",
      },
      align: "left",
      x: -190,
    },
    lineColor: "#E6E6ED",
  },
  yAxis: {
    opposite: false,
    tickPixelInterval: 150,
    title: {
      text: null,
    },
    max: 80000,
    labels: {
      style: {
        color: "#59597B",
        fontSize: "11px",
        fontFamily: "Poppins-SemiBold",
      },
    },
    lineColor: "#E6E6ED",
  },
  series: [
    {
      showInLegend: false,
      data: [
        {
          name: "12 - Blue t-shirt, XS1",
          y: 78000,
          color: "#E47F19",
        },
        {
          name: "12 - Blue t-shirt, XS2",
          y: 69000,
          color: "#E18B35",
        },
        {
          name: "12 - Blue t-shirt, XS3",
          y: 54000,
          color: "#EE9740",
        },
        {
          name: "12 - Blue t-shirt, XS4",
          y: 42000,
          color: "#F3A352",
        },
        {
          name: "12 - Blue t-shirt, XS5",
          y: 27500,
          color: "#F8B068",
        },
        {
          name: "12 - Blue t-shirt, XS6",
          y: 17500,
          color: "#FABA7B",
        },
        {
          name: "12 - Blue t-shirt, XS7",
          y: 16000,
          color: "#FAC693",
        },
        {
          name: "12 - Blue t-shirt, XS8",
          y: 11000,
          color: "#FBCC9E",
        },
        {
          name: "12 - Blue t-shirt, XS9",
          y: 7500,
          color: "#FFDBB8",
        },
        {
          name: "12 - Blue t-shirt, XS10",
          y: 4500,
          color: "#FFE1C3",
        },
      ],
    },
  ],
  tooltip: {
    type: "category",
  },
};

const chartOptions2 = {
  showInLegend: false,
  chart: {
    backgroundColor: "white",
    renderTo: "container",
    type: "line",
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
      color: "#EB1D72",
      data: [
        13000, 26000, 17000, 20000, 8000, 26000, 20000, 34000, 23000, 5000,
        11000, 22000,
      ],
    },
  ],
  legend: {
    enabled: false,
  },
};

const chartOptions3 = {
  showInLegend: false,
  chart: {
    backgroundColor: "white",
    renderTo: "container",
    type: "line",
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
      color: "#7FC526",
      data: [
        13000, 26000, 17000, 20000, 8000, 26000, 20000, 34000, 23000, 5000,
        11000, 22000,
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
    title: "Open Subscriptions",
  },
  {
    title: "Canceled Subscriptions",
  },
];
</script>
<style scoped>
.homechart_container {
  min-height: 420px;
  height: 100%;
  width: 100%;
}
.homechart_container2 {
  min-height: 300px;
  height: 100%;
  width: 100%;
}
</style>
