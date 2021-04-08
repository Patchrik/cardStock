<template>
  <v-app>
    <v-container>
      <v-app-bar class="align-center">
        <v-row justify="space-between" align="center">
          <v-col :sm="6">
            <v-toolbar-title>StockCard</v-toolbar-title>
          </v-col>
          <v-col :sm="3" class="mt-7">
            <search-field></search-field>
          </v-col>
        </v-row>
      </v-app-bar>
      <stock-card ticker="IBM" />
    </v-container>
  </v-app>
</template>

<script>
  import SearchField from "./components/SearchField.vue";
  import StockCard from "./components/StockCard.vue";
  export default {
    name: "App",

    components: { StockCard, SearchField },

    data: () => ({
      userProfile: {
        followedTickers: [],
      },
    }),
  };
</script>
