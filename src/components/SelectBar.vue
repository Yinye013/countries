<template>
  <form class="input-wrapper" @submit.prevent="inputValue(enteredValue)">
    <input
      type="text"
      placeholder="Search for a country"
      class="w-80 p-3 shadow-md outline-none"
      v-model="enteredValue"
    />

    <select
      name="Filter by Region"
      placeholder="Filter by Region"
      id="Filter by Region"
      class="w-60 p-3 shadow-md outline-none"
    >
      <option disabled selected hidden value="">Filter by Region</option>

      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </form>
  <p v-if="error" class="absolute font-semibold text-red-500">
    {{ errorMsg }}!
  </p>

  <!-- card -->
  <div class="max-w-screen-xl mx-auto p-5">
    <div
      class="shadow-lg w-80 rounded-lg overflow-hidden"
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
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      enteredValue: "",
      countries: [],
      errorMsg: "",
      error: false,
    };
  },
  methods: {
    async inputValue(country) {
      try {
        const url = `https://restcountries.com/v3.1/name/${country}`;
        const response = await axios.get(url);
        this.countries = response.data;

        if (country.ok === 404) {
          alert("Enter a valid country");
        }

        console.log(this.countries);
      } catch (err) {
        this.error = true;
        this.errorMsg = err.message;
        console.log(this.errorMsg);
      }
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  @apply flex p-5 mt-4  md:flex justify-between flex-row lg:flex justify-between flex-row xl:flex justify-between flex-row max-w-screen-xl mx-auto relative;
}
</style>
