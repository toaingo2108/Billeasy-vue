<template>
  <div style="height: 33.3%" class="pb-3">
    <v-card class="h-100 d-flex flex-column rounded-xl">
      <v-card-title
        class="app-semibold-font font-20 dark-font d-flex flex-row mt-4 ms-4 align-center"
      >
        <div class="me-3">
          <v-img
            width="28"
            height="28"
            src="@/assets/svg/home/best_customers.svg"
          />
        </div>
        Best Customers
        <v-icon color="#8B8BA9" size="14" class="ms-3"
          >mdi-information-outline</v-icon
        >
      </v-card-title>
      <v-card-text class="pt-0">
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
    borderRadius: 20,
    marginBottom: 50,
    spaceLeft: 350,
    marginRight: 20,
    marginTop: 50,
    type: "bar",
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
    type: "category",
  },
  yAxis: {
    opposite: true,
    tickPixelInterval: 150,
    title: {
      text: null,
    },
    max: 50000,
  },
  series: [
    {
      showInLegend: false,
      data: [
        {
          name: "Jane Doe",
          y: 50000,
          color: "#22B762",
        },
        {
          name: "Jimmy Shoo",
          y: 40000,
          color: "#B2B2CB",
        },
        {
          name: "Zara Smith",
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
