<template>
  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-screen-lg mx-auto p-7"
  >
    <div
      class="shadow-lg w-6/12 md:w-80 rounded-lg cursor-pointer overflow-hidden"
      v-for="country in countries"
      :key="country.capital"
    >
      <div>
        <img :src="country.flags.png" class="" alt="flag image" />
      </div>
      <div class="p-6">
        <h2 class="font-bold mb-4">{{ country.name.common }}</h2>
        <div class="flex gap-1 mb-2">
          <h3 class="font-semibold">Population:</h3>
          <p>{{ (+country.population / 1000000).toFixed(1) }} million</p>
        </div>

        <div class="flex gap-1 mb-2">
          <h3 class="font-semibold">Region:</h3>
          <p>{{ country.region }}</p>
        </div>
        <div class="flex gap-2">
          <h3 class="font-semibold">Capital:</h3>
          <p>{{ country.capital[0] }}</p>
        </div>
      </div>
    </div>
  </div>

  <!--  -->
  <!--  -->
  <!-- NEIGBORING BORDERS -->
  <!-- <div
    class="shadow-lg w-6/12 md:w-80 rounded-lg cursor-pointer overflow-hidden"
    v-for="border in borders"
    :key="border.capital"
  >
    <div>
      <img :src="border.flags.png" class="" alt="flag image" />
    </div>
    <div class="p-6">
      <h2 class="font-bold mb-4">{{ border.name.common }}</h2>
      <div class="flex gap-1 mb-2">
        <h3 class="font-semibold">Population:</h3>
        <p>{{ (+border.population / 1000000).toFixed(1) }} million</p>
      </div>

      <div class="flex gap-1 mb-2">
        <h3 class="font-semibold">Region:</h3>
        <p>{{ border.region }}</p>
      </div>
      <div class="flex gap-2">
        <h3 class="font-semibold">Capital:</h3>
        <p>{{ border.capital[0] }}</p>
      </div>
    </div> -->
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  // computed: {
  //   enteredValue: {
  //     get() {
  //       return this.$store.state.enteredValue;
  //     },
  //     set(value) {
  //       this.$store.commit("updateMessage", value);
  //     },
  //   },

  // },
  computed: {
    ...mapState(["countries"]), //this provides the countries array to us which is used in this component
    ...mapState(["borders"]),
  },
  methods: {
    // onSubmit(e) {
    //   e.preventDefault();
    //   this.inputValue(this.enteredValue);
    // },
    // updateMessage(e) {
    //   this.$store.commit("updateMessage", e.target.value);
    // },
    // addCountry() {
    //   this.$store.commit("newCountries", { value: response.data });
    // },
  },
};
</script>

<style lang="scss" scoped></style>
