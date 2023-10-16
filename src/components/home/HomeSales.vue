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
        <span class="font-14 app-medium-font blue-600 me-2">Net</span>
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
    <v-card-text class="pt-0">
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
    borderRadius: 20,
    marginBottom: 50,
    marginLeft: 50,
    marginRight: 20,
    marginTop: 50,
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
    },
    series: {
      color: "#7024C4",
    },
  },
  xAxis: {
    labels: {
      formatter: function (this: { value: number }): string {
        let myDate = new Date(this.value);
        return moment(String(myDate)).format("MMM DD");
      },
    },
  },
  yAxis: {
    title: "",
  },
  series: [
    {
      showInLegend: false,
      data: [
        [1356998400000, 24],
        [1359676800000, 30],
        [1362096000000, 18],
        [1364774400000, 22],
        [1367366400000, 12],
        [1370044800000, 28],
        [1372636800000, 40],
        [1375315200000, 17],
        [1377993600000, 14],
        [1380585600000, 21],
        [1383264000000, 5],
        [1385856000000, 32],
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
