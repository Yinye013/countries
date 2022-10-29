import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import { createStore } from "vuex";
import "./index.css";

const store = createStore({
  state() {
    return {
      enteredValue: "",
      // enteredOption: null,
      countries: [],
      borders: [],
      errorMsg: "",
      error: false,
    };
  },
  mutations: {
    //manipulate the state here
    newCountries(state, payload) {
      state.enteredValue = payload.value;
      //manipulating the enteredValue here
    },
    updateMessage(state, message) {
      state.enteredValue = message;
    },
    updateOption(state, payload) {
      state.enteredOption = payload.target.options;
    },
    updateErrorMsg(state, payload) {
      state.errorMsg = payload.message;
    },
  },
  actions: {
    async inputValue({ commit }, country) {
      //putting in the country as the payload
      try {
        const url = `https://restcountries.com/v3.1/name/${country}`;
        const response = await axios.get(url);
        console.log(response.data);
        this.state.countries = response.data;
        this.state.borders = response.data[0].borders;
        console.log(this.state.countries);
        console.log(this.state.borders);

        commit("newCountries", response.data);
        //committing the mutation newCountries in which the input value is manipulated

        if (country.ok === 404) {
          alert("Enter a valid country");
        }

        // console.log(this.countries);
      } catch (err) {
        this.state.errorMsg = err.message;
        this.state.error = true;
        console.log(err.message);
        commit("updateErrorMsg", err.message);
      }
    },
    async inputOption({ commit }, region) {
      try {
        const url = `https://restcountries.com/v3.1/region/${region}`;
        const response = await axios.get(url);
        this.state.countries = response.data;
        console.log(response.data);
        commit("newCountries", response.data);
      } catch (err) {
        console.log(err.message);
      }
    },
  },
  getters: {
    updateError(state) {
      return (state.error = true);
    },
  },
});

// const store = createStore({
//   state() {
//     return {
//       enteredValue: "",
//       countries: [],
//       errorMsg: "",
//       error: false,
//     };
//   },
//   mutations: {
//       async inputValue(state, country) {
//           state.enteredValue = country.value;
//       try {
//         const url = `https://restcountries.com/v3.1/name/${country}`;
//         const response = await axios.get(url);
//         this.countries = response.data;

//         if (country.ok === 404) {
//           alert("Enter a valid country");
//         }

//         console.log(this.countries);
//       } catch (err) {
//         this.state.error = true;
//         this.state.errorMsg = err.message;
//         console.log(this.errorMsg);
//       }
//     },
//     updateState(state, message) {
//       state.enteredValue = message.value;
//     },
//   },
// });

const app = createApp(App);
app.use(store);
app.mount("#app");
