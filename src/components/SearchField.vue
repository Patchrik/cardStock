<template>
  <div>
    <v-text-field
      label="Search Symbol"
      prepend-inner-icon="mdi-Magnify"
      rounded
      filled
      v-model="searchTerm"
      @change="handleSearch"
    ></v-text-field>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchTerm: "",
      };
    },
    methods: {
      handleSearch() {
        console.log(this.searchTerm);
        this.$emit("new-search", this.searchTerm);
      },
    },
  };
</script>

<style></style>
