<template>
  <div>
    <TheHeader></TheHeader>
    <SelectBar></SelectBar>
    <Card></Card>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import SelectBar from "./components/SelectBar.vue";
import Card from "./components/Card.vue";
export default {
  components: { TheHeader, SelectBar, Card },
};
</script>

<style lang="scss" scoped></style>
