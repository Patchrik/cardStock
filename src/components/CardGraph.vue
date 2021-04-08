<template>
  <apexchart
    type="candlestick"
    height="350"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
  export default {
    components: {},
    props: {
      chartData: Array,
    },
    data() {
      return {
        series: [
          {
            data: [...this.chartData],
          },
        ],
        chartOptions: {
          chart: {
            type: "candlestick",
            height: 350,
          },
          title: {
            text: "CandleStick Chart",
            align: "left",
          },
          xaxis: {
            type: "datetime",
          },
          yaxis: {
            tooltip: {
              enabled: true,
            },
          },
        },
      };
    },
  };
</script>

<style></style>
