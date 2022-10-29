<template>
  <form class="input-wrapper">
    <form @submit="onSubmit">
      <input
        type="text"
        placeholder=" Search for a country"
        class="w-80 p-3 shadow-md outline-none"
        v-model="enteredValue"
      />
    </form>
    <!-- <p>{{ enteredValue }}</p>  used for testing the v-model property-->

    <form>
      <select
        name="Filter by Region"
        placeholder="Filter by Region"
        id="Filter by Region"
        class="w-60 p-3 shadow-md outline-none"
        @change="onSubmitSelect"
      >
        <option disabled selected hidden value="">Filter By Region</option>

        <option value="Africa">Africa</option>
        <option value="America">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  </form>

  <p v-if="error" class="absolute font-semibold text-red-500">
    {{ errorMsg }}!
  </p>

  <!-- card -->
</template>

<script>
// import { SearchIcon } from "@vue-hero-icons/outline from";
// import { mapState } from "vuex";
import { mapGetters, mapMutations, mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["updateError"]),
    enteredValue: {
      //getter and setter functions for v-model two way binding
      get() {
        return this.$store.state.enteredValue;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
        //updating the input with v-model
      },
    },
    // enteredOption: {
    //   get() {
    //     return this.$store.state.enteredOption;
    //   },
    //   set(value) {
    //     this.$store.commit("updateOption", value);
    //   },
    // },
  },
  methods: {
    ...mapActions(["inputValue"]),
    ...mapActions(["inputOption"]),

    ...mapMutations(["updateErrorMsg"]),

    ...mapState(["errorMsg"]),

    onSubmit(e) {
      e.preventDefault();

      this.inputValue(this.enteredValue); //method for submitting the entered value as a payload
      this.updateErrorMsg(this.updateError);
    },
    onSubmitSelect(e) {
      e.preventDefault();

      const innerText =
        e.target.options[e.target.options.selectedIndex].innerText;
      console.log(innerText);
      this.inputOption(innerText);

      //this was trial and error. I still dont know what tf happened here!
    },
    // updateMessage(e) {
    //   this.$store.commit("updateMessage", e.target.value);
    // },
    // addCountry() {
    //   this.$store.commit("newCountries", { value: response.data });
    // },
  },
};
</script>

<style scoped>
.input-wrapper {
  @apply flex p-5 mt-4 mb-6  md:flex justify-between flex-row lg:flex justify-between flex-row xl:flex justify-between flex-row max-w-screen-xl mx-auto relative;
}
</style>
