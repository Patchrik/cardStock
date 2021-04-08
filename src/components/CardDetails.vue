<template>
  <div>
    <v-list-item>
      <v-list-item-title>{{ metaData.info }}</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title>Ticker: {{ metaData.symbol }}</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-title
        >Last Refreshed: {{ metaData.lastRefresh }}</v-list-item-title
      >
    </v-list-item>
    <v-list-item>
      <v-list-item-title>Interval: {{ metaData.interval }}</v-list-item-title>
    </v-list-item>
  </div>
</template>

<script>
  export default {
    props: {
      metaData: Object,
    },
    data() {
      return {
        data: {},
      };
    },
  };
</script>

<style></style>
