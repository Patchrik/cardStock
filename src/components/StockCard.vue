<template>
  <v-container>
    <v-card v-if="!loading" class="px-1 py-1">
      <v-row>
        <v-col>
          <v-card class="px-1 py-1">
            <card-graph :chartData="chartData" />
          </v-card>
        </v-col>
        <v-col>
          <v-card class="px-1 py-1">
            <card-details :metaData="metaData" />
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card v-else>
      <v-row>
        <v-spacer />
        <v-progress-circular
          size="200"
          width="15"
          indeterminate
          color="green"
        ></v-progress-circular>
        <v-spacer />
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
  import CardDetails from "./CardDetails.vue";
  import CardGraph from "./CardGraph.vue";
  import { buildParsedArray } from "../utils/DataParsing";
  export default {
    components: { CardGraph, CardDetails },
    props: {
      ticker: String,
    },
    data() {
      return {
        chartData: [],
        loading: true,
        metaData: {},
      };
    },
    methods: {
      async convertData() {
        const response = await fetch(
          `https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=${this.ticker}&datatype=json&output_size=compact`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": process.env.VUE_APP_ALPHA_VAN_KEY,
              "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
            },
          }
        );
        const data = await response.json();
        this.chartData = buildParsedArray(data["Time Series (5min)"]);
        const {
          ["1. Information"]: info,
          ["2. Symbol"]: symbol,
          ["3. Last Refreshed"]: lastRefresh,
          ["4. Interval"]: interval,
        } = data["Meta Data"];
        this.metaData = {
          ...this.metaData,
          info,
          symbol,
          lastRefresh,
          interval,
        };
        this.loading = !this.loading;
      },
    },
    beforeMount() {
      this.convertData();
    },
  };
</script>

<style></style>
