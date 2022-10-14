<template>
  <div class="app">
    <TheHeader></TheHeader>
    <SelectBar></SelectBar>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import SelectBar from "./components/SelectBar.vue";
import Card from "./components/Card.vue";
export default {
  components: { TheHeader, SelectBar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap");
.app {
  font-family: "Nunito Sans";
}
</style>
