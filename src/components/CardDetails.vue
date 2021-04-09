<template>
  <div>
    <v-list-item>
      <v-list-item-title>{{ metaData.info }}</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>Ticker: {{ metaData.symbol }}</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>Last Refreshed: {{ formattedDate }}</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>Interval: {{ metaData.interval }}</v-list-item-title>
    </v-list-item>
  </div>
</template>

<script>
  import DateFormat from "../utils/DateFormat";
  export default {
    props: {
      metaData: Object,
    },
    data() {
      return {
        data: {},
      };
    },
    computed: {
      formattedDate() {
        let formatted = DateFormat(this.metaData.lastRefresh);
        return formatted;
      },
    },
  };
</script>

<style></style>
