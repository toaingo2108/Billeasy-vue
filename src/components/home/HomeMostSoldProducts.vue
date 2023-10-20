<template>
  <div style="height: 33.3%">
    <v-card class="h-100 d-flex flex-column rounded-xl">
      <v-card-title
        class="app-semibold-font font-20 dark-font d-flex flex-row mt-4 ms-4 align-center"
      >
        <div class="me-3">
          <v-img
            width="28"
            height="28"
            src="@/assets/svg/home/most_sold_products.svg"
          />
        </div>
        Most Sold Products
        <v-icon color="#8B8BA9" size="14" class="ms-3"
          >mdi-information-outline</v-icon
        >
      </v-card-title>
      <v-card-text class="pt-0 mx-2">
        <highcharts
          :options="chartOptions"
          class="homechart_container"
        ></highcharts>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
const chartOptions = {
  showInLegend: false,
  chart: {
    backgroundColor: "white",
    renderTo: "container",
    type: "bar",
    marginLeft: 110,
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
      x: -100,
    },
    lineColor: "#E6E6ED",
  },
  yAxis: {
    opposite: false,
    tickPixelInterval: 150,
    title: {
      text: null,
    },
    max: 50000,
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
          name: "Blue t-shirt",
          y: 50000,
          color: "#22B762",
        },
        {
          name: "Red Jacket",
          y: 40000,
          color: "#B2B2CB",
        },
        {
          name: "TV",
          y: 36000,
          color: "#D1D1E2",
        },
      ],
    },
  ],
  tooltip: {
    type: "category",
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
