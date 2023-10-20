<template>
  <v-card style="height: 50%" class="d-flex flex-column rounded-xl">
    <v-card-title
      class="app-semibold-font font-20 dark-font d-flex flex-row mt-4 ms-4 align-center"
    >
      <div class="me-3">
        <v-img width="28" height="28" src="@/assets/svg/home/sales.svg" />
      </div>
      <div>Sales<span class="font-13 blue-600 ms-2">(in SEK)</span></div>
      <v-icon color="#8B8BA9" size="14" class="ms-3">
        mdi-information-outline
      </v-icon>
      <v-spacer />
      <div class="d-flex flex-row align-center">
        <span class="font-14 app-medium-font blue-magenta-font me-2">Net</span>
        <v-switch hide-details />
        <span class="font-14 app-medium-font dark-font ms-2">Gross</span>
      </div>
    </v-card-title>
    <v-card-text class="d-flex flex-row mx-4 mt-5 pb-0">
      <div class="d-flex flex-column w-25">
        <div class="app-semibold-font font-18 dark-font">55k+</div>
        <div class="app-regular-font font-13 blue-600">Last 12 months</div>
      </div>
      <div class="d-flex flex-column w-25">
        <div class="app-semibold-font font-18 dark-font">21k+</div>
        <div class="app-regular-font font-13 blue-600">Last 6 months</div>
      </div>
      <div class="d-flex flex-column w-25">
        <div class="app-semibold-font font-18 dark-font">1k+</div>
        <div class="app-regular-font font-13 blue-600">Last 3 months</div>
      </div>
      <div class="d-flex flex-column w-25">
        <div class="app-semibold-font font-18 dark-font">500+</div>
        <div class="app-regular-font font-13 blue-600">This month</div>
      </div>
    </v-card-text>
    <v-card-text class="mt-2">
      <highcharts
        :options="chartOptions"
        class="homechart_container"
      ></highcharts>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
import moment from "moment";
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
      formatter: function (this: { value: number }): string {
        let myDate = new Date(this.value);
        return moment(String(myDate)).format("MMM DD");
      },
    },
    lineColor: "#E6E6ED",
  },
  yAxis: {
    title: "",
    max: 40,
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
      showInLegend: false,
      data: [
        { x: 1356998400000, y: 24, color: "#E6E6ED" },
        { x: 1359676800000, y: 30, color: "#E6E6ED" },
        { x: 1362096000000, y: 18, color: "#D1D1E2" },
        { x: 1364774400000, y: 22, color: "#D1D1E2" },
        { x: 1367366400000, y: 12, color: "#B2B2CB" },
        { x: 1370044800000, y: 28, color: "#B2B2CB" },
        { x: 1372636800000, y: 40, color: "#22B762" },
        { x: 1375315200000, y: 17, color: "#B2B2CB" },
        { x: 1377993600000, y: 14, color: "#B2B2CB" },
        { x: 1380585600000, y: 21, color: "#D1D1E2" },
        { x: 1383264000000, y: 5, color: "#D1D1E2" },
        { x: 1385856000000, y: 32, color: "#E6E6ED" },
      ],
    },
  ],
  tooltip: {
    formatter: function (this: { x: number; y: number }): string {
      let myDate = new Date(this.x);
      return moment(String(myDate)).format("MMM DD") + " : " + this.y;
    },
  },
};
</script>
<style scoped>
.homechart_container {
  min-height: 150px;
  height: 100%;
  width: 100%;
}
</style>
