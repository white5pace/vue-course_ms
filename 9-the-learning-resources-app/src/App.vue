<template>
  <the-header title="RememberMe"/>
  <the-resources/>
</template>

<script>
  import TheHeader from "@/6-components/layouts/TheHeader";
  import TheResources from "@/6-components/learning-resources/TheResources";

  export default {
    components: {TheResources, TheHeader},
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
  }
</style>